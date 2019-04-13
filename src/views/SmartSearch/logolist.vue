<!--
* 文件名：logolist
* 作者：zhu18
* 描述：智能检索-结果面板中的-商标列表
* 修改时间：2019-04-12
-->
<template>
  <div class="list-body">
    <!-- 头部分类区 -->
    <div class="list-opt">
      <span>您想找的是:</span>
      <span class="scan-txt" v-show="scanType==='txt'">
        {{scanTxt}}
        <mt-button type="primary" size="small">修改</mt-button>
      </span>
      <div :class="scanType==='txt'?'btnline':'btnfloat'">
        <mt-button type="default" size="small">鞋类</mt-button>
        <mt-button type="default" size="small">家具</mt-button>
        <mt-button type="default" size="small">其他</mt-button>
      </div>
    </div>
    <!-- 商标列表 -->
    <ul class="logo-box clearfix">
      <li class="item" v-for="item in dataList" :key="item.id" @click="select(item.id)">
        <img src="../../assets/images/logo1.png" alt>
        <h2>{{item.title}}</h2>
        <p>{{item.number}}</p>
        <p>{{item.date}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  props: ["scan-type"],
  data() {
    return {
      scanTxt: "1928304839487",
      dataList: [
        {
          id: 1,
          logo: "",
          title: "耐克创新有限合伙公司1",
          number: "申请/注册号:12749588",
          date: "申请日:2007-04-17"
        },
        {
          id: 2,
          logo: "",
          title: "耐克创新有限合伙公司2",
          number: "申请/注册号:12749588",
          date: "申请日:2007-04-17"
        },
        {
          id: 3,
          logo: "",
          title: "耐克创新有限合伙公司3",
          number: "申请/注册号:12749588",
          date: "申请日:2007-04-17"
        },
        {
          id: 4,
          logo: "",
          title: "耐克创新有限合伙公司",
          number: "申请/注册号:12749588",
          date: "申请日:2007-04-17"
        },
        {
          id: 5,
          logo: "",
          title: "耐克创新有限合伙公司",
          number: "申请/注册号:12749588",
          date: "申请日:2007-04-17"
        }
      ]
    };
  },
  mounted() {
    anime.set(".result-list", {
      translateY: "130%"
    });
  },
  methods: {
    select(id) {
      this.$router.push("/searchresult");
    }
  }
};
</script>
<style lang="scss" scoped>
.list-body {
  flex: 1;
  padding: 0.26rem 0.3rem;
  display: flex;
  flex-flow: column;
  .list-opt {
    padding-bottom: 0.26rem;
    .btnline {
      display: block;
      margin-top: 0.25rem;
      margin-left: -0.25rem;
    }
    .btnfloat {
      display: inline;
    }
    .scan-txt {
      padding-left: 0.1rem;
      font-size: 0.28rem;
      color: #333;
    }
    span {
      font-size: 0.24rem;
      color: #5b5b5b;
    }
    .mint-button {
      margin-left: 0.25rem;
      height: 0.57rem;
    }
  }
}
.logo-box {
  height: calc(100vh - 0.9rem);
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 0.05rem;
  .item {
    position: relative;
    float: left;
    width: 3.27rem;
    height: 3.84rem;
    background: #ffffff;
    border-radius: 0.1rem;
    padding: 0.32rem 0.25rem;
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 0.25rem;
    &:nth-child(2n-1) {
      margin-right: 0.25rem;
    }
    img {
      width: 1.8rem;
      height: 1.8rem;
      display: block;
      margin: 0 auto 0.2rem;
    }
    h2 {
      font-size: 0.28rem;
      font-weight: 400;
      line-height: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      font-size: 0.24rem;
      color: #5b5b69;
      line-height: 1.5;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
