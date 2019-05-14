<!--
* 文件名：enforcementdetails
* 作者：郭惠敏
* 描述：执法记录详情
* 修改时间：2019-04-13
-->
<template lang="html">
    <div class="home-enforcementdetails">
        <div class="top-header">
            <mt-header fixed :title="title">
                <div slot="left" >
                    <mt-button icon="back" @click='goBack'></mt-button>
                </div>
                <mt-button v-show="handleEdit" slot="right" @click="edit">{{isEdit?'完成':'编辑'}}</mt-button>
            </mt-header>
        </div>
        <div class="content-all start-content-wrapper">
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
                  <p class="start-item-title">执法内容</p>
                  <p class="start-item-content">
                    <input class="start-input" :disabled="!isEdit" v-model="enforceForm.content">
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
                        <p>上传图片</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
           
        </div>
    </div>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui'
import img1 from '../../assets/images/lawenforcement/evidence.jpg'
import img2 from '../../assets/images/lawenforcement/evidence2.jpg'
import img3 from '../../assets/images/lawenforcement/evidence3.jpg'
import lawuserImg from '../../assets/images/lawenforcement/lawUser.jpg'
export default {
  name: 'home-enforcementdetails',
  data() {
    return {
      handleEdit: true,
      isEdit: false,
      title: '执法记录详情',
      startTopText: '海淀区工商行政管理局执法记录详情',
      obj: {
        name1: '2019-04-15 12:20:20',
        name11: '2019-04-16 12:20:20',
        name2: '北京市海淀区丹棱街10号新海大厦办公中心内',
        name3: '金XX商标相关执法'
      },
      enforceForm: {
        startTime: '2019-04-05 12:20',
        endTime: '2019-04-06 12:20',
        place:'北京市海淀区丹棱街10号新海大厦办公中心内北京市海淀区丹棱街10号新海大厦办公中心内  ',
        name: '',
        idNumber: '',
        unitName: '',
        address: '',
        content: '金XX商标相关执法'
      },
      enforcerList: [
        { imgPath: lawuserImg, name: '刘国军' },
        { imgPath: lawuserImg, name: '刘国军' },
        { imgPath: lawuserImg, name: '刘国军' },
        { imgPath: lawuserImg, name: '刘国军' }
      ],
      evidenceList: [{ imgPath: img1 }, { imgPath: img2 }, { imgPath: img3 }]
    }
  },
  created() {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.goBack()
    },
    //编辑
    edit() {
      let obj = { ...this.obj }
      if (this.isEdit) {
        if (
          !(
            obj.name1 &&
            obj.name2 &&
            obj.name3 &&
            this.enforcerList.length &&
            this.evidenceList.length
          )
        ) {
          if (!obj.name1) {
            Toast('请输入执法内容！')
          } else if (!obj.name2) {
            Toast('请输入执法时间！')
          } else if (!obj.name3) {
            Toast('请输入执法地点！')
          } else if (this.enforcerList.length === 0) {
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
    //添加取证
    uploadPicClick() {
      MessageBox('提示', '原生app对接-打开系统相册')
    },
    //添加执法人
    addEnforcer() {
      this.$router.push({ name: 'enforcerList' })
    },
    //删除执法人照片
    delEnforcer(index) {
      this.enforcerList.splice(index, 1)
    },
    //删除现场取证照片
    delevidence(index) {
      this.evidenceList.splice(index, 1)
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.home-enforcementdetails {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  overflow: hidden;
  top: 0;
  font-size: 0.12rem;
  .top-header {
    height: 0.9rem;
    background-color: #2095f2;
    box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
    z-index: 1;
    .mint-header {
      height: 0.9rem;
      line-height: 0.9rem;
      background: transparent;
    }
    .iconfont {
      line-height: 1rem;
      font-size: 0.66rem;
    }
  }
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
/*针对不同的屏幕尺寸设置不同的样式*/
@media screen and (max-width: 1024px) {
  .home-enforcementdetails .content-all .content-middle {
    max-height: 3.2rem;
  }
}
@media screen and (max-width: 780px) {
  .home-enforcementdetails .content-all .content-middle {
    max-height: 3.24rem;
  }
}
@media screen and (max-width: 414px) {
  .home-enforcementdetails .content-all .content-middle {
    max-height: 6.55rem;
  }
}
@media screen and (max-width: 411px) {
  .home-enforcementdetails .content-all .content-middle {
    max-height: 6.54rem;
  }
}
@media screen and (max-width: 375px) {
  .home-enforcementdetails .content-all .content-middle {
    max-height: 6.53rem;
  }
}
@media screen and (max-width: 320px) {
  .home-enforcementdetails .content-all .content-middle {
    max-height: 6.4rem;
  }
}
@media (max-width: 375px) and (min-height: 812px) {
  .home-enforcementdetails .content-all .content-middle {
    max-height: 9.43rem;
  }
}
@media (max-width: 411px) and (min-height: 823px) {
  .home-enforcementdetails .content-all .content-middle {
    max-height: 8.2rem;
  }
}

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
</style>
