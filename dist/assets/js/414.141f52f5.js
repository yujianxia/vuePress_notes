(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{775:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"非-react-jsx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非-react-jsx"}},[s._v("#")]),s._v(" 非 React JSX")]),s._v(" "),a("p",[s._v("TypeScript 让你能够以类型安全的方式，在 React 中使用 JSX 之外的其他东西。下面列出了一些可自定义的点，但请注意，这只适用于高级 UI 框架的作者。")]),s._v(" "),a("ul",[a("li",[s._v("你可以使用 "),a("code",[s._v('"jsx":"preserve"')]),s._v(" 选项来禁用 React 的样式触发。这意味着，JSX 将按原样被触发，然后你可以使用自定义转化器来转化 JSX 部分。")]),s._v(" "),a("li",[s._v("使用 "),a("code",[s._v("JSX")]),s._v(" 全局模块：\n"),a("ul",[a("li",[s._v("你可以通过定制 "),a("code",[s._v("JSX.IntrinsicElements")]),s._v(" 的接口成员来控制哪些 HTML 标签是可用的，以及如何对其进行类型检查；")]),s._v(" "),a("li",[s._v("当你在组件中使用时：\n"),a("ul",[a("li",[s._v("你可以通过自定义默认的 "),a("code",[s._v("interface ElementClass extends React.Component<any, any> { }")]),s._v(" 声明文件来控制哪个 "),a("code",[s._v("class")]),s._v(" 必须由组件继承；")]),s._v(" "),a("li",[s._v("你可以通过自定义 "),a("code",[s._v("declare module JSX { interface ElementAttributesProperty { props: {} } }")]),s._v(" 声明文件来控制使用的哪个属性（property）来检查特性（attribute）（默认是 "),a("code",[s._v("props")]),s._v("）。")])])])])])]),s._v(" "),a("h2",{attrs:{id:"jsxfactory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsxfactory"}},[s._v("#")]),s._v(" jsxFactory")]),s._v(" "),a("p",[s._v("通过 "),a("code",[s._v("--jsxFactory <JSX factory Name>")]),s._v(" 与 "),a("code",[s._v("--jsx react")]),s._v("，能让你不同于默认 "),a("code",[s._v("React")]),s._v(" 的方式使用 JSX 工厂函数。")]),s._v(" "),a("p",[s._v("这个新的工厂函数名字习惯被称之为 "),a("code",[s._v("createElement")]),s._v(" 函数。")]),s._v(" "),a("h3",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" jsxFactory "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jsxFactory'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" div "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("Hello JSX!")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("使用编译：")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[s._v("tsc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("jsx react "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("reactNamespace jsxFactory "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("m commonJS\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("编译结果：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use strict'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" jsxFactory_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jsxFactory'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" div "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jsxFactory_1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jsxFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello JSX!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"jsx-编译提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-编译提示"}},[s._v("#")]),s._v(" jsx 编译提示")]),s._v(" "),a("p",[s._v("你甚至可以使用"),a("code",[s._v("jsxPragma")]),s._v(" 为每个文件指定不同的 "),a("code",[s._v("jsxFactory")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-tsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** @jsx jsxFactory */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" jsxFactory "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jsxFactory'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" div "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("Hello JSX!")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("在 jsx 编译提示中，配合 "),a("code",[s._v("--jsx react")]),s._v(" 命令，这个文件将会被触发使用工厂函数：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use strict'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" jsxFactory_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jsxFactory'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" div "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jsxFactory_1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jsxFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello JSX!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);