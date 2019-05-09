import Vue from 'vue'
import Router from 'vue-router'
import footerTab from './components/footerTab/footerTab'
import headerBar from './components/header'

/* ============== 主菜单 ================ */
/* - - - - - - - 1.首页 - - - - - - - - - */
import home from './views/home/home'
/* - - - - - - - 2.执法 - - - - - - - - - */
import LawEnforcement from './views/lawEnforcement'
// 执法记录
import LElog from './views/lawEnforcement/leLog'
//新建协同码
import cooperationCode from './views/lawEnforcement/cooperationCode'
// 执法-协同码
import synergyCode from './views/lawEnforcement/synergyCode'
// 执法地图
import map from './views/lawEnforcement/map'
//记录详情
import enforcementdetails from './views/lawEnforcement/enforcementdetails'
// 执法日期
import dateSelect from './views/dateSelect'
//开始执法
import startLawEnforcement from './views/lawEnforcement/startLawEnforcement'
//开始执法-上传
import startLawEnforcementUpload from './views/lawEnforcement/startLawEnforcementUpload'
// 取证详情
import lawDetails from './views/lawEnforcement/lawDetails'
// 执法人员列表
import lawEnforcementRecords from './views/lawEnforcement/lawEnforcementRecords'
// 执法现场笔录
import enforcerList from './views/lawEnforcement/enforcerList'
/* - - - - - - - 3.检索 - - - - - - - - - */
import smartSearch from './views/smartSearch'
/* - - - - - - - 4.历史 - - - - - - - - - */
import searchHistory from './views/searchResult/searchHistory'
/* - - - - - - - 5.我的 - - - - - - - - - */

/* ============== 首页6个模块 ================ */
/* - - - - - - - 1.商标查询 - - - - - - - - - */
import trademarkInquiry from './views/trademarkInquiry'
import searchresult from './views/searchResult'
import detailsInfo from './views/searchResult/detailsInfo'

/* - - - - - - - 2.智能检索 - - - - - - - - - */
//使用 3.检索 smartSearch 路由

/* - - - - - - - 3.法律法规 - - - - - - - - - */
import lawsRegulations from './views/lawsRegulations'
import lawsRegulationsDetail from './views/lawsRegulations/detail'
/* - - - - - - - 4.收藏 - - - - - - - - - */
import collection from './views/collection'
import brandTab from './views/collection/brandTab'
import newsTab from './views/collection/newsTab'
import lawTab from './views/collection/lawTab'
import evidenceList from './views/evidenceList'
//我的收藏
import selfCollection from './views/collection/self'
/* - - - - - - - 5.新闻 - - - - - - - - - */
import News from './views/news'
//新闻详情
import newsDetails from './views/news/newsdetails.vue'
/* - - - - - - - 6.阅读 - - - - - - - - - */
import brandProcess from './views/brandProcess'

/* - - - - - - - 城市列表 - - - - - - - - - */
// import cityList from './views/cityList'
import invalidList from './views/invalidList'
/* - - - - - - - 7.统计分析 - - - - - - - - - */
import statistics from './views/statistics'
/* - - - - - - - 8.我的 - - - - - - - - - */
import my from './views/my'
import set from './views/my/set'
import about from './views/my/about'
// 临时测试路由
import test3 from './views/test/test3'
import test2 from './views/test/test2'
import test4 from './views/test/test4'

Vue.use(Router)
Router.prototype.goBack = function() {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/login/login')
    },
    {
      //加载首页
      path: '/main',
      name: 'main',
      component: () => import('./views/home/main'),
      children: [
        {
          //主页
          path: '/home',
          components: {
            body: home,
            footer: footerTab,
            header: headerBar
          }
        },
        /* - - - - - - - 商标查询 - - - - - - - - - */
        {
          //商标查询
          path: '/trademarkinquiry',
          name: 'trademarkinquiry',
          components: {
            body: trademarkInquiry,
            footer: footerTab,
            header: headerBar
          }
        },
        {
          //商标详情
          path: '/detailsInfo',
          name: 'detailsInfo',
          components: {
            body: detailsInfo
          }
        },
        {
          //查询结果
          path: '/searchresult',
          name: 'searchresult',
          components: {
            body: searchresult,
            footer: footerTab
          }
        },
        {
          //查询历史
          path: '/searchhistory',
          name: 'searchhistory',
          components: {
            body: searchHistory
          }
        },
        /* - - - - - - - 智能检索 - - - - - - - - - */
        {
          //智能检索
          path: '/smartsearch',
          name: 'smartsearch',
          components: {
            body: smartSearch
          }
        },
        /* - - - - - - - 法律法规 - - - - - - - - - */
        {
          //列表
          path: '/lawsRegulations',
          name: 'lawsRegulations',
          components: {
            body: lawsRegulations
          }
        },
        {
          //详情
          path: '/lawsRegulationsDetail',
          name: 'lawsRegulationsDetail',
          components: {
            body: lawsRegulationsDetail
          }
        },
        /* - - - - - - - 执法 - - - - - - - - - */
        {
          //执法
          path: '/lawenforcement',
          name: 'lawenforcement',
          components: {
            body: LawEnforcement,
            footer: footerTab
          }
        },
        {
          //新建协同码
          path: '/cooperationCode',
          name: 'cooperationCode',
          components: {
            body: cooperationCode
          }
        },
        {
          //执法协同码
          path: '/synergyCode',
          name: 'synergyCode',
          components: {
            body: synergyCode,
            header: headerBar
          }
        },
        {
          //取证管理
          path: '/evidenceList',
          name: 'evidenceList',
          components: {
            body: evidenceList
          }
        },
        {
          //我的收藏
          path: '/selfCollection',
          name: 'selfCollection',
          components: {
            body: selfCollection
          }
        },
        {
          //取证详情
          path: '/lawDetails',
          name: 'lawDetails',
          components: {
            body: lawDetails
          }
        },
        {
          //执法记录
          path: '/lelog',
          name: 'lelog',
          components: {
            body: LElog
          }
        },

        {
          //执法记录详情
          path: '/enforcementdetails',
          name: 'enforcementdetails',
          components: {
            body: enforcementdetails
          }
        },
        {
          //执法地图
          path: '/map',
          name: 'map',
          components: {
            body: map
          }
        },
        {
          //执法日期
          path: '/dateSelect',
          name: 'dateSelect',
          components: {
            body: dateSelect,
            footer: footerTab
          }
        },
        {
          //开始执法
          path: '/startLawEnforcement',
          name: 'startLawEnforcement',
          components: {
            body: startLawEnforcement
          }
        },
        {
          //开始执法-上传
          path: '/startLawEnforcementUpload',
          name: 'startLawEnforcementUpload',
          components: {
            body: startLawEnforcementUpload
          }
        },
        {
          //开始执法-执法人员列表
          path: '/enforcerList',
          name: 'enforcerList',
          components: {
            body: enforcerList
          }
        },
        {
          //开始执法-执法现场笔录
          path: '/lawEnforcementRecords',
          name: 'lawEnforcementRecords',
          components: {
            body: lawEnforcementRecords
          }
        },
        /* - - - - - - - 4.收藏 - - - - - - - - - */
        {
          //收藏
          path: '/collection',
          name: 'collection',
          redirect: '/collection/brandTab',
          components: {
            body: collection
          },
          children: [
            {
              name: 'brandTab',
              path: 'brandTab',
              component: brandTab
            },
            {
              name: 'lawTab',
              path: 'lawTab',
              component: lawTab
            },
            {
              name: 'newsTab',
              path: 'newsTab',
              component: newsTab
            }
          ]
        },

        /* - - - - - - - 5.新闻 - - - - - - - - - */
        {
          //新闻
          path: '/news',
          name: 'news',
          components: {
            body: News,
            footer: footerTab
          }
        },
        {
          //新闻详情
          path: '/newsDetails',
          name: 'newsDetails',
          components: {
            body: newsDetails,
            footer: footerTab
          }
        },
        /* - - - - - - - 6.阅读 - - - - - - - - - */
        {
          //商标流程
          path: '/brandProcess',
          name: 'brandProcess',
          components: {
            body: brandProcess
          }
        },
        { //案件共享
            path: '/cityList',
            name:'cityList',
            components: {
                body: invalidList
            }
        },
        {
          path: '/invalidList',
          components: {
            body: invalidList
          }
        },
        {
          //生活服务主页
          path: '/test2',
          components: {
            body: test2,
            footer: footerTab,
            header: headerBar
          }
        },
        {
          //生活服务主页
          path: '/test2',
          name: 'test2',
          components: {
            body: test2,
            footer: footerTab,
            header: headerBar
          }
        },
        {
          //生活服务主页
          path: '/test3',
          components: {
            body: test3,
            footer: footerTab,
            header: headerBar
          }
        },
        {
          //生活服务主页
          path: '/test4',
          components: {
            body: test4,
            footer: footerTab,
            header: headerBar
          }
        },
        {
          //统计分析
          path: '/statistics',
          name: 'statistics',
          components: {
            body: statistics
          }
        },
        {
          //我的
          path: '/my',
          components: {
            body: my,
            footer: footerTab
          }
        },
        {
          //设置
          path: '/set',
          name: 'set',
          components: { body: set }
        },
        {
          //设置
          path: '/about',
          name: 'about',
          components: { body: about }
        }
      ]
    }
  ]
})
