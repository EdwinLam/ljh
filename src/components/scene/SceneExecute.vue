<style lang="less">
  .weui-panel{
    margin-top:0px !important;
  }
  .scene-execute-tip{
    padding: 5px 15px 10px;
    color: #AEAEAC;
    font-size:10px;
  }

</style>

<template>
  <div>
    <x-header title="场景编辑"></x-header>
    <div class="scene-execute-tip">前四个场景展示在首页</div>
    <cell :title="'电视'" is-link>
      <i slot="icon" class="iconfont icon-sofa2"></i>
    </cell>
    <panel :header="panelTitle" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>

  </div>
</template>
<script>
  import {XHeader, Panel, Cell } from 'vux'
  export default {
    components: {
      XHeader, Panel,Cell
    },
    methods: {
      onImgError (item, $event) {
        console.log(item, $event)
      }
    },
    data () {
      return {
        panelTitle: '前四个场景展示在首页',
        type: '3',
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

