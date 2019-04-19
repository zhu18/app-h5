<!--
* 文件名：searchBywriting
* 作者：李耀
* 描述：相似商标-文字查询
* 修改时间：2019-04-12
-->
<template lang="html">
  <div class="home-searchBywriting" @click.stop="">
      
          <Search @submit="searchList"/>

      
        <div class="content-item">
          <hisList :datalist="list" goto-path='/smartsearch' @hisclick="searchList"></hisList>

        </div>
  </div>
</template>
<script>

import hisList from '../../components/historyList/hisList';
import Search from '../../components/search/innerSearch'
export default {
  name: "home-searchBywriting",
  data() {
    return {
        index:1,
        list:["阿迪达斯阿迪达斯阿迪达斯阿迪达斯阿迪达斯阿迪达斯","NIKE","汉方","同仁堂","草本","Samsung","Apple"]
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
      //查询按钮
      searchList(txt){
           this.$emit('callback',txt)
      },
  },
    components:{
        hisList,
        Search
    }
};
</script>
<style lang="scss">
.home-searchBywriting {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    overflow: hidden;
    top: 0;
    font-size: 0.24rem;
    .search{
        margin:.3rem .3rem 0;
    }
    .content-item{
        max-height: calc(100% - 2rem);
        overflow-y: auto;
        padding: 0.38rem 0.32rem 0.14rem;
    }
}
</style>