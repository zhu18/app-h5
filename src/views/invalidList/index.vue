<template>
  <div class="invalid-list flex">
    <div class="top-header flex-fixed ">
      <mt-header fixed
                 :title="title">
        <div slot="left">
          <mt-button icon="back"
                     @click='goBack'></mt-button>
        </div>
      </mt-header>
    </div>
    <rejectList class="main flex-fill"
                v-if="this.currentTab==1" />
    <city-list class="main flex-fill"
               v-else />
    <div class="bottom-bar flex-fixed">
      <div class="flex">
        <div class="tab-item flex-fill"
             :class="{active:currentTab==0}"
             @click="clickTab(0)">案件共享</div>
        <div class="tab-split flex-fixed"></div>
        <div class="tab-item  flex-fill"
             :class="{active:currentTab==1}"
             @click="clickTab(1)">复审无效商标</div>
      </div>
    </div>
  </div>
</template>

<script>
import cityList from './cityList'
import rejectList from './brandRejectList'
export default {
  name: "invalid-list",
  components: { cityList, rejectList },
  data () {
    return {
      currentTab: 0,
      title: '案件共享地区列表'
    };
  },
  computed: {
    // title () {
    //   return this.currentTab == 0 ? '案件共享' : '复审无效商标'
    // }
  },
  methods: {
    init () {
      this.currentTab = this.$route.name == 'cityList' ? 0 : 1
    },
    clickTab (index) {
      if (index == this.currentTab) return
      if(index === 0){
        this.title='案件共享地区列表'
      }else {
        this.title= '商标复审无效决定'
      }
      this.$router.replace({ name: index === 0 ? 'cityList' : 'invalidList' })
    },
    goBack () {
      this.$router.goBack()
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.init()
    })
  }
};
</script>
<style lang="scss">
.invalid-list {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  flex-direction: column;
  .top-header {
    height: 0.9rem;
    background-color: #2095f2;
    .mint-header {
      height: 0.9rem;
      background: #2095f2;
    }
    .iconfont {
      width: 0.72rem;
      color: #fff;
      font-size: 0.72rem;
    }
  }
  .bottom-bar {
    $height: 0.98rem;
    position: relative;
    height: $height;
    width: 100%;
    background-color: #fff;
    & > div {
      position: fixed;
      background-color: #fff;
      height: $height;
      width: 100%;
      bottom: 0;
      left: 0;
      right: 0;
      align-items: center;
    }
    .tab-split {
      width: 1px;
      background: #bfbfbf;
      height: 0.32rem;
    }
    .tab-item {
      font-size: 0.32rem;
      text-align: center;
      color: #5b5b69;
      height: 100%;
      width: 2rem;
      line-height: $height;
      background: linear-gradient(
          to left,
          rgba(191, 191, 191, 0.3),
          rgba(191, 191, 191, 0.3)
        )
        no-repeat 0 0 / 100% 1px;
      &.active {
        $color: #2095f2;
        color: $color;
        background: linear-gradient(to left, $color, $color) no-repeat 0 0 /
          100% 0.04rem;
      }
    }
  }

  .main {
    height: calc(100vh - 0.98rem - 0.9rem);
    overflow-y: auto;
    // height: max-content;
    // flex: 1 1;
  }
}
</style>
