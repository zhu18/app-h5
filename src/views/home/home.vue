<template>
  <div class="home-Wrap">
     <div class="search-box">
        <Search/>
     </div>
      <div class="content-box">
     <div class="banner">
       <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../assets/images/home/banner.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/home/banner.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/home/banner.png" alt=""></mt-swipe-item>
      </mt-swipe>
     </div>
     <div class="list">
        <router-link :to="{ name: 'trademarkinquiry', params: { title: '商标查询'}} " class="list-item block" tag="div">
            <i class="iconfont icon-logoquery"></i>商标查询
        </router-link>
        <router-link :to="{ name: 'smartsearch', params: { title: '图形检索'}} " class="list-item block" tag="div">
            <i class="iconfont icon-imgquery"></i>图形检索
        </router-link>
       
        <router-link :to="{ name: 'statistics', params: { title: '统计分析'}} " class="list-item block" tag="div">
            <i class="iconfont icon-tongji"></i>统计分析
        </router-link>
        <router-link :to="{ name: 'cityList', params: { title: '案件共享'}} " class="list-item block" tag="div">
            <i class="iconfont icon-law1"></i>案件共享
         </router-link>
         <router-link :to="{ name: 'lawsRegulations', params: { title: '法律法规',handleEdit:true}} " class="list-item block" tag="div">
            <i class="iconfont icon-regulations"></i>法律法规
        </router-link>
        <router-link :to="{ name: 'news'}" class="list-item block" tag="div">
            <i class="iconfont icon-new"></i>新闻资讯
        </router-link>
         
     </div>
      </div>
  </div>
</template>
<script>
import Search from '../../components/search/index';
export default {
  name: "home",
  data() {
    return {
        currentTab: 0
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
  },
  components:{
    Search
  }
};
</script>
<style lang="scss">
.mint-swipe{
      border-radius: .15rem;
}
.home-Wrap {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  overflow: hidden;
  overflow-y: auto;
  top:0;
  .block{
    box-shadow: 0 1px 3px rgba(0,0,0,.1)
  }
  .search-box{
    padding-top: 1rem;
    width: 100%;
    height: 2.17rem;
    background: url(../../assets/images/home/home_top_bar_bg_01.png) no-repeat center;
    background-size: cover;
    box-sizing: border-box;
  }
    .content-box{
        height: calc(100% - 2.17rem - 1.28rem);
        overflow-y: auto;
    }
  .banner{
    padding: 0.32rem;
    height: 3.88rem;
    width: 6.86rem;
    img{
      width: 100%;
      // border-radius: 10px;
      box-shadow: 0 1px 5px rgba(0,0,0,.1)
    }
  }
  .list{
      padding: 0 0.32rem;
      height: 5.15rem;
      justify-content: space-between;
       flex-wrap:wrap;
       display: flex;
       box-sizing: border-box;
      .list-item{
        width: 3.27rem;
        margin:0.16rem 0 ;
        border-radius: 0.1rem;
        background-color: #fff;
        display: flex;
        align-items: center;
        font-size: 0.32rem;
        color: #1e2128;
        cursor: pointer;
        .iconfont{
          display: inline-block;
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          background-color: #20cdf2;
          margin-left: 0.32rem;
          margin-right: 0.32rem;
          color: #fff;
          font-size:0.8rem;
        }
        
      }
      .list-item:nth-child(1) .iconfont{ 
        background: -webkit-linear-gradient(60deg,#00bbd3,#02a8f3) #20cdf2;
      }
       .list-item:nth-child(2) .iconfont{
        background: -webkit-linear-gradient(60deg,#fe9700,#fec006) #fec604;
      }
     .list-item:nth-child(4) .iconfont{
        background:  -webkit-linear-gradient(60deg,#53bafc,#53bafc) #53bafc;
        color: #fff;
      }
       .list-item:nth-child(3) .iconfont{
        background: -webkit-linear-gradient(60deg,#fe9700,#fec006) #fbb84f;
      }
        .list-item:nth-child(5) .iconfont{ 
        background: -webkit-linear-gradient(60deg,#3f83ff,#48abff) #53bafc;
      }
       .list-item:nth-child(6) .iconfont{
        background: -webkit-linear-gradient(60deg,#f2896a,#e77e72) #f88776;
      }
       
  }
 
}
</style>
