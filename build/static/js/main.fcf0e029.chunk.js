(this.webpackJsonpclicker=this.webpackJsonpclicker||[]).push([[0],{15:function(e,t,a){e.exports=a(41)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),i=(a(20),a(3)),u=(a(21),a(22),a(8));var o=function(){return r.a.createElement("footer",{className:"footer"},"Created by Raqu ",Object(u.format)(new Date,"YYYY"))},s=a(9),p=a.n(s);a(39);var m=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"logoWrapper"},r.a.createElement("img",{src:p.a,className:"logo",alt:""})),r.a.createElement("div",{className:"center"},"Name of Game"),r.a.createElement("div",{className:"walletWrapper"},"Your wallet is ",e.counter,"$"," ",r.a.createElement("span",{className:e.multiplier?"sparks":"sparks hidden"},e.multiplier)),r.a.createElement("div",{className:"clearWrapper"},e.counter>0&&r.a.createElement("button",{className:"clearButton",onClick:function(){e.clearCookies()}},"Clear")))},f=a(10),d=a(11),b=a(2),v=a(12),E=a(14),h=(a(40),function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(f.a)(this,a),(e=t.call(this)).updateMultiply=e.updateMultiply.bind(Object(b.a)(e)),e}return Object(d.a)(a,[{key:"updateMultiply",value:function(e){this.props.updateState(e)}},{key:"renderButtons",value:function(){var e=this,t=this.props.elements;return t&&r.a.createElement("div",{className:"buttonsWrapper"},t.map((function(t,a){return r.a.createElement("button",{key:a,className:"buttons button".concat(a),onClick:function(){e.updateMultiply({multiplyDiff:t.multiplier,priceDiff:t.price})},disabled:t.price>e.props.counter},"".concat(t.label,"-").concat(t.multiplier,"-").concat(t.counter))})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},this.renderButtons())}}]),a}(r.a.Component)),y=new(a(13).a);var k=function(){var e=parseInt(y.get("counter"),10),t=parseInt(y.get("multiply"),10),a=y.get("multiplier"),c=[{label:"test",multiplier:1,price:0,counter:0},{label:"test",multiplier:4,price:200,counter:0},{label:"test",multiplier:6,price:500,counter:0},{label:"test",multiplier:7,price:1e3,counter:0},{label:"test",multiplier:8,price:2e3,counter:0}],l=Object(n.useState)(e||"0"),u=Object(i.a)(l,2),s=u[0],p=u[1],f=Object(n.useState)(t||0),d=Object(i.a)(f,2),b=d[0],v=d[1],E=Object(n.useState)(a||c),k=Object(i.a)(E,2),N=k[0],j=k[1];return Object(n.useEffect)((function(){document.getElementById("title").innerText="".concat(s,"$ - Game");var e=setTimeout((function(){console.log("counter",s+b),"0"!==s&&(y.set("counter",s+b,{path:"/"}),p(s+b))}),1e3);return function(){clearTimeout(e)}}),[s]),r.a.createElement("div",{className:"clicker"},r.a.createElement(m,{counter:s,multiplier:b,clearCookies:function(){p("0"),v(0),j(c),y.set("multiply",0,{path:"/"}),y.set("counter",0,{path:"/"}),y.set("multiplier",c,{path:"/"})}}),r.a.createElement(h,{elements:N,updateState:function(e){var t=e.multiplyDiff,a=e.priceDiff;v(b+t),p(s-a);var n=N.map((function(e){return e.multiplier===t&&e.price===a&&e.counter++,e}));j(n),y.set("multiply",b+t,{path:"/"}),y.set("counter",s-a,{path:"/"}),y.set("multiplier",n,{path:"/"})},counter:s}),r.a.createElement(o,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/logo.7be156dd.png"}},[[15,1,2]]]);
//# sourceMappingURL=main.fcf0e029.chunk.js.map