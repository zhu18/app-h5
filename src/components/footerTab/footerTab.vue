<template lang="html">
  <div class="footerTab bd-top-1">
         <div class="tab-item">
            <router-link to='/home'>
              <i class="iconfont icon-6"></i>
              <span>首页</span>
            </router-link>
         </div>
         <div class="tab-item">
            <router-link to='/test1'>
                 <i class="iconfont icon-11"></i>
                 <span>执法</span>
            </router-link>
        </div>
        <div class="tab-item searchbtn">
           
        </div>
        <div class="tab-item">
           <router-link to='/test2'>
               <i class="iconfont icon-8"></i>
               <span>历史</span>
           </router-link>
        </div>
       <div class="tab-item">
           <router-link to='/my'>
              <i class="iconfont icon-12"></i>
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
        height: 0.98rem;
        overflow: hidden;
        line-height:  0.98rem;
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
        font-size:0.64rem;
        line-height:normal;
        margin:0.01rem auto 0 auto;
    }
    .searchbtn{
        background: url(../../assets/images/component/searchbtn.png) no-repeat center 4px;
        background-size: 0.94rem 0.92rem;
    }
    .tab-item span{
        display:block;
        height: 0.2rem;
        line-height: 0.2rem;
        font-size: 0.20rem;
    }
    .footerTab .tab-item a.router-link-active{
        color: #5aa9fd;
    }

</style>
