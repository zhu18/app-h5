<!--
* 文件名：details-info
* 作者：李耀
* 描述：商品详情
* 修改时间：2019-04-12
-->
<template lang="html">
  <div class="home-detailsinfo">
      <div class="top-header">
          <mt-header fixed :title="title">
            <div slot="left" >
                <mt-button icon="back" @click='goBack'></mt-button>
            </div>
            <div slot="right" >
                <i class="iconfont icon-collection1"></i>
                <i class="iconfont icon-share"></i>
             </div>
         </mt-header>
      </div>
      <div class="content-all">
        <div class="content-top">
              <div class="left-content">
                 <img src="../../assets/images/neike.png" class="img">
               </div>
              <div class="right-content">
                  <div class="p1">商品/服务</div>
                  <div class="p2">
                    计算机; 内部通讯装置; 导航仪器; 遥控装置; 眼镜(光学)
                  </div>
                  <div class="p1">国际分类  <span class="p3">9</span></div>

              </div>
        </div>
             <div class="yuan-left">
         </div>
          <div class="yuan-right">
         </div>
        <div class="content-middle">
           <table>
              <tr>
                <td class="left-font" >申请/注册号</td>
                <td class="right-font">{{obj.name1}}</td>
             </tr>
             <tr>
                <td class="left-font" >申请日期</td>
                <td class="right-font">{{obj.name2}}</td>
             </tr>
             <tr>
                <td class="left-font" >申请人名称（中文）</td>
                <td class="right-font">{{obj.name3}}</td>
             </tr>
             <tr>
                <td class="left-font" >申请人名称（英文）</td>
                <td class="right-font">{{obj.name4}}</td>
             </tr>
             <tr>
                <td class="left-font" >申请人地址（中文）</td>
                <td class="right-font">{{obj.name5}}</td>
             </tr>
             <tr>
                <td class="left-font" >申请人地址（英文）</td>
                <td class="right-font">{{obj.name6}}</td>
             </tr>
              <tr>
                <td class="left-font" >商标类型</td>
                <td class="right-font">{{obj.name7}}</td>
             </tr>
             <tr>
                <td class="left-font" >代理/办理机构</td>
                <td class="right-font">{{obj.name8}}</td>
             </tr>
             <tr>
                <td class="left-font" >商标流程</td>
                <td class="right-font">
                    <div class="button" @click="viewClick">点击查看</div>
                  </td>
             </tr>
              <tr>
                <td class="left-font" >商标状态</td>
                <td class="right-font">
                    <img src="../../assets/images/17.png" class="t-img">
                  </td>
             </tr>
            </table>

        </div>
       <div class="print">
             <span class="delete" @click="addqz">添加我的取证</span>
            <span class="edit" @click="print"><img src="../../assets/images/print.png" class="p-img">打印</span>
                <span class="splitline"></span>

     </div>
      </div>


  </div>
</template>
<script>
export default {
  name: "home-detailsinfo",
  data() {
    return {
        title:'耐克',
        obj:{
            name1:'12749588',
            name2:'2013-06-14',
            name3:'耐克创新有限合伙公司',
            name4:'NIKE INNOVATE C.V',
            name5:'美国俄勒冈州比弗敦鲍尔曼道1号，邮编97005-6453',
            name6:'ONE BOWERMAN DRIVE，BEAVERTON，OREGON 97005-6453，U.S.A',
            name7:'一般',
            name8:'北京正见永申知识产权代理有限公司',
        }
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
      goBack(){
          this.$router.go(-1)
      },
      //打印按钮方法
      print(){

      },
      //添加我的取证按钮方法
      addqz(){

      },
      //点击查看按钮方法
      viewClick(){

      }
  },
  components:{
  }
};
</script>
<style lang="scss">
.home-detailsinfo {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    overflow: hidden;

    top:0;
    font-size: 0.24rem;
    .top-header{
        height: 0.9rem;
        .mint-header{
            height: 0.9rem;
            line-height: 0.9rem;
            background: #2095f2;
        }
        .iconfont {
            line-height: 1rem;
            font-size:0.66rem;
        }
    }
    .content-all{
        width: 92%;
        margin: 0px auto;
        margin-top: 0.2rem;
        border: 0.01rem solid #ebebeb;
        background-color: #f6f6f6;
        height: calc(100% - 1.2rem);
        overflow-y: auto;
        .content-top{
            height: 2.2rem;
            border-bottom: 0.02rem solid #ebebeb;
            background-color: #ffffff;
            .left-content{
                margin-top: 0.2rem;
                width: 36%;
                margin-left: 0.3rem;
                float: left;
                .img{
                    height: 1.8rem;
                }
            }
            .right-content{
                margin-top: 0.2rem;
                float: left;
                width: 55%;
                .p1{
                    color: #b2b2b9;
                }
                .p2{
                    margin-bottom: 0.15rem;
                    margin-top: 0.15rem;
                    line-height: 0.4rem;
                    color: #1e2128;
                }
                .p3{
                    color: #1e2128;
                    font-size: 0.36rem;
                    padding-left: 0.2rem;
                }
            }
        }
        .content-middle{
            height: calc(100% - 2.2rem - 1rem - 1.7rem);
            overflow-y: auto;
            font-size: 0.24rem;
            padding-top: 0.2rem;
            padding-bottom: 0.2rem;
            background-color: #ffffff;
            .left-font{
                width:42%;
                text-align: right;
                padding-right: 0.4rem;
                line-height: 0.54rem;
            }
            .right-font{
                width: 50%;
                line-height: 0.54rem;
                padding-right: 0.2rem
            }
            .button{
                cursor: pointer;
                width: 1.3rem;
                height: 0.54rem;
                border-radius: 0.04rem;
                border: solid 0.01rem #2095f2;
                line-height: 0.54rem;
                text-align: center;
                color:#2095f2;
            }
            .t-img{
                height:1rem;
                margin-top: 0.1rem
            }
        }
        .print{
            margin-top: 0.2rem;
            text-align: center;
            width: 100%;
            height: 1rem;
            line-height: 1rem;
            background-color: #ffffff;
            .delete{
                display: inline-block;
                width: 50%;
                text-align: center;
                line-height: 1rem;
            }
            .edit{
                display: inline-block;
                width: 50%;
                text-align: center;
                line-height: 1rem;
                color: #2095f2;
                .p-img{
                    height: 0.3rem;
                    margin-top: 0.3rem;
                    margin-right: 0.2rem
                }
            }
            .splitline{
                position: absolute;
                top: 85.5%;
                left:52%;
                display: inline-block;
                height: 0.3rem;
                width: 0.02rem;
                background-color:#bfbfbf;
            }

        }
    }


}
.yuan-left{
    position: absolute;
    top: 23.5%;
    left:3.6%;
    width: 0.2rem;
    height: 0.3rem;
    border-left: none;
    background-color: #f5f5f5;
    border-radius:0 0.5rem 0.5rem 0; /* 左上、右上、右下、左下 */
    box-shadow: inset -0.05rem -0.01rem 0.05rem #e8e8e8;
}
.yuan-right{
    position: absolute;
    top: 23.5%;
    right:3.6%;
    width: 0.2rem;
    height: 0.3rem;
    border-left: none;
    background-color: #f5f5f5;
    border-radius:0.5rem 0 0 0.5rem; /* 左上、右上、右下、左下 */
    box-shadow: inset 0.05rem 0.01rem 0.05rem #e8e8e8;
}

</style>
