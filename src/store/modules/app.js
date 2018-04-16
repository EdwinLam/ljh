import {CommonUtil} from '../../utils'
const shouldUseTransition = !/transition=none/.test(location.href)
let wifiManager = null
const app = {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: shouldUseTransition ? 'forward' : '',
    title: '首页',
    isShowBack: false,
    includedComponents: 'NONE',
    wifiItems: {}
  },
  mutations: {
    updateWifiItems (state, wifiItems) {
      state.wifiItems = wifiItems
    },
    updateIncludedComponents (state, includedComponents) {
      state.includedComponents = includedComponents
    },
    updateHeader (state, {title, isShowBack}) {
      state.title = title
      state.isShowBack = isShowBack
      if (!state.isShowBack) {
        state.includedComponents = 'NONE'
      }
    },
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      if (!shouldUseTransition) {
        return
      }
      state.direction = payload.direction
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    },
    refreshWifiItems ({commit}) {
      setTimeout(() => {
        let osName = ''
        try {
          osName = plus ? plus.os.name : ''
        } catch (e) {
          osName = ''
        }
        switch (osName) {
          case 'Android':
            if (wifiManager === null) {
              const MainActivity = plus.android.runtimeMainActivity()
            // 上下文
              const Context = plus.android.importClass('android.content.Context')
            // 导入WIFI管理 和 WIFI 信息 的class
              plus.android.importClass('android.net.wifi.WifiManager')
              plus.android.importClass('android.net.wifi.WifiInfo')
              plus.android.importClass('android.net.wifi.ScanResult')
              plus.android.importClass('java.util.ArrayList')
            // 获取 WIFI 管理实例
              wifiManager = MainActivity.getSystemService(Context.WIFI_SERVICE)
            }
            // 获取当前连接WIFI的信息
            const resultList = wifiManager.getScanResults()
            if (!wifiManager.isWifiEnabled()) {
              wifiManager.setWifiEnabled(true)
            }// 打开wifi,false为关闭
            wifiManager.startScan()// 开始扫描
            const len = resultList.size()
            let tmpItems = []
            for (let i = 0; i < len; i++) {
              let ssid = resultList.get(i).plusGetAttribute('SSID')
              if (ssid && ssid !== '') {
                tmpItems.push({key: ssid, value: ssid})
              }
            }
            commit('updateWifiItems', tmpItems)
            break
          case 'iOS':
            CommonUtil.errorToast(this, '暂不支持该平台添加设备', 2000)
            break
          default:
            // 其它平台
            CommonUtil.errorToast(this, '暂不支持该平台添加设备', 2000)
            break
        }
      }, 300)
    }
  }
}

export default app
