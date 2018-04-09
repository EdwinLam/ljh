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
      padding:3rem .5rem 1rem;
      .item{
        background-color: white;
        border-radius:1rem;
        .device-name{
          font-size:1rem;
          padding: .2rem .2rem;
        }
        .switch-btn{
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
            background-color: @theme-color !important;
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
              <badge text="123" class="device-name"></badge>
            </cell>
            <cell :title="'类型'" value="123"></cell>
            <x-switch title="开关状态" class="switch-btn"></x-switch>
            <cell :title="'电量(度)'" value="0"></cell>
            <datetime format="HH:mm" title="定时设置" value="20:12"></datetime>
            <x-button plain class="item-btn">读取电量</x-button>
          </group>
        </div>
      <div class="item">
        <group>
          <cell :title="'设备名称'">
            <badge text="123" class="device-name"></badge>
          </cell>
          <cell :title="'类型'" value="123"></cell>
          <x-switch title="开关状态" class="switch-btn"></x-switch>
          <cell :title="'电量(度)'" value="0"></cell>
          <datetime format="HH:mm" title="定时设置" value="20:12"></datetime>
          <x-button plain class="item-btn">读取电量</x-button>
        </group>
      </div>
    </div>
  </div>
</template>
<script>
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, Datetime} from 'vux'
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
      Swiper, Panel, DeviceList, Cell, Badge, Group, XButton, XSwitch, Datetime
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

