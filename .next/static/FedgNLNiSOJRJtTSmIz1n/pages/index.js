(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+EA7":function(e,t,n){"use strict";var r={},a="x",i=[],o=function(e){return i.push(e)},l=function(e,t){return t?t+"{"+e+"}":e},u=function(e,t,n){return"."+e+"{"+t.replace(/[A-Z]|^ms/g,"-$&").toLowerCase()+":"+n+"}"},s=function(e){return e.replace(/&/g,"")},c=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments[2];return Object.keys(t).map((function(f){var p=t[f];if(null===p)return"";if("object"===typeof p){var d=/^@/.test(f)?f:null;return e(p,d?n:n+f,d||c)}var y=f+p+n+c;if(r[y])return r[y];var m=a+i.length.toString(36);return o(l(u(m+s(n),f,p),c)),r[y]=m,m})).join(" ")};if(e.exports=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return c(e)})).join(" ").trim()},e.exports.css=function(){return i.sort().join("")},e.exports.reset=function(){for(r={};i.length;)i.pop()},e.exports.prefix=function(e){return a=e},"undefined"!==typeof document){var f=document.head.appendChild(document.createElement("style")).sheet;o=function(e){i.push(e),f.insertRule(e,f.cssRules.length)}}},"0wEy":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var a=n("xCC/");t.Motion=r(a);var i=n("unm8");t.StaggeredMotion=r(i);var o=n("p9CH");t.TransitionMotion=r(o);var l=n("tYRH");t.spring=r(l);var u=n("LQNH");t.presets=r(u);var s=n("u461");t.stripStyle=r(s);var c=n("MEvW");t.reorderKeys=r(c)},LQNH:function(e,t,n){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},MEvW:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){0};e.exports=t.default},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),a=n("vuIU"),i=n("md7G"),o=n("foSv"),l=n("Ji7U"),u=n("q1tI"),s=n.n(u),c=(n("K6CT"),n("ZfN1")),f=n("TSYQ"),p=n.n(f),d=n("0wEy"),y=n("+EA7"),m=n.n(y),h=n("bmMU"),v=n.n(h),w="undefined"!==typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}:function(){},g=function(e,t){if(!window.requestAnimationFrame&&!window.webkitRequestAnimationFrame&&(!window.mozRequestAnimationFrame||!window.mozCancelRequestAnimationFrame)&&!window.oRequestAnimationFrame&&!window.msRequestAnimationFrame)return window.setTimeout(e,t);var n=(new Date).getTime(),r={value:0};return r.value=w((function a(){(new Date).getTime()-n>=t?e.call(null):r.value=w(a)})),r},b=function(e){return window.cancelAnimationFrame?window.cancelAnimationFrame(e.value):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(e.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(e.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(e.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(e.value):window.msCancelRequestAnimationFrame?window.msCancelRequestAnimationFrame(e.value):clearTimeout(e)};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){var t,n;function r(t){var n;k(I(n=e.call(this,t)||this),"isUnMounting",!1),k(I(n),"tickDelay",0),k(I(n),"tickLoop",0),k(I(n),"wordBox",null),k(I(n),"willLeave",(function(){var e=n.getDimensions().height;return{opacity:Object(d.spring)(n.getOpacity(),n.props.springConfig),translate:Object(d.spring)(-e,n.props.springConfig)}})),k(I(n),"willEnter",(function(){var e=n.getDimensions().height;return{opacity:n.getOpacity(),translate:e}})),k(I(n),"tick",(function(){n.isUnMounting||n.setState((function(e,t){var n=(e.currentWordIndex+1)%e.elements.length,r={currentWordIndex:n,currentEl:e.elements[n],wordCount:(e.wordCount+1)%1e3,currentInterval:Array.isArray(t.interval)?t.interval[n%t.interval.length]:t.interval};return t.onChange&&t.onChange(r),r}),(function(){n.state.currentInterval>0&&(n.clearTimeouts(),n.tickLoop=g(n.tick,n.state.currentInterval))}))})),k(I(n),"wrapperStyles",m()(S({},n.props.mask&&{overflow:"hidden"},{},{display:"inline-block",position:"relative",verticalAlign:"top"}))),k(I(n),"elementStyles",m()({display:"inline-block",left:0,top:0,whiteSpace:n.props.noWrap?"nowrap":"normal"}));var r=s.a.Children.toArray(t.children);return n.state={elements:r,currentEl:r[0],currentWordIndex:0,wordCount:0,currentInterval:Array.isArray(t.interval)?t.interval[0]:t.interval},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.componentDidMount=function(){var e=this,t=this.props.delay,n=this.state,r=n.currentInterval,a=n.elements;r>0&&a.length>1&&(this.tickDelay=g((function(){e.tickLoop=g(e.tick,r)}),t))},a.componentDidUpdate=function(e,t){var n=this,r=this.props,a=r.interval,i=r.children,o=r.delay,l=this.state.currentWordIndex,u=Array.isArray(a)?a[l%a.length]:a;t.currentInterval!==u&&(this.clearTimeouts(),u>0&&s.a.Children.count(i)>1?this.tickDelay=g((function(){n.tickLoop=g(n.tick,u)}),o):this.setState((function(e,t){var n=e.currentWordIndex;return{currentInterval:Array.isArray(t.interval)?t.interval[n%t.interval.length]:t.interval}}))),v()(e.children,i)||this.setState({elements:s.a.Children.toArray(i)})},a.componentWillUnmount=function(){this.isUnMounting=!0,this.clearTimeouts()},a.clearTimeouts=function(){null!=this.tickLoop&&b(this.tickLoop),null!=this.tickDelay&&b(this.tickDelay)},a.getOpacity=function(){return this.props.fade?0:1},a.getDimensions=function(){return null==this.wordBox?{width:0,height:0}:this.wordBox.getBoundingClientRect()},a.getTransitionMotionStyles=function(){var e=this.props.springConfig,t=this.state;return[{key:"step-"+t.wordCount,data:{currentEl:t.currentEl},style:{opacity:Object(d.spring)(1,e),translate:Object(d.spring)(0,e)}}]},a.render=function(){var e=this,t=this.props.className,n=void 0===t?"":t;return s.a.createElement("div",{className:this.wrapperStyles+" "+n},s.a.createElement(d.TransitionMotion,{willLeave:this.willLeave,willEnter:this.willEnter,styles:this.getTransitionMotionStyles()},(function(t){var n=e.getDimensions(),r=n.height,a=n.width,i=null==e.wordBox?"auto":a,o=null==e.wordBox?"auto":r;return s.a.createElement("div",{style:{transition:"width "+e.props.adjustingSpeed+"ms linear",height:o,width:i}},t.map((function(t){return s.a.createElement("div",{className:e.elementStyles,ref:function(t){e.wordBox=t},key:t.key,style:{opacity:t.style.opacity,transform:"translateY("+t.style.translate+"px)",position:null==e.wordBox?"relative":"absolute"}},t.data.currentEl)})))})))},r}(s.a.PureComponent);k(O,"defaultProps",{interval:3e3,delay:0,adjustingSpeed:150,springConfig:{stiffness:340,damping:30},fade:!0,mask:!1,noWrap:!0});var T=O,P=n("tSRJ"),j=n.n(P),A=s.a.createElement,x=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return A(c.a,null,A("div",{className:p()("hero",j.a.IndexHero)},A("div",{className:p()(j.a.textContainer,j.a.appear)},A("div",null,A("h4",{className:j.a.Welcome},"Welcome to My World")),A("div",null,A("h4",{className:j.a.Name},"Asyrul Hafetzy Ahmad"),A("h5",{className:j.a.Job},A(T,{delay:100,interval:1500,mask:!0},A("span",null,"Full-stack Web Development"),A("span",null,"Software Engineering"),A("span",null,"Big Data"),A("span",null,"Artificial Intelligence")))))))}}]),t}(s.a.Component);t.default=x},VciW:function(e,t,n){(function(t){(function(){var n,r,a;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})()):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n("8oxB"))},Z6NN:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t},e.exports=t.default},bQgK:function(e,t,n){(function(t){(function(){var n,r,a,i,o,l;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},r=t.hrtime,i=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),l=1e9*t.uptime(),o=i-l):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n("8oxB"))},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!==typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,u,s,c=r(t),f=r(n);if(c&&f){if((u=t.length)!=n.length)return!1;for(l=u;0!==l--;)if(!e(t[l],n[l]))return!1;return!0}if(c!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var y=t instanceof RegExp,m=n instanceof RegExp;if(y!=m)return!1;if(y&&m)return t.toString()==n.toString();var h=a(t);if((u=h.length)!==a(n).length)return!1;for(l=u;0!==l--;)if(!i.call(n,h[l]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(l=u;0!==l--;)if(("_owner"!==(s=h[l])||!t.$$typeof)&&!e(t[s],n[s]))return!1;return!0}return t!==t&&n!==n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},fXKH:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n,a,i,o,l){var u=n+(-i*(t-a)+-o*n)*e,s=t+u*e;if(Math.abs(u)<l&&Math.abs(s-a)<l)return r[0]=a,r[1]=0,r;return r[0]=s,r[1]=u,r};var r=[0,0];e.exports=t.default},kXpG:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var a="number"===typeof t[r]?t[r]:t[r].val;if(e[r]!==a)return!1}return!0},e.exports=t.default},p9CH:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var o=i(n("Z6NN")),l=i(n("u461")),u=i(n("fXKH")),s=i(n("pwmp")),c=i(n("VciW")),f=i(n("xEkU")),p=i(n("kXpG")),d=i(n("q1tI")),y=i(n("17x9")),m=1e3/60;function h(e,t,n){var r=t;return null==r?e.map((function(e,t){return{key:e.key,data:e.data,style:n[t]}})):e.map((function(e,t){for(var a=0;a<r.length;a++)if(r[a].key===e.key)return{key:r[a].key,data:r[a].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}}))}function v(e,t,n,r,a,i,l,u,c){for(var f=s.default(r,a,(function(e,r){var a=t(r);return null==a?(n({key:r.key,data:r.data}),null):p.default(i[e],a,l[e])?(n({key:r.key,data:r.data}),null):{key:r.key,data:r.data,style:a}})),d=[],y=[],m=[],h=[],v=0;v<f.length;v++){for(var w=f[v],g=null,b=0;b<r.length;b++)if(r[b].key===w.key){g=b;break}if(null==g){var S=e(w);d[v]=S,m[v]=S;var I=o.default(w.style);y[v]=I,h[v]=I}else d[v]=i[g],m[v]=u[g],y[v]=l[g],h[v]=c[g]}return[f,d,y,m,h]}var w=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=v(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,e,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),n=t[0],i=t[1],o=t[2],l=t[3],u=t[4],s=0;s<e.length;s++){var c=e[s].style,f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"===typeof d&&(f||(f=!0,i[s]=r({},i[s]),o[s]=r({},o[s]),l[s]=r({},l[s]),u[s]=r({},u[s]),n[s]={key:n[s].key,data:n[s].data,style:r({},n[s].style)}),i[s][p]=d,o[s][p]=0,l[s][p]=d,u[s][p]=0,n[s].style[p]=d)}}a.setState({currentStyles:i,currentVelocities:o,mergedPropsStyles:n,lastIdealStyles:l,lastIdealVelocities:u})},this.startAnimationIfNecessary=function(){a.unmounting||(a.animationID=f.default((function(e){if(!a.unmounting){var t=a.props.styles,n="function"===typeof t?t(h(a.state.mergedPropsStyles,a.unreadPropStyles,a.state.lastIdealStyles)):t;if(function(e,t,n,r){if(r.length!==t.length)return!1;for(var a=0;a<r.length;a++)if(r[a].key!==t[a].key)return!1;for(a=0;a<r.length;a++)if(!p.default(e[a],t[a].style,n[a]))return!1;return!0}(a.state.currentStyles,n,a.state.currentVelocities,a.state.mergedPropsStyles))return a.animationID=null,void(a.accumulatedTime=0);var r=e||c.default(),i=r-a.prevTime;if(a.prevTime=r,a.accumulatedTime=a.accumulatedTime+i,a.accumulatedTime>10*m&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var o=(a.accumulatedTime-Math.floor(a.accumulatedTime/m)*m)/m,l=Math.floor(a.accumulatedTime/m),s=v(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,n,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),f=s[0],d=s[1],y=s[2],w=s[3],g=s[4],b=0;b<f.length;b++){var S=f[b].style,I={},k={},O={},T={};for(var P in S)if(Object.prototype.hasOwnProperty.call(S,P)){var j=S[P];if("number"===typeof j)I[P]=j,k[P]=0,O[P]=j,T[P]=0;else{for(var A=w[b][P],x=g[b][P],D=0;D<l;D++){var _=u.default(m/1e3,A,x,j.val,j.stiffness,j.damping,j.precision);A=_[0],x=_[1]}var R=u.default(m/1e3,A,x,j.val,j.stiffness,j.damping,j.precision),C=R[0],M=R[1];I[P]=A+(C-A)*o,k[P]=x+(M-x)*o,O[P]=A,T[P]=x}}w[b]=O,g[b]=T,d[b]=I,y[b]=k}a.animationID=null,a.accumulatedTime-=l*m,a.setState({currentStyles:d,currentVelocities:y,lastIdealStyles:w,lastIdealVelocities:g,mergedPropsStyles:f}),a.unreadPropStyles=null,a.startAnimationIfNecessary()}})))},this.state=this.defaultState()}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:y.default.arrayOf(y.default.shape({key:y.default.string.isRequired,data:y.default.any,style:y.default.objectOf(y.default.number).isRequired})),styles:y.default.oneOfType([y.default.func,y.default.arrayOf(y.default.shape({key:y.default.string.isRequired,data:y.default.any,style:y.default.objectOf(y.default.oneOfType([y.default.number,y.default.object])).isRequired}))]).isRequired,children:y.default.func.isRequired,willEnter:y.default.func,willLeave:y.default.func,didLeave:y.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return l.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=e.willEnter,a=e.willLeave,i=e.didLeave,u="function"===typeof n?n(t):n,s=void 0;s=null==t?u:t.map((function(e){for(var t=0;t<u.length;t++)if(u[t].key===e.key)return u[t];return e}));var c=null==t?u.map((function(e){return l.default(e.style)})):t.map((function(e){return l.default(e.style)})),f=null==t?u.map((function(e){return o.default(e.style)})):t.map((function(e){return o.default(e.style)})),p=v(r,a,i,s,u,c,f,c,f),d=p[0];return{currentStyles:p[1],currentVelocities:p[2],lastIdealStyles:p[3],lastIdealVelocities:p[4],mergedPropsStyles:d}},t.prototype.componentDidMount=function(){this.prevTime=c.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"===typeof t?t(h(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=c.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(f.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=h(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&d.default.Children.only(t)},t}(d.default.Component);t.default=w,e.exports=t.default},pwmp:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var r={},a=0;a<e.length;a++)r[e[a].key]=a;var i={};for(a=0;a<t.length;a++)i[t[a].key]=a;var o=[];for(a=0;a<t.length;a++)o[a]=t[a];for(a=0;a<e.length;a++)if(!Object.prototype.hasOwnProperty.call(i,e[a].key)){var l=n(a,e[a]);null!=l&&o.push(l)}return o.sort((function(e,n){var a=i[e.key],o=i[n.key],l=r[e.key],u=r[n.key];if(null!=a&&null!=o)return i[e.key]-i[n.key];if(null!=l&&null!=u)return r[e.key]-r[n.key];if(null!=a){for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(a<i[c]&&u>r[c])return-1;if(a>i[c]&&u<r[c])return 1}}return 1}for(s=0;s<t.length;s++){c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(o<i[c]&&l>r[c])return 1;if(o>i[c]&&l<r[c])return-1}}return-1}))},e.exports=t.default},tYRH:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t){return r({},l,t,{val:e})};var a,i=n("LQNH"),o=(a=i)&&a.__esModule?a:{default:a},l=r({},o.default.noWobble,{precision:.01});e.exports=t.default},u461:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"===typeof e[n]?e[n]:e[n].val);return t},e.exports=t.default},unm8:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var o=i(n("Z6NN")),l=i(n("u461")),u=i(n("fXKH")),s=i(n("VciW")),c=i(n("xEkU")),f=i(n("kXpG")),p=i(n("q1tI")),d=i(n("17x9")),y=1e3/60;var m=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=a.state,n=t.currentStyles,i=t.currentVelocities,o=t.lastIdealStyles,l=t.lastIdealVelocities,u=!1,s=0;s<e.length;s++){var c=e[s],f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"===typeof d&&(f||(f=!0,u=!0,n[s]=r({},n[s]),i[s]=r({},i[s]),o[s]=r({},o[s]),l[s]=r({},l[s])),n[s][p]=d,i[s][p]=0,o[s][p]=d,l[s][p]=0)}}u&&a.setState({currentStyles:n,currentVelocities:i,lastIdealStyles:o,lastIdealVelocities:l})},this.startAnimationIfNecessary=function(){a.animationID=c.default((function(e){var t=a.props.styles(a.state.lastIdealStyles);if(function(e,t,n){for(var r=0;r<e.length;r++)if(!f.default(e[r],t[r],n[r]))return!1;return!0}(a.state.currentStyles,t,a.state.currentVelocities))return a.animationID=null,void(a.accumulatedTime=0);var n=e||s.default(),r=n-a.prevTime;if(a.prevTime=n,a.accumulatedTime=a.accumulatedTime+r,a.accumulatedTime>10*y&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var i=(a.accumulatedTime-Math.floor(a.accumulatedTime/y)*y)/y,o=Math.floor(a.accumulatedTime/y),l=[],c=[],p=[],d=[],m=0;m<t.length;m++){var h=t[m],v={},w={},g={},b={};for(var S in h)if(Object.prototype.hasOwnProperty.call(h,S)){var I=h[S];if("number"===typeof I)v[S]=I,w[S]=0,g[S]=I,b[S]=0;else{for(var k=a.state.lastIdealStyles[m][S],O=a.state.lastIdealVelocities[m][S],T=0;T<o;T++){var P=u.default(y/1e3,k,O,I.val,I.stiffness,I.damping,I.precision);k=P[0],O=P[1]}var j=u.default(y/1e3,k,O,I.val,I.stiffness,I.damping,I.precision),A=j[0],x=j[1];v[S]=k+(A-k)*i,w[S]=O+(x-O)*i,g[S]=k,b[S]=O}}p[m]=v,d[m]=w,l[m]=g,c[m]=b}a.animationID=null,a.accumulatedTime-=o*y,a.setState({currentStyles:p,currentVelocities:d,lastIdealStyles:l,lastIdealVelocities:c}),a.unreadPropStyles=null,a.startAnimationIfNecessary()}))},this.state=this.defaultState()}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:d.default.arrayOf(d.default.objectOf(d.default.number)),styles:d.default.func.isRequired,children:d.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(l.default),a=r.map((function(e){return o.default(e)}));return{currentStyles:r,currentVelocities:a,lastIdealStyles:r,lastIdealVelocities:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=m,e.exports=t.default},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},"xCC/":function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var o=i(n("Z6NN")),l=i(n("u461")),u=i(n("fXKH")),s=i(n("VciW")),c=i(n("xEkU")),f=i(n("kXpG")),p=i(n("q1tI")),d=i(n("17x9")),y=1e3/60,m=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=a.state,i=n.currentStyle,o=n.currentVelocity,l=n.lastIdealStyle,u=n.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var c=e[s];"number"===typeof c&&(t||(t=!0,i=r({},i),o=r({},o),l=r({},l),u=r({},u)),i[s]=c,o[s]=0,l[s]=c,u[s]=0)}t&&a.setState({currentStyle:i,currentVelocity:o,lastIdealStyle:l,lastIdealVelocity:u})},this.startAnimationIfNecessary=function(){a.animationID=c.default((function(e){var t=a.props.style;if(f.default(a.state.currentStyle,t,a.state.currentVelocity))return a.wasAnimating&&a.props.onRest&&a.props.onRest(),a.animationID=null,a.wasAnimating=!1,void(a.accumulatedTime=0);a.wasAnimating=!0;var n=e||s.default(),r=n-a.prevTime;if(a.prevTime=n,a.accumulatedTime=a.accumulatedTime+r,a.accumulatedTime>10*y&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();var i=(a.accumulatedTime-Math.floor(a.accumulatedTime/y)*y)/y,o=Math.floor(a.accumulatedTime/y),l={},c={},p={},d={};for(var m in t)if(Object.prototype.hasOwnProperty.call(t,m)){var h=t[m];if("number"===typeof h)p[m]=h,d[m]=0,l[m]=h,c[m]=0;else{for(var v=a.state.lastIdealStyle[m],w=a.state.lastIdealVelocity[m],g=0;g<o;g++){var b=u.default(y/1e3,v,w,h.val,h.stiffness,h.damping,h.precision);v=b[0],w=b[1]}var S=u.default(y/1e3,v,w,h.val,h.stiffness,h.damping,h.precision),I=S[0],k=S[1];p[m]=v+(I-v)*i,d[m]=w+(k-w)*i,l[m]=v,c[m]=w}}a.animationID=null,a.accumulatedTime-=o*y,a.setState({currentStyle:p,currentVelocity:d,lastIdealStyle:l,lastIdealVelocity:c}),a.unreadPropStyle=null,a.startAnimationIfNecessary()}))},this.state=this.defaultState()}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyle:d.default.objectOf(d.default.number),style:d.default.objectOf(d.default.oneOfType([d.default.number,d.default.object])).isRequired,children:d.default.func.isRequired,onRest:d.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||l.default(n),a=o.default(r);return{currentStyle:r,currentVelocity:a,lastIdealStyle:r,lastIdealVelocity:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=m,e.exports=t.default},xEkU:function(e,t,n){(function(t){for(var r=n("bQgK"),a="undefined"===typeof window?t:window,i=["moz","webkit"],o="AnimationFrame",l=a["request"+o],u=a["cancel"+o]||a["cancelRequest"+o],s=0;!l&&s<i.length;s++)l=a[i[s]+"Request"+o],u=a[i[s]+"Cancel"+o]||a[i[s]+"CancelRequest"+o];if(!l||!u){var c=0,f=0,p=[];l=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-c));c=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return l.call(a,e)},e.exports.cancel=function(){u.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=l,e.cancelAnimationFrame=u}}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[["vlRD",0,1,2,4,3]]]);