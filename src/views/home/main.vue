<template>
  <div>
    <router-view name="header"></router-view>
    <transition :name="slideName">
      <router-view name="body" class="child-view"></router-view>
    </transition>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
import { debug } from 'util'
import { setTimeout } from 'timers'
import { mapState } from 'vuex'
export default {
  name: 'mainComps',
  prePath: 'home',
  beforeRouteUpdate(to, from, next) {
    let isBack = this.$router.isBack
    if (!isBack) {
      this.slideName = 'slide-left'
    } else {
      this.slideName = 'slide-right'
    }
    this.$router.isBack = false
    next()
  },
  computed: {
    ...mapState(['fontSize'])
  },
  watch: {
    $route: function() {
      setTimeout(() => {
        this.initFont()
        this.fontSize == 'small' && this.setFont(0.8)
        this.fontSize == 'middle' && this.setFont(1)
        this.fontSize == 'big' && this.setFont(1.2)
      }, 500)
    },
    fontSize: function(v) {
      v == 'small' && this.setFont(0.8)
      v == 'middle' && this.setFont(1)
      v == 'big' && this.setFont(1.2)
    }
  },
  mounted() {},
  methods: {
    initFont() {
      for (let i = 0; i < document.all.length; i++) {
        let tag = document.all[i]
        if (
          tag.tagName != 'SCRIPT' &&
          tag.tagName != 'I' &&
          tag.innerText.indexOf('\n') == -1
        ) {
          let fz = window.getComputedStyle(tag, null).fontSize
          tag.setAttribute('v-fontsize', parseFloat(fz) + 'px')
        }
      }
    },
    setFont(v) {
      for (let i = 0; i < document.all.length; i++) {
        let tag = document.all[i]
        if (tag.hasAttribute('v-fontsize')) {
          let fz = tag.getAttribute('v-fontsize')
          console.log(tag.nodeName + ':' + (parseFloat(fz) * v + 'px'))
          tag.style.fontSize = parseFloat(fz) * v + 'px'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.child-view {
  // margin-top:0.9rem;
}
</style>
