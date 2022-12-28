"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3298],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={},i=void 0,l={unversionedId:"How do I.../Create a flow to capture multiple answers for a single question",id:"How do I.../Create a flow to capture multiple answers for a single question",title:"Create a flow to capture multiple answers for a single question",description:"While creating a program you might have a requirement to capture multiple answers for a single question. This requirement doesn&#39;t work with interactive messages but you can still use regular text to accomplish this.",source:"@site/docs/6. How do I.../18. Create a flow to capture multiple answers for a single question.md",sourceDirName:"6. How do I...",slug:"/How do I.../Create a flow to capture multiple answers for a single question",permalink:"/docs/How do I.../Create a flow to capture multiple answers for a single question",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Glific%20Documentation/docs/6. How do I.../18. Create a flow to capture multiple answers for a single question.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add the display Name of the BOT number and show it to end-users",permalink:"/docs/How do I.../Add the display Name of the BOT number and show it to end-users"},next:{title:"Check WhatsApp Quality Rating and Messaging Limits",permalink:"/docs/How do I.../Check WhatsApp Quality Rating and Messaging Limits"}},s={},p=[{value:"For Conditional Flow",id:"for-conditional-flow",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"While creating a program you might have a requirement to capture multiple answers for a single question. This requirement doesn","'","t work with interactive messages but you can still use regular text to accomplish this."),(0,n.kt)("p",null,"For multiple answers, it","'","s always better to add a note and an input example that will help users to know how to answer in the correct way. For example,"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/3PDGc16d9hC6qWutpDFVN2UP.png",alt:null})),(0,n.kt)("p",null,"And the Wait For Response can be something like this"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/ERhJVQ9eZArDitiKXBELcsbg.png",alt:null})),(0,n.kt)("p",null,"Your message flow will look something like this"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/HqO-HRor0SKZsFVTkaJ_GAnO.png",alt:null})),(0,n.kt)("h2",{id:"for-conditional-flow"},"For Conditional Flow"),(0,n.kt)("p",null,"If you want to create a conditional flow with multiple answers, you can create your program like this."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/ilIc38KMTWII_sLi3cMHvhFM.png",alt:null})),(0,n.kt)("p",null,"You can set the Wait For Response like this,"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/VXpQHh1r84f_-mrcHyhkc7iL.png",alt:null})),(0,n.kt)("p",null,"Your message flow will look like this"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/PxrEUYcTxYSjAJE4VBdWT8Fo.png",alt:null})))}c.isMDXComponent=!0}}]);