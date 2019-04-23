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
        <div class="content-all">
            <div class="content-top">
                <dl>
                    <dt>时间</dt>
                    <dd><input class="start-input" :disabled="!isEdit" v-model="obj.name1"/></dd>
                    <dt>执法地点</dt>
                    <dd><input class="start-input" :disabled="!isEdit" v-model="obj.name2"/></dd>
                    <dt>执法内容</dt>
                    <dd><input class="start-input" :disabled="!isEdit" v-model="obj.name3"/></dd>
                </dl>
                <div class="yuan-left"></div>
                <div class="yuan-right"></div>
            </div>
            <div class="content-middle">
                <label class="lable-title">执法人</label>
                <ul class="lawuser-box clearfix">
                    <li v-for="(item, index) in enforcerList" :key="index">
                        <span class="del-btn" v-if="isEdit" @click="delEnforcer(index)"><i class="iconfont icon-del"></i></span>
                        <img src="../../assets/images/lawenforcement/lawUser.jpg" class="img">
                    </li>
                    <li class="add-evidence" @click="addEnforcer">
                        <i class="iconfont icon-add"></i>
                        <p>添加执法人</p>
                    </li>
                </ul>
                <label class="lable-title">现场取证</label>
                <ul class="evidence-box clearfix">
                    <li  v-for="(item, index) in evidenceList" :key="index">
                        <span class="del-btn" v-if="isEdit" @click="delevidence(index)"><i class="iconfont icon-del"></i></span>
                        <img :src="item.imgPath" class="img">
                    </li>
                    <li class="add-evidence"  @click="uploadPicClick">
                        <i class="iconfont icon-add"></i>
                        <p>上传图片</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import {  MessageBox, Toast } from "mint-ui";
import img1 from '../../assets/images/lawenforcement/evidence.jpg'
import img2 from '../../assets/images/lawenforcement/evidence2.jpg'
import img3 from '../../assets/images/lawenforcement/evidence3.jpg'
export default {
  name: 'home-enforcementdetails',
  data() {
    return {
      handleEdit: true,
      isEdit: false,
      title: '执法记录详情',
      obj: {
        name1: '2019-04-15 12:20:20',
        name2: '北京市海淀区丹棱街10号新海大厦办公中心内',
        name3: '金XX商标相关执法'
      },
      enforcerList: [1,2],
      evidenceList: [
        {imgPath: img1},
        {imgPath: img2},
        {imgPath: img3}
      ],
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
        if (!(obj.name1 && obj.name2 && obj.name3 && this.enforcerList.length && this.evidenceList.length)) {
          if (!obj.name1) {
            Toast('请输入执法内容！')
          } else if (!obj.name2) {
            Toast('请输入执法时间！')
          } else if (!obj.name3) {
            Toast('请输入执法地点！')
          }else if(this.enforcerList.length === 0){
            Toast('请选择执法人！');
          }else if(this.evidenceList.length === 0){
            Toast('请选择现场取证照片！');
          }
        } else {
          this.isEdit = !this.isEdit
        }
      } else {
        this.isEdit = !this.isEdit
      }
    },
    //添加取证
    uploadPicClick(){
      MessageBox("提示", "原生app对接-打开系统相册");
    },
    //添加执法人
    addEnforcer(){
      this.$router.push({name: 'enforcerList'})
    },
    //删除执法人照片
    delEnforcer(index){
      this.enforcerList.splice(index,1);
    },
    //删除现场取证照片
    delevidence(index){
      this.evidenceList.splice(index, 1);
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
    .mint-header {
      height: 0.9rem;
      line-height: 0.9rem;
      background: #2095f2;
    }
    .iconfont {
      line-height: 1rem;
      font-size: 0.66rem;
    }
  }
  .content-all {
    width: 92%;
    margin: 0.2rem auto 0;
    border: 0.01rem solid #ebebeb;
    background-color: #ffffff;
    border-radius: .1rem;
    .content-top {
      padding: 0.4rem 0.32rem 0.32rem 0.32rem;
      position: relative;
      border-bottom: 0.02rem dashed #dfdfdf;
      dl {
        dt {
          font-size: 0.24rem;
          color: #5b5b69;
          margin-bottom: 0.22rem;
        }
        dd {
          font-size: 0.28rem;
          color: #1e2128;
          margin-bottom: 0.36rem;
        }
        dd:last-child {
          margin-bottom: 0;
        }
      }
      .yuan-left {
        position: absolute;
        top: auto;
        left: 0;
        bottom: -5%;
        width: 0.2rem;
        height: 0.3rem;
        border-left: none;
        background-color: #f5f5f5;
        border-radius: 0 50px 50px 0; /* 左上、右上、右下、左下 */
        box-shadow: inset -0.05rem -0.01rem 0.05rem #e8e8e8;
      }
      .yuan-right {
        position: absolute;
        top: auto;
        right: 0;
        bottom: -5%;
        width: 0.2rem;
        height: 0.3rem;
        border-left: none;
        background-color: #f5f5f5;
        border-radius: 50px 0 0 50px; /* 左上、右上、右下、左下 */
        box-shadow: inset 0.05rem 0.01rem 0.05rem #e8e8e8;
      }
    }
    .content-middle {
      max-height: 6.47rem;
      font-size: 0.12rem;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      overflow-y: auto;
      padding: 0.32rem 0.05rem 0 0.32rem;
      .lable-title {
        font-size: 0.24rem;
        color: #5b5b69;
      }
      .lawuser-box {
        margin: 0.06rem 0 0.4rem 0;
        li {
            position: relative;
          width: 1.9rem;
          height: 1.9rem;
          float: left;
          margin: 0.14rem 0.26rem 0 0;
          border-radius: 0.1rem;
          background: #f6f6f6;
          text-align: center;
            box-sizing: border-box;
          img.img {
            width: 1.64rem;
            height: 1.64rem;
            margin: 0.26rem 0 0 0.13rem;
          }
          i.icon-add {
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
      .evidence-box {
        margin: 0.06rem 0 0.4rem 0;
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
            margin-top: 0.15rem;
          }
        }
      }
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
  border-bottom: 0.01rem solid rgba(191,191,191,.8);
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
</style>
