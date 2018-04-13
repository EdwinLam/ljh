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
            <selector v-model="actionTypeKey" placeholder="请选择动作"  title="动作" name="district" :options="list" ></selector>
            <datetime format="HH:mm" :title="actionTypeKey===0?'开始时间':'执行时间'" v-model="addDeviceEl.start">
              <!--<i class="iconfont icon-delete" slot="title" @click.stop>&nbsp;开始时间</i>-->
            </datetime>
            <datetime format="HH:mm" title="结束时间"  v-model="addDeviceEl.end" v-show="actionTypeKey===0">
              <!--<i class="iconfont icon-delete" slot="title">&nbsp;开始时间</i>-->
            </datetime>
            <cell>
              <check-icon :value.sync="addDeviceEl.repeat">是否重复</check-icon>
            </cell>
          </group>
          <div style="padding:20px 15px;">
            <x-button type="primary" class="pupup-btn" @click.native="saveTask">确认</x-button>
            <x-button @click.native="isShowSet = false">取消</x-button>
          </div>
        </div>
      </popup>
    </div>
  <div class="set-task">


    <div class="main-container">
    <group title="定时任务">
      <cell :title="el.start!==el.end?(el.start+'-'+el.end):el.start" value="不重复" v-for="(el,index) in deviceEl.tasks" :key="el.id">
        <slot>
          {{getActionName(el)}}
          <i class="iconfont icon-shuaxin" v-if="el.repeat==='1'"></i>
        </slot>
        <slot name="child"> <span class="vux-close" @click="delTask(index)"></span></slot>
      </cell>
      <x-button @click.native="addTask">添加任务</x-button>
    </group>
    </div>
  </div>
  </div>
</template>
<script>
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput, XHeader, Popup, Datetime, TransferDom, Selector, CheckIcon} from 'vux'
  import {CommonUtil} from '../utils'
  import {DeviceApi} from '../api'
  import { mapState } from 'vuex'

  export default {
    directives: {
      TransferDom
    },
    activated () {
      if (!this.deviceEl.device_id) {
        this.$router.push({name: 'Device'})
        return
      }
      this.$store.commit('updateHeader', {title: '定时设置', isShowBack: true})
    },
    components: {
      Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput, XHeader, Popup, Datetime, Selector, CheckIcon
    },
    methods: {
      getActionName (el) {
        return el.start !== el.end ? '开启/关闭' : el.action === 'on' ? '打开' : '关闭'
      },
      async saveTask () {
        let postData = Object.assign({}, this.addDeviceEl)
        postData.repeat = this.addDeviceEl.repeat ? '1' : '0'
        if (this.actionTypeKey === 0) {
          postData.action = 'on'
        } else {
          postData.end = postData.start
          postData.action = this.actionTypeKey
        }
        CommonUtil.openLoading()
        await DeviceApi.addTask({
          home_id: this.userInfo.home_id,
          device_id: this.deviceEl.id,
          start: postData.start,
          end: postData.end,
          repeat: postData.repeat,
          action: postData.action
        })
        this.isShowSet = false
        this.$store.commit('addTask', postData)
        CommonUtil.closeLoading()
        CommonUtil.sucToast(this, '添加成功', 500)
      },
      resetParam () {
        this.addDeviceEl = {
          start: '8:00',
          end: '8:30',
          repeat: false,
          action: ''
        }
      },
      addTask () {
        this.resetParam()
        this.isShowSet = true
      },
      async delTask (index) {
        const el = this.deviceEl.tasks[index]
        const ctx = this
        this.$vux.confirm.show({
          // 组件除show外的属性
          async onCancel () {},
          async onConfirm () {
            CommonUtil.openLoading()
            await DeviceApi.delTask({home_id: ctx.userInfo.home_id, device_id: ctx.deviceEl.id, start: el.start, end: el.end, repeat: el.repeat})
            CommonUtil.closeLoading()
            this.$emit('delTask', index)
            CommonUtil.sucToast(this, '删除成功', 500)
          },
          title: '操作提示',
          content: '是否确定操作？'
        })
      }
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.info,
        deviceEl: state => state.device.curItem
      })
    },
    data () {
      return {
        addDeviceEl: {
          start: '8:00',
          end: '8:30',
          repeat: false,
          action: ''
        },
        actionTypeKey: 0,
        list: [{key: 0, value: '打开&关闭'}, {key: 'on', value: '打开'}, {key: 'off', value: '关闭'}],
        isShowSet: false
      }
    }
  }
</script>

