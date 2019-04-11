<template>
<div>
  <ul class="collet-box clearfix">
    <li class="item" v-for="item in 20">
      <img src="../../assets/images/brand.png" alt="" >
      <h2>耐克创新有限合伙公司</h2>
      <p>申请/注册号:12749588</p>
      <p>申请日:2007-04-17</p>
      <!-- <i class="mint-toast-icon mintui mintui-field-success"></i>  -->
      <i class="iconfont icon-ok"></i>
    </li>
  </ul>
  <mt-popup
    v-model="collectEdit"
    position="bottom" 
    class="pop-bottom"
    :modal='false'
  >
    <span class=''>全选</span>
    <span>删除</span>
  </mt-popup>
</div>
  
</template>
<script>
import {mapState} from 'vuex'
export default{
  data(){
    return{
    }
  },
  computed:{
    ...mapState(['collectEdit'])
  }
}
</script>
<style lang="scss" scoped>
  .collet-box{
     padding: 0.32rem;
     height: calc(100vh - 0.9rem);
     background: #f6f6f6;
      box-sizing: border-box;
     overflow-y: scroll;
     .item{
       position: relative;
       float: left;
       width: 3.30rem;
       height:3.84rem;
       background: #ffffff;
       border-radius: 0.06rem;
       padding: 0.32rem 0.25rem;
       box-sizing: border-box;
       box-shadow: 0px 4px 10px 1px rgba(0 ,0, 0,.1);
       margin-bottom: 0.25rem;
       &:nth-child(2n-1){
         margin-right: 0.25rem;
       }
       img{
         width: 1.8rem;
         height: 1.8rem;
         display: block;
         margin:0 auto 0.2rem;
       }
       h2{
         font-size: 0.28rem;
         font-weight: 400;
         line-height: 2;
         overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
       }
       p{
         font-size: 0.24rem;
         color:#5b5b69;
         line-height: 1.5;
         overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
        
       }
       i.mintui-field-success{
         position: absolute;
         right: 0.2rem;
         top:0.2rem;
         color: #2095f2;
       }
     }
  }
  .pop-bottom{
    height: 0.98rem;
    width:100%;
    background: #fff;
    span{
      display:inline-block;
      width: 50%;
      height: 100%;
      line-height: 0.98rem;
      text-align: center;
      font-size: 0.28rem;
    }
  }

</style>
