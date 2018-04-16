<style lang="less">
  @import '../css/main.less';
  .ad {
    position: relative;
    .ljh-dots {
      bottom: 5rem !important;
      z-index: 99;
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
    .ty-btn{
      .weiui-btn;
      position:absolute;
      bottom: 8rem;
      z-index:100;
      width: 10rem;
      left: 50%;
      transform: translate(-50%);
    }
    background-color: #EBF1F1;
    height: 100%;
    .swiperItem{
      .vux-swiper{
        height: 100% !important;
      }
      height: 100%;
      position:absolute;
      top:0;
      bottom: 0;
      left:0;
      right:0;
    }
    .main-container {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .tip-icon{
      color: @support-color;
      position:fixed;
      top: 2%;
      right: 3%;
      text-align: center;
      .time{
        width: 2.5rem;
        height: 2.5rem;
        line-height: 2.5rem;
        border: 1px @support-color solid;
        border-radius: 50%;
      }
      .title{
        margin-top: -.1rem;
        text-align: center;
      }
    }
  }
</style>

<template>
  <div class="ad">
    <div class="main-container">
      <swiper  v-show="!isAdMode" v-model="swiperIndex" :list="swiperItems" :show-desc-mask="false"  dots-class="ljh-dots" dots-position="center" class="swiperItem">
        <x-button type="primary" class="ty-btn" @click.native="goToIndex" v-show="swiperIndex===swiperItems.length-1">立刻体验</x-button>
      </swiper>
      <div v-show="isAdMode"><img :src="AdUrl" style="width:100%"/></div>

    </div>
    <div class="tip-icon" @click="goToIndex" v-show="isAdMode">
      <div class="time">{{i}}s</div>
      <div class="title" >跳过</div>
    </div>
  </div>
</template>
<script>
  import {XInput, XButton, Group, Swiper} from 'vux'
  import openImage from '../assets/images/open.jpg'
  import open2 from '../assets/images/open2.jpg'
  import open3 from '../assets/images/open3.jpg'
  import open4 from '../assets/images/open4.jpg'
  import {StorageUtil} from '../utils'
  const imgList = [open2, open3, open4]
  const itemList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }))
  let enterTimer

  export default {
    components: {
      XInput,
      XButton,
      Group,
      Swiper
    },
    mounted: function () {
      const isInitFinish = StorageUtil.getStorage('isInitFinish')
      if (!isInitFinish) {
        StorageUtil.setStorage('isInitFinish', true)
        this.isAdMode = false
      }
      if (this.isAdMode) {
        this.i = 3
        enterTimer = window.setInterval(() => {
          if (--this.i === 0) {
            if (enterTimer) { window.clearInterval(enterTimer) }
            this.goToIndex()
          }
        }, 1000)
      }
    },
    methods: {
      goToIndex: function () {
        if (enterTimer) { window.clearInterval(enterTimer) }
        this.$router.push({name: 'Index'})
      }
    },
    data () {
      return {
        isAdMode: true,
        swiperIndex: 0,
        swiperItems: itemList,
        i: 3,
        AdUrl: openImage
      }
    }
  }
</script>

