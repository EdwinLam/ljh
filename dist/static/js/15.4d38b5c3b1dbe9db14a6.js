webpackJsonp([15],{UdXG:function(n,e,t){"use strict";function i(n){t("VeP8")}Object.defineProperty(e,"__esModule",{value:!0});var o=t("pDNl"),r=t("2sLL"),a=t("rHil"),c=t("ABCa"),d=(c.a,o.a,r.a,a.a,{components:{XHeader:c.a,XInput:o.a,XButton:r.a,Group:a.a},methods:{onImgError:function(n,e){console.log(n,e)}},data:function(){return{demo1CheckboxMax:["2","3"],dataItems:[{id:1,name:"客厅 ",icon:"icon-sofa2"},{id:2,name:"餐厅 ",icon:"icon-canzhuo"},{id:3,name:"厨房 ",icon:"icon-chufangwujinanzhuang"},{id:4,name:"洗手间 ",icon:"icon-hekriconqingjingyushicesuo"},{id:5,name:"自定义场景 ",icon:"icon-star"}]}}}),s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"device-scene"},[t("x-header",{attrs:{title:"设备编辑"}}),n._v(" "),t("div",{staticClass:"main-container"},[t("div",{staticClass:"tag-container"},[t("div",{staticClass:"title"},[n._v("\n        使用场景:\n      ")]),n._v(" "),t("div",{staticClass:"scene-items"},n._l(6,function(e,i){return t("div",{staticClass:"item"},[t("div",{staticClass:"tag"},[n._v("客厅")])])})),n._v(" "),t("div",{staticClass:"input-area"},[t("group",[t("x-input",{staticClass:"code-input",attrs:{placeholder:"例如:床头柜/插座"}})],1),n._v(" "),t("x-button",{staticClass:"add-btn",attrs:{type:"primary"}},[n._v("确定")])],1)])])],1)},l=[],m={render:s,staticRenderFns:l},p=m,u=t("VU/8"),b=i,x=u(d,p,!1,b,null,null);e.default=x.exports},VeP8:function(n,e,t){var i=t("lQYQ");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("7301c902",i,!0,{})},lQYQ:function(n,e,t){e=n.exports=t("FZ+f")(!1),e.push([n.i,"/*主色调*/\n/*辅助颜色*/\n/*输入框字体颜色*/\n/*阴影文字*/\n/*描述背景*/\n/*输入框提示样式*/\n::-webkit-input-placeholder {\n  color: #d3d3d3;\n}\n:-moz-placeholder {\n  color: #d3d3d3;\n}\n::-moz-placeholder {\n  color: #d3d3d3;\n}\n:-ms-input-placeholder {\n  color: #d3d3d3;\n}\n/*输入框*/\n.weiui-input {\n  border: 0.09rem solid #ADADAB;\n  border-radius: .4rem;\n  padding: .6rem .6rem !important;\n  font-size: 1.2rem;\n}\n/*按钮*/\n.weiui-btn {\n  box-shadow: 1px 1px 1px #888888;\n  font-weight: 100;\n  background-color: #2BA6E1 !important;\n}\n/*圆形图标背景*/\n.circle-icon {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n  background-color: #2BA6E1;\n  text-align: center;\n}\n.circle-icon .iconfont {\n  border-radius: 50%;\n  font-size: 2.5rem;\n  color: white;\n}\n/*按钮*/\n/*输入框设置*/\ninput {\n  color: #ADADAB !important;\n}\n/*幻灯片设置*/\n.ljh-dots {\n  z-index: 9999;\n}\n.ljh-dots a {\n  margin-left: .7rem !important;\n}\n.ljh-dots .vux-icon-dot.active {\n  background-color: #717372 !important;\n}\n.ljh-dots .vux-icon-dot {\n  width: .65rem !important;\n  height: .65rem !important;\n  border-radius: 1rem !important;\n  background-color: #DBDBDB !important;\n}\n.weiui-btn-disable {\n  background-color: #9E9EA0 !important;\n}\n/*顶部导航*/\n.vux-tab-container,\n.vux-tab-warp,\n.vux-tab {\n  height: 3.5rem !important;\n}\n.vux-tab-warp {\n  padding-top: 0rem !important;\n}\n.vux-tab {\n  background-color: #2BA6E1 !important;\n}\n.vux-tab .vux-tab-item {\n  font-size: 1.2rem !important;\n}\n/*幻灯片设置*/\n.vux-slider {\n  width: 100%;\n}\n.vux-slider .arrow-container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  position: absolute;\n  z-index: 9999;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  fill: #717372;\n}\n.vux-header-title {\n  font-weight: 100 !important;\n}\n.vux-header {\n  background-color: #2BA6E1 !important;\n}\n.vux-header-back {\n  font-weight: 100 !important;\n  font-size: 18px !important;\n  color: white !important;\n}\n.vux-header .vux-header-left .left-arrow {\n  color: white !important;\n}\n.vux-header .vux-header-left .left-arrow:before {\n  border: 1px solid white !important;\n  border-width: 1px 0 0 1px !important;\n  width: 18px !important;\n  height: 18px !important;\n  top: 5px !important;\n  left: 2px !important;\n}\n.device-scene {\n  height: 100%;\n}\n.device-scene .main-container {\n  padding-left: .75rem;\n  padding-right: .75rem;\n}\n.device-scene .main-container .tag-container .title {\n  font-size: 1.2rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  color: #ADADAB;\n}\n.device-scene .main-container .scene-items {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: row wrap;\n          flex-flow: row wrap;\n}\n.device-scene .main-container .scene-items .item {\n  margin-top: 1rem;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 33.33333333%;\n          flex: 0 0 33.33333333%;\n}\n.device-scene .main-container .scene-items .item .tag {\n  width: 80%;\n  font-size: 1rem;\n  letter-spacing: .2rem;\n  padding: .2rem 0rem .2rem;\n  border-radius: .2rem;\n  color: #ADADAB;\n  background-color: #F7F7F7;\n  text-align: center;\n}\n.device-scene .main-container .input-area {\n  margin-top: 5rem;\n}\n.device-scene .main-container .input-area .weui-cells:before {\n  border-top: none !important;\n}\n.device-scene .main-container .input-area .add-btn {\n  background-color: #2BA6E1;\n  margin-top: 2rem;\n  width: 50%;\n  padding: 0.3rem 2.5rem 0.3rem;\n}\n",""])}});