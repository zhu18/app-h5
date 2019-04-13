<!--
* 文件名：SmartSearch
* 作者：zhu18
* 描述：智能检索
* 修改时间：2019-04-11
-->
<template>
  <div class="search-wrap">
    <!-- 页头 -->
    <div class="top-header">
      <mt-header fixed>
        <div slot="left">
          <mt-button icon="back" @click="back"></mt-button>
        </div>
        <mt-button slot="right" @click="openHelp()">
          <i class="iconfont icon-help"></i>
        </mt-button>
        <mt-button slot="right" @click="openHistory()">
          <i class="iconfont icon-time"></i>
        </mt-button>
        <mt-button slot="right" @click="openPic()">
          <i class="iconfont icon-img"></i>
        </mt-button>
      </mt-header>
      <div ref="imgtip" class="img-tip" @click="hideTip">相册可以直接选择图片识别</div>
    </div>
    <!-- 扫描区 -->
    <div class="search-view">
      <div class="scan-box">
        <div class="scan-txt" v-show="!isScaning">
          <p>请把商标放于框内</p>
          <p>商标清晰、无遮挡、无阴影</p>
        </div>
        <div class="loading" v-show="isScaning">
          <mt-spinner color="#26a2ff" type="double-bounce"></mt-spinner>
          <span class="loading-txt">识别中...</span>
        </div>
      </div>
    </div>
    <!-- 底部操作区 -->
    <div class="search-opt">
      <div class="opt-txtbar">
        <div class="txt" :class="scanType=='txt'&&'active left'" @click="setScanType('txt')">扫图识字</div>
        <div class="txt" :class="scanType=='img'&&'active right'" @click="setScanType('img')">识图</div>
      </div>
      <div class="opt-btn">
        <div class="btn-watch" :class="isScaning&&'stop'" @click="scan">
          <i class="iconfont icon-pic" v-show="!isScaning"></i>
          <i class="iconfont icon-del" v-show="isScaning"></i>
        </div>
        <div class="language" v-show="scanType=='txt'">
          <p>语言</p>
          <div class="btn selected">中文</div>
          <div class="btn">英文</div>
          <div class="more">
            <i class="iconfont icon-back"></i>
          </div>
        </div>
      </div>
    </div>
    <ResultPanel ref="resultpanel"/>
  </div>
</template>
<script>
import { Spinner, MessageBox } from "mint-ui";
import anime from "animejs";
import ResultPanel from "./resultpanel";
export default {
  name: "smartSearch",
  data() {
    return {
      scanType: "img",
      isScaning: false,
      scanOk: false,
      timer: null
    };
  },
  created() {},
  mounted() {
    document.addEventListener(
      "click",
      () => {
        this.hideTip();
      },
      false
    );
    anime({
      targets: ".img-tip",
      translateY: [-30, 0],
      opacity: 1,
      duration: 1000
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    hideTip() {
      this.$refs.imgtip&&this.$refs.imgtip.remove();
    },
    openHelp() {
      MessageBox("提示", "帮助待开发...");
    },
    openHistory() {
      this.$router.push("searchhistory");
    },
    openPic() {
      MessageBox("提示", "原生app对接-打开系统相册");
    },
    scan() {
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
    setScanType(type) {
      //设置识别类型
      if (this.scanType == type) return;

      this.scanType = type;
      let x = type === "txt" ? "2.2rem" : "0";
      anime({
        targets: ".opt-txtbar",
        translateX: x
      });
    },
    showList() {
      //显示识别结果
      this.$refs.resultpanel.show("all");
    },
    closeList() {
      //关闭识别结果
      this.$refs.resultpanel.hide();
    }
  },
  components: {
    ResultPanel
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
    background: #ddd url(../../assets/images/scanbg.jpg) no-repeat;
    justify-content: center;
    display: flex;
    background-size: cover;

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
    .scan-txt {
      position: relative;
      bottom: -0.3rem;
      color: #fff;
      font-size: 0.28rem;
      text-align: center;
      p {
        margin: 0.2rem;
      }
    }
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
