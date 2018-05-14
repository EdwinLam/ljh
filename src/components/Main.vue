<style lang="less">
  @import '../css/main.less';
  .main {
    background-color: #f8f8f8;
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
    transition: all 500ms;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
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
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="53px">
      <x-header slot="header" :title="title" :left-options="{showBack: isShowBack}" style="width:100%;position:absolute;left:0;top:0;z-index:100;"> <slot name="left"></slot>
      </x-header>
      <!--<transition :name="viewTransition" :css="!!direction">-->
        <keep-alive>
        <router-view class="router-view"></router-view>
        </keep-alive>
      <!--</transition>-->
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
        direction: state => state.app.direction,
        title: state => state.app.title,
        isShowBack: state => state.app.isShowBack,
        includedComponents: state => state.app.includedComponents
      })
    },
    components: {
      Tab, TabItem, ViewBox, XHeader, Tabbar, TabbarItem
    },
    methods: {
      onItemClick (index) {
        this.$router.push({name: this.module[index].name})
        this.$store.commit('updateHeader', {title: this.module[index].name, isShowBack: false})
        this.curTitle = this.module[index].title
      }
    },
    data () {
      return {
      }
    }
  }
</script>

