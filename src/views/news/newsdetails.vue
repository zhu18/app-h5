<!--
* 文件名：newsdetails
* 作者：郭惠敏
* 描述：新闻详情
* 修改时间：2019-04-15
-->
<template lang="html">
    <div class="home-newsdetails">
        <div class="top-header">
            <mt-header fixed :title="title">
                <div slot="left" >
                    <mt-button icon="back" @click='goBack'></mt-button>
                </div>
                <div slot="right" >
                    <i class="mintuibtn-operate mintui-more"></i>
                    <i class="iconfont icon-query"></i>
                </div>
            </mt-header>
        </div>
        <div class="content-all">
            <h2 class="article-title">{{obj.name0}}</h2>
            <ul class="derivation-box">
                <li class="be-from">{{obj.name1}}</li>
                <li class="comment-vessel">{{obj.name2}}评论</li>
                <li class="setup-time">{{obj.name3}}</li>
            </ul>
            <div class="article-content">
                <p class="mb55">{{obj.name4}}</p>
                <p>{{obj.name5}}</p>
                <img src="../../assets/images/news/articleimg.jpg" class="img"/>
                <p>{{obj.name6}}</p>
            </div>
            <div class="btn-operate">
                <a class="a-like"><i class="iconfont icon-zan"></i><span>45</span></a>
                <a class="a-collect"><i class="iconfont icon-coll"></i><span>45</span></a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "home-newsdetails",
        data() {
            return {
                title:'新闻详情',
                obj:{
                    name0:'在海外习近平听孩子们唱诵过这些中文诗、中文歌',
                    name1:'新闻网',
                    name2:'2223',
                    name3:'17分钟前',
                    name4:'是聚合歌曲，拥有拨动心弦、引发共鸣的动人力量。',
                    name5:'不少我们耳熟能详的中文诗、中文歌，成为外国孩子的中文启蒙。伴随着评阅起伏、婉转悠扬的歌嘤，中国文化在世界上越穿越远。',
                    name6:'是聚合歌曲，拥有拨动心弦、引发共鸣的动人力量。'
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
    .mb55{margin-bottom: .55rem!important;}
    .icon-query{
        float: right;
        margin: 0.069rem 0 0 0.2rem;
        display: inline-block;
    }
    .mintui-more{
        float: right;
        margin: 0.1rem 0 0 0.2rem;
        display: inline-block;
    }
    .home-newsdetails {
        width: 100%;
        min-height: 100%;
        top:0;
        background: #fff;
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
            width: 100%;
            height: auto;
            padding: 0.32rem;
            box-sizing: border-box;
            background-color: #ffffff;
            .article-title{
                font-size: 0.32rem;
                color: #1e2128;
                line-height: 0.45rem;
            }
            .derivation-box{
                margin: 0.45rem 0 0.38rem 0;
                height: 0.4rem;
                line-height: 0.4rem;
                li.be-from{
                    font-size: 0.24rem;
                    color: #bfbfbf;
                    float: left;
                }
                li.comment-vessel{
                    font-size: 0.2rem;
                    color: #fea71a;
                    float: left;
                    height: 0.34rem;
                    line-height: 0.36rem;
                    border: 1px solid #fea71a;
                    border-radius: 0.3rem;
                    padding: 0 0.18rem;
                    margin-left: 0.25rem;
                }
                li.setup-time{
                    font-size: 0.24rem;
                    color: #bfbfbf;
                    float: right;
                }
            }
            .article-content{
                p{
                    font-size: 0.28rem;
                    color: #333;
                    margin-bottom: 0.25rem;
                    line-height: 0.4rem;
                }
                img.img{
                    width: 100%;
                    height: 3.88rem;
                    margin-bottom: 0.25rem;
                }
            }
            .btn-operate{
                margin: 35px auto 0;
                text-align: center;
                a{
                    min-width: 1.6rem;
                    height: 0.7rem;
                    line-height: 0.69rem;
                    border: 1px solid #bfbfbf;
                    border-radius: 0.4rem;
                    margin-right: 0.4rem;
                    font-size: 0.28rem;
                    color: #5b5b69;
                    box-sizing: border-box;
                    text-align: right;
                    display: inline-block;
                    position: relative;
                    i{
                        line-height: 0.7rem;
                        color: #bfbfbf;
                        float: left;
                    }
                }
                a.a-like{
                    padding:0 0.4rem 0 0.15rem;
                    i{
                        font-size: 0.8rem;
                        margin-top: -2px;
                    }
                }
                a.a-collect{
                    padding:0 0.4rem 0 0.23rem;
                    i{
                        font-size: 0.6rem;
                        margin-top: -2px;
                    }
                }
                a:last-child{
                    margin-right: 0;
                }
            }
        }
    }
    /*针对不同的屏幕尺寸设置不同的样式*/
    @media (max-width: 1024px) and (min-height: 1366px) {
        .home-newsdetails .content-all{padding-bottom: 3rem}
        .mintui{font-size: 0.45rem}
    }
    @media (max-width: 768px) and (min-height: 1024px) {
        .home-newsdetails .content-all{padding-bottom: 3rem}
        .mintui{font-size: 0.45rem}
    }
</style>
