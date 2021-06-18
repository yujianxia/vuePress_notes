(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{738:function(t,s,e){"use strict";e.r(s);var a=e(25),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在本节正式开始前，让复习下这一章到目前为止所学的。")]),t._v(" "),e("p",[e("code",[t._v("Renderer")]),t._v("工作的阶段被称为"),e("code",[t._v("commit")]),t._v("阶段。"),e("code",[t._v("commit")]),t._v("阶段可以分为三个子阶段：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("before mutation阶段（执行"),e("code",[t._v("DOM")]),t._v("操作前）")])]),t._v(" "),e("li",[e("p",[t._v("mutation阶段（执行"),e("code",[t._v("DOM")]),t._v("操作）")])]),t._v(" "),e("li",[e("p",[t._v("layout阶段（执行"),e("code",[t._v("DOM")]),t._v("操作后）")])])]),t._v(" "),e("p",[t._v("本节看看"),e("code",[t._v("before mutation阶段")]),t._v("（执行"),e("code",[t._v("DOM")]),t._v("操作前）都做了什么。")]),t._v(" "),e("h2",{attrs:{id:"概览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),e("p",[e("code",[t._v("before mutation阶段")]),t._v("的代码很短，整个过程就是遍历"),e("code",[t._v("effectList")]),t._v("并调用"),e("code",[t._v("commitBeforeMutationEffects")]),t._v("函数处理。")]),t._v(" "),e("blockquote",[e("p",[t._v("这部分"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2104-L2127",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码在这里"),e("OutboundLink")],1),t._v("。为了增加可读性，示例代码中删除了不相关的逻辑")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存之前的优先级，以同步优先级执行，执行完毕后恢复之前优先级")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" previousLanePriority "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentUpdateLanePriority")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCurrentUpdateLanePriority")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SyncLanePriority"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将当前上下文标记为CommitContext，作为commit阶段的标志")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevExecutionContext "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" executionContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexecutionContext "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|=")]),t._v(" CommitContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理focus状态")]),t._v("\nfocusedInstanceHandle "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepareForCommit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("containerInfo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nshouldFireAfterActiveInstanceBlur "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// beforeMutation阶段的主函数")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitBeforeMutationEffects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finishedWork"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfocusedInstanceHandle "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br")])]),e("p",[t._v("重点关注"),e("code",[t._v("beforeMutation")]),t._v("阶段的主函数"),e("code",[t._v("commitBeforeMutationEffects")]),t._v("做了什么。")]),t._v(" "),e("h2",{attrs:{id:"commitbeforemutationeffects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commitbeforemutationeffects"}},[t._v("#")]),t._v(" commitBeforeMutationEffects")]),t._v(" "),e("p",[t._v("大体代码逻辑：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitBeforeMutationEffects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextEffect "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" current "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("shouldFireAfterActiveInstanceBlur "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" focusedInstanceHandle "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...focus blur相关")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" effectTag "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effectTag"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用getSnapshotBeforeUpdate")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("effectTag "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Snapshot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" NoEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitBeforeMutationEffectOnFiber")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调度useEffect")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("effectTag "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Passive"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" NoEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("rootDoesHavePassiveEffects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rootDoesHavePassiveEffects "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleCallback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NormalSchedulerPriority"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushPassiveEffects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    nextEffect "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br")])]),e("p",[t._v("整体可以分为三部分：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("处理"),e("code",[t._v("DOM节点")]),t._v("渲染/删除后的 "),e("code",[t._v("autoFocus")]),t._v("、"),e("code",[t._v("blur")]),t._v(" 逻辑。")])]),t._v(" "),e("li",[e("p",[t._v("调用"),e("code",[t._v("getSnapshotBeforeUpdate")]),t._v("生命周期钩子。")])]),t._v(" "),e("li",[e("p",[t._v("调度"),e("code",[t._v("useEffect")]),t._v("。")])])]),t._v(" "),e("p",[t._v("讲解下2、3两点。")]),t._v(" "),e("h2",{attrs:{id:"调用getsnapshotbeforeupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调用getsnapshotbeforeupdate"}},[t._v("#")]),t._v(" 调用getSnapshotBeforeUpdate")]),t._v(" "),e("p",[e("code",[t._v("commitBeforeMutationEffectOnFiber")]),t._v("是"),e("code",[t._v("commitBeforeMutationLifeCycles")]),t._v("的别名。")]),t._v(" "),e("p",[t._v("在该方法内会调用"),e("code",[t._v("getSnapshotBeforeUpdate")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("你可以在"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L222",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("看到这段逻辑")])]),t._v(" "),e("p",[t._v("从"),e("code",[t._v("React")]),t._v("v16开始，"),e("code",[t._v("componentWillXXX")]),t._v("钩子前增加了"),e("code",[t._v("UNSAFE_")]),t._v("前缀。")]),t._v(" "),e("p",[t._v("究其原因，是因为"),e("code",[t._v("Stack Reconciler")]),t._v("重构为"),e("code",[t._v("Fiber Reconciler")]),t._v("后，"),e("code",[t._v("render阶段")]),t._v("的任务可能中断/重新开始，对应的组件在"),e("code",[t._v("render阶段")]),t._v("的生命周期钩子（即"),e("code",[t._v("componentWillXXX")]),t._v("）可能触发多次。")]),t._v(" "),e("p",[t._v("这种行为和"),e("code",[t._v("React")]),t._v("v15不一致，所以标记为"),e("code",[t._v("UNSAFE_")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("更详细的解释参照"),e("a",{attrs:{href:"https://juejin.im/post/6847902224287285255#comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("为此，"),e("code",[t._v("React")]),t._v("提供了替代的生命周期钩子"),e("code",[t._v("getSnapshotBeforeUpdate")]),t._v("。")]),t._v(" "),e("p",[t._v("可以看见，"),e("code",[t._v("getSnapshotBeforeUpdate")]),t._v("是在"),e("code",[t._v("commit阶段")]),t._v("内的"),e("code",[t._v("before mutation阶段")]),t._v("调用的，由于"),e("code",[t._v("commit阶段")]),t._v("是同步的，所以不会遇到多次调用的问题。")]),t._v(" "),e("h2",{attrs:{id:"调度useeffect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调度useeffect"}},[t._v("#")]),t._v(" 调度"),e("code",[t._v("useEffect")])]),t._v(" "),e("p",[t._v("在这几行代码内，"),e("code",[t._v("scheduleCallback")]),t._v("方法由"),e("code",[t._v("Scheduler")]),t._v("模块提供，用于以某个优先级异步调度一个回调函数。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调度useEffect")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("effectTag "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Passive"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" NoEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("rootDoesHavePassiveEffects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rootDoesHavePassiveEffects "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleCallback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NormalSchedulerPriority"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发useEffect")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushPassiveEffects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("p",[t._v("在此处，被异步调度的回调函数就是触发"),e("code",[t._v("useEffect")]),t._v("的方法"),e("code",[t._v("flushPassiveEffects")]),t._v("。")]),t._v(" "),e("p",[t._v("接下来讨论"),e("code",[t._v("useEffect")]),t._v("如何被异步调度，以及为什么要异步（而不是同步）调度。")]),t._v(" "),e("h3",{attrs:{id:"如何异步调度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何异步调度"}},[t._v("#")]),t._v(" 如何异步调度")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("flushPassiveEffects")]),t._v("方法内部会从全局变量"),e("code",[t._v("rootWithPendingPassiveEffects")]),t._v("获取"),e("code",[t._v("effectList")]),t._v("。")]),t._v(" "),e("p",[t._v("关于"),e("code",[t._v("flushPassiveEffects")]),t._v("的具体讲解参照"),e("RouterLink",{attrs:{to:"/react/hooks/useeffect.html"}},[t._v("useEffect与useLayoutEffect一节")])],1),t._v(" "),e("p",[t._v("在"),e("RouterLink",{attrs:{to:"/react/process/completeWork.html#effectlist"}},[t._v("completeWork一节")]),t._v("讲到，"),e("code",[t._v("effectList")]),t._v("中保存了需要执行副作用的"),e("code",[t._v("Fiber节点")]),t._v("。其中副作用包括")],1),t._v(" "),e("ul",[e("li",[t._v("插入"),e("code",[t._v("DOM节点")]),t._v("（Placement）")]),t._v(" "),e("li",[t._v("更新"),e("code",[t._v("DOM节点")]),t._v("（Update）")]),t._v(" "),e("li",[t._v("删除"),e("code",[t._v("DOM节点")]),t._v("（Deletion）")])]),t._v(" "),e("p",[t._v("除此外，当一个"),e("code",[t._v("FunctionComponent")]),t._v("含有"),e("code",[t._v("useEffect")]),t._v("或"),e("code",[t._v("useLayoutEffect")]),t._v("，他对应的"),e("code",[t._v("Fiber节点")]),t._v("也会被赋值"),e("code",[t._v("effectTag")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("你可以从"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactHookEffectTags.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("看到"),e("code",[t._v("hook")]),t._v("相关的"),e("code",[t._v("effectTag")])])]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("flushPassiveEffects")]),t._v("方法内部会遍历"),e("code",[t._v("rootWithPendingPassiveEffects")]),t._v("（即"),e("code",[t._v("effectList")]),t._v("）执行"),e("code",[t._v("effect")]),t._v("回调函数。")]),t._v(" "),e("p",[t._v("如果在此时直接执行，"),e("code",[t._v("rootWithPendingPassiveEffects === null")]),t._v("。")]),t._v(" "),e("p",[t._v("那么"),e("code",[t._v("rootWithPendingPassiveEffects")]),t._v("会在何时赋值呢？")]),t._v(" "),e("p",[t._v("在上一节"),e("code",[t._v("layout之后")]),t._v("的代码片段中会根据"),e("code",[t._v("rootDoesHavePassiveEffects === true?")]),t._v("决定是否赋值"),e("code",[t._v("rootWithPendingPassiveEffects")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rootDidHavePassiveEffects "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rootDoesHavePassiveEffects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootDoesHavePassiveEffects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rootDoesHavePassiveEffects "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  rootWithPendingPassiveEffects "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  pendingPassiveEffectsLanes "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lanes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  pendingPassiveEffectsRenderPriority "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" renderPriorityLevel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("所以整个"),e("code",[t._v("useEffect")]),t._v("异步调用分为三步：")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("before mutation阶段")]),t._v("在"),e("code",[t._v("scheduleCallback")]),t._v("中调度"),e("code",[t._v("flushPassiveEffects")])]),t._v(" "),e("li",[e("code",[t._v("layout阶段")]),t._v("之后将"),e("code",[t._v("effectList")]),t._v("赋值给"),e("code",[t._v("rootWithPendingPassiveEffects")])]),t._v(" "),e("li",[e("code",[t._v("scheduleCallback")]),t._v("触发"),e("code",[t._v("flushPassiveEffects")]),t._v("，"),e("code",[t._v("flushPassiveEffects")]),t._v("内部遍历"),e("code",[t._v("rootWithPendingPassiveEffects")])])]),t._v(" "),e("h3",{attrs:{id:"为什么需要异步调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要异步调用"}},[t._v("#")]),t._v(" 为什么需要异步调用")]),t._v(" "),e("p",[t._v("摘录自"),e("code",[t._v("React")]),t._v("文档"),e("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#timing-of-effects",target:"_blank",rel:"noopener noreferrer"}},[t._v("effect 的执行时机"),e("OutboundLink")],1),t._v("：")]),t._v(" "),e("blockquote",[e("p",[t._v("与 componentDidMount、componentDidUpdate 不同的是，在浏览器完成布局与绘制之后，传给 useEffect 的函数会延迟调用。这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因此不应在函数中执行阻塞浏览器更新屏幕的操作。")])]),t._v(" "),e("p",[t._v("可见，"),e("code",[t._v("useEffect")]),t._v("异步执行的原因主要是防止同步执行时阻塞浏览器渲染。")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("经过本节学习，知道了在"),e("code",[t._v("before mutation阶段")]),t._v("，会遍历"),e("code",[t._v("effectList")]),t._v("，依次执行：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("处理"),e("code",[t._v("DOM节点")]),t._v("渲染/删除后的 "),e("code",[t._v("autoFocus")]),t._v("、"),e("code",[t._v("blur")]),t._v("逻辑")])]),t._v(" "),e("li",[e("p",[t._v("调用"),e("code",[t._v("getSnapshotBeforeUpdate")]),t._v("生命周期钩子")])]),t._v(" "),e("li",[e("p",[t._v("调度"),e("code",[t._v("useEffect")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);