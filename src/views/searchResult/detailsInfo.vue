<!--
* 文件名：details-info
* 作者：李耀
* 描述：商品详情np
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
                <i :class="index==1 ? 'iconfont icon-collection' : 'iconfont icon-coll'" @click="iconclick"></i>
                <i class="iconfont icon-share" @click="pageshare"></i>
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
               <div class="yuan-left"></div>
              <div class="yuan-right"></div>
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
                    <div class="button" @click="sblc">点击查看</div>
                  </td>
             </tr>
              <tr >
                <td class="left-font-end" >商标状态</td>
                <td class="right-font">
                      <table>
                          <tr>
                          <td>
                                  <img src="../../assets/images/17.png" class="t-img">
                          </td>
                          <td class="span">
                               <span class="dds">初审公告初审公告商标状态</span>
                          </td>
                       </tr>
                      </table>
                 </td>
             </tr>
            </table>

        </div>

      </div>

       <div class="print">
             <span class="delete" @click="addqz">
              <p class="p">添加我的取证</p>
             </span>
            <span class="edit" @click="print">
            <i class="iconfont icon-print1"></i>
            打印</span>


     </div>
  </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
  name: "home-detailsinfo",
  data() {
    return {
        title:'耐克',
        index:0,
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
          this.$router.goBack()
      },
      pageshare(){
          Toast({
              message: '原生app对接-调用原生分享功能',
          });
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
      sblc(){
          this.$router.push('/brandProcess')
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
        height: calc(100% - 2.3rem);
        overflow-y: auto;
        .content-top{
            height: 2.2rem;
            border-bottom: 0.02rem solid #ebebeb;
            background-color: #ffffff;
            border-radius: 0.1rem;
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
            .yuan-left{
                position: absolute;
                margin-top: 27.7%;
                left:3.6%;
                width: 0.2rem;
                height: 0.3rem;
                border-left: none;
                display: flex;
                background-color: #f5f5f5;
                border-radius:0 0.5rem 0.5rem 0; /* 左上、右上、右下、左下 */
                box-shadow: inset -0.05rem -0.01rem 0.05rem #e8e8e8;
            }
            .yuan-right{
                position: absolute;
                margin-top: 27.7%;
                right:3.6%;
                width: 0.2rem;
                height: 0.3rem;
                display: flex;
                border-left: none;
                background-color: #f5f5f5;
                border-radius:0.5rem 0 0 0.5rem; /* 左上、右上、右下、左下 */
                box-shadow: inset 0.05rem 0.01rem 0.05rem #e8e8e8;
            }
        }
        .content-middle{
            height: calc(100% - 2.2rem - 0.5rem);
            overflow-y: auto;
            font-size: 0.24rem;
            padding-top: 0.2rem;
            padding-bottom: 0.2rem;
            background-color: #ffffff;
            border-radius: 0.1rem;
            .left-font{
                width:42%;
                text-align: right;
                padding-right: 0.4rem;
                line-height: 0.54rem;
            }
            .left-font-end{
                width:42%;
                text-align: right;
                vertical-align: middle;
                padding-right: 0.4rem;
            }
            .right-font{
                width: 50%;
                line-height: 0.54rem;
                padding-right: 0.2rem;
                .span{
                    vertical-align: middle;
                }
                .dds{
                    width: 2.2rem;
                    padding-left: 0.2rem;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    display: inline-block;
                }
                .t-img{
                    height:1rem;
                }
            }
            .button{
                cursor: pointer;
                width: 1.3rem;
                height: 0.42rem;
                border-radius: 0.04rem;
                border: solid 0.02rem #2095f2;
                line-height: 0.45rem;
                text-align: center;
                color:#2095f2;
            }

        }

    }
    .print{
        margin-top: 0.2rem;
        text-align: center;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        color: black;
        background-color: #ffffff;
        .delete{
            display: inline-block;
            width: 50%;
            text-align: center;
            line-height: 1rem;
            .p{
                width: 100%;
                display: inline-block;
                height: 0.32rem;
                line-height: 0.32rem;
                color: #2095f2;
                border-right: 0.02rem solid #bfbfbf;
            }
        }
        .edit{
            display: inline-block;
            width: 50%;
            text-align: center;
            line-height: 1rem;
            color: #2095f2;
            .iconfont{
                vertical-align: middle;
                font-size: 0.74rem;
                color: #2095f2;
            }
        }
    }

}


</style>
