<style lang="less">
  @import '../css/main.less';
    .index {
      /*幻灯片设置*/
      .ljh-dots {
        z-index: 99;
        a{
          margin-left:.7rem !important;
        }
        .vux-icon-dot.active{
          background-color: #717372 !important;
        }
        .vux-icon-dot {
          width: .65rem !important;
          height: .65rem !important;
          border-radius: 1rem !important;
          background-color: #DBDBDB !important;
        }
      }

    }
</style>

<template>
    <div class="index">

      <swiper :list="testItems" :height="'15rem'" :show-desc-mask="false"  dots-class="ljh-dots" dots-position="center"></swiper>

       <device-list :list="dataItems"></device-list>

      <!--<device-list :list="dataItems"></device-list>-->
      <!--<operate-menu :list="operateMenuItems"></operate-menu>-->
    </div>
</template>
<script>
  import {Swiper, Panel, Badge} from 'vux'
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
    components: {
      Swiper, Panel, DeviceList, Badge
    },
    methods: {
    },
    data () {
      return {
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

