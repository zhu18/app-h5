<!--
* 文件名：leBegin
* 作者：王杰
* 描述：开始执法
* 修改时间：2019-04-14
-->
<template lang="html">
    <div class="le-begin">
        <div class="le-begin-wrap">
            <div class="cooperation-code-wrap">
                <p class="title">协同执法</p>
                <codeInput @inputEnd="submit"></codeInput>
                <span class="tips">输入协同码</span>
            </div>
            <i class="line"></i>
            <div class="cooperation-code-new">
                <p class="title">无协同码</p>
                <router-link to="/cooperationCode">
                    <mt-button type="primary" size="large" @click="newShow = true">新建</mt-button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import codeInput from '@/components/codeInput/codeInput'
    export default {
        name: "le-begin",
        data() {
            return {
            };
        },
        created() {
        },
        mounted() {
        },
        methods: {
            submit(code){
                // alert(code);
                this.$router.push({name:"startLawEnforcement",params:{code}})
            }
        },
        components:{
            codeInput
        }
    };
</script>
<style lang="scss" scoped>
    .le-begin {
        padding: 0.6rem;
        border-radius: .1rem;
        text-align: center;
        position: relative;
        box-sizing: border-box;
        background-color: #fff;
        width: calc(100vw - 0.64rem *2);
        .le-begin-wrap {
            min-width: 4rem;
            display: inline-block;
            .title {
                color: #1e2128;
                font-size: 0.36rem;
                margin-bottom: 0.4rem;
            }
            .cooperation-code-wrap {
                padding: 0.4rem 0;
                position: relative;
                .tips {
                    color: #5b5b69;
                    font-size: 0.28rem;
                    margin-top: 0.32rem;
                    display: inline-block;
                }
                &:first-child {
                    padding-top: 0;
                }
                &:last-child {
                    padding-bottom: 0;
                }
            }
            .cooperation-code-new {
                padding-top: 0.6rem;
                .mint-button {
                    height: 0.9rem;
                }
            }
            .line {
                left: 0.64rem;
                right: 0.64rem;
                height: 0.02rem;
                position: absolute;
                display: inline-block;
                background-color: #dfdfdf;
                transform: scaleY(0.5);
            }
        }
    }
</style>
