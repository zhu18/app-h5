<template>
  <div class="home-test5">
    <div class="header-content">
      <date-picker class="datapicker" />
    </div>
  </div>
</template>

<script>
import datePicker from '../../components/datePicker/index'
export default {
  name: "home-test5",
  components: { datePicker },
  data () {
    return {
    };
  },
  created () {
  },
  mounted () {

  },
  methods: {
  }
};
</script>
<style lang="scss">
.home-test5 {
  width: 100%;
  height: calc(100vh - 0.9rem - 1.28rem);
  background: #ffffff;
  overflow: hidden;
  overflow-y: auto;
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
