<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './css/main.less';
body {
  background-color: #ffffff;
  -webkit-text-size-adjust:none;
}

html,body{height:100%;}
  #app{
    height:100%
  }
</style>
