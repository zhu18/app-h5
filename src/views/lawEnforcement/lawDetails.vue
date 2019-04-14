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
                <div class="file" style="height: 4rem">
                    <video-player  class="video-player vjs-custom-skin"
                                   ref="videoPlayer"
                                   :playsinline="false"
                                   :options="playerOptions"
                                   @play="onPlayerPlay($event)"
                                   @pause="onPlayerPause($event)"
                    >
                    </video-player>
                </div>
                <div class="footer">视频详情介绍5356353视频详情介绍</div>
            </div>
            <div class="item">
                <div class="file">
                    <img src="../../assets/images/dddd.png">
                </div>
                <div class="footer"></div>
            </div>
            <div class="item">
                <div class="file" style="height: 3.8rem;">
                    <img src="../../assets/images/lawdetails.png">
                </div>
                <div class="footer">图片详情介绍5356353视频详情介绍</div>
            </div>
        </div>
        <div class="bottom-content">
      <span @click="fbutton(0)"><p :class="tab==0? 'p1 p2': 'p1 '">
        <img src="../../assets/images/sc-qz.png">
        收藏
      </p></span>
            <span @click="fbutton(1)"><p :class="tab==1? 'p2': ''"><img src="../../assets/images/fx-qz.png"> 分享</p></span>
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
                playerOptions: {
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    controls:false,
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'none', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",
                        src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
                    }],
                    poster: "poster.jpg", //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: false,
                        durationDisplay: false,
                        remainingTimeDisplay: false,
                        fullscreenToggle: false  //全屏按钮
                    }
                }
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
            videoPlayer
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
            height: calc(100% - 2rem - 2rem);
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
                .file{
                    border-radius: 8px;
                    height: 3.4rem;
                    width: 100%;
                    img {
                        padding: 0 0.3rem;
                        height: 3.4rem
                    }
                }
                .footer{
                    font-size: 0.32rem;
                    padding: 0.2rem 0.3rem;
                    color: #5b5b69;
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
                .p2{
                    color: #2095f2;
                }
            }
        }
    }
    .video-js .vjs-big-play-button{
        /*
        播放按钮换成圆形
        */
        height: 1.6em;
        width: 1.6em;
        line-height: 2em;
        border-radius: 1em;
        border: 0.02rem solid #2095f2;
    }
    .vjs-custom-skin > .video-js .vjs-big-play-button{
        font-size:0.42rem;
        top: 21%;
        left:91%;
    }
    .vjs-icon-play:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .video-js .vjs-play-control .vjs-icon-placeholder:before{
        color:#2095f2;
    }
    .vjs-custom-skin > .video-js{
        width: 90%;
        margin: 0 auto;
    }
</style>