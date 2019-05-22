<template>
  <div class="flex brand-list">
    <div class="top-search flex-fixed">
      <innerSearch />
    </div>
    <div class="header-content flex-fill">
      <!-- 搜索结果  开始  -->
      <div class="serach-content">
        <p class="total">共{{total}}条决定</p>
        <div class="list-content">
          <div v-infinite-scroll="loadMore"
               infinite-scroll-disabled="loading"
               infinite-scroll-distance="10">
            <template v-for="(item,index) in list">
              <router-link class="list-item"
                           tag="div"
                           to="/detailsInfo?state=1"
                           :key="index">
                <div class="img-box">
                  <img v-lazy="img"
                       alt="">
                </div>
                <div class="item-content">
                  <h4>耐克创新有限合伙公司耐克创新有限合伙公司</h4>
                  <p><span class="title">注册号</span> <span>{{item}}</span></p>
                  <p><span class="title">申请日</span> <span>2018-06-14</span></p>
                </div>
                <img v-lazy="rejectImg"
                     class="reject-img">
              </router-link>
            </template>
            <div class="loading"
                 v-if="loading">
              <span class="tips">数据加载中</span>
              <mt-spinner :type="3"
                          color="#26a2ff"></mt-spinner>
            </div>
          </div>
        </div>
      </div>
      <!-- 搜索结果  结束  -->
    </div>
    <div class="tips-bar flex-fixed">
      <div class="tips">
        时间<span>{{year}}年{{month}}月</span>
      </div>
      <div class="tips">
        类别<span>{{category}}</span>
      </div>
      <span class="btn-filter"
            @click="popupVisible=true"><i class="iconfont icon-filter"></i>筛选</span>
      <mt-popup class="popup-filter"
                v-model="popupVisible"
                position="bottom">
        <mt-picker :slots="slots"
                   :showToolbar="true"
                   @change="onValuesChange">
          <div class="pop-tools flex">
            <span class="flex-fill">年</span>
            <span class="flex-fill">月</span>
            <span class="flex-fill">类别</span>
          </div>
        </mt-picker>
      </mt-popup>
    </div>
  </div>
</template>
<script>
import innerSearch from '../../components/search/innerSearch'
import img from '../../assets/images/home/testlogo.jpg'
import rejectImg from '../../assets/images/reject.png'

export default {
  name: "brand-reject",
  components: { innerSearch },
  data () {
    return {
      img,
      rejectImg,
      loading: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      total: 102,
      popupVisible: false,
      slots: [
        {
          flex: 1,
          values: Array.apply(null, Array(50)).map((val, i) => 2019 - i),
          textAlign: 'center'
        }, {
          flex: 1,
          values: Array.apply(null, Array(12)).map((val, i) => 1 + i),
          textAlign: 'center'
        }, {
          flex: 1,
          values: Array.apply(null, Array(46)).map((val, i) => 1 + i),
          textAlign: 'center'
        }
      ],
      year: 2019,
      month: 1,
      category: 1
    };
  },
  methods: {
    loadMore () {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 4; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 1500);
    },
    onValuesChange ({ values }) {
      this.year = values[0]
      this.month = values[1]
      this.category = values[2]
    }
  },
  // created () {
  //   this.slots[0].values = Array.apply(null, Array(50)).map((val, i) => 2019 - i)
  //   this.slots[1].values = Array.apply(null, Array(12)).map((val, i) => 1 + i)
  //   this.slots[2].values = Array.apply(null, Array(46)).map((val, i) => i + 1)
  // }
};
</script>
<style  lang="scss">
.brand-list {
  flex-direction: column;

  .top-search {
    width: 100%;
    height: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.3rem;
    box-sizing: border-box;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    .search {
      flex: 1;
    }
  }
  .header-content {
    height: calc(100% - 1rem - 0.9rem);
    width: 100%;
    background-size: 100%;
    position: relative;
    overflow: hidden;
    overflow-y: auto;
  }
  // 搜索结果/
  .serach-content {
    box-sizing: border-box;
    padding: 0 0.32rem 0.32rem 0.32rem;
    box-sizing: border-box;
    .total {
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.24rem;
      color: #5b5b69;
    }
    .list-item {
      display: flex;
      background-color: #fff;
      border-radius: 0.1rem;
      margin-bottom: 0.2rem;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
      position: relative;
      .img-box {
        margin: 0.3rem;
        width: 1.8rem;
        height: 1.8rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .item-content {
        flex: 1;
        padding: 0.32rem 0.32rem 0.32rem 0;
        // display: flex;
        // flex-direction: column;
        // justify-content: space-between;
        overflow: hidden;
        h4 {
          color: #1e2128;
          font-size: 0.32rem;
          font-weight: normal;
          line-height: 0.36rem;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          line-height: 2.5;
        }
        p {
          font-size: 0.24rem;
          color: #5b5b69;
          line-height: 1.5;
          .title {
            display: inline-block;
            width: 1.12rem;
          }
          .icon {
            height: 0.38rem;
            line-height: 0.39rem;
            display: inline-block;
            background-color: #d9d9d9;
            padding: 0 0.1rem;
            border-radius: 0.05rem;
            &.register {
              background-color: #2095f2;
              color: #fff;
            }
            &.noregister {
              background-color: #fea71a;
              color: #fff;
            }
          }
        }
      }
      .reject-img {
        position: absolute;
        width: 1.41rem;
        height: 0.99rem;
        top: 0.8rem;
        right: 0.4rem;
      }
    }
  }
  .tips-bar {
    width: 100%;
    height: 1rem;
    background-color: #ffffff;
    box-shadow: 0px -0.04rem 0.08rem 0px rgba(68, 68, 68, 0.08);
    display: flex;
    padding: 0 0.3rem;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(191, 191, 191, 0.3);
    .tips {
      color: #5b5b69;
      font-size: 0.28rem;
      span {
        color: #2095f2;
        margin-left: 0.2rem;
      }
    }
  }
  .btn-filter {
    display: inline-block;
    height: 0.64rem;
    background-color: rgba(191, 191, 191, 0.2);
    border-radius: 0.1rem;
    color: #333;
    font-size: 0.28px;
    line-height: 0.64rem;
    padding: 0 0.2rem;
    .icon-filter {
      font-size: 0.6rem;
      margin: 0 -0.15rem;
      vertical-align: middle;
    }
  }
  .popup-filter {
    width: 100%;
  }
  .pop-tools {
    background: #efefef;
    font-size: 0.32rem;
    padding: 0.1rem;
    span {
      display: block;
      width: 100px;
      text-align: center;
    }
  }
}
</style>

