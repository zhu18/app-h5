<!--
* 文件名：search
* 作者：李猛
* 描述：法律法规-查询
* 修改时间：2019-04-16
-->
<template>
  <div class="search">
    <div class="item-icon">
      <i class="icon iconfont icon-query"></i>
    </div>
    <div class="item-inp">
      <form action="javascript:;"  @submit="search">
        <input type="search" v-model="txt" placeholder="请输入关键字" >
      </form>
    </div>
    <i class="icon iconfont icon-del" v-show="txt" @click="clear()"></i>
  </div>
</template>
<script>
export default {
  name: 'innerSearch',
  data() {
    return {
        txt:''
    }
  },
  created() {},
  mounted() {},
  methods: {
      clear(){
          this.txt=''
      },
      search(){
        this.$emit('submit',this.txt)
      }
  },
  components: {}
}
</script>
<style>
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}
</style>
<style lang="scss" scoped>

.search {
  height: 0.64rem;
  border-radius: 0.05rem;
  background-color: #e5e5e5;
  border: 0;
  position: relative;
  font-size: 0.28rem;
  display: flex;
  align-items: center;
  -webkit-appearance: none;
  .item-icon {
    width: 0.6rem;
    text-align: center;
    i {
      cursor: pointer;
      font-size: 0.5rem;
      color: #777782;
      float: none;
      margin: auto;
    }
  }
  input:valid+.icon-del{
      color:red;
  }
  .item-inp {
    flex-grow: 1;
    input {
      height: 0.64rem;
      width: 100%;
      line-height: 0.64rem;
      border: none;
      background-color: transparent;
    //   &:valid+ {
    //       background-color:red;
    //   }
    }
  }
  .icon-del {
    margin-right: 0.2rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.1);
    color: #666;
  }
}
</style>
