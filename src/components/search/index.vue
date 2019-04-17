<template lang="html">
  <div class="top-search">
    <div class="search">
        <form action="javascript:;" id="searchFrom" @submit="searchList">
            <input type="search" value="" placeholder="" v-model="name"/>
        </form>
        <!-- <span class="iconfont icon-date" @click="date()"></span> -->
        <div class="op-box">
            <div class="delbox">
                <span @click="delSearchVal" v-if="name.length" class="iconfont icon-del"></span>
            </div>
            <button @click="smartSearch('txt')">搜索</button> 
        </div>    
    </div>
  </div>
</template>

<script>
// import { Header } from 'mint-ui';
export default {
    data(){
        return{
            name:''
        }
    },
     methods: {
         delSearchVal(){
             this.name=""
         },
      searchList(){
         this.$router.push('/searchresult')
      },
      smartSearch(type){
        this.$router.push({name:'smartsearch',params:{type}})
      }
     }
}
</script>

<style lang="scss" scoped>
    ::-webkit-search-cancel-button { display: none; }
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
            align-items:center;
            form{
                 flex:1;
                 position:relative;
                 
            }
            .op-box{
                width:1.28rem;
                display:flex;
                justify-content: space-between;
                align-items:center;
                height:100%;
            }
            input{
                display: flex;
                align-items: center;
                align-content: center;
                width: 100%;
                padding: 0 0.1rem 0 0.6rem;
                box-sizing: border-box;
                border:none;
                 height: 0.64rem;
                line-height: 0.64rem;
                background-color: transparent;
                color: #fff;
                font-size: 16px;
                padding-top:0.04rem;
                position:relative;

            }
            .delbox{
                width:0.64rem;
                height:0.64rem;
                display:flex;
                justify-content: space-between;
                align-items:center;

            }
            .icon-del{
                display:inline-block;
                font-size: 0.55rem;
                color:#fff;
                border: none;
            }
            button{
                text-indent: -9999px;
                height: 0.64rem;
                width:0.64rem;
                background: url(../../assets/images/component/xjicon.png) no-repeat center center;
                background-size: 0.32rem 0.32rem;
                border:none;
                position: relative;
                float:right;
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
