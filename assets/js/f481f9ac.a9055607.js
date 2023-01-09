"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1878],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var r=n.createContext({}),p=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=s,k=c["".concat(r,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[c]="string"==typeof e?e:s,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const i={},o=void 0,l={unversionedId:"Flows/Flow Actions/Send media files in messages",id:"Flows/Flow Actions/Send media files in messages",title:"Send media files in messages",description:"Glific users can upload the media files directly from their computer",source:"@site/docs/3. Flows/1. Flow Actions/03. Send media files in messages.md",sourceDirName:"3. Flows/1. Flow Actions",slug:"/Flows/Flow Actions/Send media files in messages",permalink:"/docs/docs/Flows/Flow Actions/Send media files in messages",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/3. Flows/1. Flow Actions/03. Send media files in messages.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contact response type",permalink:"/docs/docs/Flows/Flow Actions/Contact response type"},next:{title:"How to integrate GCS in Glific to store media files received in chat flow",permalink:"/docs/docs/Flows/Flow Actions/How to integrate GCS in Glific to store media files received in chat flow"}},r={},p=[{value:"Upload the media files directly from your computer.",id:"upload-the-media-files-directly-from-your-computer",level:2},{value:"Upload media file in GCS",id:"upload-media-file-in-gcs",level:2},{value:"Send media file with dynamic file names",id:"send-media-file-with-dynamic-file-names",level:2},{value:"Attach the media file in a message",id:"attach-the-media-file-in-a-message",level:2},{value:"Test the media message in the simulator",id:"test-the-media-message-in-the-simulator",level:2},{value:"Size of image",id:"size-of-image",level:2},{value:"File Formats works",id:"file-formats-works",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Glific users can ",(0,s.kt)("strong",{parentName:"p"},"upload the media files directly from their computer")),(0,s.kt)("p",null,"or"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Upload the file in GCS")," and use the URLas attachment in multiple flow."),(0,s.kt)("h2",{id:"upload-the-media-files-directly-from-your-computer"},"Upload the media files directly from your computer."),(0,s.kt)("p",null,"1 .  Open a flow from where you want to send the file as an attachment."),(0,s.kt)("p",null,"2 . Create a ",(0,s.kt)("inlineCode",{parentName:"p"},"Send message")," Note."),(0,s.kt)("p",null,"3 . Clink on ",(0,s.kt)("inlineCode",{parentName:"p"},"attachment")," tab."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/1W0A_1zQgkX6NDO2XaHQalSi.png",alt:null})),(0,s.kt)("p",null,"4 . Choose ",(0,s.kt)("strong",{parentName:"p"},"upload attachment")," option from dropdown"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/_QbMWoePO_MSbB-KDkZpBFR1.png",alt:null})),(0,s.kt)("h2",{id:""}),(0,s.kt)("p",null,"5 . Computer folders window will open up. Choose the file you want to upload."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Note :")),"  ",(0,s.kt)("em",{parentName:"p"},"WhatsApp business API")," ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"doesn","'","t support .gif files"))," ",(0,s.kt)("em",{parentName:"p"},"to be send as messages. Use .jpeg or .png to send as an attachment. For more details please refer")," ",(0,s.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/whatsapp/api/media/"},"https://developers.facebook.com/docs/whatsapp/api/media/")),(0,s.kt)("p",null,"6 . After successful upload, option to ",(0,s.kt)("strong",{parentName:"p"},"download")," and ",(0,s.kt)("strong",{parentName:"p"},"remove")," the attachment will be shown."),(0,s.kt)("p",null,"7 . Click on ",(0,s.kt)("inlineCode",{parentName:"p"},"ok")," button to save the attachment in the node."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/D9xW64sbh_b_9XHBtOY6atJc.png",alt:null})),(0,s.kt)("h2",{id:"-1"}),(0,s.kt)("p",null,"8 .  Test the flow to verify the attachment sent with the message."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/r-iBsKmWJM64-sAFigF82HHQ.png",alt:null})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"OR")),(0,s.kt)("h2",{id:"upload-media-file-in-gcs"},"Upload media file in GCS"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Upload the file you want to send to the contact. Refer to the  ",(0,s.kt)("a",{parentName:"li",href:"https://glific.slab.com/posts/how-to-integrate-gcs-in-glific-to-store-media-files-received-in-chat-flow-ol6876gq"},"integration with the GCS")," article for detailed steps.")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/yARgRSG8scO88_sCnCSdcSQn.png",alt:null})),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Copy the public URL of the image uploaded.")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/0hOfcAxH2uLn0deRJ9PNC-u3.png",alt:null})),(0,s.kt)("h2",{id:"send-media-file-with-dynamic-file-names"},"Send media file with dynamic file names"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note")," - ",(0,s.kt)("em",{parentName:"p"},"It will require a developers assistance to use this feature.  Please check with your tech team or consult Glific team, if you wish to use this feature.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Use case")," :- ",(0,s.kt)("inlineCode",{parentName:"p"},"Expression")," option is used  in attachment, when there is a requirement to send media files with dynamic names."),(0,s.kt)("p",null,"For an example: The requirement is to send the map on the basis of the city contact belongs to."),(0,s.kt)("p",null,"1 . Upload map files of all cities in the GCS."),(0,s.kt)("p",null,"2 . Use the expression to pass the contact","'","s city name in the attachment ."),(0,s.kt)("p",null,"Syntax- ",(0,s.kt)("inlineCode",{parentName:"p"},'<%= "@results.city_name" %>.')),(0,s.kt)("p",null,"3 . In a flow, city map will be send as per the contact","'","s city"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"Expression")," option from the dropdown, if media files name are needed to send with dynamic name."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/se7dkiVcHTdAZsdmcu45sXY-.png",alt:null})),(0,s.kt)("p",null,"The value of expression will be a variable and the syntax used in is ",(0,s.kt)("inlineCode",{parentName:"p"},'<%= "@results.fieldname" %>')),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/jOr2qty6LRGE3Rz-JWCjFmhd.png",alt:null})),(0,s.kt)("h2",{id:"attach-the-media-file-in-a-message"},"Attach the media file in a message"),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"While editing  a flow, select ",(0,s.kt)("inlineCode",{parentName:"p"},"Send a message")," node.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click on the ",(0,s.kt)("inlineCode",{parentName:"p"},"Attachments")," tab."))),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/mqc4uZfj2-jzUXGAQL4Qa1nB.png",alt:null})),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"Select the relevant media file option from the dropdown and paste the URL copied from GCS.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," ",(0,s.kt)("em",{parentName:"p"},"google drive URLs will")," ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"not"))," ",(0,s.kt)("em",{parentName:"p"},"work in this attachment")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/A8oBw6ZwwNwYFPDkq451HC1g.png",alt:null})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/5NRFZ3f5Ou2KXUQ7wsvxAeCF.png",alt:null})),(0,s.kt)("p",null,"6 . Click ",(0,s.kt)("inlineCode",{parentName:"p"},"ok")," to save."),(0,s.kt)("h2",{id:"test-the-media-message-in-the-simulator"},"Test the media message in the simulator"),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"Run the simulator with the  ",(0,s.kt)("inlineCode",{parentName:"li"},"preview"),"  button(bottom right)  on the flow editor screen.  Select the required response and you will see the media file in the simulator.")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/-YIB8aC8QRj0-YdTa9FBvGKy.png",alt:null})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:-")," Need to ",(0,s.kt)("strong",{parentName:"p"},"add some text in the send message node"),", otherwise the attachment will not be sent through flows"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/16541548/210726298-2a705406-f00a-42fd-9826-56b8e5cac4ab.png",alt:"image"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:-"),"  ",(0,s.kt)("em",{parentName:"p"},"Need to")," ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"add some text in the send message node")),(0,s.kt)("em",{parentName:"p"},", otherwise the attachment will not be sent through flows")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/Y5w8uIDc--Hx0W3ZG1SadP8M.png",alt:null})),(0,s.kt)("h2",{id:"size-of-image"},"Size of image"),(0,s.kt)("p",null,"Please use images of less than ",(0,s.kt)("strong",{parentName:"p"},"5 MB"),". It is the maximum size limit currently."),(0,s.kt)("p",null,"Maximum size limit"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"image file=",">"," ",(0,s.kt)("strong",{parentName:"li"},"5.120 MB")," "),(0,s.kt)("li",{parentName:"ol"},"Video file =",">"," ",(0,s.kt)("strong",{parentName:"li"},"16.384 MB"),"  "),(0,s.kt)("li",{parentName:"ol"},"Audio file =",">"," ",(0,s.kt)("strong",{parentName:"li"},"16.384 MB")),(0,s.kt)("li",{parentName:"ol"},"Document file  =",">"," ",(0,s.kt)("strong",{parentName:"li"},"102.400 MB")),(0,s.kt)("li",{parentName:"ol"},"Sticker file =",">"," ",(0,s.kt)("strong",{parentName:"li"},"0.09 MB"))),(0,s.kt)("h2",{id:"file-formats-works"},"File Formats works"),(0,s.kt)("p",null,"Please check the list of file formats that work in the below document. ",(0,s.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/whatsapp/on-premises/reference/media"},"https://developers.facebook.com/docs/whatsapp/on-premises/reference/media")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note: Stickers")," - .webp ( ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Note:- Animated stickers are not allowed by WhatsApp")),")."),(0,s.kt)("p",null,"Whats App supports stickers with a ",(0,s.kt)("strong",{parentName:"p"},"dimension of 512*512 px")," only. It needs to be exactly the same."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/c7J_k3FIsKmL9H6AIEpETHjQ.png",alt:null})))}c.isMDXComponent=!0}}]);