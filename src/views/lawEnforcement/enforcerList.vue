<!--
* 文件名：enforcerList
* 作者：邢玮
* 描述：执法人员列表
* 修改时间：2019-04-19
-->
<template>
    <div class="start-wrapper">
        <div class="top-header">
            <mt-header fixed :title="title">
            <div slot="left">
                <mt-button icon="back" @click="goBack"></mt-button>
            </div>
            <mt-button v-show="handleEdit" slot="right" @click="edit">{{isEdit?'完成':'编辑'}}</mt-button>
            </mt-header>
        </div>
        <div class="enforcer-wrapper">执法人员列表</div>
    </div>
</template>
<script>
export default {
    name: 'enforcerList',
    data(){
        return {
            title: '执法人'
        }
    },
    methods:{
        goBack() {
            this.$router.goBack();
        },
    }
}
</script>
<style lang="scss" scoped>
.start-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f6f6f6;
}
.top-header {
  position: relative;
  height: 0.9rem;
  background-color: #2095f2;
  box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
  z-index: 1;
  .mint-header {
    height: 0.9rem;
    background: transparent;
  }
}
</style>
