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
            </mt-header>
        </div>
        <div class="content-all">
            <div class="content-top">
                <dl>
                    <dt>时间</dt>
                    <dd>{{obj.name1}}</dd>
                    <dt>执法地点</dt>
                    <dd>{{obj.name2}}</dd>
                    <dt>执法内容</dt>
                    <dd>{{obj.name3}}</dd>
                </dl>
                <div class="yuan-left"></div>
                <div class="yuan-right"></div>
            </div>
            <div class="content-middle">
                <label class="lable-title">执法人</label>
                <ul class="lawuser-box clearfix">
                    <li><img src="../../assets/images/lawenforcement/lawUser.jpg" class="img"></li>
                    <li><img src="../../assets/images/lawenforcement/lawUser.jpg" class="img"></li>
                    <li><img src="../../assets/images/lawenforcement/lawUser.jpg" class="img"></li>
                    <li><img src="../../assets/images/lawenforcement/lawUser.jpg" class="img"></li>
                </ul>
                <label class="lable-title">现场取证</label>
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
</template>
<script>
    export default {
        name: "home-enforcementdetails",
        data() {
            return {
                title:'执法记录详情',
                obj:{
                    name1:'2019-04-15',
                    name2:'北京市海淀区丹棱街10号新海大厦办公中心内',
                    name3:'金某某XXXX案件相关执法',
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
        },
        components:{
        }
    };
</script>
<style lang="scss">
    .home-enforcementdetails {
        width: 100%;
        height: 100%;
        background-color: #f6f6f6;
        overflow: hidden;
        top:0;
        font-size: 0.12rem;
        .top-header{
            height: 0.9rem;
            .mint-header{
                height: 0.9rem;
                line-height: 0.9rem;
                background: #2095f2;
            }
            .iconfont {
                line-height: 1rem;
                font-size:0.66rem;
            }
        }
        .content-all{
            width: 92%;
            margin: 0.2rem auto 0;
            border: 0.01rem solid #ebebeb;
            background-color: #ffffff;
            .content-top{
                padding: 0.4rem 0.32rem 0.32rem 0.32rem;
                position: relative;
                border-bottom: 0.02rem dashed #dfdfdf;
                dl {
                    dt{
                        font-size: 0.24rem;
                        color: #5b5b69;
                        margin-bottom: 0.22rem;
                    }
                    dd{
                        font-size: 0.28rem;
                        color: #1e2128;
                        margin-bottom: 0.36rem;
                    }
                    dd:last-child{
                        margin-bottom: 0;
                    }
                }
                .yuan-left{
                    position: absolute;
                    top: auto;
                    left:0;
                    bottom:-5%;
                    width: 0.2rem;
                    height: 0.3rem;
                    border-left: none;
                    background-color: #f5f5f5;
                    border-radius:0 50px 50px 0; /* 左上、右上、右下、左下 */
                    box-shadow: inset -0.05rem -0.01rem 0.05rem #e8e8e8;
                }
                .yuan-right{
                    position: absolute;
                    top: auto;
                    right:0;
                    bottom:-5%;
                    width: 0.2rem;
                    height: 0.3rem;
                    border-left: none;
                    background-color: #f5f5f5;
                    border-radius:50px 0 0 50px; /* 左上、右上、右下、左下 */
                    box-shadow: inset 0.05rem 0.01rem 0.05rem #e8e8e8;
                }
            }
            .content-middle{
                max-height: 6.47rem;
                font-size: 0.12rem;
                margin-top: 0.2rem;
                overflow-y: auto;
                padding: 0.32rem 0.05rem 0 0.32rem;
                .lable-title{
                    font-size: 0.24rem;
                    color: #5b5b69;
                }
                .lawuser-box{
                    margin:0.06rem 0 0.4rem 0;
                    li{
                        width: 1.64rem;
                        height:  1.64rem;
                        float: left;
                        margin: 0.26rem 0.26rem 0 0;
                        overflow: hidden;
                        border-radius: .1rem;
                        background: #f6f6f6;
                        img.img{
                            width: 1.64rem;
                            height: 1.64rem;
                        }
                    }
                }
                .evidence-box{
                    margin:0.06rem 0 0.4rem 0;
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
                    }
                    /*现场取证-上传图片*/
                    li.add-evidence{
                        background: #f6f6f6;
                        border: 0.02rem dashed #dfdfdf;
                        text-align: center;
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
            }
        }
    }
    /*针对不同的屏幕尺寸设置不同的样式*/
    @media screen and (max-width: 1024px) {
        .home-enforcementdetails .content-all .content-middle{max-height: 3.2rem;}
    }
    @media screen and (max-width: 780px) {
        .home-enforcementdetails .content-all .content-middle{max-height: 3.24rem;}
    }
    @media screen and (max-width: 414px) {
        .home-enforcementdetails .content-all .content-middle{max-height: 6.55rem;}
    }
    @media screen and (max-width: 411px) {
        .home-enforcementdetails .content-all .content-middle{max-height: 6.54rem;}
    }
    @media screen and (max-width: 375px) {
        .home-enforcementdetails .content-all .content-middle{max-height: 6.53rem;}
    }
    @media screen and (max-width: 320px) {
        .home-enforcementdetails .content-all .content-middle{max-height: 6.4rem;}
    }
    @media (max-width: 375px) and (min-height: 812px) {
        .home-enforcementdetails .content-all .content-middle{max-height: 9.43rem;}
    }
    @media (max-width: 411px) and (min-height: 823px) {
        .home-enforcementdetails .content-all .content-middle{max-height: 8.2rem;}
    }
</style>
