<template>
  <div class="my">
    <div class="top-header">
      <h2 class="title">我的</h2>
      <span class="edit">编辑</span>
      <div class="figure">
        <span class="box">
          <img :src="imgSrc" alt="">
        </span>
        <p>刘国福</p>
        <p>北京市海淀分局</p>
        <p>商标防伪法制办公室</p>
      </div>
    </div>
    <ul class="panel">
      <router-link tag="li" :to="{ name: 'collection' }"
        ><span class="iconfont icon-coll icon"></span>我的收藏<span
          class="iconfont icon-back icon-r"
        ></span
      ></router-link>
      <router-link tag="li" :to="{ name: 'set' }"
        ><span class="iconfont icon-shezhi icon"></span>设置<span
          class="iconfont icon-back icon-r"
        ></span
      ></router-link>
      <router-link tag="li" :to="{ name: 'about' }"
        ><span class="iconfont icon-guanyu icon"></span>关于<span
          class="iconfont icon-back icon-r"
        ></span
      ></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      imgSrc:'./police.png'
    }
  }
}
</script>
<style lang="scss" scoped>
.my {
  background: #f6f6f6;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 1.28rem;
  overflow-y: auto;
  .title {
    position: absolute;
    top: 0rem;
    height: 0.9rem;
    width: 100%;
    line-height: 0.9rem;
    text-align: center;
    color: #fff;
    font-size: 0.36rem;
    font-weight: normal;
    padding: 0 0.32rem;
  }
  .edit {
    position: absolute;
    top: 0rem;
    right: 0;
    height: 0.9rem;
    line-height: 0.9rem;
    color: #fff;
    font-size: 0.36rem;
    font-weight: normal;
    padding: 0 0.32rem;
    text-align: right;
  }
  .top-header {
    height: 4.25rem;
    position: relative;
    top: -0.03rem;
    color: #fff;
    letter-spacing: 0.02rem;
    background: url(../../assets/images/my-bg.png) no-repeat center center;
    background-size: cover;
    .figure {
      position: absolute;
      width: 100%;
      top: .9rem;
      height: calc(4.25rem - 0.9rem);
      text-align: center;
      p{
        color: #d2eafc;
        margin-bottom: 0.1rem;

      }
      p:nth-child(2) {
        height: 0.8rem;
        margin-bottom: 0;
        color: #fff;
        line-height: 0.8rem;
        font-size: 0.32rem;
      }
    }
    .box {
      display: block;
      width: 1.4rem;
      height: 1.4rem;
      background: #f6f6f6;
      border-radius: 0.1rem;
      margin: 0 auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .panel {
    position: absolute;
    top: 4.9rem;
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
      padding-left: 0.87rem;
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
}
</style>
