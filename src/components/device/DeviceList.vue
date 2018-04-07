<style lang="less">
  @import '../../css/main.less';
  .device-list {
    height: 88%;
    display: -webkit-box;
    webkit-box-orient: vertical;
    flex-direction: column ;

  }
</style>

<template>
  <div class="device-list">
    <DeviceSwiper :list="testItems"></DeviceSwiper>
    <DeviceList :list="dataItems" :isShowBtn="true"></DeviceList>
  </div>
</template>
<script>
  import {Tab, TabItem} from 'vux'
  import {DeviceList, DeviceSwiper} from '../common'

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
      Tab, TabItem, DeviceList, DeviceSwiper
    },
    methods: {
    },
    data () {
      return {
        testItems: demoList,
        tabColor: 'white',
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

