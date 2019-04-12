<!--
* 文件名：searchBywriting
* 作者：李耀
* 描述：相似商标-文字查询
* 修改时间：2019-04-12
-->
<template lang="html">
  <div class="home-searchBywriting">
      <div class="top-header">
        <form action="javascript:;" id="searchFrom" @submit="searchList">
            <input type="search" value="" placeholder="请输入关键字查询" />
        </form>
      </div>
        <div class="content-item">
          <span class="item" v-for="(item, index) in dataList">
              {{item}}
              <img src="../../assets/images/close.png" @click="closeitem(index)" class="img">
          </span>
        </div>
  </div>
</template>
<script>
export default {
  name: "home-searchBywriting",
  data() {
    return {
        index:1,
        dataList:["阿迪达斯","NIKE","汉方","同仁堂","草本","Samsung","Apple"]
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
      //查询按钮
      searchList(){
      },
      //关闭方法
      closeitem(item){
       this.dataList.splice(item, 1 );
      },
  },
  components:{
  }
};
</script>
<style lang="scss">
.home-searchBywriting {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    overflow: hidden;
    overflow-y: auto;
    top: 0;
    font-size: 0.12rem;
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
            padding-top: 0.04rem;
            ::-webkit-input-placeholder { /* WebKit browsers */
                　　color: #5b5b69;
            }
        }
    }
    .content-item{
        padding: 0.38rem 0.32rem 0.14rem;
        .item{
            margin-top: 0.3rem;
            display: inline-block;
            padding: 0 0.4rem;
            height: 0.8rem;
            line-height: 0.8rem;
            background-color: #bfbfbf;
            border-radius: 3px;
            opacity: 0.5;
            margin-right: 0.3rem;
            .img{
                height: 0.2rem;
                margin-top: 0.28rem;
                margin-left: 0.1rem;
            }
        }
        li{
            padding: 0.44rem 0.33rem;
            margin-bottom: 0.24rem;
            background: #fff;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            img {
                float: left;
                width: 1.21rem;
                height: 1.21rem;
                margin-right: 0.26rem;
            }
            .item-content {
                float: left;
                width: 4.7rem;
                .item-label {
                    color: #5b5b69;
                    font-size: 0.24rem;
                    line-height: 0.34rem;
                }
                .item-text{
                    width: 4.7rem;
                    font-size: 0.28rem;
                    color: #333333;
                    line-height: 0.36rem;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
            }

        }
    }
}
</style>