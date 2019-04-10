<!-- 
* 文件名：search result
* 作者：王帅
* 描述：搜索结果
* 修改时间：2019-04-10
-->
<template>
  <div class="trademark-Wrap">
    <!-- 头部搜索区域 开始 -->
    <div class="top-header">
      <div class="returnbox">
          <span class="iconfont icon-back"></span>
      </div>
      <div class="top-search">
        <div class="search">
            <form action="javascript:;" id="searchFrom" @submit="searchList">
                <input type="search" value="" placeholder="" />
            </form>
            <button>+</button>
        </div>
      </div>
    </div>
    <!-- 头部搜索区域 结束 -->
    <!-- tab 切换 开始  -->
    <div class="tab-box">
        <ul>
            <li :class="{active:current==0}" @click="current=0">近似查询</li>
            <li :class="{active:current==1}" @click="current=1">申请人</li>
            <li :class="{active:current==2}" @click="current=2">商品/服务</li>
            <li :class="{active:current==3}" @click="current=3">注册号</li>
            <li :class="{active:current==4}" @click="current=4,popupVisible=true">筛选<span class="iconfont icon-filter"></span></li>
        </ul>
    </div>
    <!-- tab 切换 结束  -->
    <!-- 搜索结果  开始  -->
    <div class="serach-content">
        <p class="total">共为您检索到115条相关商标</p>
        <div class="list-content">
            <div class="list-item" v-for="item in 2">
                <div class="img-box">
                    <img src="../../assets/images/home/testlogo.jpg" alt="">
                </div>
                <div class="item-content">
                    <h4>耐克创新有限合伙公司</h4>
                    <p><span class="title">注册号</span> <span>12749588</span></p>
                    <p><span class="title">申请日</span> <span>12749588</span></p>
                    <p><span class="title">当前状态</span> <span class="icon">商标无效</span></p>
                </div>
            </div>
            <div class="list-item" v-for="item in 2">
                <div class="img-box">
                    <img src="../../assets/images/home/testlogo.jpg" alt="">
                </div>
                <div class="item-content">
                    <h4>耐克创新有限合伙公司</h4>
                    <p><span class="title">注册号</span> <span>12749588</span></p>
                    <p><span class="title">申请日</span> <span>12749588</span></p>
                    <p><span class="title">当前状态</span> <span class="icon noregister">商标无效</span></p>
                </div>
            </div>
            <div class="list-item" v-for="item in 2">
                <div class="img-box">
                    <img src="../../assets/images/home/testlogo.jpg" alt="">
                </div>
                <div class="item-content">
                    <h4>耐克创新有限合伙公司</h4>
                    <p><span class="title">注册号</span> <span>12749588</span></p>
                    <p><span class="title">申请日</span> <span>12749588</span></p>
                    <p><span class="title">当前状态</span> <span class="icon register">商标无效</span></p>
                </div>
            </div>
        </div>
    </div>
    <!-- 搜索结果  结束  -->

    <!-- 筛选开始 -->
    <mt-popup v-model="popupVisible" position='right'>
        <div class="popup-box">
            <div class="item">
                <div class="title">默认排序</div>
                <div class="list">
                    <a href="javasctipt:;" :class="{active:subcurrent==0}"  data-content="+" @click="setCurrent(0,0)">相似程度</a>
                    <a href="javasctipt:;" :class="{active:subcurrent==1}" data-content="+" @click="setCurrent(0,1)">注册号</a>
                    <a href="javasctipt:;" :class="{active:subcurrent==2}" data-content="+" @click="setCurrent(0,2)">代理公司</a>
                </div>      
            </div>
            <div class="item">
                <div class="title">申请日</div>
                <div class="list">
                    <a href="javasctipt:;" :class="{active:subcurrent1==0}" data-content="+" @click="setCurrent(1,0)">正序</a>
                    <a href="javasctipt:;" :class="{active:subcurrent1==1}" data-content="+" @click="setCurrent(1,2)">倒序</a>
                </div>      
            </div>
            <div class="item">
                <div class="title">申请人首字母</div>
                <div class="list">
                    <a href="javasctipt:;" :class="{active:subcurrent2==0}" data-content="+" @click="setCurrent(2,0)">A-Z</a>
                    <a href="javasctipt:;" :class="{active:subcurrent2==1}" data-content="+" @click="setCurrent(2,1)">Z-A</a>
                </div>      
            </div>
            <div class="btn-box">
                <button class="btn-resize" @click="reszieFn">重置</button>     
                <button class="btn-ok" @click="ok">确定</button>     
            </div>
        </div>
    </mt-popup>
    <!-- 筛选结束 -->

  </div>
</template>
<script>
import Search from "../../components/search/index";
export default {
  name: "home",
  data() {
    return {
        current:0,
        popupVisible:false,
        subcurrent:0,
        subcurrent1:0,
        subcurrent2:0
    };
  },
  created() {},
  mounted() {},
  methods: {
      searchList(){
          alert(123)
      },
      //   筛选
      setCurrent(i,k){
          if (i==0) {
              this.subcurrent=k
          }else if(i==1){
            this.subcurrent1=k
          }else if(i==2){
                this.subcurrent2=k
          }
          
      },
      //重置
      reszieFn(){
          this.subcurrent=-1
          this.subcurrent1=-1
          this.subcurrent2=-1
      },
      // 确定
      ok(){
          this.reszieFn();
          this.popupVisible=false
      }
  },
  components: {
    Search
  }
};
</script>
<style lang="scss" scoped>
::-webkit-search-cancel-button { display: none; }
.trademark-Wrap{
    background-color: #f6f6f6;
}
// 头部搜索区域
.top-header {
  height: 0.9rem;
  padding: 0 0.3rem 0 0;
  background-color: #2095f2;
  box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  .returnbox{
      height:0.9rem;
      width: 0.8rem;
      overflow: hidden;
      .iconfont{
        font-size:0.8rem;
        color: #fff;
        height:0.9rem;
        line-height: 0.9rem;

      }
  }
  .top-search {
    height: 0.64rem;
    width: calc(100% - 0.9rem);
    flex:1;
    margin:0;
    box-sizing: border-box;
    .search {
      height: 100%;
      background: url(../../assets/images/component/searchicon.png) no-repeat
        0.2rem center;
      background-size: 0.32rem 0.32rem;
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 0.05rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      input {
        width: 6rem;
        padding: 0 0.6rem;
        box-sizing: border-box;
        border: none;
        height: 100%;
        background-color: transparent;
        color: #fff;
        font-size: 0.28rem;
      }
      button {
        height: 0.64rem;
        width: 0.64rem;
        // background: url(../../assets/images/component/xjicon.png) no-repeat
        //   center center;
        background-color: transparent;
        font-size: 0.55rem;
        color:#fff;
        transform: rotate(45deg);
        position: relative;
        top:0.0rem;
        border: none;
        position: relative;
       
      }
    }
  }
}
// tab 切换
.tab-box{
    height: 0.92rem;
    background-color: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        li{
            // border-right:1px solid #dfdfdf75;
            flex: 1;
            text-align: center;
            position: relative;
            line-height: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            .iconfont{
                font-size: 0.64rem;
            }
            &::before{
                content:'';
                position: absolute;
                height: 40%;
                right:0;
                top:50%;
                margin-top:-10%;
                width: 1px;
                background-color: #dfdfdf75;
                
            }
            &:first-child{
                border-left:0;
            }
            &:last-child{
                border-right:0;
            }
            &.active:after{
                content:'';
                position: absolute;
                width: 100%;
                height: 2px;
                background: #2095f2;
                left:0;
                right: 0;
                bottom:0;
            }
        }
    }

}
// 搜索结果/
.serach-content{
    padding: 0 0.32rem 1.12rem 0.32rem;
    .total{
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.24rem;
        color: #5b5b69;
    }
    .list-item{
        display: flex;
        background-color: #fff;
        border-radius: 0.05rem;
        margin-bottom:0.2rem;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
        .img-box{
            margin: 0.3rem;
            width: 1.8rem;
            height: 1.8rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .item-content{
            flex:1;
            padding:  0.32rem 0.32rem 0.32rem 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h4{
                color: #1e2128;
                font-size: 0.32rem ;
                font-weight: normal;
                line-height: 0.36rem;
            }
            p{
                font-size: 0.24rem;
                color: #5b5b69;
                .title{
                    display: inline-block;
                    width: 1.12rem;
                }
                .icon{
                    height: 0.38rem;
                    line-height: 0.39rem;
                    display: inline-block;
                    background-color: #d9d9d9;
                    padding: 0 0.1rem;
                    border-radius: 0.05rem;
                    &.register{
                         background-color: #2095f2;
                         color:#fff;
                    }
                    &.noregister{
                         background-color: #fea71a;
                         color:#fff;
                    }
                }
            }
        }
    }
}
// 筛选
.popup-box{
    width: 70vw;
    height: 100vh;
    padding: 0.64rem 0.32rem;
    box-sizing: border-box;
    position: relative;
    .item{
        margin-bottom:0.32rem;
    }
    .title{
        font-size: 0.28rem;
        color: #5b5b69;
        height: 0.64rem;
        left: 0.64rem;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        a{
            display: inline-block;
            width: 45%;
            background-color: #f2f2f2;
            border-radius: 0.1rem;
            height: 0.8rem;
            line-height:  0.8rem;
            text-align: center;
            margin-bottom:0.3rem;
            color: #333333;
            position: relative;
            overflow: hidden;
            &.active{
                background: #d2eafc;
                color: #46a2f3;
            }
            &.active::before{
               position: absolute;
               content: attr(data-content); 
               width: 0.3rem;
               height: 0.3rem;
               color:#fff;
               font-size: 0.3rem;
               transform: rotate(45deg);
               right: -0.2rem;
               bottom: 0.2rem;
               z-index: 10;
            }
            &.active:after{
               position: absolute;
               content:'';
               width: 0.6rem;
               height: 0.6rem;
               background: #2095f2;
               right: -0.3rem;
               bottom:-0.3rem;
               transform: rotate(45deg)
            }
        }
    }
    .btn-box{
        position: absolute;
        bottom:0;
        height: 1.2rem;
        display: flex;
        justify-content: space-between;
        right: 0.32rem;
        left: 0.32rem;
        button{
            display: inline-block;
            width: 45%;
            color:#fff;
            background-color: #2095f2;
            border-radius: 0.1rem;
            height: 0.8rem;
            line-height:  0.8rem;
            text-align: center;
            border:none;
            font-size: 0.32rem;
            &.btn-resize{
                background-color: #fea71a;
            }
        }
    }
}
</style>
