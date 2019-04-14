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
                <div class="file">
                    <img src="../../assets/images/dddd.png">
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
                <div class="file">
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
            fbutton(index){
                this.tab=index;
            },
            edit(){

            },
        }
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
</style>