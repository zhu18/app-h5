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
            <span class="iconfont-k"></span>
    </div>
    <div class="top-search">
         <Search/>
    </div> 
    <!-- 头部 结束 -->
 
    <!-- 新闻列表  开始  -->
    
    <div class="news-list" v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <mt-loadmore :top-method="loadTop"  :bottom-all-loaded="allLoaded" ref="loadmore">
        <template v-for="(item,index) in list" >
            <router-link class="list-item" tag="div" to="/newsdetails" :key="index">
                <div class="img-box" v-if="item.images.length==1">
                    <img :src="require('../../assets/images/newslist2.jpg')" alt="" v-for="(url,index2) in item.images" :key="index2">
                </div>
                <div class="item-content">
                    <h4>{{item.title}}</h4>
                    <div class="img-box2" v-if="item.images.length>1">
                        <span v-for="(url,index2) in item.images" :key="index2">
                            <img :src="require('../../assets/images/newslist1.jpeg')" alt="" >
                        </span>
                    </div>
                    <div class="tinfo"><span class="title">{{item.source}}<var>{{item.numbers}}评论</var></span> <span>{{item.times}}</span></div>
                </div>
            </router-link>
        </template>
        
        </mt-loadmore>
        <div class="loading" v-if="loading">
            <span class="tips">数据加载中</span><mt-spinner :type="3" color="#26a2ff"></mt-spinner>
        </div>
    </div>
    <!-- 新闻列表  结束  -->


  </div>
</template>
<script>
import Search from '../../components/search/innerSearch'
// import search from '../../components/search/lesearch';
export default {
  name: "home",
  data() {
    return {
        allLoaded:false,
        loading:false,
        name:'',
        list:[
            {
                title:'在海外习近平听孩子们唱诵过这些中文诗、中文歌时间',
                source:'新华网',
                numbers:'2223',
                times:`${Math.ceil(Math.random()*10)}分钟前`,
                images:['../../assets/images/news/news.png']
            },
             {
                title:'在海外习近平听孩子们唱诵过这些中文诗、中文歌在海外习近平听孩子们唱诵过',
                source:'新华网',
                numbers:'2223',
                times:'17分钟前',
                images:[]
            },{
                title:'在海外习近平听孩子们唱诵过这些中文诗',
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
                title:'在海外习近平听孩子们唱诵过这些中文诗、中文歌海外习近平听孩子们唱诵过',
                source:'新华网',
                numbers:'2223',
                times:'17分钟前',
                images:[]
            },{
                title:'在海外习近平听孩子们唱诵过这些中文诗、中文歌海外习近平听孩子们唱诵过',
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
      getLIst(){
           let list=[1,2,3,4,6,7].map(v=>{
               let images=[]
           if (Math.ceil(Math.random()*10)>=5) {
                images=['../../assets/images/news/news.png','../../assets/images/news/news.png','../../assets/images/news/news.png']
           }else{
               images=['../../assets/images/news/news.png']
           }
            return {
                title:'在海外习近平听孩子们唱诵过这些中文诗、中文歌',
                source:'新华网',
                numbers:`${Math.ceil(Math.random()*1000)}`,
                times:`${Math.ceil(Math.random()*10)}分钟前`,
                images:images
              }
           })
            this.list=list
      },
      loadTop() {
        //   ...// 加载更多数据
        this.getLIst()
        this.$refs.loadmore.onTopLoaded();
        },
      loadBottom() {
        // ...// 加载更多数据
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      },
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
          this.$router.goBack()
      },
      delSearchVal(){
          this.name=""
      },
      searchList(){
          alert(123)
      },
      screenCallback(params){
          this.popupVisible=false
          console.log(params)
      }
      
  },
  components: {
      Search
  }
};
</script>
<style lang="scss" scoped>
::-webkit-search-cancel-button { display: none; }
.news-wrap{
    .top-header{
        height: 0.9rem;
        background-color: #2095f2;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
       box-shadow: 0 1px 5px rgba(0,0,0,.1);
        .iconfont-k{
            width: 0.64rem;
            display: inline-block;
            visibility: hidden;
        }
        .iconfont{
            font-size: 0.84rem;
            color: #fff;
        }
        .title{
            font-size: 0.36rem;
        }
    }
   .top-search {
       width: 100%;
       height: 0.9rem;
       display: flex;
       align-items: center;
       justify-content: center;
       padding:0 0.3rem;
       box-sizing: border-box;
       box-shadow: 0 1px 5px rgba(0,0,0,.1);
       .search{
           flex: 1;
       }
    }
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:1.1rem;
    background-color: #fff;
    .news-list{
        height: calc(100% - 1.8rem);
        overflow-y: auto;
        padding: 0.32rem;
        // padding-bottom: 0.9rem;
        box-sizing: border-box;
        .list-item{
            padding: 0.24rem 0;
            display: flex;
            // background: #fff;
            // box-shadow: 0 1px 3px rgba(0,0,0,.1);
            border-bottom:1px solid rgba(0,0,0,.1);
            .img-box{
                width: 2.2rem;
                height: 1.2rem;
                margin-right: 0.2rem;
                // border:1px solid rgba(0,0,0,.1);
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                img{
                  border-radius: 0.1rem;
                    height: 1.2rem;
                    width: 100%;
                    object-fit: cover;
                  border-radius: 0.1rem;
                }
            }
            .img-box2{
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding:0.16rem 0;
                span{
                    width: 32%;
                    display: inline-block;
                    // border:1px solid rgba(0,0,0,.1);/
                }
                img{
                  border-radius: 0.1rem;
                   width: 100%;
                //    height: 1.2rem;
                    object-fit: cover;
                  object-fit: cover;
                }
            }
            .item-content{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-height: 1.2rem;
                flex: 1;
                h4{
                    font-size: 0.34rem;
                    color: #1e2128;
                    font-weight: normal;
                    white-space: wrap;
                    line-height: 0.40rem;
                }
                .tinfo{
                    font-size: 0.24rem;
                    color: #bfbfbf;
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                    var{
                        font-size: 0.2rem;
                        // color: #fea71a;
                        font-style: normal;
                        // border: 1px solid #fea71a;
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
