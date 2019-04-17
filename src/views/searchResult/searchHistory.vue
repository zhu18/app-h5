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
            <mt-button v-show='handleEdit' slot="right" @click='edit'> {{isEdit?'完成':'编辑'}} </mt-button>
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
                  <span class="span" @click="searchList">{{item}}</span>
                  <img src="../../assets/images/close.png" @click="closeitem(index)" class="img">
              </span>
            </div>
          </div>
          <div class="content-wrapper2"  v-if="index == 2 || index == 3"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <ul class="content-item">
                <li class="clearfix" v-for="item in recognitionList" @click="sel(item)">
                  <img class="fl" src="../../assets/images/result-logo.jpg"/>
                  <div class="item-content fl">
                    <p class="item-label">结果</p>
                    <p class="item-text">{{item.res}}</p>
                  </div>
                  <span :class="[item.isChecked?'is-select':'','icon-box']"  v-show="isEdit" >
                    <i class="mint-toast-icon mintui mintui-field-success"></i> 
                </span>
                </li>
            </ul>
            <div class="loading" v-if="loading">
               <span class="tips">数据加载中</span><mt-spinner :type="3" color="#26a2ff" :size="24"></mt-spinner>
            </div>
          </div>
          <div class="content-wrapper1"  v-if="index == 3">
          </div>
        </div>
        <footer :class="[isEdit?'show':'']" @click="del">删除</footer>
  </div>
</template>
<script>
export default {
  name: "home-searchhistory",
  data() {
    return {
        index:1,
        title:'查询历史',
        dataList:["阿迪达斯阿迪达斯阿迪达斯阿迪达斯达斯阿迪达斯达斯阿迪达斯","NIKE","同仁堂","汉方","草本","Samsung","Apple"],
        recognitionList: [
          {res: '计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)', isChecked: false},
          {res: '计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)', isChecked: false},
          {res: '计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)', isChecked: false},
          {res: '计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)', isChecked: false},
          {res: '计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)', isChecked: false},
          {res: '计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)', isChecked: false},
        ],
        loading: false,
        handleEdit: false,
        isEdit: false,
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
        if(index == 2 || index == 3){
          this.handleEdit = true;
        }else {
          this.handleEdit = false;
        }
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
      searchList(){
          this.$router.push('/searchresult')
      },
      //编辑
      edit(){
          this.isEdit = !this.isEdit;
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
            let obj = {res: '计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)', isChecked: false};
            for (let i = 1; i <= 4; i++) {
            this.recognitionList.push(obj);
            }
            this.loading = false;
        }, 3500);
      },
      sel(item){
          if(!this.isEdit) return;
          item.isChecked = !item.isChecked;
      },
      del(){
          let temp =[];
          this.recognitionList.forEach((item,index)=>{
              if(!item.isChecked) temp.push(item);
          });
          this.recognitionList = temp;
      }
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
      z-index:2;
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
      position: fixed;
      top: 1.9rem;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: scroll;
      z-index: 1;
      .content-wrapper1 {
          overflow-y: scroll;
      }
      .content-wrapper2 {
        position: absolute;
        top: 0;
        bottom: 0;
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
            max-width: 88%;
            .span{
                text-overflow: ellipsis;
                overflow: hidden;
                text-overflow: ellipsis;
                display: inline-block;
                white-space: nowrap;
                max-width: 93%;
            }

            .img{
                height: 0.2rem;
                margin-top: 0.28rem;
                margin-left: 0.1rem;
            }
        }
        li{
            position: relative;
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
            .icon-box{
                position: absolute;
                box-sizing: border-box;
                right: 0.24rem;
                top:0.24rem;
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 50%;
                border: 0.02rem solid #c5c6c6;
                background:#d4d5d7;
                i{
                    display: none;
                }
            }
            .is-select{
                border:none;
                i{
                    transition: all .25s;
                    position: relative;
                    left:-0.04rem;
                    top:-0.04rem;
                    font-size: 0.46rem;
                    color:#2095f2;
                    display: block;
                }
            }
            
        }
    }
    }
    
    .content-button{
        position: fixed;
        bottom: 1.28rem;
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
footer{
      position:fixed;
      bottom:-1rem;
      z-index:1000;
      width:100%;
      height:1rem;
      line-height:1rem;
      text-align:center;
      font-size:.32rem;
      color:#5b5b69;
      background:#fff;
      border-top:1px solid rgba(4, 0, 0, 0.1);
      box-shadow:0 1px 10px 3px rgba(4, 0, 0, 0.1);
      cursor:pointer;
      transition:bottom .3s;
      &.show{
          bottom:0;
      }
  }
</style>
