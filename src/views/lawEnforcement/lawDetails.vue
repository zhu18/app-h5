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
      <span @click="fbutton(0)"><p class="p1">
        <img src="../../assets/images/sc-qz.png">
        收藏
      </p></span>
            <span @click="fbutton(1)"><p><img src="../../assets/images/fx-qz.png"> 分享</p></span>
        </div>
    </div>
</template>
<script>
    import { videoPlayer } from 'vue-video-player';
    require('video.js/dist/video-js.css')
    require('vue-video-player/src/custom-theme.css')
    export default {
        name: "home-lawDetails",
        data() {
            return {
                tab:0,
                title:'取证详情',
            };
        },
        created() {
        },
        mounted() {
        },
        methods: {
            goBack(){
                this.$router.go(-1)
            },
            fbutton(index){
                this.tab=index;
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
            height: calc(100% - 2rem - 0.8rem);
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
            span{
                width: 48%;
                text-align: center;
                display: inline-block;
                height: 0.32rem;
                line-height: 1rem;
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
                    border-right: 0.02rem solid #bfbfbf;

                }
            }
        }
    }
</style>