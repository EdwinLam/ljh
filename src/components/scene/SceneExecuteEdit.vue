<style lang="less">
  @import '../../css/main.less';

  .scene-edit {
    height: 100%;
    .main-container {
      display: -webkit-box;
      webkit-box-orient: vertical;
      flex-direction: column ;
      height: 90%;
      padding-left: .6rem;
      padding-right: .6rem;
      .info {
        display: flex;
        align-items: center;
        position: relative;
        padding-top: 1rem;
        padding-bottom: 1rem;
        .title {
          margin-left: .8rem;
          width: 3rem;
          padding: .5rem 2rem .5rem;
          background-color: #F7F7F7;
          letter-spacing: .2rem;
          border-radius: .3rem;
          font-size: 1.05rem;
        }
      }
      .info:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #D9D9D9;
        color: #D9D9D9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
      .add-button {
        display: flex;
        align-items: center;
        .circle-icon {
          margin-right: .8rem;
          line-height: 3.7rem;
          .iconfont {
            color: @primary-color;
            font-size: 1.8rem;
            font-weight: bold;
          }
          background-color: #F7F7F7 !important;
        }
        .title {
          letter-spacing: 0.1rem;
        }
      }
      .tip {
        padding: .8rem .8rem .8rem;
        color: @support-color;
        font-size: .75rem;
      }
      .list {
        position:relative;
        -webkit-box-flex:1;
        -webkit-flex:1;
        flex:1;
        overflow:auto;
        -webkit-overflow-scrolling:touch;
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
      .bottom-tip {
        background-color: white;
        text-align: center;
        padding-top: 1rem;
        .title {
          margin: auto;
          font-size: 1.4rem;
          color: black;
          width: 12rem;
        }
        .desc {
          font-size: .8rem;
          margin: auto;
          width: 18rem;
          color: @support-color;
        }
      }
    }

  }
</style>

<template>
  <div class="scene-edit">
    <x-header title="场景编辑"></x-header>
    <div class="main-container">
      <div>
      <div class="info">
        <div class="circle-icon">
          <i class="iconfont icon-canzhuo"></i>
        </div>
        <div class="title">
          客厅
        </div>
      </div>
        <div class="tip">触发场景时启动以下的设备</div>
        <div class="add-button">
          <div class="circle-icon">
            <i class="iconfont icon-add"></i>
          </div>
          <div class="title">
            添加设备
          </div>
        </div>
      </div>

      <div class="list">

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
      <div class="bottom-tip">
        <div class="title">编辑你的智能场景</div>
        <div class="desc">添加设备后可以编辑个性化场景，你可以设置你家的设备电源开关</div>
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

