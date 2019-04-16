<!--
* 文件名：header
* 作者：李猛
* 描述：法律法规-页头
* 修改时间：2019-04-15
-->
<template>
    <div class="laws-header">
        <mt-header fixed :title="title">
            <div slot="left" >
                <mt-button icon="back" @click='goBack'></mt-button>
            </div>
            <mt-button v-if="isShowOp" slot="right" @click='edit'> {{isEdit?'完成':'编辑'}} </mt-button>
        </mt-header>
    </div>
</template>
<script>
      export default {
        name: "lawsRegulationsHeader",
        props:['title','isShowOp'],
        data() {
            return {
                isEdit:false
            };
        },
        created() {},
        mounted() {},
        methods: {
            goBack(){
                this.$router.go(-1)
            },
            edit(){
                this.isEdit = !this.isEdit;
            }
        },
        components: {
        }
    };
</script>
<style lang="scss" scoped>
    .laws-header{
        height: 0.9rem;
        width:100%;
        position:fixed;
        background-color: #2095f2 !important;
        z-index:1000;
        font-size:.24rem;
        .mint-header{
            height: 0.9rem;
            background: transparent;
        }
    }
</style>
