<!--
* startLawEnforcement
* 作者：邢玮
* 描述：开始执法
* 修改时间：2019-04-14
-->
<template>
  <div class="start-wrapper">
    <div class="start-wrapper-blur" :class="{active: btnClickFlag}" @click="blurWrapperClick">
      <div class="top-header">
        <mt-header fixed :title="title">
          <div slot="left">
            <mt-button icon="back" @click="goBack"></mt-button>
          </div>
          <mt-button v-show="handleEdit" slot="right" @click="edit">{{isEdit?'完成':'编辑'}}</mt-button>
        </mt-header>
      </div>
      <div class="start-content-wrapper">
        <div class="start-content">
          <div class="start-page-title">
            <p>{{startTopText}}</p>
            <span class="circle-left"></span>
            <span class="circle-right"></span>
          </div>
          <div class="start-top">
            <div class="start-item">
              <p class="start-item-title">时间</p>
              <p class="start-item-content">
                <span>{{enforceForm.startTime}}</span> 至 <span>{{enforceForm.endTime}}</span>
              </p>
            </div>
            <div class="start-item">
              <p class="start-item-title">执法人</p>
              <div class="start-item-content start-item-content-list">
                <ul class="lawuser-box clearfix">
                  <li v-for="(item, index) in enforcerList" :key="index">
                    <div class="lawuser-item-top">
                      <span class="host" v-if="index === 0"></span>
                      <i class="iconfont icon-host" v-if="index === 0"></i>
                      <span class="del-btn" v-if="isEdit" @click="delEnforcer(index)">
                        <i class="iconfont icon-del"></i>
                      </span>
                      <img :src="item.imgPath" class="img">
                    </div>
                    <p class="lawuser-item-bottom">{{item.name}}</p>
                  </li>
                  <li class="add-lawuser" @click="addEnforcer">
                    <i class="iconfont icon-add"></i>
                    <!-- <p>添加执法人</p> -->
                  </li>
                </ul>
              </div>
            </div>
            <div class="start-item">
              <p class="start-item-title">执法地点</p>
              <p class="start-item-content">
                <input class="start-input" :disabled="!isEdit" v-model="enforceForm.place">
              </p>
            </div>
            <div class="start-item">
              <p class="start-item-title">当事人</p>
              <ul class="litigant-form">
                <li class="clearfix">
                  <span>(个人)姓名</span>
                  <input type="text" v-model="enforceForm.name">
                </li>
                <li class="clearfix">
                  <span>身份证</span>
                  <input type="text"  v-model="enforceForm.idNumber">
                </li>
                <li class="clearfix">
                  <span>(单位)名称</span>
                  <input type="text"  v-model="enforceForm.unitName">
                </li>
                <li class="clearfix">
                  <span>住址</span>
                  <input type="text"  v-model="enforceForm.address">
                </li>
              </ul>
            </div>
            <div class="start-item">
              <p class="start-item-title">现场取证</p>
              <div class="start-item-content start-item-content-list">
                <ul class="evidence-box clearfix">
                  <li v-for="(item, index) in evidenceList" :key="index">
                    <span class="del-btn" v-if="isEdit" @click="delevidence(index)">
                      <i class="iconfont icon-del"></i>
                    </span>
                    <img :src="item.imgPath" class="img">
                  </li>
                  <li class="add-evidence" @click="uploadPicClick">
                    <i class="iconfont icon-add"></i>
                    <p>添加证据</p>
                  </li>
                </ul>
              </div>
            </div>
            <!-- <div class="start-save-btn" @click="saveClick">保存执法记录</div> -->
            <div class="start-bottom">
              <span @click="shareClick">
                <i class="iconfont icon-share"></i>
              </span>
              <span @click="printClick">
                <i class="iconfont icon-print1"></i>
              </span>
              <span class="collBtn" @click="collClick">
                <i :class="isColl? 'iconfont icon-coll': 'iconfont icon-coll2'"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="start-bottom-btn">
        <span @click="saveClick(0)" :class="{active: current == 0}">生成现场笔录</span>
        <span @click="saveClick(1)" :class="{active: current == 1}">保存执法记录</span>
      </div>
    </div>
    <div class="start-btn">
      <span class="start-add-btn" :class="{active: btnClickFlag}" @click="btnClick">
        <i class="iconfont icon-add"></i>
      </span>
      <ul class="start-hidden-btn">
        <li class="start-hidden-li">
          <span class="start-add-btn" @click="recordBtnClick">
            <i class="iconfont icon-record"></i>
          </span>
        </li>
        <li class="start-hidden-li">
          <span class="start-add-btn start-btn-pic" @click="picBtnClick">
            <i class="iconfont icon-pic"></i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import anime from 'animejs'
import { MessageBox, Toast } from 'mint-ui'
import img1 from '../../assets/images/lawenforcement/evidence.jpg'
import img2 from '../../assets/images/lawenforcement/evidence2.jpg'
import img3 from '../../assets/images/lawenforcement/evidence3.jpg'
import lawuserImg from '../../assets/images/lawenforcement/lawUser.jpg'

export default {
  name: 'startLawEnforcement',
  data() {
    return {
      title: '执法记录(协同码8620)',
      startTopText: '海淀区工商行政管理局执法记录',
      handleEdit: true,
      isEdit: false,
      btnClickFlag: false,
      enforcerList: [
        {imgPath: lawuserImg, name: '刘国军'},
        {imgPath: lawuserImg, name: '刘国军'},
        {imgPath: lawuserImg, name: '刘国军'},
        {imgPath: lawuserImg, name: '刘国军'}
      ],
      evidenceList: [{ imgPath: img1 }, { imgPath: img2 }, { imgPath: img3 }],
      enforceForm: {
        startTime: '2019-04-05 12:20',
        endTime: '',
        place:'北京市海淀区丹棱街10号新海大厦办公中心内北京市海淀区丹棱街10号新海大厦办公中心内  ',
        name: '',
        idNumber: '',
        unitName: '',
        address: ''
      },
      isColl: true,
      current: 1
    }
  },
  mounted() {
    document.body.addEventListener('touchstart', function() {}, false)
    this.$route.params.code &&
      (this.title = '执法记录(协同码' + this.$route.params.code + ')')

    anime.set('.start-hidden-li', {
      bottom: '0',
      scale: [0, 0]
    })

    this.enforceForm.startTime = this.getNowDate();
  },
  methods: {
    getNowDate(){
      let d = new Date();
      var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      return datetime;
    },
    goBack() {
      this.$router.goBack()
    },
    //编辑
    edit() {
      let obj = { ...this.enforceForm }
      if (this.isEdit) {
        if (
          !(
            this.enforcerList.length &&
            this.evidenceList.length
          )
        ) {
         if (this.enforcerList.length === 0) {
            Toast('请选择执法人！')
          } else if (this.evidenceList.length === 0) {
            Toast('请选择现场取证照片！')
          }
        } else {
          this.isEdit = !this.isEdit
        }
      } else {
        this.isEdit = !this.isEdit
      }
    },
    //右下角加号点击
    btnClick() {
      this.btnClickFlag = !this.btnClickFlag
      if (this.btnClickFlag) {
        anime({
          targets: '.start-hidden-li',
          // translateY: offset[type],
          translateY: function(el, i) {
            return -(1.05 + 1.15 * i) + 'rem'
          },
          scale: [1, 1],
          rotate: '1turn',
          easing: 'easeInOutCubic',
          duration: 300,
          delay: anime.stagger(100, { direction: 'reverse' })
        })
      } else {
        anime({
          targets: '.start-hidden-li',
          // translateY: offset[type],
          translateY: function(el, i) {
            return 0
          },
          easing: 'easeInOutCubic',
          duration: 300,
          delay: anime.stagger(100),
          endDelay: function(el, i, l) {
            return (l - i) * 100
          }
        })
      }
    },
    // 图片按钮点击
    picBtnClick() {
      MessageBox('提示', '原生app对接-打开相机')
      this.$router.push({
        name: 'startLawEnforcementUpload',
        params: { type: 'pic' }
      })
    },
    // 图片按钮点击
    recordBtnClick() {
      MessageBox('提示', '原生app对接-打开录音')
      this.$router.push({
        name: 'startLawEnforcementUpload',
        params: { type: 'record' }
      })
    },
    blurWrapperClick() {
      if (this.btnClickFlag) {
        anime({
          targets: '.start-hidden-li',
          // translateY: offset[type],
          translateY: function(el, i) {
            return 0
          },
          easing: 'easeInOutCubic',
          duration: 300,
          delay: anime.stagger(100),
          endDelay: function(el, i, l) {
            return (l - i) * 100
          }
        })
        this.btnClickFlag = !this.btnClickFlag
      }
    },
    //点击搜索按钮
    txtqueryClick() {
      this.$router.push({ name: 'trademarkinquiry' })
    },
    //添加取证
    uploadPicClick() {
      MessageBox('提示', '原生app对接-打开系统相册')
    },
    //添加执法人
    addEnforcer() {
      this.$router.push({ name: 'enforcerList' })
    },
    //保存执法记录/生成现场笔录
    saveClick(index) {
      this.current = index;
      if(index == 1){
        this.enforceForm.endTime = this.getNowDate();
        let instance = Toast('已保存')
        let _this = this
        setTimeout(() => {
          instance.close()
          _this.$router.push({ name: 'lelog' })
        }, 1000)
      }else {
        let instance = Toast('已生成')
        let _this = this
        setTimeout(() => {
          instance.close()
          _this.$router.push({ name: 'lawEnforcementRecords', params: this.enforceForm })
        }, 1000)
      }
    },
    //删除执法人照片
    delEnforcer(index) {
      this.enforcerList.splice(index, 1)
    },
    //删除现场取证照片
    delevidence(index) {
      this.evidenceList.splice(index, 1)
    },
    //分享点击
    shareClick() {
      MessageBox('提示', '原生app对接-分享')
    },
    //打印点击
    printClick() {
      MessageBox('提示', '原生app对接-打印')
    },
    //收藏点击
    collClick() {
      this.isColl = !this.isColl
      if (this.isColl) {
        Toast('已取消收藏！')
      } else {
        Toast('收藏成功！')
      }
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.start-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f6f6f6;
}
.start-wrapper-blur {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  &.active {
    filter: blur(3px);
  }
}
.start-mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  z-index: 1;
}
.top-header {
  position: relative;
  height: 0.9rem;
  background-color: #2095f2;
  box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
  z-index: 1;
  .mint-header {
    height: 0.9rem;
    background: transparent;
  }
}
.start-content-wrapper {
  position: relative;
  height: calc(100% - 1.9rem);
  padding: 0 0.32rem;
  // margin-bottom: .2rem;
  overflow-y: auto;
  .start-content {
    margin: 0.4rem 0;
    border-radius: 0.1rem;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    .start-top{
      padding: 0.32rem 0.06rem 0.32rem 0.32rem;
      .start-item {
        margin-bottom: 0.4rem;
        .start-item-title {
          font-size: 0.24rem;
          color: #5b5b69;
        }
        .start-item-content {
          margin-top: 0.16rem;
          padding-right: 0.26rem;
          font-size: 0.28rem;
          color: #1e2128;
        }
        .start-item-content-list {
          padding: 0;
        }
      }
    }
    
  }
}
.start-btn {
  position: fixed;
  right: 0.5rem;
  bottom: 1.2rem;
  z-index: 2;
  .start-add-btn {
    display: inline-block;
    width: 0.98rem;
    height: 0.98rem;
    background: #2095f2;
    text-align: center;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    i {
      font-size: 0.6rem;
      line-height: 0.98rem;
      color: #fff;
    }
    &.active {
      background: #8ac5f3;
      transform: rotate(-45deg);
    }
  }
  .start-btn-pic {
    background: #fea71a;
  }
  .start-hidden-btn {
    position: absolute;
    width: 0.98rem;
    bottom: 0rem;
    right: 0;
    li {
      position: absolute;
      bottom: 0;
      z-index: -1;
      span {
        i {
          font-size: 0.8rem;
        }
      }
    }
  }
}
.start-bottom {
  width: 4.14rem;
  margin: 0.4rem auto 0.08rem;
  span {
    display: inline-block;
    width: 0.98rem;
    height: 0.98rem;
    margin-right: 0.6rem;
    border-radius: 50%;
    border: 0.02rem solid #e5e5e5;
    box-sizing: border-box;
    text-align: center;
    &:last-child {
      margin: 0;
    }
    i {
      line-height: 0.98rem;
      font-size: 0.8rem;
      color: rgba(191, 191, 191, 0.8);
    }
    &:active {
      border-color: #2095f2;
      i {
        color: #2095f2;
      }
    }
  }
  span.collBtn {
    i{
      position: relative;
      left: 1px;
      top: -1px;
    }
    &:active {
      border-color: #fea71a;
      i {
        color: #fea71a;
      }
    }
  }
}
//执法人
.lawuser-box {
  margin: 0 0 0.4rem 0;
  li {
    float: left;
    margin: 0.14rem 0.2rem 0 0;
    .lawuser-item-top {
      position: relative;
      width: 1.08rem;
      height: 1.08rem;
      border-radius: 0.1rem;
      background: #f6f6f6;
      img.img {
        width: .78rem;
        height: .78rem;
        margin: 0.26rem 0 0 0.13rem;
      }
      .host {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        border: 0.02rem solid rgba(32, 149, 242, 0.3);
        text-align: center;
        line-height: 0.3rem;
      }
      i.icon-host {
        position: absolute;
        top: -0.1rem;
        left: -0.08rem;
        color: #2095f2;
        font-size: 0.5rem;
      }
    }
    .lawuser-item-bottom{
      padding: .12rem 0;
      color: #1e2128;
      font-size: .24rem;
      text-align: center;
    }
  }
  li.add-lawuser {
    width: 1.08rem;
    height: 1.08rem;
    background: #f6f6f6;
    border: 0.02rem dashed #dfdfdf;
    text-align: center;
    box-sizing: border-box;
    border-radius: 0.1rem;
    i {
      font-size: 0.6rem;
      color: #bfbfbf;
      margin-top: 0.2rem;
      display: inline-block;
      font-weight: 500;
    }
    p {
      font-size: 0.16rem;
      color: #5b5b69;
    }
  }
}
//现场取证
.evidence-box {
  margin: 0 0 0.4rem 0;
  li {
    position: relative;
    width: 2.98rem;
    height: 1.68rem;
    float: left;
    margin: 0.26rem 0.26rem 0 0;
    border-radius: 0.1rem;
    img.img {
      width: 2.98rem;
      height: 1.68rem;
      border-radius: 0.1rem;
    }
  }
  /*现场取证-上传图片*/
  li.add-evidence {
    background: #f6f6f6;
    border: 0.02rem dashed #dfdfdf;
    text-align: center;
    box-sizing: border-box;
    i {
      font-size: 0.8rem;
      color: #bfbfbf;
      margin-top: 0.3rem;
      display: inline-block;
      font-weight: 500;
    }
    p {
      font-size: 0.24rem;
      color: #5b5b69;
    }
  }
}
.start-save-btn {
  height: 0.8rem;
  margin-right: 0.26rem;
  border: 1px solid #dfdfdf;
  border-radius: 0.1rem;
  color: #2095f2;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.8rem;
}
.del-btn {
  position: absolute;
  right: -0.16rem;
  top: -0.16rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
  i.icon-del {
    color: #fff;
    font-size: 0.36rem;
    line-height: 0.4rem;
    font-weight: 700;
  }
}
.start-input {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 0 0.16rem 0;
  border: none;
  border-bottom: 0.01rem solid rgba(191, 191, 191, 0.8);
}
.start-input:disabled {
  color: #1e2128;
  border: none;
  border-bottom: 0.01rem solid rgba(0, 0, 0, 0);
}

//0508修改
.start-page-title {
  position: relative;
  height: 1.1rem;
  // border-bottom: .01rem dashed rgba(255,255,255,.5);
  border-bottom: 0.01rem dashed #dfdfdf;
  p {
    text-align: center;
    line-height: 1.1rem;
    font-size: 0.32rem;
    color: #333333;
  }
  span {
    position: absolute;
    bottom: -0.16rem;
    width: 0.32rem;
    height: 0.32rem;
    border-radius: 50%;
    background: #f6f6f6;
    
  }
  span.circle-left {
    left: -0.16rem;
    box-shadow: inset -0.05rem -0.01rem 0.05rem #e8e8e8;
  }
  span.circle-right {
    right: -0.16rem;
    box-shadow: inset 0.05rem 0.01rem 0.05rem #e8e8e8;
  }
  
}
.litigant-form {
  margin-top: .2rem;
  li{
    height: .6rem;
    margin-bottom: .2rem;
    line-height: .6rem;
    span{
      float: left;
      font-size: .28rem;
      color: #1e2128;
    }
    input{
      float: right;
      height: .58rem;
      margin: 0 .26rem 0 .2rem;
      padding: 0 .1rem;
      border: 1px solid #dbdbdb;
      background: #f8f8f8;
      border-radius: .1rem;
    }
     &:nth-child(2){
       input{
         width: 5.18rem;
       }
      }
      &:nth-child(2n+1){
        input{
         width: 4.52rem;
       }
      }
      &:nth-child(4){
       input{
         width: 5.4rem;
       }
      }
  }
}
.start-bottom-btn {
  position: relative;
  width: 100%;
  height: .36rem;
  line-height: .36rem;
  padding: .32rem 0;
  background: #ffff;
  text-align: center;
  box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
  span{
    position: relative;
    display: inline-block;
    width: 50%;
    font-size: .32rem;
    color: #5b5b69;
    &:nth-child(1){
      &::after{
        position: absolute;
        right: 0;
        top: 0;
        content: '';
        width: 1px;
        height: .36rem;
        background: #bfbfbf;
      }
    }
    &.active{
      color: #2095f2;
    }
  }
}
</style>


