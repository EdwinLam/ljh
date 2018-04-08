<style lang="less">
  @import '../../css/main.less';
  .scene-container {
    margin-top:1rem;
    margin-bottom:.2rem;
    padding-left: .3rem;
    padding-right: .3rem;
    display: flex;
    justify-content: space-between;
    .item {
      text-align: center;
      flex: 0 0 100/5%;
      .title {
        margin-top:.3rem;
        color: #666666;
        text-align: center;
        font-size: .8rem;
      }
      .icon {
        margin: auto;
        width: 3.5rem;
        height: 3.5rem;
        line-height: 3.5rem;
        border-radius:50%;
        background-color: #2BA6E1;
        text-align: center;
        .iconfont {
          border-radius: 50%;
          font-size: 2rem;
          color: white;
        }
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

