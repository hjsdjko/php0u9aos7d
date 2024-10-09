<template>
<div :style='{"width":"80%","padding":"20px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3)","margin":"10px auto","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"width":"100%","position":"relative","flexWrap":"wrap","display":"flex"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="标题" prop="biaoti">
            <el-input v-model="ruleForm.biaoti" 
                placeholder="标题" clearable :disabled=" false  ||ro.biaoti"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="封面图片" v-if="type!='cross' || (type=='cross' && !ro.fengmiantupian)" prop="fengmiantupian">
            <file-upload
            tip="点击上传封面图片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.fengmiantupian?ruleForm.fengmiantupian:''"
            @change="fengmiantupianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' class="upload" v-else label="封面图片" prop="fengmiantupian">
                <img v-if="ruleForm.fengmiantupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.fengmiantupian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.fengmiantupian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="地区" prop="diqu">
            <el-input v-model="ruleForm.diqu" 
                placeholder="地区" clearable :disabled=" false  ||ro.diqu"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="发布时间" prop="fabushijian">
              <el-date-picker
				  :disabled=" false  ||ro.fabushijian"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.fabushijian" 
                  type="date"
                  placeholder="发布时间">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="目标人群" prop="mubiaorenqun">
            <el-input v-model="ruleForm.mubiaorenqun" 
                placeholder="目标人群" clearable :disabled=" false  ||ro.mubiaorenqun"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="开始时间" prop="kaishishijian">
              <el-date-picker
				  :disabled=" false  ||ro.kaishishijian"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.kaishishijian" 
                  type="datetime"
                  placeholder="开始时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="结束时间" prop="jieshushijian">
              <el-date-picker
				  :disabled=" false  ||ro.jieshushijian"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.jieshushijian" 
                  type="datetime"
                  placeholder="结束时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="考研须知" prop="kaoyanxuzhi">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="考研须知"
              v-model="ruleForm.kaoyanxuzhi">
            </el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="政策内容" prop="zhengceneirong">
            <editor 
                :style='{"padding":"0","boxShadow":"none","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"500px","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.zhengceneirong" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#3B2E7E","width":"auto","lineHeight":"30px","fontSize":"14px","height":"30px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0","outline":"none","color":"#000","borderRadius":"4px","background":"#9E9E9E","width":"auto","lineHeight":"30px","fontSize":"14px","height":"30px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				biaoti : false,
				fengmiantupian : false,
				zhengceneirong : false,
				kaoyanxuzhi : false,
				diqu : false,
				fabushijian : false,
				mubiaorenqun : false,
				kaishishijian : false,
				jieshushijian : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          biaoti: '',
          fengmiantupian: '',
          zhengceneirong: '',
          kaoyanxuzhi: '',
          diqu: '',
          fabushijian: '',
          mubiaorenqun: '',
          kaishishijian: '',
          jieshushijian: '',
        },


        rules: {
          biaoti: [
          ],
          fengmiantupian: [
          ],
          zhengceneirong: [
          ],
          kaoyanxuzhi: [
          ],
          diqu: [
          ],
          fabushijian: [
          ],
          mubiaorenqun: [
          ],
          kaishishijian: [
          ],
          jieshushijian: [
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.fabushijian = this.getCurDate()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='biaoti'){
              this.ruleForm.biaoti = obj[o];
              this.ro.biaoti = true;
              continue;
            }
            if(o=='fengmiantupian'){
              this.ruleForm.fengmiantupian = obj[o].split(",")[0];
              this.ro.fengmiantupian = true;
              continue;
            }
            if(o=='zhengceneirong'){
              this.ruleForm.zhengceneirong = obj[o];
              this.ro.zhengceneirong = true;
              continue;
            }
            if(o=='kaoyanxuzhi'){
              this.ruleForm.kaoyanxuzhi = obj[o];
              this.ro.kaoyanxuzhi = true;
              continue;
            }
            if(o=='diqu'){
              this.ruleForm.diqu = obj[o];
              this.ro.diqu = true;
              continue;
            }
            if(o=='fabushijian'){
              this.ruleForm.fabushijian = obj[o];
              this.ro.fabushijian = true;
              continue;
            }
            if(o=='mubiaorenqun'){
              this.ruleForm.mubiaorenqun = obj[o];
              this.ro.mubiaorenqun = true;
              continue;
            }
            if(o=='kaishishijian'){
              this.ruleForm.kaishishijian = obj[o];
              this.ro.kaishishijian = true;
              continue;
            }
            if(o=='jieshushijian'){
              this.ruleForm.jieshushijian = obj[o];
              this.ro.jieshushijian = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`kaoyanzhengce/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('kaoyanzhengce/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`kaoyanzhengce/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`kaoyanzhengce/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
							}
						});
					}
				}
			});
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		// 返回
		back() {
			this.$router.go(-1);
		},
      fengmiantupianUploadChange(fileUrls) {
          this.ruleForm.fengmiantupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #DADADA;
	  border-radius: 0;
	  padding: 0 12px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  border: 1px solid #DADADA;
	  border-radius: 0;
	  padding: 0 12px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #DADADA;
	  border-radius: 0;
	  padding: 0 10px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #DADADA;
	  border-radius: 0;
	  padding: 0 10px 0 30px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px solid #DADADA;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #DADADA;
	  width: 200px;
	  font-size: 32px;
	  line-height: 60px;
	  text-align: center;
	  height: 60px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #DADADA;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #DADADA;
	  width: 200px;
	  font-size: 32px;
	  line-height: 60px;
	  text-align: center;
	  height: 60px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #DADADA;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #DADADA;
	  width: 200px;
	  font-size: 32px;
	  line-height: 60px;
	  text-align: center;
	  height: 60px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #DADADA;
	  border-radius: 0;
	  padding: 12px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
