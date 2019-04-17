<!--
* 文件名：synergyCode
* 作者：李猛
* 描述：法律法规
* 修改时间：2019-04-15
-->
<template>
    <div class="container">
        <MyHeader title="法律法规" isShowOp="true" @edit="edit"></MyHeader>
        <Search />
        <ul>
            <li class="item" v-for="item in list" :key="item.id" @click="select(item.id)">
                <span class="title">{{item.title}}</span>
                <div class="go" v-show="!isEdit"><i class="icon iconfont icon-back" /></div>
                <span class="icon-box" v-show="isEdit" :ref="item.id" :id="item.id">
                    <i class="mint-toast-icon mintui mintui-field-success"></i>
                </span>
            </li>
            <li class="add">
                <i class="icon iconfont icon-add" />
            </li>
        </ul>
        <mt-popup
            v-model="isEdit"
            position="bottom"
            class="pop-bottom"
            :modal="false">
            <p @click="selectAll">
                <span class="icon-box" ref="select-all">
                <i class="mint-toast-icon mintui mintui-field-success"></i>
                </span>
                全选
            </p>
            <p @click="del">删除</p>
            <i class="line"></i>
        </mt-popup>
    </div>
</template>
<script>
    import MyHeader from './components/header.vue'
    import Search from '../../components/search/innerSearch'
      export default {
        name: "lawsRegulations",
        data() {
            return {
                isEdit:false,
                list:[{id:'1',title:'《国家专利保护法》'},{id:'2',title:'《国家专利保护法》'},{id:'3',title:'《国家专利保护法》'}]
            };
        },
        components:{MyHeader,Search},
        created() {},
        mounted() {
        },
        methods: {
            edit(_isEdit){
                this.isEdit = _isEdit;
            },
            select(item) {
                if(!this.isEdit){
                    this.$router.push("/lawsRegulationsDetail");
                    return;
                }
                if (!this.isEdit) {
                    this.$router.push({ name: 'detailsInfo' })
                    return
                }
                this.$refs[item][0].classList.toggle('is-select')
                let domArr = document.querySelectorAll('.item .icon-box')
                for (let i = 0; i < domArr.length; i++) {
                    if (!domArr[i].classList.contains('is-select')) {
                    this.$refs['select-all'].classList.remove('is-select')
                    break
                    } else {
                    this.$refs['select-all'].classList.add('is-select')
                    }
                }
            },
            selectAll() {
                this.$refs['select-all'].classList.toggle('is-select')
                let domArr = document.querySelectorAll('.item .icon-box')
                if (this.$refs['select-all'].classList.contains('is-select')) {
                    domArr.forEach(item => {
                    item.classList.add('is-select')
                    })
                } else {
                    domArr.forEach(item => {
                    item.classList.remove('is-select')
                    })
                }
            },
            del() {
                let domArr = document.querySelectorAll('.item .icon-box')
                let selectArr = []
                let temp = []
                domArr.forEach(item => {
                    if (item.classList.contains('is-select')) {
                    selectArr.push(item.id)
                    }
                })
                for (let i = 0; i < this.list.length; i++) {
                    let item = this.list[i]
                    if (selectArr.indexOf(item.id) == -1) {
                    temp.push(item)
                    }
                }
                this.list = temp
                console.log('temp',temp);
                // 调取接口刷新列表
            }
        }
    };
</script>
<style lang="scss" scoped>
.search{margin:1.3rem 0.32rem 0.4rem 0.32rem}
    .container{
        font-size:.24rem;
        ul{
            margin:0.02px .32rem;
            li{
                height: 1.4rem;
                line-height: 1.4rem;
                font-size: .32rem;
                padding:0 .32rem;
                margin-bottom:.24rem;
                box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);
                border-radius:.1rem;
                position: relative;
                color:#272b36;
                background: #fff;
                .go{
                    width:.56rem;
                    height: .56rem;
                    line-height: .56rem;
                    position:absolute;
                    right: .32rem;
                    top:.42rem;
                    border-radius: 50%;
                    border:1px solid #f3f3f3;
                    i{  
                        color: #dfdfdf;
                        font-size:0.54rem;
                        display: block;
                        transform:rotate(180deg);
                    }
                }
                &.add{
                    display: flex;
                    align-items: center;
                    i{
                        color:#bfbfbf;
                        font-size: .54rem;
                        margin:0 auto;
                    }
                }
                .icon-box {
                    position: absolute;
                    box-sizing: border-box;
                    right: 0.2rem;
                    top: 0.2rem;
                    width: 0.4rem;
                    height: 0.4rem;
                    border-radius: 50%;
                    border: 0.02rem solid #c5c6c6;
                    i {
                        display: none;
                    }
                    }
                    .is-select {
                    border: none;
                    i {
                        transition: all 0.25s;
                        position: relative;
                        left: -0.04rem;
                        top: -0.04rem;
                        font-size: 0.46rem;
                        color: #2095f2;
                        display: block;
                    }
                }
            }
        }
        .pop-bottom {
            height: 0.98rem;
            width: 100%;
            background: #fff;
            .line {
                position: absolute;
                width: 0.01rem;
                height: 0.32rem;
                background: #bfbfbf;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            p {
                display: inline-block;
                width: 50%;
                height: 100%;
                padding-left: 1.25rem;
                line-height: 0.98rem;
                font-size: 0.28rem;
                box-sizing: border-box;
                &:nth-child(2) {
                text-align: right;
                padding-right: 1.5rem;
            }
            .icon-box {
                position: absolute;
                box-sizing: border-box;
                left: 0.4rem;
                top: 0.3rem;
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 50%;
                border: 0.02rem solid #c5c6c6;
                i {
                    display: none;
                }
                }
                .is-select {
                    border: none;
                    i {
                        transition: all 0.25s;
                        position: relative;
                        left: -0.04rem;
                        top: -0.04rem;
                        font-size: 0.46rem;
                        color: #2095f2;
                        display: block;
                    }
                }
            }
        }
    }
</style>
