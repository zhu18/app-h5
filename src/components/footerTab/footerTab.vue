<template lang="html">
  <div class="footerTab">
          <div class="inner">
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
               <router-link to='/smartsearch' >
                    搜索
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
        height: 1.45rem;
        overflow: hidden;
        line-height:  1.45rem;
        z-index: 888;
        .inner{
          height:1.1rem;
          line-height: 1.1rem;
          background-color: #fff;
          position:absolute;
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          box-shadow: 0 0 5px rgba(0,0,0,.1);
          z-index:2;
          .searchbtn{
            position:relative;
            background-color: #fff;
            border-radius: 50%;
            top:-0.36rem;
            height: 1.08rem;
            width:1.42rem;
            box-sizing: border-box;
            background: url(../../assets/images/mmm.png) no-repeat center center;
            background-size: cover;
            box-sizing: border-box;
            a{
              position: relative;
              bottom:-0.73rem;
              font-size: 0.18rem;
            }
            
          }
        }
    }
    .footerTab .tab-item {
        width:20%;
        height:100%;
        float:left;
        text-align: center;
        position: relative;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .footerTab .tab-item a{
        color: #9b9fa2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .tab-item i{
        display:block;
        font-size:0.96rem;
        line-height:normal;
        margin-top:-0.15rem;
        /* margin:0.01rem auto 0 auto; */
    }
    .tab-item span{
        display:inline-block;
        height: 0.2rem;
        line-height: 0.2rem;
        font-size: 0.18rem;
        position: relative;
        top:-0.1rem;
    }
    .footerTab .tab-item a.router-link-active{
        color: #5aa9fd;
    }

</style>
