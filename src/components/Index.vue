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
      <DeviceSwiper :list="testItems"></DeviceSwiper>
      <SceneList :list="dataItems"></SceneList>
      <DeviceList :list="dataItems"></DeviceList>
      <OperateMenu :list="operateMenuItems"></OperateMenu>
    </div>
</template>
<script>
  import {Tab, TabItem} from 'vux'
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
      Tab, TabItem, SceneList, DeviceList, OperateMenu, DeviceSwiper
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

