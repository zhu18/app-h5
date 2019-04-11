<template>
<div>
  <ul class="collet-box clearfix">
    <li class="item" v-for="item in 20">
      <img src="../../assets/images/brand.png" alt="" >
      <h2>耐克创新有限合伙公司</h2>
      <p>申请/注册号:12749588</p>
      <p>申请日:2007-04-17</p>
      <span class="icon-box" v-show="collectEdit" @click="select(item)" :ref="'span-'+item">
         <i class="mint-toast-icon mintui mintui-field-success"></i> 
      </span>
    </li>
  </ul>
  <mt-popup
    v-model="popupV"
    position="bottom" 
    class="pop-bottom"
    :modal='false'
  >
    <p>
       <span class="icon-box"  @click="selectAll" ref='select-all'>
         <i class="mint-toast-icon mintui mintui-field-success"></i> 
      </span>
      全选
      </p>
    <p>删除</p>
    <i class="line"></i>
  </mt-popup>
</div>
  
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default{
  data(){
    return{
      popupV:false
    }
  },
  beforeRouteLeave (to, from, next) {
    // ...
   this.changeCollectEdit('leaveCollect')
   next()
  },
  watch:{
    collectEdit:{
    handler:function(newV,oldV){
      this.popupV=newV
    },
    immediate:true
    },
  },
  methods:{
    ...mapMutations(['changeCollectEdit']),
    select(item){
       this.$refs['span-'+item][0].classList.toggle('is-select')
       let domArr=document.querySelectorAll('.item .icon-box')
        for(let i=0;i<domArr.length;i++){
          if(!domArr[i].classList.contains('is-select')){
             this.$refs['select-all'].classList.remove('is-select')
             break
          }else{
            this.$refs['select-all'].classList.add('is-select')
          }
        }
    },
    selectAll(){
      this.$refs['select-all'].classList.toggle('is-select')
      let domArr=document.querySelectorAll('.item .icon-box')
      if(this.$refs['select-all'].classList.contains('is-select')){
        domArr.forEach(item=>{
        item.classList.add('is-select')
      })
      }else{
         domArr.forEach(item=>{
        item.classList.remove('is-select')
      })
      }
    }
  },
  computed:{
    ...mapState(['collectEdit']),
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
       .icon-box{
        position: absolute;
        box-sizing: border-box;
        right: 0.2rem;
        top:0.2rem;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        border: 0.02rem solid #c5c6c6;
         transition: all .25s;
        i{
          display: none;
        }
       }
       .is-select{
        i{
          transition: all .25s;
          position: relative;
          left:-0.04rem;
          top:-0.04rem;
          font-size: 0.46rem;
          color:#2095f2;
          display: block;
        }
       }
       
     }
  }
  .pop-bottom{
    height: 0.98rem;
    width:100%;
    background: #fff;
    .line{
      position: absolute;
      width: 0.01rem;
      height: 0.32rem;
      background: #bfbfbf;
      top: 50%;
      left: 50%;
     transform: translate(-50%,-50%)
    }
    p{
      display:inline-block;
      width: 50%;
      height: 100%;
      padding-left: 1rem;
      line-height: 0.98rem;
      font-size: 0.28rem;
      box-sizing: border-box;
      &:nth-child(2){
        text-align: right;
        padding-right: 1rem;
      }
       .icon-box{
        position: absolute;
        box-sizing: border-box;
        left: 0.4rem;
        top:0.3rem;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        border: 0.02rem solid #c5c6c6;
         transition: all .25s;
        i{
          display: none;
        }
       }
       .is-select{
        i{
           transition: all .25s;
          position: relative;
          left:-0.04rem;
          top:-0.04rem;
          font-size: 0.46rem;
          color:#2095f2;
          display: block;
        }
       }
    }
  }

</style>
