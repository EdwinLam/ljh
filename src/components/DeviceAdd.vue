<style lang="less">
  @import '../css/main.less';
  .device {
    height: 100%;
    .vux-badge{
      background-color: @theme-color;
    }
    .main-container{
      height: 100%;
      background-color: #ebebeb;
      padding-top: 2rem;
      padding:3rem .5rem 1rem;
      .item{
        background-color: white;
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
  }
</style>

<template>
  <div class="device">
    <div class="main-container">
        <div class="item">
          <group>
            <cell :title="'设备名称'">
              <badge text="123"></badge>
            </cell>
            <cell :title="'类型'" value="123"></cell>
            <cell :title="'开关状态'"></cell>
            <cell :title="'电量(度)'" value="0"></cell>
            <x-switch title="设置开关" value="OFF"></x-switch>
            <x-button plain class="item-btn">读取电量</x-button>
            <x-button plain class="item-btn">定时设置</x-button>
          </group>
        </div>
      <div class="item">
        <group>
          <cell :title="'设备名称'">
            <badge text="123"></badge>
          </cell>
          <cell :title="'开关状态'"></cell>
          <cell :title="'类型'"></cell>
          <cell :title="'电量(度)'"></cell>
          <x-switch title="设置开关" value="OFF"></x-switch>
          <x-button plain class="item-btn">读取电量</x-button>
          <x-button plain class="item-btn">定时设置</x-button>
        </group>
      </div>
    </div>
  </div>
</template>
<script>
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch} from 'vux'
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
      Swiper, Panel, DeviceList, Cell, Badge, Group, XButton, XSwitch
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

