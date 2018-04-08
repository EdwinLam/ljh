<style lang="less">
  @import '../css/main.less';
  .main {
    height: 100%;
  }
</style>

<template>
  <div class="main">
      <tab :bar-active-color="tabColor" :active-color="tabColor" :default-color="tabColor" v-model="tabIndex">
        <tab-item @on-item-click="onItemClick">联家</tab-item>
        <tab-item @on-item-click="onItemClick">设备</tab-item>
        <tab-item @on-item-click="onItemClick">我的</tab-item>
      </tab>
      <router-view></router-view>
    </div>
</template>
<script>
  import {Tab, TabItem} from 'vux'

  export default {
    created () {
      this.module.forEach((item) => {
        if (item.name === this.$route.name) {
          this.tabIndex = item.value
        }
      })
      console.log(this.tabIndex)
    },
    components: {
      Tab, TabItem
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

