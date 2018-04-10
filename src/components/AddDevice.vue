<style lang="less">
  @import '../css/main.less';
  .device-add {
    .main-container{
      background-color: white;
      padding:.5rem .5rem .5rem;
      margin:1rem .5rem 1rem;
      border-radius: .1rem;
      box-shadow: .1rem .1rem .1rem @shadow-color;
      .vux-badge {
        background-color: @theme-color;
      }

      border-radius: .1rem;

      .btn-icon {
        margin-right: 1rem;
      }
      .textBtn{
        width: 100%;
        text-align: center;
        font-size: 1.1rem;
        font-weight: 400;
      }
    }

  }
</style>

<template>
  <div class="device-add">
    <div class="main-container">
    <group>
      <x-input title="SSID" placeholder="请输入无线网络SSID">
        <i class="iconfont icon-wifi btn-icon" slot="label">&nbsp;SSID</i>
      </x-input>
      <x-input type="password" title="密码" placeholder="请输入密码">
        <i class="iconfont icon-suo btn-icon" slot="label">&nbsp;密码</i>
      </x-input>
      <x-input title="设备名称" placeholder="请输入设备名称">
        <i class="iconfont icon-ic_devices_other" slot="label">&nbsp;设备名称&nbsp;</i>
      </x-input>
      <cell title="设备id" value="123"></cell>
      <cell title="设备类型"></cell>
      <cell title="设备描述" value="0"></cell>
      <cell class="vux-tap-active weui-cell_acces">
        <div slot="child" class="textBtn">刷新网络</div>
      </cell>
      <cell class="vux-tap-active weui-cell_acces">
        <div slot="child" class="textBtn">配置网络</div>
      </cell>
      <cell class="vux-tap-active weui-cell_acces">
        <div slot="child" class="textBtn">加入我的设备</div>
      </cell>
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
    methods: {},
    data() {
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

