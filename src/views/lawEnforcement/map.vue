<template>
<div id="container" class="map">
        <div class="top-header">
            <Search/>
        </div>
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

    let marker=createMarker(328,'朝阳区',[116.474983,39.953884])
    map.add(marker)
    marker=createMarker(123,'海淀区',[116.311707,39.970253])
    map.add(marker)
    marker=createMarker(135,'东城区',[116.420366,39.931757])
    map.add(marker)
    marker=createMarker(233,'西城区',[116.364025,39.919362])
    map.add(marker)
    marker=createMarker(98,'丰台区',[116.300784,39.874192])
    map.add(marker)

  },
  components:{
      Search
  }
};
function createMarker(nmb,txt,pos){
    var marker = new AMap.Marker({
        content: getContent(nmb,txt),  // 自定义点标记覆盖物内容
        position:  pos, // 基点位置
        offset: new AMap.Pixel(-17, -42) // 相对于基点的偏移位置
    });
    return marker;
}
function getContent(nmb,txt){
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
.cmarker{
    position: relative;
}
.txt-wrap{
    position: absolute;
    border-radius: 50%;
    width: 1.4rem;
    height: 1.4rem;
    z-index: 2;
    padding: .2rem;
    box-sizing: border-box;
    top: 0.1rem;
    left: 0;
    text-align: center;
    color: #fff;
        display: flex;
    flex-flow: column;
}
.txt-wrap .nmb{
    flex: 1;
    font-size:.38rem;
}
.txt-wrap .txt{
    flex: 1;
    font-size:.24rem;
}
.iconfont.icon-msg{
        color:#2294f2;
        font-size:1.4rem;
            position: absolute;
    text-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
    
    z-index: 1;
}
</style>

<style lang="scss" scoped>
.top-header{
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.9rem;
    background: #2095f2;
    box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
}

.map{
    height: 100%;
    width: 100%;
        touch-action: none;
}

</style>
