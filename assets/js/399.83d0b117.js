(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{1182:function(t,e,a){"use strict";a.r(e);var s=a(1),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"sallegra-binding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sallegra-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" Sallegra Binding "),a("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),a("p",[t._v("The Sallegra binding supports the Sallegra Dimmer DA-ET-4, Sallegra Relay R-ET-4 and Sallegra Input ADI-ET-8/8.")]),t._v(" "),a("p",[t._v("This binding syncs the openHAB status with the actual status on the Sallegra Module.")]),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("A supported Sallegra device with the corresponding IP address, password and access to it via HTTP/Port 80.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("The syntax is:")]),t._v(" "),t._m(6),a("p",[t._v("where:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("You can use the following parameters in the item configuration to control a Sallegra module with the Openhab binding.")]),t._v(" "),t._m(10),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/sallegra.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("<modulename>")]),t._v(".hostname")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("hostname or IP address of the Sallegra module")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<modulename>")]),t._v(".password")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("password of the Sallegra module")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("where "),e("code",[this._v("<modulename>")]),this._v(" is a simple name you choose, like "),e("code",[this._v("bedroom")]),this._v(", to identify the specific module in items.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('sallegra="<modulename>:<modulespecific>:<port>"\n')])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("<modulename>")]),t._v(" defines the name of the module. This is the name you earlier set for the module in the binding configuration.")]),t._v(" "),a("li",[a("code",[t._v("<port>")]),t._v(" defines the hardware port on the Sallegra module.  On dimmer and relay modules, this is exactly 1:1 the relay/dimmer port number you can find on the Device Sign. On the input module you have to use the complete string of the input. You can find them in the xml file of the input module.")]),t._v(" "),a("li",[a("code",[t._v("<modulespecific>")]),t._v(" is a specific value to kind of specifiy the module. You should use the following strings according to the device:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Module")]),t._v(" "),a("th",[a("code",[t._v("<modulespecific>")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("R-ET-4")]),t._v(" "),a("td",[a("strong",[t._v("relay")])])]),t._v(" "),a("tr",[a("td",[t._v("ADI-ET-8/8")]),t._v(" "),a("td",[a("strong",[t._v("input")])])]),t._v(" "),a("tr",[a("td",[t._v("DA-ET-4")]),t._v(" "),a("td",[a("strong",[t._v("dimmer")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Light_Livingroom")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Light_Livingroom"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sallegra"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"livingroom:relay:1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Input1")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Input1 [%s]"')]),t._v("       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sallegra"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inputmodule:input:DI8"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Light_Bedroom")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dimmer 1 [%d %%]"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sallegra"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bedroom:dimmer:1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=r.exports}}]);