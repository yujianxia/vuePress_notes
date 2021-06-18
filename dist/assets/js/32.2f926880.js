(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{394:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"lazy-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lazy-component"}},[s._v("#")]),s._v(" lazy component")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("React.lazy")]),s._v("非常方便地实现异步加载模块的功能，通过这个 API 创建的对象如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  $$"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REACT_LAZY_TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  _ctor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ctor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// React uses these fields to store the result.")]),s._v("\n  _status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  _result"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("其中"),a("code",[s._v("_status")]),s._v("和"),a("code",[s._v("_result")]),s._v("两个值是非常重要的，用来标记加载完成的模块的内容，而"),a("code",[s._v("_ctor")]),s._v("则记载了传入的生产"),a("code",[s._v("thenable")]),s._v("对象的方法。")]),s._v(" "),a("p",[s._v("在更新过程中，遇到"),a("code",[s._v("lazy")]),s._v("组件会怎么样呢？")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mountLazyComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("_current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  elementType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  updateExpirationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  renderExpirationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_current "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    _current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alternate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n    workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alternate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n    workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("effectTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|=")]),s._v(" Placement\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" props "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pendingProps\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cancelWorkTimer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" Component "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("readLazyComponentType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("elementType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Component\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" resolvedTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolveLazyComponentTag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("startWorkTimer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" resolvedProps "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolveDefaultProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" child\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("resolvedTag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根据返回的组件类型执行更新")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// warning")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" child\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("首先看到如果"),a("code",[s._v("_current")]),s._v("存在值会强行删除"),a("code",[s._v("current")]),s._v("的引用，为什么要这么做呢？因为"),a("code",[s._v("lazy")]),s._v("组件只有在第一次渲染的时候才会调用该方法，等到组件已经加载完成了，就会走直接更新组件的流程，具体证据就是下面这句代码：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" resolvedTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("workInProgress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolveLazyComponentTag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("resolveLazyComponentTag")]),s._v("是"),a("code",[s._v("ReactFiber")]),s._v("提供的根据特性判断组件类型的方法，可以判断是"),a("code",[s._v("ClassComponent")]),s._v("还是"),a("code",[s._v("FunctionalComponent")]),s._v("还是一些内置类型。在组件加载完成之后，就直接设置"),a("code",[s._v("tag")]),s._v("为新的类型了，并且设置了"),a("code",[s._v("type")]),s._v("为返回的"),a("code",[s._v("Component")]),s._v("，就变成了异步加载过来的组件了。")]),s._v(" "),a("p",[s._v("那么如果还没加载完成呢？来看"),a("code",[s._v("readLazyComponentType")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Pending "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Resolved "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Rejected "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" readLazyComponentType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lazyComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" LazyComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" lazyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_status\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" lazyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_result\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" Resolved"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" result\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Component\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" Rejected"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" error"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" mixed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" result\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" error\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" Pending"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" thenable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Thenable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mixed"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" result\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" thenable\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      lazyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Pending\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ctor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" lazyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_ctor\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" thenable "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ctor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      thenable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("moduleObject")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lazyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" Pending"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" defaultExport "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" moduleObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("default\n            lazyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Resolved\n            lazyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" defaultExport\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("error")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lazyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" Pending"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            lazyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Rejected\n            lazyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" error\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      lazyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" thenable\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" thenable\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])]),a("p",[s._v("这里就用到了"),a("code",[s._v("_status")]),s._v("和"),a("code",[s._v("_result")]),s._v("，一开始"),a("code",[s._v("_status")]),s._v("是"),a("code",[s._v("-1")]),s._v("，所以不符合前三个"),a("code",[s._v("case")]),s._v("，然后就进入"),a("code",[s._v("default")]),s._v("，这里面调用了"),a("code",[s._v("_ctor")]),s._v("创建了"),a("code",[s._v("thenable")]),s._v("对象，调用"),a("code",[s._v("then")]),s._v("方法，"),a("code",[s._v("resolve")]),s._v("和"),a("code",[s._v("reject")]),s._v("之后会分别设置"),a("code",[s._v("_status")]),s._v("和"),a("code",[s._v("_result")]),s._v("，默认"),a("code",[s._v("_status")]),s._v("变成"),a("code",[s._v("pendding")]),s._v("，所以下一次进来会"),a("code",[s._v("throw thenable")]),s._v("，这就进入了"),a("code",[s._v("Suspense")]),s._v("的阶段了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);