<!--
* 文件名：searchhistory
* 作者：李耀
* 描述：历史查询
* 修改时间：2019-04-10
-->
<template lang="html">
  <div class="home-searchhistory">
      <div class="top-header">
          <mt-header fixed :title="title">
            <div slot="left" >
                <mt-button icon="back" @click='goBack'></mt-button>
            </div>
         </mt-header>
      </div>
       <div class="item">
           <ul class="ul">
             <div  class="li" >
               <span :class="index==1?'span span-seletecd':'span'" @click="navClick('1')">
                <p class="p">文字</p>
               </span>
             </div>
             <div  class="li" >
               <span :class="index==2?'span span-seletecd':'span'" @click="navClick('2')">
               <p class="p">识图</p>
               </span>
             </div>
              <div  class="li">
               <span :class="index==3?'span span-seletecd':'span'" @click="navClick('3')">图片</span>
             </div>
           </ul>
        </div>

        <div class="content-wrapper">
          <div class="content-wrapper1" v-if="index == 1">
            <div class="content-item">
              <span class="item" v-for="(item, index) in dataList">
                  {{item}}
                  <img src="../../assets/images/close.png" @click="closeitem(index)" class="img">
              </span>
            </div>
          </div>
          <div class="content-wrapper2"  v-if="index == 2"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
          >
            <ul class="content-item">
                <li class="clearfix" v-for="item in recognitionList">
                  <img class="fl" src="../../assets/images/result-logo.jpg"/>
                  <div class="item-content fl">
                    <p class="item-label">结果</p>
                    <p class="item-text">计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)</p>
                  </div>
                </li>
            </ul>
            <div class="loading" v-if="loading">
               <span class="tips">数据加载中</span><mt-spinner :type="3" color="#26a2ff" :size="24"></mt-spinner>
            </div>
          </div>
          <div class="content-wrapper1"  v-if="index == 3">
          </div>
        </div>
        <div class="content-button" v-if="index != 2">
            <span class="delete" @click="deleteall">
              <p class="p">全部删除</p>
            </span>
            <span class="edit" @click="edit">编辑</span>
        </div>
        <span class="splitline splitline3" v-if="index != 2"></span>
  </div>
</template>
<script>
export default {
  name: "home-searchhistory",
  data() {
    return {
        index:1,
        title:'查询历史',
        dataList:["阿迪达斯","NIKE","同仁堂","汉方","草本","Samsung","Apple"],
        recognitionList: [1,2,3,4,5],
        loading: false
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
      //点击导航
      navClick(index){
        this.index = index;
      },
      goBack(){
          this.$router.go(-1)
      },
      //关闭方法
      closeitem(item){
       this.dataList.splice(item, 1 );
      },
      //全部删除
      deleteall(){
        this.dataList=[];
      },
      //编辑
       edit(){
          
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
            let last = this.recognitionList[this.recognitionList.length - 1];
            for (let i = 1; i <= 4; i++) {
            this.recognitionList.push(last + i);
            }
            this.loading = false;
        }, 3500);
      },
  },
  components:{
  }
};
</script>
<style lang="scss">
.home-searchhistory {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    overflow: hidden;
    overflow-y: auto;
    top:0;
    font-size: 0.24rem;
    .top-header{
        height: 0.9rem;
        .mint-header{
            height: 0.9rem;
            line-height: 0.9rem;
            background: #2095f2;
        }
        .iconfont {
            line-height: 1rem;
            font-size:0.66rem;
        }
    }
    .item {
      position: relative;
      height: 1rem;
      background-color: #ffffff;
      box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.1);
      .ul {
        width: 100%;
        height: 1rem;
        color: #1e2128;
        box-shadow: 0 0 0.06rem rgba(0, 0, 0, 0.1);
        .li {
          display: inline-block;
          text-align: center;
          height: 1rem;
          
          cursor: pointer;
          width: 33.33%;
          line-height: 1rem;
          background: #fff;
          .span{
            width: 100%;
            display: inline-block;
            height:100%;
            padding: 0 1%;
            line-height: 1rem;
            box-sizing: border-box;
              .p{
                  width: 100%;
                  display: inline-block;
                  height: 0.32rem;
                  line-height: 0.32rem;
                  border-right: 0.02rem solid #bfbfbf;
              }
          }
          .span-seletecd{
               color: #2095f2;
              border-bottom: 0.03rem solid #2095f2;
          }

        }
      }
    }
    .content-wrapper {
        height: calc(100% - 0.9rem - 3.3rem);
      .content-wrapper1 {

          overflow-y: scroll;
      }
      .content-wrapper2 {
        height: 10.2rem;;
        overflow-y: scroll;
      }
      .content-item{
        padding: 0.38rem 0.32rem 0.14rem;
        .item{
            margin-top: 0.3rem;
            display: inline-block;
            padding: 0 0.4rem;
            height: 0.8rem;
            line-height: 0.8rem;
            background-color: #bfbfbf;
            border-radius: 0.03rem;
            opacity: 0.5;
            margin-right: 0.3rem;
            .img{
                height: 0.2rem;
                margin-top: 0.28rem;
                margin-left: 0.1rem;
            }
        }
        li{
            padding: 0.44rem 0.33rem;
            margin-bottom: 0.24rem;
            background: #fff;
            border-radius: 0.1rem;
            box-shadow: 0 0.01rem 0.03rem rgba(0, 0, 0, 0.1);
            overflow: hidden;
            img {
              float: left;
              width: 1.21rem;
              height: 1.21rem;
              margin-right: 0.26rem;
            }
            .item-content {
              float: left;
              width: 4.7rem;
              .item-label {
                color: #5b5b69;
                font-size: 0.24rem;
                line-height: 0.34rem;
              }
              .item-text{
                width: 4.7rem;
                font-size: 0.28rem;
                color: #333333;
                line-height: 0.36rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
            }
            
        }
    }
    }
    
    .content-button{
        width: 100%;
        height: 1rem;
        background-color: #ffffff;
        .delete{
            display: inline-block;
            width: 50%;


            text-align: center;
            line-height: 1rem;
            .p{
                width: 100%;
                display: inline-block;
                height: 0.32rem;
                line-height: 0.32rem;
                border-right: 0.02rem solid #bfbfbf;
            }
        }
        .edit{
            display: inline-block;
            width: 50%;
            text-align: center;
            line-height: 1rem;
            color: #2095f2;
        }
    }
}
.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.6rem;
    padding-bottom: 0.2rem;
    .tips{
        margin:0 0.3rem;
        display: inline-block;
    }
}
</style>
