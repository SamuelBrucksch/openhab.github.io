(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{818:function(t,e,n){"use strict";n.r(e);var i=n(0),s=Object(i.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("The TCP and UDP bindings provide basic support for simple ASCII-based protocols. They send and receive data as ASCII strings. Data sent out is by default padded with a CR/LF. This should be sufficient for many home automation devices that take simple ASCII-based control commands, or that send back text-based status messages.")]),t._v(" "),n("p",[t._v('The TCP part of the binding has a built-in mechanism to keep connections to remote hosts alive, and will reset connections at regular intervals to overcome the limitation of "stalled" connections or remote hosts.')]),t._v(" "),n("p",[t._v("The TCP & UDP Bindings act as a network client or as a network server.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("The indicated default values apply to both bindings unless otherwise noted.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("The syntax for the TCP & UDP binding configuration string is explained here:")]),t._v(" "),t._m(6),t._v(" "),n("p",[t._v("The format of the binding configuration is simple and looks like this:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),n("p",[t._v("Here are some examples of valid binding configuration strings:")]),t._v(" "),t._m(16),n("DocPreviousVersions"),t._v(" "),n("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"tcp-udp-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" TCP & UDP Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The TCP and UDP bindings can be configured in the files "),e("code",[this._v("services/tcp.cfg")]),this._v(" and "),e("code",[this._v("services/udp.cfg")]),this._v(", respectively.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Note: This is optional for the configuration and not necessary for receiving data. Item-defintions are enough for receiving data. (Developer confirm? 20150128). There's a bug in the binding that requires at least one udp configuration to be defined or the binding will not send UDP messages.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Property")]),t._v(" "),n("th",[t._v("Default")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("refreshinterval")]),t._v(" "),n("td"),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("only for receiving data")]),t._v(" "),n("td",[t._v("Refresh interval in milliseconds for polling data.  Example: "),n("code",[t._v("250")])])]),t._v(" "),n("tr",[n("td",[t._v("port")]),t._v(" "),n("td"),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("only for receiving data")]),t._v(" "),n("td",[t._v("Port to listen on for incoming connections")])]),t._v(" "),n("tr",[n("td",[t._v("addressmask")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Set to "),n("code",[t._v("true")]),t._v(" to allow masks in ip:port addressing, e.g. 192.168.0.1:"),n("code",[t._v("**")]),t._v(" etc.")])]),t._v(" "),n("tr",[n("td",[t._v("reconnectcron")]),t._v(" "),n("td"),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",[t._v("Cron-like string to reconnect remote ends, e.g for unstable connection or remote ends. Example: "),n("code",[t._v("0 0 0 ** * ?")])])]),t._v(" "),n("tr",[n("td",[t._v("retryinterval")]),t._v(" "),n("td"),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Interval between reconnection attempts when recovering from a communication error, in seconds.  Example: "),n("code",[t._v("5")])])]),t._v(" "),n("tr",[n("td",[t._v("queue")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Queue data whilst recovering from a connection problem (TCP only)")])]),t._v(" "),n("tr",[n("td",[t._v("buffersize")]),t._v(" "),n("td",[t._v("1024")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Maximum buffer size whilst reading incoming data")])]),t._v(" "),n("tr",[n("td",[t._v("preamble")]),t._v(" "),n("td"),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Pre-amble string that will be put in front of data being sent")])]),t._v(" "),n("tr",[n("td",[t._v("postamble")]),t._v(" "),n("td",[n("code",[t._v("\\r\\n")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Post-amble that will be appended to data being sent")])]),t._v(" "),n("tr",[n("td",[t._v("blocking")]),t._v(" "),n("td",[t._v("false`")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Perform all write/read (send/receive) operations in a blocking mode, e.g. the binding will wait for a reply from the remote end after data has been sent")])]),t._v(" "),n("tr",[n("td",[t._v("timeout")]),t._v(" "),n("td",[t._v("3000")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Timeout, in milliseconds, to wait for a reply when initiating a blocking write/read operation")])]),t._v(" "),n("tr",[n("td",[t._v("updatewithresponse")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Update the status of items using the response received from the remote end (if the remote end sends replies to commands)")])]),t._v(" "),n("tr",[n("td",[t._v("itemsharedconnections")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Set to "),n("code",[t._v("true")]),t._v(" to share connections within the item binding configurations")])]),t._v(" "),n("tr",[n("td",[t._v("bindingsharedconnections")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Set to "),n("code",[t._v("true")]),t._v(" to share connections between item binding configurations")])]),t._v(" "),n("tr",[n("td",[t._v("directionssharedconnections")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Set to "),n("code",[t._v("false")]),t._v(" to not share connections between inbound and outbound connections")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")]),this._v(" The examples here below are for the TCP protocol. UDP binding configuration are exactly the same, one only has to substitute "),e("code",[this._v('"tcp="')]),this._v(" with "),e("code",[this._v('"udp="')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('tcp="<direction>[<command>:<ip address>:<port>:<transformationrule>], <direction>[<command>:<ip address>:<port>:<transformationrule>], ..."\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("where "),e("code",[this._v("<direction>")]),this._v(" is one of the following values:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("<")]),this._v(" for inbound-triggered communication, whereby the openHAB runtime will act as a server and listen for incoming connections from the specified "),e("code",[this._v("<ip address>:<port>")])]),this._v(" "),e("li",[e("code",[this._v(">")]),this._v(" for outbound-triggered communication, whereby the openHAB runtime will act as a client and establish an outbound connection to the specified "),e("code",[this._v("<ip address>:<port>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("<command>")]),this._v(" is the openHAB command. For String items, "),e("code",[this._v("<command>:")]),this._v(" can be omitted.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("<ip address>")]),this._v(" is the hostname or IP address in dotted notation of the remote host.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("<transformationrule>")]),this._v(" can be one of:")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("a string in the form of "),n("code",[t._v("TEXT1(TEXT2)")]),t._v(", and then it goes through the transformation "),n("code",[t._v("TEXT1")]),t._v(" with the argument "),n("code",[t._v("TEXT2")]),t._v(";")]),t._v(" "),n("li",[t._v("empty or the string "),n("code",[t._v("default")]),t._v(", and then it returns the State or the Command as a String;")]),t._v(" "),n("li",[t._v("anything else and it sends back the "),n("code",[t._v("<transformationrule>")]),t._v(" string itself.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("⚠️ The "),e("code",[this._v("<transformationrule>")]),this._v(" field will be stripped of its single quotes if they are present; this means that in any case, "),e("code",[this._v("'TEXT'")]),this._v(" is treated the same way as "),e("code",[this._v("TEXT")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[t._v("tcp"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v("\">[ON:192.168.0.1:3000:'MAP(my.device.map)')], >[OFF:192.168.0.1:3000:'MAP(my.device.map)']\"")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// for a Switch Item where values are converted using the my.device.map")]),t._v("\ntcp"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v("\"<[192.168.0.2:3000:'REGEX((.*))']\"")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// for a String Item that captures some state of a remote device that connects to openHAB")]),t._v("\n")])])])}],!1,null,null,null);s.options.__file="readme.md";e.default=s.exports}}]);