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
        </group>
      </card>
    </div>
</template>
<script>
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput, XImg, Card} from 'vux'
  import ad4 from '@/assets/ad4.jpg'

  import {DeviceList} from './common'
  const imgList = [
    'http://placeholder.qiniudn.com/800x300/ffffff',
    'http://placeholder.qiniudn.com/800x300/ffffff',
    'http://placeholder.qiniudn.com/800x300/ffffff',
    'http://placeholder.qiniudn.com/800x300/ffffff'
  ]

  const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }))

  export default {
    mounted () {
      this.$store.commit('updateHeader', {title: '关于', isShowBack: false})
    },
    components: {
      Swiper, Panel, DeviceList, Cell, Badge, Group, XButton, XSwitch, XInput, XImg, Card
    },
    methods: {
    },
    data () {
      return {
        ad4Url: ad4,
        testUrl: 'http://placeholder.qiniudn.com/1024x768/ffffff',
        testItems: demoList,
        dataItems: [
          {id: 1, name: '客厅 ', icon: 'icon-sofa2'},
          {id: 2, name: '餐厅 ', icon: 'icon-canzhuo'},
          {id: 3, name: '厨房 ', icon: 'icon-chufangwujinanzhuang'},
          {id: 4, name: '洗手间 ', icon: 'icon-hekriconqingjingyushicesuo'},
          {id: 5, name: '更多 ', icon: 'icon-star'}
        ]
      }
    }
  }
</script>

