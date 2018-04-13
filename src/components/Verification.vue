<template>
  <div class="verification">
    <x-header title="注册"></x-header>
    <div class="main-container">
      <div class="message-tip">
        验证码已发送到您的手机：<p class="phone">+86 {{phone}}</p>
      </div>
      <flexbox :gutter="0" class="input-area" :justify="'space-between'">
        <flexbox-item :span="7">
            <x-input placeholder="验证码" class="account-input" v-model="code" required></x-input>
        </flexbox-item>
        <flexbox-item :span="4">
          <x-button type="primary" class="resend" :disabled="timeLimit!=0" @click.native="sendValidation">重新获取{{timeLimit>0?('('+timeLimit+')'):''}}</x-button>
        </flexbox-item>
      </flexbox>
      <x-button type="primary" class="ok-btn" style="" @click.native="register">确定</x-button>
    </div>
  </div>
</template>
<script>
  import {XInput, XButton, XHeader, Flexbox, FlexboxItem} from 'vux'
  import {AuthApi} from '../api'
  import {CommonUtil} from '../utils'
  export default {
    components: {
      XInput,
      XButton,
      XHeader,
      Flexbox,
      FlexboxItem
    },
    methods: {
      async register () {
        if (this.code === '') {
          CommonUtil.warnToast(this, '验证码不能为空', 1000)
        }
        const res = await AuthApi.validation(this.phone, this.code)
        if (CommonUtil.isSuccess(res.code)) {
          await AuthApi.register(this.phone,this.password,this.home_id,this.code)
          CommonUtil.sucToast(this, '注册成功', 100)
        }
      },
      sendValidation () {
        AuthApi.smsSend({phone: this.phone})
        CommonUtil.sucToast(this, '发送验证码成功', 100)
        this.timeLimit = 60
        const countTimer = setInterval(() => {
          this.timeLimit--
          if (this.timeLimit <= 0) {
            clearInterval(countTimer)
          }
        }, 1000)
      }
    },
    mounted: function () {
      if (this.$route.params.phone) {
        this.phone = this.$route.params.phone
        this.password = this.$route.params.password
        this.home_name = this.$route.params.home_name
      } else {
        this.$router.push({name: 'Register'})
        return
      }
      this.sendValidation()
    },
    data () {
      return {
        timeLimit: 0,
        phone: '',
        code: '',
        password: '',
        home_name: ''
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
        padding-top: 1.4rem;
        padding-bottom:3rem;
        color: gray;
        font-size: .6rem;
        /*号码*/
        .phone {
          color: @primary-color;
        }

      }
      /*输入区域*/
      .input-area {
        width: 100%;
        .account-input {
          width:100%;
          .weiui-input;
        }
        .resend {
          .weiui-btn;
          padding: .3rem .1rem .3rem !important;
        }
      }
      /*确定按钮*/
      .ok-btn {
        .weiui-btn;
        margin-top: 0.5rem;
        padding: .2rem;
        font-weight: 500;
      }
    }
  }

</style>
