<template>
<div class="home-preview" :style='{"width":"100%","margin":"0 auto","flexDirection":"column","display":"flex"}'>



		<!-- 关于我们 -->
		<div id="about" class="animate__animated" :style='{"padding":"230px 10% 90px","boxShadow":"0 1px 6px rgba(255, 255, 255, .3)","margin":"0 0 0","flexDirection":"column","display":"flex","background":"url(http://codegen.caihongy.cn/20231129/83c8ca5d2498415caf190ae018a18bd1.png)","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","position":"relative","backgroundRepeat":"no-repeat","height":"auto","order":"3"}'>
		  <div :style='{"margin":"0 0 30px","color":"#fff","textAlign":"center","background":"#3B2E7E","width":"300px","lineHeight":"60px","fontSize":"26px"}'>{{aboutUsDetail.title}}</div>
		  <div :style='{"margin":"0 0 10px","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"20px"}'>{{aboutUsDetail.subtitle}}</div>
		  <div :style='{"padding":"0 10px","top":"60px","flexWrap":"wrap","background":"#3B2E7E","display":"flex","width":"280px","position":"absolute","right":"10%","height":"360px"}'>
		    <img :style='{"margin":"0","objectFit":"cover","top":"32px","left":"-160px","display":"block","width":"376px","position":"absolute","height":"520px"}' :src="baseUrl + aboutUsDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
		  </div>
		  <div :style='{"padding":"0","margin":"0 0 0 0","overflow":"hidden","color":"#000","display":"-webkit-box","width":"55%","lineHeight":"2.1","fontSize":"16px","-webkit-box-orient":"vertical","-webkit-line-clamp":"9","height":"300px"}' v-html="aboutUsDetail.content"></div>
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"80px","lineHeight":"32px"}' @click="toDetail('aboutusDetail',aboutUsDetail)">
		    <span :style='{"color":"#f5f5f5","fontSize":"12px"}'>更多</span>
		    <span class="icon iconfont icon-gengduo1" :style='{"color":"#f5f5f5","fontSize":"12px"}'></span>
		  </div>
		</div>
		<!-- 关于我们 -->

		<!-- 系统简介 -->
		<div id="system" class="animate__animated" :style='{"padding":"200px 10%","boxShadow":"none","margin":"0 0 0","alignItems":"center","display":"flex","justifyContent":"flex-start","background":"url(http://codegen.caihongy.cn/20231129/6d333914c39641f49f384877d02a5f06.png)","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"auto","order":"2"}'>
		  <div :style='{"width":"30%","lineHeight":"1.5","fontSize":"32px","color":"#fff","textAlign":"left"}'>{{systemIntroductionDetail.title}}</div>
		  <div :style='{"margin":"0 0 10px","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"20px"}'>{{systemIntroductionDetail.subtitle}}</div>
		  <div :style='{"width":"100%","padding":"0 10px","flexWrap":"wrap","display":"none","height":"auto"}'>
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"block","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"block","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"block","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
		  </div>
		  <div :style='{"minHeight":"200px","padding":"60px 40px 0","margin":"0 0 10px 0","overflow":"hidden","color":"#fff","maxHeight":"400px","display":"-webkit-box","width":"40%","lineHeight":"1.8","fontSize":"16px","-webkit-box-orient":"vertical","-webkit-line-clamp":"12"}' v-html="systemIntroductionDetail.content"></div>
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"80px","lineHeight":"32px"}' @click="toDetail('systemintroDetail',systemIntroductionDetail)">
		    <span :style='{"color":"#f5f5f5","fontSize":"12px"}'>更多</span>
		    <span class="icon iconfont icon-gengduo1" :style='{"color":"#f5f5f5","fontSize":"12px"}'></span>
		  </div>
		</div>
		<!-- 系统简介 -->
		


<!-- 商品推荐 -->
<div id="animate_recommendyuanxiaoxinxi" class="recommend animate__animated" :style='{"padding":"0 10%","margin":"0 0 0","background":"url(http://codegen.caihongy.cn/20231129/5a039ebb9e0649cda7b9abfefc729de8.png)","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","order":"4"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"200px","margin":"50px auto","lineHeight":"54px","textAlign":"center","background":"none"}'>
		<span :style='{"color":"#fff","fontSize":"32px"}'>院校信息推荐</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"width":"100%","padding":"60px 0","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>
		<div :style='{"border":"1px solid #E0E0E0","padding":"40px 20px","margin":"0","flexWrap":"wrap","background":"#fff","display":"flex","width":"25%","position":"relative","height":"auto"}' v-for="(item,index) in yuanxiaoxinxiRecommend" :key="index" @click="toDetail('yuanxiaoxinxiDetail', item)" class="list-item animation-box">

			<img :style='{"width":"100%","margin":"0 auto","objectFit":"cover","display":"block","height":"190px","order":"1"}' v-if="preHttp(item.yuanxiaotupian)" :src="item.yuanxiaotupian.split(',')[0]" alt="" />
			<img :style='{"width":"100%","margin":"0 auto","objectFit":"cover","display":"block","height":"190px","order":"1"}' v-else :src="baseUrl + (item.yuanxiaotupian?item.yuanxiaotupian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"10px","color":"#000","textAlign":"center","width":"100%","lineHeight":"1.5","fontSize":"16px","fontWeight":"bold","order":"2"}'>{{item.yuanxiaomingcheng}}</div>
			<div :style='{"width":"50%","padding":"0 10px 10px","textAlign":"center","order":"7"}'>
			  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
			  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.addtime}}</span>
			</div>
			<div :style='{"width":"calc(100% / 3)","padding":"0 10px 10px","textAlign":"center","order":"4"}'>
			  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#909090"}'></span>
			  <span class="text" :style='{"color":"#909090","lineHeight":"1.5","fontSize":"12px"}'>{{item.storeupnum}}</span>
			</div>
			<div :style='{"width":"calc(100% / 3)","padding":"0 10px 10px","textAlign":"center","order":"5"}'>
			  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#909090"}'></span>
			  <span class="text" :style='{"color":"#909090","lineHeight":"1.5","fontSize":"12px"}'>{{item.clicknum}}</span>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	
	







	
	<div @click="moreBtn('yuanxiaoxinxi')" :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"80px","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>更多</span>
		<i :style='{"color":"#f5f5f5","fontSize":"12px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->

<!-- 商品推荐 -->
<div id="animate_recommendbeikaojingyan" class="recommend animate__animated" :style='{"padding":"0 10%","margin":"0 0 0","background":"url(http://codegen.caihongy.cn/20231129/5a039ebb9e0649cda7b9abfefc729de8.png)","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","order":"4"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"200px","margin":"50px auto","lineHeight":"54px","textAlign":"center","background":"none"}'>
		<span :style='{"color":"#fff","fontSize":"32px"}'>备考经验推荐</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"width":"100%","padding":"60px 0","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>
		<div :style='{"border":"1px solid #E0E0E0","padding":"40px 20px","margin":"0","flexWrap":"wrap","background":"#fff","display":"flex","width":"25%","position":"relative","height":"auto"}' v-for="(item,index) in beikaojingyanRecommend" :key="index" @click="toDetail('beikaojingyanDetail', item)" class="list-item animation-box">

			<img :style='{"width":"100%","margin":"0 auto","objectFit":"cover","display":"block","height":"190px","order":"1"}' v-if="preHttp(item.tupian)" :src="item.tupian.split(',')[0]" alt="" />
			<img :style='{"width":"100%","margin":"0 auto","objectFit":"cover","display":"block","height":"190px","order":"1"}' v-else :src="baseUrl + (item.tupian?item.tupian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"10px","color":"#000","textAlign":"center","width":"100%","lineHeight":"1.5","fontSize":"16px","fontWeight":"bold","order":"2"}'>{{item.kaoshixueke}}</div>
			<div class="name line1" :style='{"padding":"10px","color":"#000","textAlign":"center","width":"100%","lineHeight":"1.5","fontSize":"16px","fontWeight":"bold","order":"2"}'>上传时间:{{item.shangchuanshijian}}</div>
			<div :style='{"width":"50%","padding":"0 10px 10px","textAlign":"center","order":"7"}'>
			  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
			  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.addtime}}</span>
			</div>
			<div :style='{"width":"calc(100% / 3)","padding":"0 10px 10px","textAlign":"center","order":"4"}'>
			  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#909090"}'></span>
			  <span class="text" :style='{"color":"#909090","lineHeight":"1.5","fontSize":"12px"}'>{{item.storeupnum}}</span>
			</div>
			<div :style='{"width":"calc(100% / 3)","padding":"0 10px 10px","textAlign":"center","order":"5"}'>
			  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#909090"}'></span>
			  <span class="text" :style='{"color":"#909090","lineHeight":"1.5","fontSize":"12px"}'>{{item.clicknum}}</span>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	
	







	
	<div @click="moreBtn('beikaojingyan')" :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"80px","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>更多</span>
		<i :style='{"color":"#f5f5f5","fontSize":"12px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->

<!-- 商品推荐 -->
<div id="animate_recommendkechengziliao" class="recommend animate__animated" :style='{"padding":"0 10%","margin":"0 0 0","background":"url(http://codegen.caihongy.cn/20231129/5a039ebb9e0649cda7b9abfefc729de8.png)","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","order":"4"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"200px","margin":"50px auto","lineHeight":"54px","textAlign":"center","background":"none"}'>
		<span :style='{"color":"#fff","fontSize":"32px"}'>课程资料推荐</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"width":"100%","padding":"60px 0","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>
		<div :style='{"border":"1px solid #E0E0E0","padding":"40px 20px","margin":"0","flexWrap":"wrap","background":"#fff","display":"flex","width":"25%","position":"relative","height":"auto"}' v-for="(item,index) in kechengziliaoRecommend" :key="index" @click="toDetail('kechengziliaoDetail', item)" class="list-item animation-box">

			<img :style='{"width":"100%","margin":"0 auto","objectFit":"cover","display":"block","height":"190px","order":"1"}' v-if="preHttp(item.xiangguantupian)" :src="item.xiangguantupian.split(',')[0]" alt="" />
			<img :style='{"width":"100%","margin":"0 auto","objectFit":"cover","display":"block","height":"190px","order":"1"}' v-else :src="baseUrl + (item.xiangguantupian?item.xiangguantupian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"10px","color":"#000","textAlign":"center","width":"100%","lineHeight":"1.5","fontSize":"16px","fontWeight":"bold","order":"2"}'>{{item.ziliaomingcheng}}</div>
			<div class="name line1" :style='{"padding":"10px","color":"#000","textAlign":"center","width":"100%","lineHeight":"1.5","fontSize":"16px","fontWeight":"bold","order":"2"}'>发布日期:{{item.faburiqi}}</div>
			<div :style='{"width":"50%","padding":"0 10px 10px","textAlign":"center","order":"7"}'>
			  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
			  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.addtime}}</span>
			</div>
			<div :style='{"width":"calc(100% / 3)","padding":"0 10px 10px","textAlign":"center","order":"3"}'>
			  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#909090"}'></span>
			  <span class="text" :style='{"color":"#909090","lineHeight":"1.5","fontSize":"12px"}'>{{item.thumbsupnum}}</span>
			</div>
			<div :style='{"width":"calc(100% / 3)","padding":"0 10px 10px","textAlign":"center","order":"4"}'>
			  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#909090"}'></span>
			  <span class="text" :style='{"color":"#909090","lineHeight":"1.5","fontSize":"12px"}'>{{item.storeupnum}}</span>
			</div>
			<div :style='{"width":"calc(100% / 3)","padding":"0 10px 10px","textAlign":"center","order":"5"}'>
			  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#909090"}'></span>
			  <span class="text" :style='{"color":"#909090","lineHeight":"1.5","fontSize":"12px"}'>{{item.clicknum}}</span>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	
	







	
	<div @click="moreBtn('kechengziliao')" :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"80px","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>更多</span>
		<i :style='{"color":"#f5f5f5","fontSize":"12px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->


<!-- 特价商品 -->
<div id="animate_listyuanxiaoxinxi" class="lists animate__animated" :style='{"padding":"30px 10%","margin":"0 0 10px","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","order":"5"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"auto","margin":"10px 0","lineHeight":"54px","textAlign":"center","background":"none"}'>
	  <span :style='{"color":"#000","fontSize":"32px"}'>院校信息展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	


	<div v-if="yuanxiaoxinxiList.length" class="list list11 index-pv1" :style='{"width":"100%","padding":"20px 0","background":"#fff","justifyContent":"space-between","display":"flex","height":"auto"}'>
	  <div class="list" :style='{"alignItems":"flex-start","flex":"1","background":"#fff","justifyContent":"space-between","display":"flex","height":"auto"}'>
	    <div :style='{"border":"1px solid #d8d8d8","width":"calc(100% / 6 )","padding":"0 10px","position":"relative","borderWidth":"0 1px 0 0","height":"auto"}' class="item list-item animation-box" v-for="item,index in yuanxiaoxinxiList" :key="index" @click="toDetail('yuanxiaoxinxiDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"500px"}' v-if="preHttp(item.yuanxiaotupian)" :src="item.yuanxiaotupian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"500px"}' v-else :src="baseUrl + (item.yuanxiaotupian?item.yuanxiaotupian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"18px","color":"#000"}'>{{item.yuanxiaomingcheng}}</div>
	    </div>
	  </div>
	</div>




	
	
	<div @click="moreBtn('yuanxiaoxinxi')" :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"80px","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>更多</span>
		<i :style='{"color":"#f5f5f5","fontSize":"12px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	

</div>
<!-- 特价商品 -->

<!-- 特价商品 -->
<div id="animate_listbeikaojingyan" class="lists animate__animated" :style='{"padding":"30px 10%","margin":"0 0 10px","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","order":"5"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"auto","margin":"10px 0","lineHeight":"54px","textAlign":"center","background":"none"}'>
	  <span :style='{"color":"#000","fontSize":"32px"}'>备考经验展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	


	<div v-if="beikaojingyanList.length" class="list list11 index-pv1" :style='{"width":"100%","padding":"20px 0","background":"#fff","justifyContent":"space-between","display":"flex","height":"auto"}'>
	  <div class="tab" :style='{"width":"160px","margin":"0 20px 0 0","flexDirection":"column","display":"flex","height":"auto"}'>
		<template v-for="item,index in listList11beikaojingyan">
	    <div v-if="index < 6" :style='{"cursor":"pointer","padding":"10px 0","margin":"0 0 20px","borderColor":"#E0E0E0","alignItems":"center","borderWidth":"1px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"center","height":"auto"}' class="item" @click="listIndexClick11(item, 'beikaojingyan')">
	      <span class="icon iconfont icon-jiantou34" :style='{"margin":"0 5px 0 0","lineHeight":"44px","fontSize":"16px","color":"#333","display":"none"}'></span>
	      <img v-if="item.image" :style='{"width":"44px","margin":"0 5px 0 0","objectFit":"cover","display":"inline-block","height":"44px"}' :src="baseUrl + (item.image?item.image.split(',')[0]:'')">
		  <span :style='{"color":"#000","lineHeight":"44px","fontSize":"16px"}'>{{item[listColumn11beikaojingyan]}}</span>
	    </div>
		</template>
		<div :style='{"cursor":"pointer","padding":"0 0","margin":"0","borderColor":"#E0E0E0","borderWidth":"1px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"center","height":"auto"}' class="more" @click="moreBtn('beikaojingyan')">
		  <span class="icon iconfont icon-jiantou34" :style='{"margin":"0 5px 0 0","lineHeight":"44px","fontSize":"16px","color":"#333","display":"none"}'></span>
		  <div :style='{"color":"#000","lineHeight":"44px","fontSize":"16px"}'>查看更多</div>
		</div>
	  </div>
	  <div class="list" :style='{"alignItems":"flex-start","flex":"1","background":"#fff","justifyContent":"space-between","display":"flex","height":"auto"}'>
	    <div :style='{"border":"1px solid #d8d8d8","width":"calc(100% / 6 )","padding":"0 10px","position":"relative","borderWidth":"0 1px 0 0","height":"auto"}' class="item list-item animation-box" v-for="item,index in beikaojingyanList" :key="index" @click="toDetail('beikaojingyanDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"500px"}' v-if="preHttp(item.tupian)" :src="item.tupian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"500px"}' v-else :src="baseUrl + (item.tupian?item.tupian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"18px","color":"#000"}'>{{item.kaoshixueke}}</div>
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"18px","color":"#000"}'>上传时间:{{item.shangchuanshijian}}</div>
	    </div>
	  </div>
	</div>




	
	
	<div @click="moreBtn('beikaojingyan')" :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"80px","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>更多</span>
		<i :style='{"color":"#f5f5f5","fontSize":"12px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	

</div>
<!-- 特价商品 -->

<!-- 特价商品 -->
<div id="animate_listkechengziliao" class="lists animate__animated" :style='{"padding":"30px 10%","margin":"0 0 10px","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","order":"5"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"auto","margin":"10px 0","lineHeight":"54px","textAlign":"center","background":"none"}'>
	  <span :style='{"color":"#000","fontSize":"32px"}'>课程资料展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	


	<div v-if="kechengziliaoList.length" class="list list11 index-pv1" :style='{"width":"100%","padding":"20px 0","background":"#fff","justifyContent":"space-between","display":"flex","height":"auto"}'>
	  <div class="tab" :style='{"width":"160px","margin":"0 20px 0 0","flexDirection":"column","display":"flex","height":"auto"}'>
		<template v-for="item,index in listList11kechengziliao">
	    <div v-if="index < 6" :style='{"cursor":"pointer","padding":"10px 0","margin":"0 0 20px","borderColor":"#E0E0E0","alignItems":"center","borderWidth":"1px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"center","height":"auto"}' class="item" @click="listIndexClick11(item, 'kechengziliao')">
	      <span class="icon iconfont icon-jiantou34" :style='{"margin":"0 5px 0 0","lineHeight":"44px","fontSize":"16px","color":"#333","display":"none"}'></span>
	      <img v-if="item.image" :style='{"width":"44px","margin":"0 5px 0 0","objectFit":"cover","display":"inline-block","height":"44px"}' :src="baseUrl + (item.image?item.image.split(',')[0]:'')">
		  <span :style='{"color":"#000","lineHeight":"44px","fontSize":"16px"}'>{{item[listColumn11kechengziliao]}}</span>
	    </div>
		</template>
		<div :style='{"cursor":"pointer","padding":"0 0","margin":"0","borderColor":"#E0E0E0","borderWidth":"1px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"center","height":"auto"}' class="more" @click="moreBtn('kechengziliao')">
		  <span class="icon iconfont icon-jiantou34" :style='{"margin":"0 5px 0 0","lineHeight":"44px","fontSize":"16px","color":"#333","display":"none"}'></span>
		  <div :style='{"color":"#000","lineHeight":"44px","fontSize":"16px"}'>查看更多</div>
		</div>
	  </div>
	  <div class="list" :style='{"alignItems":"flex-start","flex":"1","background":"#fff","justifyContent":"space-between","display":"flex","height":"auto"}'>
	    <div :style='{"border":"1px solid #d8d8d8","width":"calc(100% / 6 )","padding":"0 10px","position":"relative","borderWidth":"0 1px 0 0","height":"auto"}' class="item list-item animation-box" v-for="item,index in kechengziliaoList" :key="index" @click="toDetail('kechengziliaoDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"500px"}' v-if="preHttp(item.xiangguantupian)" :src="item.xiangguantupian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"500px"}' v-else :src="baseUrl + (item.xiangguantupian?item.xiangguantupian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"18px","color":"#000"}'>{{item.ziliaomingcheng}}</div>
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"18px","color":"#000"}'>发布日期:{{item.faburiqi}}</div>
	    </div>
	  </div>
	</div>




	
	
	<div @click="moreBtn('kechengziliao')" :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"80px","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>更多</span>
		<i :style='{"color":"#f5f5f5","fontSize":"12px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	

</div>
<!-- 特价商品 -->
	
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],
        yuanxiaoxinxiRecommend: [],
        beikaojingyanRecommend: [],
        kechengziliaoRecommend: [],

        yuanxiaoxinxiList: [],
        beikaojingyanList: [],
        kechengziliaoList: [],


		newsIndex18: 0,

		listIndex11beikaojingyan: 0,
		listList11beikaojingyan: [],
		listColumn11beikaojingyan: '',
		listIndex11kechengziliao: 0,
		listList11kechengziliao: [],
		listColumn11kechengziliao: '',

      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getAboutUs();
		this.getSystemIntroduction();
		this.getList();
		this.beikaojingyanListCate()
		this.kechengziliaoListCate()
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {
			setTimeout(()=>{
			},750)
		},
		newsMouseove18(index) {
			this.newsIndex18 = index
		},

		beikaojingyanListCate(){
		},
		kechengziliaoListCate(){
		},
		listIndexClick11(index, name) {
			this['listIndex11' + name] = index[this['listColumn11' + name]]
			this.getList()
		},

		handleScroll() {
			let arr = [
				{id:'search',css:'animate__pulse'},
				{id:'about',css:'animate__backInRight'},
				{id:'system',css:'animate__backInLeft'},
				{id:'animate_recommendyuanxiaoxinxi',css:'animate__fadeIn'},
				{id:'animate_listyuanxiaoxinxi',css:'animate__shakeY'},
				{id:'animate_recommendbeikaojingyan',css:'animate__fadeIn'},
				{id:'animate_listbeikaojingyan',css:'animate__shakeY'},
				{id:'animate_recommendkechengziliao',css:'animate__fadeIn'},
				{id:'animate_listkechengziliao',css:'animate__shakeY'},
				{id:'msgs',css:'animate__rubberBand'},
				{id:'friendly',css:'animate__bounce'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getList() {
			let autoSortUrl = "";
			let data = {}
          autoSortUrl = "yuanxiaoxinxi/autoSort";
			data = {
				page: 1,
				limit: 8,
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.yuanxiaoxinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
          autoSortUrl = "beikaojingyan/autoSort";
			data = {
				page: 1,
				limit: 8,
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.beikaojingyanRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
          autoSortUrl = "kechengziliao/autoSort";
          if(localStorage.getItem('frontToken')) {
              autoSortUrl = "kechengziliao/autoSort2";
          }
			data = {
				page: 1,
				limit: 8,
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.kechengziliaoRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
			data = {
				page: 1,
				limit: 6,
			}
			this.$http.get('yuanxiaoxinxi/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.yuanxiaoxinxiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			data = {
				page: 1,
				limit: 6,
			}
			this.$http.get('beikaojingyan/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.beikaojingyanList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			data = {
				page: 1,
				limit: 6,
			}
			this.$http.get('kechengziliao/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.kechengziliaoList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 0;
			border-radius: 30px 0 0 30px;
			padding: 0 30px 0 10px;
			box-shadow: none;
			outline: none;
			color: #fff;
			background: rgba(0,0,0,.3);
			width: 200px;
			font-size: 16px;
			text-align: center;
			height: 60px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 0;
			border-radius: 0 30px 30px 0;
			padding: 0 10px;
			box-shadow: none;
			outline: none;
			color: #fff;
			background: rgba(0,0,0,.3);
			width: 100%;
			font-size: 16px;
			height: 60px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1.1) skew(4deg, 4deg) translate3d(0px, -20px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(-6deg, 6deg) translate3d(0px, -10px, -10px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -20px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(0.9) skew(0deg, 0deg) translate3d(20px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(-4deg, -4deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	




	.home-preview .news .list18 .left .list .item {
				cursor: pointer;
				border: 1px solid #E0E0E0;
				padding: 0 20px;
				background: #fff;
				display: flex;
				width: 100%;
				align-items: center;
				height: 15%;
			}
	
	.home-preview .news .list18 .left .list .item:hover {
				background: #3B2E7E;
			}
	
	.home-preview .news .list18 .left .list .item .name {
				overflow: hidden;
				color: #000;
				white-space: nowrap;
				font-size: 18px;
				line-height: 1.5;
				text-overflow: ellipsis;
			}
	
	.home-preview .news .list18 .left .list .item:hover .name {
				color: #fff;
			}
	
	.home-preview .news .list18 .right .list .item .dian {
				border-radius: 100%;
				margin: 0 6px;
				background: #333;
				display: none;
				width: 4px;
				height: 4px;
			}
	.home-preview .news .list18 .right .list .item:hover .dian {
				background: red;
			}
	
	.home-preview .news .list18 .right .list .item .title {
				color: #333;
				flex: 1;
				font-size: 14px;
				line-height: 24px;
				transition: 0.3s;
			}
	.home-preview .news .list18 .right .list .item:hover .title {
				color: #3B2E7E;
				font-weight: bold;
			}
	
	.home-preview .news .list18 .right .list .item .time .icon {
				color: #666;
				font-size: 12px;
				line-height: 24px;
			}
	.home-preview .news .list18 .right .list .item:hover .time .icon {
				color: red;
			}
	.home-preview .news .list18 .right .list .item .time .text {
				color: #666;
				font-size: 12px;
				line-height: 24px;
			}
	.home-preview .news .list18 .right .list .item:hover .time .text {
				color: red;
			}






</style>
