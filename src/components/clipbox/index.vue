<template>
  <div ref="scan"
       class="scan-panel">
    <div class="scan-box"
         :class="{transition:resizing}"
         :style="boxStyle"
         @touchstart.prevent.stop="moveStart($event)"
         @touchmove.prevent.stop="move($event,'box')"
         @touchend.prevent.stop="moveEnd()">
      <template v-for="key in ['top','bottom']">
        <template v-for="key1 in ['left','right']">
          <div class="anchor"
               :class="`anchor-${key}-${key1}`"
               :key="`${key}-${key1}`"
               @touchstart.prevent.stop="moveStart($event, key, key1)"
               @touchmove.prevent.stop="move($event, key, key1)"
               @touchend.prevent.stop="moveEnd()"></div>
        </template>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    scanHeight: {
      type: Number,
    },
    scanWidth: {
      type: Number
    }
  },
  data () {
    return {
      minH: 50,
      minW: 50,
      maxH: 0,
      maxW: 0,
      left: -1,
      top: -1,
      width: 200,
      height: 200,
      x: 0,
      y: 0,
      moving: false,
      resizing: true
    }
  },
  computed: {
    boxStyle () {
      let style = {}
      if (this.left >= 0) {
        style.left = `${this.left}px`
      }
      if (this.top >= 0) {
        style.top = `${this.top}px`
      }
      if (this.width > 0) {
        style.width = `${this.width}px`
      }
      if (this.height > 0) {
        style.height = `${this.height}px`
      }
      return style
    },
    // maxH () {
    //   return this.$refs.scan.offsetHeight
    // },
    // maxW () {
    //   return this.$refs.scan.offsetWidth
    // }
  },
  methods: {
    moveStart (event) {
      this.x = event.touches[0].clientX
      this.y = event.touches[0].clientY
      this.moving = true
    },
    move (event, tb, lr) {
      if (!this.moving) return
      let x = event.touches[0].clientX - this.x
      let y = event.touches[0].clientY - this.y
      let [top, left] = [this.top, this.left]
      let [width, height] = [this.width, this.height]
      if (tb === 'top') {
        top += y
        height -= y
      } else if (tb === 'bottom') {
        height += y
      } else if (tb === 'box') {
        top += y
        left += x
      }
      if (lr === 'left') {
        left += x
        width -= x
      } else if (lr === 'right') {
        width += x
      }

      if (this.validateLeft(left, width) && this.validateWidth(width)) {
        this.left = left
        this.width = width
        this.x = event.touches[0].clientX
      }
      if (this.validateTop(top, height) && this.validateHeight(height)) {
        this.top = top
        this.height = height
        this.y = event.touches[0].clientY
      }
    },
    moveEnd () {
      this.moving = false
    },
    validateLeft (left, width) {
      return left >= 0 && left + width <= this.maxW
    },
    validateTop (top, height) {
      return top >= 0 && top + height <= this.maxH
    },
    validateWidth (width) {
      return width >= this.minW && width <= this.maxW
    },
    validateHeight (height) {
      return height >= this.minH && height <= this.maxH
    },
    resize (width, height) {
        this.maxH = this.$refs.scan.offsetHeight
        this.maxW = this.$refs.scan.offsetWidth
        this.width = width
        this.height = height
        this.top = (this.maxH - this.height) / 2
        this.left = (this.maxW - this.width) / 2
        this.resizing = true
        setTimeout(() => {
          this.resizing = false
        }, 100);
    }
  },
  watch: {
    scanHeight (val) {
      this.resize(this.scanWidth, val)
    },
    scanWidth (val) {
      this.resize(val, this.scanHeight)
    }
  },
  mounted () {
    setTimeout(() => {
      this.resize(this.scanHeight || 200, this.scanWidth || 200)
    }, 300);
  }
}
</script>
<style lang="scss" scoped>
.scan-panel {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  .scan-box {
    position: absolute;
    width: 200px;
    height: 200px;
    top: calc(50% - 100px);
    left: calc(50% - 100px);
    box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.2);
    outline: 1px dashed #fff;
    user-select: none;

    &.transition {
      transition: all 0.3s ease;
    }
  }
  $anchorWidth: 30px;
  .anchor {
    position: absolute;
    width: $anchorWidth;
    height: $anchorWidth;
    box-sizing: border-box;
    padding: 12px;
    background: #fff;
    background-clip: content-box;
    border-radius: 100%;
  }
  .anchor-top-left {
    top: -$anchorWidth / 2;
    left: -$anchorWidth / 2;
  }
  .anchor-top-right {
    top: -$anchorWidth / 2;
    right: -$anchorWidth / 2;
  }
  .anchor-bottom-left {
    bottom: -$anchorWidth / 2;
    left: -$anchorWidth / 2;
  }
  .anchor-bottom-right {
    bottom: -$anchorWidth / 2;
    right: -$anchorWidth / 2;
  }
}
</style>


