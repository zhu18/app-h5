<!--
* 文件名：search
* 作者：李猛
* 描述：法律法规-查询
* 修改时间：2019-04-16
-->
<template>
    <div class="search">
        <div class="item-icon"><i class="icon iconfont icon-query"></i></div>
        <div class="item-inp"><input type="input" value="" placeholder="请输入关键字" /></div>
    </div>
</template>
<script>
      export default {
        name: "lawsRegulationsSearch",
        data() {
            return {
            };
        },
        created() {},
        mounted() {},
        methods: {
        },
        components: {
        }
    };
</script>
<style lang="scss" scoped>
    .search{
        height: 0.64rem;
        margin:1.3rem .32rem .4rem .32rem;
        border-radius: 0.05rem;
        background-color: #e5e5e5;
        border:0;
        position: relative;
        font-size: .28rem;
        display:flex;
        align-items:center;
        .item-icon{
            width:.6rem;
            text-align: center;
            i{
                cursor:pointer;
                font-size: .5rem;
                color:#777782;
                float: none;
                margin:auto;
            }
        }
        .item-inp{
            flex-grow: 1;
            input{
                height: 0.64rem;
                width:100%;
                line-height: 0.64rem;
                border:none;
                background-color: transparent;
            }
        }
    }
</style>
