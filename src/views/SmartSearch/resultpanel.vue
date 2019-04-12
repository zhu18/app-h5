<template>
  <div class="result-panel" @click="show()">
    <div class="list-head">
      <div class="cls" @click.stop="hide()">
        <i class="iconfont icon-del"></i>
      </div>
      <div class="title">
        相似商标
        <img src="../../assets/images/logo1.png">
        <div class="sort" @click.stop="sort()">排列</div>
      </div>
      <div class="query" @click.stop="search()">
        <i class="iconfont icon-query"></i>
      </div>
    </div>
    <LogoList />
  </div>
</template>

<script>
import anime from "animejs";
import LogoList from "./logolist"
export default {
  data() {
    return {
   
    };
  },
  mounted() {
    anime.set(".result-panel", {
      translateY: "130%"
    });
  },
  methods: {
    show(type) {
      type = type || "little";
      let offset = {
        all: "10%",
        little: "65%",
        hide: "130%"
      };
      anime({
        targets: ".result-panel",
        translateY: offset[type],
        easing: "easeInOutSine",
        duration: 300
      });
    },
    hide() {
      this.show("hide");
    },
    search(){

    },
    sort(){

    }
  },
  components:{
    LogoList
  }
};
</script>
<style lang="scss" scoped>
 
.result-panel {
  display: flex;
  position: fixed;
  flex-direction: column;
  height: 95%;
  width: 100%;
  transform: translateY(130%);
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #555;
  .list-head {
    height: 0.9rem;
    border-bottom: 1px solid #eee;
    width: 100%;
    display: flex;
    .cls {
    }
    .title {
      font-size: 0.32rem;
      text-align: left;
      flex: 1;
      line-height: 0.9rem;
      img {
        display: block;
        left: 50%;
        margin-left: -0.6rem;
        width: 1.2rem;
        border-radius: 50%;
        top: -0.4rem;
        position: absolute;
        border: 0.1rem solid #fff;
        background: #ddd;
      }
      .sort {
        float: right;
      }
    }
    .query {
    }
    .iconfont {
      font-size: 0.8rem;
      margin: 0.1rem;
      line-height: 0.9rem;
    }
  }
  .list-body {
    flex: 1;
    padding: 0.26rem 0.3rem;
    display: flex;
    flex-flow: column;
    .list-opt {
      padding-bottom: 0.26rem;
      span {
        font-size: 0.24rem;
        color: #5b5b5b;
      }
      .mint-button {
        margin-left: 0.25rem;
      }
    }
   
  }
}

</style>
