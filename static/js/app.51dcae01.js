(function(t){function e(e){for(var a,r,o=e[0],u=e[1],s=e[2],l=0,f=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},i={app:0},c=[];function o(t){return u.p+"static/js/"+({}[t]||t)+"."+{"chunk-449baac8":"561b7eac","chunk-53af1f90":"0c141851","chunk-58ff4759":"f7fed367","chunk-a0c2b45e":"5604b80e","chunk-a159f6a4":"da89c79c","chunk-5fc337b8":"ca6e0dc7","chunk-7c3ec856":"93ccd421"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-449baac8":1,"chunk-53af1f90":1,"chunk-58ff4759":1,"chunk-a0c2b45e":1,"chunk-5fc337b8":1,"chunk-7c3ec856":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="static/css/"+({}[t]||t)+"."+{"chunk-449baac8":"31a76874","chunk-53af1f90":"53cff493","chunk-58ff4759":"e9ab556f","chunk-a0c2b45e":"2d80faa9","chunk-a159f6a4":"31d6cfe0","chunk-5fc337b8":"31a76874","chunk-7c3ec856":"53cff493"}[t]+".css",i=u.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var s=c[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],l=s.getAttribute("data-href");if(l===a||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],d.parentNode.removeChild(d),n(c)},d.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"038b":function(t,e,n){},"0f21":function(t,e,n){"use strict";var a=n("038b"),r=n.n(a);r.a},"4e66":function(t,e,n){},"4e72":function(t,e,n){"use strict";var a=n("ff22"),r=n.n(a);r.a},"4f36":function(t,e,n){"use strict";var a=n("e546"),r=n.n(a);e["default"]=r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("a133"),n("ed0d"),n("f09c"),n("e117");var a=n("a59a"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%",height:"100%",margin:"0",padding:"0"},attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("20a5"),n("200d")),o=n("1187"),u=n.n(o),s={name:"App",components:{vuescroll:u.a},data:function(){var t;return{ops:{vuescroll:{},scrollPanel:{},rail:(t={keepShow:!0,background:"#01a99a",opacity:0,size:"5px",specifyBorderRadius:!1,gutterOfEnds:null,gutterOfSide:"0"},Object(c["a"])(t,"keepShow",!1),Object(c["a"])(t,"border","none"),t),bar:{hoverStyle:!0,onlyShowBarOnScroll:!1,background:"#e4e4e4"}}}},mounted:function(){(function(){var t=20,e=document.documentElement,n=1920;function a(){var a=(e.clientWidth/n*t).toFixed(0);e.style.fontSize="".concat(a,"px")}a();var r=window.onresize;function i(){a(),r&&r()}window.onresize=i})()}},l=s,f=(n("7c55"),n("9ca4")),d=Object(f["a"])(l,r,i,!1,null,null,null),m=d.exports,h=n("3f11"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-18",staticStyle:{margin:"0",padding:"0"}},[n("div",{staticStyle:{position:"fixed","z-index":"1000",width:"100%",height:"5rem",background:"#fff"}},[n("topbar",{staticStyle:{width:"100%",height:"5rem"}})],1),n("router-view",{staticStyle:{position:"relative","z-index":"1",width:"100%",background:"#fff",top:"5rem"}}),n("my-foot",{staticStyle:{"margin-top":"5rem"}})],1)},v=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-row align-items-center justify-around flex-wrap",staticStyle:{"box-shadow":"0px 2px 15px 0px rgba(0,0,0,0.1)"}},[n("div",{staticClass:"flex-row align-items-center flex-wrap",staticStyle:{height:"100%"}},[t._m(0),n("ul",{staticClass:"flex-row align-items-center flex-wrap font-back ",staticStyle:{height:"100%"}},t._l(t.menuItems,(function(e,a){return n("li",{key:a,staticClass:"menu-item-base font-back"},[n("router-link",{attrs:{to:e.name},nativeOn:{click:function(n){t.current=e.name},mouseenter:function(n){t.changecolor=e.name},mouseleave:function(e){t.changecolor=""}}},[n("h2",{staticClass:"text-24  font-back",class:{selected:t.isSelected(e.name),hovercolor:t.changecolor==e.name}},[t._v(t._s(e.title))])]),e.subItems?n("ul",{staticClass:"menu-items-sub flex-row align-items-center"},t._l(e.subItems,(function(e,a){return n("li",{key:a,staticClass:"menu-item-sub",class:{selected:t.current===e.name}},[n("router-link",{attrs:{to:e.name},nativeOn:{click:function(n){t.current=e.name}}},[n("h2",[t._v(t._s(e.title))])])],1)})),0):t._e()],1)})),0),t._m(1)])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-row align-items-center",staticStyle:{height:"100%",width:"10rem"}},[a("div",{staticClass:"flex-row align-items-center"},[a("img",{staticClass:"logo",staticStyle:{height:"3.2rem",width:"auto","margin-right":".5rem","border-radius":"50%"},attrs:{src:n("7e2e")}}),a("span",[t._v("智尊地信")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input")])}],y=(n("053b"),{components:{},data:function(){return{changecolor:"",current:"home",codearr:[],menuItems:[{name:"home",title:"首页"},{name:"about",title:"公司概况"},{name:"soft",title:"软件产品",subItems:[{name:"lyjc",title:"自然河流展示"},{name:"lygn",title:"流域功能展示"},{name:"sthx",title:"生态红线区域监测"}]},{name:"service",title:"解决方案",subItems:[{name:"ybyj",title:"污染源分布展示"},{name:"hjyj",title:"水环境预警"}]},{name:"contact",title:"合作伙伴"}],subs:{lyjc:"lyjc",fqzt:"wrzt",poi:"wrzt",jcfx:"jcfx",zhzs:"jcfx",cxfx:"jcfx",tjbb:"jcfx",lyfx:"lyfx",lyjx:"lyfx",zlpg:"zlpg",dbzt:"zlpg",shwh:"shwh",log:"shwh"}}},mounted:function(){this.current=this.$route.name||"home"},methods:{isSelected:function(t){return t===(this.subs[this.current]||this.current)},routeTo:function(t){this.current=t,this.$emit("selectmenu",{name:t}),this.$router.push({name:t})},test:function(){alert(1)}}}),w=y,A=(n("4e72"),Object(f["a"])(w,b,g,!1,null,"b4093064",null)),k=A.exports,x=n("77b9"),S={name:"main",components:{topbar:k,MyFoot:x["default"]}},j=S,C=Object(f["a"])(j,p,v,!1,null,null,null),O=C.exports,z=function(t){return n.e("chunk-58ff4759").then(function(){var e=[n("c3b0")];t.apply(null,e)}.bind(this)).catch(n.oe).default},R=function(t){return n.e("chunk-449baac8").then(function(){var e=[n("8143")];t.apply(null,e)}.bind(this)).catch(n.oe).default},N=function(t){return n.e("chunk-53af1f90").then(function(){var e=[n("d0d0")];t.apply(null,e)}.bind(this)).catch(n.oe).default},Q=function(t){return n.e("chunk-a159f6a4").then(function(){var e=[n("82dc")];t.apply(null,e)}.bind(this)).catch(n.oe).default},V=function(t){return n.e("chunk-a0c2b45e").then(function(){var e=[n("c0ae")];t.apply(null,e)}.bind(this)).catch(n.oe).default};a["default"].use(h["a"]);var P=[{path:"/",name:"main",component:O,redirect:"/home",children:[{path:"home",name:"home",meta:{breadcrumbName:"首页"},component:z},{path:"about",name:"about",component:R,meta:{breadcrumbName:"公司概况"}},{path:"soft",name:"soft",component:N},{path:"service",name:"service",component:Q,meta:{breadcrumbName:"解决方案"}},{path:"contact",name:"contact",component:V,meta:{breadcrumbName:"合作伙伴"}}]}],U=new h["a"]({routes:P}),K=U,_=n("9f3a");a["default"].use(_["a"]);var q=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}}),E=n("e635"),I=n.n(E);a["default"].use(I.a),a["default"].config.productionTip=!1,new a["default"]({router:K,store:q,render:function(t){return t(m)}}).$mount("#app")},"77b9":function(t,e,n){"use strict";var a=n("781b"),r=n("4f36"),i=(n("0f21"),n("9ca4")),c=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,"a3b00412",null);e["default"]=c.exports},"781b":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foot flex-column justify-center align-items-center text-16"},[a("div",{staticClass:"flex-row justify-between",staticStyle:{width:"70rem","margin-top":"2.5rem"}},[a("div",{staticClass:"foot-content"},[a("div",{staticClass:"flex-row align-items-center",staticStyle:{"margin-bottom":"1rem"}},[a("img",{staticClass:"logo",staticStyle:{height:"3.2rem",width:"auto","margin-right":".5rem","border-radius":"50%"},attrs:{src:n("7e2e")}}),a("span",[t._v("智尊地信")])]),a("p",[t._v("公司地址：长沙高新区麓云路159号佳境小区7栋1202号")]),a("p",[t._v("电子邮箱：561479114@qq.com")]),a("p",[t._v("联系电话：1368730**** 邱总")]),a("div",{staticClass:"flex-row justify-between qcood",staticStyle:{width:"7.2rem","margin-top":"2rem"}},[a("img",{attrs:{src:n("cf05")}}),a("img",{attrs:{src:n("cf05")}}),a("img",{attrs:{src:n("cf05")}})])]),a("div",{staticClass:"foot-link flex-row"},[a("div",[a("div",[t._v("关于我们")]),a("div",[t._v("公司概况")]),a("div",[t._v("技术团队")]),a("div",[t._v("联系我们")])]),a("div",[a("div",[t._v("软件产品")]),a("div",[t._v("空气质量监测及决策平台")]),a("div",[t._v("水环境监测及决策平台")]),a("div",[t._v("环保在线管理平台")])]),a("div",[a("div",[t._v("解决方案")]),a("div",[t._v("智慧环保")]),a("div",[t._v("智慧城管")]),a("div",[t._v("后台管理")])]),a("div",[a("div",[t._v("合作伙伴")]),a("div",[t._v("中数天图")]),a("div",[t._v("中南大学")]),a("div",[t._v("湖南师范大学")])])])]),a("div",{staticStyle:{margin:"auto 0 1rem"}},[a("span",{staticStyle:{"margin-right":"0.5rem"}},[t._v("@2020 zzmap.com 版权所有")]),t._v(" | "),a("span",{staticStyle:{"margin-left":"0.5rem"}},[t._v("备案号：湘ICP备05007169号")])])])}]},"7c55":function(t,e,n){"use strict";var a=n("4e66"),r=n.n(a);r.a},"7e2e":function(t,e,n){t.exports=n.p+"static/img/fcgcmis.1b167d83.png"},cf05:function(t,e){t.exports="data:image/png;base64,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"},e546:function(t,e){},ff22:function(t,e,n){}});