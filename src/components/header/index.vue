<template lang="html">
  <div class="top-header">
      <!-- <mt-header fixed title="商标智能检索/执法"></mt-header> -->
      <mt-header fixed :title="title">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
     </mt-header>
  </div>
</template>

<script>
// import { Header } from 'mint-ui';
export default {
    data(){
        return {
            title:'商标智能检索/执法'
        }
    },
    // beforeRouteEnter(next){
    //     console.log(next)
    // },
    mounted() {
        console.log(this.$route.query.title)
        this.title=this.$route.query.title?this.$route.query.title:'商标智能检索/执法'
    },
    // props:{
    //     title: {
    //         type: String,
    //         default: function () {
    //             return '商标智能检索/执法'
    //             }
    //         }
    // }
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
