<!--
* 文件名：LawEnforcement
* 作者：王帅
* 描述：执法
* 修改时间：2019-04-13
-->
<template>
    <div class="law-enforcement">
        <div class="top-header">
            <h1 class="title">执法</h1>
            <Search/>
        </div>
        <div class="list">
            <div tag="div"  to="#" @click="newLaw()" class="item">
                <span class="icon iconfont icon-police"></span>
                <span class="title">开始执法</span>
                <span class="arrow"> <span class="iconfont icon-back"></span></span>
            </div>
            <router-link tag="div"  to="/lelog" class="item">
                <span class="icon icon2 iconfont icon-info"></span>
                <span class="title">执法记录</span>
                <span class="arrow"> <span class="iconfont icon-back"></span></span>
            </router-link>
           <router-link tag="div"  to="/evidenceList" class="item">
                <span class="icon icon3 iconfont icon-evidence"></span>
                <span class="title">取证管理</span>
                <span class="arrow"> <span class="iconfont icon-back"></span></span>
            </router-link>
            <router-link tag="div"  to="/selfCollection" class="item">
                <span class="icon icon4 iconfont icon-collection"></span>
                <span class="title">执法收藏</span>
                <span class="arrow">
                     <span class="iconfont icon-back"></span>
                </span>
             </router-link>
        </div>
        <mt-popup v-model="popupVisible">
            <leBegin></leBegin>
        </mt-popup>
    </div>
</template>
<script>
    import Search from "../../components/search/index";
    import leBegin from "./leBegin.vue"

    export default {
        name: "law-enforcement",
        data() {
            return {
                popupVisible:false
            };
        },
        created() {},
        mounted() {
        },
        methods: {
            newLaw(){
                this.popupVisible=true
            }
        },
        components: {
            Search,
            leBegin
        }
    };
</script>
<style lang="scss" scoped>
    ::-webkit-search-cancel-button { display: none; }
    .law-enforcement{
        background: #f6f6f6;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:1.28rem;
        /*height:calc(100% - 1.28rem);*/
        overflow-y: auto;
        .title{
            height: 0.9rem;
            line-height:0.9rem;
            color: #fff;
            font-size: 0.30rem;
            font-weight: normal;
            text-align: center;
            padding:0 0.32rem;
        }
        .top-header{
            height: 4.5rem;
            background:url(../../assets/images/zfbg.png) no-repeat center center #2095f2;
            background-size: cover;
            box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
            .title{
                margin-bottom:2.5rem;
            }
        }
        .list{
            height:calc(100% - 4.5rem);
            overflow-y: auto;
            padding: 0.32rem;
            box-sizing: border-box;
            display: flex;
            flex-direction:column;
            .item{
                height:1.8rem;
                // flex: 1;
                border-radius: 0.1rem;
                background: #fff;
                color: #000;
                margin-bottom:0.32rem;
                padding: 0 0.32rem;
                display: flex;
                align-items: center;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                &:last-child{
                    margin-bottom:0;
                }
                .icon{
                    width:0.8rem;
                    height:0.8rem;
                    border-radius: 50%;
                    background-color:#2ab1f9;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.72rem;
                    background:linear-gradient(#2ab1f9,#18cbec);

                }
                .icon2{
                    background:linear-gradient( #fec31e,#fea61a);
                }
                .icon3{
                    background:linear-gradient( #53bafc,#53bafc);
                }
                .icon4{
                    background:linear-gradient(#fec31e,#fea51a);
                }
                .title{
                    color: #1e2128;
                    font-size: 0.32rem;
                    flex:1;
                }
                .arrow{
                    width: 0.54rem;
                    height:0.54rem;
                    border:1px solid #f3f3f3;
                    border-radius:50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .iconfont{
                        color: #e7e7e7;
                        font-size:0.54rem;
                        transform: rotate(180deg);
                    }
                }

            }
        }
    }
</style>
