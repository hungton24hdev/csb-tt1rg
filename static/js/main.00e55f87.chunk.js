(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var r=a(30),i=(a(52),a(45)),n=a(11),o=a(61),c=a(62),s=a(63),l=a(29),d=a(65),h=a(66),j=a(64),p=a(42);var u=a(13),b=[{text:"Group 1",value:"Group1"},{text:"Group 2",value:"Group2"}];function m(){var e,t=Object(n.useState)(b[0].value),a=Object(i.a)(t,2),r=a[0],m=a[1],O=Object(n.useState)([]),x=Object(i.a)(O,2),v=x[0],f=x[1];return Object(n.useEffect)((function(){f(function(e,t){var a=["Michael","Kathryn","Tamer","Martin","Davolio","Nancy","Fuller","Leverling","Peacock","Margaret","Buchanan","Janet","Andrew","Callahan","Laura","Dodsworth","Anne","Bergs","Vinet","Anton","Fleet","Zachery","Van","King","Jack","Rose"],r=["Manager","CFO","Designer","Developer","Program Directory","System Analyst","Project Lead"],i=["sample.com","arpy.com","rpy.com","mail.com","jourrapide.com"];"string"===typeof e&&(e=parseInt(e));for(var n=[],o=1;o<=e;o++){var c;n.push((c={},Object(p.a)(c,"".concat(t,"_VALUE"),t+o),Object(p.a)(c,"Employees",a[Math.floor(Math.random()*a.length)]+" "+a[Math.floor(Math.random()*a.length)]),Object(p.a)(c,"Designation",r[Math.floor(Math.random()*r.length)]),c));var s=n[o-1].Employees,l=s.substr(0,s.indexOf(" ")).toLowerCase();n[o-1].Mail=l+(Math.floor(100*Math.random())+10)+"@"+i[Math.floor(Math.random()*i.length)]}return n}(1e4,r))}),[r]),Object(u.jsx)("div",{className:"control-pane",children:Object(u.jsxs)("div",{className:"control-section",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(o.a,{id:"games",width:"220",index:0,popupHeight:"240px",dataSource:b,fields:{text:"text",value:"value"},onChange:function(e){m(e.value)}}),Object(u.jsx)("span",{id:"msg"}),Object(u.jsx)("br",{})]}),Object(u.jsxs)(c.a,{id:"overviewgrid",enableVirtualization:!0,rowHeight:38,height:"600",dataSource:v,children:[Object(u.jsxs)(s.b,{children:[Object(u.jsx)(s.a,{field:"".concat(r,"_VALUE"),visible:!0,isPrimaryKey:!0,width:"130"}),Object(u.jsx)(s.a,{field:"Employees",headerText:"Employee Name",width:"230",clipMode:"EllipsisWithTooltip",headerTemplate:(e="Custom name colum",function(){return Object(u.jsx)("span",{children:e})})}),Object(u.jsx)(s.a,{field:"Designation",headerText:"Designation",width:"170",clipMode:"EllipsisWithTooltip"}),Object(u.jsx)(s.a,{field:"Mail",headerText:"Mail",width:"230"})]}),Object(u.jsx)(l.c,{services:[d.a,h.a,j.a]})]},r)]})})}function O(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(m,{})})}var x=document.getElementById("root");Object(r.render)(Object(u.jsx)(O,{}),x)}},[[54,1,2]]]);
//# sourceMappingURL=main.00e55f87.chunk.js.map