(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2rMq":function(e,t,n){var o;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return i}.call(t,n,t,e))||(e.exports=o)}()},DpGc:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),i=(n("XUBE"),n("wsiS"),n("Kvkj"),n("KiQA"),n("EMUK")),a=n.n(i);n("Wbzz"),n("91GP");function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=n("17x9"),g=n.n(w),b=n("dAtF"),y=n.n(b),v=n("2rMq"),O=n.n(v),T="https://platform.twitter.com/widgets.js";h(function(e){function t(e){var n;return s(this,t),(n=d(this,p(t).call(this,e))).state={isLoading:!0},n}return m(t,e),c(t,[{key:"buildChromeOptions",value:function(e){return e.chrome="",this.props.noHeader&&(e.chrome=e.chrome+" noheader"),this.props.noFooter&&(e.chrome=e.chrome+" nofooter"),this.props.noBorders&&(e.chrome=e.chrome+" noborders"),this.props.noScrollbar&&(e.chrome=e.chrome+" noscrollbar"),this.props.transparent&&(e.chrome=e.chrome+" transparent"),e}},{key:"buildOptions",value:function(){var e=Object.assign({},this.props.options);return this.props.autoHeight&&(e.height=this.refs.embedContainer.parentNode.offsetHeight),e=Object.assign({},e,{theme:this.props.theme,linkColor:this.props.linkColor,borderColor:this.props.borderColor,lang:this.props.lang})}},{key:"renderWidget",value:function(e){var t=this,n=this.props.onLoad;this.isMountCanceled||window.twttr.widgets.createTimeline({sourceType:this.props.sourceType,screenName:this.props.screenName,userId:this.props.userId,ownerScreenName:this.props.ownerScreenName,slug:this.props.slug,id:this.props.id||this.props.widgetId,url:this.props.url},this.refs.embedContainer,e).then((function(e){t.setState({isLoading:!1}),n&&n(e)}))}},{key:"componentDidMount",value:function(){var e=this;O.a.canUseDOM&&n("ojxP")(T,"twitter-embed",(function(){if(window.twttr){var t=e.buildOptions();t=e.buildChromeOptions(t),e.renderWidget(t)}else console.error("Failure to load window.twttr in TwitterTimelineEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{sourceType:g.a.oneOf(["profile","likes","list","collection","url","widget"]).isRequired,screenName:y()(g.a.string,(function(e){return!e.hasOwnProperty("userId")&&("profile"===e.sourceType||"likes"===e.sourceType)})),userId:y()(g.a.number,(function(e){return!e.hasOwnProperty("screenName")&&("profile"===e.sourceType||"likes"===e.sourceType)})),ownerScreenName:y()(g.a.string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),slug:y()(g.a.string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),id:y()(g.a.oneOfType([g.a.number,g.a.string]),(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("ownerScreenName")&&!e.hasOwnProperty("slug")||"collection"===e.sourceType})),url:y()(g.a.string,(function(e){return"url"===e.sourceType})),widgetId:y()(g.a.string,(function(e){return"widget"===e.sourceType})),options:g.a.object,autoHeight:g.a.bool,theme:g.a.oneOf(["dark","light"]),linkColor:g.a.string,borderColor:g.a.string,noHeader:g.a.bool,noFooter:g.a.bool,noBorders:g.a.bool,noScrollbar:g.a.bool,transparent:g.a.bool,lang:g.a.string,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),h(function(e){function t(e){var n;return s(this,t),(n=d(this,p(t).call(this,e))).state={isLoading:!0},n}return m(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createShareButton(e.props.url,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterShareButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{url:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),h(function(e){function t(e){var n;return s(this,t),(n=d(this,p(t).call(this,e))).state={isLoading:!0},n}return m(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createFollowButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterFollowButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{screenName:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),h(function(e){function t(e){var n;return s(this,t),(n=d(this,p(t).call(this,e))).state={isLoading:!0},n}return m(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createHashtagButton(e.props.tag,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterHashtagButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{tag:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),h(function(e){function t(e){var n;return s(this,t),(n=d(this,p(t).call(this,e))).state={isLoading:!0},n}return m(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMentionButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMentionButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{screenName:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func});var C=function(e){function t(e){var n;return s(this,t),(n=d(this,p(t).call(this,e))).state={isLoading:!0},n}return m(t,e),c(t,[{key:"renderWidget",value:function(){var e=this,t=this.props.onLoad;window.twttr?this.isMountCanceled||window.twttr.widgets.createTweet(this.props.tweetId,this.refs.embedContainer,this.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterTweetEmbed, aborting load.")}},{key:"componentDidMount",value:function(){var e=this;O.a.canUseDOM&&n("ojxP")(T,"twitter-embed",(function(){e.renderWidget()}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component);h(C,"propTypes",{tweetId:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),h(function(e){function t(e){var n;return s(this,t),(n=d(this,p(t).call(this,e))).state={isLoading:!0},n}return m(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMoment(e.props.momentId,e.refs.shareMoment,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMomentShare, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"shareMoment"}))}}]),t}(o.Component),"propTypes",{momentId:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),h(function(e){function t(e){var n;return s(this,t),(n=d(this,p(t).call(this,e))).state={isLoading:!0},n}return m(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createDMButton(e.props.id,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterDMButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{id:g.a.number.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),h(function(e){function t(e){var n;return s(this,t),(n=d(this,p(t).call(this,e))).state={isLoading:!0},n}return m(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createVideo(e.props.id,e.refs.embedContainer).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterVideoEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{id:g.a.string.isRequired,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),h(function(e){function t(e){var n;return s(this,t),(n=d(this,p(t).call(this,e))).state={isLoading:!0},n}return m(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createPeriscopeOnAirButton(e.props.username,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterOnAirButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{username:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func});var M=n("qKvR");t.default=function(e){var t=e.data;console.log(t);var n=Object(o.useState)("EVERYTHING"),r=(n[0],n[1],Object(o.useState)(!1));r[0],r[1];return Object(M.a)("div",{className:"problemGrid"},Object(M.a)("div",{className:"twitterLink"},Object(M.a)("a",{href:"https://twitter.com/messages/compose?text=example%20text&recipient_id=1001"},"Test your problem")),Object(M.a)("div",null,a.a.top.map((function(e,t){return Object(M.a)(C,{key:"content_item_"+t,className:"twitterFeed",tweetId:e.item})}))),Object(M.a)("div",null,a.a.new.map((function(e,t){return Object(M.a)(C,{key:"content_item_"+t,className:"twitterFeed",tweetId:e.item})}))))}},EMUK:function(e,t){e.exports={title:"YAML content used at build time with Gatsby",new:[{item:"1083592734038929408"},{item:"1083592734038929408"},{item:"1083592734038929408"},{item:"1083592734038929408"}],top:[{item:"463440424141459456"},{item:"463440424141459456"},{item:"463440424141459456"},{item:"463440424141459456"}]}},KiQA:function(e,t,n){"use strict";n("tUrg"),n("q1tI");var o=n("Wbzz"),r=(n("Kvkj"),n("qKvR"));t.a=function(e){var t=e.link,n=e.headingText,i=e.mainText;return Object(r.a)(o.a,{to:t,className:"portfolioBlock"},Object(r.a)("div",null,Object(r.a)("p",{className:"gridHeading"},n),Object(r.a)("p",{className:"gridText"},i)))}},dAtF:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n,o){return"boolean"==typeof e?e:"function"==typeof e?e(t,n,o):!(!0!=!!e||!e)},r=function(e,t){return Object.hasOwnProperty.call(e,t)},i=function(e,t,n,o){return o?new Error(o):new Error("Required "+e[t]+" `"+t+"` was not specified in `"+n+"`.")};t.default=function(e,t,n){return function(e,t){if("function"!=typeof e)throw new TypeError("The typeValidator argument must be a function with the signature function(props, propName, componentName).");if(t&&"string"!=typeof t)throw new TypeError("The error message is optional, but must be a string if provided.")}(e,n),function(a,s,u){for(var c=arguments.length,l=Array(3<c?c-3:0),d=3;d<c;d++)l[d-3]=arguments[d];return o(t,a,s,u)?r(a,s)?e.apply(void 0,[a,s,u].concat(l)):i(a,s,u,n):e.apply(void 0,[a,s,u].concat(l))}}},ojxP:function(e,t,n){var o,r,i;n("V+eJ"),n("KKXr"),i=function(){var e,t,n=document,o=n.getElementsByTagName("head")[0],r={},i={},a={},s={};function u(e,t){for(var n=0,o=e.length;n<o;++n)if(!t(e[n]))return!1;return 1}function c(e,t){u(e,(function(e){return t(e),1}))}function l(t,n,o){t=t.push?t:[t];var p=n&&n.call,f=p?n:o,m=p?t.join(""):n,h=t.length;function w(e){return e.call?e():r[e]}function g(){if(!--h)for(var e in r[m]=1,f&&f(),a)u(e.split("|"),w)&&!c(a[e],w)&&(a[e]=[])}return setTimeout((function(){c(t,(function t(n,o){return null===n?g():(o||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),s[n]?(m&&(i[m]=1),2==s[n]?g():setTimeout((function(){t(n,!0)}),0)):(s[n]=1,m&&(i[m]=1),void d(n,g)))}))}),0),l}function d(e,r){var i,a=n.createElement("script");a.onload=a.onerror=a.onreadystatechange=function(){a.readyState&&!/^c|loade/.test(a.readyState)||i||(a.onload=a.onreadystatechange=null,i=1,s[e]=2,r())},a.async=1,a.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,o.insertBefore(a,o.lastChild)}return l.get=d,l.order=function(e,t,n){!function o(r){r=e.shift(),e.length?l(r,o):l(r,t,n)}()},l.path=function(t){e=t},l.urlArgs=function(e){t=e},l.ready=function(e,t,n){e=e.push?e:[e];var o,i=[];return!c(e,(function(e){r[e]||i.push(e)}))&&u(e,(function(e){return r[e]}))?t():(o=e.join("|"),a[o]=a[o]||[],a[o].push(t),n&&n(i)),l},l.done=function(e){l([null],e)},l},e.exports?e.exports=i():void 0===(r="function"==typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=r)}}]);
//# sourceMappingURL=component---src-pages-problemhunt-js-197eb497b59f67f6ba19.js.map