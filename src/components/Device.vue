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
        <div sol class="item" v-for="(el,index) in devices">
        <group>
          <div slot="title" style="text-align: right">
            <span class="vux-close" @click="delItem(el,index)"></span>
          </div>
          <cell title="设备名称">
            <badge :text="el.name" class="device-name"></badge>
          </cell>
          <cell :title="'类型'" :value="el.type"></cell>
          <x-switch title="开关状态" :inlineDesc="el.state|deviceState" class="switch-btn" on-change="el.state" :disabled="!isCanEdit(el)" v-model="el.isOn" @on-change="switchDevice(el)">
          </x-switch>
          <cell :title="'电量(度)'" :value="el.data"></cell>
          <cell :title="'定时设置'" is-link @click.native="setTask(el)"></cell>
          <cell title="设备编辑" is-link @click.native="EditItem(el)"></cell>
          <cell class="vux-tap-active weui-cell_acces" @click.native="refreshMeter(el)">
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


    <div v-transfer-dom>
      <popup v-model="isShowSetTime" height="270px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
          <group>
            <datetime format="HH:mm" title="开始时间" value="20:12">
              <i class="iconfont icon-delete" slot="title" @click.stop>&nbsp;开始时间</i>
            </datetime>
            <datetime format="HH:mm" title="结束时间" value="20:12">
              <i class="iconfont icon-delete" slot="title">&nbsp;开始时间</i>
            </datetime>
          </group>
          <div style="padding:20px 15px;">
            <x-button type="primary" class="pupup-btn">确认</x-button>
            <x-button @click.native="isShowSetTime = false">取消</x-button>
          </div>
        </div>
      </popup>
    </div>
   </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { DeviceApi } from '../api'
  import {Panel, Cell, Badge, Group, XButton, XSwitch, Datetime, Popup, TransferDom, Scroller, Spinner, Divider} from 'vux'
  import {CommonUtil, StorageUtil} from '../utils'

  export default {
    name: 'Device',
    directives: {
      TransferDom
    },
    components: {
      Panel, Cell, Badge, Group, XButton, XSwitch, Datetime, Popup, Scroller, Spinner, Divider
    },
    filters: {
      deviceSwitchState: function (value) {
        return value === 'on'
      }
    },
    methods: {
      EditItem (el) {
        this.$store.commit('updateIncludedComponents', 'Device')
        StorageUtil.setStorage('deviceEl', el)
        this.$router.push({name: 'EditDevice'})
      },
      setTask (el) {
        this.$router.push({name: 'SetTask'})
      },
      delItem (el, index) {
        console.log(index)
        const ctx = this
        // prompt形式调用
        this.$vux.confirm.show({
          // 组件除show外的属性
          async onCancel () {},
          async onConfirm () {
            CommonUtil.openLoading()
            await DeviceApi.del({home_id: ctx.userInfo.home_id, device_id: el.id})
            CommonUtil.closeLoading()
            ctx.devices.splice(index, 1)
            CommonUtil.sucToast(this, '删除成功', 500)
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
        this.devices = res.devices
      },
      async refreshMeter (el) {
        CommonUtil.openLoading()
        const res = await DeviceApi.meter({home_id: this.userInfo.home_id, device_id: el.id})
        CommonUtil.closeLoading()
        if (CommonUtil.isSuccess(res.code)) {
          el.data = res.data
          CommonUtil.sucToast(this, '读取电量成功', 500)
        }
      },
      async switchDevice (el) {
        CommonUtil.openLoading()
        const res = await DeviceApi.switch({home_id: this.userInfo.home_id, device_id: el.id, param: el.isOn ? 'on' : 'off'})
        CommonUtil.closeLoading()
        if (CommonUtil.isSuccess(res.code)) {
          el.state = el.isOn ? 'on' : 'off'
          el.data = res.data
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
      console.log(this.devices)
      if (this.devices.length === 0) {
        this.getDevices()
      }
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.info
      })
    },
    data () {
      return {
        fixHeight: '0',
        devices: [],
        status: {
          pullupStatus: 'default',
          pulldownStatus: 'default'
        },
        isShowSetTime: false
      }
    }
  }
</script>

