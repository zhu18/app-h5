import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home/home';
import footerTab from './components/footerTab/footerTab';
import headerBar from './components/header/index.vue';

import TrademarkInquiry from  './views/TrademarkInquiry'
import detailsInfo from  './views/test/details-info'
import test3 from  './views/test/test3'
import test2 from  './views/test/test2'
import my from  './views/test/my'
Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};
export default new Router({
  routes: [
    {
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
                  body: TrademarkInquiry,
                  footer: footerTab,
                  header: headerBar
                }
              },
              {//详情页面
                path: '/detailsInfo',
                name:'detailsInfo',
                components: {
                    body: detailsInfo,
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
                path: '/my',
                components: {
                    body: my,
                  footer: footerTab,
                  header: headerBar
                }
              },
          ]
    },
  ]
})