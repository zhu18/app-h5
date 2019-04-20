<template>
  <div>
    <div
      class="news-list"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <mt-loadmore
        :top-method="loadTop"
        :bottom-all-loaded="allLoaded"
        ref="loadmore"
      >
        <template v-for="(item, index) in list">
          <div
            class="list-item item"
            @click="goDetail(item.id)"
            :key="item.id"
            :ref="item.id"
            :id="item.id"
          >
            <div class="img-box" v-if="item.images.length == 1">
              <img
                src="https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=03ffa97602d79123ffe092749d355917/48540923dd54564e5b271d47bdde9c82d1584f0a.jpg"
                alt=""
                v-for="(url, index2) in item.images"
                :key="index2"
              />
            </div>
            <div class="item-content">
              <h4>{{ item.title }}</h4>
              <div class="img-box2" v-if="item.images.length > 1">
                <span v-for="(url, index2) in item.images" :key="index2">
                  <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555417513810&di=322d9fa187a1d55d9ff2b8f33c7489a2&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1504%2F21%2Fc0%2F5753481_1429626381597_800x600.jpg"
                    alt=""
                  />
                </span>
              </div>
              <div class="tinfo">
                <span class="title"
                  >{{ item.source }}<var>{{ item.numbers }}评论</var></span
                >
                <span>{{ item.times }}</span>
              </div>
            </div>
            <span class="icon-box" v-show="isEdit">
              <i class="mint-toast-icon mintui mintui-field-success"></i>
            </span>
          </div>
        </template>
      </mt-loadmore>
      <div class="loading" v-if="loading">
        <span class="tips">数据加载中</span
        ><mt-spinner :type="3" color="#26a2ff"></mt-spinner>
      </div>
    </div>
    <!-- 新闻列表  结束  -->
    <mt-popup
      v-model="isEdit"
      position="bottom"
      class="pop-bottom"
      :modal="false"
    >
      <p @click="selectAll">
        <span class="icon-box" ref="select-all">
          <i class="mint-toast-icon mintui mintui-field-success"></i>
        </span>
        全选
      </p>
      <p @click="del">删除</p>
      <i class="line"></i>
    </mt-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allLoaded: false,
      loading: false,
      name: '',
      isSelectAll: false,
      list: [
        {
          id: '1',
          title: '在海外习近平听孩子们唱诵过这些中文诗、中文歌',
          source: '新华网',
          numbers: '2223',
          times: `${Math.ceil(Math.random() * 10)}分钟前`,
          images: ['../../assets/images/news/news.png']
        },
        {
          id: '2',
          title: '在海外习近平听孩子们唱诵过这些中文诗、中文歌',
          source: '新华网',
          numbers: '2223',
          times: '17分钟前',
          images: []
        },
        {
          id: '3',
          title: '在海外习近平听孩子们唱诵过这些中文诗、中文歌',
          source: '新华网',
          numbers: '2223',
          times: '17分钟前',
          images: [
            '../../assets/images/news/news.png',
            '../../assets/images/news/news.png',
            '../../assets/images/news/news.png'
          ]
        },
        {
          id: '4',
          title: '在海外习近平听孩子们唱诵过这些中文诗、中文歌',
          source: '新华网',
          numbers: '2223',
          times: '17分钟前',
          images: ['../../assets/images/news/news.png']
        },
        {
          id: '5',
          title: '在海外习近平听孩子们唱诵过这些中文诗、中文歌',
          source: '新华网',
          numbers: '2223',
          times: '17分钟前',
          images: []
        },
        {
          id: '6',
          title: '在海外习近平听孩子们唱诵过这些中文诗、中文歌',
          source: '新华网',
          numbers: '2223',
          times: '17分钟前',
          images: [
            '../../assets/images/news/news.png',
            '../../assets/images/news/news.png',
            '../../assets/images/news/news.png'
          ]
        }
      ]
    }
  },
  props: ['isEdit'],
  methods: {
    getLIst() {
      let list = [1, 2, 3, 4, 6, 7].map(v => {
        let images = []
        if (Math.ceil(Math.random() * 10) >= 5) {
          images = [
            '../../assets/images/news/news.png',
            '../../assets/images/news/news.png',
            '../../assets/images/news/news.png'
          ]
        } else {
          images = ['../../assets/images/news/news.png']
        }
        let id = +new Date() + Math.random() + ''
        return {
          id,
          title: '在海外习近平听孩子们唱诵过这些中文诗、中文歌',
          source: '新华网',
          numbers: `${Math.ceil(Math.random() * 1000)}`,
          times: `${Math.ceil(Math.random() * 10)}分钟前`,
          images: images
        }
      })
      return list
    },
    loadTop() {
      //   ...// 加载更多数据
      this.getLIst()
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom() {
      // ...// 加载更多数据
      this.allLoaded = true // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()
    },
    goDetail(item) {
      if (!this.isEdit) {
        this.$router.push({ path: '/newsdetails' })
        return
      }
      this.$refs[item][0].classList.toggle('is-select')
      let domArr = document.querySelectorAll('.item .icon-box')
      for (let i = 0; i < domArr.length; i++) {
        if (!domArr[i].classList.contains('is-select')) {
          this.$refs['select-all'].classList.remove('is-select')
          break
        } else {
          this.$refs['select-all'].classList.add('is-select')
        }
      }
    },
    loadMore() {
      this.loading = true
      setTimeout(() => {
        let list = this.getLIst()
        this.list.push(...list)
        if (this.isSelectAll) {
          this.$nextTick(() => {
            let domArr = document.querySelectorAll('.item')
            domArr.forEach(item => {
              item.classList.add('is-select')
            })
          })
        }
        this.loading = false
      }, 3000)
    },
    selectAll() {
      this.$refs['select-all'].classList.toggle('is-select')
      let domArr = document.querySelectorAll('.item')
      if (this.$refs['select-all'].classList.contains('is-select')) {
        this.isSelectAll = true
        domArr.forEach(item => {
          item.classList.add('is-select')
        })
      } else {
        this.isSelectAll = false
        domArr.forEach(item => {
          item.classList.remove('is-select')
        })
      }
    },
    del() {
      let domArr = document.querySelectorAll('.item')
      let selectArr = []
      let temp = []
      domArr.forEach(item => {
        if (item.classList.contains('is-select')) {
          selectArr.push(item.id)
        }
      })
      for (let i = 0; i < this.list.length; i++) {
        let item = this.list[i]
        if (selectArr.indexOf(item.id) == -1) {
          temp.push(item)
        }
      }
      console.log(temp)
      this.list = temp
      // 调取接口刷新列表
    }
  }
}
</script>
<style lang="scss" scoped>
::-webkit-search-cancel-button {
  display: none;
}
.news-list {
  padding: 0.32rem;
  box-sizing: border-box;
  background: #fff;
  .list-item {
    position: relative;
    padding: 0.24rem 0;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .img-box {
      width: 2.2rem;
      height: 1.2rem;
      margin-right: 0.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      img {
        border-radius: 0.1rem;
        width: 2rem;
        height: 1.2rem;
        object-fit: cover;
        border-radius: 0.1rem;
      }
    }
    .img-box2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0.32rem 0;
      span {
        width: 33%;
        display: inline-block;
        // border:1px solid rgba(0,0,0,.1);/
      }
      img {
        border-radius: 0.1rem;
        width: 100%;
        //    height: 1.2rem;
        object-fit: cover;
        object-fit: cover;
      }
    }
    .item-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 1.2rem;
      flex: 1;
      h4 {
        font-size: 0.28rem;
        color: #1e2128;
        font-weight: normal;
        white-space: wrap;
        line-height: 0.32rem;
        padding-right: 0.5rem;
      }
      .tinfo {
        font-size: 0.24rem;
        color: #bfbfbf;
        display: flex;
        justify-content: space-between;
        align-content: center;
        var {
          font-size: 0.2rem;
          // color: #fea71a;
          font-style: normal;
          // border: 1px solid #fea71a;
          padding: 0.1rem 0.2rem;
          border-radius: 0.2rem;
          margin-left: 0.2rem;
        }
      }
    }
  }
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.9rem;
  .tips {
    margin: 0 0.3rem;
    display: inline-block;
  }
}
.icon-box {
  position: absolute;
  box-sizing: border-box;
  right: 0.01rem;
  top: 0.15rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  border: 0.02rem solid #c5c6c6;

  i {
    display: none;
  }
}
.is-select {
  border: none;
  i {
    transition: all 0.25s;
    position: relative;
    left: -0.04rem;
    top: -0.04rem;
    font-size: 0.46rem;
    color: #2095f2;
    display: block;
  }
}
.pop-bottom {
  height: 0.98rem;
  width: 100%;
  background: #fff;
  .line {
    position: absolute;
    width: 0.01rem;
    height: 0.32rem;
    background: #bfbfbf;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  p {
    display: inline-block;
    width: 50%;
    height: 100%;
    padding-left: 1.25rem;
    line-height: 0.98rem;
    font-size: 0.28rem;
    box-sizing: border-box;
    &:nth-child(2) {
      text-align: right;
      padding-right: 1.5rem;
    }
    .icon-box {
      position: absolute;
      box-sizing: border-box;
      left: 0.4rem;
      top: 0.3rem;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      border: 0.02rem solid #c5c6c6;
      i {
        display: none;
      }
    }
    .is-select {
      border: none;
      i {
        transition: all 0.25s;
        position: relative;
        left: -0.04rem;
        top: -0.04rem;
        font-size: 0.46rem;
        color: #2095f2;
        display: block;
      }
    }
  }
}
</style>
