<!--
* 文件名：searchBywriting
* 作者：李耀
* 描述：相似商标-文字查询
* 修改时间：2019-04-18
-->
<template lang="html">
  <div class="home-hisList" @click.stop="">
         <div class="list-content">
             <div class="list-item" v-for="(item,index) in datalist" :key="index">

                 <span class="span" @click="searchList">{{item}}</span>
                 <div class="del" @click="del(index)">+</div>
             </div>
         </div>
  </div>
</template>
<script>

export default {
  name: "home-hisList",
    props: {
        datalist: {
            type: Array,
            default: () => []
        },
    },
  data() {
    return {
        index:1,
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
      //查询按钮
      searchList(){
          this.$router.push('/searchresult')
      },
      del(index){
          this.datalist.splice(index,1);
      }
  },
  components:{
  }
};
</script>
<style lang="scss">
.home-hisList {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    overflow: hidden;
    top: 0;
    font-size: 0.24rem;
    .list-content{
        flex:1;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        .list-item{
            height: 0.68rem;
            line-height: 0.69rem;
            padding:0 0.4rem 0 0.2rem;
            background-color: #dfdfdf;
            color: #73737f;
            font-size: 0.24rem;
            border-radius: 0.06rem;
            margin:0.12rem;
            max-width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            box-sizing: border-box;
            position: relative;
            .span{
                margin-right: 0.2rem
            }
            .del{
                display: inline-block;
                transform: rotate(-45deg);
                position: absolute;
                font-size: 0.42rem;
                right: 0.15rem;

            }
        }

    }
}
</style>