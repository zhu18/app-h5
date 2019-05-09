<template>
  <div class="wrap">
    <div class="top-header">
      <span class="iconfont icon-back" @click="back"></span>
      <span class="title">关于</span>
      <span class="iconfont-k"></span>
    </div>
    <div class="pic">
      <img src="../../assets/images/about.png" alt="" />
      <p>版本号1.0.5.23</p>
    </div>
    <ul class="panel">
      <router-link tag="li" :to="{ name: 'about' }"
        >版本说明<span class="iconfont icon-back icon-r"></span
      ></router-link>
      <router-link tag="li" :to="{ name: 'about' }"
        >版权信息<span class="iconfont icon-back icon-r"></span
      ></router-link>
      <router-link tag="li" :to="{ name: 'about' }"
        >使用协议<span class="iconfont icon-back icon-r"></span
      ></router-link>
    </ul>
    <div class="copyright">
      <p>北京xxxxxxxxxxxx有限公司</p>
      <p>©️2019 京icp证030173 京公网安备11000002000001号</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.goBack()
    }
  }
}
</script>
<style lang="scss" scoped>
::-webkit-search-cancel-button {
  display: none;
}
.wrap {
  position: relative;
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
      font-size: 0.36rem;
    }
  }
  .pic {
    text-align: center;
    img {
      margin-top: 0.46rem;
      width: 1.4rem;
      height: 1.4rem;
    }
    p {
      font-size: 0.28rem;
      line-height: 0.7rem;
      text-align: center;
    }
  }
  .panel {
    position: absolute;
    top: 3.7rem;
    font-size: 0.32rem;
    height: 3.3rem;
    width: 6.86rem;
    margin: 0.33rem;
    background: #fff;
    border-radius: 0.1rem;
    box-shadow: 0 0px 10px 1px rgba(4, 0, 0, 0.1);
    li {
      width: 100%;
      height: 1.1rem;
      line-height: 1.1rem;
      box-sizing: border-box;
      border-bottom: 1px solid #f2f2f2;
      padding-left: 0.32rem;
      padding-right: 0.87rem;
      position: relative;
      color: #333333;
      font-size: 0.32rem;
      &:last-child {
        border-bottom: 0 none;
      }
      .icon,
      .icon-r {
        width: 0.87rem;
        height: 100%;
        line-height: 1.1rem;
        position: absolute;
        font-size: 0.72rem;
        color: #bfbfbf;
        text-align: center;
        top: 0;
        left: 0;
      }
      .icon-r {
        left: inherit;
        right: 0;
        transform: rotate(180deg);
      }
    }
  }
  .copyright {
    position: fixed;
    width: 100%;
    bottom: 2.6rem;
    font-size: 0.24rem;
    text-align: center;
    color: #bfbfbf;
    line-height: 0.42rem;
  }
}
</style>
