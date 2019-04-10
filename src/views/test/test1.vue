<template>
  <div class="home-test1">
    <div class="header-content">
      <div class="font-info">
        <div class="left-font">
          <div class="name-font">{{username}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "home-test1",
        data() {
            return {
                username:'执法页面待开发...',
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
  .home-test1 {
    width: 100%;
    height: 100%;
    background: #ffffff;
    overflow: hidden;
    overflow-y: auto;
    .header-content {
      height: 100%;
      width: 100%;
      background-color: #c65df6ed;
      background-size: 100%;
      .font-info {
        display: inline-block;
        margin-top: 3.45rem;
        .left-font {
          width: 6rem;
          position: absolute;
          left: 0.3rem;
          .name-font {
            font-size: 0.32rem;
            font-family: PingFangSC-Regular;
          }
          .erm {
            font-size: 0.22rem;
            padding-top: 0.15rem;
            .pass {
              background-color: white;
              display: inline-block;
              border-radius: 0.06rem;
              margin-left: 0.1rem;
              color: #f6a65d;
              padding-left: 0.2rem;
              padding-right: 0.2rem;
              padding-top: 0.04rem;
              padding-bottom: 0.04rem;
            }
          }
        }
        .right-img {
          position: absolute;
          left: 6.5rem;
          img {
            width: 0.7rem;
            height: 0.7rem;
          }
        }
      }
    }
  }
</style>
