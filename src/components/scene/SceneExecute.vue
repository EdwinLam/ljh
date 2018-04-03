<template>
  <div>
    <x-header title="场景编辑"></x-header>
    <panel :header="panelTitle" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>

  </div>
</template>
<script>
  import {XHeader, Panel} from 'vux'
  export default {
    components: {
      XHeader, Panel
    },
    methods: {
      onImgError (item, $event) {
        console.log(item, $event)
      }
    },
    data () {
      return {
        panelTitle: '前四个场景展示在首页',
        type: '1',
        list: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/component/cell'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }],
        footer: {
          title: '底部',
          url: 'http://vux.li'
        }
      }
    }
  }
</script>

<style lang="less">
  .weui-panel{
    margin-top:0px !important;
  }
  .weui-panel__hd{
    padding: 5px 15px 10px !important;
    color: #AEAEAC !important;
    font-size:10px !important;
  }
</style>
