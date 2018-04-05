<template>
  <div class="add-device-qr-code">
    <div id="scan-area">
    </div>
    <div id="message-area">
      <div class="message-desc">
        <div class="title">使用设备代码设置</div>
        <div class="desc">请在配件或者包装上查找代码并放在扫码框内</div>
      </div>
      <div class="manual-input-link">
        <div class="title">手动输入</div>
        <div class="desc">没有代码或无法扫描?</div>
      </div>
    </div>
  </div>
</template>

<script>
  let scan = null

  export default {
    data () {
      return {
        codeUrl: ''
      }
    },
    mounted: function () {
      setTimeout(() => {
        this.startRecognize()
      }, 300)
      setInterval(() => {
        this.startScan()
      }, 200)
    },
    methods: {
      startRecognize () {
        let that = this
        if (!window.plus) return
        scan = new plus.barcode.Barcode('scan-area')
        scan.onmarked = onmarked

        function onmarked (type, result, file) {
          switch (type) {
            case plus.barcode.QR:
              type = 'QR'
              break
            case plus.barcode.EAN13:
              type = 'EAN13'
              break
            case plus.barcode.EAN8:
              type = 'EAN8'
              break
            default:
              type = '其它' + type
              break
          }
          result = result.replace(/\n/g, '')
          that.codeUrl = result
          alert(result)
        }
      },
      // 开始扫描
      startScan () {
        if (!window.plus || !scan) return
        scan.start()
      },
      // 关闭扫描
      cancelScan () {
        if (!window.plus) return
        scan.cancel()
      },
      // 关闭条码识别控件
      closeScan () {
        if (!window.plus) return
        scan.close()
      }
    }
  }
</script>
<style lang="less">
  .add-device-qr-code {
    height: 100%;
    #scan-area {
      width: 100%;
      height: 55%;
      background-color: #ccc;
    }
    #message-area {
      position: relative;
      width: 100%;
      height: 45%;
      background-color: white;
      .message-desc {
        padding-left: 10px;
        color: #ADADAB;
        padding-top: 20px;
        .title {
          width: 100%;
          font-size: 20px;
        }
        .desc {
          width: 100%;
          padding-top: 6px;
        }
      }
      .manual-input-link {
        .title {
          font-size: 16px;
        }
        .desc {
          font-size: 14px;
        }

        width: 100%;
        position: absolute;
        bottom: 20px;
        font-weight: bold;
        color: #192788;
        text-align: center;
      }
    }
  }
</style>
