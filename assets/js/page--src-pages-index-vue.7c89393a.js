(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{aK7f:function(e,t,n){},gEGz:function(e,t,n){"use strict";var a=n("aK7f");n.n(a).a},iyQ6:function(e,t,n){"use strict";n.r(t);var a={name:"AnnouncementHolder",props:["title","date","content"],data:function(){return{}}},o=(n("jnO0"),n("KHd+")),s={components:{AnnouncementHolder:Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"card"},[n("h2",[e._v(" Latest Announcement: "+e._s(e.title)+" ")]),n("h4",[e._v(" "+e._s(e.date)+" ")]),n("nav",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:e._s(e.content)}})])}),[],!1,null,null,null).exports}},l=(n("gEGz"),null),i=Object(o.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("h1",[e._v(e._s(e.$page.metadata.siteName))]),n("h3",[e._v(e._s(e.$page.metadata.semester))]),e._l(e.$page.announcements.edges,(function(e){return n("div",{key:e.node.id},[n("AnnouncementHolder",{attrs:{title:e.node.title,date:e.node.date,content:e.node.content}})],1)})),n("p",[e._v("\n    Be sure to replace ALL sample data (all markdown data, schedule.json, etc) otherwise someone's gonna need to explain why we have anime on the website.\n  ")]),n("p",[e._v("\n    Below should be a table, which is annoying to implement because each individual cell should probably be a component in order to deal with empty cases without spilling spaghetti sauce all over my repository.\n  ")]),n("ul",e._l(e.$page.weeks.edges,(function(t){return n("li",{key:t.node.id},[e._v("\n      "+e._s(t.node.date)+": "),n("a",{attrs:{href:t.node.lecture}},[e._v("Lecture")])])})),0),n("p",[e._v(" Have some sample pages ")]),n("g-link",{attrs:{to:"/homeworks/sample"}},[e._v("Homework")]),n("g-link",{attrs:{to:"/notes/sample"}},[e._v("Notes")]),n("g-link",{attrs:{to:"/projects/sample"}},[e._v("Projects")]),n("g-link",{attrs:{to:"/quizes/sample"}},[e._v("Quizes")])],2)}),[],!1,null,null,null);"function"==typeof l&&l(i);t.default=i.exports},jnO0:function(e,t,n){"use strict";var a=n("neTG");n.n(a).a},neTG:function(e,t,n){}}]);