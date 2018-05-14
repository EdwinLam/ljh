<style lang="less">
  @import '../css/main.less';
  .device-add {
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
  <div class="device-add">
    <div class="main-container">
    <group>
      <selector placeholder="请选择设备SSID"  title="SSID" name="district" :options="wifiItems" v-model="ssid">
      </selector>
      <x-input type="password" title="密码" placeholder="请输入密码" v-model="password">
        <i class="iconfont icon-suo btn-icon" slot="label">&nbsp;密码</i>
      </x-input>
      <x-input title="设备名称" placeholder="请输入设备名称" v-model="device_name">
        <i class="iconfont icon-ic_devices_other" slot="label">&nbsp;设备名称&nbsp;</i>
      </x-input>
      <cell title="设备id" :value="device_id"></cell>
      <cell title="设备类型" :value="device_type"></cell>
      <cell title="设备描述" :value="device_description"></cell>
      <cell class="vux-tap-active weui-cell_acces">
        <div slot="child" class="textBtn" @click="doRefreshWifi">刷新网络</div>
      </cell>
      <cell class="vux-tap-active weui-cell_acces">
        <div slot="child" class="textBtn" @click="getDeviceConfig">获取设备信息</div>
      </cell>
      <cell class="vux-tap-active weui-cell_acces">
        <div slot="child" class="textBtn" @click="save">加入我的设备</div>
      </cell>
    </group>
    </div>
  </div>
  </div>
</template>
<script>
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput, Selector} from 'vux'
  import {DeviceList} from './common'
  import {CommonUtil, UdpUtil, AuthUtil} from '../utils'
  import { mapState } from 'vuex'
  import { DeviceApi } from '../api'

  export default {
    mounted () {
    },
    components: {
      Swiper, Panel, DeviceList, Cell, Badge, Group, XButton, XSwitch, XInput, Selector
    },
    activated () {
      this.$store.commit('updateHeader', {title: '增加设备', isShowBack: false})
    },
    methods: {
      async save () {
        if (this.device_id === '') {
          CommonUtil.warnToast(this, '设备id不能为空')
          return
        }
        if (this.device_name === '') {
          CommonUtil.warnToast(this, '设备名称不能为空')
          return
        }
        await DeviceApi.add({home_id: this.userInfo.home_id, device_id: this.device_id, device_name: this.device_name, device_type: this.device_type})
        CommonUtil.sucToast(this, '添加成功', 1000)
        await this.$store.dispatch('getDevices', {home_id: this.userInfo.home_id})
        this.ssid = ''
        this.password = ''
        this.device_name = ''
        this.device_id = ''
        this.device_type = ''
        this.device_description = ''
      },
      getDeviceConfig: function () {
        var ctx = this
        if (this.ssid === '') {
          CommonUtil.warnToast(this, 'ssid不能为空')
          return
        }
        if (this.password === '') {
          CommonUtil.warnToast(this, 'ssid密码不能为空')
          return
        }
        this.$vux.confirm.show({
          // 组件除show外的属性
          async onCancel () {},
          async onConfirm () {
            CommonUtil.openLoading()
            setTimeout(() => {
              const msg = ctx.ssid + '&&' + ctx.password + '&&' + ctx.userInfo.home_id
              new UdpUtil().sendMsg({
                msg,
                callbackFunction: (data) => {
                  if (data != null) {
                    CommonUtil.sucToast(ctx, '配置设备成功', 1000)
                    const deviceInfo = JSON.parse(data)
                    ctx.device_id = deviceInfo.device_id
                    ctx.device_type = deviceInfo.type
                    ctx.device_description = deviceInfo.description
                  } else {
                    CommonUtil.errorToast(ctx, '配置设备失败，请检查网络', 1000)
                  }
                  CommonUtil.closeLoading()
                }
              })
            }, 500)
          },
          title: '操作提示',
          content: '先长按设备开关，直至led快速闪烁进入配置状态,然后点击确认'
        })
      },
      doRefreshWifi () {
        this.$store.dispatch('refreshWifiItems')
        CommonUtil.sucToast(this, '刷新网络成功', 1000)
      }
    },
    // store.commit('updateLoadingStatus', {isLoading: true})
    computed: {
      userInfo: () => AuthUtil.getUserInfo(),
      ...mapState({
        wifiItems: state => state.app.wifiItems
      })
    },
    data () {
      return {
        ssid: '',
        password: '',
        device_name: '',
        device_id: '',
        device_type: '',
        device_description: ''
      }
    }
  }
</script>

