<template>
  <div class="wrap">
    <div class="top-header">
      <span class="iconfont icon-back" @click="back"></span>
      <span class="title">设置</span>
      <span class="iconfont-k"></span>
    </div>
    <p class="font-size">字体大小</p>
    <div class="panel">
      这是一段测试文字，会按照下方您的选择调整字体大小
    </div>
    <ul class="handle-panel">
      <li :class="['panel-item', fontSize == 'small' ? 'active' : '']" @click="changeFontSize('small')"></li>
      <li :class="['panel-item', fontSize == 'middle' ? 'active' : '']"  @click="changeFontSize('middle')"></li>
      <li :class="['panel-item', fontSize == 'big' ? 'active' : '']"  @click="changeFontSize('big')"></li>
      <li class="panel-line"></li>
      <li class="panel-line"></li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['fontSize'])
  },
  methods: {
    ...mapMutations(['changeFontSize']),
    back() {
      this.$router.goBack()
    }
  }
}
</script>
<style lang="scss" scoped>
// ::-webkit-search-cancel-button {
//   display: none;
// }
.wrap {
  .top-header {
    height: 0.9rem;
    background-color: #2095f2;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    .iconfont-k {
      width: 0.64rem;
      display: inline-block;
      visibility: hidden;
    }
    .iconfont {
      font-size: 0.84rem;
      color: #fff;
    }
    .title {
      font-size: 0.30rem;
    }
  }
  .font-size {
    font-size: 0.28rem;
    line-height: 0.8rem;
    height: 0.57rem;
    padding-left: 0.33rem;
  }
  .panel {
    top: 3.7rem;
    font-size: 0.32rem;
    height: 3.3rem;
    width: 6.86rem;
    margin: 0.33rem;
    background: #fff;
    border-radius: 0.1rem;
    box-shadow: 0 0px 10px 1px rgba(4, 0, 0, 0.1);
    padding: 0.8rem 0.32rem;
    box-sizing: border-box;
    line-height: 0.5rem;
  }
  .handle-panel {
    position: fixed;
    bottom: 2.8rem;
    height: 2rem;
    width: 6.86rem;
    margin: 0.33rem;
    background: #fff;
    border-radius: 0.1rem;
    box-shadow: 0 0px 10px 1px rgba(4, 0, 0, 0.1);
    padding: 0.8rem 0.32rem;
    box-sizing: border-box;
    .panel-item {
      float: left;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      border: 1px solid #bfbfbf;
      padding: 0.04rem;
      background: #cfc2c2;
      background-clip: content-box;
      box-sizing: border-box;
      position: relative;
      text-align: center;
      transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
      &.active {
        background-color: #2095f2;
        color: #2095f2;
        border-color: #2095f2;
      }
      &:nth-child(1) {
        margin-left: 0.64rem;
        margin-right: 1.88rem;
        &::before {
          content: '小';
          position: absolute;
          width: 0.4rem;
          height: 0.6rem;
          line-height: 0.6rem;
          top: -0.6rem;
          left: 0;
          font-size: 0.28rem;
        }
      }
      &:nth-child(2) {
        margin-right: 1.88rem;
        &::before {
          content: '中';
          position: absolute;
          width: 0.4rem;
          height: 0.6rem;
          line-height: 0.6rem;
          top: -0.6rem;
          left: 0;
          font-size: 0.32rem;
        }
      }
      &:nth-child(3) {
        &::before {
          content: '大';
          position: absolute;
          width: 0.4rem;
          height: 0.6rem;
          line-height: 0.6rem;
          top: -0.6rem;
          left: 0;
          font-size: 0.4rem;
        }
      }
    }
    .panel-line {
      position: absolute;
      top: 50%;
      left: 1.36rem;
      width: 1.88rem;
      height: 1px;
      background: #bfbfbf;
      &:nth-child(5) {
        left: inherit;
        right: 1.33rem;
      }
    }
  }
}
</style>
