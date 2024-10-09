<template>
	<div class="addEdit-block" :style='{"width":"100%","padding":"30px","margin":"0","background":"rgba(0,0,0,0.5)"}'>
		<el-form
			:style='{"padding":"30px","boxShadow":"none","borderRadius":"6px","alignItems":"flex-start","flexWrap":"wrap","display":"flex"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="180px"
		>
			<template >
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="院校代码" prop="yuanxiaodaima">
					<el-input v-model.number="ruleForm.yuanxiaodaima" placeholder="院校代码" clearable  :readonly="ro.yuanxiaodaima"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-else class="input" label="院校代码" prop="yuanxiaodaima">
					<el-input v-model="ruleForm.yuanxiaodaima" placeholder="院校代码" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="院校名称" prop="yuanxiaomingcheng">
					<el-input v-model="ruleForm.yuanxiaomingcheng" placeholder="院校名称" clearable  :readonly="ro.yuanxiaomingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-else class="input" label="院校名称" prop="yuanxiaomingcheng">
					<el-input v-model="ruleForm.yuanxiaomingcheng" placeholder="院校名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="upload" v-if="type!='info' && !ro.yuanxiaotupian" label="院校图片" prop="yuanxiaotupian">
					<file-upload
						tip="点击上传院校图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.yuanxiaotupian?ruleForm.yuanxiaotupian:''"
						@change="yuanxiaotupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="upload" v-else-if="ruleForm.yuanxiaotupian" label="院校图片" prop="yuanxiaotupian">
					<img v-if="ruleForm.yuanxiaotupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.yuanxiaotupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.yuanxiaotupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="地区" prop="diqu">
					<el-input v-model="ruleForm.diqu" placeholder="地区" clearable  :readonly="ro.diqu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-else class="input" label="地区" prop="diqu">
					<el-input v-model="ruleForm.diqu" placeholder="地区" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="年份" prop="nianfen">
					<el-input v-model="ruleForm.nianfen" placeholder="年份" clearable  :readonly="ro.nianfen"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-else class="input" label="年份" prop="nianfen">
					<el-input v-model="ruleForm.nianfen" placeholder="年份" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="招生地区" prop="zhaoshengdiqu">
					<el-input v-model="ruleForm.zhaoshengdiqu" placeholder="招生地区" clearable  :readonly="ro.zhaoshengdiqu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-else class="input" label="招生地区" prop="zhaoshengdiqu">
					<el-input v-model="ruleForm.zhaoshengdiqu" placeholder="招生地区" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="专业名称" prop="zhuanyemingcheng">
					<el-input v-model="ruleForm.zhuanyemingcheng" placeholder="专业名称" clearable  :readonly="ro.zhuanyemingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-else class="input" label="专业名称" prop="zhuanyemingcheng">
					<el-input v-model="ruleForm.zhuanyemingcheng" placeholder="专业名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="科类" prop="kelei">
					<el-input v-model="ruleForm.kelei" placeholder="科类" clearable  :readonly="ro.kelei"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-else class="input" label="科类" prop="kelei">
					<el-input v-model="ruleForm.kelei" placeholder="科类" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="省控线" prop="shengkongxian">
					<el-input v-model.number="ruleForm.shengkongxian" placeholder="省控线" clearable  :readonly="ro.shengkongxian"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-else class="input" label="省控线" prop="shengkongxian">
					<el-input v-model="ruleForm.shengkongxian" placeholder="省控线" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="录取分数线" prop="luqufenshuxian">
					<el-input v-model.number="ruleForm.luqufenshuxian" placeholder="录取分数线" clearable  :readonly="ro.luqufenshuxian"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-else class="input" label="录取分数线" prop="luqufenshuxian">
					<el-input v-model="ruleForm.luqufenshuxian" placeholder="录取分数线" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="最低录取位" prop="zuidiluquwei">
					<el-input v-model.number="ruleForm.zuidiluquwei" placeholder="最低录取位" clearable  :readonly="ro.zuidiluquwei"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-else class="input" label="最低录取位" prop="zuidiluquwei">
					<el-input v-model="ruleForm.zuidiluquwei" placeholder="最低录取位" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="招收人数" prop="zhaoshourenshu">
					<el-input v-model.number="ruleForm.zhaoshourenshu" placeholder="招收人数" clearable  :readonly="ro.zhaoshourenshu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-else class="input" label="招收人数" prop="zhaoshourenshu">
					<el-input v-model="ruleForm.zhaoshourenshu" placeholder="招收人数" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' class="textarea" v-if="type!='info'" label="专业介绍" prop="zhuanyejieshao">
					<el-input
					  style="min-width: 200px; max-width: 600px;"
					  type="textarea"
					  :rows="8"
					  placeholder="专业介绍"
					  v-model="ruleForm.zhuanyejieshao" >
					</el-input>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-else-if="ruleForm.zhuanyejieshao" label="专业介绍" prop="zhuanyejieshao">
					<span :style='{"border":"1px solid rgba(0,0,0,0.3)","padding":"0 10px","boxShadow":"0 0 6px rgba(0,0,0,0.3)","borderRadius":"4px","color":"#fff","background":"rgba(0,0,0,0.4)","display":"inline-block","fontSize":"14px","lineHeight":"40px","fontWeight":"500"}'>{{ruleForm.zhuanyejieshao}}</span>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-if="type!='info'"  label="院校简介" prop="yuanxiaojianjie">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.yuanxiaojianjie" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"49%","margin":"0 0 20px 0"}' v-else-if="ruleForm.yuanxiaojianjie" label="院校简介" prop="yuanxiaojianjie">
                    <span :style='{"border":"1px solid rgba(0,0,0,0.3)","padding":"0 10px","boxShadow":"0 0 6px rgba(0,0,0,0.3)","borderRadius":"4px","color":"#fff","background":"rgba(0,0,0,0.4)","display":"inline-block","fontSize":"14px","lineHeight":"40px","fontWeight":"500"}' v-html="ruleForm.yuanxiaojianjie"></span>
                </el-form-item>
			<el-form-item :style='{"padding":"0","margin":"0"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-xihuan" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
					提交
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-xihuan" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-xihuan" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
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
			},
		

			
			rules: {
				yuanxiaodaima: [
					{ required: true, message: '院校代码不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
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
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				luqufenshuxian: [
					{ required: true, message: '录取分数线不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				zuidiluquwei: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				zhaoshourenshu: [
					{ required: true, message: '招收人数不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				zhuanyejieshao: [
				],
				yuanxiaojianjie: [
				],
				clicktime: [
				],
				clicknum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				storeupnum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
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
							this.ruleForm.yuanxiaotupian = obj[o];
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
				

















			}
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `yuanxiaoxinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.yuanxiaojianjie = this.ruleForm.yuanxiaojianjie.replace(reg,'../../../php0u9aos7d/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
      if(((this.ruleForm.yuanxiaodaima).toString().length<5)){
        this.$message.error(`院校代码长度不能小于5`);
        return
      }
      if(((this.ruleForm.yuanxiaodaima).toString().length>5)){
        this.$message.error(`院校代码长度不能大于5`);
        return
      }



	if(this.ruleForm.yuanxiaotupian!=null) {
		this.ruleForm.yuanxiaotupian = this.ruleForm.yuanxiaotupian.replace(new RegExp(this.$base.url,"g"),"");
	}















var objcross = this.$storage.getObj('crossObj');
      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
		this.$refs["ruleForm"].validate(valid => {
			if (valid) {
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid = crossuserid;
					this.ruleForm.crossrefid = crossrefid;
					let params = { 
						page: 1, 
						limit: 10, 
						crossuserid:this.ruleForm.crossuserid,
						crossrefid:this.ruleForm.crossrefid,
					} 
				this.$http({ 
					url: "yuanxiaoxinxi/page", 
					method: "get", 
					params: params 
				}).then(({ 
					data 
				}) => { 
					if (data && data.code === 0) { 
						if(data.data.total>=crossoptnum) {
							this.$message.error(this.$storage.get('tips'));
							return false;
						} else {
							this.$http({
								url: `yuanxiaoxinxi/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.yuanxiaoxinxiCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
								} else {
									this.$message.error(data.msg);
								}
							});

						}
					} else { 
				} 
			});
		} else {
			this.$http({
				url: `yuanxiaoxinxi/${!this.ruleForm.id ? "save" : "update"}`,
				method: "post",
			   data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.parent.showFlag = true;
							this.parent.addOrUpdateFlag = false;
							this.parent.yuanxiaoxinxiCrossAddOrUpdateFlag = false;
							this.parent.search();
							this.parent.contentStyleChange();
						}
					});
				} else {
					this.$message.error(data.msg);
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
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.yuanxiaoxinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    yuanxiaotupianUploadChange(fileUrls) {
	    this.ruleForm.yuanxiaotupian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #fff;
	  	  font-weight: 500;
	  	  width: 180px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 180px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 1px solid rgba(0,0,0,0.3);
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 6px rgba(0,0,0,0.3);
	  	  background: #fff;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  	  border: 1px solid rgba(0,0,0,0.3);
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 6px rgba(0,0,0,0.3);
	  	  background: #fff;
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
	  	  border: 0;
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 6px rgba(0,0,0,0.3);
	  	  outline: none;
	  	  color: #000;
	  	  background: #fff;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 0;
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 6px rgba(0,0,0,0.3);
	  	  outline: none;
	  	  background: #fff;
	  	  width: 200px;
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
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  box-shadow: 0 0 6px rgba(0,0,0,0.3);
	  	  background: #fff;
	  	  width: 120px;
	  	  font-size: 32px;
	  	  line-height: 80px;
	  	  text-align: center;
	  	  height: 80px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  box-shadow: 0 0 6px rgba(0,0,0,0.3);
	  	  background: #fff;
	  	  width: 120px;
	  	  font-size: 32px;
	  	  line-height: 80px;
	  	  text-align: center;
	  	  height: 80px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  box-shadow: 0 0 6px rgba(0,0,0,0.3);
	  	  background: #fff;
	  	  width: 120px;
	  	  font-size: 32px;
	  	  line-height: 80px;
	  	  text-align: center;
	  	  height: 80px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 0;
	  	  border-radius: 4px;
	  	  padding: 12px;
	  	  box-shadow: 0 0 6px rgba(0,0,0,0.3);
	  	  outline: none;
	  	  background: #fff;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
	
	.add-update-preview .btn .btn1 {
				border: 1px solid  rgba(0,0,0,0.3);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				margin: 4px;
				outline: none;
				color: #fff;
				background:  rgba(0,0,0,0.3);
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn1:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn2 {
				border: 1px solid  rgba(0,0,0,0.3);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				margin: 4px;
				outline: none;
				color: #fff;
				background:  rgba(0,0,0,0.3);
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn2:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn3 {
				border: 1px solid  rgba(0,0,0,0.3);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				margin: 4px;
				outline: none;
				color: #fff;
				background:  rgba(0,0,0,0.3);
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn3:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn4 {
				border: 1px solid  rgba(0,0,0,0.3);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				margin: 4px;
				outline: none;
				color: #fff;
				background:  rgba(0,0,0,0.3);
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn4:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn5 {
				border: 1px solid  rgba(0,0,0,0.3);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				margin: 4px;
				outline: none;
				color: #fff;
				background:  rgba(0,0,0,0.3);
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn5:hover {
				opacity: 0.8;
			}
</style>
