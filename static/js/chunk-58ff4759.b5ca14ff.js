(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58ff4759"],{1009:function(t,e,i){},"4a02":function(t,e,i){t.exports=i.p+"static/img/AQI.3d295de9.png"},"5deb":function(t,e,i){},"6b9e":function(t,e,i){"use strict";var n=i("5deb"),s=i.n(n);s.a},"71c3":function(t,e,i){t.exports=i.p+"static/img/commap.959e8b41.png"},"7df3":function(t,e,i){"use strict";var n=i("1009"),s=i.n(n);s.a},"8cd3":function(t,e,i){t.exports=i.p+"static/img/watermap.0ab33f8e.png"},c3b0:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("div",{staticClass:"section",staticStyle:{height:"100%",width:"100%"}},[i("gaikaung")],1),t._l(t.list,(function(t,e){return i("div",{key:e,staticClass:"section",staticStyle:{width:"100%",height:"100%"}},[i("keep-alive",[i(t.name,{tag:"component"})],1)],1)}))],2),i("nav",{staticStyle:{position:"fixed",right:"30px",top:"300px","z-index":"9000"}},t._l(t.navList,(function(e,n){return i("a",{key:n,staticClass:"nav1",class:n==t.current?"current":"",on:{click:function(e){return t.jump(n)}}},[t._v(t._s(e))])})),0)])},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex-row"},[i("slider",{staticStyle:{width:"100%",height:"30rem"},attrs:{animation:"fade"}},t._l(t.list,(function(e,n){return i("slider-item",{key:n,staticClass:"animated slow zoomIn",on:{click:t.hello}},[i("img",{staticStyle:{height:"30rem",width:"100%"},attrs:{src:e.img}})])})),1)],1)},o=[],r=i("e890"),l={components:{Slider:r["a"],SliderItem:r["b"]},data:function(){return{num:0,list:[{img:i("8cd3")},{img:i("4a02")},{img:i("71c3")}]}},methods:{btnclick:function(t){this.current=t,window.localStorage.setItem(CUR,this.current)},hello:function(t){console.log("hello index: ".concat(t))},next:function(){this.num<this.list.length-5?this.num=this.num+1:this.num=this.num},before:function(){this.num>0?this.num=this.num-1:this.num=this.num}}},h=l,c=(i("6b9e"),i("9ca4")),d=Object(c["a"])(h,a,o,!1,null,null,null),u=d.exports,p={components:{gaikaung:u,about:function(t){i.e("chunk-5fc337b8").then(function(){var e=[i("8143")];t.apply(null,e)}.bind(this)).catch(i.oe)},product:function(t){i.e("chunk-7c3ec856").then(function(){var e=[i("d0d0")];t.apply(null,e)}.bind(this)).catch(i.oe)},ideal:function(t){i.e("chunk-a159f6a4").then(function(){var e=[i("82dc")];t.apply(null,e)}.bind(this)).catch(i.oe)},telephone:function(t){i.e("chunk-aed8f08e").then(function(){var e=[i("c0ae")];t.apply(null,e)}.bind(this)).catch(i.oe)}},data:function(){return{scroll:"",current:0,list:[{name:"about",backgroundcolor:"#A593B2"},{name:"product",backgroundcolor:"#A7B293"},{name:"ideal",backgroundcolor:"#0F2798"},{name:"telephone",backgroundcolor:"#0A464D"}],navList:[1,2,3,4,5]}},methods:{dataScroll:function(){this.scroll=document.documentElement.scrollTop||document.body.scrollTop},jump:function(t){this.current=t;var e=document.getElementsByClassName("section"),i=e[t].offsetTop;document.body.scrollTop=i,document.documentElement.scrollTop=i,window.pageYOffset=i},loadSroll:function(){for(var t=this,e=(document.getElementsByClassName("nav1"),document.getElementsByClassName("section")),i=e.length-1;i>=0;i--)if(t.scroll>=e[i].offsetTop-100){t.current=i;break}}},watch:{scroll:function(){this.loadSroll()}},mounted:function(){window.addEventListener("scroll",this.dataScroll)}},m=p,f=(i("7df3"),Object(c["a"])(m,n,s,!1,null,null,null));e["default"]=f.exports},e890:function(t,e,i){"use strict";(function(t){function n(t,e,i){var n,s=null;return function(){var a=this,o=arguments,r=+new Date;clearTimeout(s),n||(n=r),r-n>=i?(t.apply(a,o),n=r):s=setTimeout((function(){t.apply(a,o)}),e)}}function s(t,e){var i=!1;return function(){i||(i=!0,t.apply(this,arguments),setTimeout((function(){return i=!1}),e))}}function a(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function o(t,e){return t.x*e.x+t.y*e.y}function r(t,e){var i=a(t)*a(e);if(0===i)return 0;var n=o(t,e)/i;return n>1&&(n=1),Math.acos(n)}function l(t,e){return t.x*e.y-e.x*t.y}function h(t,e){var i=r(t,e);return l(t,e)>0&&(i*=-1),180*i/Math.PI}i.d(e,"a",(function(){return M})),i.d(e,"b",(function(){return X}));var c=function(t){this.handlers=[],this.el=t};function d(t,e){var i=new c(t);return i.add(e),i}c.prototype.add=function(t){this.handlers.push(t)},c.prototype.del=function(t){t||(this.handlers=[]);for(var e=this.handlers.length;e>=0;e--)this.handlers[e]===t&&this.handlers.splice(e,1)},c.prototype.dispatch=function(){for(var t=arguments,e=0,i=this.handlers.length;e<i;e++){var n=this.handlers[e];"function"===typeof n&&n.apply(this.el,t)}};var u=function(t,e){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var i=function(){};this.rotate=d(this.element,e.rotate||i),this.touchStart=d(this.element,e.touchStart||i),this.multipointStart=d(this.element,e.multipointStart||i),this.multipointEnd=d(this.element,e.multipointEnd||i),this.pinch=d(this.element,e.pinch||i),this.swipe=d(this.element,e.swipe||i),this.tap=d(this.element,e.tap||i),this.doubleTap=d(this.element,e.doubleTap||i),this.longTap=d(this.element,e.longTap||i),this.singleTap=d(this.element,e.singleTap||i),this.pressMove=d(this.element,e.pressMove||i),this.twoFingerPressMove=d(this.element,e.twoFingerPressMove||i),this.touchMove=d(this.element,e.touchMove||i),this.touchEnd=d(this.element,e.touchEnd||i),this.touchCancel=d(this.element,e.touchCancel||i),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};u.prototype={start:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var e=this.preV,i=t.touches.length;if(i>1){this._cancelLongTap(),this._cancelSingleTap();var n={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};e.x=n.x,e.y=n.y,this.pinchStartLen=a(e),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}},move:function(t){if(t.touches){var e=this.preV,i=t.touches.length,n=t.touches[0].pageX,s=t.touches[0].pageY;if(this.isDoubleTap=!1,i>1){var o=t.touches[1].pageX,r=t.touches[1].pageY,l={x:t.touches[1].pageX-n,y:t.touches[1].pageY-s};null!==e.x&&(this.pinchStartLen>0&&(t.zoom=a(l)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=h(l,e),this.rotate.dispatch(t,this.element)),e.x=l.x,e.y=l.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(n-this.x2+o-this.sx2)/2,t.deltaY=(s-this.y2+r-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=o,this.sy2=r}else{if(null!==this.x2){t.deltaX=n-this.x2,t.deltaY=s-this.y2;var c=Math.abs(this.x1-this.x2),d=Math.abs(this.y1-this.y2);(c>10||d>10)&&(this._preventTap=!0)}else t.deltaX=0,t.deltaY=0;this.pressMove.dispatch(t,this.element)}this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=n,this.y2=s,i>1&&t.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){e.swipe.dispatch(t,e.element)}),0)):(this.tapTimeout=setTimeout((function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),e.isDoubleTap=!1)}),0),e.isDoubleTap||(e.singleTapTimeout=setTimeout((function(){e.singleTap.dispatch(t,e.element)}),250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancelAll:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)},cancel:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,e,i,n){return Math.abs(t-e)>=Math.abs(i-n)?t-e>0?"Left":"Right":i-n>0?"Up":"Down"},on:function(t,e){this[t]&&this[t].add(e)},off:function(t,e){this[t]&&this[t].del(e)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}};var p={name:"Slider",model:{prop:"value",event:"change"},props:{value:{type:Number,default:0},width:{type:String,default:"auto"},height:{type:String,default:"300px"},touch:{type:Boolean,default:!0},animation:{type:String,default:"normal"},autoplay:{type:Boolean,default:!0},stopOnHover:{type:Boolean,default:!1},interval:{type:Number,default:3e3},speed:{type:Number,default:500},indicators:{type:[String,Boolean],default:"center"},controlBtn:{type:Boolean,default:!0},beforePrevious:{type:Function,default:function(){return!0}},beforeNext:{type:Function,default:function(){return!0}}},data:function(){return{sliderItems:[],currentIndex:0,timer:0,af:null,isStopped:!1}},watch:{value:function(t){var e=t-this.currentIndex;!e||t<0||t>this.sliderItems.length-1||this.handleIndicator(e)}},created:function(){this.init=n(this.init,100),this.move=s(this.move,this.speed-200),this.$on("slider:init",this.init)},mounted:function(){this.init(),this.initTouchArea()},activated:function(){this.init(),this.initTouchArea()},beforeDestroy:function(){this.timer&&clearInterval(this.timer),this.af&&this.af.destroy()},deactivated:function(){this.timer&&clearInterval(this.timer),this.af&&this.af.destroy()},methods:{init:function(){this.sliderItems=this.$children.filter((function(t){return"SliderItem"===t.$options.name})),this.sliderItems[this.value]&&(this.currentIndex=this.value);var t=this.sliderItems[this.currentIndex];t&&(t.init(),this.auto())},initTouchArea:function(){var t=this;if(!this.af&&this.touch){var e=this.$refs.touchArea;this.af=new u(e,{swipe:function(e){"Left"===e.direction?t.next():t.prev()}})}},auto:function(){var t=this;this.autoplay&&!this.isStopped&&(this.timer&&clearInterval(this.timer),this.timer=setInterval((function(){t.move(1)}),this.interval))},move:function(t){if(t&&this.canMove()){var e=t>0,i=this.getNextIndex(t),n=this.sliderItems[this.currentIndex],s=this.sliderItems[i];n.hide(e),s.show(e),this.currentIndex=i,this.$emit("change",i)}},prev:function(){this.beforePrevious()&&this.handleControlBtn("previous")},next:function(){this.beforeNext()&&this.handleControlBtn("next")},handleIndicator:function(t){t&&this.canMove()&&(this.move(t),this.auto())},handleControlBtn:function(t){if(this.canMove()){var e="next"===t?1:-1,i=this.getNextIndex(e);this.$emit(t,{original:this.currentIndex,next:i}),this.move(e),this.auto()}},getNextIndex:function(t){var e=this.sliderItems.length;return this.sliderItems[this.currentIndex]||(this.currentIndex=e-1),(this.currentIndex+t+e)%e},canMove:function(){return this.sliderItems.length>1},handleMouseenter:function(){this.autoplay&&this.stopOnHover&&(this.isStopped=!0,this.timer&&clearInterval(this.timer))},handleMouseleave:function(){this.autoplay&&this.stopOnHover&&(this.isStopped=!1,this.auto())}}};function m(t,e,i,n,s,a,o,r,l,h){"boolean"!==typeof o&&(l=r,r=o,o=!1);var c,d="function"===typeof i?i.options:i;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),n&&(d._scopeId=n),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=c):e&&(c=o?function(){e.call(this,h(this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),c)if(d.functional){var u=d.render;d.render=function(t,e){return c.call(e),u(t,e)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,c):[c]}return i}var f,v=m,g="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function y(t){return function(t,e){return T(t,e)}}var b={};function T(t,e){var i=g?e.media||"default":t,n=b[i]||(b[i]={ids:new Set,styles:[]});if(!n.ids.has(t)){n.ids.add(t);var s=e.source;if(e.map&&(s+="\n/*# sourceURL="+e.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),n.element||(n.element=document.createElement("style"),n.element.type="text/css",e.media&&n.element.setAttribute("media",e.media),void 0===f&&(f=document.head||document.getElementsByTagName("head")[0]),f.appendChild(n.element)),"styleSheet"in n.element)n.styles.push(s),n.element.styleSheet.cssText=n.styles.filter(Boolean).join("\n");else{var a=n.ids.size-1,o=document.createTextNode(s),r=n.element.childNodes;r[a]&&n.element.removeChild(r[a]),r.length?n.element.insertBefore(o,r[a]):n.element.appendChild(o)}}}var x=y,w=p,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider",style:{width:t.width,height:t.height},on:{mouseenter:t.handleMouseenter,mouseleave:t.handleMouseleave}},[t.sliderItems.length?t._e():t._t("loading",[t._m(0)]),t._v(" "),i("div",{ref:"touchArea",staticClass:"slider-items"},[t._t("default")],2),t._v(" "),t.indicators?i("div",{class:"slider-indicators slider-indicators-"+t.indicators,on:{click:function(t){t.stopPropagation()}}},t._l(t.sliderItems.length,(function(e){return i("span",{key:e,staticClass:"slider-indicator-icon",class:{"slider-indicator-active":t.currentIndex===e-1},on:{click:function(i){return t.handleIndicator(e-t.currentIndex-1)}}})})),0):t._e(),t._v(" "),t.controlBtn?[i("button",{staticClass:"slider-btn slider-btn-left",on:{click:function(e){return e.stopPropagation(),t.prev(e)}}},[i("i",{staticClass:"slider-icon slider-icon-left"})]),t._v(" "),i("button",{staticClass:"slider-btn slider-btn-right",on:{click:function(e){return e.stopPropagation(),t.next(e)}}},[i("i",{staticClass:"slider-icon slider-icon-right"})])]:t._e()],2)},I=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider-loading"},[i("div",{staticClass:"ball-pulse"},[i("div"),t._v(" "),i("div"),t._v(" "),i("div")])])}],S=function(t){t&&t("data-v-6ce668ac_0",{source:".slider[data-v-6ce668ac]{position:relative;overflow:hidden}.slider-items[data-v-6ce668ac]{width:100%;height:100%}.slider-btn[data-v-6ce668ac]{position:absolute;top:0;z-index:999;height:100%;width:50px;border:none;background:rgba(0,0,0,.1);outline:0;transition:background .3s;cursor:pointer}.slider-btn:hover .slider-icon[data-v-6ce668ac]{border-color:#fff}.slider-btn-left[data-v-6ce668ac]{left:0;background:linear-gradient(90deg,rgba(0,0,0,.1),rgba(0,0,0,0))}.slider-btn-right[data-v-6ce668ac]{right:0;background:linear-gradient(-90deg,rgba(0,0,0,.1),rgba(0,0,0,0))}.slider-icon[data-v-6ce668ac]{display:inline-block;width:15px;height:15px;border-left:2px solid rgba(255,255,255,.6);border-bottom:2px solid rgba(255,255,255,.6);transition:border .2s}.slider-icon-left[data-v-6ce668ac]{transform:rotate(45deg)}.slider-icon-right[data-v-6ce668ac]{transform:rotate(-135deg)}.slider-indicators[data-v-6ce668ac]{position:absolute;bottom:20px;z-index:999}.slider-indicators-center[data-v-6ce668ac]{left:50%;transform:translateX(-50%)}.slider-indicators-left[data-v-6ce668ac]{left:6%}.slider-indicators-right[data-v-6ce668ac]{right:6%}.slider-indicator-icon[data-v-6ce668ac]{display:inline-block;width:10px;height:10px;margin:0 .1rem;cursor:pointer;border-radius:50%;background-color:rgba(0,0,0,.2)}.slider-indicator-active[data-v-6ce668ac]{background-color:rgba(255,255,255,.2)}.slider-loading[data-v-6ce668ac]{position:absolute;top:0;left:0;z-index:99;width:100%;height:100%;background:rgba(0,0,0,.1);display:flex;justify-content:center;align-items:center}.ball-pulse>div[data-v-6ce668ac]:nth-child(1){animation:scale-data-v-6ce668ac .75s -.24s infinite cubic-bezier(.2,.68,.18,1.08)}.ball-pulse>div[data-v-6ce668ac]:nth-child(2){animation:scale-data-v-6ce668ac .75s -.12s infinite cubic-bezier(.2,.68,.18,1.08)}.ball-pulse>div[data-v-6ce668ac]:nth-child(3){animation:scale-data-v-6ce668ac .75s 0s infinite cubic-bezier(.2,.68,.18,1.08)}.ball-pulse>div[data-v-6ce668ac]{background-color:#fff;width:15px;height:15px;border-radius:100%;margin:2px;animation-fill-mode:both;display:inline-block}@-moz-keyframes scale-data-v-6ce668ac{0%{transform:scale(1);opacity:1}45%{transform:scale(.1);opacity:.7}80%{transform:scale(1);opacity:1}}@-webkit-keyframes scale-data-v-6ce668ac{0%{transform:scale(1);opacity:1}45%{transform:scale(.1);opacity:.7}80%{transform:scale(1);opacity:1}}@-o-keyframes scale-data-v-6ce668ac{0%{transform:scale(1);opacity:1}45%{transform:scale(.1);opacity:.7}80%{transform:scale(1);opacity:1}}@keyframes scale-data-v-6ce668ac{0%{transform:scale(1);opacity:1}45%{transform:scale(.1);opacity:.7}80%{transform:scale(1);opacity:1}}",map:void 0,media:void 0})},k="data-v-6ce668ac",C=void 0,E=!1,M=v({render:_,staticRenderFns:I},S,w,k,E,C,x,void 0),L={name:"SliderItem",data:function(){return{display:!1,isInit:!1,initAnimation:!1,direction:!1,animation:"normal",speed:500,zIndex:99}},created:function(){this.$parent.$emit("slider:init"),this.speed=this.$parent.speed||500,this.animation=this.$parent.animation||"normal"},destroyed:function(){this.$parent.$emit("slider:init")},methods:{init:function(){var t=this;this.isInit||(this.isInit=!0,this.display=!0,this.initAnimation=!0,this.$nextTick((function(){return t.initAnimation=!1})))},show:function(t){var e=this;this.zIndex=99,this.direction=t,this.$nextTick((function(){return e.display=!0}))},hide:function(t){var e=this;this.zIndex=98,this.direction=t,this.$nextTick((function(){return e.display=!1}))}}},$=L,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.initAnimation?"":t.animation+"-"+(t.direction?"left":"right")}},[i("div",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],staticClass:"slider-item",style:{zIndex:t.zIndex,transition:"all "+t.speed/1e3+"s"}},"div",t.$attrs,!1),t.$listeners),[t._t("default")],2)])},z=[],B=function(t){t&&t("data-v-31f46842_0",{source:".slider-item[data-v-31f46842]{position:absolute;top:0;left:0;width:100%;height:100%}.normal-left-leave-to[data-v-31f46842],.normal-right-enter[data-v-31f46842]{transform:translateX(-100%)}.normal-left-enter[data-v-31f46842],.normal-right-leave-to[data-v-31f46842]{transform:translateX(100%)}.fade-left-enter[data-v-31f46842],.fade-left-leave-to[data-v-31f46842],.fade-right-enter[data-v-31f46842],.fade-right-leave-to[data-v-31f46842]{opacity:0}.fade-left-leave-to[data-v-31f46842],.fade-right-enter[data-v-31f46842]{transform:translateX(-10px)}.fade-left-enter[data-v-31f46842],.fade-right-leave-to[data-v-31f46842]{transform:translateX(10px)}",map:void 0,media:void 0})},N="data-v-31f46842",P=void 0,D=!1,X=v({render:A,staticRenderFns:z},B,$,N,D,P,x,void 0),R={version:"5.3.2",install:function(t){t.component(M.name,M),t.component(X.name,X)}},F=null;"undefined"!==typeof window?F=window.Vue:"undefined"!==typeof t&&(F=t.Vue),F&&F.use(R)}).call(this,i("9edd"))}}]);