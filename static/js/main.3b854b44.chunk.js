(this["webpackJsonpreact-lap"]=this["webpackJsonpreact-lap"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),o=a.n(c),r=a(3),u=a(7),m=a(2);a(13);function d(){var e=Object(n.useState)(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),d=Object(m.a)(o,2),i=d[0],s=d[1],E=Object(n.useState)({value:!1,id:void 0}),b=Object(m.a)(E,2),f=b[0],p=b[1],v=Object(n.useState)(""),N=Object(m.a)(v,2),O=N[0],g=N[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"add-todo"},l.a.createElement("label",{htmlFor:"addTodo"},"Add Todo"),l.a.createElement("div",null,l.a.createElement("input",{id:"addTodo",value:i,onChange:function(e){return s(e.target.value)}}),l.a.createElement("button",{className:"btn btn-add",onClick:function(){i&&(c((function(e){return[].concat(Object(u.a)(e),[{todo:i,date:new Date,complete:!1}])})),s(""))}},"Add"))),l.a.createElement("div",{className:"todos"},a.map((function(e,t){return l.a.createElement("div",{className:"todo",key:"todo-".concat(t+1)},l.a.createElement("button",{className:"btn",onClick:function(){return c((function(e){return e.map((function(e,a){return a===t?Object(r.a)(Object(r.a)({},e),{},{complete:!e.complete}):e}))}))}},e.complete?l.a.createElement("span",null,"\u2611"):l.a.createElement("span",null,"\u2610")),f.id===t&&f.value?l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{className:"edit-todo",defaultValue:O||e.todo,onChange:function(e){return g(e.target.value)}}),l.a.createElement("button",{className:"btn",onClick:function(){p({value:!1,id:void 0}),O&&(c((function(e){return e.map((function(e,a){return a===t?Object(r.a)(Object(r.a)({},e),{},{todo:O}):e}))})),g(""))}},l.a.createElement("span",null,"\u27a4"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"text"},e.todo),l.a.createElement("button",{className:"btn",onClick:function(){return p({value:!0,id:t})}},l.a.createElement("span",null,"\u270e"))),l.a.createElement("button",{className:"btn btn-del",onClick:function(){return c((function(e){return e.filter((function(e,a){return a!==t}))}))}},l.a.createElement("span",null,"\u2718")))}))))}a(14);function i(){return l.a.createElement("div",{className:"header"},l.a.createElement("nav",null,l.a.createElement("div",{className:"header-logo"},l.a.createElement("span",null,"\u2709")),l.a.createElement("div",{className:"header-body"},"Todo List")))}var s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,null),l.a.createElement(d,null))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.3b854b44.chunk.js.map