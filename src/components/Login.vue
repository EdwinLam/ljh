<template>
  <div class="login">
    <div class="main-container">
      <flexbox :gutter="0" orient="vertical" :justify="'center'" style="height: 100%">
        <flexbox-item :span="6">

          <div class="logo-container">
            <img class="logo" src="../assets/logo.png">
            <h1></h1>
          </div>

          <group class="form-container">
            <x-input title="手机" placeholder="请输入手机" class="input-item" required v-model="phone">
              <i class="iconfont icon-wodejuhuasuan btn-icon" slot="label"></i>
            </x-input>
            <x-input title="密码" placeholder="请输入密码" type="password" class="input-item"  v-model="password" required>
              <i class="iconfont icon-suo btn-icon" slot="label"></i>
            </x-input>
            <x-button type="primary" class="login-btn" @click.native="login">登&nbsp;录</x-button>
            <div class="register-btn" @click="register">注册</div>
          </group>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>
  import {XInput, XButton, Group, Flexbox, FlexboxItem} from 'vux'
  import {AuthApi} from '../api'
  import {CommonUtil, AuthUtil} from '../utils'

  export default {
    components: {
      XInput,
      XButton,
      Group,
      Flexbox,
      FlexboxItem
    },
    methods: {
      async login () {
        if (!this.phone || !this.password) {
          CommonUtil.warnToast(this, '手机或者密码不能为空', 1000)
          return
        }
        CommonUtil.openLoading()
        const res = await AuthApi.login({phone: this.phone, password: this.password})
        CommonUtil.closeLoading()
        if (CommonUtil.isSuccess(res.code)) {
          this.$store.commit('updateUser', {
            phone: this.phone,
            password: this.password,
            data: res.data
          })
          CommonUtil.sucToast(this, '登录成功', 1000)
          await this.$store.dispatch('getDevices', {home_id: res.data.home_id})
          this.$router.push({name: 'Index'})
        } else {
          CommonUtil.warnToast(this, res.msg)
        }
      },
      register () {
        this.$router.push({name: 'Register'})
      }
    },
    async mounted () {

    },
    data () {
      return {
        phone: '',
        password: ''
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
          width: 150px;
        }
      }
      /*表单部分*/
      .form-container {
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
