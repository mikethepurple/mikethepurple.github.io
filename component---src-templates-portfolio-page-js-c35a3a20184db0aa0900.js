(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4IfK":function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.useIsomorphicLayoutEffect=void 0;var o=n("q1tI"),i="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;t.useIsomorphicLayoutEffect=i},OTAv:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.useScrollPosition=r;var o=n("q1tI"),i=n("4IfK"),a="undefined"!=typeof window;function s(e){var t=e.element,n=e.useWindow;if(!a)return{x:0,y:0};var o=(t?t.current:document.body).getBoundingClientRect();return n?{x:window.scrollX,y:window.scrollY}:{x:o.left,y:o.top}}function r(e,t,n,r,c){var l=(0,o.useRef)(s({useWindow:r})),u=null,d=function(){var t=s({element:n,useWindow:r});e({prevPos:l.current,currPos:t}),l.current=t,u=null};(0,i.useIsomorphicLayoutEffect)((function(){if(a){var e=function(){c?null===u&&(u=setTimeout(d,c)):d()};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}}),t)}r.defaultProps={deps:[],element:!1,useWindow:!1,wait:null}},lTFH:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useScrollPosition",{enumerable:!0,get:function(){return o.useScrollPosition}});var o=n("OTAv")},w3i6:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),i=n("wsiS"),a=n("XUBE"),s=n("qKvR");n("Wbzz"),n("Kvkj"),n("i8i4");var r=n("lTFH"),c=n("vOnD").a.nav.withConfig({displayName:"sidemenustyled__StyledMenu",componentId:"sc-18ci319-0"})(["visibility:",";transition:all 200ms ",";transform:",";"],(function(e){return e.show?"visible":"hidden"}),(function(e){return e.show?"ease-in":"ease-out"}),(function(e){return e.show?"none":"translate(0, -100%)"}));var l=function(e){var t=e.title,n=e.tags,i=Object(o.useState)(!1),a=i[0],l=i[1];return Object(r.useScrollPosition)((function(e){e.prevPos;var t=e.currPos,n=t.y<-.95*window.innerHeight;console.log(t.y),n!==a&&l(n)}),[a]),Object(s.a)(c,{className:"sideMenu",show:a},Object(s.a)("div",{className:"sideBack"},Object(s.a)("div",{className:"sideBackText"},Object(s.a)("a",{href:"/portfolio"},"Back to portfolio"))),Object(s.a)("div",{className:"sideContent"},Object(s.a)("p",{className:"sideTitle"},t),Object(s.a)("span",{className:"sideTags"},n)))};n.d(t,"query",(function(){return u}));t.default=function(e){var t=e.data.markdownRemark;return console.log(t.frontmatter.tag),Object(s.a)("div",null,Object(s.a)(i.a,null),Object(s.a)("span",null,t.frontmatter.tag),Object(s.a)("div",{className:"portolioWrapper"},Object(s.a)("div",{className:"portfolioContent"},Object(s.a)("img",{source:"../images/2890.jpg"}),Object(s.a)("div",{className:"portfolioTitle heading"},Object(s.a)(a.a,{headingFirst:t.frontmatter.title+"  ",size:"32vh",speed:"30"})),Object(s.a)("div",{className:"portfolioTitle heading overlayText"},Object(s.a)(a.a,{headingFirst:t.frontmatter.title+"  ",size:"32vh",speed:"30"})),Object(s.a)("div",{className:"portfolioItem"},Object(s.a)("div",{className:"portfolioContent",dangerouslySetInnerHTML:{__html:t.html}}),Object(s.a)("div",{className:"scrollCheat"})),Object(s.a)("div",{className:"scrollRibbon heading"},Object(s.a)(a.a,{headingFirst:"SCROLL ",size:"3vh",speed:"30"})),Object(s.a)(l,{title:t.frontmatter.title,tags:t.frontmatter.type}))))};var u="104590242"}}]);
//# sourceMappingURL=component---src-templates-portfolio-page-js-c35a3a20184db0aa0900.js.map