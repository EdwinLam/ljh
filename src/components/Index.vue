<style lang="less">
  @import '../css/main.less';
    .index {
      /*幻灯片设置*/
      .ljh-dots {
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

    }
</style>

<template>
  <div>
    <div class="index">

      <swiper :list="testItems" :height="'15rem'" :show-desc-mask="false"  dots-class="ljh-dots" dots-position="center"></swiper>

       <device-list :list="dataItems"></device-list>

      <!--<device-list :list="dataItems"></device-list>-->
      <!--<operate-menu :list="operateMenuItems"></operate-menu>-->
    </div>
  </div>
</template>
<script>
  import {Swiper, Panel, Badge} from 'vux'
  import {DeviceList} from './common'
  import ad3 from '@/assets/ad3.jpg'

  import p1 from '@/assets/product/p1.jpg'
  import p2 from '@/assets/product/p2.jpg'
  import p3 from '@/assets/product/p3.jpg'
  import p4 from '@/assets/product/p4.jpg'
  import p5 from '@/assets/product/p5.jpg'
  import p6 from '@/assets/product/p5.jpg'

  const imgList = [
    ad3,
    p2,
    p3,
    p4,
    p5,
    p6
  ]

  const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }))

  export default {
    components: {
      Swiper, Panel, DeviceList, Badge
    },
    mounted () {
      this.$store.commit('updateHeader', {title: '首页', isShowBack: false})
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

