<style lang="less">
  @import '../../css/main.less';

  .scene-execute {
    .main-container {
      .list {
        .weui-cell__hd{
          padding-right:0.5rem !important;
        }
        .vux-label{
          font-size:14px;
          letter-spacing: .1rem !important;
        }
        .tip {
          padding: .8rem .8rem .8rem;
          color: @support-color;
          font-size: .5rem;
        }
        .execute-btn {
          color: #73BCE5 !important;
          width: 6rem !important;
          font-size: .8rem !important;
          border-radius: .1rem !important;
          padding-top:.2rem;
          padding-bottom:.2rem;
          line-height: 2rem;

        }
        .execute-icon {
          width: 4rem;
          height: 4rem;
          border-radius:50%;
          background-color: #2BA6E1;
          text-align: center;
          .iconfont {
            border-radius: 50%;
            font-size: 2.5rem;
            color: white;
          }
        }
      }
      .operate-area {
        width: 100%;
        position: fixed;
        bottom: 5%;
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
    }
  }
</style>

<template>
  <div class="scene-execute">
    <x-header title="场景编辑"></x-header>
    <div class="main-container">
      <div class="list">
        <div class="tip">前四个场景展示在首页</div>
        <cell :title="item.name" v-for="(item, index) in dataItems" :key="item.id">
          <div class="execute-icon" slot="icon">
            <i :class="['iconfont',item.icon]"></i>
          </div>
          <x-button type="default" slot="child" class="execute-btn">立即执行</x-button>
        </cell>
      </div>

      <div class="operate-area">
        <div class="operate-menu">
          <flexbox :gutter="20" align="flex-start">
            <flexbox-item class="op-item">
              <i class="iconfont icon-add icon"></i>
              <div class="desc">添加场景</div>
            </flexbox-item>
            <flexbox-item class="op-item">
              <i class="iconfont icon-add icon"></i>
              <div class="desc">场景管理</div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import {XHeader, Cell, XButton, Flexbox, FlexboxItem} from 'vux'

  export default {
    components: {
      XHeader, Cell, XButton, Flexbox, FlexboxItem
    },
    methods: {
      onImgError(item, $event) {
        console.log(item, $event)
      }
    },
    data() {
      return {
        dataItems: [
          {id: 1, name: '客厅 ', icon: 'icon-sofa2'},
          {id: 2, name: '餐厅 ', icon: 'icon-canzhuo'},
          {id: 3, name: '厨房 ', icon: 'icon-chufangwujinanzhuang'},
          {id: 4, name: '洗手间 ', icon: 'icon-hekriconqingjingyushicesuo'},
          {id: 5, name: '自定义场景 ', icon: 'icon-star'}
        ]
      }
    }
  }
</script>

