<template>
    <div>
        <router-view name="header"></router-view>
        <transition :name="slideName">
            <router-view name="body" class="child-view"></router-view>
        </transition>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
import { debug } from 'util';
    export default {
        name: 'mainComps',
        prePath:'home',
        beforeRouteUpdate (to, from, next) {
            let isBack = this.$router.isBack;
            if (isBack) {
                this.slideName = 'slide-right';
            } else {
                this.slideName = 'slide-left';
            }
            this.$router.isBack = false;
            next();
        }
    }
</script>
<style lang="scss" scoped>
.child-view{
  // margin-top:0.9rem;
}
</style>

