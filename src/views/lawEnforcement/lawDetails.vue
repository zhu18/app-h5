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
                <div class="file file-video">
                    <video-player  class="video-player vjs-custom-skin"
                                   ref="videoPlayer"
                                   :playsinline="false"
                                   :options="playerOptions"
                    >
                    </video-player>
                </div>
                <div class="footer">视频详情介绍5356353视频详情介绍</div>
            </div>
            <div class="item">
                <div class="file file-audio">
                    <div class="imgdiv">
                        <img src="../../assets/images/audioopen.png"  @click="open">
                    </div>
                    <canvas id='canvas' class="canvas"  height="130"></canvas>
                    <audio id="audio" class="audio"  >
                        <source  src="../../assets/images/Sugar.mp3" type="audio/ogg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
                <div class="footer footer-audio">音频详情介绍5356353音频详情介绍</div>
            </div>
            <div class="item">
                <div class="file" style="height: 3.8rem;">
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
                filepath:'../../assets/images/Sugar.mp3',
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
                },
                analyser:null,
                meterNum:0,
                ctx:null,
                cwidth:0,
                cheight:0,
                capYPositionArray:[],
                capStyle:'',
                meterWidth:0,
                capHeight:0,
                gradient:null,
                audio:null,
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
            load(){
                this.audio = document.getElementById('audio');
                this.ctx = new AudioContext();
                this.analyser = this.ctx.createAnalyser();
                var audioSrc = this.ctx.createMediaElementSource(this.audio);
                audioSrc.connect(this.analyser);
                this.analyser.connect(this.ctx.destination);
                var frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
                this.meterNum=800 / (10 + 2)//count of the meters;
                this.cwidth='0';
                this.cheight=200-2;
                this.capStyle= '#e0e0e0';
                this.meterWidth=5;
                this.capHeight=2;
                var canvas = document.getElementById('canvas'),
                    cwidth = this.cwidth,
                    cheight = this.cheight,
                    meterWidth = this.meterWidth, //width of the meters in the spectrum
                    gap = 2, //gap between meters
                    capHeight = this.capHeight,
                    capStyle = this.capStyle,
                    meterNum = this.meterNum, //count of the meters
                    capYPositionArray =this.capYPositionArray; ////store the vertical position of hte caps for the preivous frame
                this.ctx = canvas.getContext('2d'),
                    this.gradient = this.ctx.createLinearGradient(0, 0, 0, 300);
                this.gradient.addColorStop(1, '#e0e0e0');
                this.gradient.addColorStop(0.5, '#80cfe9');
                this.gradient.addColorStop(0, '#80cfe9');
                this.renderFrame();
                this.audio.play();
            },
            renderFrame() {
                var array = new Uint8Array(this.analyser.frequencyBinCount);
                this.analyser.getByteFrequencyData(array);
                var step = Math.round(array.length / this.meterNum); //sample limited data from the total array
                this.ctx.clearRect(0, 0, this.cwidth, this.cheight);
                for (var i = 0; i < this.meterNum; i++) {
                    var value = array[i * step];
                    if (this.capYPositionArray.length < Math.round(this.meterNum)) {
                        this.capYPositionArray.push(value);
                    }
                    this.ctx.fillStyle = this.capStyle;
                    //draw the cap, with transition effect
                    if (value < this.capYPositionArray[i]) {
                        this.ctx.fillRect(i * 12, this.cheight - (--this.capYPositionArray[i]), this.meterWidth, this.capHeight);
                    } else {
                        this.ctx.fillRect(i * 12, this.cheight - value, this.meterWidth, this.capHeight);
                        this.capYPositionArray[i] = value;
                    }
                    this.ctx.fillStyle = this.gradient; //set the filllStyle to gradient for a better look
                    this.ctx.fillRect(i * 12 /*this.meterWidth+gap*/, this.cheight - value + this.capHeight, this.meterWidth, this.cheight); //the meter
                }
                requestAnimationFrame(this.renderFrame);
            },
            open(){
                if(this.audio){
                    this.audio.play();
                }else{
                    this.load();
                }
            }
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
                .file-video{
                    height: 4rem
                }
                .file-audio{
                    background-color: #f6f6f6;
                    width: 90%;
                    margin: 0 auto;
                    .imgdiv{
                        text-align: right;
                        img{
                            height: 0.64rem;
                            margin-top: 0.2rem
                        }
                    }
                    .canvas{
                        background-color: #f6f6f6;
                        width: 91%;
                        margin-left: 0.3rem
                    }
                    .audio{
                        height: 0rem;
                        width: 1rem
                    }
                }
                .footer{
                    font-size: 0.32rem;
                    padding: 0.2rem 0.3rem;
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
    .video-js .vjs-big-play-button{
        /*
        播放按钮换成圆形
        */
        width: 0.7rem;
        line-height: 2em;
        border-radius: 50%;
        border: 0.03rem solid #2095f2;
    }
    .vjs-custom-skin > .video-js .vjs-big-play-button{
        font-size:0.32rem !important;
        top: 21%;
        left:91%;
    }
    .vjs-icon-play:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .video-js .vjs-play-control .vjs-icon-placeholder:before{
        color:#2095f2;
        font-size: 0.42rem;
    }
    .vjs-custom-skin > .video-js{
        width: 90%;
        margin: 0 auto;
    }
</style>