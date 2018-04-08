<style lang="less">
  @import '../css/main.less';
    .index {
      display: -webkit-box;
      webkit-box-orient: vertical;
      flex-direction: column ;
      height: 88%;
    }
</style>

<template>
    <div class="index">
      <device-swiper :list="testItems"></device-swiper>
      <scene-list :list="dataItems"></scene-list>
      <device-list :list="dataItems"></device-list>
      <operate-menu :list="operateMenuItems"></operate-menu>
    </div>
</template>
<script>
  import {SceneList, DeviceList, OperateMenu, DeviceSwiper} from './common'

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
      SceneList, DeviceList, OperateMenu, DeviceSwiper
    },
    methods: {
    },
    data () {
      return {
        tabColor: 'white',
        operateMenuItems: [
          {name: '添加设备'}
        ],
        testItems: demoList,
        dataItems: [
          {id: 1, name: '客厅 ', icon: 'icon-sofa2'},
          {id: 2, name: '餐厅 ', icon: 'icon-canzhuo'},
          {id: 3, name: '厨房 ', icon: 'icon-chufangwujinanzhuang'},
          {id: 4, name: '洗手间 ', icon: 'icon-hekriconqingjingyushicesuo'},
          {id: 5, name: '自定义场景 ', icon: 'icon-star'}
        ]
      }
    }
  }
</script>

