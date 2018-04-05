<template>
  <div class="verification">
    <x-header title="注册"></x-header>
    <div class="main-container">
      <div class="message-tip">
        验证码已发送到您的手机：<p class="phone">+86 13824789781</p>
      </div>
      <flexbox :gutter="0" class="input-area" :justify="'space-between'">
        <flexbox-item :span="7">
          <group>
            <x-input placeholder="验证码" class="account-input"></x-input>
          </group>
        </flexbox-item>
        <flexbox-item :span="4">
          <x-button type="primary" class="weiui-btn-shadow resend">重新获取(60)</x-button>
        </flexbox-item>
      </flexbox>
      <x-button type="primary" class="ok-btn weiui-btn-shadow" style="">确定</x-button>
    </div>
  </div>
</template>
<script>
  import {XInput, XButton, XHeader, Flexbox, FlexboxItem} from 'vux'
  export default {
    components: {
      XInput,
      XButton,
      XHeader,
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

  .verification {
    .main-container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      text-align: center;
      /*提示语*/
      .message-tip {
        text-align: center;
        padding: 30px 15px 40px;
        color: @support-color;
        font-size: 12px;
        /*号码*/
        .phone {
          color: @primary-color;
        }

      }
      /*输入区域*/
      .input-area {
        width: 100%;
        .account-input {
          width: 94%;
          border: 1px solid @support-color;
          border-radius: 5px;
          font-size: 20px !important;
          font-weight: 100;
        }
        .resend {
          font-weight: 100;
          padding: .4rem .1rem .4rem;
          font-size: 1.1rem;
        }
      }
      /*确定按钮*/
      .ok-btn {
        background-color: #9E9EA0 !important;
        margin-top: 0.5rem;
        font-size: 20px !important;
        padding: .2rem;
      }
    }
  }

</style>
