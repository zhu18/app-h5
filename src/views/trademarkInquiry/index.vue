<template>
  <div class="trademark-Wrap">
     <div class="search-box">
         <div class="logobox"></div>         
        <Search/>
     </div>
     <div class="trademark-list">
         <div class="title">
             搜索历史
             <span class="delall" @click='delall' v-if="list.length">删除全部</span>
         </div>
         <div class="list-content">
             <hisList :datalist="list"></hisList>
             <div class="more">
                <a href="javascript:;" v-if="list.length<25" @click="loadMore">更多</a>
             </div>
         </div>
     </div>
  </div>
</template>
<script>
import hisList from '../../components/historyList/hisList';
import Search from '../../components/search/index';
export default {
  name: "trademarkInquiry",
  data() {
    return {
        list:[
          '商标专利权商标专利权商标专利权商标专利权商标专利权商标专利权',
          '商标专利权1',
          '商标专利权2',
          '商标专利权3',
          '商标专利权4',
          '商标专利权5',
          '商标专利权6',
          '商标专利权7',
          '商标专利权7',
          '商标专利权7',
          '商标专利权7',
          '商标专利权7',
          '商标专利权7',
      ]
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
      loadMore(){
          this.list.push(...[
                 '商标专利权7',
                '商标专利权7',
                '商标专利权7',
                '商标专利权7',
                '商标专利权7',
                '商标专利权7'
          ])
      },
      delall(){
          this.list=[]
      },
      del(index){
          this.list.splice(index,1)
      }
  },
  components:{
    Search,
    hisList
  }
};
</script>
<style lang="scss" scoped>
    .trademark-Wrap{
        min-height: calc(100% - 0.9rem - 0.98rem );
        position: absolute;
        bottom:1.2rem;
        width: 100%;
        top: 0;
       
    }
    .search-box{
        padding-top:3.46rem;
        position: relative;
        background: url(../../assets/images/trademarkinquiry/trademarkinquiryBg_02.png) no-repeat top center;
        background-size: 7.5rem 4.54rem;
        height: 4.54rem;
        box-sizing: border-box;
        box-shadow: 0 1px 10px 3px rgba(4,0,0,.2);
        .logobox{
            width: 1.65rem;
            height: 1.44rem;
            background: url(../../assets/images/trademarkinquiry/trademarkinquirylogo.png) no-repeat center;
            background-size:100% 100%;
            position: absolute;
            top:50%;
            margin-top:-0.72rem;
            left:50%;
            margin-left:-0.83rem;
        }
    }
    .trademark-list{
        padding:0.32rem;
        position: absolute;
        top:4.54rem;
        bottom:0;
        left:0;
        right:0;
        // background-color: red;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .title{
            height: 0.48rem;
            line-height: 0.48rem;
            font-size: 0.32rem;
            color: #333333;
            position: relative;
            .delall{
                position: absolute;
                right: 0;
                color: #73737f;
                font-size: 0.24rem;
            }

        }
        .list-content{
            flex:1;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
            overflow-y: auto;
            .list-item{
                height: 0.8rem;
                line-height: 0.8rem;
                padding:0 0.4rem 0 0.2rem;
                background-color: #dfdfdf;
                color: #73737f;
                font-size: 0.24rem;
                border-radius: 0.06rem;
                margin:0.12rem;
                max-width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                box-sizing: border-box;
                position: relative;
                .del{
                    margin-left: 0.12rem;
                    display: inline-block;
                    transform: rotate(-45deg);
                    position: absolute;
                    right: 0.15rem;

                }
            }
            
        }
    }
    .more{
        height: 1rem;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        a{
            color:#73737f;
        }
    }

 
</style>
