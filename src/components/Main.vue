<style lang="less">
  @import '../css/main.less';
  .main {
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
</style>

<template>
  <div class="main">

    <view-box ref="viewBox">
      <x-header slot="header" title="首页" :left-options="{showBack: false}" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
        <slot name="left"></slot>
      </x-header>
      <router-view></router-view>
      <tabbar slot="bottom" class="tabbar-container">
        <tabbar-item>
          <i slot="icon" class="iconfont icon-home"></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
          <i slot="icon" class="iconfont icon-devices"></i>
          <span slot="label">设备</span>
        </tabbar-item>
        <tabbar-item>
          <i slot="icon" class="iconfont icon-add"></i>
          <span slot="label">新增</span>
        </tabbar-item>
        <tabbar-item >
          <i slot="icon" class="iconfont icon-message"></i>
          <span slot="label">关于</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>

  <!--<div class="main">-->
      <!--<tab :bar-active-color="tabColor" :active-color="tabColor" :default-color="tabColor" v-model="tabIndex">-->
        <!--<tab-item @on-item-click="onItemClick">联家</tab-item>-->
        <!--<tab-item @on-item-click="onItemClick">设备</tab-item>-->
        <!--<tab-item @on-item-click="onItemClick">我的</tab-item>-->
      <!--</tab>-->
      <!--<router-view></router-view>-->
    <!--</div>-->
</template>
<script>
  import {Tab, TabItem, ViewBox, XHeader, Tabbar, TabbarItem} from 'vux'

  export default {
    created () {
      this.module.forEach((item) => {
        if (item.name === this.$route.name) {
          this.tabIndex = item.value
        }
      })
    },
    components: {
      Tab, TabItem, ViewBox, XHeader, Tabbar, TabbarItem
    },
    methods: {
      onItemClick (index) {
          this.$router.push({name: this.module[index].name})
      }
    },
    data () {
      return {
        tabIndex: 0,
        isInit: true,
        module: [{name: 'Index', value: 0}, {name: 'Device', value: 1}, {name: 'PersonInfo', value: 2}],
        tabColor: 'white'
      }
    }
  }
</script>

