<template>
  <div class="main-content" :style='{"padding":"30px","margin":" 0 0 30px","background":"rgba(0,0,0,0.5)"}'>
    <!-- 列表页 -->
    <template v-if="!showFlag">
      <el-form :style='{"margin":"0 0 20px"}' :inline="true" :model="searchForm" class="center-form-pv">
        <el-row :style='{"display":"block"}'>
			<div :style='{"margin":"0 10px 0 0","display":"inline-block"}'>
			  <label :style='{"margin":"0 10px 0 0","color":"#fff","display":"inline-block","lineHeight":"40px","fontSize":"14px","fontWeight":"500","height":"40px"}' class="item-label">往届试题</label>
			  <el-input v-model="searchForm.papername" placeholder="往届试题名称" clearable></el-input>
			</div>
			<el-button class="search" :style='{"border":"1px rgba(0,0,0,0.4) solid","cursor":"pointer","padding":"0 24px","outline":"none","color":"#fff","borderRadius":"4px","background":"rgba(0,0,0,0.4)","width":"auto","fontSize":"14px","height":"40px"}' type="success" @click="search()">
				<span class="icon iconfont icon-xihuan" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
				查询
			</el-button>
		</el-row>
        <el-row class="actions" :style='{"flexWrap":"wrap","margin":"20px 0","display":"flex"}'>
          <download-excel v-if="isAuth('examrecord','导出')" class = "export-excel-wrapper" :data = "dataList" :fields = "json_fields" name = "考试记录.xls">
			<!-- 导出excel -->
			<el-button class="btn18" type="success">
				<span class="icon iconfont icon-xihuan" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
				导出
			</el-button>
          </download-excel>
		  <el-button class="btn18" v-if="isAuth('examrecord','打印')" type="success" @click="printJson">
		  	<span class="icon iconfont icon-xihuan" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
		  	打印
		  </el-button>
        </el-row>
      </el-form>

	<div :style='{"width":"100%","padding":"10px"}'>
        <el-table
		  :stripe='false'
		  :style='{"width":"100%","padding":"0","borderColor":"#000","borderStyle":"solid","borderWidth":"1px 0 0 1px","background":"none"}'
          :data="dataList"
          :border='true'
          v-loading="dataListLoading"
          @selection-change="selectionChangeHandler"
          style="width: 100%;"
        >
          <el-table-column :resizable='true' :sortable='false' prop="username" header-align="center" align="center" sortable label="姓名"></el-table-column>
          <el-table-column
		    :resizable='true' :sortable='false'
            prop="papername"
            header-align="center"
            align="center"
            sortable
            label="往届试题"
          ></el-table-column>
          <el-table-column
		    :resizable='true' :sortable='false'
            prop="myscore"
            header-align="center"
            align="center"
            sortable
            label="考试得分"
          >
            <template slot-scope="scope">
              <el-tag v-if="scope.row.myscore==0&&scope.row.ismark==0" type="danger">{{scope.row.myscore}}</el-tag>
              <el-tag v-else-if="scope.row.myscore>0&&scope.row.ismark==0" type="success">{{scope.row.myscore}}</el-tag>
              <el-tag v-else-if="scope.row.ismark>0" type="warning">批阅中</el-tag>
            </template>
          </el-table-column>
		  <el-table-column
		    :resizable='true' :sortable='false'
		    prop="accuracy"
		    header-align="center"
		    align="center"
		    sortable
		    label="准确率"
		  >
		    <template slot-scope="scope">
		      <el-tag type="success" v-if="scope.row.ismark==0">{{(scope.row.accuracy * 100).toFixed(0)}}%</el-tag>
			  <el-tag type="warning" v-if="scope.row.ismark>0">/</el-tag>
		    </template>
		  </el-table-column>
		  <el-table-column
		    :resizable='true' :sortable='false'
		    prop="accuracy"
		    header-align="center"
		    align="center"
		    sortable
		    label="错误率"
		  >
		    <template slot-scope="scope">
		      <el-tag type="danger" v-if="scope.row.ismark==0">{{((1 - Number(scope.row.accuracy)) * 100).toFixed(0)}}%</el-tag>
			  <el-tag type="warning" v-if="scope.row.ismark>0">/</el-tag>
		    </template>
		  </el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            width="150"
            label="操作"
          >
            <template slot-scope="scope">
			  <el-button class="view" :style='{"border":"1px solid rgba(0, 0, 0, 0.5)","cursor":"pointer","padding":"0 10px","margin":"0 10px 10px 0","outline":"none","color":"#fff","borderRadius":"4px","background":" rgba(0, 0, 0, 0.5)","width":"auto","fontSize":"14px","height":"32px"}' type="success" @click="addOrUpdateHandler(scope.row)">
			  	<span class="icon iconfont icon-xihuan" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
			  	查看
			  </el-button>
			  <el-button class="edit" :style='{"border":"1px solid rgba(0, 0, 0, 0.5)","cursor":"pointer","padding":"0 10px","margin":"0 10px 10px 0","outline":"none","color":"#fff","borderRadius":"4px","background":"rgba(0, 0, 0, 0.5)","width":"auto","fontSize":"14px","height":"32px"}' v-if="isAuth('examrecord','批卷')&&scope.row.ismark>0" type="primary" @click="gradeClick(scope.row)">
			  	<span class="icon iconfont icon-xihuan" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
			  	批卷
			  </el-button>
            </template>
          </el-table-column>
        </el-table>
	</div>
        <el-pagination
          @size-change="sizeChangeHandle"
          @current-change="currentChangeHandle"
          :current-page="pageIndex"
          :page-sizes="[10, 50, 100, 200]"
          :page-size="pageSize"
          :total="totalPage"
          :layout="layouts.join()"
          prev-text="<"
          next-text=">"
          :hide-on-single-page="true"
          :style='{"width":"100%","padding":"0","margin":"20px 0 0","whiteSpace":"nowrap","color":"#fff","fontWeight":"500"}'
        ></el-pagination>
    </template>
    <add-or-update v-if="showFlag" :parent="this" ref="addOrUpdate"></add-or-update>
	<el-dialog title="批卷" :visible.sync="gradeVisible" fullscreen>
		<el-card v-for="(item,index) in gradeList" :key="index" style="width: 90%;margin: 10px auto">
			<div style="padding: 20px;box-sizing:border-box;border-bottom:1px solid #eee">
				{{index + 1}}、{{item.questionname}} （ {{item.score}} ）				<el-tag type="success" v-if="item.type==0">单选题</el-tag>
				<el-tag type="warning" v-if="item.type==1">多选题</el-tag>
				<el-tag type="info" v-if="item.type==2">判断题</el-tag>
				<el-tag type="primary" v-if="item.type==3">填空题</el-tag>
				<el-tag type="danger" v-if="item.type==4">主观题</el-tag>
			</div>
			<div style="padding: 10px;box-sizing:border-box">
				考生答案：{{item.myanswer}}
			</div>
			<div style="padding: 10px;box-sizing:border-box" v-if="item.type!=4">
				正确答案：{{item.answer}}
			</div>
			<div style="padding: 20px;box-sizing:border-box">
				解析：{{item.analysis}}
			</div>
			<div style="padding: 20px;box-sizing:border-box;display:flex;align-items:center" v-if="item.type==4">
				评分：<el-input-number v-model="item.myscore" :min="0" :max="100"></el-input-number>
			</div>
		</el-card>
		<span slot="footer" class="dialog-footer">
			<el-button @click="gradeVisible=false">取 消</el-button>
			<el-button type="primary" @click="gradeSave">确 定</el-button>
		</span>
	</el-dialog>
  </div>
</template>
<script>
import AddOrUpdate from "./add-or-update";
export default {
  data() {
    return {
	  layouts: ["total","prev","pager","next","sizes","jumper"],
      searchForm: {
        key: ""
      },
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      showFlag: false,
      //导出excel
        json_fields: {
        "姓名": "username",    //常规字段
        "试卷名称": "papername",    //常规字段
        "总分": "myscore",    //常规字段
        },
        json_meta: [
          [
            {
              " key ": " charset ",
              " value ": " utf- 8 "
            }
          ]
        ],
		gradeList:[],
		gradeVisible:false
    };
  },
  mounted() {
    this.init();
    this.getDataList();
  },
  components: {
    AddOrUpdate
  },
  methods: {
    init() {},
    search() {
      this.pageIndex = 1;
      this.getDataList();
    },
    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      var params = {
        page: this.pageIndex,
        limit: this.pageSize
      };
      if (this.searchForm.papername) {
        params["papername"] = `%${this.searchForm.papername}%`;
      }
      this.$http({
        url: this.$api.examrecordgroupby,
        method: "get",
        params: params
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.dataList = data.data.list;
          this.totalPage = data.data.total;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
        this.dataListLoading = false;
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandler(val) {
      this.dataListSelections = val;
    },
    addOrUpdateHandler(row) {
      this.showFlag = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(row);
      });
    },
    async printJson() {
      //通过getdata调用后台接口获取数据封装到res
      this.list = this.dataList;
      let data = []
      for (let i=0; i < this.list.length; i++) {
          data.push({
          username: this.list[i].username,
          papername: this.list[i].papername,
          myscore: this.list[i].myscore,
        })
      }
      printJS({
        printable: data,
        properties: [
      {
        field: 'username',
        displayName: '姓名',
        columnSize: 1
      },
      {
        field: 'papername',
        displayName: '试卷名称',
        columnSize: 1
      },
      {
        field: 'myscore',
        displayName: '总分',
        columnSize: 1
      },
        ],
        type: 'json',
        header: '考试记录',
        // 样式设置
        gridStyle: 'border: 2px solid #3971A5;',
        gridHeaderStyle: 'color: red;  border: 2px solid #3971A5;'
      })
    },
	// 批卷
	gradeClick(row) {
		this.$http({
			url: `${this.$api.examrecordpage}`,
			method: 'get',
			params: {
				page:1,
				limit: 100,
				paperid: row.paperid,
				userid: row.userid
			}
		}).then(({data})=>{
			if(data&&data.code==0){
				for(let x in data.data.list){
					if(data.data.list[x].type==4){
						data.data.list[x].myscore = 0
					}
				}
				this.gradeList = data.data.list
				this.gradeVisible = true
			}
		})
	},
	gradeSave(){
		for(let i in this.gradeList){
			this.updaterecord(this.gradeList[i])
		}
		this.$message({
			message: "批卷成功",
			type: "success",
			duration: 1500,
			onClose: () => {
				this.getDataList()
				this.gradeVisible = false
			}
		});
	},
	updaterecord(item){
		item.ismark = 1
		this.$http({
			url: `${this.$api.examrecordupdate}`,
			method: 'post',
			data: item
		}).then(({data})=>{})
	},
  }
};
</script>
<style lang="scss" scoped>
//导出excel
  .export-excel-wrapper{
    display: inline-block;
  }
.form-content {
	background: transparent;
}
.table-content {
	background: transparent;
}
	
	.center-form-pv {
		.el-input {
		  width: auto;
		}
	  .el-date-editor.el-input {
	    width: auto;
	  }
	}
	
	// form
	.center-form-pv .el-input /deep/ .el-input__inner {
				border-radius: 4px;
				padding: 0 12px;
				box-shadow: none;
				outline: none;
				background: #fff;
				width: 170px;
				font-size: 14px;
				border-color: #000;
				border-width: 3px 0 0 3px;
				height: 40px;
			}
	
	.center-form-pv .el-select /deep/ .el-input__inner {
				border: 0;
				border-radius: 4px;
				padding: 0 10px;
				box-shadow: none;
				outline: none;
				background: #fff;
				width: 170px;
				font-size: 14px;
				border-color: #000;
				border-width: 3px 0 0 3px;
				border-style: solid;
				height: 40px;
			}
	
	.center-form-pv .el-date-editor /deep/ .el-input__inner {
				border: 0;
				border-radius: 4px;
				padding: 0 10px 0 30px;
				box-shadow: none;
				outline: none;
				background: #fff;
				width: 170px;
				font-size: 14px;
				border-color: #000;
				border-width: 3px 0 0 3px;
				border-style: solid;
				height: 40px;
			}
	
	// table
	.el-table /deep/ .el-table__header-wrapper thead {
				color: #fff;
				background: none;
				font-weight: 500;
				width: 100%;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr {
				background: none;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th {
				padding: 12px 0;
				background: rgba(0,0,0,0.5);
				border-color: #000;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th .cell {
				padding: 0 5px;
				word-wrap: normal;
				white-space: normal;
				font-weight: bold;
				display: flex;
				vertical-align: middle;
				font-size: 13px;
				line-height: 24px;
				text-overflow: ellipsis;
				word-break: break-all;
				width: 100%;
				align-items: center;
				position: relative;
			}
	
	
	.el-table /deep/ .el-table__body-wrapper tbody {
				background: nonr;
				width: 100%;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr {
				background: none;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 6px 0;
				color: #fff;
				background: rgba(0,0,0,0.5);
				border-color: #000;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: left;
			}
	
		
	.el-table /deep/ .el-table__body-wrapper tbody tr:hover td {
				padding: 6px 0;
				color: #000;
				background: rgba(225,225,225,0.5);
				border-color: #000;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 6px 0;
				color: #fff;
				background: rgba(0,0,0,0.5);
				border-color: #000;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .cell {
				padding: 0 5px;
				overflow: hidden;
				word-break: break-all;
				white-space: normal;
				font-size: 13px;
				line-height: 24px;
				text-overflow: ellipsis;
			}
	
	// pagination
	.main-content .el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: #fff;
				background: rgba(0,0,0,0.5);
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #fff;
				background: rgba(0,0,0,0.5);
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: rgba(0,0,0,0.5);
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: rgba(0,0,0,0.5);
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: rgba(0,0,0,0.5);
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #409EFF;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #f4f4f5;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				padding: 0 4px;
				margin: 0 5px;
				color: #FFF;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #409EFF;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes {
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				width: 100px;
				position: relative;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: none;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: #fff;
				display: inline-block;
				font-size: 13px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: rgba(0,0,0,0.5);
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #C0C4CC;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				display: inline-block;
				width: 50px;
				font-size: 14px;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: none;
				cursor: pointer;
				padding: 0 3px;
				color: #fff;
				display: inline-block;
				font-size: 14px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: rgba(0,0,0,0.5);
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.center-form-pv .search {
				border: 1px rgba(0,0,0,0.4) solid;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				outline: none;
				color: #fff;
				background: rgba(0,0,0,0.4);
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.center-form-pv .search:hover {
				opacity: 0.8;
			}
	
	.center-form-pv .actions .btn18 {
				border: 1px solid  rgba(0, 0, 0, 0.5);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: rgba(0, 0, 0, 0.5);
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.center-form-pv .actions .btn18:hover {
				opacity: 0.8;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .view {
				border: 1px solid rgba(0, 0, 0, 0.5);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 10px;
				margin: 0 10px 10px 0;
				outline: none;
				color: #fff;
				background:  rgba(0, 0, 0, 0.5);
				width: auto;
				font-size: 14px;
				height: 32px;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .view:hover {
				opacity: 0.8;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .edit {
				border: 1px solid rgba(0, 0, 0, 0.5);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 10px;
				margin: 0 10px 10px 0;
				outline: none;
				color: #fff;
				background: rgba(0, 0, 0, 0.5);
				width: auto;
				font-size: 14px;
				height: 32px;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .edit:hover {
				opacity: 0.8;
			}
	// list one
	.one .list1-view {
				border: 0;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 15px;
				margin: 0;
				outline: none;
				color: #fff;
				background: rgb(103, 194, 58);
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.one .list1-view:hover {
				opacity: 0.8;
			}
</style>
