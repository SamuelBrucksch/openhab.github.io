(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{521:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("This bundle exposes openHAB Rule extensions to be used with the MiOS Binding (1.x).")]),t._v(" "),e("p",[t._v("It exposes the ability to do the following things in the MiOS HA Controller from within openHAB rules]:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("The MiOS Action bundle relies upon the MiOS Binding (1.x) being installed and configured.  Once these are done, you're ready to use the rule extensions this bundle provides.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),e("p",[t._v("or")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),e("p",[t._v("The available "),e("em",[t._v("ServiceAction")]),t._v("'s are described in the "),e("a",{attrs:{href:"http://wiki.micasaverde.com/index.php/Luup_UPnP_Variables_and_Actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("MiOS Luup UPnP Variables and Actions"),e("OutboundLink")],1),t._v(" documentation.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),e("DocPreviousVersions"),t._v(" "),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"mios-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mios-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" MiOS Actions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("em",[this._v("Device Actions")]),this._v(" - Asynchronously invoke MiOS Device Actions involving 0, 1 or more parameters.")]),this._v(" "),s("li",[s("em",[this._v("Scenes Invocation")]),this._v(" - Asynchronously invoke MiOS Scenes")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("sendMiosAction(Item item, String action)")]),t._v(" - requests the "),e("em",[t._v("parameterless")]),t._v(" Device Action, specified through "),e("code",[t._v("action")]),t._v(", be invoked on the MiOS Device bound to "),e("code",[t._v("item")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("sendMiosAction(Item item, String action, List<<String,Object>> params)")]),t._v(" - as above, but for parameterized Device Actions.")]),t._v(" "),e("li",[e("code",[t._v("sendMiosScene(Item scene)")]),t._v(" - requests the scene associated with the "),e("code",[t._v("scene")]),t._v(" parameter be invoked on the MiOS Unit.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("action")]),this._v(" argument of the "),s("code",[this._v("sendMiosAction")]),this._v(" action is a string of the form:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("<ServiceURN>/<ServiceAction>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("<ServiceAlias>/<ServiceAction>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("where "),s("em",[this._v("ServiceURN")]),this._v(", "),s("em",[this._v("ServiceAlias")]),this._v(" and "),s("em",[this._v("ServiceAction")]),this._v(" have the same form as described in MiOS Binding (1.x) commands.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can use the MiOS "),s("code",[this._v("invoke")]),this._v(" URL to discover the "),s("em",[this._v("Actions")]),this._v(", and "),s("em",[this._v("Action-parameters")]),this._v(", your particular MiOS device supports:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("http://<host>:3480/data_request?id=invoke\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Invoking a Device Action and calling a Scene to turn off the AV.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rules"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Test action rules Off"')]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n        "),e("span",{attrs:{class:"token keyword"}},[t._v("Time cron")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"0 45 23 * * ?"')]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),e("span",{attrs:{class:"token function"}},[t._v("sendMiosAction")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FamilyMainLightsId"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Dimmer/SetLoadLevelTarget"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("newArrayList")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'newLoadlevelTarget'")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("0")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{attrs:{class:"token function"}},[t._v("sendMiosScene")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SceneGoodNight"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Invoking a Sonos Device on MiOS to "),s("em",[this._v("say")]),this._v(" something")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rules"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Test action say"')]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n        "),e("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" HallGarageDoorZoneTripped "),e("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),e("span",{attrs:{class:"token constant"}},[t._v("OPEN")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),e("span",{attrs:{class:"token function"}},[t._v("sendMiosAction")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OfficeSonosId"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Sonos/Say"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("newArrayList")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'Text'")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'Warning! Garage door opened'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'Volume'")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("50")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Disarm your Alarm Panel (Paradox, GE, Ademco/Vista, DSC, etc)")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rules"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Test action Disarm"')]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n        "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),e("span",{attrs:{class:"token function"}},[t._v("sendMiosAction")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVL3VistaPartition1ArmMode"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'Alarm/RequestArmMode'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("newArrayList")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'State'")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'Disarmed'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PINCode' "),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("1234")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);a.options.__file="readme.md";s.default=a.exports}}]);