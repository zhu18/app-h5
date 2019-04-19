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
                    <hisList :datalist="list"></hisList>
            </div>
          </div>
          <div class="content-wrapper2"  v-if="index == 2"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="20"
          >
            <ul class="content-item">
                <li class="clearfix" v-for="(item,index) in recognitionList" @click="sel(item,index)" :key="index">
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
          <!-- 图片 -->
          <div class="content-wrapper3"  v-if="index == 3"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <ul class="content-item">
                <li class="clearfix" v-for="(item,index) in picList" :key='index' @click="sel(item,index)">
                  <img class="fl" src="../../assets/images/result-logo1.jpg"/>
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
        </div>
        <footer :class="[isEdit?'show':'']" @click="del">删除</footer>
  </div>
</template>
<script>
    import hisList from '../../components/historyList/hisList';
export default {
  name: "home-searchhistory",
  data() {
    return {
        index:1,
        title:'查询历史',
        list:["阿迪达斯阿迪达斯阿迪达斯阿迪达斯达斯阿迪达斯达斯阿迪达斯","NIKE","同仁堂","汉方","草本","Samsung","Apple"],
        recognitionList: [
          {res: '计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)', isChecked: false},
          {res: '计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)', isChecked: false},
          {res: '计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)', isChecked: false},
          {res: '计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)', isChecked: false},
          {res: '计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)', isChecked: false},
          {res: '计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)', isChecked: false},
        ],
        picList: [
          {res: '防护面罩; 防护帽; 防毒面具(非人工呼吸用); 灭火设备; 电开关; 加法器', isChecked: false},
          {res: '防护面罩; 防护帽; 防毒面具(非人工呼吸用); 灭火设备; 电开关; 加法器', isChecked: false},
          {res: '防护面罩; 防护帽; 防毒面具(非人工呼吸用); 灭火设备; 电开关; 加法器', isChecked: false},
          {res: '防护面罩; 防护帽; 防毒面具(非人工呼吸用); 灭火设备; 电开关; 加法器', isChecked: false},
          {res: '防护面罩; 防护帽; 防毒面具(非人工呼吸用); 灭火设备; 电开关; 加法器', isChecked: false},
          {res: '防护面罩; 防护帽; 防毒面具(非人工呼吸用); 灭火设备; 电开关; 加法器', isChecked: false},
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
        this.isEdit = false;
        if(index == 1){
          this.handleEdit = false;
        }else {
          this.handleEdit = true;
        }
      },
      goBack(){
          this.$router.go(-1)
      },
      //全部删除
      deleteall(){
        this.list=[];
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
        if(this.index == 2){
          setTimeout(() => {
            let obj = {res: '耳塞机; 扬声器音箱; 头戴耳机; 声音传送器具; 麦克风; 摄像机;  电池', isChecked: false};
            const copy = ({...rest}) => ({...rest})
            for (let i = 1; i <= 6; i++) {
                this.recognitionList.push(copy(obj));
            }
            this.loading = false;
          }, 1500);
        } else if(this.index == 3){
          setTimeout(() => {
            // let obj = {res: '耳塞机; 扬声器音箱; 头戴耳机; 声音传送器具; 麦克风; 摄像机;  电池', isChecked: false};
            for (let i = 1; i <= 6; i++) {
                this.picList.push({res: '耳塞机; 扬声器音箱; 头戴耳机; 声音传送器具; 麦克风; 摄像机;  电池', isChecked: false});
            }
            this.loading = false;
          }, 1500);
        }
        
      },
      sel(item,index){
          if(!this.isEdit) return;
          item.isChecked = !item.isChecked;
      },
      del(){
          let index = this.index;
          let temp =[];
          if(index == 2){
            
            this.recognitionList.forEach((item,index)=>{
              
                if(!item.isChecked) temp.push(item);
            });
            this.recognitionList = temp;
            if(this.recognitionList.length < 5){
              this.loadMore()
            }
          }else if(index == 3){
            
            this.picList.forEach((item,index)=>{
                if(!item.isChecked) temp.push(item);
            });
            
            this.picList = temp;
            if(this.picList.length < 5){
              this.loadMore()
            }
          }
          
      }
  },
  components:{
      hisList
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
        height: calc(100% - 1.9rem);
        overflow-y: auto;
      .content-wrapper1 {
      }
      .content-wrapper2 {
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
              object-fit: cover;
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

}
.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.6rem;
    padding-bottom: 0.2rem;
    margin-bottom: 1rem;
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
