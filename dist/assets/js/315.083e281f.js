(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{675:function(t,a,r){"use strict";r.r(a);var n=r(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("这里认为react的拆分前提是代码目录设计规范，模块定义规范，代码设计规范，符合程序设计的一般原则，例如高内聚、低耦合等等。")]),t._v(" "),r("p",[t._v("在的react项目中：\n1、在 api 层面单独封装，对外暴露http请求的结果。\n2、数据层使用的react-redux  异步中间件使用的是redux-thunk 分装处理异步请求，合业务逻辑处理。\n3、试图层，尽量使用 redux 层面的传递过来的数据，修改逻辑 也是重新触发action 更改props。\n4、静态类型的资源单独放置\n5、公共组件、高阶组件、插件单独放置\n6、工具类文件单独放置")]),t._v(" "),r("h3",{attrs:{id:"为什么要拆分组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要拆分组件"}},[t._v("#")]),t._v(" 为什么要拆分组件")]),t._v(" "),r("p",[t._v("提高可读性、可维护性")]),t._v(" "),r("h3",{attrs:{id:"如果不拆分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如果不拆分"}},[t._v("#")]),t._v(" 如果不拆分")]),t._v(" "),r("p",[t._v("代码量大，所有内容集中在一起\n相同组件无法复用\n业务开发分工不明确，开发人员要关心非业务的代码\n改代码时，可能会影响其他业务，牵一发动全身(耦合)\n任何一个操作都导致整个应用重新render")]),t._v(" "),r("h3",{attrs:{id:"目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),r("p",[t._v("架构清晰\n相同组件能够复用\n业务分工明确，开发人员仅专注与自己的业务\n每个组件负责独立的功能，与其他组件解耦合\n可使用SCU、memo减少不必要渲染")]),t._v(" "),r("h3",{attrs:{id:"如何拆分组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何拆分组件"}},[t._v("#")]),t._v(" 如何拆分组件")]),t._v(" "),r("p",[t._v("把相关联的东西放一起（按功能、业务）\n** 横向（按业务、功能模块划分）\n** 纵向（应用、系统层级划分）")])])}),[],!1,null,null,null);a.default=e.exports}}]);