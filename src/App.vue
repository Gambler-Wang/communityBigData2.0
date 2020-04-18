<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods: {
    reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
          this.isRouterAlive = true
       })
    }
  }
}
</script>

<style lang="less">
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*color: #2c3e50;*/
  font-size:14px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(0,0,0,1);
  height: 100%;
  width: 100%;
}
.pswp__bg{
  background: rgba(0,0,0,.8);
}
.pswp__caption__center{
  text-align: center;
}
</style>
