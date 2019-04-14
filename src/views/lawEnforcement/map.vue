<template>
  <div class="map-wrap">
    <div class="top-header">
      <Search/>
    </div>
    <div id="container" class="map"></div>
  </div>
</template>
<script>
import Search from "../../components/search/lesearch.vue";

export default {
  mounted() {
    var map = new AMap.Map("container", {
      resizeEnable: true,
      zoom: 11,
      center: [116.39, 39.9]
    });

    AMap.plugin(["AMap.ToolBar"], function() {
      // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
      map.addControl(
        new AMap.ToolBar({
          // 简易缩放模式，默认为 false
          liteStyle: true
        })
      );
    });
    let marker1 = createMarker(328, "朝阳区", [116.474983, 39.953884]);
    let marker2 = createMarker(123, "海淀区", [116.311707, 39.970253]);
    let marker3 = createMarker(135, "东城区", [116.420366, 39.931757]);
    let marker4 = createMarker(233, "西城区", [116.364025, 39.919362]);
    let marker5 = createMarker(98, "丰台区", [116.300784, 39.874192]);

    map.add(marker1);
    map.add(marker2);
    map.add(marker3);
    map.add(marker4);
    map.add(marker5);

    marker1.on("click", this.showInfo);
    marker2.on("click", this.showInfo);
    marker3.on("click", this.showInfo);
    marker4.on("click", this.showInfo);
    marker5.on("click", this.showInfo);

    document.addEventListener("touchstart", function(event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    });
  },
  methods: {
    showInfo() {
      this.$router.push("enforcementdetails");
    }
  },
  components: {
    Search
  }
};
function createMarker(nmb, txt, pos) {
  var marker = new AMap.Marker({
    content: getContent(nmb, txt), // 自定义点标记覆盖物内容
    position: pos, // 基点位置
    offset: new AMap.Pixel(-17, -42) // 相对于基点的偏移位置
  });
  return marker;
}
function getContent(nmb, txt) {
  var content = `<div class="cmarker">
        <div class="txt-wrap">
            <div class="nmb">${nmb}</div>
            <div class="txt">${txt}</div>
        </div>
        <i class="iconfont icon-msg"></i></div>`;
  return content;
}
</script>
<style>
/* .amap-logo,.amap-copyright{
 visibility: hidden;
} */
.cmarker {
  position: relative;
}
.txt-wrap {
  position: absolute;
  border-radius: 50%;
  width: 1.4rem;
  height: 1.4rem;
  z-index: 2;
  padding: 0.2rem;
  box-sizing: border-box;
  top: 0.1rem;
  left: 0;
  text-align: center;
  color: #fff;
  display: flex;
  flex-flow: column;
}
.txt-wrap .nmb {
  flex: 1;
  font-size: 0.38rem;
}
.txt-wrap .txt {
  flex: 1;
  font-size: 0.24rem;
}
.iconfont.icon-msg {
  color: #2294f2;
  font-size: 1.4rem;
  position: absolute;
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);

  z-index: 1;
}
</style>

<style lang="scss" scoped>
.top-header {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.9rem;
  background: #2095f2;
  box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
}
.map-wrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.map {
  position: relative;
  height: 100%;
  width: 100%;
  touch-action: none;
  overflow: hidden;
}
</style>
