<!--
* startLawEnforcement
* 作者：邢玮
* 描述：开始执法
* 修改时间：2019-04-14
-->
<template>
  <div class="start-wrapper">
    <div class="start-wrapper-blur" :class="{active: btnClickFlag}">
      <div class="top-header">
        <mt-header fixed :title="title">
          <div slot="left">
            <mt-button icon="back" @click="goBack"></mt-button>
          </div>
          <mt-button v-show="handleEdit" slot="right" @click="edit">{{collectEdit?'完成':'编辑'}}</mt-button>
        </mt-header>
      </div>
      <div class="start-content-wrapper">
        <div class="start-content">
          <div class="start-item">
            <p class="start-item-title">执法内容</p>
            <p class="start-item-content">金某某XXXX案件相关执法</p>
          </div>
          <div class="start-item">
            <p class="start-item-title">执法人</p>
            <div class="start-item-content">
              <ul class="lawuser-box clearfix">
                <li>
                  <span class="host">
                    <i class="iconfont icon-host"></i>
                  </span>
                  <img src="../../assets/images/lawenforcement/lawUser.jpg" class="img">
                </li>
                <li>
                  <img src="../../assets/images/lawenforcement/lawUser.jpg" class="img">
                </li>
                <li class="add-lawuser">
                  <i class="iconfont icon-add"></i>
                  <p>添加执法人</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="start-item">
            <p class="start-item-title">时间</p>
            <p class="start-item-content">2019-04-05</p>
          </div>
          <div class="start-item">
            <p class="start-item-title">执法地点</p>
            <p class="start-item-content">北京市海淀区丹棱街10号新海大厦办公中心内</p>
          </div>
          <div class="start-item">
            <p class="start-item-title">现场取证</p>
            <ul class="evidence-box clearfix">
              <li>
                <img src="../../assets/images/lawenforcement/evidence.jpg" class="img">
              </li>
              <li>
                <img src="../../assets/images/lawenforcement/evidence2.jpg" class="img">
              </li>
              <li>
                <img src="../../assets/images/lawenforcement/evidence3.jpg" class="img">
              </li>
              <li class="add-evidence">
                <i class="iconfont icon-add"></i>
                <p>上传图片</p>
              </li>
            </ul>
          </div>
          <div class="start-bottom">
            <span>
              <i class="iconfont icon-share"></i>
            </span>
            <span>
              <i class="iconfont icon-info"></i>
            </span>
            <span>
              <i class="iconfont icon-collection"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="start-btn">
      <span class="start-add-btn" :class="{active: btnClickFlag}" @click="btnClick">
        <i class="iconfont icon-add"></i>
      </span>
      <ul class="start-hidden-btn">
          <li  class="start-hidden-li">
          <span class="start-add-btn">
            <i class="iconfont icon-txtquery"></i>
          </span>
        </li>
        
        <li  class="start-hidden-li">
          <span class="start-add-btn" @click="recordBtnClick">
            <i class="iconfont icon-record"></i>
          </span>
        </li>
        <li class="start-hidden-li">
          <span class="start-add-btn start-btn-pic" @click="picBtnClick">
            <i class="iconfont icon-pic"></i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import anime from "animejs";
import {  MessageBox } from "mint-ui";
export default {
  name: "startLawEnforcement",
  data() {
    return {
      title: "执法(8620)",
      handleEdit: true,
      collectEdit: false,
      btnClickFlag: false
    };
  },
  mounted() {
      this.$route.params.code && (this.title = "执法("+this.$route.params.code+")")

      anime.set(".start-hidden-li", {
        bottom: "0",
        scale: [0, 0],
        
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    edit() {},
    //右下角加号点击
    btnClick() {
      this.btnClickFlag = !this.btnClickFlag;
      if(this.btnClickFlag){
          anime({
            targets: ".start-hidden-li",
            // translateY: offset[type],
            translateY: function(el, i) {
                return -(1.05 + 1.15 * i) + 'rem';
            },
            scale:[1,1],
            rotate: '1turn',
            easing: "easeInOutCubic",
            duration: 300,
            delay: anime.stagger(100, {direction: 'reverse'})
        })
      }else {
          anime({
            targets: ".start-hidden-li",
            // translateY: offset[type],
            translateY: function(el, i) {
                return 0;
            },
            easing: "easeInOutCubic",
            duration: 300,
            delay: anime.stagger(100),
            endDelay: function(el, i, l) {
                return (l - i) * 100;
            }
        })
      }
      
    },
    // 图片按钮点击
    picBtnClick() {
        MessageBox("提示", "原生app对接，现在为模拟状态");
      this.$router.push({
        name: "startLawEnforcementUpload",
        params: { type: "pic" }
      });
    },
    // 图片按钮点击
    recordBtnClick() {
        MessageBox("提示", "原生app对接，现在为模拟状态");
      this.$router.push({
        name: "startLawEnforcementUpload",
        params: { type: "record" }
      });
    },
    
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.start-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f6f6f6;
}
.start-wrapper-blur {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  &.active {
    filter: blur(3px);
  }
}
.start-mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  z-index: 1;
}
.top-header {
  height: 0.9rem;
  background-color: #2095f2;
  box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
  .mint-header {
    height: 0.9rem;
    background: transparent;
  }
}
.start-content-wrapper {
  position: relative;
  height: calc(100% - 0.9rem);
  padding: 0 0.32rem;
  overflow-y: auto;
  .start-content {
    margin: 0.4rem 0;
    padding: 0.32rem;
    border-radius: 0.1rem;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    .start-item {
      margin-bottom: 0.36rem;
      .start-item-title {
        font-size: 0.24rem;
        color: #5b5b69;
      }
      .start-item-content {
        margin-top: 0.16rem;
        font-size: 0.28rem;
        color: #1e2128;
      }
    }
  }
}
.start-btn {
  position: fixed;
  right: 0.64rem;
  bottom: 0.6rem;
  z-index: 2;
  .start-add-btn {
    display: inline-block;
    width: 0.98rem;
    height: 0.98rem;
    background: #2095f2;
    text-align: center;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    i {
      font-size: 0.6rem;
      line-height: 0.98rem;
      color: #fff;
    }
    &.active {
      background: #8ac5f3;
      transform: rotate(-45deg);
    }
  }
  .start-btn-pic {
    background: #fea71a;
  }
  .start-hidden-btn {
    position: absolute;
    width: 0.98rem;
    bottom: 0rem;
    right: 0;
    li {
        position: absolute;
        bottom: 0;
      z-index: -1;
      span {
        i {
          font-size: 0.8rem;
        }
      }
    }
  }
}
.start-bottom {
  width: 4.14rem;
  margin: 0.4rem auto 0.08rem;
  span {
    display: inline-block;
    width: 0.98rem;
    height: 0.98rem;
    margin-right: 0.6rem;
    border-radius: 50%;
    border: 0.02rem solid #e5e5e5;
    box-sizing: border-box;
    text-align: center;
    &:last-child {
      margin: 0;
    }
    i {
      line-height: 0.98rem;
      font-size: 0.6rem;
      color: rgba(191, 191, 191, 0.8);
    }
  }
}
//执法人
.lawuser-box {
  margin: 0 0 0.4rem 0;
  li {
    position: relative;
    width: 1.9rem;
    height: 1.9rem;
    float: left;
    margin: 0.14rem 0.26rem 0 0;
    overflow: hidden;
    border-radius: 0.1rem;
    background: #f6f6f6;
    img.img {
      width: 1.64rem;
      height: 1.64rem;
      margin: 0.26rem 0 0 0.13rem;
    }
    .host{
        position: absolute;
        top: .1rem;
        left: .1rem;
        display: inline-block;
        width: .32rem;
        height: .32rem;
        border-radius: 50%;
        border: .02rem solid rgba(32,149,242,.3);
        text-align: center;
        line-height: .3rem;
        i {
            display: inline-block;
            color: #2095f2;
            // font-size: 0.6rem;
            transform: scale(2.3);
            transform-origin: 50% 50%;
        }
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  li.add-lawuser {
    background: #f6f6f6;
    border: 0.02rem dashed #dfdfdf;
    text-align: center;
    box-sizing: border-box;
    i {
      font-size: 0.8rem;
      color: #bfbfbf;
      margin-top: 0.3rem;
      display: inline-block;
      font-weight: 500;
    }
    p {
      font-size: 0.24rem;
      color: #5b5b69;
    }
  }
}
//现场取证
.evidence-box {
  margin: 0 0 0.4rem 0;
  li {
    width: 2.98rem;
    height: 1.68rem;
    float: left;
    margin: 0.26rem 0.26rem 0 0;
    overflow: hidden;
    border-radius: 0.1rem;
    img.img {
      width: 2.98rem;
      height: 1.68rem;
    }
    &:nth-child(even) {
      margin-right: 0;
    }
  }
  /*现场取证-上传图片*/
  li.add-evidence {
    background: #f6f6f6;
    border: 0.02rem dashed #dfdfdf;
    text-align: center;
    box-sizing: border-box;
    i {
      font-size: 0.8rem;
      color: #bfbfbf;
      margin-top: 0.3rem;
      display: inline-block;
      font-weight: 500;
    }
    p {
      font-size: 0.24rem;
      color: #5b5b69;
    }
  }
}
</style>


