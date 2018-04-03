<template>
  <div class="login-container">
  <div class="login-items">
    <div class="login-logo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <div class="input-area">
      <group style="margin-top:0.1rem">
        <x-input title="账号" placeholder="请输入账号" class="login-input">
          <i class="iconfont icon-wodejuhuasuan btn-icon" slot="label"></i>
        </x-input>
        <x-input title="密码" placeholder="请输入密码"  type="password" class="login-input">
          <i class="iconfont icon-suo btn-icon" slot="label"></i>
        </x-input>
      </group>
      <x-button type="primary" class="login-btn" @click.native="login">登&nbsp;录</x-button>
      <div class="register-btn">注册</div>
    </div>

  </div>
  </div>
</template>
<script>
  import {XInput, XButton} from 'vux'
  export default {
    components: {
      XInput,
      XButton
    },
    mounted: function () {
      console.log('ok')
    },
    data () {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<style lang="less">

  .weui-input{
    color:#ADADAB !important;
  }
  .login-input{
    margin-top: 1rem;
    border:1px solid #ADADAB;
    border-radius:5px;
  }
  .btn-icon{
    font-size:24px;
    color: #ADADAB;
    margin-right:1rem;
  }
  .register-btn{
    margin-top:1rem;
    text-align: center;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
  }
  .login-btn{
    margin-top:1rem;
    font-size:24px !important;
    font-weight:100;
  }
  .login-logo {
    text-align: center;
    padding-bottom: 6.5rem;
  }
  .logo {
    width: 100px;
    height: 100px
  }
  .input-area{
    padding-left: 5%;
    padding-right:5%;
  }

  .weui-cells:before{
    border-top:none !important;
  }
  .weui-cell{
    padding: 9px 15px !important;
  }
  .login-container{
    width: 100%;
    height: 100%;
    display: table;
  }
  .login-items{
    display: table-cell;
    vertical-align: middle;

  }
</style>
