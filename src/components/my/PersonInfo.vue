<style lang="less">
  @import '../../css/main.less';

  .person-info {
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
    .info-container {
      text-align: center;
      font-size: 1rem;
      color: @support-color;
      .phone{
        font-size: 1.2rem;
      }
      .set{
        margin-top: -.3rem;
        font-size: .8rem;
      }
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
    }
    .content-container{
      margin-top:.5rem;
    }
  }
</style>

<template>
  <div class="person-info">
    <div class="info-container">
        <div class="avatar">
          <img :src="avatarUrl">
        </div>
        <div class="phone">138****9780</div>
        <div class="set">点击设置</div>
    </div>
    <div class="content-container">
      <div class="content-container">
        <group>
          <cell :title="'联家场景'" is-link></cell>
          <cell :title="'我的设备'" is-link></cell>
          <cell :title="'消息中心'" is-link></cell>
          <cell :title="'意见反馈'" is-link></cell>
          <cell :title="'关于我们'" is-link></cell>
        </group>
      </div>
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
    methods: {},
    data () {
      return {
        avatarUrl: 'http://placeholder.qiniudn.com/150x150/000000'
      }
    }
  }
</script>

