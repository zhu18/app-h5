<template>
  <div class="city-list">
    <div>
      <div class="letter-item">
        <div class="letter-header"><a id="history">当前/历史</a></div>
        <div class="his-panel flex ">
          <div class="his-city"
               :class="index===0?'curr-city':''"
               v-for="(city, index) in hisCities"
               :key="city"
               @click="showDetail(city)">
            <i class="iconfont icon-local"
               v-if="index===0"></i>
            {{city}}
          </div>
        </div>

      </div>
      <div v-for="item in cityGroup"
           :key="item.letter"
           class="letter-item">
        <div class="letter-header"><a :id="item.letter">{{item.letter}}</a></div>
        <div class="city-panel">
          <div v-for="city in item.cities"
               :key="city.name"
               @click="showDetail(city.name)">{{city.name}} </div>
        </div>

      </div>
    </div>
    <aside class="letter-aside">
      <ul>
        <li @click="naver('history')">历史 </li>
        <li v-for="item in cityGroup"
            :key="item.letter"
            @click="naver(item.letter)">{{item.letter}} </li>
      </ul>
    </aside>
    <div class="tip"
         :class="tipClass">
      {{tipString}}
    </div>
  </div>
</template>


<script>
import { cityList } from '../../assets/js/cityList.js'

export default {
  data () {
    return {
      cityGroup: [],
      tipString: '',
      tipClass: '',
      hisCities: ['北京', '重庆', '天津', '成都', '长沙', '厦门'],
      zoom: 0
    }
  },
  methods: {
    naver (id) {
      let target = document.getElementById(id)
      let top = target.offsetTop
      this.tipString = id === 'history' ? '历史' : id
      this.tipClass = 'tipShow'
      setTimeout(() => {
        this.tipClass = ''
      }, 500);
      let dom = document.querySelector('.city-list')
      dom.scrollTo(0, top - 100 * this.zoom)
    },
    showDetail (city) {
      this.$router.push({ name: 'lelog', params: { areaName: city, areaCount: 100 } })
    },
    goBack () {
      this.$router.goBack()
    }
  },
  created () {
    let letter = cityList[0].letter
    let cities = []
    cityList.forEach(city => {
      if (letter != city.letter) {
        this.cityGroup.push({ letter, cities })
        letter = city.letter
        cities = []
      }
      cities.push(city)
    })
    this.cityGroup.push({ letter, cities })
    this.zoom = window.innerWidth / 750
  }
}

</script>

<style lang="scss">
.city-list {
  padding: 0 0.3rem;
  box-sizing: border-box;
  width: 100%;
  overflow-y: auto;
  .his-panel {
    flex-wrap: wrap;
    margin: -0.12rem -0.16rem;
    .his-city {
      width: 1.8rem;
      height: 0.88rem;
      background-color: #fff;
      box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.1);
      border-radius: 0.1rem;
      color: #333;
      font-size: 0.32rem;
      line-height: 0.88rem;
      text-align: center;
      margin: 0.12rem 0.16rem;
      cursor: pointer;
      &.curr-city {
        color: #2095f2;
      }
      .icon-local {
        font-size: 0.72rem;
        vertical-align: middle;
        margin: 0 -0.24rem 0 -0.4rem;
      }
    }
  }

  .letter-item {
    .letter-header {
      color: #5b5b69;
      font-size: 0.28rem;
      margin: 0.26rem 0;
    }
    .city-panel {
      background-color: #ffffff;
      box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.1);
      border-radius: 0.08rem;
      > div {
        height: 0.88rem;
        line-height: 0.88rem;
        border-bottom: 1px solid rgba(191, 191, 191, 0.3);
        font-size: 0.32rem;
        padding-left: 0.3rem;
        color: #333;
        cursor: pointer;
      }
    }
  }

  .letter-aside {
    position: fixed;
    right: 0.1rem;
    top: 1.3rem;
    overflow-y:auto;
    height: calc(100vh - 3rem );
    ul {
      list-style: none;
      line-height: 1.6em;
      font-size: 0.28rem;
      color: #5b5b69;
      text-align: center;
    }
  }

  .tip {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #1e2128;
    border-radius: 0.1rem;
    width: 1.4rem;
    height: 1.4rem;
    z-index: 10;
    text-align: center;
    line-height: 1.4rem;
    font-size: 0.48rem;
    color: #fff;
    opacity: 0;
  }

  .tipShow {
    animation: appearTip 1 linear 0.5s;
  }

  @keyframes appearTip {
    0% {
      opacity: 1;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>