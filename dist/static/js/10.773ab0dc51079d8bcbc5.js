webpackJsonp([10],{bKSE:function(n,t,e){var o=e("iiMw");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e("rjj0")("8f682054",o,!0,{})},iiMw:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"/*主色调*/\n/*辅助颜色*/\n/*输入框字体颜色*/\n/*阴影文字*/\n/*描述背景*/\n/*输入框提示样式*/\n::-webkit-input-placeholder {\n  color: #d3d3d3;\n}\n:-moz-placeholder {\n  color: #d3d3d3;\n}\n::-moz-placeholder {\n  color: #d3d3d3;\n}\n:-ms-input-placeholder {\n  color: #d3d3d3;\n}\n/*输入框*/\n.weiui-input {\n  border: 0.09rem solid #ADADAB;\n  border-radius: .4rem;\n  padding: .6rem .6rem !important;\n  font-size: 1.2rem;\n}\n/*按钮*/\n.weiui-btn {\n  box-shadow: 1px 1px 1px #888888;\n  font-weight: 100;\n  background-color: #2BA6E1 !important;\n}\n/*圆形图标背景*/\n.circle-icon {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n  background-color: #2BA6E1;\n  text-align: center;\n}\n.circle-icon .iconfont {\n  border-radius: 50%;\n  font-size: 2.5rem;\n  color: white;\n}\n/*按钮*/\n/*输入框设置*/\ninput {\n  color: #ADADAB !important;\n}\n/*幻灯片设置*/\n.ljh-dots {\n  z-index: 9999;\n}\n.ljh-dots a {\n  margin-left: .7rem !important;\n}\n.ljh-dots .vux-icon-dot.active {\n  background-color: #717372 !important;\n}\n.ljh-dots .vux-icon-dot {\n  width: .65rem !important;\n  height: .65rem !important;\n  border-radius: 1rem !important;\n  background-color: #DBDBDB !important;\n}\n.weiui-btn-disable {\n  background-color: #9E9EA0 !important;\n}\n/*顶部导航*/\n.vux-tab-container,\n.vux-tab-warp,\n.vux-tab {\n  height: 3.5rem !important;\n}\n.vux-tab-warp {\n  padding-top: 0rem !important;\n}\n.vux-tab {\n  background-color: #2BA6E1 !important;\n}\n.vux-tab .vux-tab-item {\n  font-size: 1.2rem !important;\n}\n/*幻灯片设置*/\n.vux-slider {\n  width: 100%;\n}\n.vux-slider .arrow-container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  position: absolute;\n  z-index: 9999;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  fill: #717372;\n}\n.vux-header-title {\n  font-weight: 100 !important;\n}\n.vux-header {\n  background-color: #2BA6E1 !important;\n}\n.vux-header-back {\n  font-weight: 100 !important;\n  font-size: 18px !important;\n  color: white !important;\n}\n.vux-header .vux-header-left .left-arrow {\n  color: white !important;\n}\n.vux-header .vux-header-left .left-arrow:before {\n  border: 1px solid white !important;\n  border-width: 1px 0 0 1px !important;\n  width: 18px !important;\n  height: 18px !important;\n  top: 5px !important;\n  left: 2px !important;\n}\n.main {\n  height: 100%;\n}\n",""])},"s6+2":function(n,t,e){"use strict";function o(n){e("bKSE")}Object.defineProperty(t,"__esModule",{value:!0});var i=e("odqc"),r=e("Znkm"),a=(i.a,r.a,{created:function(){var n=this;setTimeout(function(){n.module.forEach(function(t){t.name===n.$route.name&&(n.tabIndex=t.value)}),n.isInit=!1},100)},components:{Tab:i.a,TabItem:r.a},methods:{onItemClick:function(n){this.isInit||this.$router.push({name:this.module[n].name})}},data:function(){return{tabIndex:0,isInit:!0,module:[{name:"Index",value:0},{name:"Device",value:1},{name:"PersonInfo",value:2}],tabColor:"white"}}}),d=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"main"},[e("tab",{attrs:{"bar-active-color":n.tabColor,"active-color":n.tabColor,"default-color":n.tabColor},on:{"on-index-change":n.onItemClick},model:{value:n.tabIndex,callback:function(t){n.tabIndex=t},expression:"tabIndex"}},[e("tab-item",{attrs:{selected:""}},[n._v("联家")]),n._v(" "),e("tab-item",[n._v("设备")]),n._v(" "),e("tab-item",[n._v("我的")])],1),n._v(" "),e("router-view")],1)},l=[],c={render:d,staticRenderFns:l},u=c,m=e("VU/8"),p=o,s=m(a,u,!1,p,null,null);t.default=s.exports}});