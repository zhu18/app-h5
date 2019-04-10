<template lang="html">
  <div class="top-search">
    <div class="search">
        <form action="javascript:;" id="searchFrom" @submit="searchList">
            <input type="search" value="" placeholder="" />
        </form>
        <button>搜索</button>     
    </div>
  </div>
</template>

<script>
// import { Header } from 'mint-ui';
export default {
     methods: {
      searchList(){
         this.$router.push('/searchresult')
      },
     }
}
</script>

<style lang="scss" scoped>
    .top-search{
        height: 0.64rem;
        padding: 0 0.3rem;
        width: 100%;
        box-sizing: border-box;
        .search{
            height: 100%;
            background: url(../../assets/images/component/searchicon.png) no-repeat .20rem center;
            background-size: 0.32rem 0.32rem;
            background-color: rgba(255,255,255,.4);
            border-radius: 0.05rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            input{
                width: 6rem;
                padding: 0 0.6rem;
                box-sizing: border-box;
                border:none;height: 100%;
                background-color: transparent;
                color: #fff;
                font-size: 0.28rem;
            }
            button{
                text-indent: -9999px;
                height: 0.64rem;
                width:0.64rem;
                background: url(../../assets/images/component/xjicon.png) no-repeat center center;
                background-size: 0.32rem 0.32rem;
                border:none;
                position: relative;
                &::after{
                    content:'';
                    height: 0.32rem;
                    width: 1px;
                    background-color: #ffffff;
                    position:absolute;
                    left:-0.1rem;
                    top:50%;
                    margin-top:-0.16rem;
                }

            }
        }
    }


</style>
