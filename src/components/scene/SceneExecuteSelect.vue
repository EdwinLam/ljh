<style lang="less">
  @import '../../css/main.less';

  .scene-select {
    height: 100%;
    .main-container {
      padding-left:.7rem;
      padding-right:.7rem;

      .items:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: .1rem solid #D9D9D9;
        color: #D9D9D9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);

      }
      .items {

        padding-top: .5rem;
        position: relative;
        margin-top: .5rem;
        align-items: center;
        display: flex;
        .image-area {
          flex-shrink: 0;
          border: .09rem solid #EBEBEB;
          overflow: hidden;
          img {
            width: 5rem;
          }
          width: 5rem;
          height: 5rem;
          margin-right: 0.75rem;
        }
        .content-area {
          flex-shrink: 0;
          align-self: stretch;
          color: @support-color;
          flex: 1;
          .sceneName {
            color: gray;
            white-space: nowrap;
            width: 9rem;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 1rem;
          }
          .detail {
            font-size: .75rem;
          }
        }
        .btn-area {
          flex-shrink: 0;
          .circle-icon {
            line-height: 3.7rem;
            .iconfont {
              color: @primary-color;
              font-size: 1.8rem;
              font-weight: bold;
            }
            background-color: #F7F7F7 !important;
          }
        }

      }
    }

  }
</style>

<template>
  <div class="scene-select">
    <x-header title="选择执行设备"></x-header>
    <div class="main-container">
      <div class="items" v-for="(index,el) in dataItems">
        <div class="image-area">
          <img src="../../assets/tmp.jpg">
        </div>
        <div class="content-area">
          <div class="sceneName ">卧室/床头/插座222222222222</div>
          <div class="detail">
            <p class="typeName">类型: 10A</p>
            <p class="idName">设备ID: SSSSSSSSSS</p>
            <p class="statusName">状态: NO</p>
          </div>
        </div>
        <div class="btn-area">
          <div class="circle-icon">
            <i class="iconfont icon-add"></i>
          </div>
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
      onImgError (item, $event) {
        console.log(item, $event)
      }
    },
    data () {
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

