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
          <x-input  placeholder="手机号码" class="input-item" required v-model="phone"></x-input>
          <x-input  placeholder="用户名称" class="input-item" required v-model="usr_name"></x-input>
          <x-input  placeholder="家庭名称" class="input-item" required v-model="home_name"></x-input>
          <x-input  placeholder="密码" class="input-item" required v-model="password" type="password"></x-input>
        </group>
        <x-button type="primary" class="next-step-btn" @click.native="register">注册</x-button>
        <!--<div class="message-tip">注册即同意<span class="user-permission">用户协议与隐私条款</span></div>-->
      </div>

    </div>
  </div>
</template>
<script>
  import {XInput, XButton, XHeader, Group} from 'vux'
  import {CommonUtil} from '../utils'
  import {AuthApi} from '../api'

  export default {
    components: {
      XInput,
      XButton,
      XHeader,
      Group
    },
    methods: {
      async register () {
        if (this.usr_name === '') {
          CommonUtil.warnToast(this, '用户名不能为空', 1000)
          return
        }
        if (this.phone === '') {
          CommonUtil.warnToast(this, '手机号不能为空', 1000)
          return
        }
        if (this.home_name === '') {
          CommonUtil.warnToast(this, '家庭名称不能为空', 1000)
          return
        }
        if (this.password === '') {
          CommonUtil.warnToast(this, '密码不能为空', 1000)
          return
        }
        CommonUtil.openLoading()
        const res = await AuthApi.register({phone: this.phone, password: this.password, home_name: this.home_name, usr_name: this.usr_name})
        CommonUtil.closeLoading()
        if (CommonUtil.isSuccess(res.code)) {
          CommonUtil.sucToast(this, '注册成功', 1000)
          this.$router.push({name: 'Login'})
        } else {
          CommonUtil.warnToast(this, res.msg, 1000)
        }
      },
      nextStep () {
        if (!this.phone) {
          CommonUtil.warnToast(this, '手机不能为空', 1000)
        }
        this.$router.push({name: 'Verification', params: {phone: this.phone, home_name: this.home_name, password: this.password}})
      }
    },
    mounted: function () {
    },
    data () {
      return {
        usr_name: '',
        phone: '',
        home_name: '',
        password: ''
      }
    }
  }
</script>
