<!--
* 文件名：footer
* 作者：李猛
* 描述：法律法规-页脚
* 修改时间：2019-04-15
-->
<template>
    <div class="footer">
        <div class="item border">打印</div>
        <div class="item border">分享</div>
        <div class="item">收藏</div>
    </div>
</template>
<script>
      export default {
        name: "lawsRegulationsFooter",
        data() {
            return {};
        },
        created() {},
        mounted() {
        },
        methods: {

        },
        components: {
        }
    };
</script>
<style lang="scss" scoped>
    .footer{
        display: flex;
        height: .97rem;
        width: 100%;
        bottom:0;
        font-size: .32rem;
        color:#5b5b69;
        border-top:1px solid rgba(4, 0, 0, 0.1);
        box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);
        align-items: center;
        position:fixed;
        z-index: 1000;
        background: #fff;
       .item{
           flex:1 0 auto;
           text-align: center;
       }
       .border{
           border-right: 1px solid #bfbfbf;
       }
       
    }
</style>
