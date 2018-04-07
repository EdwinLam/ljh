<template>
  <div class="ad">
    <div class="main-container">
      <div><img :src="AdUrl"/></div>
    </div>
    <div class="tip-icon">
      <div class="time">3s</div>
      <div class="title">跳过</div>
    </div>
  </div>
</template>
<script>
  import {XInput, XButton, Group} from 'vux'

  export default {
    components: {
      XInput,
      XButton,
      Group
    },
    mounted: function () {
      console.log('ok')
    },
    data () {
      return {
        AdUrl: 'http://placeholder.qiniudn.com/800x300/ffffff',
        msg: 'Hello World!'
      }
    }
  }
</script>

<style lang="less">
  @import '../css/main.less';
  .ad {
    height: 100%;
    .main-container {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .tip-icon{
      color: @support-color;
      position:fixed;
      top: 2%;
      right: 3%;
      text-align: center;
      .time{
        width: 2.5rem;
        height: 2.5rem;
        line-height: 2.5rem;
        border: 1px @support-color solid;
        border-radius: 50%;
      }
      .title{
        margin-top: -.1rem;
        text-align: center;
      }
    }
  }
</style>
