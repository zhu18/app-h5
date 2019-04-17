<!--
* 文件名：self
* 作者：李猛
* 描述：我的收藏
* 修改时间：2019-04-14
-->
<template>
    <div class="container">
        <header>
            <mt-header fixed title="我的收藏">
                <div slot="left" >
                    <mt-button icon="back" @click='goBack'></mt-button>
                </div>
                <mt-button slot="right" @click='edit'> {{isEdit?'完成':'编辑'}} </mt-button>
            </mt-header>
        </header>
        <ul>
            <li v-for="item in list" @click="sel(item)">
                <div class="title">{{item.title}}</div>
                <div class="item">
                    <div class="l-area">
                        <img src="../../assets/images/collection/tempSelfCollection.png" />
                    </div>
                    <div class="r-area">
                        <div><label>经办人</label>{{item.name}}</div>
                        <div><label>时间</label>{{item.time}}</div>
                        <div><label>地点</label>{{item.place}}</div>
                    </div>
                </div>
                <span :class="[item.isChecked?'is-select':'','icon-box']"  v-show="isEdit" >
                    <i class="mint-toast-icon mintui mintui-field-success"></i> 
                </span>
            </li>
        </ul>
        <footer :class="[isEdit?'show':'']" @click="del">删除</footer>
    </div>
</template>
<script>
      export default {
        name: "selfCollection",
        data() {
            return {
                isEdit:false,
                list:[
                    {title:'廖某某案件相关执法',name:'肖成光', time:'2019-04-14 08:30:44',place:'北京市 海淀区',img:'',isChecked:false},
                    {title:'金某某案件相关执法',name:'肖成光', time:'2019-04-12 12:30:44',place:'北京市 海淀区',img:'',isChecked:false},
                    {title:'房某某案件相关执法',name:'肖成光', time:'2019-04-11 17:30:44',place:'北京市 海淀区',img:'',isChecked:false},
                    {title:'李某某案件相关执法',name:'肖成光', time:'2019-04-14 11:30:44',place:'北京市 海淀区',img:'',isChecked:false}
                ]
            };
        },
        created() {},
        mounted() {},
        methods: {
            goBack(){
                this.$router.goBack()
            },
            edit(){
                this.isEdit = !this.isEdit;
            },
            sel(item){
                if(!this.isEdit){
                    this.$router.push('enforcementdetails');
                }
                else
                    item.isChecked = !item.isChecked;
            },
            del(){
                let temp =[];
                this.list.forEach((item,index)=>{
                    if(!item.isChecked) temp.push(item);
                });
                this.list = temp;
            }
        },
        components: {
        }
    };
</script>
<style lang="scss" scoped>
    .container{
        font-size:.24rem;
        header{
            height: 0.9rem;
            width:100%;
            position:fixed;
            background-color: #2095f2;
            z-index:1000;
            .mint-header{
                height: 0.9rem;
                background: transparent;
            }
        }
        ul{
            margin:1.3rem .32rem .4rem .32rem;
            li{
                border-radius:.1rem;
                box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);
                margin-bottom:.28rem;
                padding:.35rem .3rem;
                position:relative;
                cursor:pointer;
                background: #fff;
                .title{
                    color:#1e2128;
                    font-size:.32rem;
                    margin-bottom:.3rem;
                }
                .item{
                    color:#5b5b69;
                    .l-area{
                        float:left;
                        height:1rem;
                        width:1.8rem;
                        img{
                            height:100%;
                            width:100%;
                        }
                    }
                    .r-area{
                        float:left;
                        margin-left:.24rem;
                        height:1rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        label{
                            width:1.12rem;
                            display:inline-block;
                        }
                        div{
                            flex:0 1 auto;
                        }
                    }
                    &::after{
                        content:'';
                        display:block;
                        clear:both;
                    }
                }
                .icon-box{
                    position: absolute;
                    box-sizing: border-box;
                    right: 0.24rem;
                    top:0.24rem;
                    width: 0.4rem;
                    height: 0.4rem;
                    border-radius: 50%;
                    border: 0.02rem solid #c5c6c6;
                    background:#d4d5d7;
                    i{
                        display: none;
                    }
                }
                .is-select{
                    border:none;
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
        footer{
            position:fixed;
            bottom:-1rem;
            z-index:1000;
            width:100%;
            height:1rem;
            line-height:1rem;
            text-align:center;
            font-size:.32rem;
            color:#5b5b69;
            background:#fff;
            border-top:1px solid rgba(4, 0, 0, 0.1);
            box-shadow:0 1px 10px 3px rgba(4, 0, 0, 0.1);
            cursor:pointer;
            transition:bottom .3s;
            &.show{
                bottom:0;
            }
        }
    }
</style>
