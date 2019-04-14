<!--
* 文件名：codeInput
* 作者：王杰
* 描述：
* 修改时间：2019-04-14
* params：inputEnd : 输入完毕回调函数 返回value
-->
<template lang="html">
    <div class="code-wrap">
        <input class="code-input" ref="input" type="tel" autofocus maxlength="4" @input="inputChange" v-model="inputValue"/>
        <div class="code-box">
            <div class="code-item" @click="inputFocus" type="text" :key="i" v-for="(code,i) in num"><span>{{inputValue[i]}}</span></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "codeInput",
  props: {
    num: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      inputValue: ""
    };
  },
  created() {},
  mounted() {
    this.$refs['input'].focus()
  },
  activated() {
    this.$refs["input"].focus();
  },
  methods: {
    inputChange() {
      this.inputValue = this.inputValue.replace(/[^\d]/g, ""); //过滤字符只允许输入数字
      if (this.inputValue.length === this.num) {
        this.$emit("inputEnd", this.inputValue);
      }
    },
    inputFocus(){
        this.$refs['input'].focus();
    }
  },
  components: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.code-wrap {
  position: relative;
  overflow: hidden;
  .code-input {
    top:0;
    z-index: -1;
    position: absolute;
    text-indent: -999em; /*文本向左缩进*/
    margin-left: -100%; /*输入框光标起始点向左左移*/
    width: 200%; /*输入框增大一倍*/
    opacity: 0;
  }
  .code-box {
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 9;
    .code-item {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      width: 0.8rem;
      height: 0.8rem;
      font-size: 0.42rem;
      border-radius: 5px;
      box-sizing: border-box;
      margin-right: 0.2rem;
      border: 0.02rem solid #bfbfbf;
      background-color: #ececec;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
