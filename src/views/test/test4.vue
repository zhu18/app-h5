<template>
  <div class="home-test4">
    <div class="header-content">
      <clipbox ref="cropper"
               :img="img"
               :autoCrop="true"
               :autoCropWidth="width"
               :autoCropHeight="height"
               :canMove="false"
               :info="false"
               mode="cover"
               centerBox />
    </div>
  </div>
</template>

<script>
import img from '../../assets/images/scanbg.jpg'
import clipbox from '../../components/clipbox'
export default {
  name: "home-test4",
  components: { clipbox },
  data () {
    return {
      img,
      width: 210,
      height: 210
    };
  },
  created () {
  },
  mounted () {
    let width = document.body.clientWidth
    this.width = this.height = width * 420 / 750
    // this.$refs.cropper.startCrop() 
  },
  methods: {
  }
};
</script>
<style lang="scss">
.home-test4 {
  width: 100%;
  height: calc(100vh - 0.9rem - 1.28rem);
  background: #ffffff;
  overflow: hidden;
  overflow-y: auto;
  .header-content {
    height: 100%;
    width: 100%;
    background-color: #cbf84f;
    background-size: 100%;
    position: relative;
  }
}
</style>
