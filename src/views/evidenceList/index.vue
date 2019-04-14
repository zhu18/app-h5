<template>
  <div class="evidence">
    <div class="header-content">
      <div class="body">
        <div v-for="(item, index) in evidences"
             :key="index">
          <h3 class="evidence-title">{{item.date}} {{item.address}}</h3>
          <div class="evidence-list">
            <div class="evidence-item"
                 v-for="(ev, idx) in item.list"
                 :key="idx">
              <img :src="ev.img"/>
              <i class="iconfont icon-sound"></i>
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
            type: 'voice'
          }, {
            img: img2,
            type: 'voice'
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
            type: 'voice'
          }, {
            img: img2,
            type: 'voice'
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
            type: 'voice'
          }, {
            img: img2,
            type: 'voice'
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
  }
};
</script>
<style lang="scss">
.evidence {
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
    box-sizing: border-box;
    padding: 0.4rem 0.32rem 0.27rem;
  }
  .body { 
    padding:0.1rem 0.2rem;
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
    margin:.28rem 0.12rem .18rem ;
  }
  .evidence-list {
    display: flex;
    flex-wrap: wrap;
    .evidence-item {
      margin: 0.12rem;
      width: 2.98rem;
      height: 1.68rem;
      background-color: #f6f6f6;
      border-radius: 0.08rem;
      overflow: hidden;

    }
    img{
      width:100%;
      object-fit: cover;
    }
  }
}
</style>
