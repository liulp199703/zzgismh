(function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],u=0,m=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);f&&f(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},o={app:0},r=[];function s(t){return c.p+"static/js/"+({}[t]||t)+"."+{"chunk-713e5ddc":"ed9245d4","chunk-79994ce1":"b5ec01c3","chunk-a159f6a4":"78c28020","chunk-c046537a":"cf997134","chunk-f91188e6":"ee9654aa"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-713e5ddc":1,"chunk-79994ce1":1,"chunk-c046537a":1,"chunk-f91188e6":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var i="static/css/"+({}[t]||t)+"."+{"chunk-713e5ddc":"119ab513","chunk-79994ce1":"12d34496","chunk-a159f6a4":"31d6cfe0","chunk-c046537a":"c91f352f","chunk-f91188e6":"8d4f5007"}[t]+".css",o=c.p+i,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===o))return e()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){l=m[s],u=l.getAttribute("data-href");if(u===i||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var i=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete a[t],f.parentNode.removeChild(f),n(r)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[t]=0})));var i=o[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,n){i=o[t]=[e,n]}));e.push(i[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var m=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",m.name="ChunkLoadError",m.type=i,m.request=a,n[1](m)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10c0":function(t,e,n){},"1bc5":function(t,e,n){t.exports=n.p+"static/img/czpic.0babe2e4.svg"},"27d7":function(t,e,n){t.exports=n.p+"static/img/qq.f57d3400.svg"},"37fd":function(t,e,n){"use strict";var i=n("10c0"),a=n.n(i);a.a},4523:function(t,e,n){t.exports=n.p+"static/img/wx.3f04f64e.svg"},"4e66":function(t,e,n){},"4f22":function(t,e,n){t.exports=n.p+"static/img/qrcode.91093d5a.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("a133"),n("ed0d"),n("f09c"),n("e117");var i=n("a59a"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%",height:"100%",margin:"0",padding:"0"},attrs:{id:"app"}},[n("router-view")],1)},o=[],r=(n("20a5"),new i["a"]),s=r,c={name:"App",data:function(){return{}},mounted:function(){this.chage()},methods:{chage:function(){var t=20,e=document.documentElement,n=1920;function i(){s.$emit("ispc360",e.clientWidth);var i=(e.clientWidth/n*t).toFixed(0);e.style.fontSize="".concat(i,"px")}i();var a=window.onresize;function o(){i(),a&&a()}window.onresize=o}}},l=c,u=(n("7c55"),n("9ca4")),m=Object(u["a"])(l,a,o,!1,null,null,null),f=m.exports,d=n("3f11"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-18",staticStyle:{margin:"0",padding:"0"}},[n("div",{staticStyle:{position:"fixed","z-index":"1000",width:"100%",height:"5em",background:"#fff"}},[n("topbar",{staticStyle:{width:"100%",height:"5em"}})],1),n("router-view",{staticStyle:{position:"relative","z-index":"1",width:"100%",background:"#fff",top:"5em"}}),n("my-foot",{staticStyle:{"margin-top":"5em",background:"rgb(95,176,224)"}})],1)},p=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-row align-items-center justify-around flex-wrap",staticStyle:{"box-shadow":"0px 2px 15px 0px rgba(0,0,0,0.1)","border-bottom":"4px solid #fff"}},[t.showpc?n("div",{staticClass:"flex-row align-items-center flex-wrap",staticStyle:{height:"100%"}},[t._m(0),n("ul",{staticClass:"flex-row align-items-center flex-wrap font-back ",staticStyle:{height:"100%"}},t._l(t.menuItems,(function(e,i){return n("li",{key:i,staticClass:"menu-item-base font-back"},[n("router-link",{attrs:{to:e.name},nativeOn:{click:function(n){t.current=e.name},mouseenter:function(n){t.changecolor=e.name},mouseleave:function(e){t.changecolor=""}}},[n("h2",{staticClass:"text-24  font-back",class:{selected:t.isSelected(e.name),hovercolor:t.changecolor==e.name}},[t._v(t._s(e.title))])]),e.subItems?n("ul",{staticClass:"menu-items-sub flex-row align-items-center"},t._l(e.subItems,(function(e,i){return n("li",{key:i,staticClass:"menu-item-sub",class:{selected:t.current===e.name}},[n("router-link",{attrs:{to:e.name},nativeOn:{click:function(n){t.current=e.name}}},[n("h2",[t._v(t._s(e.title))])])],1)})),0):t._e()],1)})),0)]):n("div",{staticClass:"flex-row justify-between align-items-center",staticStyle:{width:"100%"}},[t.showall?t._e():n("div",{staticClass:"flex-row align-items-center text-16",staticStyle:{height:"100%",width:"100%","margin-left":"1em"}},[t._m(1)]),t.showall?t._e():n("div",{staticClass:"text-36 maincolor cursor-p",staticStyle:{"margin-right":"1em"},on:{click:function(e){t.showall=!0}}},[n("div",{staticClass:"iconfont icon-icon-test ",staticStyle:{"font-weight":"700"}})]),t.showall?n("div",{staticStyle:{height:"100%",position:"absolute",background:"#fff!important",width:"100%","z-index":"1000",top:"0"}},[n("div",{staticClass:"flex-row justify-between text-16 align-items-center",staticStyle:{height:"100%",margin:"0 1em"}},[t._m(2),n("div",{staticClass:"text-18 maincolor cursor-p",on:{click:function(e){t.showall=!1}}},[n("div",{staticClass:"iconfont icon-wukuangxialakuanganniuzhankai",staticStyle:{"font-weight":"700"}})])]),n("ul",{staticClass:"flex-row align-items-center  font-back",staticStyle:{width:"100%",background:"#fff!important"}},t._l(t.menuItems,(function(e,i){return n("li",{key:i,staticClass:"menu-item-base font-back"},[n("router-link",{attrs:{to:e.name},nativeOn:{click:function(n){t.current=e.name},mouseenter:function(n){t.changecolor=e.name},mouseleave:function(e){t.changecolor=""}}},[n("h2",{staticClass:"text-22  font-back",class:{selected:t.isSelected(e.name),hovercolor:t.changecolor==e.name}},[t._v(t._s(e.title))])])],1)})),0)]):t._e()])])},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex-row align-items-center",staticStyle:{height:"100%",width:"10rem"}},[i("div",{staticClass:"flex-row align-items-center"},[i("img",{staticClass:"logo",staticStyle:{height:"3.2em",width:"auto","margin-right":".5em","border-radius":"50%"},attrs:{src:n("7e2e")}}),i("span",[t._v("智尊地信")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex-row align-items-center"},[i("img",{staticClass:"logo",staticStyle:{height:"3.2em",width:"auto","margin-right":".5em","border-radius":"50%"},attrs:{src:n("7e2e")}}),i("span",{staticClass:"text-22"},[t._v("智尊地信")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex-row align-items-center"},[i("img",{staticClass:"logo",staticStyle:{height:"3.2em",width:"auto","margin-right":".5em","border-radius":"50%"},attrs:{src:n("7e2e")}}),i("span",{staticClass:"text-22"},[t._v("智尊地信")])])}],_=(n("053b"),{components:{},data:function(){return{showpc:!0,showall:!1,changecolor:"",current:"home",codearr:[],menuItems:[{name:"home",title:"首页"},{name:"about",title:"公司概况"},{name:"soft",title:"软件产品",subItems:[{name:"lyjc",title:"自然河流展示"},{name:"lygn",title:"流域功能展示"},{name:"sthx",title:"生态红线区域监测"}]},{name:"service",title:"解决方案",subItems:[{name:"ybyj",title:"污染源分布展示"},{name:"hjyj",title:"水环境预警"}]},{name:"contact",title:"合作伙伴"}],subs:{lyjc:"lyjc",fqzt:"wrzt",poi:"wrzt",jcfx:"jcfx",zhzs:"jcfx",cxfx:"jcfx",tjbb:"jcfx",lyfx:"lyfx",lyjx:"lyfx",zlpg:"zlpg",dbzt:"zlpg",shwh:"shwh",log:"shwh"}}},created:function(){var t=this;this.$bus.$on("ispc360",(function(e){t.showpc=e>800}))},mounted:function(){this.current=this.$route.name||"home",this.showpc=document.documentElement.clientWidth>800},methods:{isSelected:function(t){return t===(this.subs[this.current]||this.current)},routeTo:function(t){this.current=t,this.$emit("selectmenu",{name:t}),this.$router.push({name:t})},test:function(){alert(1)}}}),b=_,w=(n("a670"),Object(u["a"])(b,g,v,!1,null,"03c80a47",null)),y=w.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"foot flex-column justify-center align-items-center text-16"},[i("div",{staticClass:"flex-row justify-between flex-wrap align-items-center",staticStyle:{width:"70rem","margin-top":"2.5rem"}},[i("div",{staticClass:"foot-content"},[t._m(0),i("p",[t._v("公司地址：长沙高新区麓云路159号佳境小区7栋1202号")]),i("p",[t._v("电子邮箱：561479114@qq.com")]),i("p",[t._v("联系电话：1368730**** 邱总")]),i("div",{staticClass:"flex-row justify-between",staticStyle:{width:"7.2rem","margin-top":"2rem"}},[i("popper1",[i("div",{staticClass:"topmodel",attrs:{slot:"content"},slot:"content"},[i("img",{staticClass:"bigimg",attrs:{src:n("4f22")}})]),i("template",{slot:"primary"},[i("img",{staticClass:"qcood",attrs:{src:n("27d7")}})])],2),i("popper1",[i("div",{staticClass:"topmodel",attrs:{slot:"content"},slot:"content"},[i("img",{staticClass:"bigimg",attrs:{src:n("4f22")}})]),i("template",{slot:"primary"},[i("img",{staticClass:"qcood",attrs:{src:n("4523")}})])],2),i("popper1",[i("div",{staticClass:"topmodel",attrs:{slot:"content"},slot:"content"},[i("img",{staticClass:"bigimg",attrs:{src:n("4f22")}})]),i("template",{slot:"primary"},[i("img",{staticClass:"qcood",attrs:{src:n("1bc5")}})])],2)],1)]),t._m(1)]),t._m(2)])},k=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex-row align-items-center",staticStyle:{"margin-bottom":"1rem"}},[i("img",{staticClass:"logo",staticStyle:{height:"3.2rem",width:"auto","margin-right":".5rem","border-radius":"50%"},attrs:{src:n("7e2e")}}),i("span",[t._v("智尊地信")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"foot-link flex-row flex-wrap text-18"},[n("div",[n("div",[t._v("关于我们")]),n("div",[t._v("公司概况")]),n("div",[t._v("技术团队")]),n("div",[t._v("联系我们")])]),n("div",[n("div",[t._v("软件产品")]),n("div",[t._v("空气质量监测及决策平台")]),n("div",[t._v("水环境监测及决策平台")]),n("div",[t._v("环保在线管理平台")])]),n("div",[n("div",[t._v("解决方案")]),n("div",[t._v("智慧环保")]),n("div",[t._v("智慧城管")]),n("div",[t._v("后台管理")])]),n("div",[n("div",[t._v("合作伙伴")]),n("div",[t._v("中数天图")]),n("div",[t._v("中南大学")]),n("div",[t._v("湖南师范大学")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"1rem 0 1rem",width:"100%"}},[n("span",{staticStyle:{"margin-right":"0.5rem"}},[t._v("@2020 zzmap.com 版权所有")]),t._v(" | "),n("span",{staticStyle:{"margin-left":"0.5rem"}},[t._v("备案号：湘ICP备05007169号")])])}],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("popper",{attrs:{trigger:"hover",options:{placement:"top",modifiers:{offset:{offset:"0,10px"}}}}},[n("div",{staticClass:"popper"},[t._t("content")],2),n("button",{staticStyle:{padding:"0",margin:"0",height:"1.8em",cursor:"pointer",background:"transparent",border:"none"},attrs:{slot:"reference"},slot:"reference"},[t._t("primary")],2)])},S=[],j=n("db01"),E=n.n(j),z=(n("f95c"),{components:{popper:E.a}}),O=z,$=(n("5a10"),Object(u["a"])(O,C,S,!1,null,null,null)),q=$.exports,P={components:{popper1:q},data:function(){return{}}},T=P,I=(n("37fd"),Object(u["a"])(T,x,k,!1,null,"668d5ba5",null)),N=I.exports,A={components:{topbar:y,MyFoot:N}},D=A,M=Object(u["a"])(D,h,p,!1,null,null,null),B=M.exports,L=function(t){return n.e("chunk-c046537a").then(function(){var e=[n("c3b0")];t.apply(null,e)}.bind(this)).catch(n.oe).default},F=function(t){return n.e("chunk-f91188e6").then(function(){var e=[n("8143")];t.apply(null,e)}.bind(this)).catch(n.oe).default},W=function(t){return n.e("chunk-79994ce1").then(function(){var e=[n("d0d0")];t.apply(null,e)}.bind(this)).catch(n.oe).default},H=function(t){return n.e("chunk-a159f6a4").then(function(){var e=[n("82dc")];t.apply(null,e)}.bind(this)).catch(n.oe).default},J=function(t){return n.e("chunk-713e5ddc").then(function(){var e=[n("c0ae")];t.apply(null,e)}.bind(this)).catch(n.oe).default};i["a"].use(d["a"]);var K=[{path:"/",name:"main",component:B,redirect:"/home",children:[{path:"home",name:"home",meta:{breadcrumbName:"首页"},component:L},{path:"about",name:"about",component:F,meta:{breadcrumbName:"公司概况"}},{path:"soft",name:"soft",component:W},{path:"service",name:"service",component:H,meta:{breadcrumbName:"解决方案"}},{path:"contact",name:"contact",component:J,meta:{breadcrumbName:"合作伙伴"}}]}],U=new d["a"]({routes:K}),V=U,X=n("9f3a");i["a"].use(X["a"]);var G=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Q=(n("c98c"),n("e635")),R=n.n(Q),Y=n("8105"),Z=n.n(Y);i["a"].use(R.a),i["a"].prototype.$bus=s,i["a"].component("parallax",Z.a),i["a"].config.productionTip=!1,new i["a"]({router:V,store:G,render:function(t){return t(f)}}).$mount("#app")},"5a10":function(t,e,n){"use strict";var i=n("ff0f"),a=n.n(i);a.a},"7be9":function(t,e,n){},"7c55":function(t,e,n){"use strict";var i=n("4e66"),a=n.n(i);a.a},"7e2e":function(t,e,n){t.exports=n.p+"static/img/fcgcmis.1b167d83.png"},a670:function(t,e,n){"use strict";var i=n("7be9"),a=n.n(i);a.a},c98c:function(t,e,n){t.exports={"gif-black":"animation_gif-black_3lqlj","gif-white":"animation_gif-white_3iT4W","animation-fade":"animation_animation-fade_1-QsV",fade:"animation_fade_9Pzwp","animation-scale-up":"animation_animation-scale-up_DtdoD","scale-up":"animation_scale-up_TV4um","animation-scale-down":"animation_animation-scale-down_1KMix","scale-down":"animation_scale-down_3t-pu","animation-slide-top":"animation_animation-slide-top_1UkFI","slide-top":"animation_slide-top_3dXp1","animation-slide-bottom":"animation_animation-slide-bottom_28GgA","slide-bottom":"animation_slide-bottom_DEEBm","animation-slide-left":"animation_animation-slide-left_2Svu0","slide-left":"animation_slide-left_2SmxC","animation-slide-right":"animation_animation-slide-right_2ETeB","slide-right":"animation_slide-right_5Nr0g","animation-shake":"animation_animation-shake_Xlejc",shake:"animation_shake_3c7Rq","animation-reverse":"animation_animation-reverse_2DC9H"}},ff0f:function(t,e,n){}});