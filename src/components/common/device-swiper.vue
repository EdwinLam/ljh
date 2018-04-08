<style lang="less">
  @import '../../css/main.less';
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

</style>

<template>
  <swiper height="10rem" :list="deviceItems" v-model="swiperIndex" :show-desc-mask="showDescMask"  dots-class="ljh-dots" dots-position="center">
    <div class="arrow-container">
      <x-icon type="ios-arrow-left" size="60" @click="pre"></x-icon>
      <x-icon type="ios-arrow-right" size="60" @click="next"></x-icon>
    </div>
  </swiper>
</template>
<script>
  import {Flexbox, FlexboxItem} from 'vux'
  import {Swiper} from './swiper'
  export default {
    name: 'device-swiper',
    props: {
      list: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      Flexbox, FlexboxItem, Swiper
    },
    methods: {
      next () {
        this.swiperIndex = this.swiperIndex >= this.deviceItems.length - 1 ? 0 : this.swiperIndex + 1
      },
      pre () {
        this.swiperIndex = this.swiperIndex <= 0 ? this.deviceItems.length - 1 : this.swiperIndex - 1
      },
      initItems () {
        this.deviceItems = this.list
      }
    },
    mounted () {
      this.initItems()
    },
    data () {
      return {
        showDescMask: false,
        swiperIndex: 0,
        deviceItems: []
      }
    }
  }
</script>

