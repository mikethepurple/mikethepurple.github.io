(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Gh06:function(e,t,n){"use strict";n("sC2a"),n("U6Bt"),n("YbXK"),n("cFtU"),n("MIFh"),n("m210"),n("4DPX"),n("rzGZ"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=n("q1tI"),o=n("17x9"),s=(r=o)&&r.__esModule?r:{default:r};var u=function(e,t,n){var r=e.reduce((function(e,t){var n=t.font.replace(/ +/g,"+"),r=(t.weights||[]).join(",");return[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e),[n+(r&&":"+r)])}),[]).join("|"),a=document.createElement("link");return a.rel="stylesheet",a.href="https://fonts.googleapis.com/css?family="+r,t&&Array.isArray(t)&&t.length>0&&(a.href+="&subset="+t.join(",")),n&&(a.href+="&display="+n),a},c=function(e){var t=e.fonts,n=e.subsets,r=e.display,o=void 0===r?null:r,s=(0,i.useState)(u(t,n,o)),c=a(s,2),d=c[0],f=c[1];return(0,i.useEffect)((function(){return document.head.appendChild(d),function(){return document.head.removeChild(d)}}),[d]),(0,i.useEffect)((function(){f(u(t,n,o))}),[t,n,o]),null};c.propTypes={fonts:s.default.arrayOf(s.default.shape({font:s.default.string.isRequired,weights:s.default.arrayOf(s.default.oneOfType([s.default.string,s.default.number]))})).isRequired,subsets:s.default.arrayOf(s.default.string),display:s.default.string},t.default=c},RXBc:function(e,t,n){"use strict";n.r(t);n("q1tI");var r=n("XUBE"),a=n("wsiS"),i=(n("rMck"),n("Kvkj"),n("i8i4"),n("Gh06"),n("qKvR"));t.default=function(){return Object(i.a)("div",{id:"root",style:{fontFamily:"RobotoBoldCondensed"}},Object(i.a)(a.a,null),Object(i.a)("link",{rel:"preload",as:"font",href:"../fonts/robotocondensed-bold-webfont.woff2",type:"font/woff2",crossorigin:"anonymous"}),Object(i.a)("div",{className:"mainContent"},Object(i.a)("div",{onClick:function(){return window.open("/cv","_self")},className:"heading"},Object(i.a)(r.a,{className:"heading",headingFirst:" HELLO, MY NAME IS MISHA ",size:"32vh",speed:"16"})),Object(i.a)("div",{onClick:function(){return window.open("/cv","_self")},className:"heading"},Object(i.a)(r.a,{headingFirst:"I'M A PRODUCT STRATEGIST & DESIGNER ",size:"22vh",speed:"30"})),Object(i.a)("div",{onClick:function(){return window.open("/portfolio","_self")},className:"heading"},Object(i.a)(r.a,{headingFirst:"PORTFOLIO'S HERE ",size:"16.5vh",speed:"21"})),Object(i.a)("div",{onClick:function(){return window.open("/cv","_self")},className:"heading"},Object(i.a)(r.a,{headingFirst:"CURRICULUM VITAE ",size:"13.2vh",speed:"7"})),Object(i.a)("div",{onClick:function(){return window.open("/blog","_self")},className:"heading"},Object(i.a)(r.a,{headingFirst:"LINKEDIN BTW ",size:"11vh",speed:"10"}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5d25980fc8f24f3da741.js.map