<template>
  <div class="evidence ">
    <div class="top-header ">
      <mt-header fixed
                 title="商标流程">
        <div slot="left">
          <mt-button icon="back"
                     @click='goBack'></mt-button>
        </div>
      </mt-header>
    </div>
    <div class="header-content ">
      <div class="prosess"
           v-for="(item, index) in processes"
           :key="index">
        <div class="block">
          <p class="field"><span class="field-title">申请/注册号</span><span class="field-value">{{name}}</span></p>
          <p class="field"><span class="field-title">业务名称</span><span class="field-value">{{item.name}}</span></p>
          <p class="field"><span class="field-title">环节名称</span><span class="field-value">{{item.node}}</span></p>
          <p class="field"><span class="field-title">结论</span><span class="field-value">{{item.result}}</span></p>
          <p class="field"><span class="field-title">日期</span><span class="field-value">{{item.date}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datePicker from '../../components/datePicker/index'
import img1 from '../../assets/images/lawenforcement/evidence.jpg'
import img2 from '../../assets/images/lawenforcement/evidence2.jpg'
import img3 from '../../assets/images/lawenforcement/evidence3.jpg'
export default {
  name: "evidence",
  components: { datePicker },
  data () {
    return {
      name: '20150000079568',
      processes: [
        {
          name: '驳回复审',
          node: '等待打印注册证',
          result: '结束',
          date: '2018年09月19日'
        },
        {
          name: '驳回复审',
          node: '实审裁文发文',
          result: '结束',
          date: '2018年09月19日'
        },
        {
          name: '驳回复审',
          node: '评审分案',
          result: '结束',
          date: '2018年09月19日'
        },
        {
          name: '驳回复审',
          node: '申请收文',
          result: '结束',
          date: '2018年09月19日'
        }
      ]
    };
  },
  created () {
  },
  mounted () {
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    viewdetails () {
      this.$router.push('/lawDetails');
    },
  }
};
</script>
<style lang="scss">
.evidence {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  .top-header {
    height: 0.9rem;
    background-color: #2095f2;
    .mint-header {
      height: 0.9rem;
      background: #2095f2;
    }
  }
  .header-content {
    width: 100%;
    background-size: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 0 0.32rem;
  }
  .prosess {
    $block-height: 3.4rem;
    $circle-height: 1rem;
    position: relative;
    padding-left: 1.1rem;
    &::before {
      content: ' ';
      position: absolute;
      left: 0;
      top: ($block-height - $circle-height) /2;
      width: $circle-height;
      height: $circle-height;
      border-radius: $circle-height;
      box-sizing: border-box;
      border: 0.15rem solid rgba(191, 191, 191, 0.2);
      padding: 0.15rem;
      background: rgba(191, 191, 191, 0.5);
      background-clip: content-box;
    }
    &:not(:last-child)::after {
      content: ' ';
      position: absolute;
      left: ($circle-height - 0.1rem)/2;
      top: ($block-height + $circle-height) /2;
      width: 0.1rem;
      height: $block-height - $circle-height + 0.2rem;
      background: linear-gradient(180deg, rgba(191, 191, 191, 0.4) 50%, transparent 0%) 0 0/ 100% 0.2rem
        repeat;
    }
    .block {
      width: 5.5rem;
      height: $block-height;
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: 0px 0.04rem 0.08rem 0px rgba(0, 0, 0, 0.1);
      line-height: 1;
      padding: 0.1rem 0.4rem;
      margin: 0.24rem 0.2rem;
      position: relative;
      &::before {
        content: ' ';
        position: absolute;
        border-width: 0.15rem 0.2rem;
        border-style: solid;
        border-color: transparent #fff transparent transparent;
        top: $block-height / 2 - 0.15rem;
        left: -0.4rem;
      }
      .field {
        margin: 0.3rem 0;
      }
      .field-title {
        display: inline-block;
        width: 1.4rem;
        font-size: 0.24rem;
        color: #5b5b69;
        margin-right: 0.3rem;
        text-align: right;
      }
      .field-value {
        display: inline-block;
        font-size: 0.28rem;
        color: #1e2128;
      }
    }
  }
}
</style>
