(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{1117:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"open-energy-monitor-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#open-energy-monitor-binding","aria-hidden":"true"}},[e._v("#")]),e._v(" Open Energy Monitor Binding "),s("Badge",{attrs:{type:"warn",text:"v1"}})],1),e._v(" "),s("p",[e._v("The "),s("a",{attrs:{href:"http://openenergymonitor.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Energy Monitor"),s("OutboundLink")],1),e._v(" binding is used to get live data from open energy monitor devices.")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("C code is available on "),s("a",{attrs:{href:"https://github.com/openhab/openhab1-addons/blob/master/bundles/binding/org.openhab.binding.openenergymonitor/RFM12PiGW/rfm12pigw.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1)]),e._v(" "),s("blockquote",[s("p",[e._v("Note: To work with the new "),s("a",{attrs:{href:"http://wiki.openenergymonitor.org/index.php/RFM69Pi_V3",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFM69Pi module"),s("OutboundLink")],1),e._v(", serial bitrate 38400 must be used")])]),e._v(" "),s("p",[e._v("build command:")]),e._v(" "),e._m(2),s("p",[e._v("execution:")]),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._m(9),e._v(" "),s("p",[e._v("The syntax accepted is:")]),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),s("DocPreviousVersions"),e._v(" "),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("rfm12pigw")]),this._v(" is an application that reads telegrams from an RFM12Pi module and relays untouched telegrams to openHAB via UD. Open Energy Monitor binding listen to a UDP port and parses data from UDP telegrams.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("    gcc -std"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("gnu99 -o rfm12pigw rfm12pigw.c\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("    rfm12pigw -h \n    rfm12pigw -v -d /dev/ttyAMA0 -a "),t("span",{pre:!0,attrs:{class:"token number"}},[this._v("192.168")]),this._v(".1.10\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This binding can be configured in the file "),t("code",[this._v("services/openenergymonitor.cfg")]),this._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Property")]),e._v(" "),s("th",[e._v("Default")]),e._v(" "),s("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("udpPort")]),e._v(" "),s("td",[e._v("9997")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[e._v("UDP port of the Open Energy Monitor devices")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("<rule>")])]),e._v(" "),s("td"),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[s("code",[e._v("<node address>:<data type(byte indexes)>")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("where "),t("code",[this._v("<rule>")]),this._v(" is in the format used in this example:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("phase1RealPower=10:U16(2|1)\nphase1ApparentPower=10:U16(4|3)\nphase1Current=10:U16(6|5)\nphase1PowerFactor=10:U16(8|7)\nphase2RealPower=10:U16(10|9)\nphase2ApparentPower=10:U16(12|11)\nphase2Current=10:U16(14|13)\nphase2PowerFactor=10:U16(16|15)\nphase3RealPower=10:U16(18|17)\nphase3ApparentPower=10:U16(20|19)\nphase3Current=10:U16(22|21)\nphase3PowerFactor=10:U16(24|23)\nrealPower=10:U16(26|25)\napparentPower=10:U16(28|27)\nvoltage=10:U16(30|29)\npulseCount=10:U32(34|33|32|31)\npulsePower=10:U16(36|35)\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"item-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('openenergymonitor="<rule>"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("where "),t("code",[this._v("<rule>")]),this._v(" was introduced in the binding configuration described above.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("RealPower")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"realPower"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ApparentPower")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"apparentPower"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Voltage")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"voltage"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase1RealPower")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase1RealPower"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase1ApparentPower")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase1ApparentPower"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase1Current")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase1Current:JS(divideby100.js)"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase1PowerFactor")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase1PowerFactor"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase2RealPower")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase2RealPower"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase2ApparentPower")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase2ApparentPower"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase2Current")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase2Current:JS(divideby100.js)"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase2PowerFactor")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase2PowerFactor"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase3RealPower")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase3RealPower"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase3ApparentPower")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase3ApparentPower"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase3Current")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase3Current / 100"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase3PowerFactor")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase3PowerFactor"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("PulseEnergy")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cumulative(pulseCount):JS(divideby5000.js)"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("PulsePower")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"pulsePower"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase123RealPower")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase1RealPower+phase2RealPower+phase3RealPower"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Phase123Current")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" openenergymonitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phase1Current+phase2Current+phase3Current:JS(divideby100.js)"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])}],!1,null,null,null);t.default=n.exports}}]);