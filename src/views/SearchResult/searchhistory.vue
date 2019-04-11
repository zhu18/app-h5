<!--李耀2019-4-10-->
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
               <span :class="index==1?'span span-seletecd':'span'" @click="index=1">文字</span>
             </div>
             
             <div  class="li" >
               <span :class="index==2?'span span-seletecd':'span'" @click="index=2">识图</span>
             </div>
              <div  class="li">
               <span :class="index==3?'span span-seletecd':'span'" @click="index=3">图片</span>
             </div>
           </ul>
        </div>
        <span class="splitline"></span>
        <span class="splitline splitline2"></span>
        <div class="content-item">
           <span class="item" v-for="(item, index) in dataList">
               {{item}}
               <img src="../../assets/images/close.png" @click="closeitem(index)" class="img">
           </span>
        </div>
        <div class="content-button">
            <span class="delete" @click="deleteall">全部删除</span>
            <span class="edit" @click="edit">编辑</span>
        </div>
        <span class="splitline splitline3"></span>
  </div>
</template>
<script>
export default {
  name: "home-searchhistory",
  data() {
    return {
        index:1,
        title:'查询历史',
        dataList:["阿迪达斯","NIKE","同仁堂","汉方","草本","Samsung","Apple"]
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
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
    font-size: 0.12rem;
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
      height: 1rem;
      background-color: #ffffff;
      .ul {
        width: 100%;
        height: 1rem;
        color: black;
        .li {
          display: inline-block;
          text-align: center;
          height: 1rem;
          cursor: pointer;
          width: 32%;
          line-height: 1rem;
          .span{
              padding: 0.2rem 10%;
          }
          .span-seletecd{
               color: #2095f2;
                border-bottom: 0.05rem solid #2095f2;
          }

        }
      }
    }
    .content-item{
        margin-top: 0.08rem;
        height: 9.2rem;
        	box-shadow: 4px 0px 0px 4px 	rgba(0, 0, 0, 0.1);
        width: 100%;
        background-color: #f6f6f6;
        padding-left: 0.3rem;
        .item{
            margin-top: 0.3rem;
            display: inline-block;
            padding: 0 0.4rem;
            height: 0.8rem;
            line-height: 0.8rem;
            background-color: #bfbfbf;
            border-radius: 3px;
            opacity: 0.5;
            margin-right: 0.3rem;
            .img{
                height: 0.2rem;
                margin-top: 0.28rem;
                margin-left: 0.1rem;
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
        }
        .edit{
            display: inline-block;
            width: 50%;
            text-align: center;
            line-height: 1rem;
            color: #2095f2;
        }
    }
    .splitline{
    position: absolute;
    top: 9%;
    left:32%;
    display: inline-block;
    height: 0.4rem;
    width: 0.02rem;
    background-color:#b2b2b9;
   }
   .splitline2{
      position: absolute;
      top: 9%;
      left:62%;
   }
   .splitline3{
      position: absolute;
      top: 85.5%;
      left:50%;
   }
}
</style>
