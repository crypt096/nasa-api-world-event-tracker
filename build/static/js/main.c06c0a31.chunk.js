(this["webpackJsonpnasa-events-tracking"]=this["webpackJsonpnasa-events-tracking"]||[]).push([[0],{21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),i=n.n(s),a=n(4),r=n.n(a),o=(n(21),n(9)),j=n.n(o),l=n(13),d=n(3),u=function(e){var t=e.info;return Object(c.jsxs)("div",{className:"location-info",children:[Object(c.jsx)("h2",{children:"Event Location Info"}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["ID: ",Object(c.jsx)("strong",{children:t.id})]}),Object(c.jsxs)("li",{children:["Title: ",Object(c.jsx)("strong",{children:t.title})]})]})]})},b=n(12),h=(n(26),n(5)),O=n(14),x=n.n(O),v=function(e){var t=e.eventData,n=e.center,i=e.zoom,a=Object(b.b)({accessToken:"pk.eyJ1IjoiY3J5cHQwIiwiYSI6ImNraHQxejVpZTBweTMycmxocHMzYXBvOGIifQ.WAkWXTK2IB49tyuMYa3fFw"}),r=Object(s.useState)(null),o=Object(d.a)(r,2),j=o[0],l=o[1],O=t.map((function(e,t){return 8===e.categories[0].id?Object(c.jsx)(b.a,{className:"location-marker",coordinates:[e.geometries[0].coordinates[0],e.geometries[0].coordinates[1]],onClick:function(){return l({id:e.id,title:e.title})},children:Object(c.jsx)(h.Icon,{icon:x.a,className:"location-icon"})},t):null}));return Object(c.jsx)("div",{className:"map",id:"map",children:Object(c.jsxs)(a,{style:"mapbox://styles/mapbox/streets-v11",containerStyle:{height:"100vh",width:"100vw"},center:[n.lng,n.lat],zoom:[i],children:[O,j&&Object(c.jsx)(u,{info:j})]})})};v.defaultProps={center:{lat:0,lng:0},zoom:3};var f=v,m=function(){return Object(c.jsxs)("div",{className:"spinner-container",children:[Object(c.jsx)("h1",{children:"Fetching data..."}),Object(c.jsxs)("div",{className:"spinner",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})]})},p=n(15),g=n.n(p),I=function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsxs)("h1",{children:[Object(c.jsx)(h.Icon,{icon:g.a,className:"icon"}),"Event tracker powered by NASA API"]})})};var k=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)(!1),r=Object(d.a)(a,2),o=r[0],u=r[1];return Object(s.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.events,i(c),u(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(I,{}),o?Object(c.jsx)(m,{}):Object(c.jsx)(f,{eventData:n}),";"]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),w()}},[[27,1,2]]]);
//# sourceMappingURL=main.c06c0a31.chunk.js.map