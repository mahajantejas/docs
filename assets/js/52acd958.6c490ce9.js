"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5915],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>w});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(o),f=n,w=h["".concat(s,".").concat(f)]||h[f]||u[f]||l;return o?r.createElement(w,a(a({ref:t},p),{},{components:o})):r.createElement(w,a({ref:t},p))}));function w(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<l;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},738:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const l={},a=void 0,i={unversionedId:"Flows/Flow Troubleshooting/Flows not working - Troubleshoot checklist",id:"Flows/Flow Troubleshooting/Flows not working - Troubleshoot checklist",title:"Flows not working - Troubleshoot checklist",description:"1. Is the flow published? If the desired result not showing while executing the flow. Make sure you have published the flow after modifying it.",source:"@site/docs/3. Flows/4. Flow Troubleshooting/01. Flows not working - Troubleshoot checklist.md",sourceDirName:"3. Flows/4. Flow Troubleshooting",slug:"/Flows/Flow Troubleshooting/Flows not working - Troubleshoot checklist",permalink:"/docs/docs/Flows/Flow Troubleshooting/Flows not working - Troubleshoot checklist",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/3. Flows/4. Flow Troubleshooting/01. Flows not working - Troubleshoot checklist.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flow Troubleshooting",permalink:"/docs/docs/category/flow-troubleshooting"},next:{title:"Integrations",permalink:"/docs/docs/category/integrations"}},s={},c=[{value:"Logs to know if any errors are thrown while executing the flow",id:"logs-to-know-if-any-errors-are-thrown-while-executing-the-flow",level:2}],p={toc:c};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Is the flow published?")," If the desired result not showing while executing the flow. Make sure you have published the flow after modifying it."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Check messages in all language"),". If you are getting messages which you are not expecting. Please check if different messages are saved in other languages and check which language preference is user is having which you are using for testing the flow.  "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Variable not defined properly.")," If variables are not defined properly the flow will not give expected results. Refer  ",(0,n.kt)("a",{parentName:"li",href:"https://glific.slab.com/public/posts/9qlaxpa3"},"Flow level variable Vs Contact level variable")," for details about how to use variables in flows."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Linked flow is not published."),"  The flow will not execute if any other flow is called from a flow and the other flow is not published. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Web hook errors.")," The flow will not give desired results if there is any error in the web hook call. Refer ",(0,n.kt)("a",{parentName:"li",href:"https://glific.slab.com/public/posts/nllntvgc"},"How to check Webhook Logs in Glific?"),"  to know more about web hook logs."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Flow should start with a Send a Message")," - Flow should start with a message, so that it gives related message. Starting a flow with ",(0,n.kt)("inlineCode",{parentName:"li"},"Wait for response")," action type will confuse if the flow has started or not."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Ignore Keyword is checked or not? -")," Check if ",(0,n.kt)("inlineCode",{parentName:"li"},"Ignore Keyword")," is checked for the flow, which is currently executing for the contact. If Ignore Keyword is checked, then it will not allow to start another flow, if contact type any other keyword."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Flow should be active")," - Check if flow is inactive. Click on isActive check box and save to activate the flow.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/S6ZevQL4Vccd2Hvwkq4gcetC.png",alt:null})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Node"),"  ",(0,n.kt)("strong",{parentName:"li"},"placement"),"- There should be only single first node at the top in flow editor. All other node should be below that. "),(0,n.kt)("li",{parentName:"ol"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Correct"),"  ",(0,n.kt)("strong",{parentName:"p"},"placement")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/AJnqxSt2GUC-xcdeW2IAglWd.png",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Incorrect placement")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/LGKMqvhnuftHA7XiAAXp7Rg_.png",alt:null})),(0,n.kt)("p",null,"10 . ",(0,n.kt)("strong",{parentName:"p"},"Ignore keywords")," - Check if contact is already in a flow, which has  ",(0,n.kt)("inlineCode",{parentName:"p"},"ignore keywords"),"implemented. If contact tries to strat flow with the keyword, in this case, it will not start the flow."),(0,n.kt)("p",null,"11 . ",(0,n.kt)("strong",{parentName:"p"},"OptedOut")," - check if a contact is not opted out. An easy test is to ask the contact to type optin and send it to the BOT (",(0,n.kt)("strong",{parentName:"p"},"Note, Your optin flow should always have optin keyword set to it"),"). See if it starts working."),(0,n.kt)("p",null,"Also, make sure, that the default optin message from the Gupshup portal is disabled."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/z_DMbEghWZGGxyJz-5GQsXxk.png",alt:null})),(0,n.kt)("h2",{id:""}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/gvFadj-hoIBnE8UI-AVVOIX9.png",alt:null})),(0,n.kt)("p",null,"12 . ",(0,n.kt)("strong",{parentName:"p"},"Session Window -")," Check if contacts are in the session window, to start a flow with them, if not make sure the flow is started with HSM (with an expected response). The same is true if the flow is started for a collection."),(0,n.kt)("h2",{id:"logs-to-know-if-any-errors-are-thrown-while-executing-the-flow"},"Logs to know if any errors are thrown while executing the flow"),(0,n.kt)("p",null,"Refer ",(0,n.kt)("a",{parentName:"p",href:"https://glific.slab.com/public/posts/3fwqk0b9"},"Notifications for system errors")))}h.isMDXComponent=!0}}]);