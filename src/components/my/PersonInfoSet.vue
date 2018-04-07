<style lang="less">
  @import '../../css/main.less';

  .person-info {
    height: 100%;
    .vux-tab-container,.vux-tab-warp,.vux-tab{
      height: 3.5rem !important;
    }
    .vux-tab-warp{
      padding-top:0rem !important;
    }
    .vux-tab {
      background-color: @primary-color;
      .vux-tab-item {
        font-size: 1.2rem !important;
      }
    }
    .content-container{
      .avatar {
        width: 100%;
        img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          font-size: 2.5rem;
          color: white;
        }
      }
      margin-top:.5rem;
    }
  }
</style>

<template>
  <div class="person-info">
    <tab :bar-active-color="tabColor" :active-color="tabColor" :default-color="tabColor" >
      <tab-item selected>联家</tab-item>
      <tab-item>设备</tab-item>
      <tab-item>我的</tab-item>
    </tab>
    <div class="content-container">
      <group>
        <cell :title="'头像'" :value="'点击设置'">
          <div class="avatar">
            <img :src="avatarUrl">
          </div>
        </cell>
        <cell :title="'联家场景'" :value="'点击设置'" is-link></cell>
        <cell :title="'手机号码'" :value="'+86 13824789878'" ></cell>
        <cell :title="'账号所在地'" :value="'中国'" is-link></cell>
        <cell :title="'修改密码'" is-link></cell>
      </group>
    </div>
  </div>
</template>
<script>
  import {Tab, TabItem, Group, Cell} from 'vux'
  import {Swiper} from '../common/swiper'

  export default {
    components: {
      Tab, TabItem, Swiper, Group, Cell
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
        tabColor: 'white',
        avatarUrl: 'http://placeholder.qiniudn.com/150x150/000000',
        showDescMask: false,
        swiperIndex: 0,
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

