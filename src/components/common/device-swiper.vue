<style lang="less">
  @import '../../css/main.less';
</style>

<template>
  <swiper :list="deviceItems" v-model="swiperIndex" :show-desc-mask="showDescMask"  dots-class="ljh-dots" dots-position="center">
    <div class="arrow-container">
      <x-icon type="ios-arrow-left" size="60" @click="pre"></x-icon>
      <x-icon type="ios-arrow-right" size="60" @click="next"></x-icon>
    </div>
  </swiper>
</template>
<script>
  import {Swiper} from 'vux'
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
      Swiper
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

