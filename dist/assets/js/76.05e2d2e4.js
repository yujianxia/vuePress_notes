(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{438:function(t,s,a){"use strict";a.r(s);var r=a(25),v=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"quirks模式是什么-它和standards模式有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quirks模式是什么-它和standards模式有什么区别"}},[t._v("#")]),t._v(" Quirks模式是什么？它和Standards模式有什么区别?")]),t._v(" "),a("p",[t._v("从 IE6 开始，引入了 "),a("code",[t._v("Standards")]),t._v(" 模式，标准模式中，浏览器尝试给符合标准的文档在规范上的正确处理达到在指定浏览器中的程度。")]),t._v(" "),a("p",[t._v("在 IE6 之前 CSS 还不够成熟，所以 IE5 等之前的浏览器对 "),a("code",[t._v("CSS")]),t._v(" 的支持很差， IE6 将对 "),a("code",[t._v("CSS")]),t._v("提供更好的支持，然而这时的问题就来了，因为有很多页面是基于旧的布局方式写的，而如果 IE6 支持 "),a("code",[t._v("CSS")]),t._v(" 则将令这些页面显示不正常，如何在即保证不破坏现有页面，又提供新的渲染机制呢？")]),t._v(" "),a("p",[t._v("在写程序时也会经常遇到这样的问题，如何保证原来的接口不变，又提供更强大的功能，尤其是新功能不兼容旧功能时。遇到这种问题时的一个常见做法是增加参数和分支，即当某个参数为真时，就使用新功能，而如果这个参数 不为真时，就使用旧功能，这样就能不破坏原有的程序，又提供新功能。IE6 也是类似这样做的，它将 DTD 当成了这个“参数”，因为以前的页面大家都不会去写 DTD，所以 IE6 就假定 如果写了 DTD，就意味着这个页面将采用对 CSS 支持更好的布局，而如果没有，则采用兼容之前的布局方式。这就是 Quirks")]),t._v(" "),a("ul",[a("li",[t._v("模式（怪癖模式，诡异模式，怪异模式）。")])]),t._v(" "),a("p",[t._v("区别：")]),t._v(" "),a("blockquote",[a("p",[t._v("总体会有布局、样式解析和脚本执行三个方面的区别。")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("盒模型：在 W3C 标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，而在 Quirks 模式下，IE 的宽度和高度还包含了 padding 和 border。")])]),t._v(" "),a("li",[a("p",[t._v("设置行内元素的高宽：在 Standards 模式下，给等行内元素设置 wdith 和 height 都不会生效，而在 quirks 模式下，则会生效。")])]),t._v(" "),a("li",[a("p",[t._v("设置百分比的高度：在 standards 模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置百分比的高度，子元素设置一个百分比的高度是无效的用")])])]),t._v(" "),a("ul",[a("li",[t._v("margin:0 auto 设置水平居中：使用 margin:0 auto 在 standards 模式下可以使元素水平居中，但在 quirks 模式下却会失效。")])])])}),[],!1,null,null,null);s.default=v.exports}}]);