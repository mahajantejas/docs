"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(o),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return o?n.createElement(m,s(s({ref:t},u),{},{components:o})):n.createElement(m,s({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},9182:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const i={},s=void 0,a={unversionedId:"Flows/Flow Actions/How to use Split By Random Chance for AB tests in Flow editor",id:"Flows/Flow Actions/How to use Split By Random Chance for AB tests in Flow editor",title:"How to use Split By Random Chance for AB tests in Flow editor",description:"Reading time: 10 minutes",source:"@site/docs/3. Flows/1. Flow Actions/14 . How to use Split By Random Chance for AB tests in Flow editor.md",sourceDirName:"3. Flows/1. Flow Actions",slug:"/Flows/Flow Actions/How to use Split By Random Chance for AB tests in Flow editor",permalink:"/docs/docs/Flows/Flow Actions/How to use Split By Random Chance for AB tests in Flow editor",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/3. Flows/1. Flow Actions/14 . How to use Split By Random Chance for AB tests in Flow editor.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Background Flows",permalink:"/docs/docs/Flows/Flow Actions/Background Flows"},next:{title:"How to use the split by Contact variable question type",permalink:"/docs/docs/Flows/Flow Actions/How to use the split by Contact variable question type"}},l={},c=[{value:"Steps for usage",id:"steps-for-usage",level:2},{value:"Sample Flow",id:"sample-flow",level:2},{value:"Execution Results",id:"execution-results",level:2},{value:"Important Notes",id:"important-notes",level:2}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Reading time: 10 minutes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Split By Random Chance")," is used in flows when we want to test different user journeys/experiences against each other. This could be a registration process, a video, an informative image, a quiz, etc."),(0,r.kt)("p",null,'In the below example, we are testing the effectiveness of different "Introduction to Glific" videos against each other and checking which one leads to the most positive responses from users. '),(0,r.kt)("p",null,"Lets say there are 3 videos we want to test against each other:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create the flow with the Split by random chance node and add a separate video in each bucket/branch, label each video sent."),(0,r.kt)("li",{parentName:"ol"},"Ask the user if they want to learn more after sending them the video."),(0,r.kt)("li",{parentName:"ol"},"Add labels for the positive responses. (and for negative responses, if relevant for your analysis)"),(0,r.kt)("li",{parentName:"ol"},"Analyse the data to see which video is performing best and make the changes to your default flow.")),(0,r.kt)("p",null,"So here, at the end of the test, we will measure how many users got each video, and then how many users wanted to know more after watching a given video. The video with the highest success rate (#Wanted to know more/#Recieved video) is the video we will choose to use in the future. "),(0,r.kt)("p",null,"We may additionally choose to interview some of our sampled users, to learn whether they watched the video or not and their reasons for giving a positive response before making our final decision."),(0,r.kt)("h2",{id:"steps-for-usage"},"Steps for usage"),(0,r.kt)("p",null,"i) Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Split by Random Chance")," question type."),(0,r.kt)("img",{width:"655",alt:"Img1_AB",src:"https://user-images.githubusercontent.com/119285990/222385641-2f0ad29d-e97e-48fd-bd63-5c4fda8723e9.png"}),(0,r.kt)("p",null,"ii) Select the collections you want to split on"),(0,r.kt)("img",{width:"656",alt:"Img2_AB",src:"https://user-images.githubusercontent.com/119285990/222385645-f05496d0-f770-43dc-9627-5f5e3fb43383.png"}),(0,r.kt)("p",null,"iii) The node will look like this."),(0,r.kt)("img",{width:"404",alt:"Img3_AB",src:"https://user-images.githubusercontent.com/119285990/222385654-16b3bd54-f9e8-4433-9b48-92148f08a959.png"}),(0,r.kt)("h2",{id:"sample-flow"},"Sample Flow"),(0,r.kt)("img",{width:"574",alt:"Img4_AB",src:"https://user-images.githubusercontent.com/119285990/222385662-265231e2-0ae0-413c-90e6-6b3a68cedf0c.png"}),(0,r.kt)("h2",{id:"execution-results"},"Execution Results"),(0,r.kt)("p",null,"Different users will randomly be sent into different flow branches and see different videos in this flow. Each image represents a different user journey as per the shared example."),(0,r.kt)("img",{width:"262",alt:"Img5 1_AB",src:"https://user-images.githubusercontent.com/119285990/222385635-dd58ce12-4977-4b0d-818c-5a5ccbd82a6a.png"}),(0,r.kt)("img",{width:"261",alt:"Img5 2_AB",src:"https://user-images.githubusercontent.com/119285990/222385612-d04055a6-897f-48ab-8742-7881174b5dda.png"}),(0,r.kt)("img",{width:"263",alt:"Img5 3_AB",src:"https://user-images.githubusercontent.com/119285990/222385664-09ac38fa-46c5-4b84-a8db-f3d70e5a2410.png"}),(0,r.kt)("h2",{id:"important-notes"},"Important Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ensure that you add users who have enter/ pass through the split randomly node to a collection and use the ",(0,r.kt)("a",{parentName:"li",href:"https://glific.github.io/docs/docs/Flows/Flow%20Actions/How%20to%20use%20Split%20By%20Collection%20in%20Flow%20editor"},"split by collection node")," at the beginning of your flow to ensure that these users cannot re-enter the test as this will skew you data results. Refer to the sample flow image to see an illustraation of this."),(0,r.kt)("li",{parentName:"ol"},"Read more about how to conduct A/B tests on ",(0,r.kt)("a",{parentName:"li",href:"https://glific.org/a-b-testing-your-flows-using-the-split-randomly-node/"},"this blog")," and read about how Antarang has used this functionality to improve their registration process ",(0,r.kt)("a",{parentName:"li",href:"https://glific.org/antarang-foundation-ab-tests-their-user-registration-process-using-the-split-randomly-node/"},"here")),(0,r.kt)("li",{parentName:"ol"},"Was this documentation helpful? Let us know how we can improve on our ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/pXHkJujY8A"},"discord channel"))))}d.isMDXComponent=!0}}]);