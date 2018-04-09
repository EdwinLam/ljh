<style lang="less">
  @import '../css/main.less';

  .pupup-btn{
    background-color:@theme-color !important;
  }
  .device {

    .vux-badge{
      background-color: @theme-color;
    }
    padding:0rem .5rem 0rem;
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
</style>

<template>
  <div class="device">
        <div class="item" v-for="el in 20">
          <group>
            <cell :title="'设备名称'">
              <badge text="123" class="device-name"></badge>
            </cell>
            <cell :title="'类型'" value="123"></cell>
            <x-switch title="开关状态" class="switch-btn"></x-switch>
            <cell :title="'电量(度)'" value="0"></cell>
            <cell :title="'定时设置'" >
              <span @click="openTimeSet">11:00-22:00</span>
            </cell>
            <x-button plain class="item-btn">读取电量</x-button>
          </group>
        </div>

    <div v-transfer-dom>
      <popup v-model="isShowSetTime" height="270px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
          <group>

            <datetime format="HH:mm" title="开始时间" value="20:12">
              <i class="iconfont icon-delete" slot="title" @click.stop>&nbsp;开始时间</i>
            </datetime>
            <datetime format="HH:mm" title="结束时间" value="20:12">
              <i class="iconfont icon-delete" slot="title">&nbsp;开始时间</i>
            </datetime>
          </group>
          <div style="padding:20px 15px;">
            <x-button type="primary" class="pupup-btn">确认</x-button>
            <x-button @click.native="isShowSetTime = false">取消</x-button>
          </div>
        </div>
      </popup>
    </div>
   </div>
</template>
<script>
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, Datetime, Popup, TransferDom} from 'vux'
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
    directives: {
      TransferDom
    },
    components: {
      Swiper, Panel, DeviceList, Cell, Badge, Group, XButton, XSwitch, Datetime, Popup
    },
    methods: {
      openTimeSet () {
        this.isShowSetTime = true
      }
    },
    data () {
      return {
        isShowSetTime: false,
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

