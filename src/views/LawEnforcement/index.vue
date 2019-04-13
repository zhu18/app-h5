<!--
* 文件名：LawEnforcement
* 作者：王帅
* 描述：执法
* 修改时间：2019-04-13
-->
<template>
    <div class="law-enforcement">
        <div class="top-header">
            <h2 class="title">执法</h2>
            <Search/>
        </div>



    </div>
</template>
<script>
    import Search from "../../components/search/index";
    export default {
        name: "law-enforcement",
        data() {
            return {
            };
        },
        created() {},
        mounted() {
        },
        methods: {

        },
        components: {
            Search
        }
    };
</script>
<style lang="scss" scoped>
    ::-webkit-search-cancel-button { display: none; }
    .law-enforcement{
        height:calc(100vh - 0.98rem);
        overflow-y: auto;
        .title{
            heihgt:0.9rem;
            line-height:0.9rem;
            color: #fff;
            font-size: 0.36rem;
            font-weight: normal;
            padding:0 0.32rem;
        }
        .top-header{
            height: 1.8rem;
            background: #2095f2;
            box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
        }
    }
</style>
