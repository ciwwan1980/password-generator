(this.webpackJsonphi=this.webpackJsonphi||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),c=(a(9),a(10),a(1));function s(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(12),s=Object(c.a)(r,2),u=s[0],i=s[1],m=Object(n.useState)(!0),h=Object(c.a)(m,2),d=h[0],p=h[1],f=Object(n.useState)(!0),g=Object(c.a)(f,2),E=g[0],b=g[1],v="abcdefghijklmnopqrstuvwxyz0123456789",w=function(e){var t="",a=v;console.log(a,".......allcharacters"),console.log(v,"characters........"),d&&(a+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),E&&(a+="!\xa7$%&?");for(var n=0;n<e-1;n++){console.log(a);var l=Math.floor(Math.random()*a.length);console.log("random....",l),t+=a[l],console.log("ourpassword........",t)}o(t)};return l.a.createElement("div",{className:"wrapper"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(Math.floor(Math.random()*v.length)),w(u)},className:"form-wrapper"},l.a.createElement("fieldset",{className:"header"},l.a.createElement("h1",null," Result:"),l.a.createElement("input",{name:"password",value:a,readOnly:!0}),l.a.createElement("button",{className:"createAccount"},"Generate Password")),l.a.createElement("fieldset",null,l.a.createElement("label",null,l.a.createElement("span",null,"Setting")),l.a.createElement("label",null,"Passwordlength",l.a.createElement("input",{name:"passwordLength",value:u,onChange:function(e){return i(e.target.value)}})),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"big",checked:d,onChange:function(e){return p(!d)}}),"useMixedCase"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"special",checked:E,onChange:function(e){return b(!E)}}),"specialCase"))))}var u=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.4e560a47.chunk.js.map