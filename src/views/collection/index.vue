<template>
  <div class="container">
    <header>
      <mt-header fixed title="我的收藏">
        <div slot="left">
          <mt-button icon="back" @click="goBack"></mt-button>
        </div>
        <mt-button slot="right" @click="edit">
          {{ isEdit ? '完成' : '编辑' }}
        </mt-button>
      </mt-header>
    </header>
    <div class="tab">
      <ul class="ul">
        <div class="li">
          <span
            :class="index == 1 ? 'span span-seletecd' : 'span'"
            @click="navClick(1)"
          >
            <p class="p">商标</p>
          </span>
        </div>
        <div class="li">
          <span
            :class="index == 2 ? 'span span-seletecd' : 'span'"
            @click="navClick(2)"
          >
            <p class="p">新闻</p>
          </span>
        </div>
        <div class="li">
          <span
            :class="index == 3 ? 'span span-seletecd' : 'span'"
            @click="navClick(3)"
            >法律</span
          >
        </div>
      </ul>
      <Search class="tab-search" />
    </div>
    <router-view class="tab-con" :isEdit="isEdit"></router-view>
  </div>
</template>
<script>
import Search from '../../components/search/innerSearch'
export default {
  data() {
    return {
      isEdit: false,
      index: 1
    }
  },
  watch: {
    index: {
      handler: function(newV, oldV) {
        console.log(newV)
        newV == 1 && this.$router.push({ name: 'brandTab' })
        newV == 2 && this.$router.push({ name: 'newsTab' })
        newV == 3 && this.$router.push({ name: 'lawTab' })
      },
      immediate: true
    }
  },
  methods: {
    goBack() {
      this.$router.goBack()
    },
    edit() {
      this.isEdit = !this.isEdit
    },
    //点击导航
    navClick(index) {
      this.index = index
      this.isEdit = false
    }
  },
  components: {
    Search
  }
}
</script>
<style lang="scss" scoped>
.container {
  font-size: 0.24rem;
  header {
    height: 0.9rem;
    width: 100%;
    position: fixed;
    background-color: #2095f2;
    z-index: 1000;
    .mint-header {
      height: 0.9rem;
      background: transparent;
    }
  }
  .tab {
    height: 1rem;
    background-color: #ffffff;
    box-shadow: 0 0 0.01rem rgba(0, 0, 0, 0.1);
    margin-top: 0.9rem;
    z-index: 2;
    .ul {
      width: 100%;
      height: 1rem;
      color: #1e2128;
      box-shadow: 0 0 0.06rem rgba(0, 0, 0, 0.1);
      .li {
        display: inline-block;
        text-align: center;
        height: 1rem;
        cursor: pointer;
        width: 33.33%;
        line-height: 1rem;
        background: #fff;
        .span {
          width: 100%;
          display: inline-block;
          height: 100%;
          padding: 0 1%;
          line-height: 1rem;
          box-sizing: border-box;
          .p {
            width: 100%;
            display: inline-block;
            height: 0.32rem;
            line-height: 0.32rem;
            border-right: 0.02rem solid #bfbfbf;
          }
        }
        .span-seletecd {
          color: #2095f2;
          border-bottom: 0.03rem solid #2095f2;
        }
      }
    }
  }
  .tab-search {
    margin: 0.3rem;
  }
  .tab-con {
    position: absolute;
    height: calc(100vh - 3.14rem);
    width: 100vw;
    z-index: -1;
    top: 3.14rem;
    overflow-y: auto;
  }
}
</style>
