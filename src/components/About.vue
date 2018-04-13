<style lang="less">
  @import '../css/main.less';
    .about{
      margin-top: 1rem;
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
        padding: 1rem 1rem 1rem;
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
          <x-button type="primary" class="weiui-btn" @click.native="logout">登出</x-button>
        </group>
      </card>
    </div>
</template>
<script>
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput, XImg, Card} from 'vux'
  import ad4 from '@/assets/ad4.jpg'
  import {CommonUtil} from '../utils'

  import {DeviceList} from './common'
  export default {
    activated () {
      this.$store.commit('updateHeader', {title: '首页', isShowBack: false})
    },
    components: {
      Swiper, Panel, DeviceList, Cell, Badge, Group, XButton, XSwitch, XInput, XImg, Card
    },
    methods: {
      async logout () {
        this.$store.commit('logout')
        this.$router.push({name: 'Login'})
        CommonUtil.sucToast(this, '登出成功', 1000)
      }
    },
    data () {
      return {
        ad4Url: ad4
      }
    }
  }
</script>

