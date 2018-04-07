<style lang="less">
  @import '../../css/main.less';

  .ljh-dots {
      z-index: 9999;
      a{
        margin-left:.7rem !important;
      }
      .vux-icon-dot.active{
        background-color: #717372 !important;
      }
      .vux-icon-dot {
        width: .65rem !important;
        height: .65rem !important;
        border-radius: 1rem !important;
        background-color: #DBDBDB !important;
      }
  }

  .device-list {
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
    .device-container{
      padding-left:.6rem;
      padding-right:.6rem;
      .items:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: .1rem solid #D9D9D9;
        color: #D9D9D9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);

      }
      .items {
        padding-top: .5rem;
        position: relative;
        margin-top: .5rem;
        align-items: center;
        display: flex;
        .image-area {
          flex-shrink: 0;
          border: .09rem solid #EBEBEB;
          overflow: hidden;
          img {
            width: 5rem;
          }
          width: 5rem;
          height: 5rem;
          margin-right: 0.75rem;
        }
        .content-area {
          flex-shrink: 0;
          align-self: stretch;
          color: @support-color;
          flex: 1;
          .sceneName {
            color: gray;
            white-space: nowrap;
            width: 9rem;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 1rem;
          }
          .detail {
            font-size: .75rem;
          }
        }
        .btn-area {
          position:relative;
          flex-shrink: 0;
        }
        .btn-area:after{
          content: " ";
          display: inline-block;
          height: 1.8rem;
          width: 1.8rem;
          border-width: 0.12rem 0.12rem 0 0;
          border-color: #C8C8CD;
          border-style: solid;
          -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
          position: relative;
          top: -0.12rem;
          position: absolute;
          top: 50%;
          margin-top: -1rem;
          right: 1rem;
        }

      }
    }

  }
</style>

<template>
  <div class="device-list">
    <tab :bar-active-color="tabColor" :active-color="tabColor" :default-color="tabColor" >
      <tab-item selected>联家</tab-item>
      <tab-item>设备</tab-item>
      <tab-item>我的</tab-item>
    </tab>
    <swiper :list="swiperItems" v-model="swiperIndex" :show-desc-mask="showDescMask" style="width:100%;" height="16rem" dots-class="ljh-dots" dots-position="center"
            class="swiper-container">
      <div class="arrow-container">
        <x-icon type="ios-arrow-left" size="60" @click="pre"></x-icon>
        <x-icon type="ios-arrow-right" size="60" @click="next"></x-icon>
      </div>
    </swiper>
    <div class="device-container">
      <div class="items" v-for="(index,el) in [0,1,2,3,4,5,6]">
        <div class="image-area">
          <img src="../../assets/tmp.jpg">
        </div>
        <div class="content-area">
          <div class="sceneName ">卧室/床头/插座222222222222</div>
          <div class="detail">
            <p class="typeName">类型: 10A</p>
            <p class="idName">设备ID: SSSSSSSSSS</p>
            <p class="statusName">状态: NO</p>
          </div>
        </div>
        <span class="btn-area">
        </span>
      </div>

    </div>
  </div>
</template>
<script>
  import {Tab, TabItem} from 'vux'
  import {Swiper} from '../common/swiper'

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
      Tab, TabItem, Swiper
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

