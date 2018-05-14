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
  <div class="set-task">
    <div class="main-container">
    <group title="定时任务">
      <cell :title="el.start" :value="el.name" v-for="(el,index) in tasks" :key="el.id">
        <slot>
          {{el.action}}
          <i class="iconfont icon-shuaxin" v-if="el.repeat==='1'"></i>
        </slot>
        <slot name="child"> <span class="vux-close" @click="delTask(index)"></span></slot>
      </cell>
      <x-button @click.native="gotoAddTask">添加任务</x-button>
    </group>
    </div>
  </div>
  </div>
</template>
<script>
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput, XHeader, Popup, Datetime, TransferDom, Selector, CheckIcon} from 'vux'
  import {CommonUtil, AuthUtil} from '../utils'
  import {DeviceApi} from '../api'
  import { mapState } from 'vuex'

  export default {
    directives: {
      TransferDom
    },
    activated () {
      this.getTasks()
      this.$store.commit('updateHeader', {title: '定时设置', isShowBack: true})
    },
    components: {
      Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput, XHeader, Popup, Datetime, Selector, CheckIcon
    },
    methods: {
      gotoAddTask () {
        this.$router.push({name: 'AddTask'})
      },
      async getTasks () {
        const res = await DeviceApi.taskList({home_id: this.userInfo.home_id})
        this.tasks = res.tasks
        
      },
      async delTask (index) {
        const el = this.tasks[index]
        const ctx = this
        this.$vux.confirm.show({
          // 组件除show外的属性
          async onCancel () {},
          async onConfirm () {
            CommonUtil.openLoading()
            console.log(el.name)
            await DeviceApi.delTask({home_id: ctx.userInfo.home_id, task_name: el.name})
            CommonUtil.closeLoading()
            this.$emit('delTask', index)
            CommonUtil.sucToast(this, '删除成功', 1000)
          },
          title: '操作提示',
          content: '是否确定操作？'
        })
      }
    },
    computed: {
      userInfo: () => AuthUtil.getUserInfo()
    },
    data () {
      return {
        tasks: []
      }
    }
  }
</script>

