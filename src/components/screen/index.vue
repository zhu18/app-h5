<!--
* 文件名：screen
* 作者：王帅
* 描述：筛选
* 修改时间：2019-04-13
* params：props=>callback 接收的外界函数  对外传送选择参数，和确定事件
-->
<template lang="html">
  <div class="screen">
        <div class="item">
                 <div class="title">默认排序</div>
                <div class="list">
                    <a href="javasctipt:;" :class="{active:subcurrent==0}"  data-content="+" @click="setCurrent(0,0)">相似程度</a>
                    <a href="javasctipt:;" :class="{active:subcurrent==1}" data-content="+" @click="setCurrent(0,1)">注册号</a>
                    <a href="javasctipt:;" :class="{active:subcurrent==2}" data-content="+" @click="setCurrent(0,2)">代理公司</a>
                </div>
            </div>
            <div class="item">
                <div class="title">申请日</div>
                <div class="list">
                    <a href="javasctipt:;" :class="{active:subcurrent1==0}" data-content="+" @click="setCurrent(1,0)">正序</a>
                    <a href="javasctipt:;" :class="{active:subcurrent1==1}" data-content="+" @click="setCurrent(1,1)">倒序</a>
                </div>
            </div>
            <div class="item">
                <div class="title">申请人首字母</div>
                <div class="list">
                    <a href="javasctipt:;" :class="{active:subcurrent2==0}" data-content="+" @click="setCurrent(2,0)">A-Z</a>
                    <a href="javasctipt:;" :class="{active:subcurrent2==1}" data-content="+" @click="setCurrent(2,1)">Z-A</a>
                </div>
            </div>
            <div class="btn-box">
                <button class="btn-resize" @click="reszieFn">重置</button>
                <button class="btn-ok" @click="ok">确定</button>
            </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            subcurrent:0,
            subcurrent1:0,
            subcurrent2:0,
        }
    },

     mounted() {
    },
    methods:{
        //   筛选
        setCurrent(i,k){
            if (i==0) {
                this.subcurrent=k
            }else if(i==1){
                this.subcurrent1=k
            }else if(i==2){
                this.subcurrent2=k
            }

        },
        //重置
        reszieFn(){
            this.subcurrent=-1
            this.subcurrent1=-1
            this.subcurrent2=-1
        },
        // 确定
        ok(){
            this.$emit('callback',[this.subcurrent,this.subcurrent1,this.subcurrent2])
            this.reszieFn();
        }
    },
   computed:{
   }

}
</script>

<style lang="scss" scoped>
    .screen{
        width:100%;
        height: 100%;
        padding: 0.64rem 0.32rem;
        box-sizing: border-box;
        position: relative;
        .item{
            margin-bottom:0.32rem;
        }
        .title{
            font-size: 0.28rem;
            color: #5b5b69;
            height: 0.64rem;
            left: 0.64rem;
        }
        .list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            a{
                display: inline-block;
                width: 45%;
                background-color: #f2f2f2;
                border-radius: 0.1rem;
                height: 0.8rem;
                line-height:  0.8rem;
                text-align: center;
                margin-bottom:0.3rem;
                color: #333333;
                position: relative;
                overflow: hidden;
                &.active{
                    background: #d2eafc;
                    color: #46a2f3;
                }
                &.active::before{
                    position: absolute;
                    content: attr(data-content);
                    width: 0.3rem;
                    height: 0.3rem;
                    color:#fff;
                    font-size: 0.3rem;
                    transform: rotate(45deg);
                    right: -0.2rem;
                    bottom: 0.2rem;
                    z-index: 10;
                }
                &.active:after{
                    position: absolute;
                    content:'';
                    width: 0.6rem;
                    height: 0.6rem;
                    background: #2095f2;
                    right: -0.3rem;
                    bottom:-0.3rem;
                    transform: rotate(45deg)
                }
            }
        }
        .btn-box{
            position: absolute;
            bottom:0;
            height: 1.2rem;
            display: flex;
            justify-content: space-between;
            right: 0.32rem;
            left: 0.32rem;
            button{
                display: inline-block;
                width: 45%;
                color:#fff;
                background-color: #2095f2;
                border-radius: 0.1rem;
                height: 0.8rem;
                line-height:  0.8rem;
                text-align: center;
                border:none;
                font-size: 0.32rem;
                &.btn-resize{
                    background-color: #fea71a;
                }
            }
        }
    }


</style>
