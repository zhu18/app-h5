<template>
  <div class="result-list" @click="show('all')">
    <div class="list-head">
      <div class="cls" @click.stop="hide()">
        <i class="iconfont icon-del"></i>
      </div>
      <div class="title">相似商标</div>
      <div class="query">
        <i class="iconfont icon-query"></i>
      </div>
    </div>
    <div class="list-body">
      <div class="list-opt">
        <span>您想找的是:</span>
        <mt-button type="default" size="small">鞋类</mt-button>
        <mt-button type="default" size="small">家具</mt-button>
        <mt-button type="default" size="small">其他</mt-button>
      </div>
      <div class="list-block">
        <div class="block">
          <img src="../../assets/images/logo1.png">
        </div>
        <div class="block">
          <img src="../../assets/images/logo1.png">
        </div>
        <div class="block">
          <img src="../../assets/images/logo2.png">
        </div>
        <div class="block">
          <img src="../../assets/images/logo1.png">
        </div>
        <div class="block">
          <img src="../../assets/images/logo2.png">
        </div>
        <div class="block">
          <img src="../../assets/images/logo2.png">
        </div>
        <div class="block">
          <img src="../../assets/images/logo1.png">
        </div>
        <div class="block">
          <img src="../../assets/images/logo1.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
    mounted(){
        anime.set(".result-list",{
        translateY: '130%',
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
        targets: ".result-list",
        translateY: offset[type],
        easing:'easeInOutSine',
        duration:300
      });
    },
    hide() {
      this.show("hide");
    }
  }
};
</script>
<style lang="scss" scoped>
.result-list {
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
      text-align: center;
      flex: 1;
      line-height: 0.9rem;
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
    .list-block {
      flex: 1;

      .block {
        width: 3.05rem;
        height: 3.05rem;

        margin: 0.2rem;
        float: left;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
