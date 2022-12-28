"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8152],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>k});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(o),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return o?n.createElement(k,i(i({ref:t},c),{},{components:o})):n.createElement(k,i({ref:t},c))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,i=new Array(l);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,i[1]=r;for(var p=2;p<l;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1824:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const l={},i=void 0,r={unversionedId:"Integrations/How to upload files on GCS",id:"Integrations/How to upload files on GCS",title:"How to upload files on GCS",description:"To send files (images, audio, video, pdfs) to contacts, you would need to upload them to GCS and then attach link in the message.",source:"@site/docs/4. Integrations/04. How to upload files on GCS.md",sourceDirName:"4. Integrations",slug:"/Integrations/How to upload files on GCS",permalink:"/docs/Integrations/How to upload files on GCS",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Glific%20Documentation/docs/4. Integrations/04. How to upload files on GCS.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create an account in Google Cloud Storage (GCS).",permalink:"/docs/Integrations/Create an account in Google Cloud Storage (GCS)."},next:{title:"How to export data in excel from Google BigQuery",permalink:"/docs/Integrations/How to export data in excel from Google BigQuery"}},s={},p=[{value:"Navigate to the bucket in GCS",id:"navigate-to-the-bucket-in-gcs",level:2},{value:"Making bucket Public",id:"making-bucket-public",level:2},{value:"Upload media files in the GCS bucket",id:"upload-media-files-in-the-gcs-bucket",level:2},{value:"Use media files in a flow",id:"use-media-files-in-a-flow",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To send files (images, audio, video, pdfs) to contacts, you would need to upload them to GCS and then attach link in the message."),(0,a.kt)("h2",{id:"navigate-to-the-bucket-in-gcs"},"Navigate to the bucket in GCS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Access Google console ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com"},"https://console.cloud.google.com")),(0,a.kt)("li",{parentName:"ol"}),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Storage")," from the left Navigation., or search for it.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/3nnantGst-CpcsiDU5q3N3D7.png",alt:null})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Browser"),"  option under storage.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/KijhngM-uYKbv9WmMfskHDcZ.png",alt:null})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Bucket")," you have already created in GCS.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/-pP1BW70SksF0QbGmHI5qMx8.png",alt:null})),(0,a.kt)("h2",{id:""}),(0,a.kt)("h2",{id:"making-bucket-public"},"Making bucket Public"),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Open the bucket and click on Permissions.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/0lCITHuxoDCy9ix3b1udsgFp.png",alt:null})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"ADD")," button next to Permissions.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/J31nmletcB7Q9_S17MGOalzo.png",alt:null})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Under the new members tab choose ",(0,a.kt)("inlineCode",{parentName:"p"},"allUsers")," **** and choose a role as ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage Admin"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," open and a pop-up will come for confirmation of making the bucket publically accessible."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/dl4ybFl4mOmFe5V8xnWcD-AA.png",alt:null})),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"ALLOW PUBLIC ACCESS"))),(0,a.kt)("h2",{id:"upload-media-files-in-the-gcs-bucket"},"Upload media files in the GCS bucket"),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"From the options at the top, click on the  ",(0,a.kt)("inlineCode",{parentName:"li"},"Upload files"),"  button.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/50O1Izf2zls4JuXH3L57pWxG.png",alt:null})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"It will open your system browser window. You can select one or multiple files and click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Open")," button to upload the file.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/NlHu_5_MwOh1HtcteHV67Dyn.png",alt:null})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Verify the file uploaded in the bucket. The file can be seen inside the bucket.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/f2TZJWOxIQLsKKpohga1yC37.png",alt:null})),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Click on the file name to open the details of the file and copy the URL of the file.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/qhvtuUEws5y5E0Z4bbHtArVv.png",alt:null})),(0,a.kt)("h2",{id:"use-media-files-in-a-flow"},"Use media files in a flow"),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Follow the steps to send the media files to contacts through a flow.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://glific.slab.com/posts/x2vuccwj"},"Send media files in messages")))}u.isMDXComponent=!0}}]);