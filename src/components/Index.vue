<style lang="less">
  @import '../css/main.less';
  .index {
    height: 100%;
    .main-container {
      display: -webkit-box;
      webkit-box-orient: vertical;
      flex-direction: column ;
      height: 95%;
      .vux-tab-warp, .vux-tab {
        height: 3.5rem !important;
      }
      .vux-tab-warp {
        padding-top: 0rem !important;
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
      .scene-container {
        padding-left: .3rem;
        padding-right: .3rem;
        margin-top: 2rem;
        display: flex;
        .item {
          text-align: center;
          flex: 0 0 100/5%;
          .title {
            color: @support-color;
            text-align: center;
            font-size: .8rem;
          }
          .icon {
            margin: auto;
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background-color: #2BA6E1;
            text-align: center;
            .iconfont {
              border-radius: 50%;
              font-size: 2.5rem;
              color: white;
            }
          }
        }
      }
      .operate-container {
        padding-top:1.2rem;
        width: 100%;
        .operate-menu {
          margin-left: auto;
          margin-right: auto;
          width: 10rem;
          border: .075rem solid @shadow-color;
          box-shadow: .1rem .075rem 1.5rem @shadow-color;
          border-radius: 10px;
          padding: 10px 20px 10px;
          background-color: white;
          .op-item {
            line-height: 1;
            text-align: center;
            .icon {
              font-weight: bold;
              color: #2BA6E1;
              font-size: 24px !important;
            }
            .desc {
              font-weight: bolder;
              color: #9C9C9C !important;
              font-size: 14px;
            }
          }

        }
      }
      .list {
        padding-left:.6rem;
        padding-right:.6rem;
        position:relative;
        flex:1;
        overflow:auto;
        -webkit-overflow-scrolling:touch;
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
            flex-shrink: 0;
            .circle-icon {
              line-height: 3.7rem;
              .iconfont {
                color: @primary-color;
                font-size: 1.8rem;
                font-weight: bold;
              }
              background-color: #F7F7F7 !important;
            }
          }

        }
      }

    }

  }
</style>

<template>
  <div class="index">
    <div class="main-container">
      <tab :bar-active-color="tabColor" :active-color="tabColor" :default-color="tabColor">
        <tab-item selected>联家</tab-item>
        <tab-item>设备</tab-item>
        <tab-item>我的</tab-item>
      </tab>
      <swiper :list="swiperItems" v-model="swiperIndex" :show-desc-mask="showDescMask" style="width:100%;"
              height="16rem" dots-class="ljh-dots" dots-position="center"
              class="swiper-container">
        <div class="arrow-container">
          <x-icon type="ios-arrow-left" size="60" @click="pre"></x-icon>
          <x-icon type="ios-arrow-right" size="60" @click="next"></x-icon>
        </div>
      </swiper>
      <div class="scene-container">
        <div class="item" v-for="(item, index) in dataItems">
          <div class="icon">
            <i :class="['iconfont',item.icon]"></i>
          </div>
          <div class="title">
            {{item.name}}
          </div>
        </div>
      </div>
      <div class="list">
        <div class="items" v-for="(index,el) in dataItems">
          <div class="image-area">
            <img src="../assets/tmp.jpg">
          </div>
          <div class="content-area">
            <div class="sceneName ">卧室/床头/插座222222222222</div>
            <div class="detail">
              <p class="typeName">类型: 10A</p>
              <p class="idName">设备ID: SSSSSSSSSS</p>
              <p class="statusName">状态: NO</p>
            </div>
          </div>
          <div class="btn-area">
            <div class="circle-icon">
              <i class="iconfont icon-add"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="operate-container">
        <div class="operate-menu">
          <flexbox :gutter="0" align="flex-start">
            <flexbox-item class="op-item">
              <i class="iconfont icon-add icon"></i>
              <div class="desc">添加设备</div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {Tab, TabItem, Flexbox, FlexboxItem} from 'vux'
  import {Swiper} from './common/swiper'

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
      Tab, TabItem, Swiper, Flexbox, FlexboxItem
    },
    methods: {
      next() {
        this.swiperIndex = this.swiperIndex >= this.swiperItems.length - 1 ? 0 : this.swiperIndex + 1
      },
      pre() {
        this.swiperIndex = this.swiperIndex <= 0 ? this.swiperItems.length - 1 : this.swiperIndex - 1
      },
      onImgError(item, $event) {
        console.log(item, $event)
      }
    },
    data() {
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

