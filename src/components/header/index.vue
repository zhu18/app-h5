<!-- 
* 文件名：header
* 作者：王帅
* 描述：公共头部
* 修改时间：2019-04-08
-->
<template lang="html">
  <div class="top-header">
      <mt-header fixed :title="title">
        <div slot="left"  >
            <mt-button icon="back" @click='goBack' v-if="$route.path!='/home'"></mt-button>
        </div>
        <mt-button v-show='!handleEdit' icon="more" slot="right"></mt-button>
        <mt-button v-show='handleEdit' slot="right" @click='edit'> {{collectEdit?'完成':'编辑'}} </mt-button>
     </mt-header>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return {
            title:'商标智能检索/执法',
            handleEdit:false,
        }
    },
    beforeRouteLeave (to, from, next) {
        this.title=to.params.title?to.params.title:'商标智能检索/执法'
        this.handleEdit=to.params.handleEdit
        next()
    },
    mounted() {
    },
    methods:{
      ...mapMutations(['changeCollectEdit']),
        goBack(){
           this.$router.go(-1)
        },
        edit(){
          this.changeCollectEdit('')
        }
    },
   computed:{
     ...mapState(['collectEdit'])
   }
   
}
</script>

<style lang="scss" scoped>
    .top-header{
        height: 0.9rem;
        background-color: #2095f2;
        .mint-header{
            height: 0.9rem;
            background: transparent;
        }

    }


</style>
