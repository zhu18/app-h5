<template>
    <div class="home-lawDetails">
        <div class="top-header">
            <mt-header fixed :title="title">
                <div slot="left" >
                    <mt-button icon="back" @click='goBack'></mt-button>
                </div>
                <!--        <div slot="right" >
                          <span @click="edit">编辑</span>
                        </div>-->
            </mt-header>
        </div>
        <div class="middle-content">
            <div class="title">2019年4月15日    北京市海淀区</div>
            <div class="item">
                <div class="files video">
                    <i  class="iconfont icon-video"></i>
                </div>
                <div class="footer">视频详情介绍5356353视频详情介绍</div>
            </div>
            <div class="item">
                <div class="files sound">
                    <i  class="iconfont icon-sound"></i>
                </div>
                    <div class="footer">视频详情介绍5356353视频详情介绍</div>
            </div>
            <div class="item">
                <div class="file">
                    <img src="../../assets/images/lawdetails.png">
                </div>
                <div class="footer">图片详情介绍5356353图片详情介绍</div>
            </div>
        </div>
        <div class="bottom-content">
      <span @click="fbutton" class="span1">
          <p class="p1">
       <!-- <img src="../../assets/images/sc-qz.png">-->
           <i :class="index==1 ? 'iconfont icon-collection' : 'iconfont icon-coll'"></i>
           <span :class="index==1 ?'p2':''">收藏</span>
        </p>
      </span>
      <span @click="iconclick" class="span1"><p>
          <i class="iconfont icon-share"></i>
                <span>分享</span></p></span>
        </div>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default {
        name: "home-lawDetails",
        data() {
            return {
                index:0,
                title:'取证详情',
            };
        },
        created() {
        },
        mounted() {
        },
        methods: {
            iconclick() {
                Toast({
                    message: '原生app对接-调用原生分享功能',
                });
            },
            goBack(){
                this.$router.goBack()
            },
            fbutton(){
                if(this.index==0){
                    this.index=1
                    Toast({
                        message: '收藏成功',
                    });
                }
                else{
                    this.index=0;
                    Toast({
                        message: '取消收藏',
                    });
                }
            },
            edit(){
            },
        },
        components: {

        },
    };
</script>
<style lang="scss">
    .home-lawDetails {
        width: 100%;
        height: 100%;
        background-color: #f6f6f6;
        overflow: hidden;
        top:0;
        font-size: 0.24rem;
        .top-header{
            height: 0.9rem;
            .mint-header{
                height: 0.9rem;
                line-height: 0.9rem;
                background: #2095f2;
            }
        }
        .middle-content{
            height: calc(100% - 2rem - 0.7rem);
            overflow-y: auto;
            width: 90%;
            background-color: #ffffff;
            margin: 0.4rem auto;
            .title{
                height: 0.9rem;
                line-height: 0.9rem;
                padding-left: 0.3rem;
                color: #5b5b69;
            }
            .item {
                margin-bottom: 0.3rem;
                .iconfont{
                    font-size: 0.84rem;
                    color:#2095f2;
                }
                .file{
                    border-radius: 8px;
                    height: 3.4rem;
                    width: 100%;
                    img {
                        padding: 0 0.3rem;
                        height: 3.4rem
                    }
                }
                .sound{
                    background: url('../../assets/images/lawsound.png') no-repeat;
                    background-size: cover;
                }
                .video{
                    background: url('../../assets/images/lowvideo.png') no-repeat;
                }
                .files{
                    border-radius: 8px;
                    height: 3.4rem;
                    width: 90%;
                    margin: 0 auto;
                    background-size: cover;
                    display: flex;
                    justify-content: flex-end;
                    .iconfont{
                        font-size: 0.84rem;
                        color:#2095f2;
                        margin-top: 0.1rem;
                        margin-right: 0.1rem;
                    }
                }
                .footer{
                    font-size: 0.32rem;
                    padding: 0.3rem 0.3rem;
                    color: #5b5b69;
                }
                .footer-audio{
                    margin-top: 0.2rem
                }
            }

        }
        .bottom-content{
            text-align: center;
            width: 100%;
            height: 1rem;
            background-color: #ffffff;
            .span1{
                width: 48%;
                text-align: center;
                display: inline-block;
                height: 0.32rem;
                line-height: 1rem;
                .iconfont{
                    font-size: 0.74rem;
                    vertical-align: middle
                }
                .iconfonta{
                    color: #2095f2;
                }
                .p2{
                    color: #2095f2;
                }
                p{
                    width: 100%;
                    display: inline-block;
                    height: 0.32rem;
                    line-height: 0.42rem;
                    img{
                        height: 0.38rem;
                        margin-right: 0.15rem
                    }
                }
                .p1{
                    height: 0.32rem;
                    border-right: 0.02rem solid #bfbfbf;

                }
            }
        }
    }
</style>