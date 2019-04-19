<template>
  <div class="date-select">
    <div class="top-header ">
      <mt-header fixed
                 :title="title">
        <div slot="left">
          <mt-button icon="back"
                     @click='goBack'></mt-button>
        </div>

      </mt-header>
    </div>
    <div class="header-content">
      <date-picker class="datapicker"
                   @selectDate="selectDate" />
    </div>
  </div>
</template>

<script>
import datePicker from '../../components/datePicker/index'
export default {
  name: "date-select",
  components: { datePicker },
  data () {
    return {
    };
  },
  computed: {
    title () {
      return this.$route.query.title ? this.$route.query.title : '日期选择'
    }
  },
  methods: {
    goBack () {
      this.$router.goBack()
    },
    selectDate (date) {
      this.$router.push({ name: 'enforcementdetails', query: { date } })
    }
  }
};
</script>
<style lang="scss">
.date-select {
  width: 100%;
  height: calc(100vh - 0.9rem - 1.28rem);
  overflow: hidden;
  overflow-y: auto;
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
  .header-content {
    height: 100%;
    width: 100%;
    background-size: 100%;
    position: relative;
    overflow: hidden;
  }
  .datapicker {
    margin: 0.32rem;
  }
}
</style>
