<style lang="less">
  @import '../css/main.less';
  .register{
    height: 100%;
    .main-container{
      padding-left:1.5rem;
      padding-right:1.5rem;
      height: auto;
      /*表单部分*/
      .form-container{
        margin-top: 2rem;
        .input-item{
          margin-top:1rem;
          .weiui-input;
        }
        .message-tip{
          margin-top:1.6rem;
          font-size:.8rem;
          text-align: center;
          color: #717171;
          .user-permission{
            text-decoration:underline
          }
        }
        .next-step-btn{
          .weiui-btn;
          padding-top:.5rem !important;
          padding-bottom:.5rem !important;
          margin-top:1.2rem;
          font-size:1.4rem !important;
        }
      }
    }
  }
</style>

<template>
  <div class="register">
    <x-header title="注册"></x-header>
    <div class="main-container">
      <div class="form-container">
        <group>
          <x-input  placeholder="手机号码/邮箱" class="input-item"></x-input>
        </group>
        <x-button type="primary" class="next-step-btn">下一步</x-button>
        <div class="message-tip">注册即同意<span class="user-permission">用户协议与隐私条款</span></div>
      </div>

    </div>
  </div>
</template>
<script>
  import {XInput, XButton, XHeader, Group} from 'vux'
  export default {
    components: {
      XInput,
      XButton,
      XHeader,
      Group
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
