<style lang="less">
  @import '../css/main.less';
    .about{
      margin-top: 1rem;
      padding-bottom: 2rem;
      height: 100%;
      /*background-color: #fbf9fe;*/
      .vux-badge{
        background-color: @theme-color;
      }
      .card-container{
        .title{
          font-size:1rem;
          padding: .2rem .3rem;
        }
        border-radius: .4rem;
        margin:5rem 1rem 1rem;
        padding: 1rem 1rem 4rem;
      }
      .jt-btn{
        background-color: @theme-color;
      }
    }
</style>

<template>
    <div class="about">
      <card class="card-container">
        <badge text="联家汇" slot="header" class="title"></badge>
        <group slot="content">
          <img :src="ad4Url" style="width: 100%"></img>
          <cell title="智能插座app"></cell>
          <cell title="V1.0"></cell>
          <cell title="2018©联家汇智能科技"></cell>
          <x-input title="家庭描述" class="weui-vcode" :value="homeName" v-model="homeName">npm
          </x-input>
          <x-button type="primary" class="jt-btn" @click.native="updateHome">修改家庭描述</x-button>
          <divider>系统设置</divider>
          <!--<x-button type="primary" class="weiui-btn" @click.native="member">成员管理</x-button>-->
          <x-button type="primary" class="weiui-btn" @click.native="logout">登出</x-button>
        </group>
      </card>
    </div>
</template>
<script>
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput, XImg, Card, Divider } from 'vux'
  import ad4 from '@/assets/ad4.jpg'
  import {CommonUtil, AuthUtil} from '../utils'
  import { HomeApi } from '../api'

  import {DeviceList} from './common'
  export default {
    activated () {
      this.$store.commit('updateHeader', {title: '首页', isShowBack: false})
      this.homeName = AuthUtil.getUserInfo().home_name
    },
    components: {
      Swiper, Panel, DeviceList, Cell, Badge, Group, XButton, XSwitch, XInput, XImg, Card, Divider
    },
    methods: {
      async updateHome () {
        if (this.homeName === '') {
          CommonUtil.warnToast(this, '家庭描述不能为空')
          return
        }
        await HomeApi.update({home_id: this.userInfo.home_id, name: this.homeName})
        this.$store.commit('updateHomeName', {home_name: this.homeName})
        CommonUtil.sucToast(this, '更新成功', 1000)
      },
      async logout () {
        this.$store.commit('logout')
        this.$router.push({name: 'Login'})
        CommonUtil.sucToast(this, '登出成功', 1000)
      },
      member () {
        this.$router.push({name: 'Member'})
      }
    },
    computed: {
      userInfo: () => AuthUtil.getUserInfo()
    },
    data () {
      return {
        homeName: '',
        ad4Url: ad4
      }
    }
  }
</script>

