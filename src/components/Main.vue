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
</style>

<template>
  <div class="main">
    <view-box ref="viewBox" body-padding-top="10%" body-padding-bottom="14%">
      <x-header slot="header" :title="curTitle" :left-options="{showBack: false}" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
        <slot name="left"></slot>
      </x-header>
      <router-view></router-view>
      <tabbar slot="bottom" class="tabbar-container" v-model="tabIndex">
        <tabbar-item @on-item-click="onItemClick">
          <i slot="icon" class="iconfont icon-home"></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item @on-item-click="onItemClick">
          <i slot="icon" class="iconfont icon-devices"></i>
          <span slot="label">设备</span>
        </tabbar-item>
        <tabbar-item @on-item-click="onItemClick">
          <i slot="icon" class="iconfont icon-add"></i>
          <span slot="label">新增</span>
        </tabbar-item>
        <tabbar-item @on-item-click="onItemClick">
          <i slot="icon" class="iconfont icon-message"></i>
          <span slot="label">关于</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>
<script>
  import {Tab, TabItem, ViewBox, XHeader, Tabbar, TabbarItem} from 'vux'

  export default {
    created () {
      this.module.forEach((item) => {
        if (item.name === this.$route.name) {
          this.tabIndex = item.value
          this.curTitle = item.title
        }
      })
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
        curTitle: '',
        tabIndex: 0,
        module: [
          {name: 'Index', title: '首页', value: 0, url: '/main/index'},
          {name: 'Device', title: '设备', value: 1, url: '/main/device'},
          {name: 'AddDevice', title: '增加设备', value: 2, url: '/main/addDevice'},
          {name: 'About', title: '关于', value: 3, url: '/main/about'}
        ]
      }
    }
  }
</script>

