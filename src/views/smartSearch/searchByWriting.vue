<!--
* 文件名：searchBywriting
* 作者：李耀
* 描述：相似商标-文字查询
* 修改时间：2019-04-12
-->
<template lang="html">
  <div class="home-searchBywriting" @click.stop="">
      <div class="top-header">
        <form action="javascript:;" id="searchFrom" @submit="searchList">
            <input type="search" value="" placeholder="请输入关键字查询" />
        </form>
      </div>
          <div class="content-item">
         <hisList :datalist="list"></hisList>
        </div>
  </div>
</template>
<script>
import hisList from '../../components/historyList/hisList';
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
      searchList(){
          this.$router.push('/searchresult')
      },
  },
    components:{
        hisList
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
    .top-header {
        background: url(../../assets/images/component/searchByblack.png) no-repeat .20rem center;
        background-size: 0.32rem 0.32rem;
        background-color: #dfdfdf;
        border-radius: 0.08rem;
        margin: 0 0.3rem;
        margin-top: 0.2rem;
        height: 0.68rem;
        input {
            display: flex;
            align-items: center;
            align-content: center;
            width: 100%;
            padding-left: 0.8rem;
            padding-right: 0.3rem;
            box-sizing: border-box;
            border: none;
            line-height: 0.68rem;
            background-color: transparent;
            color: #5b5b69;
            opacity: 0.5;
            padding-top: 0.04rem;
            ::-webkit-input-placeholder { /* WebKit browsers */
                color: #5b5b69;
            }
        }
    }
    .content-item{
        max-height: calc(100% - 2rem);
        overflow-y: auto;
        padding: 0.38rem 0.32rem 0.14rem;
    }
}
</style>