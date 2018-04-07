<style lang="less">
  @import '../../css/main.less';
  .device-scene{
    height: 100%;
    .main-container{
      padding-left:.75rem;
      padding-right:.75rem;
      .tag-container{
        .title{
          font-size:1.2rem;
          padding-top:1rem;
          padding-bottom: 1rem;
          color: @support-color;
        }
      }
      .scene-items{
        display: flex;
        flex-flow: row wrap;
        .item{
          margin-top:1rem;
          .tag{
            width: 80%;
            font-size: 1rem;
            letter-spacing: .2rem;
            padding:.2rem 0rem .2rem;
            border-radius: .2rem;
            color:@support-color;
            background-color: #F7F7F7;
            text-align: center;
          }
          flex: 0 0 100/3%;
        }

      }
      .input-area {
        margin-top: 5rem;
        .weui-cells:before {
          border-top: none !important;
        }

        .add-btn {
          background-color: @primary-color;
          margin-top: 2rem;
          width: 50%;
          padding: 0.3rem 2.5rem 0.3rem;
        }
      }

    }

  }

</style>

<template>
  <div class="device-scene">
    <x-header title="设备编辑"></x-header>
    <div class="main-container">
      <div class="tag-container">
        <div class="title">
          使用场景:
        </div>
        <div class="scene-items">
          <div class="item" v-for="(index,el) in 6">
            <div class="tag">客厅</div>
          </div>
        </div>
        <div class="input-area">
          <group>
            <x-input placeholder="例如:床头柜/插座" class="code-input"></x-input>
          </group>
          <x-button type="primary" class="add-btn">确定</x-button>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
  import {XInput, XButton, Group, XHeader} from 'vux'
  export default {
    components: {
      XHeader, XInput, XButton, Group
    },
    methods: {
      onImgError (item, $event) {
        console.log(item, $event)
      }
    },
    data () {
      return {
        demo1CheckboxMax: ['2', '3'],
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

