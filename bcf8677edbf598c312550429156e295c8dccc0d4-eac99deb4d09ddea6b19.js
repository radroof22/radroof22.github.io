(self.webpackChunkrohan_portfolio=self.webpackChunkrohan_portfolio||[]).push([[600],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],a[s[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},9455:function(e,t,r){"use strict";r.d(t,{Z:function(){return Re}});var n=r(7294),o=r(4694),i=r(5697),a=r.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function d(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=m(t.slice(0,n)),i=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[o]=i,e}),{})}var y=!1;try{y=!0}catch(De){}function h(e){return o.parse.icon?o.parse.icon(e):null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function v(e){var t=e.forwardedRef,r=f(e,["forwardedRef"]),n=r.icon,i=r.mask,a=r.symbol,c=r.className,s=r.title,m=r.titleId,d=h(n),w=b("classes",[].concat(p(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,i=e.inverse,a=e.border,c=e.listItem,s=e.flip,u=e.size,f=e.rotation,p=e.pull,m=(l(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":c,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(u),null!=u),l(t,"fa-rotate-".concat(f),null!=f&&0!==f),l(t,"fa-pull-".concat(p),null!=p),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map((function(e){return m[e]?e:null})).filter((function(e){return e}))}(r)),p(c.split(" ")))),T=b("transform","string"==typeof r.transform?o.parse.transform(r.transform):r.transform),x=b("mask",h(i)),O=(0,o.icon)(d,u({},w,{},T,{},x,{symbol:a,title:s,titleId:m}));if(!O)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var E=O.abstract,A={ref:t};return Object.keys(r).forEach((function(e){v.defaultProps.hasOwnProperty(e)||(A[e]=r[e])})),g(E[0],A)}v.displayName="FontAwesomeIcon",v.propTypes={border:a().bool,className:a().string,mask:a().oneOfType([a().object,a().array,a().string]),fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),size:a().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=d(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[m(t)]=n}return e}),{attrs:{}}),a=n.style,c=void 0===a?{}:a,l=f(n,["style"]);return i.attrs.style=u({},i.attrs.style,{},c),t.apply(void 0,[r.tag,u({},i.attrs,{},l)].concat(p(o)))}.bind(null,n.createElement),w=r(7190),T=r(5444);function x(){return n.createElement("footer",{className:"bg-midnight text-white"},n.createElement("h1",{className:"text-center text-3xl pt-5"},"Rohan Mehta"),n.createElement("div",{className:"text-2xl text-center mt-6"},n.createElement("a",{href:"https://www.linkedin.com/in/rohan-mehta-cf/"},n.createElement(v,{"aria-label":"Linkedin Icon",icon:w.D9H,className:"mr-8 hover:text-slime"})),n.createElement("a",{href:"https://github.com/radroof22"},n.createElement(v,{"aria-label":"Github Icon",icon:w.zhw,className:"ml-8 hover:text-slime"}))),n.createElement("div",{className:"text-center mt-5 text-xl"},n.createElement(T.Link,{to:"/",className:"text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase text-white hover:text-slime"},"Home"),n.createElement(T.Link,{to:"/machine-learning",className:"text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase text-white hover:text-slime"},"Machine Learning"),n.createElement(T.Link,{to:"/web-development",className:"text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase text-white hover:text-slime"},"Web Development"),n.createElement(T.Link,{to:"/resume",className:"text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase text-white hover:text-slime"},"Resume")),n.createElement("div",{className:"pt-8"}))}var O=r(8014);function E(){var e=(0,n.useState)(!1),t=e[0],r=e[1];return n.createElement("div",null,n.createElement("nav",{className:"relative flex flex-wrap items-center justify-between px-2 py-3 bg-midnight "},n.createElement("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between"},n.createElement("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"},n.createElement(T.Link,{to:"/",className:"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"},"Rohan Mehta"),n.createElement("button",{className:"text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return r(!t)}},n.createElement(v,{icon:O.xiG}))),n.createElement("div",{className:"lg:flex flex-grow items-center"+(t?" flex":" hidden"),id:"example-navbar-danger"},n.createElement("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto"},n.createElement("li",{className:"nav-item"},n.createElement(T.Link,{to:"/machine-learning",className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"},"Machine Learning")),n.createElement("li",{className:"nav-item"},n.createElement(T.Link,{to:"/web-development",className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"},"Web Development")),n.createElement("li",{className:"nav-item"},n.createElement(T.Link,{to:"/resume",className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"},"Resume")))))))}var A,C,S,j,k=r(4839),N=r.n(k),P=r(2993),L=r.n(P),I=r(6494),M=r.n(I),R="bodyAttributes",D="htmlAttributes",_="titleAttributes",H={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},z=(Object.keys(H).map((function(e){return H[e]})),"charset"),B="cssText",q="href",F="http-equiv",U="innerHTML",Y="itemprop",W="name",K="property",V="rel",G="src",$="target",Z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},J="defaultTitle",Q="defer",X="encodeSpecialCharacters",ee="onChangeClientState",te="titleTemplate",re=Object.keys(Z).reduce((function(e,t){return e[Z[t]]=t,e}),{}),ne=[H.NOSCRIPT,H.SCRIPT,H.STYLE],oe="data-react-helmet",ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ce=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},se=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ue=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},fe=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},pe=function(e){var t=be(e,H.TITLE),r=be(e,te);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=be(e,J);return t||n||void 0},me=function(e){return be(e,ee)||function(){}},de=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return le({},e,t)}),{})},ye=function(e,t){return t.filter((function(e){return void 0!==e[H.BASE]})).map((function(e){return e[H.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},he=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&xe("Helmet: "+e+' should be of type "Array". Instead found type "'+ie(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||r===V&&"canonical"===e[r].toLowerCase()||l===V&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==U&&c!==B&&c!==Y||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=M()({},n[c],o[c]);n[c]=l}return e}),[]).reverse()},be=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ve=(A=Date.now(),function(e){var t=Date.now();t-A>16?(A=t,e(t)):setTimeout((function(){ve(e)}),0)}),ge=function(e){return clearTimeout(e)},we="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ve:r.g.requestAnimationFrame||ve,Te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ge:r.g.cancelAnimationFrame||ge,xe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Oe=null,Ee=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;Se(H.BODY,n),Se(H.HTML,o),Ce(f,p);var m={baseTag:je(H.BASE,r),linkTags:je(H.LINK,i),metaTags:je(H.META,a),noscriptTags:je(H.NOSCRIPT,c),scriptTags:je(H.SCRIPT,s),styleTags:je(H.STYLE,u)},d={},y={};Object.keys(m).forEach((function(e){var t=m[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(y[e]=m[e].oldTags)})),t&&t(),l(e,d,y)},Ae=function(e){return Array.isArray(e)?e.join(""):e},Ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=Ae(e)),Se(H.TITLE,t)},Se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(oe),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(oe):r.getAttribute(oe)!==a.join(",")&&r.setAttribute(oe,a.join(","))}},je=function(e,t){var r=document.head||document.querySelector(H.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===U)r.innerHTML=t.innerHTML;else if(n===B)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(oe,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ke=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Ne=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Z[r]||r]=e[r],t}),t)},Pe=function(e,t,r){switch(e){case H.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(o={key:e})[oe]=!0,i=Ne(r,o),[n.createElement(H.TITLE,i,e)];var e,r,o,i},toString:function(){return function(e,t,r,n){var o=ke(r),i=Ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+fe(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+fe(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case R:case D:return{toComponent:function(){return Ne(t)},toString:function(){return ke(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var o,i=((o={key:r})[oe]=!0,o);return Object.keys(t).forEach((function(e){var r=Z[e]||e;if(r===U||r===B){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),n.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===U||e===B)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+fe(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===ne.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},Le=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:Pe(H.BASE,t,n),bodyAttributes:Pe(R,r,n),htmlAttributes:Pe(D,o,n),link:Pe(H.LINK,i,n),meta:Pe(H.META,a,n),noscript:Pe(H.NOSCRIPT,c,n),script:Pe(H.SCRIPT,l,n),style:Pe(H.STYLE,s,n),title:Pe(H.TITLE,{title:f,titleAttributes:p},n)}},Ie=N()((function(e){return{baseTag:ye([q,$],e),bodyAttributes:de(R,e),defer:be(e,Q),encode:be(e,X),htmlAttributes:de(D,e),linkTags:he(H.LINK,[V,q],e),metaTags:he(H.META,[W,z,F,K,Y],e),noscriptTags:he(H.NOSCRIPT,[U],e),onChangeClientState:me(e),scriptTags:he(H.SCRIPT,[G,U],e),styleTags:he(H.STYLE,[B],e),title:pe(e),titleAttributes:de(_,e)}}),(function(e){Oe&&Te(Oe),e.defer?Oe=we((function(){Ee(e,(function(){Oe=null}))})):(Ee(e),Oe=null)}),Le)((function(){return null})),Me=(C=Ie,j=S=function(e){function t(){return ae(this,t),ue(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!L()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case H.SCRIPT:case H.NOSCRIPT:return{innerHTML:t};case H.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return le({},n,((t={})[r.type]=[].concat(n[r.type]||[],[le({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case H.TITLE:return le({},o,((t={})[n.type]=a,t.titleAttributes=le({},i),t));case H.BODY:return le({},o,{bodyAttributes:le({},i)});case H.HTML:return le({},o,{htmlAttributes:le({},i)})}return le({},o,((r={})[n.type]=le({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=le({},t);return Object.keys(e).forEach((function(t){var n;r=le({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,o={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[re[r]||r]=e[r],t}),t)}(se(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case H.LINK:case H.META:case H.NOSCRIPT:case H.SCRIPT:case H.STYLE:o=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=se(e,["children"]),o=le({},r);return t&&(o=this.mapChildrenToProps(t,o)),n.createElement(C,o)},ce(t,null,[{key:"canUseDOM",set:function(e){C.canUseDOM=e}}]),t}(n.Component),S.propTypes={base:a().object,bodyAttributes:a().object,children:a().oneOfType([a().arrayOf(a().node),a().node]),defaultTitle:a().string,defer:a().bool,encodeSpecialCharacters:a().bool,htmlAttributes:a().object,link:a().arrayOf(a().object),meta:a().arrayOf(a().object),noscript:a().arrayOf(a().object),onChangeClientState:a().func,script:a().arrayOf(a().object),style:a().arrayOf(a().object),title:a().string,titleAttributes:a().object,titleTemplate:a().string},S.defaultProps={defer:!0,encodeSpecialCharacters:!0},S.peek=C.peek,S.rewind=function(){var e=C.rewind();return e||(e=Le({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},j);Me.renderStatic=Me.rewind;function Re(e){var t=e.children;return n.createElement("div",null,n.createElement(Me,null,n.createElement("meta",{charSet:"utf-8"}),n.createElement("title",null,"Rohan Mehta's Portfolio")),n.createElement(E,null),n.createElement("div",{className:"bg-night text-white"},t),n.createElement(x,null))}}}]);
//# sourceMappingURL=bcf8677edbf598c312550429156e295c8dccc0d4-eac99deb4d09ddea6b19.js.map