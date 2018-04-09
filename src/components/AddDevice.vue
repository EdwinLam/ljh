<style lang="less">
  @import '../css/main.less';
  .device-add {
    height: 100%;
    .vux-badge{
      background-color: @theme-color;
    }
    .main-container{
      height: 100%;
      background-color: #ebebeb;
      padding:3rem .5rem 1rem;
      border-radius: .1rem;
      box-shadow: .1rem .075rem 1.5rem @shadow-color;
      .item-btn{
        margin-top: 0rem;
        border-radius: 0px;
        border: none;
        border-top:1px solid #D9D9D9;
      }
    }
  }
</style>

<template>
  <div class="device-add">
    <div class="main-container">
          <group>
            <x-input title="SSID"></x-input>
            <x-input title="用户名"></x-input>
            <x-input title="密码"></x-input>
            <x-input title="设备名称"></x-input>
            <cell title="设备id" value="123"></cell>
            <cell title="设备类型"></cell>
            <cell title="设备描述" value="0"></cell>
            <x-button plain class="item-btn">刷新网络</x-button>
            <x-button plain class="item-btn">配置设备</x-button>
            <x-button plain class="item-btn">加入我的设备</x-button>
          </group>
        </div>
  </div>
</template>
<script>
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput} from 'vux'
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
      Swiper, Panel, DeviceList, Cell, Badge, Group, XButton, XSwitch, XInput
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

