"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4510],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>g});var n=o(7294);function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){l(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,l=function(t,e){if(null==t)return{};var o,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(l[o]=t[o]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(l[o]=t[o])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(o),m=l,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return o?n.createElement(g,a(a({ref:e},c),{},{components:o})):n.createElement(g,a({ref:e},c))}));function g(t,e){var o=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=o.length,a=new Array(r);a[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:l,a[1]=i;for(var p=2;p<r;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},870:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=o(7462),l=(o(7294),o(3905));const r={},a=void 0,i={unversionedId:"Integrations/BigQuery Setup and link with Glific",id:"Integrations/BigQuery Setup and link with Glific",title:"BigQuery Setup and link with Glific",description:"Before you get started",source:"@site/docs/4. Integrations/02. BigQuery Setup and link with Glific.md",sourceDirName:"4. Integrations",slug:"/Integrations/BigQuery Setup and link with Glific",permalink:"/docs/docs/Integrations/BigQuery Setup and link with Glific",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Glific%20Documentation/docs/4. Integrations/02. BigQuery Setup and link with Glific.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting up GCS in Glific",permalink:"/docs/docs/Integrations/Setting up GCS in Glific"},next:{title:"Create an account in Google Cloud Storage (GCS).",permalink:"/docs/docs/Integrations/Create an account in Google Cloud Storage (GCS)."}},s={},p=[],c={toc:p};function u(t){let{components:e,...o}=t;return(0,l.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Before you get started")),(0,l.kt)("p",null,"Many NGOs are concerned about the cost of setting up BigQuery. They are worried about running up a bill. In reality BigQuery provides a very generous ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/pricing#free-tier"},"free tier")," that you will find will suffice for several months. You need not worry till your storage exceeds 10GB and queries 1TB / month !"),(0,l.kt)("p",null,"Google also sends notifications before billing you and provides you mechanisms like quotas to help control price. Learn more about these here :"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/billing/docs/how-to/reports"},"View your billing reports and cost trends"),"."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/estimate-costs"},"https://cloud.google.com/bigquery/docs/estimate-costs")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/custom-quotas"},"https://cloud.google.com/bigquery/docs/custom-quotas")),(0,l.kt)("p",null,"Now that we have that out of the way, let","'","s help you set up your account !"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Creating your BigQuery Account")),(0,l.kt)("p",null,"The following steps needs to follow for creating your BigQuery account."),(0,l.kt)("p",null,"1 . Go to ",(0,l.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/"},"https://console.cloud.google.com")," and sign in with your Gsuite account."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/D4ZkmcvrGXxRYHFJTj9kZXD2.png",alt:null})),(0,l.kt)("p",null,"2 . After signing in you will be redirected to Google Cloud console. Use link if not redirected: ",(0,l.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/getting-started"},"https://console.cloud.google.com/getting-started")),(0,l.kt)("p",null,"3 . Click on ",(0,l.kt)("inlineCode",{parentName:"p"},"TRY FOR FREE")," and fill in Billing details."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/SbDc_rN366hfklqXzgblbKV7.png",alt:null})),(0,l.kt)("p",null,"4 . Select ",(0,l.kt)("inlineCode",{parentName:"p"},"Country")," and check to agree to terms and conditions."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/wlZABVc6h9K6_kPm5Fw675HN.png",alt:null})),(0,l.kt)("p",null,"5 .  Fill in the rest of the details to verify."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/EqIcdwVOcIhUqzIZ4HhQ6qmS.png",alt:null})),(0,l.kt)("p",null,"6 . On the same page, fill in Primary contact details and payment method details and click on the ",(0,l.kt)("inlineCode",{parentName:"p"},"start my free trial")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/3BmdjzDbogcX2Lvy9ZSx8BDB.png",alt:null})),(0,l.kt)("p",null,"7 .  If it does not redirect you go to the google cloud console dashboard you can also use this link. ",(0,l.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/home"},"https://console.cloud.google.com/home")),(0,l.kt)("p",null,"8 .  Click ",(0,l.kt)("inlineCode",{parentName:"p"},"My Project")," in the blue bar to create a new project."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/SEgdSqhQ-WndwIRHTu-ZyocU.png",alt:null})),(0,l.kt)("p",null,"9 . Click on ",(0,l.kt)("inlineCode",{parentName:"p"},"New Project")," at top right corner."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/flJ-Vfv5E-62uTUrD_F42vwf.png",alt:null})),(0,l.kt)("p",null,"10 . Fill in your project details and click on the ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE")," button."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/RjB5hTzxWO5GRwmXZSeDy5gA.png",alt:null})),(0,l.kt)("p",null,"11 . Select ",(0,l.kt)("inlineCode",{parentName:"p"},"Bigquery")," from the side panel of Google Cloud Console Dashboard or use link to reach Bigquery Dashboard, ",(0,l.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery"},"https://console.cloud.google.com/bigquery")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/CKdB9etaSvrFd4t6BSyp3eJK.png",alt:null})),(0,l.kt)("p",null,"12 . Now Go to ",(0,l.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials/serviceaccountkey"},"https://console.cloud.google.com/apis/credentials/serviceaccountkey")," to generate project ",(0,l.kt)("strong",{parentName:"p"},"API keys")),(0,l.kt)("p",null,"13 . From the drop select your project. Next, select a ",(0,l.kt)("inlineCode",{parentName:"p"},"new service account")," and choose Role as ",(0,l.kt)("inlineCode",{parentName:"p"},"Project -> Owner"),". And Click on the ",(0,l.kt)("inlineCode",{parentName:"p"},"Create")," button below."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/u7jHD2OQmKZpPUpL4TbsC6vL.png",alt:null})),(0,l.kt)("p",null,"14 . Save the JSON file downloaded and copy its content."),(0,l.kt)("p",null,"15 . To integrate BigQuery in Glific. Click on the ",(0,l.kt)("inlineCode",{parentName:"p"},"settings")," button(bottom left corner) in Glific homepage."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/90jw9dRyu5DHXii5-qXk40ih.png",alt:null})),(0,l.kt)("p",null,"16 . Click on  ",(0,l.kt)("inlineCode",{parentName:"p"},"edit")," button in BigQuery tab."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/_OLyodV45on6ImG6BDCZsH6m.png",alt:null})),(0,l.kt)("p",null,"17 . Paste the copied JSON content inside ",(0,l.kt)("inlineCode",{parentName:"p"},"Goth Credentials")," input"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/jriMU1A-uTzBzFjadV3KLug_.png",alt:null})),(0,l.kt)("p",null,"18 . Click on is ",(0,l.kt)("inlineCode",{parentName:"p"},"active")," checkmark and click on the ",(0,l.kt)("inlineCode",{parentName:"p"},"SAVE")," button. Then send a message to the bot. BigQuery sync starts when a message is sent from or to the bot after adding credentials."),(0,l.kt)("p",null,"19 . Go to BigQuery console or use link ",(0,l.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery"},"https://console.cloud.google.com/bigquery")),(0,l.kt)("p",null,"20 . You can see a new Dataset with two tables is automatically created. ",(0,l.kt)("strong",{parentName:"p"},"Contacts")," and ",(0,l.kt)("strong",{parentName:"p"},"messages")," will be populating automatically."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/5u45Re7JWTd62Vgrir9lL3m0.png",alt:null})),(0,l.kt)("p",null,"You can refer to this small ",(0,l.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1uvDHhf5Gop2zRe1nDTy-836bLuTHK2OR/view?usp=sharing"},"video"),"  to know how to setup BigQuery for your organisation"))}u.isMDXComponent=!0}}]);