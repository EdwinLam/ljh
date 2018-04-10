<style lang="less">
  @import '../../css/main.less';

      .list {
        position:relative;
        .items:before {
          content: " ";
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          height: 1px;
          border-top: .1rem solid #D9D9D9;
          color: #D9D9D9;
          transform-origin: 0 0;
          transform: scaleY(0.5);
        }
        .items {
          padding-top: .5rem;
          position: relative;
          margin-top: .5rem;
          align-items: center;
          display: flex;
          .image-area {
            border: .09rem solid #EBEBEB;
            overflow: hidden;
            img {
              width: 6rem;
            }
            width: 6rem;
            height: 6rem;
            margin-right: 0.75rem;
          }
          .content-area {
            align-self: stretch;
            color: @support-color;
            flex: 1;
            .deviceName {
              color: gray;
              white-space: nowrap;
              width: 9rem;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 1rem;
            }
            .detail {
              font-size: .75rem;
              .protocol{
                background-color: #4CD761;
              }
            }
          }
          .btn-area {
            position:relative;
            flex-shrink: 0;
          }
          .btn-area:after{
            content: " ";
            display: inline-block;
            height: 1.8rem;
            width: 1.8rem;
            border-width: 0.12rem 0.12rem 0 0;
            border-color: #C8C8CD;
            border-style: solid;
            transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            position: relative;
            top: -0.12rem;
            position: absolute;
            top: 50%;
            margin-top: -1rem;
            right: 1rem;
          }
        }
      }
</style>

<template>
  <div class="list" >
    <scroller lock-x scrollbar-y use-pullup use-pulldown height="100%" @on-pullup-loading="loadMore" @on-pulldown-loading="refresh" v-model="status" ref="scroller">
      <div class="items" v-for="el in test">
        <div class="image-area">
          <img src="../../assets/tmp.jpg">
        </div>
        <div class="content-area">
          <div class="deviceName ">ST-16A-W</div>
          <div class="detail">
            <p>规格: 20*20*15</p>
            <p>额定电流: 16A</p>
            <p>无线网格: 802.11</p>
            <p>无线网格: 802.11</p>
            <p>自动配网:LJH smart lik</p>
            <span>协议:<badge text="LJHSL 1.0" class="protocol"></badge></span>
          </div>
        </div>
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
  </div>
</template>
<script>
  import {Badge, Scroller, Spinner} from 'vux'

  export default {
    name: 'device-list',
    props: {
      list: {
        type: Array,
        default () {
          return []
        }
      },
      isShowBtn: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    components: {
      Badge, Scroller, Spinner
    },
    methods: {
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
      initItems () {
        this.deviceItems = this.list
      }
    },
    mounted () {
      this.initItems()
    },
    data () {
      return {
        test: 10,
        status: {
          pullupStatus: 'default',
          pulldownStatus: 'default'
        },
        deviceItems: []
      }
    }
  }
</script>

