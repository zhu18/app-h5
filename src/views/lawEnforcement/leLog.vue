<!--
* 文件名：lelog
* 作者：王帅
* 描述：执法记录
* 修改时间：2019-04-13
-->
<template>
    <div class="lelog">
        <div class="top-header">
            <Search/>
        </div>
        <div class="total">共{{list.length}}条执法案件记录</div>
        <div class="list"
             v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
            <div class="item" v-for="(item,index) in list" :key="index">
                <h3>廖某某案件相关执法</h3>
                <div class="content" @click="openDetails">
                    <div class="img-box">
                        <img src="../../assets/images/home/banner.png" alt="">
                    </div>
                    <div class="info">
                        <p><span class="p-title">经办人</span>经办人{{index+1}}  </p>
                        <p><span class="p-title">时间</span>2019-04-15  08:36:15  </p>
                        <p><span class="p-title">地点</span>北京市  海淀区  </p>

                    </div>
                </div>
            </div>
            <div class="loading" v-if="loading">
                <span class="tips">数据加载中</span><mt-spinner :type="3" color="#26a2ff"></mt-spinner>
            </div>
        </div>


        <div class="bottom-bar">
            <div class="item" :class="{active:current==0}" @click="tab(0)">本局执法记录</div>
            <div class="item" :class="{active:current==1}" @click="tab(1)">公开执法记录</div>
        </div>
    </div>
</template>
<script>
    import Search from "../../components/search/lesearch.vue";
    export default {
        name: "law-enforcement",
        data() {
            return {
                current:0,
                loading:false,
                list:[1,3,2,2,2]
            };
        },
        created() {},
        mounted() {
        },
        methods: {
            tab(index){
                this.current=index
                this.list=[1,2,3,4]
            },
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 4; i++) {
                        this.list.push(last + i);
                    }
                    this.loading = false;
                }, 3500);
            },
            //执法详情
            openDetails(){
                this.$router.push('enforcementdetails');
            }
        },
        components: {
            Search
        }
    };
</script>
<style lang="scss" scoped>
    ::-webkit-search-cancel-button { display: none; }
    .lelog{
        background: #f6f6f6;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        overflow-y: auto;
        .top-header{
            height: 0.9rem;
            background: #2095f2;
            box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
        }
        .total{
            height:0.9rem;
            line-height:0.9rem;
            color: #5b5b69;
            font-size: 0.24rem;
            padding: 0 0.32rem;
            box-sizing: border-box;
        }
        .list{
            height:calc(100% - 1.8rem - 1.28rem);
            overflow-y: auto;
            padding: 0 0.32rem;
            box-sizing: border-box;
            flex-direction:column;
            .item{
                height:2.4rem;
                border-radius: 0.1rem;
                background: #fff;
                color: #000;
                margin-bottom:0.32rem;
                padding: 0 0 0.32rem 0;
                display: flex;
                align-items: center;
                flex-direction: column;
                box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
                box-sizing: border-box;
                h3{
                    height:1rem;
                    line-height:1rem;
                    text-align: left;
                    width: 100%;
                    font-size:0.32rem;
                    color: #1e2128;
                    font-weight:normal;
                    text-indent:0.32rem;
                }
                .content{
                    margin:0;
                    height:1rem;
                    padding:0 0.32rem;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    .img-box{
                        height:1rem;
                        width:1.8rem;
                        margin-right: 0.32rem;
                        img{
                            width: 100%;
                            height:100%;
                        }
                    }
                    .info{
                        flex:1;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        p{
                            color: #333333;
                        }
                        .p-title{
                            font-size: 0.24rem;
                            color: #5b5b69;
                            display: inline-block;
                            width:1.1rem;
                        }
                    }

                }


            }
        }
        .bottom-bar{
            height:1.28rem;
            display: flex;
            width: 100%;
            align-items: center;
            background-color: #fff;
            box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.1);
            position: relative;
            z-index:10;
            .item{
                flex: 1;
                display: flex;
                justify-content: center;
                font-size: 0.32rem;
                color: #5b5b69;
                &:nth-child(2){
                    border-left: 1px solid #bfbfbf;
                }
                &.active{
                    color: #2095f2;
                }
            }
        }
    }
    .loading{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 0.6rem;
        .tips{
            margin:0 0.3rem;
            display: inline-block;
        }
    }
</style>
