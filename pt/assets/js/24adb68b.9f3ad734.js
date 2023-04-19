"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[244],{3905:(t,e,i)=>{i.d(e,{Zo:()=>u,kt:()=>c});var n=i(7294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},b="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),b=p(i),d=a,c=b["".concat(l,".").concat(d)]||b[d]||g[d]||o;return i?n.createElement(c,r(r({ref:e},u),{},{components:i})):n.createElement(c,r({ref:e},u))}));function c(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=i.length,r=new Array(o);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[b]="string"==typeof t?t:a,r[1]=s;for(var p=2;p<o;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},9135:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=i(7462),a=(i(7294),i(3905));const o={sidebar_position:2},r="Deploy a GitBuilding Website",s={unversionedId:"tutorial-basics-github/deploy-website-github",id:"tutorial-basics-github/deploy-website-github",title:"Deploy a GitBuilding Website",description:"Creating a new website repository on GitHub",source:"@site/docs/tutorial-basics-github/deploy-website-github.md",sourceDirName:"tutorial-basics-github",slug:"/tutorial-basics-github/deploy-website-github",permalink:"/gitbuilding-for-beginners/pt/docs/tutorial-basics-github/deploy-website-github",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a GitBuilding Project",permalink:"/gitbuilding-for-beginners/pt/docs/tutorial-basics-github/create-a-project-windows"},next:{title:"GitBuilding - Extras",permalink:"/gitbuilding-for-beginners/pt/docs/category/gitbuilding---extras"}},l={},p=[{value:"Creating a new website repository on GitHub",id:"creating-a-new-website-repository-on-github",level:2},{value:"Implementing and deploying a GitBuilding website on GitHub",id:"implementing-and-deploying-a-gitbuilding-website-on-github",level:2},{value:"Customizing GitBuilding website",id:"customizing-gitbuilding-website",level:2}],u={toc:p},b="wrapper";function g(t){let{components:e,...o}=t;return(0,a.kt)(b,(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-a-gitbuilding-website"},"Deploy a GitBuilding Website"),(0,a.kt)("h2",{id:"creating-a-new-website-repository-on-github"},"Creating a new website repository on GitHub"),(0,a.kt)("p",null,"Go to your GitHub account and create a new repository where you will store the documentation files for your GitBuilding website."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(8072).Z,width:"600",height:"655"})),(0,a.kt)("p",null,"Then, go to ",(0,a.kt)("strong",{parentName:"p"},"Settings")," to configure the repository and it can be identified as repo of a website. Select ",(0,a.kt)("strong",{parentName:"p"},"Pages")," and let GitHub Pages know which branch will be deployed as the website, in this case, the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(6594).Z,width:"838",height:"495"})),(0,a.kt)("p",null,"After saving this configuration, GitHub will automatically read the README file and deploy the website. You can open a browser and navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://username.github.io/name-repository/"),". Sometimes the deployment can take a few minutes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(9750).Z,width:"838",height:"273"})),(0,a.kt)("h2",{id:"implementing-and-deploying-a-gitbuilding-website-on-github"},"Implementing and deploying a GitBuilding website on GitHub"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("strong",{parentName:"p"},"Settings")," to update GitHub permissions, select ",(0,a.kt)("strong",{parentName:"p"},"Actions")," > ",(0,a.kt)("strong",{parentName:"p"},"General")," and allow ",(0,a.kt)("strong",{parentName:"p"},"Read and write permissions"),". This step is important to deploy any GitBuilding website."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(4085).Z,width:"777",height:"627"})),(0,a.kt)("p",null,"Once you have updated the permissions, you can import all documentation files from your laptop/PC using ",(0,a.kt)("strong",{parentName:"p"},"Add file")," option or ",(0,a.kt)("strong",{parentName:"p"},"GitHub Desktop"),". Finally, modify ",(0,a.kt)("inlineCode",{parentName:"p"},"gitbuidling.yml")," file to let GitBuilding know which branch stores documentation files that will be published."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(2873).Z,width:"715",height:"629"})),(0,a.kt)("p",null,"Push the changes on YML file and GitHub Pages will deploy your new GitBuilding website."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(4132).Z,width:"900",height:"515"})),(0,a.kt)("p",null,"Refresh the browser and navigate again to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://username.github.io/name-repository/"),". This will show your documentation on the GitBuilding framework. You can keep working on it using GitHub platform and invite others to collaborate and improve the hardware documentation."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(5004).Z,width:"898",height:"499"})),(0,a.kt)("h2",{id:"customizing-gitbuilding-website"},"Customizing GitBuilding website"),(0,a.kt)("p",null,"Update your documentation modifying Markdown files. Let\u2019s try adding a rocket emoji on the main page!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(5745).Z,width:"896",height:"462"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(6013).Z,width:"897",height:"497"})),(0,a.kt)("p",null,"Resources for this tutorial:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Repo: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/biodotpe/gitbuilding-template"},"https://github.com/biodotpe/gitbuilding-template")),(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://biodotpe.github.io/gitbuilding-template/"},"https://biodotpe.github.io/gitbuilding-template/"))))}g.isMDXComponent=!0},4085:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/github_web_10-4b4c75fefb77bf00df2a3a0b0c7bc0da.jpg"},2873:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/github_web_11-277fcbf3f22258111848cbc3a7b183fa.jpg"},4132:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/github_web_12-57542cf687edc0bd0d624114ce469738.jpg"},5004:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/github_web_13-d29bd1cc76b1081f7512b7e1133ee2f7.jpg"},5745:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/github_web_14-94ed778a93a2cc61dd3d64a1fdf196ef.jpg"},6013:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/github_web_15-4e19dd62ba99d794e97a26d8c4644d97.jpg"},8072:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/github_web_7-c801fd3d796f26efb9038ffdea6bf0d2.jpg"},6594:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/github_web_8-aacee61ccfabc5d6fffb5b71a559b713.jpg"},9750:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/github_web_9-21ff52973e446c1fe930034f0a5c68ed.jpg"}}]);