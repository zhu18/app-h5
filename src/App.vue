<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
  },
  mounted () {
     window.onpopstate = (event) => {
       if(!event.state){
         history.pushState(null, null, document.URL)
       }
    }
  },
}
</script>