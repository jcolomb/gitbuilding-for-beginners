"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[240],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>b});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(i),g=r,b=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return i?n.createElement(b,a(a({ref:t},u),{},{components:i})):n.createElement(b,a({ref:t},u))}));function b(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},2895:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(7462),r=(i(7294),i(3905));const o={sidebar_position:1},a="Create a GitBuilding Project",l={unversionedId:"tutorial-basics-gitlab/create-a-project-windows",id:"tutorial-basics-gitlab/create-a-project-windows",title:"Create a GitBuilding Project",description:"Creating a project folder",source:"@site/docs/tutorial-basics-gitlab/create-a-project-windows.md",sourceDirName:"tutorial-basics-gitlab",slug:"/tutorial-basics-gitlab/create-a-project-windows",permalink:"/gitbuilding-for-beginners/es/docs/tutorial-basics-gitlab/create-a-project-windows",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"GitBuilding and GitLab Pages",permalink:"/gitbuilding-for-beginners/es/docs/category/gitbuilding-and-gitlab-pages"},next:{title:"Deploy a GitBuilding Website",permalink:"/gitbuilding-for-beginners/es/docs/tutorial-basics-gitlab/deploy-website-gitlab"}},s={},c=[{value:"Creating a project folder",id:"creating-a-project-folder",level:2},{value:"Creating a new documentation using GitBuilding",id:"creating-a-new-documentation-using-gitbuilding",level:2},{value:"Previewing the website template",id:"previewing-the-website-template",level:2},{value:"Continuous integration",id:"continuous-integration",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-gitbuilding-project"},"Create a GitBuilding Project"),(0,r.kt)("h2",{id:"creating-a-project-folder"},"Creating a project folder"),(0,r.kt)("p",null,"Create a folder for your project. It\u2019s recommended to create it in ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"D:\\")," You can do it using the Windows explorer or Window terminal ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir project_name")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Desktop pic",src:i(8370).Z,width:"779",height:"302"})),(0,r.kt)("h2",{id:"creating-a-new-documentation-using-gitbuilding"},"Creating a new documentation using GitBuilding"),(0,r.kt)("p",null,"Then, go to your project folder and run ",(0,r.kt)("inlineCode",{parentName:"p"},"gitbuilding new"),". Empty documentation files will be added to the directory."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Desktop pic",src:i(5904).Z,width:"777",height:"463"})),(0,r.kt)("h2",{id:"previewing-the-website-template"},"Previewing the website template"),(0,r.kt)("p",null," GitBuilding has a built-in live editor. Open your terminal, navigate to the folder with your documentation, and run ",(0,r.kt)("inlineCode",{parentName:"p"},"gitbuilding serve"),".  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Desktop pic",src:i(9431).Z,width:"779",height:"98"})),(0,r.kt)("p",null,"You can now open a browser and navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:6178/"),". This will show the documentation in a browsable form. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Desktop pic",src:i(4691).Z,width:"781",height:"398"})),(0,r.kt)("p",null,"You can also edit the documentation directly from your browser by selecting edit in the top-right corner:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Desktop pic",src:i(2883).Z,width:"780",height:"415"})),(0,r.kt)("h2",{id:"continuous-integration"},"Continuous integration"),(0,r.kt)("p",null," Once you have finished the first version of your documentation, it can be released on GitHub and keep working on it. To set up continuous integration run ",(0,r.kt)("inlineCode",{parentName:"p"},"gitbuilding generate ci")," and follow the instructions to choose the hosting service you wish to use, in this case, GitHub. The current CI scripts assume that your documentation is in the root directory of your Git repository."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"Desktop pic",src:i(9796).Z,width:"781",height:"152"})))}d.isMDXComponent=!0},8370:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_1-3f5dfdabae71f44029245ea87e27c763.jpg"},5904:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_2-56b1696d65d748692f72058208a751d1.jpg"},9431:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_3-0e09a1b7540ae56a82e39ad72317f89a.jpg"},4691:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_4-b04c7668ae601cd11d8db32c98cffe15.jpg"},2883:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_5-e01db7a43c2044e514a95e533ebcc4c5.jpg"},9796:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_6-e911a941cb8531b7436e7be848e3c729.jpg"}}]);