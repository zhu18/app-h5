<!--
* 文件名：synergyCode
* 作者：李猛
* 描述：法律法规
* 修改时间：2019-04-15
-->
<template>
    <div class="container">
        <MyHeader title="法律法规" isShowOp="true"></MyHeader>
        <Search />
        <ul>
            <li v-for="item in list" @click="go()">
                <span class="title">{{item.title}}</span>
                <div class="go"><i class="icon iconfont icon-back" /></div>
            </li>
            <li class="add">
                <i class="icon iconfont icon-add" />
            </li>
        </ul>
        <Footer></footer>
    </div>
</template>
<script>
    import Footer from './components/footer.vue'
    import MyHeader from './components/header.vue'
    import Search from './components/search.vue'
      export default {
        name: "lawsRegulations",
        data() {
            return {
                list:[{title:'《国家专利保护法》'},{title:'《国家专利保护法》'},{title:'《国家专利保护法》'}]
            };
        },
        components:{Footer,MyHeader,Search},
        created() {},
        mounted() {
        },
        methods: {
            go(){
                this.$router.push("/lawsRegulationsDetail");
            }
        }
    };
</script>
<style lang="scss" scoped>
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
            }
        }
    }
</style>
