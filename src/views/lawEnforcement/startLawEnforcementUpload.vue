<!--
* startLawEnforcementUpload
* 作者：邢玮
* 描述：开始执法-上传
* 修改时间：2019-04-14
-->
<template>
    <div class="start-upload-wrapper">
        <div class="top-header">
            <mt-header fixed>
            <div slot="left">
                <mt-button icon="back" @click="goBack"></mt-button>
            </div>
            </mt-header>
        </div>
        <div class="start-upload-pic" v-if="type == 'pic'"></div>
        <div class="start-upload-record" v-if="type == 'record'"></div>
    </div>
</template>
<script>
export default {
    name: 'startLawEnforcementUpload',
    data(){
        return {
            type: ''
        }
    },
    mounted() {
        let type = this.$route.params.type;
        this.type = type;
    },
    methods: {
        goBack() {
            this.$router.goBack();
        },
        
    },
    components: {}
}
</script>
<style lang="scss" scoped>
.top-header {
  height: 0.9rem;
  background-color: transparent;
  box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
  .mint-header {
    height: 0.9rem;
    background: transparent;
  }
}
.start-upload-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    .start-upload-pic,.start-upload-record {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    .start-upload-pic {
        background: url('../../assets/images/lawenforcement/startPic.jpg') no-repeat;
        background-size: cover;
    }
    .start-upload-record {
        top: 1px;
        background: url('../../assets/images/lawenforcement/startRecord.jpg') no-repeat;
        background-size: cover;
    }
}

</style>


