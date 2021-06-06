(self.webpackChunkrohan_portfolio=self.webpackChunkrohan_portfolio||[]).push([[839],{4772:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){return r.createElement("a",{href:e.link},r.createElement("div",{className:"static max-w-sm h-full rounded overflow-hidden shadow-lg bg-slime hover:bg-mint"},r.createElement("img",{className:"w-full",src:e.image,alt:"Image of "+e.title}),r.createElement("div",{className:"px-6 py-4"},r.createElement("div",{className:"text-gray-900 font-bold text-xl mb-2"},e.title),r.createElement("p",{className:"text-gray-700 text-base"},e.overview)),r.createElement("div",{className:"px-6 pt-4 pb-2"},e.tags.map((function(e,t){return r.createElement("span",{key:t,className:"bg-mint inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},"#"+e.name)})))))}},1387:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(7294),a=n(4694),o=n(5697),i=n.n(o);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function h(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=f(t.slice(0,r)),o=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[a]=o,e}),{})}var d=!1;try{d=!0}catch(N){}function b(e){return a.parse.icon?a.parse.icon(e):null===e?null:"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function y(e){var t=e.forwardedRef,n=u(e,["forwardedRef"]),r=n.icon,o=n.mask,i=n.symbol,s=n.className,c=n.title,f=n.titleId,h=b(r),v=g("classes",[].concat(p(function(e){var t,n=e.spin,r=e.pulse,a=e.fixedWidth,o=e.inverse,i=e.border,s=e.listItem,c=e.flip,m=e.size,u=e.rotation,p=e.pull,f=(l(t={"fa-spin":n,"fa-pulse":r,"fa-fw":a,"fa-inverse":o,"fa-border":i,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(m),null!=m),l(t,"fa-rotate-".concat(u),null!=u&&0!==u),l(t,"fa-pull-".concat(p),null!=p),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(n)),p(s.split(" ")))),x=g("transform","string"==typeof n.transform?a.parse.transform(n.transform):n.transform),k=g("mask",b(o)),O=(0,a.icon)(h,m({},v,{},x,{},k,{symbol:i,title:c,titleId:f}));if(!O)return function(){var e;!d&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",h),null;var E=O.abstract,j={ref:t};return Object.keys(n).forEach((function(e){y.defaultProps.hasOwnProperty(e)||(j[e]=n[e])})),w(E[0],j)}y.displayName="FontAwesomeIcon",y.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},y.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var w=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),o=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=h(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[f(t)]=r}return e}),{attrs:{}}),i=r.style,s=void 0===i?{}:i,l=u(r,["style"]);return o.attrs.style=m({},o.attrs.style,{},s),t.apply(void 0,[n.tag,m({},o.attrs,{},l)].concat(p(a)))}.bind(null,r.createElement),v=n(7190),x=n(5444);function k(){return r.createElement("footer",{className:"bg-midnight text-white"},r.createElement("h1",{className:"text-center text-3xl pt-5"},"Rohan Mehta"),r.createElement("div",{className:"text-2xl text-center mt-6"},r.createElement("a",{href:"https://www.linkedin.com/in/rohan-mehta-cf/"},r.createElement(y,{"aria-label":"Linkedin Icon",icon:v.D9H,className:"mr-8 hover:text-slime"})),r.createElement("a",{href:"https://github.com/radroof22"},r.createElement(y,{"aria-label":"Github Icon",icon:v.zhw,className:"ml-8 hover:text-slime"}))),r.createElement("div",{className:"text-center mt-5 text-xl"},r.createElement(x.rU,{to:"/",className:"text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase text-white hover:text-slime"},"Home"),r.createElement(x.rU,{to:"/machine-learning",className:"text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase text-white hover:text-slime"},"Machine Learning"),r.createElement(x.rU,{to:"/web-development",className:"text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase text-white hover:text-slime"},"Web Development"),r.createElement(x.rU,{to:"/resume",className:"text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase text-white hover:text-slime"},"Resume")),r.createElement("div",{className:"pt-8"}))}var O=n(8014);function E(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return r.createElement("div",null,r.createElement("nav",{className:"relative flex flex-wrap items-center justify-between px-2 py-3 bg-midnight "},r.createElement("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between"},r.createElement("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"},r.createElement(x.rU,{to:"/",className:"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"},"Rohan Mehta"),r.createElement("button",{className:"text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return n(!t)}},r.createElement(y,{icon:O.xiG}))),r.createElement("div",{className:"lg:flex flex-grow items-center"+(t?" flex":" hidden"),id:"example-navbar-danger"},r.createElement("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto"},r.createElement("li",{className:"nav-item"},r.createElement(x.rU,{to:"/machine-learning",className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"},"Machine Learning")),r.createElement("li",{className:"nav-item"},r.createElement(x.rU,{to:"/web-development",className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"},"Web Development")),r.createElement("li",{className:"nav-item"},r.createElement(x.rU,{to:"/resume",className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"},"Resume")))))))}function j(e){var t=e.children;return r.createElement("div",null,r.createElement(E,null),r.createElement("div",{className:"bg-night text-white"},t),r.createElement(k,null))}},8098:function(e){"use strict";e.exports=JSON.parse('[{"title":"Mostlikely.to","featured":true,"overview":"This game was created to replicate the technology base of \'Jack in the Box Partypack\' and \'Kahoot\', livestreaming, interactive games amongs member groups. Instead of quiz questions or deeply interactive games like Kahoot and \'Jack\', respectively, Mostlikely.to is a simple game of allowing users to create their own questions and vote on which members of their lobby are most likely to do it. The project uses Socket.io web sockets to have live communication between the users and the server hosting the game and lobby. The frontend is then rendered using Vue.js to handle state management on the frontend so no user data is confused or lost for the client.","category":"web-development","tags":[{"name":"websockets"},{"name":"vue.js"},{"name":"web-dev"}],"link":"https://github.com/radroof22/Mostlikely.to","image":"https://user-images.githubusercontent.com/23004551/120541624-19d94400-c3b8-11eb-87a6-cbddc8f94a96.png"},{"title":"Blockchain Drug Supply Chain","overview":"There were two main problems that this project hoped to address: temperature tracking and supply chain monitoring. The temperature tracking works by having the Raspberry Pi send updates, using its temperature sensor, to the blockchain to create a auditable record of the drug and to ensure it did not reach unbearable temperatures that would ruin the substance. Additionally, the supply chain monitoring works via RFID tags which, when they scan the RFID tag. The mobile app will scan the product and send a message to the blockchain updating its location accordingly to where it is currently","category":"web-development","tags":[{"name":"robotics"},{"name":"blockchain"},{"name":"ethereum"},{"name":"flutter"}],"link":"https://github.com/radroof22/blockchain-drug-supply-chain","image":"https://user-images.githubusercontent.com/23004551/119529554-35a57000-bd50-11eb-8d65-658e80bc219c.jpg"},{"title":"Self-Driving Car","featured":true,"overview":"This project was created using a Tensorflow LSTM which would recieve images from the client robot and make predicition for which turns it should make. The pictures on the client were taken using OpenCV2 and would be sent over as raw pixels in the form of a real-time web socket. The model learned to drive through a paper track on the ground and passed the statistical analysis proof.","category":"machine-learning","tags":[{"name":"robotics"},{"name":"tensorflow"},{"name":"computer-vision"},{"name":"python"}],"link":"https://github.com/radroof22/Self-Driving-Car","image":"https://user-images.githubusercontent.com/23004551/119425305-1e756c80-bcd5-11eb-86af-e4d66b0dcda7.png"},{"title":"Portfolio Management Policy Gradient","overview":"The goal of this project was to see how effective a reinforcement learning type training model would be for financial management. Normal models rely on linear regression and predictions of the next price of a stock. Instead, this project sought to determine if policy gradient, a type of reinforcement model, may be effective for portfolio management.","category":"machine-learning","tags":[{"name":"finance"},{"name":"pytorch"},{"name":"numpy"},{"name":"pandas"}],"link":"https://github.com/radroof22/Portfolio-Management-Policy-Gradient","image":"https://user-images.githubusercontent.com/23004551/119423041-6219a780-bcd0-11eb-8823-b0e1fb78207c.png"},{"title":"PtAi","featured":true,"overview":"The inspiration for this project came out of the recent rise in tele-medicine and doctors appointments hosted over the internet. As such, I wanted to see if there was a way to bring physical therapy to the online world to help people at home get the most out of their workouts. Current products already exist that allow users to track their joint movements as they do a series as exercises, though these solutions are often expensive. Instead, a machine learning technique would allow the users to just need their phone to complete their assigned workouts and gain assistance from the model.","category":"machine-learning","tags":[{"name":"tensorflow"},{"name":"javascript"},{"name":"computer-vision"}],"link":"https://github.com/radroof22/PtAi","image":"https://user-images.githubusercontent.com/23004551/119421930-d56dea00-bccd-11eb-9403-50926cb7993e.png"}]')}}]);
//# sourceMappingURL=7fe48124dc4a3ea195275012f0d03544f4241556-043a313773050e2fed9c.js.map