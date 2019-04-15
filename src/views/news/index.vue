<!-- 
* 文件名：news
* 作者：王帅
* 描述：新闻首页
* 修改时间：2019-04-15
-->
<template>
  <div class="news-wrap">
    <!-- 头部 开始 -->
    <div class="top-header">
      
    </div>
    <!-- 头部 结束 -->
 
    <!-- 新闻列表  开始  -->
    <div class="news-list">
            <div
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <template v-for="item in list" >
                <router-link class="list-item" tag="div" to="/detailsInfo" >
                    <div class="img-box">
                        <img src="../../assets/images/home/testlogo.jpg" alt="">
                    </div>
                    <div class="item-content">
                        <h4>耐克创新有限合伙公司</h4>
                        <p><span class="title">注册号</span> <span>{{item}}</span></p>
                        <p><span class="title">申请日</span> <span>12749588</span></p>
                        <p><span class="title">当前状态</span> <span class="icon">商标无效</span></p>
                    </div>
                </router-link>
            </template>
            <div class="loading" v-if="loading">
               <span class="tips">数据加载中</span><mt-spinner :type="3" color="#26a2ff"></mt-spinner>
            </div>
        </div>
    </div>
    <!-- 新闻列表  结束  -->


  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
        loading:false,
        list:[1,2,3,4]
    };
  },
  created() {},
  mounted() {
      if(this.$route.params.name){
          this.name=this.$route.params.name
      }
  },
  methods: {
      loadMore() {
        this.loading = true;
        setTimeout(() => {
            let last = this.list[this.list.length - 1];
            for (let i = 1; i <= 4; i++) {
            this.list.push(last + i);
            }
            this.loading = false;
        }, 3500);
      },
      back(){
          this.$router.go(-1)
      }
      
  },
  components: {
  }
};
</script>
<style lang="scss" scoped>
::-webkit-search-cancel-button { display: none; }
.news-wrap{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:1.28rem;
    background-color: #f6f6f6;
}


.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.6rem;
    .tips{
        margin:0 0.3rem;
        display: inline-block;
    }
}
</style>
