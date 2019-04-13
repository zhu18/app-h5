<template lang="html">
  <div class="footerTab">
         <div class="tab-item">
            <router-link to='/home'>
              <i class="iconfont icon-main"></i>
              <span>首页</span>
            </router-link>
         </div>
         <div class="tab-item">
            <router-link to='/lawenforcement'>
                 <i class="iconfont icon-law"></i>
                 <span>执法</span>
            </router-link>
        </div>
        <div class="tab-item searchbtn">
           <router-link to='/smartSearch' >
               
            </router-link>
        </div>
        <div class="tab-item">
           <router-link to='/searchhistory'>
               <i class="iconfont icon-history"></i>
               <span>历史</span>
           </router-link>
        </div>
       <div class="tab-item">
           <router-link to='/my'>
              <i class="iconfont icon-my"></i>
              <span>我的</span>
           </router-link>
        </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .footerTab {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.28rem;
        overflow: hidden;
        line-height:  1.28rem;
        z-index: 888;
        box-shadow: 0 0 5px rgba(0,0,0,.1);
        background-color: #fff;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .tab-item i{
        display:block;
        font-size:0.96rem;
        line-height:normal;
        /* margin:0.01rem auto 0 auto; */
    }
    .searchbtn{
        background: url(../../assets/images/component/searchbtn.png) no-repeat center 0.15rem;
        background-size: 1.1rem 1.1rem;
        a{
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .tab-item span{
        display:inline-block;
        height: 0.2rem;
        line-height: 0.2rem;
        font-size: 0.20rem;
        position: relative;
        top:-0.1rem;
    }
    .footerTab .tab-item a.router-link-active{
        color: #5aa9fd;
    }

</style>
