(function(e){function t(t){for(var r,u,c=t[0],s=t[1],i=t[2],f=0,p=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2a81":function(e,t,n){"use strict";n("8e99")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("ReferralsList")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tree-table",{staticClass:"table",attrs:{columns:e.columns,"table-data":e.USERS}})},c=[],s=n("5530"),i=n("a1f4"),l=n("2f62"),f={name:"DefaultTableTree",components:{TreeTable:i["a"]},data:function(){return{columns:[{label:"user_name",id:"user_name"},{label:"referrals_count",id:"referrals"}],isOpen:!1}},computed:Object(s["a"])({},Object(l["c"])(["USERS"])),methods:Object(s["a"])({},Object(l["b"])(["GET_USERS_FROM_JSON"])),mounted:function(){this.GET_USERS_FROM_JSON().then((function(e){e&&console.log("data arrived")}))}},p=f,d=(n("2a81"),n("2877")),b=Object(d["a"])(p,u,c,!1,null,null,null),S=b.exports,_={name:"App",components:{ReferralsList:S}},h=_,O=(n("034f"),Object(d["a"])(h,o,a,!1,null,null,null)),m=O.exports,v=n("bc3a"),T=n.n(v);r["a"].use(l["a"]);var g=new l["a"].Store({state:{users:[],childrens:[]},mutations:{SET_USERS_TO_STATE:function(e,t){e.users=t}},actions:{GET_USERS_FROM_JSON:function(e){var t=e.commit;return T.a.get("https://cabinet.chatkeeper.app/static/chatreferrals/-1001241070453_34.json").then((function(e){return t("SET_USERS_TO_STATE",e.data.users),e.data.users})).catch((function(e){return console.log(e),e}))}},getters:{USERS:function(e){return e.users}}}),y=g;r["a"].config.productionTip=!1,r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)},store:y}).$mount("#app")},"85ec":function(e,t,n){},"8e99":function(e,t,n){}});
//# sourceMappingURL=app.8a7ea56b.js.map