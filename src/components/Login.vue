<!--登录页面-->
<template>
  <div class="login">
    <div class="main-container">
      <flexbox :gutter="0" orient="vertical" :justify="'center'" style="height: 100%">
        <flexbox-item :span="6">
          <!--logo部分-->
          <div class="logo-container">
            <img class="logo" src="../assets/vux_logo.png">
            <h1></h1>
          </div>
          <!--表单部分-->
          <group class="form-container">
            <!--账号-->
            <x-input title="账号" placeholder="请输入账号" class="input-item">
              <i class="iconfont icon-wodejuhuasuan btn-icon" slot="label"></i>
            </x-input>
            <!--密码-->
            <x-input title="密码" placeholder="请输入密码" type="password" class="input-item">
              <i class="iconfont icon-suo btn-icon" slot="label"></i>
            </x-input>
            <!--登录-->
            <x-button type="primary" class="login-btn">登&nbsp;录</x-button>
            <!--注册-->
            <div class="register-btn">注册</div>
          </group>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>
  import {XInput, XButton, Group, Flexbox, FlexboxItem} from 'vux'

  export default {
    components: {
      XInput,
      XButton,
      Group,
      Flexbox,
      FlexboxItem
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
  @import '../css/main.less';
  .login {
    height: 100%;
    .main-container {
      height: 100%;
      padding-left: 8%;
      padding-right: 8%;
      text-align: center;
      /*logo部分*/
      .logo-container {
        text-align: center;
        padding-bottom: 5rem;
        .logo {
          width: 100px;
          height: 100px
        }
      }
      /*表单部分*/
      .form-container {
        /*输入框*/
        .input-item {
          .weiui-input;
          margin-top: 1rem;
          .btn-icon {
            font-size: 1.5rem;
            color: #ADADAB;
            margin-right: .5rem;
          }
        }
        .login-btn{
          margin-top: 1.2rem;
          font-size:1.6rem !important;
          .weiui-btn;
        }
        /*注册按钮*/
        .register-btn {
          margin-top: 1.4rem;
          text-align: center;
          font-size: 1.4rem;
          letter-spacing: 3px;
        }
        /*vux组件微调*/
        .weui-cells:before {
          border-top: none !important;
        }
        .weui-cells:after{
          border-bottom: none !important;
        }
      }
    }
  }
</style>
