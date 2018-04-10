<style lang="less">
  @import '../css/main.less';

  .pupup-btn{
    background-color:@theme-color !important;
  }
  .device {
    .vux-badge{
      background-color: @theme-color;
    }
    .item{
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
</style>

<template>
  <div class="device">
    <scroller lock-x scrollbar-y use-pullup use-pulldown height="100%" @on-pullup-loading="loadMore" @on-pulldown-loading="refresh" v-model="status" ref="scroller">
      <div class="item" v-for="el in test">
        <group>
          <cell :title="'设备名称'">
            <badge text="123" class="device-name"></badge>
          </cell>
          <cell :title="'类型'" value="123"></cell>
          <x-switch title="开关状态(开)" class="switch-btn"></x-switch>
          <cell :title="'电量(度)'" value="0"></cell>
          <cell :title="'定时设置'" >
            <span @click="openTimeSet">11:00-22:00</span>
          </cell>
          <cell class="vux-tap-active weui-cell_acces">
            <div slot="child" class="textBtn">读取电量</div>
          </cell>
        </group>
      </div>

      <div slot="pulldown" class="xs-plugin-pullup-container xs-plugin-pullup-down" style="position: absolute; width: 100%; height: 40px; top: -40px; text-align: center;">
        <span v-show="status.pulldownStatus === 'default'"></span>
        <span v-show="status.pulldownStatus === 'loading'"><spinner type="ios-small"></spinner></span>
      </div>
      <!--pullup slot-->
      <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
        <span v-show="status.pullupStatus === 'default'"></span>
        <span v-show="status.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
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
  import {Swiper, Panel, Cell, Badge, Group, XButton, XSwitch, Datetime, Popup, TransferDom,  Scroller, Spinner} from 'vux'
  import {DeviceList} from './common'
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
    directives: {
      TransferDom
    },
    components: {
      Swiper, Panel, DeviceList, Cell, Badge, Group, XButton, XSwitch, Datetime, Popup, Scroller, Spinner
    },
    methods: {
      openTimeSet () {
        this.isShowSetTime = true
      },
      loadMore () {
        setTimeout(() => {
          this.test += 10
          setTimeout(() => {
            this.$refs.scroller.donePullup()
          }, 10)
        }, 2000)
      },
      refresh () {
        setTimeout(() => {
          this.test = 10
          this.$nextTick(() => {
            setTimeout(() => {
              this.$refs.scroller.donePulldown()
              this.$refs.scroller.enablePullup()
            }, 10)
          })
        }, 2000)
      },
    },
    data () {
      return {
        test: 10,
        status: {
          pullupStatus: 'default',
          pulldownStatus: 'default'
        },
        isShowSetTime: false,
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

