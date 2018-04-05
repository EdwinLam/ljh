<style lang="less">
  .scene-execute-container .scene-execute-tip{
    padding: 10px 15px 10px;
    color: #AEAEAC;
    font-size:8px;
  }
  .scene-execute-container .scene-execute-btn{
    color: #73BCE5 !important;
    width:6rem !important;
    font-size:14px !important;
    border-radius: 2px !important;
  }
  .scene-execute-container .scene-execute-circle{
    width: 4rem;
    height: 4rem;
    border-radius:50%;
    background-color: #2BA6E1;
    text-align: center;
  }
  .scene-execute-container .scene-execute-circle .iconfont{
    border-radius: 50%;
    font-size:2.5rem;
    color: white;
  }
  .scene-execute-container .weui-cell__hd{
    padding-right:0.5rem !important;
  }
  .scene-execute-container .vux-label{
    font-size:14px;
    letter-spacing: 2px !important;
  }
  .scene-execute-container .scene-execute-operate-container{
    width:100%;
    position:fixed;
    bottom:5%;
  }
  .scene-execute-container .scene-execute-operate{
    margin-left: auto;
    margin-right: auto;
    width: 10rem;
    border:1px solid #F6F6F6;
    box-shadow: 2px 1px 24px #F6F6F6;
    border-radius: 10px;
    padding:10px 20px 10px;
    background-color: white;
  }
  .scene-execute-container .op-item{
    line-height: 1;
    text-align: center;
  }
  .scene-execute-container .op-item-icon{
    font-weight: bold;
    color: #2BA6E1;
    font-size:24px !important;
  }
  .scene-execute-container .op-item-desc{
    font-weight: bolder;
    color:#9C9C9C !important;
    font-size:14px;
  }
  .scene-execute-container .weui-cell__ft{
    display: none;
  }
</style>

<template>
  <div class="scene-execute-container">
    <x-header title="场景编辑"></x-header>
    <div class="scene-execute-tip">前四个场景展示在首页</div>
    <cell :title="item.name" is-link v-for="(item, index) in dataItems" :key="item.id">
      <div class="scene-execute-circle" slot="icon">
        <i  :class="['iconfont',item.icon]"></i>
      </div>
      <x-button type="default" slot="child" class="scene-execute-btn">立即执行</x-button>
    </cell>

    <div class="scene-execute-operate-container">
      <div class="scene-execute-operate">
        <flexbox :gutter="20" align="flex-start">
          <flexbox-item class="op-item">
            <i  class="iconfont icon-add op-item-icon"></i>
            <div class="op-item-desc">添加场景</div>
          </flexbox-item>
          <flexbox-item class="op-item">
            <i  class="iconfont icon-add op-item-icon"></i>
            <div class="op-item-desc">场景管理</div>
          </flexbox-item>
        </flexbox>
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
          {id: 1, name: '餐厅 ', icon: 'icon-canzhuo'},
          {id: 1, name: '厨房 ', icon: 'icon-chufangwujinanzhuang'},
          {id: 1, name: '洗手间 ', icon: 'icon-hekriconqingjingyushicesuo'},
          {id: 1, name: '自定义场景 ', icon: 'icon-star'}
        ]
      }
    }
  }
</script>

