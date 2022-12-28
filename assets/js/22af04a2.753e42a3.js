"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1288],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>f});var n=o(7294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=c(o),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return o?n.createElement(f,s(s({ref:e},p),{},{components:o})):n.createElement(f,s({ref:e},p))}));function f(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=o.length,s=new Array(r);s[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[u]="string"==typeof t?t:a,s[1]=i;for(var c=2;c<r;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2545:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={},s=void 0,i={unversionedId:"Flows/Flow Actions/How to use the split by Contact variable question type",id:"Flows/Flow Actions/How to use the split by Contact variable question type",title:"How to use the split by Contact variable question type",description:"There may be situations where you would want to show different responses on the basis of some attribute of contact (which is saved in contact variables by Update contact questions type).",source:"@site/docs/3. Flows/1. Flow Actions/14. How to use the split by Contact variable question type.md",sourceDirName:"3. Flows/1. Flow Actions",slug:"/Flows/Flow Actions/How to use the split by Contact variable question type",permalink:"/docs/docs/Flows/Flow Actions/How to use the split by Contact variable question type",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Glific%20Documentation/docs/3. Flows/1. Flow Actions/14. How to use the split by Contact variable question type.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Background Flows",permalink:"/docs/docs/Flows/Flow Actions/Background Flows"},next:{title:"Predefined contact variables in Glific",permalink:"/docs/docs/Flows/Flow Variables/Predefined contact variables in Glific"}},l={},c=[],p={toc:c};function u(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There may be situations where you would want to show different responses on the basis of some attribute of contact (which is saved in contact variables by ",(0,a.kt)("inlineCode",{parentName:"p"},"Update contact")," questions type)."),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Split by contact field")," option to make that happen."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/EKI5flA9s6yKI-IwUcOGj7FG.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example use case:"),"  Suppose you want to take a decision on the basis of the age group a contact belongs to."),(0,a.kt)("p",null,"You need to save the age of the contact in the contact variable before using that in ",(0,a.kt)("inlineCode",{parentName:"p"},"split by a contact field")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ask contact about their age group."),(0,a.kt)("li",{parentName:"ol"},"Save the response with ",(0,a.kt)("inlineCode",{parentName:"li"},"update contact")),(0,a.kt)("li",{parentName:"ol"},"Select the contact variable from ",(0,a.kt)("inlineCode",{parentName:"li"},"if the contact's"),"dropdown and use the response to make a decision in your flow with ",(0,a.kt)("inlineCode",{parentName:"li"},"split by a contact field"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/6vS2a-cWlYfkoLQ3Kg_FGYbq.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/D0dmVjLcCYLBtmskG-kkvv_T.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/SmVDqsAhZOvBEnsgs9Zh4QuY.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/5YMQwsCiVbcOvLgC8fONfgPZ.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/FE2C4NYjOx2e7Ov9-iL7QiNF.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/UEa3q0NDRkKBU3E6Mkg5nZfm.png",alt:null})))}u.isMDXComponent=!0}}]);