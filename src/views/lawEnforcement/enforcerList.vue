<!--
* 文件名：enforcerList
* 作者：邢玮
* 描述：执法人员列表
* 修改时间：2019-04-19
-->
<template>
    <div class="start-wrapper">
        <div class="top-header">
            <mt-header fixed :title="title">
            <div slot="left">
                <mt-button icon="back" @click="goBack"></mt-button>
            </div>
            </mt-header>
        </div>
        <div class="enforcer-wrapper">
            <Search class="search"/>
            <div class="enforcer-list-box">
                <div class="enforcer-list-wrapper" v-for="(item, index) in data" :key="index">
                    <p class="enforcer-list-title">{{item.title}}</p>
                    <ul  class="enforcer-list">
                        <li v-for="(item1, index1) in item.list" :key="index1" @click="selectClick(item1)">
                            <span class="list-img"><img :src="item1.img"/></span>
                            <div class="list-info">
                                <p>{{item1.name}}</p>
                                <p>{{item1.department}}</p>
                            </div>
                            <span :class="[item1.isChecked?'is-select':'','icon-box']" >
                                <i class="mint-toast-icon mintui mintui-field-success"></i> 
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import Search from '../../components/search/innerSearch'
import img from '../../assets/images/lawenforcement/police.png'
export default {
    name: 'enforcerList',
    data(){
        return {
            title: '执法人',
            data: [
                {
                    title: '海淀分局',
                    list: [
                        {img: img, name: '张XX', department: '执法大队', isChecked: false},
                        {img: img, name: '张XX', department: '执法大队', isChecked: false},
                        {img: img, name: '张XX', department: '执法大队', isChecked: false},
                        {img: img, name: '张XX', department: '综合管理办公室', isChecked: false}
                    ]
                },
                {
                    title: '朝阳分局',
                    list: [
                        {img: img, name: '李XX', department: '综合管理办公室', isChecked: false},
                        {img: img, name: '张X', department: '法制 办公室', isChecked: false},
                        {img: img, name: '赵XX', department: '执法大队', isChecked: false},
                        {img: img, name: '李XX', department: '执法大队', isChecked: false},
                        {img: img, name: '李XX', department: '综合管理办公室', isChecked: false},
                        {img: img, name: '张X', department: '法制 办公室', isChecked: false},
                        {img: img, name: '赵XX', department: '执法大队', isChecked: false},
                        {img: img, name: '李XX', department: '执法大队', isChecked: false},
                        {img: img, name: '李XX', department: '综合管理办公室', isChecked: false},
                        {img: img, name: '张X', department: '法制 办公室', isChecked: false},
                        {img: img, name: '赵XX', department: '执法大队', isChecked: false},
                        {img: img, name: '李XX', department: '执法大队', isChecked: false}
                    ]
                }
            ]
        }
    },
    methods:{
        goBack() {
            this.$router.goBack();
        },
        selectClick(item){
            item.isChecked = !item.isChecked;
        }
    },
    components: {
        Search
    }
}
</script>
<style lang="scss" scoped>
.start-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f6f6f6;
}
.top-header {
  position: relative;
  height: 0.9rem;
  background-color: #2095f2;
  box-shadow: 0 1px 10px 3px rgba(4, 0, 0, 0.2);
  z-index: 1;
  .mint-header {
    height: 0.9rem;
    background: transparent;
  }
}
.enforcer-list-box {
    height: calc(100% - .64rem - .2rem);
    overflow-y: scroll;
}
.enforcer-wrapper {
    height: calc(100% - .9rem - .4rem);
    padding: .4rem .32rem 0;
    .enforcer-list-wrapper {
        padding-top: .24rem;
        .enforcer-list-title {
            font-size: .24rem;
            color: #5b5b69;
        }
        .enforcer-list {
            margin-top: .24rem;
            li {
                position: relative;
                padding: .2rem .24rem;
                margin-bottom: .24rem;
                background: #fff;
                border-radius: 0.1rem;
                box-shadow: 0 0.01rem 0.03rem rgba(0, 0, 0, 0.1);
                overflow: hidden;
                .list-img {
                    float: left;
                    width: .8rem;
                    height: .8rem;
                    border-radius: .1rem;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .list-info {
                    float: left;
                    margin-left: .24rem;
                    font-size: .32rem;
                    color: #272b36;
                    p {
                        line-height: .4rem;
                    }
                }
            }
        }
    }
}
.icon-box{
    position: absolute;
    box-sizing: border-box;
    right: 0.24rem;
    top:0.4rem;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    border: 0.02rem solid #c5c6c6;
    background:#d4d5d7;
    i{
        display: none;
    }
}
.is-select{
    border:none;
    i{
        transition: all .25s;
        position: relative;
        left:-0.04rem;
        top:-0.04rem;
        font-size: 0.46rem;
        color:#2095f2;
        display: block;
    }
}
.search {
    margin-bottom: .2rem;
}
</style>
