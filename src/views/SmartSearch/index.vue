<!-- 
* 文件名：SmartSearch
* 作者：zhu18
* 描述：智能检索
* 修改时间：2019-04-11
-->
<template>
  <div class="search-wrap">
    <div class="top-header">
      <mt-header fixed>
        <div slot="left">
          <mt-button icon="back" @click="back"></mt-button>
        </div>
        <mt-button slot="right">
            <i class="iconfont icon-help"></i>
        </mt-button>
        <mt-button slot="right">
            <i class="iconfont icon-time"></i>
        </mt-button>
        <mt-button slot="right">
            <i class="iconfont icon-img"></i>
        </mt-button>
      </mt-header>
      <div ref='imgtip' class="img-tip" @click="hideTip">
          相册可以直接选择图片识别
      </div>  
    </div>

    <div class="search-view">
        <div class="scan-box">
            <div class="scan-txt">
                <p>请把商标放于框内</p>
                <p>商标清晰、无遮挡、无阴影</p>
            </div>
        </div>
        
    </div>
    <div class="search-opt">
        <div class="opt-txtbar">
            <div class="txt" :class="scanType=='txt'&&'active left'"  @click="setScanType('txt')">扫图识字</div>
            <div class="txt" :class="scanType=='img'&&'active right'" @click="setScanType('img')">识图</div>
        </div>
        <div class="opt-btn">
            <div class="btn-watch" @click='watch'>
                <i class="iconfont icon-pic"></i>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import anime from 'animejs';
import { Indicator } from 'mint-ui';
import { setTimeout } from 'timers';

export default {
  name: "smartSearch",
  data() {
    return {
        scanType:'img'
    };
  },
  created() {},
  mounted() {
       anime({
            targets:'.img-tip',
            translateY:[-30,0],
            opacity:1,
            duration: 1000
        })
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    hideTip(){
        this.$refs.imgtip.remove();
    },
    watch(){
        Indicator.open({
            spinnerType: 'fading-circle'
        });
        setTimeout(()=>{
            //Indicator.close();
        },1500)
    },
    setScanType(type){
        if(this.scanType==type)
            return;

        this.scanType=type;
        let x=type==='txt'?'2.2rem':'0';
        console.log(x);
        anime({
            targets:'.opt-txtbar',
            translateX:x
        })
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.search-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  .search-view {
    flex: 1;
    background: #ddd url(../../assets/images/scanbg.jpg) no-repeat;
    justify-content: center;
    display: flex;
    background-size: cover;
    
    .scan-box{
        width: 4.76rem;
        height: 4.76rem;
        align-self: center;
        border-radius: 15px;
        margin-top: 1rem;
        background:rgba(0,0,0,.2);
        box-shadow: 0 0 1px 999px rgba(0,0,0,.75)
    }
    .scan-txt{
        position: relative;
        bottom: -5rem;
        color:#fff;
        font-size: .28rem;
        text-align: center;
        p{
            margin: .2rem
        }
    }
  }
  .img-tip{
      color: #fff;
      font-size: .24rem;
      padding: .15rem;
      background: #fda61a;
      border:.5px solid #eee;
      border-radius: 4px;
      position:fixed;
      top:1rem;
      right:.3rem;
      opacity: 0;
      &::before{
          content: '';
          display: block;
          position: absolute;
          top:-.4rem;
          right:.3rem;
          height: .4rem;
          width: 0;
          border-left:.5px solid #eee;
      }
      &::after{
          content: '';
          display: block;
          position: absolute;
    right: .27rem;
    top: -.42rem;
          width:.05rem;
          height:.05rem;
          border-radius: 50%;
          background: #fda61a;
          border:1px solid #eee;
          box-shadow: 0 0 1px 3px rgba(255, 255, 255, 0.5);
      }
  }
  .search-opt {
    display: flex;
    flex-direction: column;
    height: 3rem;
    background: -webkit-linear-gradient(-90deg, #172737, #293f64) #182339;
    .opt-txtbar{
        flex: 1;
        display: flex;
        padding: 0 .1rem;
        .txt{
            font-size: .28rem;
            color:#fff;
            width: 2.2rem;
            line-height: 1rem;
            text-align: center;
            transition: font-size .2s;
            &.active{
                font-size: .36rem;
                width: 3rem;
            }
        }
    }
    .opt-btn{
        height: 2rem;
        .btn-watch{
            width: .92rem;
            height: .92rem;
            background: -webkit-linear-gradient(100deg, #2095f2, #67ccfb) #3fabf6;
            border-radius: 50%;
            margin: 10px auto;
            box-shadow: 0 0 1px 7px rgba(255,255,255,.4);
             .iconfont{
                color: #fff;
                font-size: .92rem;
             }
        }
    }
  }
}
// 头部搜索区域
.top-header {
  position: fixed;
  top: 0;
  left: 0;
  height: 0.9rem;
  z-index: 10;
  .mint-header{
      height: 0.9rem;
      background: rgba(0,0,0,0);
       .iconfont {
      font-size: 0.8rem;
      color: #fff;
      height: 0.9rem;
      line-height: 0.9rem;
    }
  }
  
}
</style>
