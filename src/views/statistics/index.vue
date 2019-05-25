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
                <input type="text" v-model="selectYear"  readonly="readonly" class="input-text" @click="showdate"/>
                <!-- 日期选择 -->
<!--                <mt-datetime-picker
                    ref="picker1"
                    type="date"
                    year-format="{value} 年"
                    month-format="{value} 月"
                    date-format="{value} 日"
                    v-model="pickerValue"
                    @confirm="handleConfirm">
                </mt-datetime-picker>-->
                  <mt-popup v-model="popupVisible" style="width: 100%" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
                           <mt-picker :slots="slots" @change="onValuesChange" style="width:100%" showToolbar>
                                       <div class="picker-toolbar-title">
                        <div class="usi-btn-cancel" @click="popupVisible = !popupVisible">取消</div>

                        <div class="usi-btn-sure" @click="saveselected">确定</div>
                    </div>

                              </mt-picker>
           </mt-popup>

              </div>
              <div class="top-right">
                  {{titleRight}}
                  <span> {{count1}} </span>件
              </div>

          </div>
          <div class="middle">
             <zhu :echartsData="echartData"  @echartclick="echartclick"></zhu>
          </div>

          <div class="button">
              <div class="title-name">
                    {{selectYear.replace(/\s+/g,"")}}{{yufen}}{{titleButton}}
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
                      <div class="divBotton">较今年本月商标注册量</div>
                  </div>
              </div>
          </div>
         <span class="yuan-left"></span>
         <span class="yuan-right"></span>
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
        pickerValue: '',
        popupVisible:false,
        title:'统计分析',
        titleRight:'至今注册商标',
        count:'',
        count1:'',
        bindex:1,
        oldmonth:'9',
        nowmonth:'14',
        titleButton:'注册商标',
        echartData:{
            data1: [],
            data2: [],
            data3: [],
        },
        slots: [
            {
                flex: 1,
                values: ['北京市', '天津市', '上海市', '重庆市',"河北省","山东省","江苏省","安徽省","浙江省","福建省","广东省",
                    "海南省","云南省","贵州省","四川省","湖南省","湖北省","河南省","山西省","陕西省","甘肃省","青海省","江西省",
                    "黑龙江","吉林省","辽宁省", '新疆', '西藏','宁夏','内蒙古','广西'],
                textAlign: 'right',
                defaultIndex:1,
            },
            {
                flex: 1,
                values: ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
                textAlign: 'left',
                defaultIndex:5,
            }
        ],
        selectYear:'河北省  2019年',
        saveselectYear:'',
        yufen:'5月'

    };
  },
  created() {
  },
  mounted() {
        this.echartData={
            data1: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月'],
            //data3: [30, 45, 61, 70],
            data2:[],
            data3:[],
        }
        for(let i=0;i<12;i++){
            this.echartData.data2.push(this.randomNum(1000,2000));
        }
        let summ = 0;
        let sjs=0;
        for(let i=0;i<5;i++) {
            sjs=this.randomNum(1500, 2000);
            summ+=sjs;
            this.echartData.data3.push(sjs);
        }
      this.count1 = summ;
      this.count = this.echartData.data2[4];

  },
  methods: {
      randomNum(minNum, maxNum) {
          switch (arguments.length) {
              case 1:
                  return parseInt(Math.random() * minNum + 1, 10);
                  break;
              case 2:
                  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                  break;
              default:
                  return 0;
                  break;
          }
      },
      saveselected() {
          this.popupVisible = false;
          this.selectYear = this.saveselectYear;
          if (this.bindex == 1) {
              this.echartData={
                  data1: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月'],
                  //data3: [30, 45, 61, 70],
                  data2:[],
                  data3:[],
              }
              for(let i=0;i<12;i++){
                  this.echartData.data2.push(this.randomNum(1000,2000));
              }
              let summ = 0;
              let sjs=0;
              for(let i=0;i<5;i++) {
                  sjs=this.randomNum(1500, 2000);
                  summ+=sjs;
                  this.echartData.data3.push(sjs);
              }
              this.count1 = summ;
              this.count = this.echartData.data2[4];
              this.titleRight = "至今注册商标";
              this.titleButton = "注册商标";
          }
          else {
              this.echartData={
                  data1: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月'],
                  //data3: [30, 45, 61, 70],
                  data2:[],
                  data3:[],
              }
              for(let i=0;i<12;i++){
                  this.echartData.data2.push(this.randomNum(1000,2000));
              }
              let summ = 0;
              let sjs=0;
              for(let i=0;i<5;i++) {
                  sjs=this.randomNum(1500, 2000);
                  summ+=sjs;
                  this.echartData.data3.push(sjs);
              }
              this.count1 = summ;
              this.count = this.echartData.data2[4];
              this.titleRight ="至今案件";
              this.titleButton = "执法";
          }
      },
      onValuesChange(picker, values) {
          this.saveselectYear = values[0] + "  " + values[1];
      },
      showdate() {
          this.popupVisible = true;
          //this.$refs.picker1.open();
      },
      echartclick(obj) {
          let sdata = parseInt(obj.value);
          let index = parseInt(obj.index);
          this.yufen=index+1+"月"
          this.count = sdata;
          if (index < 5) {
              this.oldmonth = parseFloat((parseInt(this.echartData.data3[index] - sdata) / sdata )) * 100;
              if (index > 0) {
                  this.nowmonth = ((parseFloat(this.echartData.data3[index]) - parseInt(this.echartData.data3[index - 1])) / parseInt(this.echartData.data3[index - 1])) * 100;
              }
              else {
                  this.nowmonth = 0;
              }
          }
          else {
              this.oldmonth = 0;
              this.nowmonth = 0;
          }
          this.oldmonth =Math.abs(parseInt(this.oldmonth));
          this.nowmonth = Math.abs(parseInt(this.nowmonth));

      },
      goBack() {
          this.$router.goBack()
      },
      pageshare() {
          MessageBox('提示', '原生app对接-调用原生分享功能');
      },
      tab(index) {
          this.bindex = index;
          if (index == 1) {
              this.echartData={
                  data1: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月'],
                  //data3: [30, 45, 61, 70],
                  data2:[],
                  data3:[],
              }
              for(let i=0;i<12;i++){
                  this.echartData.data2.push(this.randomNum(1000,2000));
              }
              let summ = 0;
              let sjs=0;
              for(let i=0;i<5;i++) {
                  sjs=this.randomNum(1500, 2000);
                  summ+=sjs;
                  this.echartData.data3.push(sjs);
              }
              this.count1 = summ;
              this.count = this.echartData.data2[4];
              this.titleRight = "至今注册商标";
              this.titleButton = "注册商标";
          }
          else {
              this.echartData={
                  data1: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月'],
                  //data3: [30, 45, 61, 70],
                  data2:[],
                  data3:[],
              }
              for(let i=0;i<12;i++){
                  this.echartData.data2.push(this.randomNum(1000,2000));
              }
              let summ = 0;
              let sjs=0;
              for(let i=0;i<5;i++) {
                  sjs=this.randomNum(1500, 2000);
                  summ+=sjs;
                  this.echartData.data3.push(sjs);
              }
              this.count1 = summ;
              this.count = this.echartData.data2[4];
              this.titleRight ="至今案件";
              this.titleButton = "执法";
          }
      },
  },
  components:{
      zhu,
  }
};
</script>
<style lang="scss">
    .home-statistics .picker-slot-center:nth-child(3){
        display: none
    }
    .home-statistics .picker-slot-center:nth-child(2){
        display: none
    }
    .home-statistics .picker-slot-wrapper{
        text-align: center;
    }
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
        position:relative;
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
        .input-text{
            width: 2.5rem;
            border: none;
            padding-bottom: 0.04rem;
            padding-left: 0.1rem;
            line-height: 0.3rem;
            border-bottom: 0.03rem solid #2095f2;
            background: transparent;
            border-radius: 0px;
            color: #2095f2;
            font-size: 0.3rem;
            -webkit-appearance:none;
            font-weight: 600;
            background: url('../../assets/images/yeardrop.png') no-repeat;
            background-size: 8%;
            background-position: 2.25rem 0.1rem;
        }
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
                .picker-toolbar-title {
                    display: flex;
                    flex-direction: row;
                    height: 48px;
                    line-height: 48px;
                    color: #2095f2;
                    .usi-btn-cancel{
                        width: 50%;
                        text-align: center;
                    }
                    .usi-btn-sure{
                        flex: 1;
                        text-align: center;
                    }
                }
            }
            .top-right{
                width: 45%;
                font-family: PingFangSC-Regular;
                font-size: 0.28rem;
                color: #5b5b69;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                span{
                    font-size: 0.32rem;
                    color: #2095f2;
                    padding-right: 0.05rem;
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
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                span{
                    font-size: 0.36rem;
                    color: #2095f2;
                    padding-right: 0.05rem;
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
                    padding-top: 0.8rem;
                    box-sizing: border-box;
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
            bottom: 31%;
            width: 0.16rem;
            height: 0.3rem;
            border-left: none;
            display: flex;
            background-color: #f5f5f5;
            border-radius:0 0.5rem 0.5rem 0; /* 左上、右上、右下、左下 */
            box-shadow: inset -0.05rem -0.01rem 0.05rem #e8e8e8;
        }
        .yuan-right{
            position: absolute;
            bottom: 31%;
            right: 0;
            width: 0.16rem;
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
