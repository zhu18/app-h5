import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home/home';
import footerTab from './components/footerTab/footerTab';
import headerBar from './components/header/index.vue';

import trademarkInquiry from  './views/trademarkInquiry/index.vue'
import detailsInfo from  './views/SearchResult/detailsInfo.vue'
import searchresult from  './views/searchResult'
import smartSearch from  './views/smartSearch'

import LawEnforcement from  './views/LawEnforcement'
import LElog from  './views/LawEnforcement/leLog.vue'
import test3 from  './views/test/test3'
import test2 from  './views/test/test2'
import test4 from './views/test/test4'
import map from './views/test/map'

import my from  './views/test/my'
import searchHistory from  './views/SmartSearch/searchhistory'
import collection from  './views/collection'
Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};
export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: () => import('./views/login/login')
    },
    {//加载首页
          path: '/main',
          name: 'main',
          component: () => import('./views/home/main'),
          children: [
             {//生活服务主页
                path: '/home',
                components: {
                  body: home,
                  footer: footerTab,
                  header: headerBar
                }
              },
              {//商标查询
                path: '/trademarkinquiry',
                name:'trademarkinquiry',
                components: {
                  body: trademarkInquiry,
                  footer: footerTab,
                  header: headerBar
                }
              },
              {//智能检索主页
                path: '/smartSearch',
                name:'smartSearch',
                components: {
                    body: smartSearch
                }
              },
              {//查询结果
                  path: '/detailsInfo',
                  name:'detailsInfo',
                  components: {
                      body: detailsInfo,
                      footer: footerTab
                  }
              },
              {//查询结果
                path: '/searchresult',
                name:'searchresult',
                components: {
                  body: searchresult,
                  footer: footerTab
                }
              },
              {//生活服务主页
                path: '/searchhistory',
                components: {
                    body: searchHistory,
                  footer: footerTab,
                  header: headerBar
                }
              },
              {//执法
                path: '/lawenforcement',
                components: {
                    body: LawEnforcement,
                  footer: footerTab
                }
              },
              {//执法记录
                  path: '/lelog',
                  components: {
                      body: LElog
                  }
              },
              {//生活服务主页
                path: '/test2',
                components: {
                    body: test2,
                  footer: footerTab,
                  header: headerBar
                }
              },
              {//生活服务主页
                  path: '/test2',
                  name:'test2',
                  components: {
                      body: test2,
                      footer: footerTab,
                      header: headerBar
                  }
              },
              {//生活服务主页
                path: '/test3',
                components: {
                    body: test3,
                  footer: footerTab,
                  header: headerBar
                }
              },
              {//生活服务主页
                path: '/test4',
                components: {
                    body: test4,
                  footer: footerTab,
                  header: headerBar
                }
              },
              {//生活服务主页
                path: '/my',
                components: {
                    body: my,
                  footer: footerTab,
                  header: headerBar
                }
              },
              {//收藏
                path: '/collection',
                name:'collection',
                components: {
                    body: collection,
                  header: headerBar
                }
              },
               {//收藏
                path: '/map',
                name:'map',
                components: {
                body: map,
                 
                }
              },
          ]
    },
  ]
})