(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{226:function(t,s,i){},278:function(t,s,i){"use strict";var a=i(226);i.n(a).a},320:function(t,s,i){"use strict";i.r(s);var a={data:function(){return{communityMembers:"22000+",communityTopics:"23000+",communityPosts:"240000+"}},mounted:function(){var t=this;fetch("https://community.openhab.org/about.json").then(function(s){s.json().then(function(s){s.about.stats&&(t.communityMembers=s.about.stats.user_count,t.communityTopics=s.about.stats.topic_count,t.communityPosts=s.about.stats.post_count)})}).catch(function(t){console.log("Failed fetching real-time stats from community.openhab.org - check above for CORS error messages")})}},o=(i(278),i(1)),c=Object(o.a)(a,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"community"},[i("h2",{staticClass:"slide"},[i("svg",{staticStyle:{width:"72px",height:"72px"},attrs:{viewBox:"0 0 24 24"}},[i("path",{attrs:{fill:"#2c3e50",d:"M2.81,14.12L5.64,11.29L8.17,10.79C11.39,6.41 17.55,4.22 19.78,4.22C19.78,6.45 17.59,12.61 13.21,15.83L12.71,18.36L9.88,21.19L9.17,17.66C7.76,17.66 7.76,17.66 7.05,16.95C6.34,16.24 6.34,16.24 6.34,14.83L2.81,14.12M5.64,16.95L7.05,18.36L4.39,21.03H2.97V19.61L5.64,16.95M4.22,15.54L5.46,15.71L3,18.16V16.74L4.22,15.54M8.29,18.54L8.46,19.78L7.26,21H5.84L8.29,18.54M13,9.5A1.5,1.5 0 0,0 11.5,11A1.5,1.5 0 0,0 13,12.5A1.5,1.5 0 0,0 14.5,11A1.5,1.5 0 0,0 13,9.5Z"}})]),t._v(" "),i("br"),t._v("\n    Ready to join the community?")]),t._v(" "),i("p",{staticClass:"slide"},[t._v("The vibrant openHAB community contributes examples and tutorials on a daily basis and is happy to help you!")]),t._v(" "),i("div",{staticClass:"community-stats"},[i("div",{staticClass:"community-stat slide-seq2"},[i("div",{staticClass:"community-stat-icon"},[i("svg",{staticStyle:{width:"36px",height:"36px"},attrs:{viewBox:"0 0 24 24"}},[i("path",{attrs:{fill:"#2c3e50",d:"M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z"}})])]),t._v(" "),i("div",{staticClass:"count"},[t._v(t._s(t.communityTopics))]),t._v(" "),i("div",{staticClass:"subtext"},[t._v("discussions")])]),t._v(" "),i("div",{staticClass:"community-stat slide-seq2"},[i("div",{staticClass:"community-stat-icon"},[i("svg",{staticStyle:{width:"36px",height:"36px"},attrs:{viewBox:"0 0 24 24"}},[i("path",{attrs:{fill:"#2c3e50",d:"M17,11H15V9H17M13,11H11V9H13M9,11H7V9H9M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"}})])]),t._v(" "),i("div",{staticClass:"count"},[t._v(t._s(t.communityPosts))]),t._v(" "),i("div",{staticClass:"subtext"},[t._v("posts")])]),t._v(" "),i("div",{staticClass:"community-stat slide-seq2"},[i("div",{staticClass:"community-stat-icon"},[i("svg",{staticStyle:{width:"36px",height:"36px"},attrs:{viewBox:"0 0 24 24"}},[i("path",{attrs:{fill:"#2c3e50",d:"M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"}})])]),t._v(" "),i("div",{staticClass:"count"},[t._v(t._s(t.communityMembers))]),t._v(" "),i("div",{staticClass:"subtext"},[t._v("members")])])]),t._v(" "),i("div",{staticClass:"join"},[i("router-link",{staticClass:"join-us-button slide-slow",attrs:{to:"about/showcase.html"}},[t._v("Showcase ➜")]),t._v(" "),i("a",{staticClass:"join-us-button slide-slow",attrs:{target:"_blank",href:"https://community.openhab.org"}},[t._v("Join Us ➜")])],1)])},[],!1,null,null,null);s.default=c.exports}}]);