<style lang="less">
  @import '../css/main.less';
  .main {
    background-color: #ebebeb;
    height: 100%;
    .tabbar-container{
      .iconfont{
        font-size: 1.5rem;
        height: 1.5rem;
        width:1.5rem;
      }
      .weui-tabbar__icon{
        width: 1.5rem;
        height: 1.5rem;
      }
    }

  }
  .router-view {
    width: 100%;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>

<template>
  <div class="main">
    <view-box ref="viewBox" body-padding-top="10%" body-padding-bottom="14%">
      <x-header slot="header" :title="title" :left-options="{showBack: false}" style="width:100%;position:absolute;left:0;top:0;z-index:100;"> <slot name="left"></slot>
      </x-header>
      <transition :name="viewTransition" :css="!!direction">
        <router-view class="router-view"></router-view>
      </transition>
      <tabbar slot="bottom" class="tabbar-container">
        <tabbar-item :link="{path:'/main/index'}" :selected="route.path === '/main/index'">
          <i slot="icon" class="iconfont icon-home"></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/main/device'}" :selected="route.path === '/main/device'">
          <i slot="icon" class="iconfont icon-devices"></i>
          <span slot="label">设备</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/main/addDevice'}" :selected="route.path === '/main/addDevice'">
          <i slot="icon" class="iconfont icon-add"></i>
          <span slot="label">新增</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/main/about'}" :selected="route.path === '/main/about'">
          <i slot="icon" class="iconfont icon-message"></i>
          <span slot="label">关于</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>
<script>
  import {Tab, TabItem, ViewBox, XHeader, Tabbar, TabbarItem} from 'vux'
  import { mapState } from 'vuex'

  export default {
    created () {

    },
    computed: {
      viewTransition () {
        if (!this.direction) return ''
        return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
      },
      ...mapState({
        route: state => state.route,
        path: state => state.route.path,
        isLoading: state => state.app.isLoading,
        direction: state => state.app.direction
      }),
      title () {
        if (this.route.path === '/main/index') return '首页'
        if (this.route.path === '/main/device') return '设备'
        if (this.route.path === '/main/addDevice') return '新增'
        if (this.route.path === '/main/about') return '关于'
      }
    },
    components: {
      Tab, TabItem, ViewBox, XHeader, Tabbar, TabbarItem
    },
    methods: {
      onItemClick (index) {
        this.$router.push({name: this.module[index].name})
        this.curTitle = this.module[index].title
      }
    },
    data () {
      return {
      }
    }
  }
</script>

