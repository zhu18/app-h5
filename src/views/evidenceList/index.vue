<template>
  <div class="evidence ">
    <div class="top-header ">
      <mt-header fixed
                 title="取证列表">
        <div slot="left">
          <mt-button icon="back"
                     @click='goBack'></mt-button>
        </div>
        <!-- <mt-button slot="right"> 筛选 </mt-button> -->
        <div slot="right">
          <span class="iconfont icon-date"
                @click="date()"></span>
          <span class="iconfont icon-map"
                @click="map()"></span>
        </div>
      </mt-header>
    </div>
    <div class="header-content ">
      <div class="body">
        <div v-for="(item, index) in evidences"
             :key="index"
             @click="viewdetails">
          <h3 class="evidence-title">{{item.date}} {{item.address}}</h3>
          <div class="evidence-list">
            <div class="evidence-item"
                 v-for="(ev, idx) in item.list"
                 :key="idx">
              <img :src="ev.img" />
              <i class="iconfont icon-sound"
                 v-if="ev.type==='sound'"></i>
              <i class="iconfont icon-video"
                 v-if="ev.type==='video'"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datePicker from '../../components/datePicker/index'
import img1 from '../../assets/images/lawenforcement/evidence.jpg'
import img2 from '../../assets/images/lawenforcement/evidence2.jpg'
import img3 from '../../assets/images/lawenforcement/evidence3.jpg'
export default {
  name: "evidence",
  components: { datePicker },
  data () {
    return {
      evidences: [
        {
          date: '2019年4月15日',
          address: '北京市海淀区',
          list: [{
            img: img1,
            type: 'img'
          }, {
            img: img2,
            type: 'img'
          }, {
            img: img3,
            type: 'video'
          }, {
            img: img1,
            type: 'sound'
          }, {
            img: img2,
            type: 'sound'
          }]
        },
        {
          date: '2019年4月15日',
          address: '北京市海淀区',
          list: [{
            img: img1,
            type: 'img'
          }, {
            img: img2,
            type: 'img'
          }, {
            img: img3,
            type: 'video'
          }, {
            img: img1,
            type: 'sound'
          }, {
            img: img2,
            type: 'sound'
          }]
        },
        {
          date: '2019年4月15日',
          address: '北京市海淀区',
          list: [{
            img: img1,
            type: 'img'
          }, {
            img: img2,
            type: 'img'
          }, {
            img: img3,
            type: 'video'
          }, {
            img: img1,
            type: 'sound'
          }, {
            img: img2,
            type: 'sound'
          }]
        }
      ]
    };
  },
  created () {
  },
  mounted () {
  },
  methods: {
    goBack () {
      this.$router.goBack()
    },
    viewdetails () {
      this.$router.push('/lawDetails');
    },
    date () {
      this.$router.push('/dateSelect?title=取证列表')
    },
    map () {
      this.$router.push('/map?title=取证列表')
    },
  }
};
</script>
<style lang="scss">
.evidence {
  width: 100%;
  height: 100%;
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
    width: 100%;
    background-size: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 0.4rem 0.32rem 0.27rem;
  }
  .body {
    padding: 0.1rem 0.2rem;
    background-color: #ffffff;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  .evidence-title {
    font-size: 0.24rem;
    color: #5b5b69;
    margin: 0;
    padding: 0;
    white-space: pre;
    margin: 0.28rem 0.12rem 0.18rem;
  }
  .evidence-list {
    display: flex;
    flex-wrap: wrap;
    .evidence-item {
      position: relative;
      margin: 0.12rem;
      width: 2.98rem;
      height: 1.68rem;
      background-color: #f6f6f6;
      border-radius: 0.08rem;
      overflow: hidden;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
    .iconfont {
      position: absolute;
      top: 0.09rem;
      right: 0.09rem;
      z-index: 5;
      color: #2095f2;
    }
  }
}
</style>
