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
      <span class="iconfont icon-back" @click='back'></span>
      <span class="title">新闻资讯</span>
      <span class="iconfont icon-txtquery"></span>
    </div>
    <!-- 头部 结束 -->
 
    <!-- 新闻列表  开始  -->
    <div class="news-list"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <template v-for="(item,index) in list" >
            <router-link class="list-item" tag="div" to="/newsdetails" :key="index">
                <div class="img-box" v-if="item.images.length==1">
                    <img src="../../assets/images/news/news.png" alt="" v-for="(url,index2) in item.images" :key="index2">
                </div>
                <div class="item-content">
                    <h4>{{item.title}}</h4>
                    <div class="img-box2" v-if="item.images.length>1">
                        <img src="../../assets/images/news/news.png" alt="" v-for="(url,index2) in item.images" :key="index2">
                    </div>
                    <div class="tinfo"><span class="title">{{item.source}}<var>{{item.numbers}}评论</var></span> <span>{{item.times}}</span></div>
                </div>
            </router-link>
        </template>
        <div class="loading" v-if="loading">
            <span class="tips">数据加载中</span><mt-spinner :type="3" color="#26a2ff"></mt-spinner>
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
        list:[
            {
                title:'在海外习近平听孩子们唱诵过这些中文诗、中文歌',
                source:'新华网',
                numbers:'2223',
                times:'17分钟前',
                images:['../../assets/images/news/news.png']
            },
             {
                title:'在海外习近平听孩子们唱诵过这些中文诗、中文歌',
                source:'新华网',
                numbers:'2223',
                times:'17分钟前',
                images:[]
            },{
                title:'在海外习近平听孩子们唱诵过这些中文诗、中文歌',
                source:'新华网',
                numbers:'2223',
                times:'17分钟前',
                images:['../../assets/images/news/news.png','../../assets/images/news/news.png','../../assets/images/news/news.png']
            },{
                title:'在海外习近平听孩子们唱诵过这些中文诗、中文歌',
                source:'新华网',
                numbers:'2223',
                times:'17分钟前',
                images:['../../assets/images/news/news.png']
            },
             {
                title:'在海外习近平听孩子们唱诵过这些中文诗、中文歌',
                source:'新华网',
                numbers:'2223',
                times:'17分钟前',
                images:[]
            },{
                title:'在海外习近平听孩子们唱诵过这些中文诗、中文歌',
                source:'新华网',
                numbers:'2223',
                times:'17分钟前',
                images:['../../assets/images/news/news.png','../../assets/images/news/news.png','../../assets/images/news/news.png']
            }

        ]
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
            for (let i = 1; i <= 6; i++) {
            this.list.push(last);
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
    .top-header{
        height: 0.9rem;
        background-color: #2095f2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        box-shadow: 0 1px 3px rgba(0,0,0,.1);
        .iconfont{
            font-size: 0.84rem;
            color: #fff;
        }
        .title{
            font-size: 0.36rem;
        }
    }
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:1.28rem;
    // background-color: #f6f6f6;
    .news-list{
        height: calc(100% - 0.9rem);
        overflow-y: auto;
        padding: 0.32rem;
        // padding-bottom: 0.9rem;
        box-sizing: border-box;
        .list-item{
            padding: 0.32rem 0;
            display: flex;
            // background: #fff;
            // box-shadow: 0 1px 3px rgba(0,0,0,.1);
            border-bottom:1px solid rgba(0,0,0,.1);
            .img-box{
                width: 2.2rem;
                height: 1.2rem;
                margin-right: 0.2rem;
                img{
                  width: 2.2rem;
                  height: 1.2rem;
                  border-radius: 0.1rem;
                }
            }
            .img-box2{
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding:0.32rem 0;
                img{
                  width: 31%;
                  height: 1.2rem;
                  border-radius: 0.1rem;
                }
            }
            .item-content{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-height: 1.2rem;
                flex: 1;
                h4{
                    font-size: 0.28rem;
                    color: #1e2128;
                    font-weight: normal;
                    white-space: wrap;
                    line-height: 0.32rem;
                }
                .tinfo{
                    font-size: 0.24rem;
                    color: #bfbfbf;
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                    var{
                        font-size: 0.2rem;
                        color: #fea71a;
                        font-style: normal;
                        border: 1px solid #fea71a;
                        padding: 0.1rem 0.2rem;
                        border-radius: 0.2rem;
                        margin-left:0.2rem;
                    }
                }

            }
        }
    }
}


.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.9rem;
    .tips{
        margin:0 0.3rem;
        display: inline-block;
    }
}
</style>
