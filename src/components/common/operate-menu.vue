<style lang="less">
  @import '../../css/main.less';
  .operate-container {
    padding-top:1.2rem;
    width: 100%;
    .operate-menu {
      margin-left: auto;
      margin-right: auto;
      width: 10rem;
      border: .075rem solid @shadow-color;
      box-shadow: .1rem .075rem 1.5rem @shadow-color;
      border-radius: 10px;
      padding: 10px 20px 10px;
      background-color: white;
      .op-item {
        line-height: 1;
        text-align: center;
        .icon {
          font-weight: bold;
          color: #2BA6E1;
          font-size: 24px !important;
        }
        .desc {
          font-weight: bolder;
          color: #9C9C9C !important;
          font-size: 14px;
        }
      }

    }
  }

</style>

<template>
  <div class="operate-container">
    <div class="operate-menu">
      <flexbox :gutter="0" align="flex-start">
        <flexbox-item class="op-item" v-for="el in operateItems" :key="el.id">
          <i class="iconfont icon-add icon"></i>
          <div class="desc">{{el.name}}</div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>
  import {Flexbox, FlexboxItem} from 'vux'

  export default {
    name: 'operate-menu',
    props: {
      list: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      Flexbox, FlexboxItem
    },
    methods: {
      initItems () {
        this.operateItems = this.list
      }
    },
    mounted () {
      this.initItems()
    },
    data () {
      return {
        operateItems: []
      }
    }
  }
</script>

