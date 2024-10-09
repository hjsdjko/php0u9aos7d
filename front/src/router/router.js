import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import ExamPaper from '../pages/exam/examPaper'
import Exam from '../pages/exam/exam'
import ExamList from '../pages/exam/examList'
import ExamRecord from '../pages/exam/examRecord'
import Storeup from '../pages/storeup/list'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import yuanxiaoxinxiList from '../pages/yuanxiaoxinxi/list'
import yuanxiaoxinxiDetail from '../pages/yuanxiaoxinxi/detail'
import yuanxiaoxinxiAdd from '../pages/yuanxiaoxinxi/add'
import beikaojingyanList from '../pages/beikaojingyan/list'
import beikaojingyanDetail from '../pages/beikaojingyan/detail'
import beikaojingyanAdd from '../pages/beikaojingyan/add'
import kechengziliaoList from '../pages/kechengziliao/list'
import kechengziliaoDetail from '../pages/kechengziliao/detail'
import kechengziliaoAdd from '../pages/kechengziliao/add'
import kaoyanzhengceList from '../pages/kaoyanzhengce/list'
import kaoyanzhengceDetail from '../pages/kaoyanzhengce/detail'
import kaoyanzhengceAdd from '../pages/kaoyanzhengce/add'
import meiridakaList from '../pages/meiridaka/list'
import meiridakaDetail from '../pages/meiridaka/detail'
import meiridakaAdd from '../pages/meiridaka/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussbeikaojingyanList from '../pages/discussbeikaojingyan/list'
import discussbeikaojingyanDetail from '../pages/discussbeikaojingyan/detail'
import discussbeikaojingyanAdd from '../pages/discussbeikaojingyan/add'
import discusskechengziliaoList from '../pages/discusskechengziliao/list'
import discusskechengziliaoDetail from '../pages/discusskechengziliao/detail'
import discusskechengziliaoAdd from '../pages/discusskechengziliao/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'examPaper',
					component: ExamPaper
				},
				{
					path: 'examList',
					component:ExamList
				},
				{
					path: 'examRecord/:type',
					component:ExamRecord
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'yuanxiaoxinxi',
					component: yuanxiaoxinxiList
				},
				{
					path: 'yuanxiaoxinxiDetail',
					component: yuanxiaoxinxiDetail
				},
				{
					path: 'yuanxiaoxinxiAdd',
					component: yuanxiaoxinxiAdd
				},
				{
					path: 'beikaojingyan',
					component: beikaojingyanList
				},
				{
					path: 'beikaojingyanDetail',
					component: beikaojingyanDetail
				},
				{
					path: 'beikaojingyanAdd',
					component: beikaojingyanAdd
				},
				{
					path: 'kechengziliao',
					component: kechengziliaoList
				},
				{
					path: 'kechengziliaoDetail',
					component: kechengziliaoDetail
				},
				{
					path: 'kechengziliaoAdd',
					component: kechengziliaoAdd
				},
				{
					path: 'kaoyanzhengce',
					component: kaoyanzhengceList
				},
				{
					path: 'kaoyanzhengceDetail',
					component: kaoyanzhengceDetail
				},
				{
					path: 'kaoyanzhengceAdd',
					component: kaoyanzhengceAdd
				},
				{
					path: 'meiridaka',
					component: meiridakaList
				},
				{
					path: 'meiridakaDetail',
					component: meiridakaDetail
				},
				{
					path: 'meiridakaAdd',
					component: meiridakaAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussbeikaojingyan',
					component: discussbeikaojingyanList
				},
				{
					path: 'discussbeikaojingyanDetail',
					component: discussbeikaojingyanDetail
				},
				{
					path: 'discussbeikaojingyanAdd',
					component: discussbeikaojingyanAdd
				},
				{
					path: 'discusskechengziliao',
					component: discusskechengziliaoList
				},
				{
					path: 'discusskechengziliaoDetail',
					component: discusskechengziliaoDetail
				},
				{
					path: 'discusskechengziliaoAdd',
					component: discusskechengziliaoAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
		{
			path: '/exam',
			component: Exam
		}
	]
})
