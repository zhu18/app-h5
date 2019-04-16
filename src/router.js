import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home/home';
import footerTab from './components/footerTab/footerTab';
import headerBar from './components/header/index.vue';

/* - - - - - - - 1.商标查询 - - - - - - - - - */
import trademarkInquiry from './views/trademarkInquiry/index.vue'
import searchresult from './views/searchResult'
import detailsInfo from './views/searchResult/detailsInfo.vue'
import searchHistory from './views/searchResult/searchHistory'

/* - - - - - - - 2.智能检索 - - - - - - - - - */
import smartSearch from './views/smartSearch'

/* - - - - - - - 3.法律法规 - - - - - - - - - */
// 取证详情
// 执法首页
import LawEnforcement from './views/lawEnforcement'
// 执法记录
import LElog from './views/lawEnforcement/leLog.vue'
//新建协同码
import cooperationCode from './views/lawEnforcement/cooperationCode'
// 执法-协同码
import synergyCode from './views/lawEnforcement/synergyCode.vue'
// 执法地图
import map from './views/lawEnforcement/map'
//记录详情
import enforcementdetails from './views/lawEnforcement/enforcementdetails'
// 执法日期
import dateSelect from './views/dateSelect'
//开始执法
import startLawEnforcement from './views/lawEnforcement/startLawEnforcement.vue'
//开始执法-上传
import startLawEnforcementUpload from './views/lawEnforcement/startLawEnforcementUpload.vue'
/* - - - - - - - 4.收藏 - - - - - - - - - */
import collection from './views/collection'
import evidenceList from './views/evidenceList'
//我的收藏
import selfCollection from './views/collection/self'


/* - - - - - - - 5.新闻 - - - - - - - - - */

import News from './views/news';
//新闻详情
import newsDetails from './views/news/newsdetails.vue';
/* - - - - - - - 6.阅读 - - - - - - - - - */
/** */

// 临时测试路由
import my from './views/test/my'
import test3 from './views/test/test3'
import test2 from './views/test/test2'
import test4 from './views/test/test4'

Vue.use(Router)
Router.prototype.goBack = function() {
    this.isBack = true;
    window.history.go(-1);
};
export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ('./views/login/login')
        },
        { //加载首页
            path: '/main',
            name: 'main',
            component: () =>
                import ('./views/home/main'),
            children: [{ //主页
                    path: '/home',
                    components: {
                        body: home,
                        footer: footerTab,
                        header: headerBar
                    }
                },
                /* - - - - - - - 1.商标查询 - - - - - - - - - */
                { //商标查询
                    path: '/trademarkinquiry',
                    name: 'trademarkinquiry',
                    components: {
                        body: trademarkInquiry,
                        footer: footerTab,
                        header: headerBar
                    }
                },
                { //商标详情
                    path: '/detailsInfo',
                    name: 'detailsInfo',
                    components: {
                        body: detailsInfo,
                        footer: footerTab
                    }
                },
                { //查询结果
                    path: '/searchresult',
                    name: 'searchresult',
                    components: {
                        body: searchresult,
                        footer: footerTab
                    }
                },
                { //查询历史
                    path: '/searchhistory',
                    components: {
                        body: searchHistory,
                        footer: footerTab,
                        header: headerBar
                    }
                },
                /* - - - - - - - 2.智能检索 - - - - - - - - - */
                { //智能检索
                    path: '/smartsearch',
                    name: 'smartsearch',
                    components: {
                        body: smartSearch
                    }
                },
                /* - - - - - - - 3.法律法规 - - - - - - - - - */
                { //执法
                    path: '/lawenforcement',
                    name: 'lawenforcement',
                    components: {
                        body: LawEnforcement,
                        footer: footerTab
                    }
                },
                // { //取证详情
                //     path: '/lawDetails',
                //     name: 'lawDetails',
                //     components: {
                //         body: lawDetails,
                //         footer: footerTab
                //     }
                // },
                { //执法记录
                    path: '/lelog',
                    name: 'lelog',
                    components: {
                        body: LElog
                    }
                },
                { //新建协同码
                    path: '/cooperationCode',
                    components: {
                        body: cooperationCode
                    }
                },
                { //执法协同码
                    path: '/synergyCode',
                    components: {
                        body: synergyCode,
                        header: headerBar
                    }
                },
                { //执法记录详情
                    path: '/enforcementdetails',
                    name: 'enforcementdetails',
                    components: {
                        body: enforcementdetails
                    }
                },
                { //执法地图
                    path: '/map',
                    name: 'map',
                    components: {
                        body: map,

                    }
                },
                { //执法日期
                    path: '/dateSelect',
                    components: {
                        body: dateSelect,
                        footer: footerTab,
                        header: headerBar
                    }
                },
                { //开始执法
                    path: '/startLawEnforcement',
                    name: 'startLawEnforcement',
                    components: {
                        body: startLawEnforcement
                    }
                },
                { //开始执法-上传
                    path: '/startLawEnforcementUpload',
                    name: 'startLawEnforcementUpload',
                    components: {
                        body: startLawEnforcementUpload
                    }
                },
                /* - - - - - - - 4.收藏 - - - - - - - - - */
                { //收藏
                    path: '/collection',
                    name: 'collection',
                    components: {
                        body: collection,
                        header: headerBar
                    }
                },
                {
                    //取证记录
                    path: '/evidenceList',
                    name: 'evidenceList',
                    components: {
                        body: evidenceList,
                        header: headerBar
                    }
                },
                { //我的收藏
                    path: '/selfCollection',
                    name: 'selfCollection',
                    components: {
                        body: selfCollection
                    }
                },
                /* - - - - - - - 5.新闻 - - - - - - - - - */
                { //新闻
                    path: '/news',
                    name: 'news',
                    components: {
                        body: News,
                        footer: footerTab,
                    }
                },
                {//新闻详情
                    path: '/newsDetails',
                    name: 'newsDetails',
                    components: {
                        body: newsDetails,
                        footer: footerTab,
                    }
                },
                /* - - - - - - - 6.阅读 - - - - - - - - - */
                { //生活服务主页
                    path: '/test2',
                    components: {
                        body: test2,
                        footer: footerTab,
                        header: headerBar
                    }
                },
                { //生活服务主页
                    path: '/test2',
                    name: 'test2',
                    components: {
                        body: test2,
                        footer: footerTab,
                        header: headerBar
                    }
                },
                { //生活服务主页
                    path: '/test3',
                    components: {
                        body: test3,
                        footer: footerTab,
                        header: headerBar
                    }
                },
                { //生活服务主页
                    path: '/test4',
                    components: {
                        body: test4,
                        footer: footerTab,
                        header: headerBar
                    }
                },
                { //生活服务主页
                    path: '/my',
                    components: {
                        body: my,
                        footer: footerTab,
                    }
                },
            ]
        },
    ]
})