<template lang="html">
  <div class="top-search">
          <span class="iconfont icon-back" @click="back()"></span>
    <div class="search">
        <form action="javascript:;" id="searchFrom" @submit="searchList">
            <input type="search" value="" placeholder="" v-model="name"/>
            <span @click="delSearchVal" v-if="name.length" class="iconfont icon-del"></span>
        </form>
    </div>
    <span class="iconfont icon-date" @click="date()"></span>
    <span class="iconfont icon-map" :class="isMap() && 'disabled'" @click="map()"></span>
  </div>
</template>

<script>
import { debug } from 'util';
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
         back(){
             this.$router.goBack()
         },
         date(){
             this.$router.push('/dateSelect')
         },
         map(){
             this.$router.push('/map')
         },
         isMap(){
             console.log(this.$route)
             return this.$route.path=='/map'
         },
         searchList(){

         }
     }
}
</script>

<style lang="scss" scoped>
    ::-webkit-search-cancel-button { display: none; }
    .top-search{
        height: 0.9rem;
        width: 100%;
        padding-right: 0.15rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        align-content: center;
        .disabled{
            opacity: .6;
        }
        .iconfont{
            display: block;
            width:0.72rem;
            color: #fff;
            font-size: 0.72rem;
        }
        .search{
            height: 0.64rem;
            background: url(../../assets/images/component/searchicon.png) no-repeat .20rem center;
            background-size: 0.32rem 0.32rem;
            background-color: rgba(255,255,255,.4);
            border-radius: 0.05rem;
            /*width: 100%;*/
            flex:1;
            display: flex;
            justify-content: space-between;
            align-items:center;
            margin-right:0.2rem;
            form{
                width: 100%;
                display:flex;
                justify-content: space-between;
                align-items:center;
            }
            input{
                width: calc(100% - 0.64rem);
                // flex:1;
                display: flex;
                align-items: center;
                align-content: center;
                padding: 0 0.1rem 0 0.6rem;
                box-sizing: border-box;
                border:none;
                height: 0.64rem;
                line-height: 0.64rem;
                background-color: transparent;
                color: #fff;
                font-size: 16px;
                padding-top:0.04rem;

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
