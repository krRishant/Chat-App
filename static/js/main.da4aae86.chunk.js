(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},181:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},197:function(e,t,a){e.exports=a(419)},219:function(e,t,a){},225:function(e,t,a){},227:function(e,t,a){},413:function(e,t,a){},415:function(e,t,a){},417:function(e,t,a){},419:function(e,t,a){"use strict";a.r(t);var n,c=a(1),r=a.n(c),s=a(177),l=a.n(s),o=a(196),m=a(19),i=a(0),u=a(178),A=a.n(u),E=(a(219),a(195)),f=(a(225),a(180)),g=a.n(f),p=a(181),d=a.n(p),N=function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:d.a,alt:"online icon"}),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:g.a,alt:"close icon"}))))},b=(a(227),function(e){var t=e.setMessage,a=e.sendMessage,n=e.message;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var a=e.target.value;return t(a)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return a(e)}},"Send"))}),h=a(194),j=(a(413),a(124)),v=a.n(j),O=function(e){var t=e.message,a=t.text,n=t.user,c=!1,s=e.name.trim().toLowerCase();return n===s&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},s),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},v.a.emojify(a)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},v.a.emojify(a))),r.a.createElement("p",{className:"sentText pl-10 "},n))},C=(a(415),function(e){var t=e.messages,a=e.name;return r.a.createElement(h.a,{className:"messages"},t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(O,{message:e,name:a}))}))}),I=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],s=t[1],l=Object(c.useState)(""),u=Object(m.a)(l,2),f=u[0],g=u[1],p=Object(c.useState)(""),d=Object(m.a)(p,2),h=d[0],j=d[1],v=Object(c.useState)([]),O=Object(m.a)(v,2),I=O[0],S=O[1],x="https://chat-app-reac.herokuapp.com/",y=Object(i.e)();Object(c.useEffect)(function(){var e=A.a.parse(y.search),t=e.name,a=e.room;return n=Object(E.a)(x,{transports:["websocket","polling","flashsocket"]}),s(t),g(a),n.emit("join",{name:t,room:a},function(){}),function(){n.emit("disconnect"),n.off()}},[x,y.search]),Object(c.useEffect)(function(){n.on("message",function(e){S([].concat(Object(o.a)(I),[e]))})},[I]);return console.log(h,I),r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(N,{room:f}),r.a.createElement(C,{messages:I,name:a}),r.a.createElement(b,{message:h,setMessage:j,sendMessage:function(e){e.preventDefault(),h&&n.emit("sendMessage",h,function(){return j("")})}})))},S=a(66);a(417);function x(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),l=Object(m.a)(s,2),o=l[0],i=l[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return i(e.target.value)}})),r.a.createElement(S.b,{onClick:function(e){return a&&o?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(o)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}var y=function(){return r.a.createElement(S.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(x,null),exact:!0}),r.a.createElement(i.a,{path:"/chat",element:r.a.createElement(I,null)})))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(y,null))}},[[197,2,1]]]);
//# sourceMappingURL=main.da4aae86.chunk.js.map