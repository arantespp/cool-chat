(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(n,e){},115:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var r=t(26),a=t.n(r),u=t(42),c=t(14),o=t(0),s=t(59),i=t.n(s),l=function(){var n=Object(o.useState)({name:""}),e=Object(c.a)(n,2),t=e[0],r=e[1],s=Object(o.useState)(null),l=Object(c.a)(s,2),f=l[0],d=l[1];return Object(o.useEffect)(function(){i.a.getItem("user-data").then(function(n){n&&r(n)}).catch(function(n){return d(n)})},[t.name]),{setUser:function(){var n=Object(u.a)(a.a.mark(function n(e){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.setItem("user-data",e);case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),d(n.t0);case 10:case"end":return n.stop()}},n,null,[[0,7]])}));return function(e){return n.apply(this,arguments)}}(),user:t,error:f}}},116:function(n,e,t){"use strict";t(117);var r=t(118);t.d(e,"useAllMessages",function(){return r.a});t(74);var a=t(174);t.d(e,"useSendMessage",function(){return a.a});t(75)},117:function(n,e){},118:function(n,e,t){"use strict";t.d(e,"a",function(){return s});var r=t(77),a=t(14),u=t(0),c=t(74),o=t(75),s=function(){var n=Object(c.a)(),e=n.data,t=n.loading,s=Object(o.a)(),i=Object(u.useState)([]),l=Object(a.a)(i,2),f=l[0],d=l[1];return Object(u.useEffect)(function(){e&&e.getOldMessages&&d(function(n){return[].concat(Object(r.a)(e.getOldMessages),Object(r.a)(n))})},[e]),Object(u.useEffect)(function(){s&&d(function(n){return n.find(function(n){var e=n.author,t=n.content,r=n.dateTime;return e===s.author&&t===s.content&&r===s.dateTime})?n:[].concat(Object(r.a)(n),[s])})},[s]),{allMessages:f,loading:t}}},174:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(4),a=t(44),u=t.n(a),c=t(45);function o(){var n=Object(r.a)(["\n  mutation sendMessage($author: String!, $content: String!) {\n    sendMessage(author: $author, content: $content) {\n      author\n      content\n      dateTime\n    }\n  }\n"]);return o=function(){return n},n}var s=u()(o()),i=function(){return function(n){return c.a.mutate({mutation:s,variables:n,fetchPolicy:"no-cache"})}}},179:function(n,e,t){"use strict";var r=t(26),a=t.n(r),u=t(42),c=t(14),o=t(0),s=t(73),i=function(){var n=Object(s.useUserData)(),e=n.setUser,t=n.user,r=n.error,i=Object(o.useState)(!1),l=Object(c.a)(i,2),f=l[0],d=l[1],g=Object(o.useState)(!!t),m=Object(c.a)(g,2),v=m[0],b=m[1];return Object(o.useEffect)(function(){b(!!t.name)},[t.name]),{signIn:function(){var n=Object(u.a)(a.a.mark(function n(t){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.next=3,e({name:t});case 3:d(!1);case 4:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),error:r,loading:f,signedIn:v}};t.d(e,"a",function(){return i})},195:function(n,e,t){n.exports=t(370)},369:function(n,e,t){},370:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),u=t(181),c=t.n(u);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(108),s=t(32),i=t(4),l=t(7);function f(){var n=Object(i.a)(["\n  max-width: 700px;\n  margin: auto;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]);return f=function(){return n},n}var d=l.a.div(f()),g=function(n){var e=n.ChatMessages,t=n.ChatInput;return a.a.createElement(d,null,a.a.createElement(e,null),a.a.createElement(t,null))},m=t(26),v=t.n(m),b=t(42),p=t(43),O=t(14);function h(){var n=Object(i.a)(["\n  color: blue;\n  font-size: 1em;\n  padding: 0.75em;\n  border: 2px solid blue;\n  border-radius: 3px;\n"]);return h=function(){return n},n}var j=l.a.button(h());function E(){var n=Object(i.a)(["\n  /* width: 100%; */\n  background-color: lightyellow;\n  border-radius: 10px;\n  padding: 10px;\n"]);return E=function(){return n},n}var x=l.a.div(E());function M(){var n=Object(i.a)(["\n  padding: 0.75em;\n  margin: 0 0.5em;\n  color: blue;\n  background: papayawhip;\n  border: none;\n  border-radius: 3px;\n"]);return M=function(){return n},n}var w=l.a.input(M()),S=function(){return a.a.createElement("p",null,"Carregando...")};function y(){var n=Object(i.a)(["\n  width: 100%;\n\n  display: flex;\n  align-items: stretch;\n\n  input {\n    flex: 1 1 100%;\n  }\n"]);return y=function(){return n},n}var k=l.a.div(y()),C=a.a.memo(function(n){var e=n.onSend,t=Object(r.useState)(!1),u=Object(O.a)(t,2),c=u[0],o=u[1],s=Object(r.useRef)(null),i=Object(r.useCallback)(function(){o(!0),e(s.current.value).then(function(){o(!1),s.current.value=""})},[e]);return a.a.createElement(k,null,a.a.createElement(w,{ref:s,disabled:c}),a.a.createElement(j,{onClick:i,disabled:c},c?"Enviando":"Enviar"))}),I=function(){var n=Object(p.useSendMessage)(),e=function(){var e=Object(b.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n({author:"Pedro",content:t});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}},e,null,[[0,5]])}));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(C,{onSend:e})},A=t(190),U=t.n(A);function q(){var n=Object(i.a)(["\n  font-size: 1.2em;\n  margin: 10px;\n"]);return q=function(){return n},n}function D(){var n=Object(i.a)(["\n  text-align: right;\n  font-size: 0.9em;\n  margin: 0px;\n  font-style: italic;\n"]);return D=function(){return n},n}function R(){var n=Object(i.a)(["\n  margin: 10px;\n  ","\n"]);return R=function(){return n},n}var T=l.a.div(R(),function(n){var e=n.align;return"margin-".concat(e,": 50px")}),z=l.a.p(D()),P=l.a.p(q()),Y=function(n){var e=n.author,t=n.content,r=n.dateTime,u=n.isYou;return a.a.createElement(T,{align:u?"left":"right"},a.a.createElement(x,null,a.a.createElement(P,null,t),a.a.createElement(z,null,e,", \xe0s ",U()(r).format("HH:mm DD/MM/YY"))))};function $(){var n=Object(i.a)(["\n  overflow-y: scroll;\n"]);return $=function(){return n},n}var B=l.a.div($()),_=function(n){var e=n.messages,t=n.username;return a.a.createElement(B,null,e.map(function(n,e){return a.a.createElement(Y,Object.assign({key:e},n,{isYou:t===n.author}))}))},H=function(){var n=Object(p.useAllMessages)(),e=n.allMessages;return n.loading?a.a.createElement(S,null):a.a.createElement(_,{messages:e,username:"Pedro"})},J=function(){return a.a.createElement(g,{ChatInput:I,ChatMessages:H})};function K(){var n=Object(i.a)(["\n  width: 100px;\n  margin-top: 10px;\n"]);return K=function(){return n},n}function L(){var n=Object(i.a)(["\n  max-width: 700px;\n  margin: auto;\n  padding-top: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return L=function(){return n},n}var N=l.a.div(L()),W=Object(l.a)(j)(K()),V=a.a.memo(function(n){var e=n.onSubmit,t=n.loading,u=Object(r.useRef)(null);return a.a.createElement(N,null,a.a.createElement("p",null,"Digite o seu nome"),a.a.createElement(w,{ref:u,disabled:t}),a.a.createElement(W,{onClick:function(){var n=u.current.value;return e(n||"an\xf4nimo")},disabled:t},"Entrar"))}),F=function(){var n=Object(p.useSignIn)(),e=n.signIn,t=n.signedIn,u=n.loading,c=n.error,o=Object(r.useCallback)(function(n){e(n)},[]);return t?a.a.createElement(s.a,{to:"/chat"}):a.a.createElement(V,{onSubmit:o,loading:u,error:c})},G=function(){return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/cool-chat"})),a.a.createElement(o.a,null,a.a.createElement(s.d,null,a.a.createElement(s.b,{path:"/chat",component:J}),a.a.createElement(s.b,{path:"/",component:F})))};t(369);c.a.render(a.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},43:function(n,e,t){"use strict";var r=t(179);t.d(e,"useSignIn",function(){return r.a});var a=t(116);t.o(a,"useAllMessages")&&t.d(e,"useAllMessages",function(){return a.useAllMessages}),t.o(a,"useSendMessage")&&t.d(e,"useSendMessage",function(){return a.useSendMessage});var u=t(73);t.o(u,"useAllMessages")&&t.d(e,"useAllMessages",function(){return u.useAllMessages}),t.o(u,"useSendMessage")&&t.d(e,"useSendMessage",function(){return u.useSendMessage})},45:function(n,e,t){"use strict";t.d(e,"a",function(){return c});var r=t(184),a=t.n(r),u=t(59),c=new a.a({region:"us-east-1",url:"https://4hu5xrozqbfxfnnm3loeehxvba.appsync-api.us-east-1.amazonaws.com/graphql",auth:{type:"API_KEY",apiKey:"da2-sligow65s5fjdkrsnuvvahtpla"},disableOffline:!1,offlineConfig:{callback:function(n,e){if(n){var t=n.mutation;n.variables;console.warn("ERROR for ".concat(t),n)}else{var r=e.mutation;e.variables;console.info("SUCCESS for ".concat(r),e)}},storage:u}})},73:function(n,e,t){"use strict";var r=t(114);t.o(r,"useAllMessages")&&t.d(e,"useAllMessages",function(){return r.useAllMessages}),t.o(r,"useSendMessage")&&t.d(e,"useSendMessage",function(){return r.useSendMessage});var a=t(115);t.d(e,"useUserData",function(){return a.a})},74:function(n,e,t){"use strict";t.d(e,"a",function(){return f});var r=t(14),a=t(4),u=t(0),c=t(44),o=t.n(c),s=t(45);function i(){var n=Object(a.a)(["\n  query {\n    getOldMessages {\n      author\n      dateTime\n      content\n    }\n  }\n"]);return i=function(){return n},n}var l=o()(i()),f=function(){var n=Object(u.useState)({loading:!0}),e=Object(r.a)(n,2),t=e[0],a=e[1];return Object(u.useEffect)(function(){s.a.query({query:l}).then(function(n){var e=n.data,t=n.loading,r=n.errors;a({data:e,loading:t,errors:r})})},[t.loading]),t}},75:function(n,e,t){"use strict";t.d(e,"a",function(){return f});var r=t(14),a=t(4),u=t(0),c=t(44),o=t.n(c),s=t(45);function i(){var n=Object(a.a)(["\n  subscription {\n    sentMessage {\n      author\n      dateTime\n      content\n    }\n  }\n"]);return i=function(){return n},n}var l=o()(i()),f=function(){var n=Object(u.useState)(),e=Object(r.a)(n,2),t=e[0],a=e[1];return Object(u.useEffect)(function(){var n=s.a.subscribe({query:l}).subscribe(function(n){var e=n.data;a(e.sentMessage)},function(n){return console.log(n)});return function(){return n.unsubscribe()}},[]),t}},88:function(n,e){}},[[195,1,2]]]);
//# sourceMappingURL=main.682df5a6.chunk.js.map