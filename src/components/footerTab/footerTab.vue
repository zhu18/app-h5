<template lang="html">
  <div class="footerTab bd-top-1">
         <div class="tab-item">
            <router-link to='/home'>
              <i class="iconfont icon-msnui-home-inverse"></i>
              <span>首页</span>
            </router-link>
         </div>
         <div class="tab-item">
            <router-link to='/test1'>
                 <i class="iconfont icon-shenghuo"></i>
                 <span>测试一</span>
            </router-link>
        </div>
        <div class="tab-item">
           <router-link to='/test2'>
               <i class="iconfont icon-saoyisao"></i>
               <span>测试二</span>
           </router-link>
        </div>
        <div class="tab-item">
           <router-link to='/test3'>
              <i class="iconfont icon-chengshifuwu"></i>
              <span>测试三</span>
           </router-link>
        </div>
       <div class="tab-item">
           <router-link to='/my'>
              <i class="iconfont icon-wode"></i>
              <span>我的</span>
           </router-link>
        </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
    .footerTab {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 60px;
        overflow: hidden;
        line-height: 60px;
        z-index: 888;
        background-color: #f9f9f9;
    }
    .footerTab .tab-item {
        width:20%;
        height:100%;
        float:left;
        text-align: center;
        position: relative;
    }
    .footerTab .tab-item a{
        color: #666;
    }
    .tab-item i{
        display:block;
        font-size:28px;
        line-height:normal;
        margin:7px auto 0 auto;
    }
    .tab-item span{
        display:block;
        height: 20px;
        line-height: 20px;
        font-size: 0.26rem;
    }
    .footerTab .tab-item a.router-link-active{
        color: #5aa9fd;
    }

</style>
