(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{245:function(t,e,a){},344:function(t,e,a){"use strict";var n=a(245);a.n(n).a},631:function(t,e,a){"use strict";a.r(e);var n={name:"AboutPage",components:{Footer:a(75).default},data:function(){return{dateOptions:{weekday:"long",year:"numeric",month:"long",day:"numeric"}}},computed:{previewimage:function(){return this.$page.frontmatter.previewimage}}},r=(a(344),a(1)),s=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"event-page-header"},[a("img",{staticClass:"header-pattern",attrs:{draggable:"false",src:"/pattern.png",alt:""}}),t._v(" "),a("h1",{staticClass:"page-title"},[t._v("\n      "+t._s(t.$page.frontmatter.title)+"\n    ")])]),t._v(" "),a("div",{staticClass:"event-content"},[a("div",{staticClass:"content"},[a("div",{staticStyle:{"font-size":"1.2rem","margin-bottom":"3rem"}},[a("router-link",{attrs:{to:"/about/events.html"}},[t._v("« All Events")])],1),t._v(" "),a("a",{attrs:{href:t.$page.frontmatter.link,target:"_blank"}},[a("img",{attrs:{src:t.$page.frontmatter.event_image}})]),t._v(" "),a("dl",{staticClass:"event-details"},[a("dt",[t._v("Date")]),t._v(" "),a("dd",[a("span",[t._v(t._s(new Date(t.$page.frontmatter.date).toLocaleDateString("en-gb",t.dateOptions)))]),t._v(" "),t.$page.frontmatter.end_date?a("span",[t._v(" - "+t._s(new Date(t.$page.frontmatter.end_date).toLocaleDateString("en-gb",t.dateOptions)))]):t._e()]),t._v(" "),a("dt",[t._v("Location")]),t._v(" "),a("dd",[t._v(t._s(t.$page.frontmatter.location))])]),t._v(" "),a("hr"),t._v(" "),a("Content")],1)]),t._v(" "),a("Footer")],1)},[],!1,null,null,null);e.default=s.exports}}]);