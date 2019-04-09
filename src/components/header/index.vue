<template lang="html">
  <div class="top-header">
      <mt-header fixed :title="title">
        <div slot="left" >
            <mt-button icon="back" @click='goBack'></mt-button>
        </div>
        <mt-button icon="more" slot="right"></mt-button>
     </mt-header>
  </div>
</template>

<script>
export default {
    data(){
        return {
            title:'商标智能检索/执法'
        }
    },
    beforeRouteLeave (to, from, next) {
        this.title=to.params.title?to.params.title:'商标智能检索/执法'
        next()
    },
    methods:{
        goBack(){
           this.$router.go(-1)
        }
    },
    mounted() {
    },
   
}
</script>

<style lang="scss" scoped>
    .top-header{
        height: 0.9rem;
        .mint-header{
            height: 0.9rem;
            background: transparent;
        }

    }


</style>
