"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8625],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7112:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"Flows/Flow Variables/Create a counter variable in a flow",id:"Flows/Flow Variables/Create a counter variable in a flow",title:"Create a counter variable in a flow",description:"There may be a need to keep a counter in a flow, to keep track of how many times an action is performed or for other purposes.",source:"@site/docs/3. Flows/2. Flow Variables/06. Create a counter variable in a flow.md",sourceDirName:"3. Flows/2. Flow Variables",slug:"/Flows/Flow Variables/Create a counter variable in a flow",permalink:"/docs/Flows/Flow Variables/Create a counter variable in a flow",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Glific%20Documentation/docs/3. Flows/2. Flow Variables/06. Create a counter variable in a flow.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Parent and Child variable",permalink:"/docs/Flows/Flow Variables/Parent and Child variable"},next:{title:"How to identify which keyword triggered the flow",permalink:"/docs/Flows/Flow Variables/How to identify which keyword triggered the flow"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There may be a need to keep a counter in a flow, to keep track of how many times an action is performed or for other purposes."),(0,a.kt)("p",null,"One can create a variable (refer to ",(0,a.kt)("a",{parentName:"p",href:"https://glific.slab.com/public/posts/9qlaxpa3"},"Flow variables vs Contact variables")," document to know more about how variables are created in a flow.)and increment it with expression."),(0,a.kt)("p",null,"1 .  Initialize the variable with an update contact node."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/thV_7ERXZzIRwBsG45yiDTom.png",alt:null})),(0,a.kt)("p",null,"2 . Use the update contact node to create a variable and in the result section add 1 to increment the counter."),(0,a.kt)("p",null,"In this example, a variable ",(0,a.kt)("strong",{parentName:"p"},"counter")," is created and in the result section, it is incremented by 1. (  ",(0,a.kt)("inlineCode",{parentName:"p"},"<%= @contact.fields.counter+ 1 %>"),")"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/rJtwjJ0fT1NVtGO4rtVxL40j.png",alt:null})),(0,a.kt)("p",null,"The value of the variable counter can be fetched anywhere with syntax ",(0,a.kt)("inlineCode",{parentName:"p"},"@contact.fields.counter")),(0,a.kt)("p",null,"Split By expression node to check how many times the counter has been incremented."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/cVJPCagLRBeWR1D9FzAZiyUh.png",alt:null})),(0,a.kt)("p",null,"Then in the flow, you can use it anywhere where you want to repeat things. One of the common use cases is when you nudge the users in case of no response."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/q3VXY8LNo2LOtDCW6ZkC3dR4.png",alt:null})))}u.isMDXComponent=!0}}]);