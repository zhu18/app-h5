<!--
* 文件名：cooperationCode
* 作者：王杰
* 描述：新建协同码
* 修改时间：2019-04-14
-->
<template lang="html">
    <div class="cooperation-new">
        <div class="top-header">
            <mt-header fixed title="新建协同码">
                <div slot="left" >
                    <mt-button icon="back" @click='goBack'></mt-button>
                </div>
            </mt-header>
        </div>
        <div class="cooperation-code-wrap">
            <span class="tips">输入四位数字协同码</span>
            <codeInput @inputEnd="submit"></codeInput>
        </div>
    </div>
</template>
<script>
import codeInput from '@/components/codeInput/codeInput'
    export default {
        name: "cooperation-code",
        data() {
            return {
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
            submit(code){
                // alert(code);
            }
        },
        components:{
            codeInput
        }
    };
</script>
<style lang="scss" scoped>
    .cooperation-new {
        background: #f6f6f6;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: auto;
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
        .cooperation-code-wrap {
            border-radius: 5px;
            padding: 0.8rem 0 1rem 0;
            margin: 0.46rem 0.4rem;
            position: relative;
            text-align: center;
            background-color: #fff;
            box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.1);
            .tips {
                color: #5b5b69;
                font-size: 0.28rem;
                margin-bottom: 0.5rem;
                display: inline-block;
            }
        }
    }
</style>
