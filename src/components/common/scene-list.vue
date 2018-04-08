<style lang="less">
  @import '../../css/main.less';
  .scene-container {
    padding-left: .3rem;
    padding-right: .3rem;
    display: flex;
    .item {
      text-align: center;
      flex: 0 0 100/5%;
      .title {
        color: @support-color;
        text-align: center;
        font-size: .8rem;
      }
      .icon {
        margin: auto;
        .circle-icon;
      }
    }
  }
</style>

<template>
  <div class="scene-container">
    <div class="item" v-for="item in sceneItems">
      <div class="icon">
        <i :class="['iconfont',item.icon]"></i>
      </div>
      <div class="title">
        {{item.name}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'scene-list',
    props: {
      list: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {},
    methods: {
      initItems () {
        this.sceneItems = this.list
      }
    },
    mounted () {
      this.initItems()
    },
    data () {
      return {
        sceneItems: []
      }
    },
    watch: {
      list (val) {
        this.initItems()
      }
    }
  }
</script>

