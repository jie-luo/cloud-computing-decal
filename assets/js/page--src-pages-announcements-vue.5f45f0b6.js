(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{j51r:function(n,e,t){"use strict";var o={name:"AnnouncementHolder",props:["title","date","content"],data:function(){return{}}},a=(t("jnO0"),t("KHd+")),s=Object(a.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("nav",{staticClass:"announcement-holder"},[t("h2",[n._v(" "+n._s(n.title)+" ")]),t("h4",[n._v(" "+n._s(n.date)+" ")]),t("nav",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:n._s(n.content)}})])}),[],!1,null,null,null);e.a=s.exports},jnO0:function(n,e,t){"use strict";var o=t("neTG");t.n(o).a},neTG:function(n,e,t){},v0uk:function(n,e,t){"use strict";t.r(e);var o={metaInfo:{title:"Announcements"},components:{AnnouncementHolder:t("j51r").a}},a=t("KHd+"),s=null,c=Object(a.a)(o,(function(){var n=this.$createElement,e=this._self._c||n;return e("Layout",[e("h1",[this._v("Announcements")]),this._l(this.$page.announcements.edges,(function(n){return e("nav",{key:n.node.id},[e("AnnouncementHolder",{attrs:{title:n.node.title,date:n.node.date,content:n.node.content}}),e("hr")],1)}))],2)}),[],!1,null,null,null);"function"==typeof s&&s(c);e.default=c.exports}}]);