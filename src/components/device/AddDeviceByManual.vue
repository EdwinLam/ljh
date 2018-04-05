<style lang="less">
  @import '../../css/main.less';

  .add-device-manual {
    .main-container {
      padding-left: 1rem;
      padding-right: 1rem;
      .simple-desc {
        margin-top: 3rem;
        color: @input-color;
        .title {
          letter-spacing: .1rem;
          font-size: 1.3rem;
        }
        .desc {
          font-size: 1.1rem;
        }
      }
      .input-area {
        margin-top: 8rem;
        .weui-cells:before {
          border-top: none !important;
        }

        .add-btn {
          margin-top: 3rem;
          width: 50%;
          padding: 0.3rem 2.5rem 0.3rem;
        }
      }
    }
  }
</style>
<template>
  <div class="add-device-manual">
    <x-header title="添加设备"></x-header>
    <div class="main-container">
      <div class="simple-desc">
        <div class="title">设备代码</div>
        <div class="desc">请在配件或包装上查找代码并手动输入</div>
      </div>

      <div class="input-area">
        <group>
          <x-input placeholder="输入代码" class="code-input"></x-input>
        </group>
        <x-button type="primary" class="add-btn">立即添加</x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {XInput, XButton, Group, XHeader} from 'vux'

  export default {
    components: {
      XInput,
      XButton,
      Group,
      XHeader
    },
    mounted: function () {
      console.log('ok')
    },
    data () {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

