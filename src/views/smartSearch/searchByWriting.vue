<!--
* 文件名：searchBywriting
* 作者：李耀
* 描述：相似商标-文字查询
* 修改时间：2019-04-12
-->
<template lang="html">
  <div class="home-searchBywriting" @click.stop="">
      
          <Search @submit="searchList"/>
        <!-- <form action="javascript:;" id="searchFrom" @submit="searchList">
            <input type="search" value="" placeholder="请输入关键字查询" />
        </form> -->
      
        <div class="content-item">
          <span class="item" v-for="(item, index) in dataList" @click="searchList">
              <span class="span">{{item}}</span>
              <img src="../../assets/images/close.png" @click="closeitem(index)" class="img">
          </span>
        </div>
  </div>
</template>
<script>
    import Search from '../../components/search/innerSearch'

export default {
  name: "home-searchBywriting",
  data() {
    return {
        index:1,
        dataList:["阿迪达斯阿迪达斯阿迪达斯阿迪达斯阿迪达斯阿迪达斯","NIKE","汉方","同仁堂","草本","Samsung","Apple"]
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
      //查询按钮
      searchList(txt){
          console.log(txt)
          this.$router.push('/searchresult')
      },
      serchR(){

      },
      //关闭方法
      closeitem(item){
       this.dataList.splice(item, 1 );
      },
  },
  components:{
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
    overflow-y: auto;
    top: 0;
    font-size: 0.24rem;
    .search{
        margin:.3rem .3rem 0;
    }
    .content-item{
        padding: 0 0.32rem 0.14rem;
        .item{
            margin-top: 0.3rem;
            display: inline-block;
            padding: 0 0.4rem;
            height: 0.8rem;
            line-height: 0.8rem;
            background-color: #bfbfbf;
            border-radius: 0.03rem;
            opacity: 0.8;
            margin-right: 0.3rem;
            color: #333333;
            font-size: 0.24rem;
            max-width: 90%;
            .span{
                text-overflow: ellipsis;

                overflow: hidden;

                text-overflow: ellipsis;
                display: inline-block;
                white-space: nowrap;
                max-width: 92%;
            }
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
            border-radius: 0.05rem;
            box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.1);
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