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
      <selector placeholder="请选择设备SSID"  title="SSID" name="district" :options="wifiItems" >
      </selector>
      <x-input type="password" title="密码" placeholder="请输入密码">
        <i class="iconfont icon-suo btn-icon" slot="label">&nbsp;密码</i>
      </x-input>
      <x-input title="设备名称" placeholder="请输入设备名称">
        <i class="iconfont icon-ic_devices_other" slot="label">&nbsp;设备名称&nbsp;</i>
      </x-input>
      <cell title="设备id" value="123"></cell>
      <cell title="设备类型"></cell>
      <cell title="设备描述" value="0"></cell>
      <cell class="vux-tap-active weui-cell_acces">
        <div slot="child" class="textBtn" @click="doRefreshWifi">刷新网络</div>
      </cell>
      <cell class="vux-tap-active weui-cell_acces">
        <div slot="child" class="textBtn">配置网络</div>
      </cell>
      <cell class="vux-tap-active weui-cell_acces">
        <div slot="child" class="textBtn" @click="clickButton">加入我的设备</div>
      </cell>
    </group>
    </div>
  </div>
  </div>
</template>
<script>
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, XInput, Selector} from 'vux'
  import {DeviceList} from './common'
  import {CommonUtil} from '../utils'

  const imgList = [
    'http://placeholder.qiniudn.com/800x300/ffffff',
    'http://placeholder.qiniudn.com/800x300/ffffff',
    'http://placeholder.qiniudn.com/800x300/ffffff',
    'http://placeholder.qiniudn.com/800x300/ffffff'
  ]

  const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }))

  export default {
    mounted () {
      setTimeout(() => {
        this.refreshWifiItems()
      }, 300)
    },
    components: {
      Swiper, Panel, DeviceList, Cell, Badge, Group, XButton, XSwitch, XInput, Selector
    },
    sockets: {
      connect: function (val) {
        console.log(val)
        this.id = this.$socket.id
      },
      customEmit: function (val) {
        console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)' + val)
      }
    },
    activated () {
      this.$store.commit('updateHeader', {title: '增加设备', isShowBack: false})
    },
    methods: {
      clickButton: function (val) {
        // $socket is socket.io-client instance
        this.$socket.emit('join', val)
      },
      doRefreshWifi () {
        this.refreshWifiItems()
        CommonUtil.sucToast(this, '刷新网络成功', 500)
      },
      refreshWifiItems () {
        let osName = ''
        try {
          osName = plus ? plus.os.name : ''
        } catch (e) {
          osName = ''
        }
        switch (osName) {
          case 'Android':
            const MainActivity = plus.android.runtimeMainActivity()
            // 上下文
            const Context = plus.android.importClass('android.content.Context')
            // 导入WIFI管理 和 WIFI 信息 的class
            plus.android.importClass('android.net.wifi.WifiManager')
            plus.android.importClass('android.net.wifi.WifiInfo')
            plus.android.importClass('android.net.wifi.ScanResult')
            plus.android.importClass('java.util.ArrayList')
            // 获取 WIFI 管理实例
            const wifiManager = MainActivity.getSystemService(Context.WIFI_SERVICE)
            // 获取当前连接WIFI的信息
            const resultList = wifiManager.getScanResults()
            wifiManager.setWifiEnabled(true)// 打开wifi,false为关闭
            wifiManager.startScan()// 开始扫描
            const len = resultList.size()
            let tmpItems = []
            for (let i = 0; i < len; i++) {
              let ssid = resultList.get(i).plusGetAttribute('SSID')
              if (ssid && ssid !== '') { tmpItems.push({key: ssid, value: ssid}) }
            }
            this.wifiItems = tmpItems
            break
          case 'iOS':
            CommonUtil.errorToast(this, '暂不支持该平台添加设备', 2000)
            break
          default:
            // 其它平台
            CommonUtil.errorToast(this, '暂不支持该平台添加设备', 2000)
            break
        }
      }
    },
    // store.commit('updateLoadingStatus', {isLoading: true})

    data () {
      return {
        wifiItems: [],
        testItems: demoList,
        dataItems: [
          {id: 1, name: '客厅 ', icon: 'icon-sofa2'},
          {id: 2, name: '餐厅 ', icon: 'icon-canzhuo'},
          {id: 3, name: '厨房 ', icon: 'icon-chufangwujinanzhuang'},
          {id: 4, name: '洗手间 ', icon: 'icon-hekriconqingjingyushicesuo'},
          {id: 5, name: '更多 ', icon: 'icon-star'}
        ]
      }
    }
  }
</script>

