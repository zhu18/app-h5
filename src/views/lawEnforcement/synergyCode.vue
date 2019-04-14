<!--
* 文件名：synergyCode
* 作者：李猛
* 描述：执法-协同码
* 修改时间：2019-04-14
-->
<template>
    <div class="container">
        <div class="content">
            <div class="base">
                <div class="l-area">
                    <img src="../../assets/images/lawenforcement/police.png" />
                </div>
                <div class="r-area">
                    <div class="name">{{data.name}}</div>
                    <div><label>时间</label>{{data.time}}</div>
                    <div><label>地点</label>{{data.place}}</div>
                </div>
            </div>
            <div class="qrcode">
                <img src="../../assets/images/lawenforcement/QRCode.png"/>
                <p>扫描二维码加入协同</p>
            </div>
        </div>
    </div>
</template>
<script>
      export default {
        name: "synergy-code",
        data() {
            return {
                data:{
                    name:'肖成光',
                    time:'2019-04-14 08:30:44',
                    place:'北京市 海淀区'
                }
            };
        },
        created() {},
        mounted() {
        },
        methods: {

        },
        components: {
        }
    };
</script>
<style lang="scss" scoped>
    .container{
        font-size:.24rem;
        .content{
            border-radius:.1rem;
            box-shadow:0 1px 10px 3px rgba(4, 0, 0, 0.1);
            margin:1.8rem .32rem;
            padding:.37rem .32rem .65rem .32rem;
            .base{
                color:#1e2128;
                .l-area{
                    float:left;
                    height:1.7rem;
                    width:1.7rem;
                    img{
                        height:100%;
                        width:100%;
                    }
                }
                .r-area{
                    float:left;
                    margin-left:.24rem;
                    .name{
                        font-size:.36rem;
                        margin:.25rem 0;
                    }
                    label{
                        color:#5b5b69;
                        margin-right:.22rem;
                    }
                    div{
                        margin-top:.2rem;
                    }
                }
                &::after{
                    content:'';
                    display:block;
                    clear:both;
                }
            }
            .qrcode{
                margin-top:.65rem;
                text-align:center;
                img{
                    width:3.5rem;
                    height:3.5rem;
                }
                p{
                    margin-top:.15rem;
                    color:#5b5b69;
                }
            }
        }
    }
</style>
