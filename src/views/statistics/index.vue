<!--
* 文件名：details-info
* 作者：李耀
* 描述：商品详情np
* 修改时间：2019-04-12
-->
<template lang="html">
  <div class="home-statistics">
      <div class="top-header">
          <mt-header fixed :title="title">
            <div slot="left" >
                <mt-button icon="back" @click='goBack'></mt-button>
            </div>
            <div slot="right" >
                <i class="iconfont icon-share" @click="pageshare"></i>
             </div>
         </mt-header>
      </div>
      <div class="content-all">
          <div class="top">
              <div class="top-left">
                  <select class="select" >
                    <option value ="2016">2016年</option>
                    <option value ="2017">2017年</option>
                    <option value ="2018">2018年</option>
                    <option value ="2019" selected = "selected" >2019年</option>
                    </select>
              </div>
              <div class="top-right">
                  {{titleRight}}
                  <span> {{count}} </span>件
              </div>
          </div>
          <div class="middle">
              <div class="echart-div">
                          <zhu :echartsData="echartData"  ></zhu>
             </div>

          </div>
          <div class="button">
              <div class="title-name">
                    {{titleButton}}
                   <span> {{count}} </span>件
              </div>
              <div class="bl-value">
                  <div class="button-left">
                      <div class="divTop">+{{oldmonth}}%</div>
                      <div class="divBotton">较去年同期</div>
                  </div>

                 <div class="button-center"><span>|</span></div>
                  <div class="button-right">
                      <div class="divTop">+{{nowmonth}}%</div>
                      <div class="divBotton">较上月</div>
                  </div>
              </div>
          </div>
           <div class="yuan-left"></div>
           <div class="yuan-right"></div>
      </div>

       <div class="print">
           <div :class="bindex==1?'contents contented':'contents'">
           <div class="item-left">
              <span :class="bindex==1?'span spaned':'span'" @click="tab(1)">省商标申请量</span>
           </div>
           </div>
           <div :class="bindex==2?'contents contented':'contents'">
           <div class="item-right">
                <span :class="bindex==2?'span spaned':'span'" @click="tab(2)">执法量</span>
           </div>
         </div>


     </div>
  </div>
</template>
<script>
import {Toast,MessageBox} from 'mint-ui';
import zhu from './echart/zhu-line';
export default {
  name: "home-statistics",
  data() {
    return {
        title:'统计分析',
        titleRight:'当前注册商标',
        count:'16,5461',
        bindex:1,
        oldmonth:'25',
        nowmonth:'10',
        titleButton:'河北省2019年4月注册商标',
        echartData:{
            data1: [],
            data2: [],
            data3: [],
        }
    };
  },
  created() {
  },
  mounted() {
        this.echartData={
            data1: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月'],
            data2: [60, 32, 50, 34, 90, 80,60, 32, 50, 34, 90, 80] ,
            data3: [30, 42, 70, 34],
        }
  },
  methods: {
      goBack(){
          this.$router.goBack()
      },
      pageshare(){
          MessageBox('提示','原生app对接-调用原生分享功能');
      },
      tab(index){
         this.bindex=index;
         if(index==1){
             this.echartData={
                 data1: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月'],
                 data2: [60, 32, 50, 34, 90, 80,60, 32, 50, 34, 90, 80] ,
                 data3: [30, 42, 70, 34],
             }
             this.titleRight="4月注册商标";
             this.titleButton="河北省2019年4月注册商标";
         }
         else{
             this.echartData={
                 data1: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月'],
                 data2: [30, 32, 60, 44, 60, 90,30, 42, 45, 34, 60, 80] ,
                 data3: [20, 60, 30, 70],
             }
             this.titleRight="4月案件";
             this.titleButton="河北省2019年4月执法";
         }
      },
  },
  components:{
      zhu,
  }
};
</script>
<style lang="scss">
.home-statistics {
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
        background-color: #ffffff;
        height: calc(100% - 2.5rem);
        overflow-y: hidden;
        display: flex;
        border-radius: 0.1rem;
        flex-direction: column;
        .top{
            height: 16%;
            width: 100%;
            color: black;
            display: flex;
            flex-direction: row;
            overflow: hidden;
            align-items: center;
            padding-left: 0.2rem;
            box-sizing: border-box;
            .top-left{
                width: 45%;
            }
            .top-right{
                flex: 1;
                font-family: PingFangSC-Regular;
                font-size: 0.28rem;
                color: #5b5b69;
                span{
                    font-family: PingFangSC-Medium;
                    font-size: 0.32rem;
                    color: #2095f2;
                    display: inline-block;
                    padding-right: 0.05rem;
                    max-width: 1.2rem;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
            }
            .select{
                width: 80px;
                border: none;
                outline: none;
                padding-bottom: 0.04rem;
                line-height: 0.3rem;
                border-bottom: 0.03rem solid #2095f2;
                background: transparent;
                border-radius: 0px;
                color: #2095f2;
                font-size: 0.3rem;
                 -webkit-appearance:none;
                 background: url("../../assets/images/yeardrop.png") no-repeat scroll right center transparent;
                 background-size: 8%;
                 font-weight: 800;
            }
        }
        .middle{
            height:55%;
            width: 100%;
            overflow-x: scroll;
            .echart-div{
                height: 100%;
                width: 200%
            }
        }
        .button{
            height:34%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            padding-top: 0.5rem;
            border-top: 0.02rem dashed  #ebebeb;
            .title-name{
                padding-top:0.2rem;
                text-align: center;
                font-size: 0.28rem;
                color: #5b5b69;
                span{
                    font-family: PingFangSC-Medium;
                    font-size: 0.36rem;
                    color: #2095f2;
                    display: inline-block;
                    max-width: 1.2rem;
                    padding-right: 0.05rem;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
            }
            .bl-value{
                display: flex;
                flex-direction: row;
                .button-left{
                    width: 49%;
                    display: flex;
                    padding-top:0.5rem;
                    flex-direction: column;
                    .divTop{
                        padding-top: 0.1rem;
                        width: 100%;;
                        text-align: center;
                        font-size: 0.36rem;
                        color: #2095f2;
                        font-family: PingFangSC-Medium;
                    }
                    .divBotton{
                        padding-top: 0.1rem;
                        width: 100%;;
                        text-align: center;
                       	font-size: 0.24rem;
                        color: #5b5b69;
                        opacity: 0.5;
                    }
                }
                .button-center{
                    display: flex;
                    align-items: center;
                    span{
                        opacity: 0.3;
                    }
                }
                .button-right{
                    flex: 1;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    padding-top:0.5rem;
                    .divTop{
                        font-family: PingFangSC-Medium;
                        padding-top: 0.1rem;
                        width: 100%;;
                        text-align: center;
                        font-size: 0.36rem;
                        color: #fea71a;
                    }
                    .divBotton{
                        padding-top: 0.1rem;
                        width: 100%;;
                        text-align: center;
                       	font-size: 0.24rem;
                        color: #5b5b69;
                        opacity: 0.5;
                    }
                }
            }
        }
        .yuan-left{
            position: absolute;
            top: 61%;
            left:2.6%;
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
            top: 61%;
            right:2.6%;
            width: 0.2rem;
            height: 0.3rem;
            display: flex;
            border-left: none;
            background-color: #f5f5f5;
            border-radius:0.5rem 0 0 0.5rem; /* 左上、右上、右下、左下 */
            box-shadow: inset 0.05rem 0.01rem 0.05rem #e8e8e8;
        }
    }
    .print{
        margin-top: 0.2rem;
        width: 100%;
        height: 1.2rem;
        color: #878791;
        background-color: #ffffff;
        display: flex;
        flex-direction: row;
        align-items: center;
        .contents{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-top: 0.04rem solid transparent;
            .item-left{
                width: 100%;
                border-right: 0.02rem solid #bfbfbf;
            }
            .span{
                display: inline-block;
                width: 100%;
                text-align: center;
            }
            .item-right{
                width: 100%;
            }
            .spaned{
                color: #2095f2;
            }
        }
        .contented{
            border-top: 0.04rem solid #2095f2;
        }
    }

}


</style>
