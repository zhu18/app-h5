<template>
  <div class="home-wrap4">
    <div class="header-content">
      <div class="font-info">
        {{username}}
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "home4",
        data() {
            return {
                username:'我的页面待开发...',
            };
        },
        created() {
        },
        mounted() {
        },
        methods: {
        }
    };
</script>
<style lang="scss">
  .home-wrap4 {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
    overflow-y: auto;
    .header-content {
      height: 100%;
      width: 100%;
      background-size: 100%;
      .font-info {
        margin-top: 3.45rem;
        text-align: center;  
        color:#aaa;     
      }
    }
  }
</style>
