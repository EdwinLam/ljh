<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
  import { Loading } from 'vux'
  import { mapState } from 'vuex'
  export default {
    name: 'app',
    components: {
      Loading
    },
    computed: {
      ...mapState({
        isLoading: state => state.app.isLoading
      })
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import './css/main.less';

  body {
    background-color: #ffffff;
    -webkit-text-size-adjust: none;
  }

  html, body {
    height: 100%;
  }

  #app {
    height: 100%
  }
</style>
