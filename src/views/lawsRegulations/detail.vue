<!--
* 文件名：synergyCode
* 作者：李猛
* 描述：法律法规
* 修改时间：2019-04-15
-->
<template>
    <div>
        <MyHeader title="《国家专利保护法》详情" :isShowOp="false"></MyHeader>
        <div class="container">
            <div class="title">《国家专利保护法》 详情介绍</div>
            <div class="content">
                <p>全国人民代表大会常务委员会关于修改〈中华人民共和国专利法〉的决定》已由中华人民共和国第十一届全国人民代表大会常务委员会第六次会议于2008年12月27日通过，现予公布，自2009年10月1日起施行。</p>
                 <BR/><BR/>                               
                <p>中华人民共和国主席 胡锦涛<BR/>
                2008年12月27日</p>
                <BR/><BR/>                               
                <p>中华人民共和国专利法</p>
                <BR/><BR/>                               
                <p>（1984年3月12日第六届全国人民代表大会常务委员会第四次会议通过 根据1992年9月4日第七届全国人民代表大会常务委员会第二十七次会议《关于修改〈中华人民共和国专利法〉的决定》第一次修正 根据2000年8月25日第九届全国人民代表大会常务委员会第十七次会议《关于修改〈中华人民共和国专利法〉的决定》第二次修正）。</p>
            </div>
        </div>
        <Footer></footer>
    </div>
</template>
<script>
    import Footer from './components/footer.vue'
    import MyHeader from './components/header.vue'
      export default {
        name: "lawsRegulations",
        data() {
            return {};
        },
        components:{Footer,MyHeader},
        created() {},
        mounted() {
        },
        methods: {

        }
    };
</script>
<style lang="scss" scoped>
    .container{
        margin:1.3rem .32rem .4rem .32rem;
        padding:.24rem;
        font-size: .32rem;
        box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);
        border-radius:.1rem;
        z-index: 100;
        background: #fff;
        .title{
            height: 1.12rem;
            line-height: 1.12rem;
            border-bottom: 1px solid #ececec;
            color:#1e2128;
        }
        .content{
            font-size: .28rem;
            color:#333333;
            p{
                line-height: .4rem;
            }
        }
    }
</style>
