"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[689],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(o),k=r,h=u["".concat(s,".").concat(k)]||u[k]||m[k]||i;return o?n.createElement(h,l(l({ref:t},p),{},{components:o})):n.createElement(h,l({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=k;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},5326:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const i={},l=void 0,a={unversionedId:"Integrations/How to check Webhook Logs in Glific",id:"Integrations/How to check Webhook Logs in Glific",title:"How to check Webhook Logs in Glific",description:"Webhook calls are used to communicate with the third-party applications within flows. To know more about webhook call refer. How to use Webhooks in Glific?",source:"@site/docs/4. Integrations/07. How to check Webhook Logs in Glific.md",sourceDirName:"4. Integrations",slug:"/Integrations/How to check Webhook Logs in Glific",permalink:"/docs/docs/Integrations/How to check Webhook Logs in Glific",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Glific%20Documentation/docs/4. Integrations/07. How to check Webhook Logs in Glific.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to use Webhooks in Glific",permalink:"/docs/docs/Integrations/How to use Webhooks in Glific"},next:{title:"Getting started with Dialog Flow for NLP",permalink:"/docs/docs/Integrations/Getting started with Dialog Flow for NLP"}},s={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Webhook calls are used to communicate with the third-party applications within flows. To know more about webhook call refer. ",(0,r.kt)("a",{parentName:"p",href:"https://glific.slab.com/public/posts/zr4p96z4"},"How to use Webhooks in Glific?")),(0,r.kt)("p",null,"Once the webhook setup is complete. You can test it by executing the flow in Glific."),(0,r.kt)("p",null,"There may a case, the webhook is not set up correctly and there are some errors in Webhook calls."),(0,r.kt)("p",null,"Glific has ",(0,r.kt)("strong",{parentName:"p"},"Webhook Logs")," from where you can check the status of a Webhook call and see if it returned some errors."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access Flows page from left panel.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/C1b-r5C3W30wIsZAHibup6n8.png",alt:null})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"View webhook logs"),"  link at the bottom of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Flows")," page. ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/pjl_sVE1yeD9mSBkektVykCD.png",alt:null})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Webhook logs page will show the results of your webhook calls with the below details",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Time"),"  - Time of the webhook call."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"URL")," - The URL which is used in webhook call."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Status")," - Success / Error"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Status Code"),"- Status code returned from the webhook call. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Error")," - Error is an error returned. NULL in the case of success"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Method")," - GET / POST"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Request Header")," - Request header of the webhook call"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Request JSON")," - JSON of the webhook call"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Response JSON")," - JSON response received from the webhook call."),(0,r.kt)("li",{parentName:"ol"}))),(0,r.kt)("li",{parentName:"ol"},"You can click on the data received in the logs to copy or view the full response.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/kclO__LckDt7sCd2lbcvmI7I.png",alt:null})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"View")," will open up the response received in a pop-up window. You can check or copy the text to know more details of the response.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/epQjaKSrJPjbngYdsBw08Qeq.png",alt:null})))}u.isMDXComponent=!0}}]);