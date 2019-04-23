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
          <div class="start-item">
            <p class="start-item-title">执法内容</p>
            <p class="start-item-content"><input class="start-input" :disabled="!isEdit" v-model="enforceForm.content"/></p>
          </div>
          <div class="start-item">
            <p class="start-item-title">执法人</p>
            <div class="start-item-content start-item-content-list">
              <ul class="lawuser-box clearfix">
                <li v-for="(item, index) in enforcerList" :key="index">
                  <span class="host" v-if="index === 0"></span>
                  <i class="iconfont icon-host" v-if="index === 0"></i>
                  <span class="del-btn" v-if="isEdit" @click="delEnforcer(index)"><i class="iconfont icon-del"></i></span>
                  <img src="../../assets/images/lawenforcement/lawUser.jpg" class="img">
                </li>
                <li class="add-lawuser" @click="addEnforcer">
                  <i class="iconfont icon-add"></i>
                  <p>添加执法人</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="start-item">
            <p class="start-item-title">时间</p>
            <p class="start-item-content"><input class="start-input" :disabled="!isEdit" v-model="enforceForm.date"/></p>
          </div>
          <div class="start-item">
            <p class="start-item-title">执法地点</p>
            <p class="start-item-content"><input class="start-input" :disabled="!isEdit" v-model="enforceForm.place"/></p>
          </div>
          <div class="start-item">
            <p class="start-item-title">现场取证</p>
            <div class="start-item-content start-item-content-list">
              <ul class="evidence-box clearfix">
                <li v-for="(item, index) in evidenceList" :key="index">
                  <span class="del-btn" v-if="isEdit" @click="delevidence(index)"><i class="iconfont icon-del"></i></span>
                  <img :src="item.imgPath" class="img">
                </li>
                <li class="add-evidence" @click="uploadPicClick" >
                  <i class="iconfont icon-add"></i>
                  <p>上传图片</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="start-save-btn" @click="saveClick">保存执法记录</div>
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
    <div class="start-btn">
      <span class="start-add-btn" :class="{active: btnClickFlag}" @click="btnClick">
        <i class="iconfont icon-add"></i>
      </span>
      <ul class="start-hidden-btn">
          <li  class="start-hidden-li">
          <span class="start-add-btn">
            <i class="iconfont icon-txtquery" @click="txtqueryClick"></i>
          </span>
        </li>
        
        <li  class="start-hidden-li">
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
import anime from "animejs";
import {  MessageBox, Toast } from "mint-ui";
import img1 from '../../assets/images/lawenforcement/evidence.jpg'
import img2 from '../../assets/images/lawenforcement/evidence2.jpg'
import img3 from '../../assets/images/lawenforcement/evidence3.jpg'
export default {
  name: "startLawEnforcement",
  data() {
    return {
      title: "执法(8620)",
      handleEdit: true,
      isEdit: false,
      btnClickFlag: false,
      enforcerList: [1,2],
      evidenceList: [
        {imgPath: img1},
        {imgPath: img2},
        {imgPath: img3}
      ],
      enforceForm:{
        content: '金XX商标相关执法',
        date: '2019-04-05 12:20:20',
        place: '北京市海淀区丹棱街10号新海大厦办公中心内北京市海淀区丹棱街10号新海大厦办公中心内  '
      },
      isColl: true
    };
  },
  mounted() {
      document.body.addEventListener('touchstart', function() {}, false);
      this.$route.params.code && (this.title = "执法("+this.$route.params.code+")")

      anime.set(".start-hidden-li", {
        bottom: "0",
        scale: [0, 0],
        
    });
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    //编辑
    edit() {
      
      let obj = {...this.enforceForm};
      if(this.isEdit){
        if(!(obj.content && obj.date && obj.place && this.enforcerList.length && this.evidenceList.length)){
          if(!obj.content){
            Toast('请输入执法内容！');
          }else if(!obj.date){
            Toast('请输入执法时间！');
          }else if(!obj.place){
            Toast('请输入执法地点！');
          }else if(this.enforcerList.length === 0){
            Toast('请选择执法人！');
          }else if(this.evidenceList.length === 0){
            Toast('请选择现场取证照片！');
          }
        }else {
          this.isEdit = !this.isEdit;
        }
        
      }else {
        this.isEdit = !this.isEdit;
      }
      
    },
    //右下角加号点击
    btnClick() {
      this.btnClickFlag = !this.btnClickFlag;
      if(this.btnClickFlag){
          anime({
            targets: ".start-hidden-li",
            // translateY: offset[type],
            translateY: function(el, i) {
                return -(1.05 + 1.15 * i) + 'rem';
            },
            scale:[1,1],
            rotate: '1turn',
            easing: "easeInOutCubic",
            duration: 300,
            delay: anime.stagger(100, {direction: 'reverse'})
        })
      }else {
          anime({
            targets: ".start-hidden-li",
            // translateY: offset[type],
            translateY: function(el, i) {
                return 0;
            },
            easing: "easeInOutCubic",
            duration: 300,
            delay: anime.stagger(100),
            endDelay: function(el, i, l) {
                return (l - i) * 100;
            }
        })
      }
      
    },
    // 图片按钮点击
    picBtnClick() {
        MessageBox("提示", "原生app对接-打开相机");
      this.$router.push({
        name: "startLawEnforcementUpload",
        params: { type: "pic" }
      });
    },
    // 图片按钮点击
    recordBtnClick() {
        MessageBox("提示", "原生app对接-打开录音");
      this.$router.push({
        name: "startLawEnforcementUpload",
        params: { type: "record" }
      });
    },
    blurWrapperClick(){
      if(this.btnClickFlag){
        anime({
            targets: ".start-hidden-li",
            // translateY: offset[type],
            translateY: function(el, i) {
                return 0;
            },
            easing: "easeInOutCubic",
            duration: 300,
            delay: anime.stagger(100),
            endDelay: function(el, i, l) {
                return (l - i) * 100;
            }
        })
        this.btnClickFlag = !this.btnClickFlag;
      }
      
      
    },
    //点击搜索按钮
    txtqueryClick(){
      this.$router.push({name: 'trademarkinquiry'})
    },
    //添加取证
    uploadPicClick(){
      MessageBox("提示", "原生app对接-打开系统相册");
    },
    //添加执法人
    addEnforcer(){
      this.$router.push({name: 'enforcerList'})
    },
    //保存执法记录
    saveClick(){
      let instance = Toast('已生成');
      let _this = this;
      setTimeout(() => {
        instance.close();
        _this.$router.push({name: 'lelog'})
      }, 2000);
      
    },
    //删除执法人照片
    delEnforcer(index){
      this.enforcerList.splice(index,1);
    },
    //删除现场取证照片
    delevidence(index){
      this.evidenceList.splice(index, 1);
    },
    //分享点击
    shareClick(){
      MessageBox("提示", "原生app对接-分享");
    },
    //打印点击
    printClick(){
      MessageBox("提示", "原生app对接-打印");
    },
    //收藏点击
    collClick(){
      this.isColl = !this.isColl;
      if(this.isColl){
        Toast('已取消收藏！')
      }else {
        Toast('收藏成功！')
      }
      
    }
  },
  components: {}
};
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
  height: calc(100% - 0.9rem);
  padding: 0 0.32rem;
  overflow-y: auto;
  .start-content {
    margin: 0.4rem 0;
    padding: 0.32rem 0.06rem 0.32rem 0.32rem;
    border-radius: 0.1rem;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    .start-item {
      margin-bottom: 0.2rem;
      .start-item-title {
        font-size: 0.24rem;
        color: #5b5b69;
      }
      .start-item-content {
        margin-top: 0.16rem;
        padding-right: .26rem;
        font-size: 0.28rem;
        color: #1e2128;
      }
      .start-item-content-list {
        padding: 0;
      }
    }
  }
}
.start-btn {
  position: fixed;
  right: 0.64rem;
  bottom: 0.6rem;
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
    &:active{
      border-color: #2095f2;
      i{
        color: #2095f2;
      }
    }
  }
  span.collBtn{
    &:active{
      border-color: #fea71a;
      i{
        color: #fea71a;
      }
    }
  }
}
//执法人
.lawuser-box {
  margin: 0 0 0.4rem 0;
  li {
    position: relative;
    width: 1.9rem;
    height: 1.9rem;
    float: left;
    margin: 0.14rem 0.26rem 0 0;
    border-radius: 0.1rem;
    background: #f6f6f6;
    
    img.img {
      width: 1.64rem;
      height: 1.64rem;
      margin: 0.26rem 0 0 0.13rem;
    }
    .host{
        position: absolute;
        top: .1rem;
        left: .1rem;
        display: inline-block;
        width: .32rem;
        height: .32rem;
        border-radius: 50%;
        border: .02rem solid rgba(32,149,242,.3);
        text-align: center;
        line-height: .3rem;
        
    }
    i.icon-host {
        position: absolute;
        top: 0;
        left: .03rem;
        color: #2095f2;
        font-size: 0.5rem;
      }
  }
  li.add-lawuser {
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
  height: .8rem;
  margin-right: 0.26rem;
  border: 1px solid #dfdfdf;
  border-radius: .1rem;
  color: #2095f2;
  font-size: .28rem;
  text-align: center;
  line-height: .8rem;
}
.del-btn {
  position: absolute;
  right: -.16rem;
  top: -.16rem;
  width: .4rem;
  height: .4rem;
  border-radius: 50%;
  background: rgba(0,0,0,.4);
  text-align: center;
  i.icon-del{
    color: #fff;
    font-size: .36rem;
    line-height: .4rem;
    font-weight: 700;
  }
}
.start-input {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 0 .16rem 0;
  border: none;
  border-bottom: .01rem solid rgba(191,191,191,.8);
}
.start-input:disabled {
  color: #1e2128;
  border: none;
  border-bottom: .01rem solid rgba(0,0,0,0);
}
</style>


