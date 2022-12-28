"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,d=c["".concat(l,".").concat(f)]||c[f]||u[f]||r;return n?o.createElement(d,s(s({ref:t},m),{},{components:n})):o.createElement(d,s({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={},s=void 0,i={unversionedId:"Flows/Flow Actions/Send message to a staff member",id:"Flows/Flow Actions/Send message to a staff member",title:"Send message to a staff member",description:"You can use the Send Broadcast action type to send a message notification to staff members on their  whatsApp number at any time during a flow.",source:"@site/docs/3. Flows/1. Flow Actions/09. Send message to a staff member.md",sourceDirName:"3. Flows/1. Flow Actions",slug:"/Flows/Flow Actions/Send message to a staff member",permalink:"/docs/docs/Flows/Flow Actions/Send message to a staff member",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Glific%20Documentation/docs/3. Flows/1. Flow Actions/09. Send message to a staff member.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to use the Has Media category in Flow editor",permalink:"/docs/docs/Flows/Flow Actions/How to use the Has Media category in Flow editor"},next:{title:"How to use HSM template messages in your flows",permalink:"/docs/docs/Flows/Flow Actions/How to use HSM template messages in your flows"}},l={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Send Broadcast")," action type to send a message notification to staff members on their  whatsApp number at any time during a flow."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: -")," ",(0,a.kt)("em",{parentName:"p"},"Staff members cannot be in active session all the time.")," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Always use"))," ",(0,a.kt)("a",{parentName:"p",href:"https://glific.slab.com/public/posts/afhp1px5"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("em",{parentName:"strong"},"HSM Templates")))," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"in Send broadcast"))," ",(0,a.kt)("em",{parentName:"p"},"action type, to avoid issues in executing the flow.")),(0,a.kt)("p",null,"If there is a use case where staff members needs to be notified about an event, then  ",(0,a.kt)("inlineCode",{parentName:"p"},"Send Broadcast")," action type is available in Glific. Here","'","s how to use it"),(0,a.kt)("p",null,"1 .  Create a flow."),(0,a.kt)("p",null,"2 .  Any time during the flow, when it is required to notify a staff members. Create a new node and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Send a staff member a message")," action type from the drop down."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/5sP8ilHhOSnXOSb_N6s0Sdwl.png",alt:null})),(0,a.kt)("p",null,"3 .  Select the staff members from the dropdown to whom message notification needs to be sent."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/vNK3B4Q8Jh-3jHPnnHu5nkZJ.png",alt:null})),(0,a.kt)("p",null,"4 .  Enter the message you want to send ."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/6vBo3q9U_4GrYM3z5a22btVP.png",alt:null})),(0,a.kt)("p",null,"5 .  Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"ok")," to save it."),(0,a.kt)("p",null,"Execute the flow to test it. Staff member will get a message on their registered WhatsApp number."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/S0NOArH0ztPD_a_HHbXkthwE.png",alt:null})))}c.isMDXComponent=!0}}]);