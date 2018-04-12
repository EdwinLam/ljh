<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
  import { Loading } from 'vux'
  import { mapState } from 'vuex'
  import {AuthUtil, CommonUtil} from './utils'
  import {AuthApi} from './api'

  export default {
    name: 'app',
    async mounted () {
      // 登录状态更新用户信息
      if (AuthUtil.getPhone()) {
        const res = await AuthApi.login({phone: AuthUtil.getPhone(), password: AuthUtil.getPassword()})
        if (CommonUtil.isSuccess(res)) {
          this.$store.dispatch('login', {
            phone: AuthUtil.getPhone(),
            password: AuthUtil.getPassword(),
            data: res.data
          })
        }
      }
    },
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
  @import '~vux/src/styles/close.less';

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
