<style lang="less">
  @import '../css/main.less';
  .ad {
    background-color: #EBF1F1;
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

<template>
  <div class="ad">
    <div class="main-container">
      <div><img :src="AdUrl" style="width:100%"/></div>

    </div>
    <div class="tip-icon" @click="goToIndex">
      <div class="time">{{i}}s</div>
      <div class="title" >跳过</div>
    </div>
  </div>
</template>
<script>
  import {XInput, XButton, Group} from 'vux'
  import openImage from '../assets/images/open.jpg'
  let enterTimer

  export default {
    components: {
      XInput,
      XButton,
      Group
    },
    mounted: function () {
      this.i = 3
      enterTimer = window.setInterval(() => {
        if (--this.i === 0) {
          if (enterTimer) { window.clearInterval(enterTimer) }
          this.$router.push({name: 'Index'})
        }
      }, 1000)
    },
    methods: {
      goToIndex: function () {
        if (enterTimer) { window.clearInterval(enterTimer) }
        this.$router.push({name: 'Index'})
      }
    },
    data () {
      return {
        i: 3,
        AdUrl: openImage,
        msg: 'Hello World!'
      }
    }
  }
</script>

