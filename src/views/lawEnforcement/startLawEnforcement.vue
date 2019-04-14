<!--
* startLawEnforcement
* 作者：邢玮
* 描述：开始执法
* 修改时间：2019-04-14
-->
<template>
  <div class="start-wrapper">
    <div class="top-header">
      <mt-header fixed :title="title">
        <div slot="left">
          <mt-button icon="back" @click="goBack"></mt-button>
        </div>
        <mt-button v-show="handleEdit" slot="right" @click="edit">{{collectEdit?'完成':'编辑'}}</mt-button>
      </mt-header>
    </div>
    <div class="start-content-wrapper">
        <div class="start-content">
            <div class="start-item">
                <p class="start-item-title">执法内容</p>
                <p class="start-item-content">金某某XXXX案件相关执法</p>
            </div>
            <div class="start-item">
                <p class="start-item-title">执法人</p>
                <div class="start-item-content">
                    <ul class="lawuser-box clearfix">
                        <li><img src="../../assets/images/lawenforcement/lawUser.jpg" class="img"></li>
                        <li><img src="../../assets/images/lawenforcement/lawUser.jpg" class="img"></li>
                        <li class="add-lawuser">
                            <i class="iconfont icon-add"></i>
                            <p>添加执法人</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="start-item">
                <p class="start-item-title">时间</p>
                <p class="start-item-content">2019-04-05</p>
            </div>
            <div class="start-item">
                <p class="start-item-title">执法地点</p>
                <p class="start-item-content">北京市海淀区丹棱街10号新海大厦办公中心内</p>
            </div>
            <div class="start-item">
                <p class="start-item-title">现场取证</p>
                <ul class="evidence-box clearfix">
                    <li><img src="../../assets/images/lawenforcement/evidence.jpg" class="img"></li>
                    <li><img src="../../assets/images/lawenforcement/evidence2.jpg" class="img"></li>
                    <li><img src="../../assets/images/lawenforcement/evidence3.jpg" class="img"></li>
                    <li class="add-evidence">
                        <i class="iconfont icon-add"></i>
                        <p>上传图片</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "startLawEnforcement",
  data() {
    return {
      title: "执法(8620)",
      handleEdit: true,
      collectEdit: false
    };
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    edit() {}
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.start-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    background: #f6f6f6;
}
.top-header {
  height: 0.9rem;
  background-color: #2095f2;
  box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
  .mint-header {
    height: 0.9rem;
    background: transparent;
  }
  
}
.start-content-wrapper {
    padding: 0.4rem 0.32rem;
    .start-content {
        padding: .32rem;
        border-radius: 0.1rem;
        background: #fff;
        box-shadow: 0 1px 3px rgba(0,0,0,.1);
        .start-item {
            margin-bottom: .36rem;
            .start-item-title{
                
                font-size: .24rem;
                color: #5b5b69;
            }
            .start-item-content{
                margin-top: .16rem;
                font-size: .28rem;
                color: #1e2128;
            }
        }
    }
}
//执法人
.lawuser-box{
    margin:0 0 0.4rem 0;
    li{
        width: 1.9rem;
        height:  1.9rem;
        float: left;
        margin: 0.14rem 0.26rem 0 0;
        overflow: hidden;
        border-radius: .1rem;
        background: #f6f6f6;
        img.img{
            width: 1.64rem;
            height: 1.64rem;
            margin: .26rem 0 0 .13rem;
        }
        &:nth-child(3n){
            margin-right: 0;
        }
    }
    li.add-lawuser {
        background: #f6f6f6;
        border: 0.02rem dashed #dfdfdf;
        text-align: center;
        box-sizing: border-box;
        i{
            font-size: 0.5rem;;
            color: #bfbfbf;
            margin-top: 0.45rem;
            display: inline-block;
            font-weight: 500;
        }
        p{
            font-size: 0.24rem;
            color: #5b5b69;
            margin-top: 0.15rem;
        }
    }
}
//现场取证
.evidence-box{
    margin:0 0 0.4rem 0;
    li{
        width: 2.98rem;
        height: 1.68rem;
        float: left;
        margin: 0.26rem 0.26rem 0 0;
        overflow: hidden;
        border-radius: .1rem;
        img.img{
            width: 2.98rem;
            height: 1.68rem;
        }
        &:nth-child(even){
            margin-right: 0;
        }
    }
    /*现场取证-上传图片*/
    li.add-evidence{
        background: #f6f6f6;
        border: 0.02rem dashed #dfdfdf;
        text-align: center;
        box-sizing: border-box;
        i{
            font-size: 0.5rem;;
            color: #bfbfbf;
            margin-top: 0.45rem;
            display: inline-block;
            font-weight: 500;
        }
        p{
            font-size: 0.24rem;
            color: #5b5b69;
            margin-top: 0.15rem;
        }
    }
}
</style>


