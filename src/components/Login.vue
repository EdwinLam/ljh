<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <div class="input-area">
      <group style="margin-top:0.1rem">
        <x-input title="账号" placeholder="请输入账号" ></x-input>
        <x-input title="密码" placeholder="请输入密码"  type="password"></x-input>
      </group>
      <x-button type="primary" style="margin-top:1rem" @click.native="login">登录</x-button>
      <x-button @click.native="regist">注册</x-button>
    </div>

  </div>
</template>
<script>
  import {XInput, Group, XButton, XHeader, XAddress} from 'vux'
  export default {
    components: {
      XInput,
      Group,
      XButton,
      XHeader,
      XAddress
    },
    mounted: function () {
      console.log('ok')
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    }
  }
</script>

<style lang="less">
  .vux-demo {
    text-align: center;
  }
  .logo {
    width: 100px;
    height: 100px
  }
  .input-area{
    padding-left: 5%;
    padding-right:5%;

  }
</style>
