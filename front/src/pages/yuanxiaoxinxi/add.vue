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
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="院校代码" prop="yuanxiaodaima">
            <el-input v-model.number="ruleForm.yuanxiaodaima" 
                placeholder="院校代码" clearable :disabled=" false  ||ro.yuanxiaodaima"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="院校名称" prop="yuanxiaomingcheng">
            <el-input v-model="ruleForm.yuanxiaomingcheng" 
                placeholder="院校名称" clearable :disabled=" false  ||ro.yuanxiaomingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="院校图片" v-if="type!='cross' || (type=='cross' && !ro.yuanxiaotupian)" prop="yuanxiaotupian">
            <file-upload
            tip="点击上传院校图片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.yuanxiaotupian?ruleForm.yuanxiaotupian:''"
            @change="yuanxiaotupianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' class="upload" v-else label="院校图片" prop="yuanxiaotupian">
                <img v-if="ruleForm.yuanxiaotupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.yuanxiaotupian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.yuanxiaotupian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="地区" prop="diqu">
            <el-input v-model="ruleForm.diqu" 
                placeholder="地区" clearable :disabled=" false  ||ro.diqu"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="年份" prop="nianfen">
            <el-input v-model="ruleForm.nianfen" 
                placeholder="年份" clearable :disabled=" false  ||ro.nianfen"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="招生地区" prop="zhaoshengdiqu">
            <el-input v-model="ruleForm.zhaoshengdiqu" 
                placeholder="招生地区" clearable :disabled=" false  ||ro.zhaoshengdiqu"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="专业名称" prop="zhuanyemingcheng">
            <el-input v-model="ruleForm.zhuanyemingcheng" 
                placeholder="专业名称" clearable :disabled=" false  ||ro.zhuanyemingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="科类" prop="kelei">
            <el-input v-model="ruleForm.kelei" 
                placeholder="科类" clearable :disabled=" false  ||ro.kelei"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="省控线" prop="shengkongxian">
            <el-input v-model.number="ruleForm.shengkongxian" 
                placeholder="省控线" clearable :disabled=" false  ||ro.shengkongxian"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="录取分数线" prop="luqufenshuxian">
            <el-input v-model.number="ruleForm.luqufenshuxian" 
                placeholder="录取分数线" clearable :disabled=" false  ||ro.luqufenshuxian"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="最低录取位" prop="zuidiluquwei">
            <el-input v-model.number="ruleForm.zuidiluquwei" 
                placeholder="最低录取位" clearable :disabled=" false  ||ro.zuidiluquwei"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="招收人数" prop="zhaoshourenshu">
            <el-input v-model.number="ruleForm.zhaoshourenshu" 
                placeholder="招收人数" clearable :disabled=" false  ||ro.zhaoshourenshu"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="专业介绍" prop="zhuanyejieshao">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="专业介绍"
              v-model="ruleForm.zhuanyejieshao">
            </el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"none"}' label="院校简介" prop="yuanxiaojianjie">
            <editor 
                :style='{"padding":"0","boxShadow":"none","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"500px","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.yuanxiaojianjie" 
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
				yuanxiaodaima : false,
				yuanxiaomingcheng : false,
				yuanxiaotupian : false,
				diqu : false,
				nianfen : false,
				zhaoshengdiqu : false,
				zhuanyemingcheng : false,
				kelei : false,
				shengkongxian : false,
				luqufenshuxian : false,
				zuidiluquwei : false,
				zhaoshourenshu : false,
				zhuanyejieshao : false,
				yuanxiaojianjie : false,
				clicktime : false,
				clicknum : false,
				storeupnum : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          yuanxiaodaima: '',
          yuanxiaomingcheng: '',
          yuanxiaotupian: '',
          diqu: '',
          nianfen: '',
          zhaoshengdiqu: '',
          zhuanyemingcheng: '',
          kelei: '',
          shengkongxian: '',
          luqufenshuxian: '',
          zuidiluquwei: '',
          zhaoshourenshu: '',
          zhuanyejieshao: '',
          yuanxiaojianjie: '',
          clicktime: '',
          clicknum: '',
          storeupnum: '',
        },


        rules: {
          yuanxiaodaima: [
            { required: true, message: '院校代码不能为空', trigger: 'blur' },
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          yuanxiaomingcheng: [
            { required: true, message: '院校名称不能为空', trigger: 'blur' },
          ],
          yuanxiaotupian: [
          ],
          diqu: [
            { required: true, message: '地区不能为空', trigger: 'blur' },
          ],
          nianfen: [
          ],
          zhaoshengdiqu: [
            { required: true, message: '招生地区不能为空', trigger: 'blur' },
          ],
          zhuanyemingcheng: [
            { required: true, message: '专业名称不能为空', trigger: 'blur' },
          ],
          kelei: [
          ],
          shengkongxian: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          luqufenshuxian: [
            { required: true, message: '录取分数线不能为空', trigger: 'blur' },
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          zuidiluquwei: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          zhaoshourenshu: [
            { required: true, message: '招收人数不能为空', trigger: 'blur' },
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          zhuanyejieshao: [
          ],
          yuanxiaojianjie: [
          ],
          clicktime: [
          ],
          clicknum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          storeupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
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
            if(o=='yuanxiaodaima'){
              this.ruleForm.yuanxiaodaima = obj[o];
              this.ro.yuanxiaodaima = true;
              continue;
            }
            if(o=='yuanxiaomingcheng'){
              this.ruleForm.yuanxiaomingcheng = obj[o];
              this.ro.yuanxiaomingcheng = true;
              continue;
            }
            if(o=='yuanxiaotupian'){
              this.ruleForm.yuanxiaotupian = obj[o].split(",")[0];
              this.ro.yuanxiaotupian = true;
              continue;
            }
            if(o=='diqu'){
              this.ruleForm.diqu = obj[o];
              this.ro.diqu = true;
              continue;
            }
            if(o=='nianfen'){
              this.ruleForm.nianfen = obj[o];
              this.ro.nianfen = true;
              continue;
            }
            if(o=='zhaoshengdiqu'){
              this.ruleForm.zhaoshengdiqu = obj[o];
              this.ro.zhaoshengdiqu = true;
              continue;
            }
            if(o=='zhuanyemingcheng'){
              this.ruleForm.zhuanyemingcheng = obj[o];
              this.ro.zhuanyemingcheng = true;
              continue;
            }
            if(o=='kelei'){
              this.ruleForm.kelei = obj[o];
              this.ro.kelei = true;
              continue;
            }
            if(o=='shengkongxian'){
              this.ruleForm.shengkongxian = obj[o];
              this.ro.shengkongxian = true;
              continue;
            }
            if(o=='luqufenshuxian'){
              this.ruleForm.luqufenshuxian = obj[o];
              this.ro.luqufenshuxian = true;
              continue;
            }
            if(o=='zuidiluquwei'){
              this.ruleForm.zuidiluquwei = obj[o];
              this.ro.zuidiluquwei = true;
              continue;
            }
            if(o=='zhaoshourenshu'){
              this.ruleForm.zhaoshourenshu = obj[o];
              this.ro.zhaoshourenshu = true;
              continue;
            }
            if(o=='zhuanyejieshao'){
              this.ruleForm.zhuanyejieshao = obj[o];
              this.ro.zhuanyejieshao = true;
              continue;
            }
            if(o=='yuanxiaojianjie'){
              this.ruleForm.yuanxiaojianjie = obj[o];
              this.ro.yuanxiaojianjie = true;
              continue;
            }
            if(o=='clicktime'){
              this.ruleForm.clicktime = obj[o];
              this.ro.clicktime = true;
              continue;
            }
            if(o=='clicknum'){
              this.ruleForm.clicknum = obj[o];
              this.ro.clicknum = true;
              continue;
            }
            if(o=='storeupnum'){
              this.ruleForm.storeupnum = obj[o];
              this.ro.storeupnum = true;
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
        this.$http.get(`yuanxiaoxinxi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

			if((this.ruleForm.yuanxiaodaima).toString().length<5){
                this.$message.error('院校代码长度不能小于5');
                return
			}
			if((this.ruleForm.yuanxiaodaima).toString().length>5){
                this.$message.error('院校代码长度不能大于5');
                return
			}
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
						this.$http.get('yuanxiaoxinxi/list', {
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


								this.$http.post(`yuanxiaoxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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


						this.$http.post(`yuanxiaoxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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
      yuanxiaotupianUploadChange(fileUrls) {
          this.ruleForm.yuanxiaotupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
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
