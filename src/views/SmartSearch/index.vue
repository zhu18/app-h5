<!-- 
* 文件名：SmartSearch
* 作者：zhu18
* 描述：智能检索
* 修改时间：2019-04-11
-->
<template>
  <div class="search-wrap">
    <div class="top-header">
      <mt-header fixed>
        <div slot="left">
          <mt-button icon="back" @click="back"></mt-button>
        </div>
        <mt-button slot="right">
            <i class="iconfont icon-help"></i>
        </mt-button>
        <mt-button slot="right">
            <i class="iconfont icon-time"></i>
        </mt-button>
        <mt-button slot="right">
            <i class="iconfont icon-img"></i>
        </mt-button>
      </mt-header>
      <div ref='imgtip' class="img-tip" @click="hideTip">
          相册可以直接选择图片识别
      </div>  
    </div>

    <div class="search-view">
        <div class="scan-box">
            <div class="scan-txt" v-show="!isScaning">
                <p>请把商标放于框内</p>
                <p>商标清晰、无遮挡、无阴影</p>
            </div>
        </div>
    </div>
    <div class="search-opt">
        <div class="opt-txtbar">
            <div class="txt" :class="scanType=='txt'&&'active left'"  @click="setScanType('txt')">扫图识字</div>
            <div class="txt" :class="scanType=='img'&&'active right'" @click="setScanType('img')">识图</div>
        </div>
        <div class="opt-btn">
            <div class="btn-watch" :class="isScaning&&'stop'" @click='scan'>
                <i class="iconfont icon-pic" v-show="!isScaning"></i>
                <i class="iconfont icon-del" v-show="isScaning"></i>
            </div>
        </div>
    </div>
    <div class="result-list"  @click="showList">
        <div class="list-head">
            <div class="cls" @click.stop="closeList"><i class="iconfont icon-del"></i></div>
            <div class="title">相似商标</div>
            <div class="query"><i class="iconfont icon-query"></i></div>
        </div>
        <div class="list-body">
            <div class="list-opt">
                <span>您想找的是:</span>
                <mt-button type="default" size="small">鞋类</mt-button>
                <mt-button type="default" size="small">家具</mt-button>
                <mt-button type="default" size="small">其他</mt-button>
            </div>
            <div class="list-block">
                <div class="block"><img src="../../assets/images/logo1.png"/></div>
                <div class="block"><img src="../../assets/images/logo1.png"/></div>
                <div class="block"><img src="../../assets/images/logo2.png"/></div>
                <div class="block"><img src="../../assets/images/logo1.png"/></div>
                <div class="block"><img src="../../assets/images/logo2.png"/></div>
                <div class="block"><img src="../../assets/images/logo2.png"/></div>
                <div class="block"><img src="../../assets/images/logo1.png"/></div>
                <div class="block"><img src="../../assets/images/logo1.png"/></div>
            </div>
        </div>
    </div>
    <div class="loading" v-show="isScaning">
        <mt-spinner color="#26a2ff" type="double-bounce"></mt-spinner>
        <span class="loading-txt">识别中...</span>
    </div>
  </div>
</template>
<script>
import anime from 'animejs';
import { Spinner } from 'mint-ui';

export default {
  name: "smartSearch",
  data() {
    return {
        scanType:'img',
        isScaning:false,
        scanOk:false,
        timer:null
    };
  },
  created() {},
  mounted() {
       anime({
            targets:'.img-tip',
            translateY:[-30,0],
            opacity:1,
            duration: 1000
        })
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    hideTip(){
        this.$refs.imgtip.remove();
    },
    scan(){
        this.$refs.imgtip.remove();
        //在识别中 取消识别
        if(this.isScaning){
            clearTimeout(this.timer);
            this.isScaning=false;
            return;
        }
        //开始识别
        this.isScaning=true;
        
        this.timer = setTimeout(()=>{
            this.isScaning=false;
             anime({
                targets:'.result-list',
                translateY:['130%','65%']
            })
        },1000)
    },
    setScanType(type){//设置识别类型
        if(this.scanType==type)
            return;

        this.scanType=type;
        let x=type==='txt'?'2.2rem':'0';
        anime({
            targets:'.opt-txtbar',
            translateX:x
        })
    },
    showList(){//显示识别结果
         anime({
            targets:'.result-list',
            translateY:'10%'
        })
    },
    closeList(){//关闭识别结果
         anime({
            targets:'.result-list',
            translateY:'130%'
        })
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.search-wrap {
  display: flex;
  flex-direction: column;
   color:#fff;
  height: 100%;
  .search-view {
    flex: 1;
    background: #ddd url(../../assets/images/scanbg.jpg) no-repeat;
    justify-content: center;
    display: flex;
    background-size: cover;
    
    .scan-box{
        width: 4.76rem;
        height: 4.76rem;
        align-self: center;
        border-radius: 5px;
        margin-top: 1rem;
        background:rgba(0,0,0,.3) ;
        box-shadow: 0 0 1px 999px rgba(0,0,0,.75);
        &::before{
            content:'';
            background:url(../../assets/images/smartsearch/scanborder.png) no-repeat;
            background-size: contain;
            display: block;
            position: relative;
            width: 4.78rem;
        height: 4.78rem;
         align-self: center;
         
        }
    }
    .scan-txt{
        position: relative;
        bottom: -.5rem;
        color:#fff;
        font-size: .28rem;
        text-align: center;
        p{
            margin: .2rem
        }
    }
  }
  .img-tip{
      color: #fff;
      font-size: .24rem;
      padding: .15rem;
      background: #fda61a;
      border:.5px solid #eee;
      border-radius: 4px;
      position:fixed;
      top:1rem;
      right:.3rem;
      opacity: 0;
      &::before{
          content: '';
          display: block;
          position: absolute;
          top:-.4rem;
          right:.3rem;
          height: .4rem;
          width: 0;
          border-left:.5px solid #eee;
      }
      &::after{
          content: '';
          display: block;
          position: absolute;
    right: .27rem;
    top: -.42rem;
          width:.05rem;
          height:.05rem;
          border-radius: 50%;
          background: #fda61a;
          border:1px solid #eee;
          box-shadow: 0 0 1px 3px rgba(255, 255, 255, 0.5);
      }
  }
  .search-opt {
    display: flex;
    flex-direction: column;
    height: 3rem;
    background: -webkit-linear-gradient(-90deg, #172737, #293f64) #182339;
    .opt-txtbar{
        flex: 1;
        display: flex;
        padding: 0 .1rem;
        .txt{
            font-size: .28rem;
            color:#fff;
            width: 2.2rem;
            line-height: 1rem;
            text-align: center;
            transition: font-size .2s;
            &.active{
                font-size: .36rem;
                width: 3rem;
            }
        }
    }
    .opt-btn{
        height: 2rem;
        .btn-watch{
            width: .92rem;
            height: .92rem;
            background: -webkit-linear-gradient(100deg, #2095f2, #67ccfb) #3fabf6;
            border-radius: 50%;
            margin: 10px auto;
            box-shadow: 0 0 1px 7px rgba(255,255,255,.4);
             .iconfont{
                color: #fff;
                font-size: .92rem;
             }
             &.stop{
                 background: -webkit-linear-gradient(100deg, #f22066, #f3558a) #f22066;
             }
        }
    }
  }
}
.result-list{
    display: flex;
    position: fixed;
    flex-direction: column;
    height: 95%;
    width: 100%;
    transform: translateY(130%);
    background: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color:#555;
   .list-head{
       height: .9rem;
       border-bottom:1px solid #eee;
       width: 100%;
       display: flex;
       .cls{
           
       }
       .title{
           font-size:.32rem;
           text-align: center;
           flex:1;
           line-height: .9rem;
       }
       .query{
           
       }
       .iconfont{
            font-size: .8rem;
            margin: .1rem;
            line-height: .9rem;
       }
   }
    .list-body{
        flex:1;
        padding: .26rem .3rem;
        display: flex;
        flex-flow: column;
        .list-opt{
            padding-bottom: .26rem;
            span{
                font-size: .24rem;
                color:#5b5b5b;
            }
            .mint-button{
                margin-left: .25rem;
            }
        }
        .list-block{
            flex:1;
            
            .block{
                width: 3.05rem;
                height: 3.05rem;
               
                margin: .2rem;
                float: left;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
                border-radius: 4px;
                img{
                    width: 100%;
                }
            }
        }
        
    }
}
.loading{
    position: fixed;
    bottom: 4rem;
    text-align: center;
    align-self: center;
    width: 2rem;
    display: flex;
    justify-content: center;
    
    .loading-txt{
        display: block;
        align-self: center;
    }
}
// 头部搜索区域
.top-header {
  position: fixed;
  top: 0;
  left: 0;
  height: 0.9rem;
  z-index: 10;
  .mint-header{
      height: 0.9rem;
      background: rgba(0,0,0,0);
       .iconfont {
      font-size: 0.8rem;
      color: #fff;
      height: 0.9rem;
      line-height: 0.9rem;
    }
  }
  
}
</style>
