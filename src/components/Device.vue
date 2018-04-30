<style lang="less">
  @import '../css/main.less';

  .pupup-btn{
    background-color:@theme-color !important;
  }
  .device {
    .vux-badge{
      background-color: @theme-color;
    }
    .item-wrap{
      padding:0rem 0rem .1rem;
      .item{
        .weui-cells{
          margin-top: .6rem !important;
        }
        .vux-close{
          color:@support-color;
        }
        padding:.5rem 1rem .5rem;
        margin: 1rem .5rem 1rem;
        border-radius:.2rem;
        .device-name{
          font-size:1rem;
          padding: .2rem .2rem;
        }
        .textBtn{
          width: 100%;
          text-align: center;
          font-size: 1.1rem;
          font-weight: 400;
        }
        background-color: white;

        box-shadow: .1rem .1rem .1rem @shadow-color;
        .item-btn{
          margin-top: 0rem;
          border-radius: 0px;
          border: none;
          border-top:1px solid #D9D9D9;
        }

      }

    }
  }
</style>

<template>
  <div class="device">
    <scroller lock-x scrollbar-y use-pulldown :height="fixHeight"  @on-pulldown-loading="refresh" v-model="status" ref="scroller">
      <div class="item-wrap">
        <divider v-show="devices.length===0">暂无数据</divider>
        <div class="item" v-for="(el,index) in devices">
        <group>
          <div slot="title" style="text-align: right">
            <span class="vux-close" @click="delItem(index)"></span>
          </div>
          <cell title="设备名称">
            <badge :text="el.name" class="device-name"></badge>
          </cell>
          <cell :title="'类型'" :value="el.type"></cell>
          <x-switch title="开关状态" :inlineDesc="el.state|deviceState" class="switch-btn" on-change="el.state" :disabled="!isCanEdit(el)" v-model="el.isOn" @on-change="switchDevice(index)">
          </x-switch>
          <cell title="电量(度)" :value="el.data"></cell>
          <cell title="定时设置" is-link @click.native="setTask(index)"></cell>
          <cell class="vux-tap-active weui-cell_acces" @click.native="refreshMeter(index)">
            <div slot="child" class="textBtn">读取电量</div>
          </cell>
        </group>
      </div>
      </div>

      <div slot="pulldown" class="xs-plugin-pullup-container xs-plugin-pullup-down" style="position: absolute; width: 100%; height: 40px; top: -40px; text-align: center;">
        <span v-show="status.pulldownStatus === 'default'"></span>
        <span v-show="status.pulldownStatus === 'loading'"><spinner type="ios-small"></spinner></span>
      </div>
    </scroller>

  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { DeviceApi } from '../api'
  import {Panel, Cell, Badge, Group, XButton, XSwitch, Datetime, Scroller, Spinner, Divider} from 'vux'
  import {CommonUtil, AuthUtil} from '../utils'

  export default {
    name: 'Device',
    components: {
      Panel, Cell, Badge, Group, XButton, XSwitch, Datetime, Scroller, Spinner, Divider
    },
    filters: {
      deviceSwitchState: function (value) {
        return value === 'on'
      }
    },
    methods: {
      EditItem (index) {
        this.$router.push({name: 'EditDevice'})
      },
      setTask (index) {
        this.$store.commit('setCurItems', index)
        this.$router.push({name: 'SetTask'})
      },
      delItem (index) {
        const el = this.devices[index]
        const ctx = this
        // prompt形式调用
        this.$vux.confirm.show({
          // 组件除show外的属性
          async onCancel () {},
          async onConfirm () {
            CommonUtil.openLoading()
            await DeviceApi.del({home_id: ctx.userInfo.home_id, device_id: el.id})
            CommonUtil.closeLoading()
            ctx.$store.commit('deleteDevice', index)
            CommonUtil.sucToast(ctx, '删除成功', 500)
          },
          title: '操作提示',
          content: '是否确定操作？'
        })
      },
      isCanEdit (el) {
        return el.state !== 'offline'
      },
      async getDevices () {
        CommonUtil.openLoading()
        const res = await DeviceApi.list({home_id: this.userInfo.home_id})
        CommonUtil.closeLoading()
        res.devices = res.devices.map(el => Object.assign({isOn: el.state === 'on'}, el))
        this.$store.commit('updateDevices', res.devices)
      },
      async refreshMeter (index) {
        const el = this.devices[index]
        CommonUtil.openLoading()
        const res = await DeviceApi.meter({home_id: this.userInfo.home_id, device_id: el.id})
        CommonUtil.closeLoading()
        if (CommonUtil.isSuccess(res.code)) {
          this.$store.commit('refreshMeter', {data: res.data, index})
          CommonUtil.sucToast(this, '读取电量成功', 500)
        }
      },
      async switchDevice (index) {
        const el = this.devices[index]
        CommonUtil.openLoading()
        const res = await DeviceApi.switch({home_id: this.userInfo.home_id, device_id: el.id, param: el.isOn ? 'on' : 'off'})
        CommonUtil.closeLoading()
        if (CommonUtil.isSuccess(res.code)) {
          this.$store.commit('switchDevice', {data: el.isOn ? 'on' : 'off', index})
          CommonUtil.sucToast(this, '设备' + el.name + '已切换成[' + (el.isOn ? '开' : '关') + ']状态', 500)
        }
      },
      openTimeSet () {
        this.isShowSetTime = true
      },
      loadMore () {},
      async refresh () {
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.scroller.donePulldown()
          }, 10)
        })
      },
      autoList () {
        const viewHeight = document.getElementById('vux_view_box_body').clientHeight
        this.fixHeight = (viewHeight - 100) + 'px'
      }
    },
    activated () {
      this.$store.commit('updateHeader', {title: '设备', isShowBack: false})
    },
    mounted () {
      this.autoList()
      window.onresize = () => {
        this.autoList()
      }
      if (this.devices.length === 0) {
        this.getDevices()
      }
    },
    computed: {
      userInfo: () => AuthUtil.getUserInfo(),
      ...mapState({
        devices: state => state.device.items
      })
    },
    data () {
      return {
        fixHeight: '0',
        status: {
          pullupStatus: 'default',
          pulldownStatus: 'default'
        },
        isShowSetTime: false
      }
    }
  }
</script>

