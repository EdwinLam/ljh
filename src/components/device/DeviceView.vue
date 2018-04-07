<style lang="less">
  @import '../../css/main.less';
  .device-view {
    height: 100%;
    .content-container{
      .weui-switch:checked {
        border-color: #04BE02;
        background-color: #04BE02;
      }
      .weui-switch,.weui-switch:before,.weui-switch:after{
        border-radius: .2rem;
      }
      .weui-switch{
        text-align:center;
        background-color: #EEEEF0 !important;
        width:6rem !important;
        height:2rem !important;
      }
      .weui-switch:before{
        color:#B7B7B5 !important;
        content:'OFF' !important;
        text-indent: 3.2rem;
        font-size: 1.2rem;
        line-height: 2rem;

        transform:none !important;
        width:3rem !important;
        background-color: #EEEEF0 !important;
      }
      .weui-switch:after{
        width:3rem !important;
        background-color: #888888 !important;

      }
      .weui-switch:checked:after{
        transform: translateX(3rem);
      }
      .weui-switch:checked{
        background-color: #EEEEF0 !important;
        border-color:#EEEEF0 !important;
      }
      .weui-switch:checked:before{
        color:#B7B7B5 !important;
        content:'ON' !important;
        text-indent: 0rem;
      }
    }
  }
</style>

<template>
  <div class="device-view">
    <x-header title="设备编辑"></x-header>
    <DeviceSwiper :list="testItems"></DeviceSwiper>

    <div class="content-container">
      <group>
        <cell :title="'设备名称'" is-link :value="'卧室/床头柜/插座'"></cell>
        <x-switch title="设备状态"></x-switch>
        <cell :title="'电量(度)'" :value="'20'"></cell>
        <cell :title="'设备编辑'" is-link></cell>
        <cell :title="'使用场景'" :value="'卧室'" is-link></cell>
      </group>
    </div>

  </div>
</template>
<script>
  import {Tab, TabItem, XHeader, Group, Cell, XSwitch} from 'vux'
  import {DeviceSwiper} from '../common'

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
      Tab, TabItem, XHeader, Group, Cell, XSwitch, DeviceSwiper
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

