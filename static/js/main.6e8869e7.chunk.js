(this.webpackJsonpibike=this.webpackJsonpibike||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/bikeMark.8ba5e95c.svg"},18:function(e,t,a){e.exports=a(28)},24:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=a(13),i=a.n(o),s=a(15),u=a(6);var m=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"I-Bike"))};var f=function(e){var t=e.Filterdata,a=e.areas,c=Object(n.useState)(""),l=Object(u.a)(c,2),o=l[0],i=l[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(o),i("")},className:"searchbike"},r.a.createElement("select",{onChange:function(e){var t=e.target.value;i(t)},className:"searchbike-select"},r.a.createElement("option",null,"\u8acb\u9078\u64c7\u5730\u5340..."),a.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))),r.a.createElement("button",{className:"searchbike-btn"},"search"))},p=a(31),b=a(32),h=a(30),v=a(33),E=a(5),d=a(16),g=a.n(d),k=(a(24),new E.Icon({iconUrl:g.a,iconSize:[50,50]}));var w=function(e){var t=e.Markstep,a=e.CAddress;return r.a.createElement(p.a,{center:t,zoom:18,className:"map"},r.a.createElement(b.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(h.a,{position:t,icon:k},r.a.createElement(v.a,null,a)),r.a.createElement("button",{className:"closemap"},"X"))};var O=function(e){var t=e.data,a=t.Position,c=t.AvailableCNT,l=t.EmpCNT,o=t.CAddress,i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],f=s[1],p=[t.Y,t.X];return r.a.createElement("div",{className:"bikestep"},r.a.createElement("h3",null,"\u7ad9\u540d:",a," "),r.a.createElement("p",null,"\u53ef\u7528\u8eca\u8f1b:",c," / \u5269\u9918\u7a7a\u4f4d:",l," "),r.a.createElement("button",{onClick:function(){f((function(e){return!e}))}},m?"Close Map":"Show Map"),m&&r.a.createElement(w,{Markstep:p,CAddress:o}))};var j=function(e){var t=e.datas;return r.a.createElement("div",{className:"bikestepList"},t.map((function(e){return r.a.createElement(O,{key:e.ID,data:e})})))};var y=function(e){var t=e.dataL,a=e.setPageD,c=e.pageD,l=Object(n.useState)([]),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(1),f=Object(u.a)(m,2),p=f[0],b=f[1];Object(n.useEffect)((function(){for(var e=Math.ceil(t/10),a=[],n=1;n<=e;n++)a.push(n);s(a)}),[t]);var h=i.slice(10*p-10,10*p);return r.a.createElement("ul",{className:"pages"},r.a.createElement("li",{onClick:function(){a(c-1),c===h[0]&&b(p-1)},style:{display:h[0]===i[0]&&"none"}},"<"),h.map((function(e,t){return r.a.createElement("li",{className:e===c?"active":null,key:t,onClick:function(){return a(e)}},e)})),r.a.createElement("li",{onClick:function(){a(c+1),c===h.slice(-1)[0]&&b(p+1)},style:{display:h.slice(-1)[0]===i.slice(-1)[0]&&"none"}}," ",">"))};var C=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"cpoyright \xa9 ",e),r.a.createElement("div",null,"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/google",title:"Google"},"Google")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))};var S=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(u.a)(l,2),p=o[0],b=o[1],h=Object(n.useState)([]),v=Object(u.a)(h,2),E=v[0],d=v[1],g=Object(n.useState)(1),k=Object(u.a)(g,2),w=k[0],O=k[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://e-traffic.taichung.gov.tw/DataAPI/api/YoubikeAllAPI");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=(n=a.map((function(e){return e.CArea}))).filter((function(e,t,a){return a.indexOf(e)===t})),c(a),d(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),setInterval(e,6e4)}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(f,{Filterdata:function(e){if(e){var t=a.filter((function(t){return t.CArea===e}));b(t),O(1)}},areas:E}),r.a.createElement(j,{datas:p.length>0?p.slice(10*w-10,10*w):a.slice(10*w-10,10*w)}),r.a.createElement(y,{dataL:p.length>0?p.length:a.length,setPageD:O,pageD:w}),r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(27);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.6e8869e7.chunk.js.map