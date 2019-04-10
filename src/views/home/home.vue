<template>
  <div class="home-Wrap">
     <div class="search-box">
        <Search/>
     </div>
     <div class="banner">
       <img class="block" src="../../assets/images/home/banner.png" alt="">
     </div>
     <div class="list">
        <router-link :to="{ name: 'trademarkinquiry', params: { title: '商标查询'}} " class="list-item block" tag="div">
                <span class="icon"></span> 商标查询
        </router-link>
       <div class="list-item block"><span class="icon"></span> 智能检索</div>
       <div class="list-item block"><span class="icon"></span> 法律法规</div>
       <div class="list-item block"><span class="icon"></span> 收藏</div>
       <div class="list-item block"><span class="icon"></span> 新闻</div>
       <div class="list-item block"><span class="icon"></span> 阅读</div>
     </div>
  </div>
</template>
<script>
import Search from '../../components/search/index';
export default {
  name: "home",
  data() {
    return {
      username:'测试',
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
  .banner{
    padding: 0.32rem;
    height: 3.88rem;
    width: 6.86rem;
    img{
      width: 100%;
      border-radius: 10px;
    }
  }
  .list{
      padding: 0 0.32rem 0.32rem 0.32rem;
      height: calc(100vh - 7.67rem );
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
        font-size: 0.32px;
        color: #1e2128;
        cursor: pointer;
        .icon{
          display: inline-block;
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          background-color: #20cdf2;
          margin-left: 0.32rem;
          margin-right: 0.32rem;
        }
        
      }
      .list-item:nth-child(1) .icon{
        background: url(../../assets/images/home/i1.png) no-repeat center center #20cdf2;
        background-size: 0.4rem 0.4rem;
      }
       .list-item:nth-child(2) .icon{
        background: url(../../assets/images/home/i2.png) no-repeat center center #fec604;
        background-size: 0.4rem 0.4rem;
      }
       .list-item:nth-child(3) .icon{
        background: url(../../assets/images/home/i3.png) no-repeat center center #53bafc;
        background-size: 0.4rem 0.4rem;
      }
       .list-item:nth-child(4) .icon{
        background: url(../../assets/images/home/i4.png) no-repeat center center #fbb84f;
        background-size: 0.4rem 0.4rem;
      }
       .list-item:nth-child(5) .icon{
        background: url(../../assets/images/home/i5.png) no-repeat center center #10e3c8;
        background-size: 0.4rem 0.4rem;
      }
       .list-item:nth-child(6) .icon{
        background: url(../../assets/images/home/i6.png) no-repeat center center #53bafc;
        background-size: 0.4rem 0.4rem;
      }
  }
 
}
</style>
