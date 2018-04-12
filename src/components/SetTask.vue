<style lang="less">
  @import '../css/main.less';
  .pupup-btn{
    background-color:@theme-color !important;
  }
  .set-task {

    .main-container{
      background-color: white;
      padding:.5rem .5rem .5rem;
      margin:1rem .5rem 1rem;
      border-radius: .1rem;
      box-shadow: .1rem .1rem .1rem @shadow-color;
      .vux-badge {
        background-color: @theme-color;
      }

      border-radius: .1rem;

      .btn-icon {
        margin-right: 1rem;
      }
      .textBtn{
        width: 100%;
        text-align: center;
        font-size: 1.1rem;
        font-weight: 400;
      }
    }

  }
</style>

<template>
  <div>
    <div v-transfer-dom>
      <popup v-model="isShowSet" height="360px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:340px;margin:0 auto;border-radius:5px;padding-top:10px;">
          <group title="添加任务">
            <selector placeholder="请选择动作"  title="动作" name="district" :options="list" ></selector>

            <datetime format="HH:mm" title="开始时间" value="20:12">
              <!--<i class="iconfont icon-delete" slot="title" @click.stop>&nbsp;开始时间</i>-->
            </datetime>
            <datetime format="HH:mm" title="结束时间" value="20:12">
              <!--<i class="iconfont icon-delete" slot="title">&nbsp;开始时间</i>-->
            </datetime>
            <cell>
              <check-icon value="true">是否重复</check-icon>

            </cell>

          </group>
          <div style="padding:20px 15px;">
            <x-button type="primary" class="pupup-btn">确认</x-button>
            <x-button @click.native="isShowSetTime = false">取消</x-button>
          </div>
        </div>
      </popup>
    </div>
  <div class="set-task">


    <div class="main-container">
    <group title="定时任务">
      <cell title="10:00-20:00" value="不重复">
        <slot>
          关闭
          <i class="iconfont icon-shuaxin" ></i>
        </slot>
        <slot name="child"> <span class="vux-close"></span></slot>
      </cell>
      <x-button @click.native="addTask">添加任务</x-button>
    </group>
    </div>
  </div>
  </div>
</template>
<script>
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput, XHeader, Popup, Datetime, TransferDom, Selector, CheckIcon } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    activated () {
      this.$store.commit('updateHeader', {title: '定时设置', isShowBack: true})
    },
    components: {
      Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput, XHeader, Popup, Datetime, Selector, CheckIcon
    },
    methods: {
      addTask () {
        this.isShowSet = true
      }
    },

    data () {
      return {
        list: [{key: 'gx', value: '打开&关闭'}, {key: 'gd', value: '打开'}, {key: 'gx', value: '关闭'}],
        isShowSet: false

      }
    }
  }
</script>

