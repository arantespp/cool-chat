(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(n,e){},115:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var r=t(26),a=t.n(r),u=t(43),c=t(17),o=t(0),i=t(59),s=t.n(i),l=function(){var n=Object(o.useState)(),e=Object(c.a)(n,2),t=e[0],r=e[1],i=Object(o.useState)(null),l=Object(c.a)(i,2),f=l[0],d=l[1];return Object(o.useEffect)(function(){s.a.getItem("user-data").then(function(n){return r(n)}).catch(function(n){return d(n)})},[t&&t.name]),{setUser:function(){var n=Object(u.a)(a.a.mark(function n(e){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.a.setItem("user-data",e);case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),d(n.t0);case 10:case"end":return n.stop()}},n,null,[[0,7]])}));return function(e){return n.apply(this,arguments)}}(),user:t,error:f}}},116:function(n,e,t){"use strict";t(117);var r=t(118);t.d(e,"useAllMessages",function(){return r.a});t(74);var a=t(174);t.d(e,"useSendMessage",function(){return a.a});t(75)},117:function(n,e){},118:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(77),a=t(17),u=t(0),c=t(74),o=t(75),i=function(){var n=Object(c.a)(),e=n.data,t=n.loading,i=Object(o.a)(),s=Object(u.useState)([]),l=Object(a.a)(s,2),f=l[0],d=l[1];return Object(u.useEffect)(function(){e&&e.getOldMessages&&d(function(n){return[].concat(Object(r.a)(e.getOldMessages),Object(r.a)(n))})},[e]),Object(u.useEffect)(function(){i&&d(function(n){return n.find(function(n){var e=n.author,t=n.content,r=n.dateTime;return e===i.author&&t===i.content&&r===i.dateTime})?n:[].concat(Object(r.a)(n),[i])})},[i]),{allMessages:f,loading:t}}},174:function(n,e,t){"use strict";t.d(e,"a",function(){return s});var r=t(4),a=t(44),u=t.n(a),c=t(45);function o(){var n=Object(r.a)(["\n  mutation sendMessage($author: String!, $content: String!) {\n    sendMessage(author: $author, content: $content) {\n      author\n      content\n      dateTime\n    }\n  }\n"]);return o=function(){return n},n}var i=u()(o()),s=function(){return function(n){return c.a.mutate({mutation:i,variables:n,fetchPolicy:"no-cache"})}}},179:function(n,e,t){"use strict";var r=t(26),a=t.n(r),u=t(43),c=t(17),o=t(0),i=t(73),s=function(){var n=Object(o.useState)(!1),e=Object(c.a)(n,2),t=e[0],r=e[1],s=Object(i.useUserData)(),l=s.setUser,f=s.user,d=s.error;return{signIn:function(){var n=Object(u.a)(a.a.mark(function n(e){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),n.next=3,l({name:e});case 3:r(!1);case 4:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),error:d,loading:t,signedIn:!!f}};t.d(e,"a",function(){return s})},195:function(n,e,t){n.exports=t(370)},32:function(n,e,t){"use strict";var r=t(179);t.d(e,"useSignIn",function(){return r.a});var a=t(116);t.o(a,"useAllMessages")&&t.d(e,"useAllMessages",function(){return a.useAllMessages}),t.o(a,"useSendMessage")&&t.d(e,"useSendMessage",function(){return a.useSendMessage});var u=t(73);t.o(u,"useAllMessages")&&t.d(e,"useAllMessages",function(){return u.useAllMessages}),t.o(u,"useSendMessage")&&t.d(e,"useSendMessage",function(){return u.useSendMessage})},369:function(n,e,t){},370:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),u=t(181),c=t.n(u);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(108),i=t(33),s=t(32),l=t(4),f=t(7);function d(){var n=Object(l.a)(["\n  max-width: 700px;\n  margin: auto;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]);return d=function(){return n},n}var g=f.a.div(d()),v=function(n){var e=n.ChatMessages,t=n.ChatInput;return a.a.createElement(g,null,a.a.createElement(e,null),a.a.createElement(t,null))},m=t(26),b=t.n(m),p=t(43),h=t(17);function O(){var n=Object(l.a)(["\n  color: blue;\n  font-size: 1em;\n  padding: 0.75em;\n  border: 2px solid blue;\n  border-radius: 3px;\n"]);return O=function(){return n},n}var j=f.a.button(O());function E(){var n=Object(l.a)(["\n  /* width: 100%; */\n  background-color: lightyellow;\n  border-radius: 10px;\n  padding: 10px;\n"]);return E=function(){return n},n}var x=f.a.div(E());function M(){var n=Object(l.a)(["\n  padding: 0.75em;\n  margin: 0 0.5em;\n  color: blue;\n  background: papayawhip;\n  border: none;\n  border-radius: 3px;\n"]);return M=function(){return n},n}var w=f.a.input(M()),S=function(){return a.a.createElement("p",null,"Carregando...")};function y(){var n=Object(l.a)(["\n  width: 100%;\n\n  display: flex;\n  align-items: stretch;\n\n  input {\n    flex: 1 1 100%;\n  }\n"]);return y=function(){return n},n}var k=f.a.div(y()),I=a.a.memo(function(n){var e=n.onSend,t=Object(r.useState)(!1),u=Object(h.a)(t,2),c=u[0],o=u[1],i=Object(r.useRef)(null),s=Object(r.useCallback)(function(){o(!0),e(i.current.value).then(function(){o(!1),i.current.value=""})},[e]);return a.a.createElement(k,null,a.a.createElement(w,{ref:i,disabled:c}),a.a.createElement(j,{onClick:s,disabled:c},c?"Enviando":"Enviar"))}),A=function(){var n=Object(s.useSendMessage)(),e=function(){var e=Object(p.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n({author:"Pedro",content:t});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}},e,null,[[0,5]])}));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(I,{onSend:e})},C=t(190),q=t.n(C);function T(){var n=Object(l.a)(["\n  font-size: 1.2em;\n  margin: 10px;\n"]);return T=function(){return n},n}function z(){var n=Object(l.a)(["\n  text-align: right;\n  font-size: 0.9em;\n  margin: 0px;\n  font-style: italic;\n"]);return z=function(){return n},n}function D(){var n=Object(l.a)(["\n  margin: 10px;\n  ","\n"]);return D=function(){return n},n}var R=f.a.div(D(),function(n){var e=n.align;return"margin-".concat(e,": 50px")}),U=f.a.p(z()),Y=f.a.p(T()),$=function(n){var e=n.author,t=n.content,r=n.dateTime,u=n.isYou;return a.a.createElement(R,{align:u?"left":"right"},a.a.createElement(x,null,a.a.createElement(Y,null,t),a.a.createElement(U,null,e,", \xe0s ",q()(r).format("HH:mm DD/MM/YY"))))};function P(){var n=Object(l.a)(["\n  overflow-y: scroll;\n"]);return P=function(){return n},n}var B=f.a.div(P()),H=function(n){var e=n.messages,t=n.username;return a.a.createElement(B,null,e.map(function(n,e){return a.a.createElement($,Object.assign({key:e},n,{isYou:t===n.author}))}))},J=function(){var n=Object(s.useAllMessages)(),e=n.allMessages;return n.loading?a.a.createElement(S,null):a.a.createElement(H,{messages:e,username:"Pedro"})},K=function(){return a.a.createElement(v,{ChatInput:A,ChatMessages:J})};function W(){var n=Object(l.a)(["\n  width: 100px;\n  margin-top: 10px;\n"]);return W=function(){return n},n}function _(){var n=Object(l.a)(["\n  max-width: 700px;\n  margin: auto;\n  padding-top: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return _=function(){return n},n}var F=f.a.div(_()),G=Object(f.a)(j)(W()),L=a.a.memo(function(n){var e=n.onSubmit,t=n.loading,u=Object(r.useRef)(null);return a.a.createElement(F,null,a.a.createElement("p",null,"Digite o seu nome"),a.a.createElement(w,{ref:u,disabled:t}),a.a.createElement(G,{onClick:function(){var n=u.current.value;return e(n||"an\xf4nimo")},disabled:t},"Entrar"))}),N=function(){var n=Object(s.useSignIn)(),e=n.signIn,t=n.signedIn,u=n.loading,c=n.error;console.log("aqui");var o=Object(r.useCallback)(function(n){e(n)},[]);return t?a.a.createElement(i.a,{to:"/"}):a.a.createElement(L,{onSubmit:o,loading:u,error:c})},Q=function(){var n=Object(s.useSignIn)().signedIn;return a.a.createElement(o.a,null,a.a.createElement(i.d,null,a.a.createElement(i.b,{path:"/sign-in",render:function(){return n?a.a.createElement(i.a,{to:"/"}):a.a.createElement(N,null)}}),a.a.createElement(i.b,{path:"/",render:function(){return n?a.a.createElement(K,null):a.a.createElement(i.a,{to:"/sign-in"})}})))};t(369);c.a.render(a.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},45:function(n,e,t){"use strict";t.d(e,"a",function(){return c});var r=t(182),a=t.n(r),u=t(59),c=new a.a({region:"us-east-1",url:"https://4hu5xrozqbfxfnnm3loeehxvba.appsync-api.us-east-1.amazonaws.com/graphql",auth:{type:"API_KEY",apiKey:"da2-sligow65s5fjdkrsnuvvahtpla"},disableOffline:!1,offlineConfig:{callback:function(n,e){if(n){var t=n.mutation;n.variables;console.warn("ERROR for ".concat(t),n)}else{var r=e.mutation;e.variables;console.info("SUCCESS for ".concat(r),e)}},storage:u}})},73:function(n,e,t){"use strict";var r=t(114);t.o(r,"useAllMessages")&&t.d(e,"useAllMessages",function(){return r.useAllMessages}),t.o(r,"useSendMessage")&&t.d(e,"useSendMessage",function(){return r.useSendMessage});var a=t(115);t.d(e,"useUserData",function(){return a.a})},74:function(n,e,t){"use strict";t.d(e,"a",function(){return f});var r=t(17),a=t(4),u=t(0),c=t(44),o=t.n(c),i=t(45);function s(){var n=Object(a.a)(["\n  query {\n    getOldMessages {\n      author\n      dateTime\n      content\n    }\n  }\n"]);return s=function(){return n},n}var l=o()(s()),f=function(){var n=Object(u.useState)({loading:!0}),e=Object(r.a)(n,2),t=e[0],a=e[1];return Object(u.useEffect)(function(){i.a.query({query:l}).then(function(n){var e=n.data,t=n.loading,r=n.errors;a({data:e,loading:t,errors:r})})},[t.loading]),t}},75:function(n,e,t){"use strict";t.d(e,"a",function(){return f});var r=t(17),a=t(4),u=t(0),c=t(44),o=t.n(c),i=t(45);function s(){var n=Object(a.a)(["\n  subscription {\n    sentMessage {\n      author\n      dateTime\n      content\n    }\n  }\n"]);return s=function(){return n},n}var l=o()(s()),f=function(){var n=Object(u.useState)(),e=Object(r.a)(n,2),t=e[0],a=e[1];return Object(u.useEffect)(function(){var n=i.a.subscribe({query:l}).subscribe(function(n){var e=n.data;a(e.sentMessage)},function(n){return console.log(n)});return function(){return n.unsubscribe()}},[]),t}},88:function(n,e){}},[[195,1,2]]]);
//# sourceMappingURL=main.7c6e879f.chunk.js.map