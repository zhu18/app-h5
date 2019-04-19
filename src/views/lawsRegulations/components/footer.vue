<!--
* 文件名：footer
* 作者：李猛
* 描述：法律法规-页脚
* 修改时间：2019-04-15
-->
<template>
    <div class="footer">
        <div class="item " @click="print"><i class="iconfont icon-print1"></i>打印</div>
        <div class="item border" @click="pageshare"><i class="iconfont icon-share"></i>分享</div>
        <div class="item border" @click="iconclick"><i :class="index==1 ? 'iconfont icon-collection' : 'iconfont icon-coll'"></i>收藏</div>
    </div>
</template>
<script>
import {Toast,MessageBox} from 'mint-ui';
      export default {
        name: "lawsRegulationsFooter",
        data() {
            return {index:0};
        },
        created() {},
        mounted() {
        },
        methods: {
            pageshare(){
                MessageBox('提示','原生app对接-调用原生分享功能')
            },
            iconclick(){
                if(this.index==0){
                    this.index=1
                    Toast({
                        message: '收藏成功',
                    });
                }
                else{
                    this.index=0;
                    Toast({
                        message: '取消收藏',
                    });
                }
            },
            //打印按钮方法
            print(){
                MessageBox('提示','原生app对接-调用原生打印功能');
            },
        },
        components: {
        }
    };
</script>
<style lang="scss" scoped>
    .footer{
        display: flex;
        height: .97rem;
        width: 100%;
        bottom:0;
        font-size: .32rem;
        color:#5b5b69;
        border-top:1px solid rgba(4, 0, 0, 0.1);
        box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);
        align-items: center;
        position:fixed;
        z-index: 1000;
        background: #fff;
       .item{
           flex:1 0 auto;
           text-align: center;
           cursor:pointer;
           height:.97rem;
           line-height:.97rem;
           i{
               font-size: .6rem;
               vertical-align:middle;
           }
       }
       .border{
           position: relative;
           &::before{
               content: '';
               position: absolute;
               top: .33rem;
               left: 0;
               display:block;
               height: .32rem;
               background:#bfbfbf;
               width: 0.02rem;
           }
       }
       
    }
</style>
