"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7291],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=o.createContext({}),c=function(e){var t=o.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(r.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,m=d["".concat(r,".").concat(p)]||d[p]||u[p]||s;return a?o.createElement(m,i(i({ref:t},h),{},{components:a})):o.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<s;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7362:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const s={},i="Why should you connect to the V5 Template Dashboard?",l={unversionedId:"Reporting and Analytics/Understanding Data Studio Reports",id:"Reporting and Analytics/Understanding Data Studio Reports",title:"Why should you connect to the V5 Template Dashboard?",description:"Deploying your chatbot program can generate tremendous value at scale for your users, the template dashboard enables the crucial other half of your chatbot program.",source:"@site/docs/5. Reporting and Analytics/05. Understanding Data Studio Reports.md",sourceDirName:"5. Reporting and Analytics",slug:"/Reporting and Analytics/Understanding Data Studio Reports",permalink:"/docs/docs/Reporting and Analytics/Understanding Data Studio Reports",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/5. Reporting and Analytics/05. Understanding Data Studio Reports.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Populate data in Field Views- User info report",permalink:"/docs/docs/Reporting and Analytics/Populate data in Field Views- User info report"},next:{title:"Connection to V5 Data Studio Report",permalink:"/docs/docs/Reporting and Analytics/Connection to V5 Data Studio Report"}},r={},c=[{value:"Getting started",id:"getting-started",level:2},{value:"1. Overview",id:"1-overview",level:2},{value:"Stakeholder Engagement Overview",id:"stakeholder-engagement-overview",level:3},{value:"Messages and Conversations Overview",id:"messages-and-conversations-overview",level:3},{value:"Contact Opt in/Opt out Overview",id:"contact-opt-inopt-out-overview",level:3},{value:"2. Flow Activity",id:"2-flow-activity",level:2},{value:"Flow Activity Overview",id:"flow-activity-overview",level:3},{value:"Flows Completed",id:"flows-completed",level:3},{value:"Incomplete and Killed Flows",id:"incomplete-and-killed-flows",level:3},{value:"Contacts in the Middle of Flows",id:"contacts-in-the-middle-of-flows",level:3},{value:"3. Contact Activity by Flow",id:"3-contact-activity-by-flow",level:2},{value:"Total Contacts and Messages by Flow name/Flow Label",id:"total-contacts-and-messages-by-flow-nameflow-label",level:3},{value:"Contact Details by Flow Label",id:"contact-details-by-flow-label",level:3},{value:"Contact Activity",id:"contact-activity",level:3},{value:"4. Result Details",id:"4-result-details",level:2},{value:"5. Contact Details",id:"5-contact-details",level:2},{value:"6. Conversation Costs",id:"6-conversation-costs",level:2},{value:"7. Collection Messages",id:"7-collection-messages",level:2},{value:"8. Collection Contacts",id:"8-collection-contacts",level:2},{value:"9. User Retention",id:"9-user-retention",level:2},{value:"Notes",id:"notes",level:2},{value:"Checking which dataset is being used",id:"checking-which-dataset-is-being-used",level:3},{value:"Downloading data",id:"downloading-data",level:3}],h={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"why-should-you-connect-to-the-v5-template-dashboard"},"Why should you connect to the V5 Template Dashboard?"),(0,n.kt)("p",null,"Deploying your chatbot program can generate tremendous value at scale for your users, ",(0,n.kt)("strong",{parentName:"p"},"the template dashboard enables the crucial other half of your chatbot program.")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It enables your organisation to ",(0,n.kt)("strong",{parentName:"li"},"monitor and evaluate the health of your chatbot program"),", so that you may iterate and improve the experience for your users. "),(0,n.kt)("li",{parentName:"ul"},"The dashboard ",(0,n.kt)("strong",{parentName:"li"},"also serves as a repository of user information that your field/remote operations teams can easily download")," to engage more deeply with your stakeholders.")),(0,n.kt)("p",null,"The template dashboard aims to make as much common chatbot program information accessible to your organisation as possible. You may use what is relevant to your program. Beyond this, you might want to tweak this dashboard to further suit your needs, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/looker-studio/?hl=en#topic=6291037"},"google support")," to learn how to do this."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"We deeply appreciate feedback from the community as it helps us improve. ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/pXHkJujY8A"},"Join us on Discord")," and let us know if you find gaps in this documentation or the dashboard."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"If you have ",(0,n.kt)("a",{parentName:"p",href:"https://glific.github.io/docs/docs/Integrations/Setting%20up%20GCS%20in%20Glific"},"setup GCS"),", ",(0,n.kt)("a",{parentName:"p",href:"https://glific.github.io/docs/docs/Integrations/BigQuery%20Setup%20and%20link%20with%20Glific"},"setup BigQuery")," and  ",(0,n.kt)("a",{parentName:"p",href:"https://glific.github.io/docs/docs/Reporting%20and%20Analytics/Connection%20to%20V5%20Data%20Studio%20Report"},"connected to the V5 template dashboard")," then you could refer to your connected dashboard and read through this article."),(0,n.kt)("p",null,"If not then refer to ",(0,n.kt)("a",{parentName:"p",href:"https://lookerstudio.google.com/u/0/reporting/e790512e-01d4-4f55-a514-dc5dbf4b6c51/page/p_eq3uecja2c"},"this dashboard")," while reading."),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"understanding-the-pages-in-the-dashboard"},"Understanding the pages in the Dashboard"),(0,n.kt)("h2",{id:"1-overview"},"1. Overview"),(0,n.kt)("p",null,"This page has been created to give your organisation a sense of the overall health of your chatbot progream. It is divided into 3 broad sections, described below.\nThe page has one date range filter at the top left which is set to the last 30 days by default."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"stakeholder-engagement-overview"},"Stakeholder Engagement Overview"),(0,n.kt)("hr",null),(0,n.kt)("img",{width:"1470",alt:"Image 1",src:"https://user-images.githubusercontent.com/119285990/221197664-d1562527-f65f-4c75-bf4e-2412c8868abb.png"}),(0,n.kt)("p",null,"This section of the overview page tells you about the number of people/phone numbers that have engaged (sent or recieved messages) with your chatbot."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Contacts reached since launch:")," The total number of phone numbers that have ever engaged with your chatbot till today. This number will not change when you alter the date range filter.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Active Contacts (recieving messages):")," The total number of phone numbers that have recieved a message in the selected time period.\nIt is important to note that all contacts who have recieved a message might not have sent a message back to you, but all those who have sent a message to your bot would definitely have recieved a message back.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Contacts sending messages:")," The total number of phone numbers that have sent a message to your chatbot in the selected time period. This is a subset of your Active Contacts value.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Sending/Active:")," The percentage of phone numbers who are sending messaged to your chatbot as compared to the total number of phone numbers that have received messages. Based on the nature of your program you could decide what percentage indicates good engagement. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Active contacts and messages exchanged graph:")," This is a very useful graph that helps you analyse the trends of contacts engaged and messages sent over time. "),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("strong",{parentName:"p"},"Note:")," ",(0,n.kt)("em",{parentName:"p"},"If you hover your cursor over the top right corner of this graph and click on the down arrow, you can learn about engagement trends over months, days of the week and hours of the day. Give it a try!")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"messages-and-conversations-overview"},"Messages and Conversations Overview"),(0,n.kt)("hr",null),(0,n.kt)("img",{width:"1469",alt:"Image 2",src:"https://user-images.githubusercontent.com/119285990/221197690-1a7de6cb-8f4b-4cec-878c-192e53ae835e.png"}),(0,n.kt)("p",null,"This section of the overview page tells you about the number and types of messages and conversations you have exchanged. Messages and conversations impact costs and can be seen in further detail the ",(0,n.kt)("em",{parentName:"p"},"conversation costs")," page of your report."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Messages exchanged:")," The total number of messages that have been sent by the bot (outgoing) or recieved by the bot (incoming) in the selected time period."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Outgoing and Incoming messages pie chart:")," The distribution of total messages exchanged."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Outgoing and Incoming messages graph:")," The daywise trend of messages exchanged over time."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conversations started:")," The total number of unique conversations started during the selected time period. A single conversation is defined a 24 hour window from the first message sent by your bot."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conversation type pie chart:")," The distribution of conversation types. Different conversation types are charged differently. Refer ",(0,n.kt)("a",{parentName:"li",href:"https://support.gupshup.io/hc/es-co/articles/4414423534617"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conversations Graph:")," The daywise trend of total number of conversations over time for the selected time period.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"contact-opt-inopt-out-overview"},"Contact Opt in/Opt out Overview"),(0,n.kt)("hr",null),(0,n.kt)("img",{width:"1117",alt:"Image 3",src:"https://user-images.githubusercontent.com/119285990/221197702-aa97ac9f-4bb5-47e4-993a-6e1ce1500e4d.png"}),(0,n.kt)("p",null,"This section is especially useful during the onboarding phase/s of your program. An important first step in using the chatbot is getting your users consent or to 'opt in' to receive messages from you. This is required by WA/Facebook to ensure that people do not recieve spam messages."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Opt in since launch:")," The total contacts who have opted in since your chatbot started"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"New optins:")," The users who have opted in during the selected time period."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optin Graph:")," The day wise trend of optins for the selected time period."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Active opt in contacts:")," The total optin contacts recieveing or sending messages in the selected time period.")),(0,n.kt)("p",null,"Similarly for the the 3 corresponding opt out visuals."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"2-flow-activity"},"2. Flow Activity"),(0,n.kt)("p",null,"This page has been created to help you monitor your flows. It is divided into 4 broad sections, described below. This page has a date range filter and a flow name filter which allows you to see data for a specific flow during a specific time period."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"flow-activity-overview"},"Flow Activity Overview"),(0,n.kt)("hr",null),(0,n.kt)("img",{width:"1467",alt:"Image 4",src:"https://user-images.githubusercontent.com/119285990/221197708-113ff798-6a2e-4b3c-bb06-33374e0e0ccd.png"}),(0,n.kt)("p",null,"This section tells you how many people are going through the flows and how often. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contacts starting flows:")," The number of contacts starting selected flows in the selected time period."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total flows traversed:")," The total number of times the selected flows have been entered in the selected time period."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Unique flows traversed:")," A count of the unique flows entered in the selected time period."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contacts and total flows traversed graph:")," The Daywise trend of contact and flow activity over time.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"flows-completed"},"Flows Completed"),(0,n.kt)("hr",null),(0,n.kt)("img",{width:"1470",alt:"Image 5",src:"https://user-images.githubusercontent.com/119285990/221197716-4ab49144-e85b-40ba-bfea-eb6d5fb2dede.png"}),(0,n.kt)("p",null,"This section will help you understand how often and how your flows are being completed."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total flows completed:")," A count of the unique flows selected."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow completions table:")," A list of the selected completed flows and the number of times it has been completed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow completed node table:")," A list of the completed flows, the node at which the flow was completed, and the number of times that node was reached."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow completion graph:")," The daywise trend of flows completed during the selected time period.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"incomplete-and-killed-flows"},"Incomplete and Killed Flows"),(0,n.kt)("hr",null),(0,n.kt)("img",{width:"1469",alt:"Image 6",src:"https://user-images.githubusercontent.com/119285990/221197724-09c884ce-30ab-4ac6-a06e-ffa6f78306a3.png"}),(0,n.kt)("p",null,"This section helps you investgate which flows have been killed, at which node, and for which contact. Flows can be killed if contacts do not respond for 7 days, if a webhook fails, if they fall into an infinite loop, or if you manually terminate the flow.\nUsing this you can identify where and how to improve your flows."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total incomplete and killed flows:")," The number in the box indicated the count of unique flows that have been killed for some contacts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow name table:")," The list of killed flows out of the flows that you have selected and the number of contacts for whom the flow is killed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Node and result table:")," The list of killed flows, the node, associated result name and number of contacts for whom the flow was killed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact list table:")," The list of phone numbers and the point at which the flow was killed. Using this you can investigate your flow and their chat on Glific to understand the problem further.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"contacts-in-the-middle-of-flows"},"Contacts in the Middle of Flows"),(0,n.kt)("hr",null),(0,n.kt)("img",{width:"1469",alt:"Image 6",src:"https://user-images.githubusercontent.com/119285990/221197724-09c884ce-30ab-4ac6-a06e-ffa6f78306a3.png"}),(0,n.kt)("p",null,"This section is structured the same was as the previous one. It will tell you about flows which contacts have not completed, which node they are at, and who the contacts are."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"3-contact-activity-by-flow"},"3. Contact Activity by Flow"),(0,n.kt)("p",null,"This page has been created to give you information about your contacts. It is divided into 3 broad sections, described below. This page has a date range filter, a flow name filter, and a flow label filter which allows you to see data for a specific flow/flow label during a specific time period. ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/embed/Y2KWDO7SfnI?showinfo=0"},"Using labels")," to track engagement is an important part of flow design."),(0,n.kt)("p",null,"This is an important page to gather user information and data points for activity in specific flows."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"total-contacts-and-messages-by-flow-nameflow-label"},"Total Contacts and Messages by Flow name/Flow Label"),(0,n.kt)("hr",null),(0,n.kt)("img",{width:"1469",alt:"Image 8",src:"https://user-images.githubusercontent.com/119285990/221197732-5e0c91c9-c88a-48e6-840e-4c6cf4e5e0e3.png"}),(0,n.kt)("p",null,"This section is the same as the the ",(0,n.kt)("strong",{parentName:"p"},"stakeholder engagement overview section")," in the ",(0,n.kt)("strong",{parentName:"p"},"overview page"),", with the key difference being that you can filter and check engagement for specific flows."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"contact-details-by-flow-label"},"Contact Details by Flow Label"),(0,n.kt)("hr",null),(0,n.kt)("img",{width:"1470",alt:"Image 9",src:"https://user-images.githubusercontent.com/119285990/221197737-a440e78c-c693-465f-bc88-641d210479f0.png"}),(0,n.kt)("p",null,"This section allows you to see the contact activity for each of the listed flow labels for a specific flow or of flow labels selected, depending on how you use the filters."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow label & contacts table:")," Displays all the associated flow labels as per your filter and the count of contacts tagged with that label."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow label and messages table:")," Displays the flow label, contact, and associated message as per your selected filters. ")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"contact-activity"},"Contact Activity"),(0,n.kt)("hr",null),(0,n.kt)("img",{width:"1470",alt:"Image 10",src:"https://user-images.githubusercontent.com/119285990/221197743-aaa0d574-ccb7-4d82-8374-566ee26b2e3b.png"}),(0,n.kt)("p",null,"This section comprises of 1 table which will give you a list of every contact for selected flows or flow labels and show you how many messages the contact has sent during the selected time period. It is arranged for you to see your most active contact at the top."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"4-result-details"},"4. Result Details"),(0,n.kt)("p",null,"This page gives you all the information stored in your ",(0,n.kt)("a",{parentName:"p",href:"https://glific.github.io/docs/docs/Flows/Flow%20Variables/Flow%20variables%20vs%20Contact%20variables"},"flow variables")," which we create and store with '@results'.\nThe page has two sections with one table in each.You can filter this page by date, flow name, and result name."),(0,n.kt)("img",{width:"1470",alt:"Image 11",src:"https://user-images.githubusercontent.com/119285990/221197750-75f0d670-e0a0-4e89-bd59-06ce3a7cbef4.png"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total users by result name:")," Describes the number of times a value has been stored in a result/flow variable for a specific flow."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User names and responses by result name:")," Gives you the list of contacts, when they passed through the node and what value was saved in the result/flow variable.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"5-contact-details"},"5. Contact Details"),(0,n.kt)("p",null,"This page is where you will find all the contact details that you have ",(0,n.kt)("a",{parentName:"p",href:"https://glific.github.io/docs/docs/Flows/Flow%20Variables/Custom%20variables%20and%20update%20contact"},"stored in contact fields"),".\nThis page has 5 visuals, described below. This page allows you to filter by contact name, phone number, contact field, and date."),(0,n.kt)("img",{width:"1468",alt:"Image 12",src:"https://user-images.githubusercontent.com/119285990/221197756-0989c23e-9bbb-45b7-bcf9-2cace64bd57d.png"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Active Contacts(recieving messages)"),": A count of all the contacts stored who have recieved messages in the selected time period."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total users by language preference:")," Shows you the distribution of contacts for those contacts who have their language preference updated on your system."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact List:")," This table shows you all you contacts, the contact field values that have been created for them and the associated values stored in these contact fields."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Opt out Contacts")," This table shows you the list of all the contacts who have opted out from using your chatbot(i.e. you can no longer send them messages) and their related details.")),(0,n.kt)("img",{width:"1470",alt:"Image 13",src:"https://user-images.githubusercontent.com/119285990/221197761-292c4586-b008-4ab9-af1e-6baee381ea34.png"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"6-conversation-costs"},"6. Conversation Costs"),(0,n.kt)("p",null,"You will recieve a monthly invoice from Gupshup based on the messages you exchange and the conversations started. This page provides you with a snapshot of your chatbots activity and associated charges for the selected time period. It is an expansion of the second section of the overview page."),(0,n.kt)("img",{width:"1469",alt:"Image 14",src:"https://user-images.githubusercontent.com/119285990/221197765-9abd0834-e21c-462f-9533-7b412716adca.png"}),(0,n.kt)("p",null,"To learn more about charges for the types of conversations and messages mentioned in this sheet refer ",(0,n.kt)("a",{parentName:"p",href:"https://support.gupshup.io/hc/es-co/articles/4414423534617"},"here"),". "),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"7-collection-messages"},"7. Collection Messages"),(0,n.kt)("p",null,"This page allows you to search for your contacts by the collections that they are part of and then check how many and which messages they have exchanged.\nYou can filter this page by date, phone number, and collection name. This page has 2 visuals, described below."),(0,n.kt)("img",{width:"1470",alt:"Image 15",src:"https://user-images.githubusercontent.com/119285990/221197768-0b4a4f8f-ccc5-461d-aa41-62dfea6babdc.png"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Messages exchanged per collection:")," A list all the contacts, the collections they belong to and the total messages they have exchanged."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Messages exchanged:")," A list of all the messages exchanged by each contact in the selected collections.")),(0,n.kt)("img",{width:"1470",alt:"Image 16",src:"https://user-images.githubusercontent.com/119285990/221197772-280f2575-2b70-4238-bae1-b617727d4cc6.png"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"8-collection-contacts"},"8. Collection Contacts"),(0,n.kt)("p",null,"This page allows you to search for your contacts by the collections that they are part of, check how many there are and extract their details.\nYou can filter this page by date, phone number, and collection name. This page has 3 visuals, described below."),(0,n.kt)("img",{width:"1470",alt:"Image 17",src:"https://user-images.githubusercontent.com/119285990/221197775-cc03cc10-4f82-4ed3-bb71-5376bea6be7b.png"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Number of contacts:")," The total number of active contacts for the selected time period in your selected collections."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contacts by collection table:")," This table gives you a count of the active contacts for the given time period, per collection selected."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contacts details by collection:")," This table will give you all the contact details by contact field as per the selected filters.")),(0,n.kt)("img",{width:"1470",alt:"Image 18",src:"https://user-images.githubusercontent.com/119285990/221197778-58bb04df-c4b2-41e8-a5a7-acf30ff0eb70.png"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"9-user-retention"},"9. User Retention"),(0,n.kt)("p",null,"This page provides you with a view of monthly user retention. it has a date filter set to always show you the past one years data. It contains a single visual which can be understood as follows:"),(0,n.kt)("p",null,"Refer to the row for Nov 2022. In this month, 22 contacts engaged with our bot for the first time (the column labelled '0'). In the following month, 14 of these contacts returned to use the bot (column labelled as '1'), in the following month only one of these users returned. And in the month after that, 3 users from the cohort who first engaged with us in Nov 22 had returned to use the bot."),(0,n.kt)("img",{width:"1470",alt:"image 19",src:"https://user-images.githubusercontent.com/119285990/221197785-538977ce-0403-4cef-8627-8fe1d2974611.png"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"checking-which-dataset-is-being-used"},"Checking which dataset is being used"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Understanding which dataset and fields are being used will help you understand your dashboard better."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Hover your cursor over the top of the dashboard and click edit at the top right. You will enter the editing mode."),(0,n.kt)("li",{parentName:"ol"},"Click on any visual and refer to the first column on your right. You can see which data source is being used under the heading 'data source'.")),(0,n.kt)("img",{width:"1470",alt:"Image 20",src:"https://user-images.githubusercontent.com/119285990/221197788-028246fd-27d4-4489-8a4b-dd7a7326c7a0.png"}),(0,n.kt)("p",null,"Note: If you have not connected to our V5 template dashbord then first make a copy (option next to edit) and then follow the above steps. "),(0,n.kt)("p",null,"The visuals will not populate until you connect them to your chatbot data sources, but you should still be able to see which dataset its intended to pick up from."),(0,n.kt)("img",{width:"1470",alt:"Image 21",src:"https://user-images.githubusercontent.com/119285990/221197789-601c0bcd-5e24-4f82-b4b9-3c47620ff690.png"}),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"downloading-data"},"Downloading data"),(0,n.kt)("hr",null),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In view mode, hover your cursor over any visual and click the 3 dots at the top right of the vidual.")),(0,n.kt)("img",{width:"1097",alt:"Image 22",src:"https://user-images.githubusercontent.com/119285990/221197792-420fcacf-de89-4abc-87de-3c26af05ddcf.png"}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Select export and then pick whichever format you want the data in. ")),(0,n.kt)("img",{width:"1101",alt:"Image 23",src:"https://user-images.githubusercontent.com/119285990/221197795-16989648-1f41-48b9-9940-a88ab4ccbda9.png"}),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);