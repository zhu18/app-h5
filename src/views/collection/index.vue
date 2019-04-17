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
    <ul class="collet-box clearfix">
      <li
        class="item"
        v-for="item in dataList"
        :key="item.id"
        @click="select(item.id)"
      >
        <img src="../../assets/images/result-logo.jpg" alt="" />
        <h2>{{ item.title }}</h2>
        <p>{{ item.number }}</p>
        <p>{{ item.date }}</p>
        <span class="icon-box" v-show="isEdit" :ref="item.id" :id="item.id">
          <i class="mint-toast-icon mintui mintui-field-success"></i>
        </span>
      </li>
    </ul>
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
      isEdit: false,
      dataList: [
        {
          id: '1',
          imgS: './brand.png',
          title: '耐克创新有限合伙公司',
          number: '申请/注册号:12749588',
          date: '申请日:2007-04-17'
        },
        {
          id: '2',
          imgS: './brand.png',
          title: '耐克创新有限合伙公司',
          number: '申请/注册号:12749588',
          date: '申请日:2007-04-17'
        },
        {
          id: '3',
          imgS: './brand.png',
          title: '耐克创新有限合伙公司',
          number: '申请/注册号:12749588',
          date: '申请日:2007-04-17'
        },
        {
          id: '4',
          imgS: './brand.png',
          title: '耐克创新有限合伙公司',
          number: '申请/注册号:12749588',
          date: '申请日:2007-04-17'
        }
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    edit() {
      this.isEdit = !this.isEdit
      this.isEdit &&
        (document.querySelector('.collet-box').style.paddingBottom = '0.98rem')
      !this.isEdit &&
        (document.querySelector('.collet-box').style.paddingBottom = '0.32rem')
    },
    select(item) {
      if (!this.isEdit) {
        this.$router.push({ name: 'detailsInfo' })
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
    selectAll() {
      this.$refs['select-all'].classList.toggle('is-select')
      let domArr = document.querySelectorAll('.item .icon-box')
      if (this.$refs['select-all'].classList.contains('is-select')) {
        domArr.forEach(item => {
          item.classList.add('is-select')
        })
      } else {
        domArr.forEach(item => {
          item.classList.remove('is-select')
        })
      }
    },
    del() {
      let domArr = document.querySelectorAll('.item .icon-box')
      let selectArr = []
      let temp = []
      domArr.forEach(item => {
        if (item.classList.contains('is-select')) {
          selectArr.push(item.id)
        }
      })
      for (let i = 0; i < this.dataList.length; i++) {
        let item = this.dataList[i]
        if (selectArr.indexOf(item.id) == -1) {
          temp.push(item)
        }
      }
      this.dataList = temp
      // 调取接口刷新列表
    }
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
}
.collet-box {
  padding: 0.32rem;
  background: #f6f6f6;
  box-sizing: border-box;
  height: calc(100% - 0.9rem);
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 0.9rem;
  .item {
    position: relative;
    float: left;
    width: 3.3rem;
    height: 3.84rem;
    background: #ffffff;
    border-radius: 0.1rem;
    padding: 0.32rem 0.25rem;
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    margin-bottom: 0.25rem;
    &:nth-child(2n-1) {
      margin-right: 0.25rem;
    }
    img {
      width: 1.8rem;
      height: 1.8rem;
      display: block;
      margin: 0 auto 0.2rem;
    }
    h2 {
      font-size: 0.28rem;
      font-weight: 400;
      line-height: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      font-size: 0.24rem;
      color: #5b5b69;
      line-height: 1.5;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .icon-box {
      position: absolute;
      box-sizing: border-box;
      right: 0.2rem;
      top: 0.2rem;
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
