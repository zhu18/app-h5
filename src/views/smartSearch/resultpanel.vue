<!--
* 文件名：resultpanel
* 作者：zhu18
* 描述：智能检索-识别结果面板
* 修改时间：2019-04-12
-->
<template>
  <div ref="resultPanel"
       class="result-panel"
       :style="resultPanelStyle"
       @click="show()">
    <!-- 结果面板-头部 -->
    <div class="list-head">
      <!-- 关闭按钮-左侧 -->
      <div class="cls"
           @click.stop.prevent="hide()">
        <i class="iconfont icon-del"></i>
      </div>
      <!-- 文字区域-中间 -->
      <div class="title"
           @mousedown.stop="moveStart"
           @touchstart.stop="moveStart"
           @mousemove.stop="move"
           @touchmove.stop="move"
           @mouseup.stop="moveEnd"
           @touchend.stop="moveEnd">
        <span v-show="scanType==='img'"
              :style="{opacity:opacity}">相似商标</span>
        <img v-show="scanType==='img'"
             src="../../assets/images/logo1.png"
             :style="{opacity:opacity}">
        <img v-show="scanType==='txt'"
             src="../../assets/images/smartsearch/txtscan.jpg"
             :style="{opacity:opacity}">
        <div class="sort"
             @click.stop.prevent="sort()">排列</div>
      </div>
      <!-- 查询按钮-右侧 -->
      <div class="query"
           @click.stop="query()">
        <i class="iconfont icon-query"></i>
      </div>
    </div>
    <!-- 识别的logo列表 -->
    <LogoList v-show="status==='list'"
              :scan-type="scanType" />
    <!-- 查询面板 -->
    <SearchByWriting v-show="status==='query'" />
    <!-- 排序面板 -->
    <Sort v-show="status==='sort'"
          @callback="sortCallback" />
  </div>
</template>

<script>
import anime from "animejs";
import LogoList from "./logolist";
import SearchByWriting from "./searchByWriting";
import Sort from "../../components/screen";
import { match } from 'minimatch';
// import { settings } from 'cluster';

export default {
  props: {
    scanType: {
      required: true,
      default: 'img',
      moving: false,
      moveY: 0
    }
  },
  data () {
    return {
      status: 'list',//'list','query','sort' 加载不同面板
      height: 0,
      maxHeight: 0,
      opacity: 1
    };
  },
  computed: {
    resultPanelStyle () {
      let style = {}
      if (this.height) {
        style.height = `${this.height}px`
      }
      return style
    }
  },
  mounted () {
    anime.set(".result-panel", {
      // translateY: "130%"
      bottom: "-100%"
    });
  },
  methods: {
    show (type) {
      type = type || "little";
      let offset = {
        all: "0",
        little: "0",
        hide: "-100%"
      };
      anime({
        targets: ".result-panel",
        // translateY: offset[type],
        bottom: offset[type],
        easing: "easeInOutSine",
        duration: 300
      });
    },
    hide () {
      this.show("hide");
      setTimeout(() => {
        this.height = 0
        this.maxHeight = 0
      }, 400);
    },
    list () {
      this.setStatus('list')
    },
    query () {
      this.setStatus('query')
    },
    sort () {
      this.setStatus('sort')
    },
    sortCallback (params) {
      this.list()
    },
    setStatus (status) {
      //二次点击回到列表
      if (status === this.status)
        this.status = 'list'
      else
        this.status = status;
    },
    moveStart (event) {
      this.moving = true
      this.height = this.$refs.resultPanel.offsetHeight;
      if (!this.maxHeight) {
        this.maxHeight = this.height
      }
      this.moveY = event.touches ? event.touches[0].clientY : event.clientY
    },
    move () {
      if (!this.moving) return
      let y = this.moveY
      this.moveY = event.touches ? event.touches[0].clientY : event.clientY
      this.height += Math.min(this.maxHeight, y - this.moveY)

      this.opacity = (Math.max(0, this.height - 300)) / (this.maxHeight - 300)
    },
    moveEnd () {
      this.moving = false
    }
  },
  components: {
    LogoList,
    SearchByWriting,
    Sort
  }
};
</script>
<style lang="scss" scoped>
.result-panel {
  display: flex;
  position: fixed;
  flex-direction: column;
  max-height: 90%;
  min-height: 10%;
  width: 100%;
  // top:0;
  // left:0;
  // transform: translateY('130%');
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #555;
  .list-head {
    height: 0.9rem;
    border-bottom: 1px solid #eee;
    width: 100%;
    display: flex;
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
