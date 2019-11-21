(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{1044:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("This binding is for using your Milight, Easybulb or LimitlessLed bulbs and the iBox.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.youtube.com/watch?v=zNe9AkQbfmc",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.youtube.com/vi/zNe9AkQbfmc/0.jpg",alt:"openHAB Milight"}}),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("The binding supports Milight/Easybulb bridges from 2014+, iBox from 2016 and iBox2 from 2017 and their respective bulbs.\nThe Dual White bulbs from 2015 and the new generation of Dual White bulbs are supported.\nRGB/White from 2014 and the new generation RGB/White from 2016 as well as RGB/Cold,Warmwhite and iBox bulbs work.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Please note that LD382, LD382A, LD686 RGB stripes and bulbs are supported by the\n"),s("a",{attrs:{href:"https://www.openhab.org/addons/bindings/wifiled/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WifiLed Binding"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("All supported bridges can be discovered by triggering a search in openHAB's Inbox.\nFound bridges will show up and can easily be added as things.\nUnfortunately Milight like bulbs have no back channel and can not report their presence, therefore\nbulb discovery is not possible.")]),t._v(" "),s("p",[t._v("Your device needs to be connected to your local network (i.e. by using the WPS button connection method or the native App shipped with the device).\nRead the device manual for more information about how to connect your device to your network.")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("Besides adding bridges through Paper UI, you can also add them manually in your Thing\nconfiguration file.\niBox and iBox2 have the version 6, older milight bridges have the version 3.\nThe ID is the MAC address of the bridge in hexadecimal digits.")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("The Thing configuration for the bridge uses the following syntax")]),t._v(" "),s("ul",[s("li",[t._v("Bridge milight:bridgeV3:"),s("any",{attrs:{name:""}},[t._v(' &lsqb host="'),s("code",[t._v("<IP-Address of bridge>")]),t._v('", bridgeid="'),s("code",[t._v("<mac>")]),t._v('" &rsqb')])],1),t._v(" "),s("li",[t._v("Bridge milight:bridgeV6:"),s("any",{attrs:{name:""}},[t._v(' &lsqb host="'),s("code",[t._v("<IP-Address of bridge>")]),t._v('", bridgeid="'),s("code",[t._v("<mac>")]),t._v('", passwordByte1="<0-255>", passwordByte2="<0-255>" &rsqb')])],1)]),t._v(" "),s("p",[t._v("Optionally, the following parameters can be added")]),t._v(" "),s("ul",[s("li",[t._v("repeat="),s("integer",[t._v(" (defaults to 1, if not defined)\nUsually the bridge receives all commands albeit UDP is used. But the actual bulbs might be slightly out of bridge radio range and it sometimes helps to send commands multiple times.")])],1),t._v(" "),s("li",[t._v("delayTime="),s("integer",{attrs:{for:"",ms:""}},[t._v(" (defaults to 100, if not defined)\nTime to wait before sending another command to the bridge. It is safe to have a wait time of 1/10s but usually sufficient to just wait 50ms. If the value is too high, commands queue up.")])],1)]),t._v(" "),s("p",[t._v("The Thing configuration for the bulbs uses the following syntax:\n&lsqbThing&rsqb "),s("code",[t._v("<type of bulb>")]),t._v(" "),s("any",{attrs:{name:""}},[t._v(' &lsqb zone="<0-4>" &rsqb')])],1),t._v(" "),s("p",[t._v("The following bulb types are valid for configuration:")]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("The zone number is either 0 for meaning all bulbs of the same type or a valid zone number (1-4).\nFuture bridges may support more zones.")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("For dual white bulbs these channels are supported:")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("For rgbv2Led bulbs these channels are supported:")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("For rgbLed bulbs these channels are supported:")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("For rgbwLed/rgbwwLed bulbs these channels are supported:")]),t._v(" "),t._m(11),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.limitlessled.com/dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("(See the API)"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Limitations:")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v(".items")]),t._v(" "),t._m(14),s("p",[t._v(".sitemap")]),t._v(" "),t._m(15),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"milight-easybulb-limitless-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#milight-easybulb-limitless-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Milight/Easybulb/Limitless Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Bulb Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Milight Bridge")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("iBox")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("iBox2")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Dual White")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",[t._v("RGB/White")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",[t._v("2016 Dual White")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),s("tr",[s("td",[t._v("2016 RGB/White")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),s("tr",[s("td",[t._v("RGB/Cold,Warmwhite")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('Bridge milight:bridgeV3:mybridge [ host="192.168.0.70", bridgeid="ACCF23A6C0B4", passwordByte1=0, passwordByte2=0, repeat=2, delayTime=75 ] {\n    Thing whiteLed myWhite [ zone="0" ]\n    Thing rgbwwLed myRGB [ zone="4" ]\n    Thing rgbLed myOldRGB [ zone="1" ]\n}\n')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("rgbv2Led: The very first available bulb. Not very common anymore.")]),t._v(" "),s("li",[t._v("whiteLed: The dual white bulbs (with cold/warm white) used with v3-v5 bridges.")]),t._v(" "),s("li",[t._v("rgbLed: The rgb+white bulbs (with cold/warm white) used with v3-v5 bridges. About 4080 colors (255 colors * 16 brightness steps).")]),t._v(" "),s("li",[t._v("rgbiboxLed: The iBox bridge integrated color bulb without a dedicated white channel.")]),t._v(" "),s("li",[t._v("rgbwLed: The 2016/2017 color bulb without saturation support. About 6630 (255*26) colors.")]),t._v(" "),s("li",[t._v("rgbwwLed: The 2016/2017 color bulb with saturation support. About 1.044.480 (255"),s("em",[t._v("64")]),t._v("64) different color shades. Use this also for the newer generation of the dual white bulbs.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("ledbrightness       Controls the brightness of your bulbs\nledtemperature      Changes from cold white to warm white and vice versa\nlednightmode        Dims your bulbs to a very low level to use them as a night light\nanimation_mode_relative   Changes the animation mode. Use an IncreaseDecrease type of widget.\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("ledbrightness       Controls the brightness of your bulbs\nledcolor            Changes the color and brightness of your rgb bulbs when bound to a colorpicker\n                    or just the brightness if bound to a Dimmer or controls On/Off if bound to a switch.\nanimation_mode_relative   Changes the animation mode. Use an IncreaseDecrease type of widget.\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("lednightmode        Dims your bulbs to a very low level to use them as a night light\nledwhitemode        Disable all color (saturation is 0)\nledbrightness       Controls the brightness of your bulbs\nledcolor            Changes the color and brightness of your rgb bulbs when bound to a colorpicker\n                    or just the brightness if bound to a Dimmer or controls On/Off if bound to a switch.\nanimation_mode_relative   Changes the animation mode. Use an IncreaseDecrease type of widget.\nanimation_speed_relative  Changes the speed of your chosen animation mode\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("lednightmode        Dims your bulbs to a very low level to use them as a night light\nledwhitemode        Disable all color (saturation is 0)\nledbrightness       Controls the brightness of your bulbs\nledsaturation       Controls the saturation of your bulbs (not for rgbwLed!)\nledtemperature      Changes from cold white to warm white and vice versa (not for rgbwLed!)\nledcolor            Changes the color and brightness of your rgb bulbs when bound to a colorpicker\n                    or just the brightness if bound to a Dimmer or controls On/Off if bound to a switch.\nanimation_mode      Changes the animation mode. Chose between animation mode 1 to 9.\nanimation_mode_relative   Changes the animation mode. Use an IncreaseDecrease type of widget.\nanimation_speed_relative  Changes the speed of your chosen animation mode\nledlink             Sync bulb to this zone within 3 seconds of light bulb socket power on\nledunlink           Clear bulb from this zone within 3 seconds of light bulb socket power on\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Only the rgbww bulbs support changing their saturation, for rgbv2Led/rgbwLed the colorpicker will only set the hue and brightness and change to whitemode if the saturation is under a given threshold of 50%.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Light_Groundfloor")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"milight:whiteLed:ACCF23A6C0B4:0:ledbrightness"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("for")]),t._v(" all white bulbs\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Light_LivingroomB")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"milight:whiteLed:ACCF23A6C0B4:1:ledbrightness"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("changing")]),t._v(" brightness for bulb in zone "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Light_LivingroomC")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"milight:whiteLed:ACCF23A6C0B4:1:ledtemperature"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("changing")]),t._v(" colorTemperature "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("for")]),t._v(" bulb in zone "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RGBW_LivingroomB")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"milight:rgbwLed:ACCF23A6C0B4:2:ledbrightness"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("changing")]),t._v(" brightness for RGBW bulb in zone "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Color")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Light_Party")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"milight:rgbwLed:ACCF23A6C0B4:1:ledcolor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("# "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Colorpicker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("for")]),t._v(" rgb bulbs\n\n# You have to link the items "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("to")]),t._v(" the channels of your prefered group "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v(" in Paper UI after you have saved\n# your items "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("\n\n# The command types "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("nightMode")]),t._v(" and whiteMode are stateless and should be configured as pushbuttons as they only support a trigger action"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Light_GroundfloorN")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"milight:whiteLed:ACCF23A6C0B4:0:lednightmode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" # Activate the NightMode for all bulbs\n\n# The command types "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("animation_mode_relative")]),t._v(" and animation_speed are stateless and should be configured as pushbuttons as they only support INCREASE and DECREASE commands"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationMode")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"milight:rgbLed:ACCF23A6C0B4:5:animation_mode_relative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationSpeed")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"milight:rgbLed:ACCF23A6C0B4:5:animation_speed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# Animation Mode for RGBWW bulbs is different"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" it allows to pick a mode directly"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationModeRgbWW")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"milight:rgbwwLed:ACCF23A6C0B4:5:animation_mode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("AnimationMode "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("mappings")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DECREASE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" INCREASE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("AnimationSpeed "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("mappings")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DECREASE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" INCREASE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Light_GroundfloorN "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("mappings")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ON"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Night Mode'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);