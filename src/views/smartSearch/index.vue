<!--
* 文件名：smartSearch
* 作者：zhu18
* 描述：智能检索
* 修改时间：2019-04-11
-->
<template>
  <div class="search-wrap">
    <!-- 页头 -->
    <div class="top-header">
      <mt-header fixed>
        <!-- 左侧-返回 -->
        <div slot="left">
          <mt-button icon="back"
                     @click="back"></mt-button>
          
        </div>
        
        <!-- 右侧-帮助、历史、打开相册 -->
        <mt-button class="lamp" slot="right" @click="setLamp()">
              <i class="iconfont icon-lampclose" v-show="lampState===0"></i>
              <i class="iconfont icon-lamp" v-show="lampState===1"></i>
              <i class="iconfont icon-lampauto" v-show="lampState===2"></i>
        </mt-button>
        <mt-button slot="right"
                   @click="openHelp()">
          <i class="iconfont icon-help"></i>
        </mt-button>
        <mt-button slot="right"
                   @click="openHistory()">
          <i class="iconfont icon-time"></i>
        </mt-button>
        <mt-button slot="right"
                   @click="openPic()">
          <i class="iconfont icon-img"></i>
        </mt-button>
      </mt-header>
      <div ref="imgtip"
           class="img-tip"
           @click="hideTip">相册可以直接选择图片识别</div>
    </div>
    <!-- 扫描区 -->
    <div class="search-view">
      <!-- <div class="scan-box">
        <div class="scan-txt"
             v-show="!isScaning">
          <p>请把商标放于框内</p>
          <p>商标清晰、无遮挡、无阴影</p>
        </div>
        <div class="loading"
             v-show="isScaning">
          <mt-spinner color="#26a2ff"
                      type="double-bounce"></mt-spinner>
          <span class="loading-txt">识别中...</span>
        </div>
      </div> -->
      <clipbox :scanWidth="width"
               :scanHeight="height" />
      <div class="scan-tips scan-txt"
           v-show="!isScaning">
        <p>请把商标放于框内</p>
        <p>商标清晰、无遮挡、无阴影</p>
      </div>
      <div class="scan-tips scan-loading"
           v-show="isScaning">
        <mt-spinner color="#26a2ff"
                    type="double-bounce"></mt-spinner>
        <span class="loading-txt">识别中...</span>
      </div>
    </div>
    <!-- 底部操作区 -->
    <div class="search-opt">
      <!-- 扫描类型旋转-上部 -->
      <div class="opt-txtbar">
        <div class="txt"
             :class="scanType=='txt'&&'active left'"
             @click="setScanType('txt')">扫图识字</div>
        <div class="txt"
             :class="scanType=='img'&&'active right'"
             @click="setScanType('img')">识图</div>
      </div>
      <!-- 操作区-下部 -->
      <div class="opt-btn">
        <!-- 拍照&停止 按钮 -->
        <div class="btn-watch"
             :class="isScaning&&'stop'"
             @click="scan">
          <i class="iconfont icon-pic"
             v-show="!isScaning"></i>
          <i class="iconfont icon-del"
             v-show="isScaning"></i>
        </div>
        <!-- 文字识别-语言分类 -->
        <div class="language"
             v-show="scanType=='txt'">
          <p>语言</p>
          <div class="btn"
               :class="{selected:language=='ch'}"
               @click="setLanguage('ch')">中文</div>
          <div class="btn"
               :class="{selected:language=='en'}"
               @click="setLanguage('en')">英文</div>
          <div class="more">
            <i class="iconfont icon-back"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 识别结果滑动面板 -->
    <ResultPanel ref="resultpanel"
                 :scan-type="scanType" />
  </div>
</template>
<script>
import clipbox from "../../components/clipbox";
import { Spinner, MessageBox } from "mint-ui";
import anime from "animejs";
import ResultPanel from "./resultpanel";
// import img from "../../assets/images/scanbg.jpg";
export default {
  name: "smartSearch",
  data () {
    return {
      scanType: "img",
      isScaning: false,
      scanOk: false,
      timer: null,
      width: 210,
      height: 210,
      clientWidth: 0,
      language: 'ch',
      lampState:1,//闪光灯：0关闭|1开启|2自动
      // img
    };
  },
  created () {
    this.clientWidth = document.body.clientWidth;
    this.width = this.height = (this.clientWidth * 480) / 750;
  },
  mounted () {


    ["click", "touchstart"].forEach(item => {
      window.addEventListener(item, () => {
        this.hideTip();
      });
    });
    this.$route.params.type && this.setScanType(this.$route.params.type)
    anime({
      targets: ".img-tip",
      translateY: [-30, 0],
      opacity: 1,
      duration: 1500
    });
  },
  methods: {
    back () {
      this.$router.goBack();
    },
    setLamp(){
      this.lampState++
      if(this.lampState>2)
        this.lampState=0;
     console.log(this.lampState)
    },
    hideTip () {
      this.$refs.imgtip && this.$refs.imgtip.remove();
    },
    openHelp () {
      MessageBox("提示", "帮助待开发...");
    },
    openHistory () {
      this.$router.push({name:"searchhistory",params:{index:2}});
    },
    openPic () {
      MessageBox("提示", "原生app对接-打开系统相册");
    },
    scan () {
      //在识别中 取消识别
      if (this.isScaning) {
        clearTimeout(this.timer);
        this.isScaning = false;
        return;
      }
      //开始识别
      this.isScaning = true;
      this.timer = setTimeout(() => {
        this.isScaning = false;
        this.showList();
      }, 1000);
    },
    setScanType (type) {
      //设置识别类型
      if (this.scanType == type) return;

      this.scanType = type;
      let scanHeight = type === "txt" ? 300 : 480;
      this.width = (this.clientWidth * 480) / 750;
      this.height = (this.clientWidth * scanHeight) / 750;
      let x = type === "txt" ? "2.2rem" : "0";

      anime({
        targets: ".opt-txtbar",
        translateX: x
      });
    },
    setLanguage (type) {
      this.language = type
    },
    showList () {
      //显示识别结果
      this.$refs.resultpanel.show("all");
    },
    closeList () {
      //关闭识别结果
      this.$refs.resultpanel.hide();
    }
  },
  components: {
    ResultPanel,
    clipbox
  }
};
</script>
<style lang="scss" scoped>
// 头部搜索区域
.top-header {
  position: fixed;
  top: 0;
  left: 0;
  height: 0.9rem;
  z-index: 10;
  .mint-header {
    height: 0.9rem;
    background: rgba(0, 0, 0, 0);
    .lamp{
      margin-right: 3.5rem;
    }
    .iconfont {
      font-size: 0.8rem;
      color: #fff;
      height: 0.9rem;
      line-height: 0.9rem;
    }
  }
}
.search-wrap {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  color: #fff;
  height: 100%;
  .search-view {
    flex: 1;
    // background: #ddd url(../../assets/images/scanbg.jpg) no-repeat;
    justify-content: center;
    display: flex;
    background-size: cover;
    position: relative;

    .scan-box {
      width: 4.76rem;
      height: 4.76rem;
      align-self: center;
      border-radius: 5px;
      margin-top: 1rem;
      background: rgba(0, 0, 0, 0.3);
      box-shadow: 0 0 1px 999px rgba(0, 0, 0, 0.75);
      &::before {
        content: "";
        background: url(../../assets/images/smartsearch/scanborder.png)
          no-repeat;
        background-size: contain;
        display: block;
        position: relative;
        width: 4.78rem;
        height: 4.78rem;
        align-self: center;
      }
    }
    // .scan-txt {
    //   position: relative;
    //   bottom: -0.3rem;
    //   color: #fff;
    //   font-size: 0.28rem;
    //   text-align: center;
    //   p {
    //     margin: 0.2rem;
    //   }
    // }
    .scan-tips {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      font-size: 0.28rem;
      line-height: 1.5;
      bottom: 0.5rem;
      text-align: center;
      &.scan-loading {
        display: flex;
        align-items: center;
      }
    }
    // .scan-tips {
    //   position: absolute;
    //   bottom: 0.5rem;
    //   color: #fff;
    //   font-size: 0.28rem;
    //   left: 50%;
    //   transform: translateX(-50%);

    //   p {
    //     text-align: center;
    //     margin: 0.2rem 0;
    //   }
    // }
    // .scan-loading {
    //   position: absolute;
    //   bottom: 1rem;
    //   display: flex;
    //   align-items: center;
    // }
  }
  .img-tip {
    color: #fff;
    font-size: 0.24rem;
    padding: 0.15rem;
    background: #fda61a;
    border: 0.5px solid #eee;
    border-radius: 4px;
    position: fixed;
    top: 1rem;
    right: 0.3rem;
    opacity: 0;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -0.4rem;
      right: 0.3rem;
      height: 0.4rem;
      width: 0;
      border-left: 0.5px solid #eee;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: 0.27rem;
      top: -0.42rem;
      width: 0.05rem;
      height: 0.05rem;
      border-radius: 50%;
      background: #fda61a;
      border: 1px solid #eee;
      box-shadow: 0 0 1px 3px rgba(255, 255, 255, 0.5);
    }
  }
  .search-opt {
    display: flex;
    flex-direction: column;
    height: 3rem;
    background: -webkit-linear-gradient(-90deg, #172737, #293f64) #182339;
    .opt-txtbar {
      flex: 1;
      display: flex;
      padding: 0 0.1rem;
      .txt {
        font-size: 0.28rem;
        color: #fff;
        width: 2.2rem;
        line-height: 1rem;
        text-align: center;
        transition: font-size 0.2s;
        &.active {
          font-size: 0.36rem;
          width: 3rem;
        }
      }
    }
    .opt-btn {
      height: 2rem;
      position: relative;
      .language {
        position: absolute;
        text-align: center;
        top: -0.2rem;
        left: 0.3rem;
        .more {
          i {
            display: inline-block;
            transform: rotate(-90deg);
          }
        }
      }
      .btn {
        width: 1rem;
        height: 0.45rem;
        text-align: center;
        line-height: 0.45rem;
        background: rgba(190, 190, 190, 0.2);
        border-radius: 0.05rem;
        margin-top: 0.2rem;
        &.selected {
          background: #f1a71a;
        }
      }
      .btn-watch {
        width: 0.92rem;
        height: 0.92rem;
        background: -webkit-linear-gradient(100deg, #2095f2, #67ccfb) #3fabf6;
        border-radius: 50%;
        margin: 10px auto;
        box-shadow: 0 0 1px 7px rgba(255, 255, 255, 0.4);
        .iconfont {
          color: #fff;
          font-size: 0.92rem;
        }
        &.stop {
          background: -webkit-linear-gradient(100deg, #f22066, #f3558a) #f22066;
        }
      }
    }
  }
}
.loading {
  position: relative;
  bottom: -0.3rem;
  color: #fff;
  font-size: 0.28rem;
  text-align: center;
  margin: 0 auto;
  width: 2rem;
  display: flex;
  justify-content: center;

  .loading-txt {
    display: block;
    align-self: center;
  }
}
</style>
