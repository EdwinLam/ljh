<style lang="less">
  @import '../css/main.less';
  .main {
    height: 100%;
  }
</style>

<template>
  <div class="main">
      <tab :bar-active-color="tabColor" :active-color="tabColor" :default-color="tabColor" @on-index-change="onItemClick" v-model="tabIndex">
        <tab-item selected>联家</tab-item>
        <tab-item>设备</tab-item>
        <tab-item>我的</tab-item>
      </tab>
      <router-view></router-view>
    </div>
</template>
<script>
  import {Tab, TabItem} from 'vux'

  export default {
    created () {

      setTimeout(() => {
        this.module.forEach((item) => {
          if (item.name === this.$route.name) {
            this.tabIndex = item.value
          }
        })
        this.isInit = false
      }, 100)
    },
    components: {
      Tab, TabItem
    },
    methods: {
      onItemClick (index) {
        if (!this.isInit) {
          this.$router.push({name: this.module[index].name})
        }
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

