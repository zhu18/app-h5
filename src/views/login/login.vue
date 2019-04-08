<template lang="html">
    <div class="homeBody">
        <mt-button type="primary" @click="sendLogin" class="w100" >登录</mt-button>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default {
        name: 'login',
        data() {
            return {
            }
        },
        methods: {
            sendLogin(){
                this.$router.push('/home');
            },
        },
    }
</script>
<style lang="scss" scoped>
.homeBody {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    .w100{
        width:30%;
        margin-top: 30%;
        margin-left: 20%;
    }
}
</style>