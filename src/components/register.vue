<template>
  <div class="register-container">
    <x-header title="注册"></x-header>

    <div class="login-items">
    <div class="input-area">
      <group style="margin-top:0.1rem">
        <x-input  placeholder="手机号码/邮箱" class="account-input">
        </x-input>
      </group>
      <x-button type="primary" class="next-btn weiui-btn-shadow" @click.native="login">下一步</x-button>
      <div class="message-tip">注册即同意<span class="user-permission">用户协议与隐私条款</span></div>

    </div>
  </div>
  </div>
</template>
<script>
  import {XInput, XButton, XHeader} from 'vux'
  export default {
    components: {
      XInput,
      XButton,
      XHeader
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

  .register-container .input-area{
    padding-left:1.5rem;
    padding-right:1.5rem;

  }
  .register-container .account-input{
    margin-top: 1rem;
    border:1px solid #ADADAB;
    border-radius:5px;
    margin-top:1rem;
    font-size:20px !important;
    font-weight:100;
  }

  .register-container .weui-input{
    color:#ADADAB !important;
  }
  .register-container .next-btn{
    margin-top:1rem;
    font-size:20px !important;
    font-weight:100;
  }

  .register-container .message-tip{
    text-align: center;
    padding: 17px 15px 10px;
    color: #717171;
    font-size: 12px;
  }

  .register-container .user-permission{
    text-decoration:underline
  }
</style>
