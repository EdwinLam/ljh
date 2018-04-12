<style lang="less">
  @import '../../css/main.less';
  .device-view {
    height: 100%;
    .vux-tab-container,.vux-tab-warp,.vux-tab{
      height: 3.5rem !important;
    }
    .vux-tab-warp{
    }
    .vux-tab {
      background-color: @primary-color;
      .vux-tab-item {
        font-size: 1.2rem !important;
      }
    }
    .swiper-container {
      .arrow-container {
        width: 100%;
        height: 100%;
        display: flex;
        position: absolute;
        z-index: 9999;
        justify-content: space-between;
        align-items: center;
        fill: #717372;
      }
    }
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
    <swiper :list="swiperItems" v-model="swiperIndex" :show-desc-mask="showDescMask" style="width:100%;" height="16rem" dots-class="ljh-dots" dots-position="center"
            class="swiper-container">
      <div class="arrow-container">
        <x-icon type="ios-arrow-left" size="60" @click="pre"></x-icon>
        <x-icon type="ios-arrow-right" size="60" @click="next"></x-icon>
      </div>
    </swiper>
    <div class="content-container">
      <group>
        <cell title="设备名称" is-link :value="'卧室/床头柜/插座'"></cell>
        <cell title="设备ID" :value="'SSSSS8888'"></cell>
        <cell title="功率" :value="'10A'" is-link></cell>
        <cell title="关于设备"  is-link></cell>
      </group>
    </div>

  </div>
</template>
<script>
  import {Tab, TabItem, XHeader, Group, Cell, XSwitch, Swiper} from 'vux'

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
      Tab, TabItem, Swiper, XHeader, Group, Cell, XSwitch
    },
    methods: {
      next () {
        this.swiperIndex = this.swiperIndex >= this.swiperItems.length - 1 ? 0 : this.swiperIndex + 1
      },
      pre () {
        this.swiperIndex = this.swiperIndex <= 0 ? this.swiperItems.length - 1 : this.swiperIndex - 1
      },
      onImgError (item, $event) {
        console.log(item, $event)
      }
    },
    data () {
      return {
        showDescMask: false,
        swiperIndex: 0,
        swiperItems: demoList,
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

