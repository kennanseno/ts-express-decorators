(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{733:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"broadcastothers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broadcastothers","aria-hidden":"true"}},[t._v("#")]),t._v(" BroadcastOthers "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { BroadcastOthers } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/socketio"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/ts-express-decorators/blob/v5.21.0/packages/socketio/src/decorators/broadcastOthers.ts#L0-L0"}},[t._v("/packages/socketio/src/decorators/broadcastOthers.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"typescript-lang "},[t._v("function "),a("span",{staticClass:"token function"},[t._v("BroadcastOthers")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("eventName"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("string")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("target"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("any")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" propertyKey"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("string")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" descriptor"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" PropertyDescriptor"),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" =>"),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("void")]),a("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{pre:!0},[a("p",[t._v("Broadcast the response for all client registered in the same namespace except to the current client.")]),t._v(" "),a("p",[t._v("With the "),a("code",[t._v("@BroadcastOthers")]),t._v(" decorator, the method will accept a return type (Promise or not).")]),t._v(" "),a("h3",{pre:!0,attrs:{id:"example"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SocketService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/nsp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyWS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"event"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BroadcastOthers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"returnEvent"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" @Nsp socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("6")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("7")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("8")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("9")]),a("br")])])])}],!1,null,null,null);s.default=e.exports}}]);