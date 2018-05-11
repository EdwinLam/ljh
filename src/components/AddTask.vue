<style lang="less">
  @import '../css/main.less';

    .add-task{
      .save-btn{
       background-color: @theme-color;
      }
      height: 100%;
    }
</style>

<template>
  <div>
    <div class="add-task">
    <group>
      <x-input title="任务名称" placeholder="请输入任务名称" class="input-item" required v-model="addTaskEl.task_name"></x-input>
      <datetime format="HH:mm" title="开始时间" v-model="addTaskEl.start">
        <!--<i class="iconfont icon-delete" slot="title" @click.stop>&nbsp;开始时间</i>-->
      </datetime>
      <cell>
        <check-icon :value.sync="addTaskEl.repeat">是否重复</check-icon>
      </cell>
      <group title="设备动作列表">
        <cell :title="el.device_name"  v-for="(el,index) in addTaskEl.actions" :key="index">
          <span slot="inline-desc">动作:{{el.action}}</span>
          <span class="vux-close" @click="delAction(index)"></span>
        </cell>
      </group>
      <popup-picker :show="isShowAdd" title="添加设备任务" :data="devices" v-model="selectedDevice" @on-change="addAction"></popup-picker>
    </group>
      <x-button @click.native="saveTask" class="save-btn" type="primary" style="margin-top:1rem">保存任务</x-button>

    </div>
  </div>
</template>
<script>
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput, XHeader, Popup, Datetime, TransferDom, Selector, CheckIcon, PopupPicker} from 'vux'
  import {DeviceApi} from '../api'
  import {AuthUtil, CommonUtil} from '../utils'
  let deviceMap = {}
  export default {
    name: 'add-task',
    mounted () {
      this.getDevices()
      this.resetParam()
      this.$store.commit('updateHeader', {title: '添加任务', isShowBack: true})
    },
    directives: {
      TransferDom
    },
    components: {
      Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput, XHeader, Popup, Datetime, Selector, CheckIcon, PopupPicker
    },
    methods: {
      async getDevices () {
        CommonUtil.openLoading()
        const res = await DeviceApi.list({home_id: this.userInfo.home_id})
        CommonUtil.closeLoading()
        let tmpArray = []
        res.data.forEach((el) => {
          let key = el.name + '(id:' + el.device_id + ')'
          deviceMap[key] = el
          tmpArray.push(key)
        })
        this.devices = [tmpArray, ['打开', '关闭', '获取电量']]
      },
      openAddAction () {
        this.isShowAdd = true
      },
      addAction (value) {
        if (value.length) {
          this.selectedDevice = []
          this.addTaskEl.actions.push({device_id: deviceMap[value[0]].device_id, device_name: deviceMap[value[0]].name, action: value[1]})
        }
      },
      delAction (index) {
        this.addTaskEl.actions.splice(index, 1)
      },
      async saveTask () {
        let postData = Object.assign({}, this.addTaskEl)
        if (postData.task_name === '') {
          CommonUtil.warnToast(this, '请输入任务名称')
          return
        }
        if (postData.start === '') {
          CommonUtil.warnToast(this, '请输入开始时间')
          return
        }
        if (!postData.actions.length) {
          CommonUtil.warnToast(this, '请添加设备动作')
          return
        }
        postData.actions = postData.actions.map(el => {
          return {
            device_id: el.device_id,
            action: this.actionMap[el.action]
          }
        })
        postData.repeat = this.addTaskEl.repeat ? '1' : '0'
        CommonUtil.openLoading()
        try {
          await DeviceApi.addTask({
            task_name: postData.task_name,
            home_id: this.userInfo.home_id,
            start: postData.start,
            repeat: postData.repeat,
            actions: postData.actions
          })
          CommonUtil.closeLoading()
          CommonUtil.sucToast(this, '添加成功', 1000)
          this.$router.push({name: 'SetTask'})
        } catch (e) {
          CommonUtil.closeLoading()
          CommonUtil.warnToast(this, '设备连接超时', 1000)
        }

        this.resetParam()
      },
      resetParam () {
        this.addTaskEl = {
          task_name: '',
          start: '08:00',
          end: '08:30',
          repeat: false,
          actions: []
        }
      }

    },
    computed: {
      userInfo: () => AuthUtil.getUserInfo()
    },
    data () {
      return {
        actionMap: {
          '打开': 'on',
          '关闭': 'off',
          '获取电量': 'data'
        },
        devices: [],
        actionOptions: ['on', 'off', 'data'],
        isShowAdd: false,
        selectedDevice: [],
        addTaskEl: {
          task_name: '',
          start: '08:00',
          end: '08:30',
          repeat: false,
          actions: []
        }
      }
    }
  }
</script>

