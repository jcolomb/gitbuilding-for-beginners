"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[969],{3905:(t,e,i)=>{i.d(e,{Zo:()=>c,kt:()=>b});var a=i(7294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e){if(null==t)return{};var i,a,n=function(t,e){if(null==t)return{};var i,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)i=l[a],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)i=l[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var i=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),u=p(i),d=n,b=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return i?a.createElement(b,o(o({ref:e},c),{},{components:i})):a.createElement(b,o({ref:e},c))}));function b(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=i.length,o=new Array(l);o[0]=d;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[u]="string"==typeof t?t:n,o[1]=r;for(var p=2;p<l;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},1594:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=i(7462),n=(i(7294),i(3905));const l={sidebar_position:2},o="Deploy a GitBuilding Website",r={unversionedId:"tutorial-basics-gitlab/deploy-website-gitlab",id:"tutorial-basics-gitlab/deploy-website-gitlab",title:"Deploy a GitBuilding Website",description:"Prerequisites:",source:"@site/docs/tutorial-basics-gitlab/deploy-website-gitlab.md",sourceDirName:"tutorial-basics-gitlab",slug:"/tutorial-basics-gitlab/deploy-website-gitlab",permalink:"/gitbuilding-for-beginners/docs/tutorial-basics-gitlab/deploy-website-gitlab",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a GitBuilding Project",permalink:"/gitbuilding-for-beginners/docs/tutorial-basics-gitlab/create-a-project-windows"},next:{title:"GitBuilding - Extras",permalink:"/gitbuilding-for-beginners/docs/category/gitbuilding---extras"}},s={},p=[{value:"Creating a new repository on GitLab",id:"creating-a-new-repository-on-gitlab",level:2},{value:"Deploying a GitBuilding website on GitLab",id:"deploying-a-gitbuilding-website-on-gitlab",level:2},{value:"Customizing GitBuilding website",id:"customizing-gitbuilding-website",level:2}],c={toc:p},u="wrapper";function g(t){let{components:e,...l}=t;return(0,n.kt)(u,(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deploy-a-gitbuilding-website"},"Deploy a GitBuilding Website"),(0,n.kt)("p",null,"Prerequisites:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your GitBuilding documentation project."),(0,n.kt)("li",{parentName:"ul"},"GitLab account.")),(0,n.kt)("h2",{id:"creating-a-new-repository-on-gitlab"},"Creating a new repository on GitLab"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Sign-up and/or log-in to GitLab; either at ",(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com/"},"gitlab.com")," or your instance.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"GitLab is open source :)")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com/projects/new"},"gitlab.com/projects/new")," and create a new blank project.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The project creates a git respository, where you will store the documentation files for your GitBuilding website, and track changes over time.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_01.png",src:i(137).Z,width:"931",height:"481"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Configure the new project's details:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Choose a name (and "slug").'),(0,n.kt)("li",{parentName:"ul"},"Set the visibility to public."),(0,n.kt)("li",{parentName:"ul"},'Check the "initialize with README" tick box.'),(0,n.kt)("li",{parentName:"ul"},"Click on create when you are ready.")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Choose a nice, short, descriptive name related to ",(0,n.kt)("em",{parentName:"p"},"your")," project. But don't worry too much, these details can be updated later on.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_02.png",src:i(6379).Z,width:"934",height:"876"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"As a result, you will be taken to the webpage of your your new GitLab project.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Save the following information:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The project's address, as it appears on your browser's top bar (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"https://gitlab.com/naikymen/gitbuilding-pages-on-gitlab"),")."),(0,n.kt)("li",{parentName:"ul"},'You can save time by clocking on "Add README", which will open GitLab\'s Web IDE (used in step 7 to upload files).')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_03.png",src:i(9156).Z,width:"934",height:"654"})),(0,n.kt)("h2",{id:"deploying-a-gitbuilding-website-on-gitlab"},"Deploying a GitBuilding website on GitLab"),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Now browse to your project's documentation, and open the ",(0,n.kt)("inlineCode",{parentName:"li"},".gitlab-ci.yml")," file, for editing.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The file should have been created automatically when you executed the ",(0,n.kt)("inlineCode",{parentName:"p"},"gitbuilding generate ci")," command on a terminal/shell, by choosing the ",(0,n.kt)("inlineCode",{parentName:"p"},"1. Gitlab Pages")," option.\nIf you're not familiar with this step, you can create the file instead, and copy-paste the contents from the ",(0,n.kt)("a",{parentName:"p",href:"https://gitlab.com/gitbuilding/gitbuilding-example/-/blob/master/.gitlab-ci.yml"},"example file")," (shown below).")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_05.png",src:i(2770).Z,width:"796",height:"466"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Edit the name of the branch replacing it with the name of your repo's branch.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"On GitLab the default name is ",(0,n.kt)("inlineCode",{parentName:"li"},"main")," (as shown in the image above).")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This will let GitBuilding know which branch of your git repository stores documentation files that will be published. In this way, you can work on other branches and only update the live docs when ready.")),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Upload your documentation files to your GitLab repo:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Bring up your web browser, and open your GitLab project's webpage."),(0,n.kt)("li",{parentName:"ul"},'Click on "Add README" to open GitLab\'s web IDE.'),(0,n.kt)("li",{parentName:"ul"},"Drag and drop your project's files onto the left side-panel (first image below).")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_06.png",src:i(7565).Z,width:"934",height:"654"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Commit and Push your files:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Click on the "Source Control" icon on the left side-panel.'),(0,n.kt)("li",{parentName:"ul"},"Write a descriptive commit message (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"added documentation files"),")."),(0,n.kt)("li",{parentName:"ul"},'Click on "Commit & Push", and click to save changes to the current "main" branch when prompted.')))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_07.png",src:i(3774).Z,width:"462",height:"654"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_08.png",src:i(8624).Z,width:"830",height:"654"})),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"Go back to your GitLab project's main site (",(0,n.kt)("em",{parentName:"li"},"you saved it during step 4"),") and notice that:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"(a) Your files are there, yay!"),(0,n.kt)("li",{parentName:"ul"},"(b) There is a small pacman-like icon. This means that GitLab is deploying your documentation to GitLab pages. Double yay!")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_09.png",src:i(1048).Z,width:"934",height:"1045"})),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"Find the URL of the newly published GitBuilding documentation.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Go to "Pages" settings, under the "Deployments" item in the left side-panel.'),(0,n.kt)("li",{parentName:"ul"},"The URL will appear listed on that page. You can click on it ",(0,n.kt)("strong",{parentName:"li"},"now")," to have a look. :D")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_10.png",src:i(6876).Z,width:"504",height:"606"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_11.png",src:i(6758).Z,width:"927",height:"595"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_12.png",src:i(1170).Z,width:"927",height:"633"})),(0,n.kt)("h2",{id:"customizing-gitbuilding-website"},"Customizing GitBuilding website"),(0,n.kt)("ol",{start:11},(0,n.kt)("li",{parentName:"ol"},"Update your documentation modifying Markdown files. Let\u2019s try adding a rocket emoji on the main page!",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Browse back to the main repo\'s page, and click on "Web IDE" to open the web editor.'),(0,n.kt)("li",{parentName:"ul"},'Locate the "index.md" file on the left side-panel, and double click on it.'),(0,n.kt)("li",{parentName:"ul"},"Add rocket emojis everywhere: \ud83d\ude80"),(0,n.kt)("li",{parentName:"ul"},'Click on the "Source Control" icon on the left side-panel.'),(0,n.kt)("li",{parentName:"ul"},"Write a descriptive commit message (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"added documentation files"),")."),(0,n.kt)("li",{parentName:"ul"},'Click on "Commit & Push", and choose to use the current "main" branch.')))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_13.png",src:i(5945).Z,width:"928",height:"400"})),(0,n.kt)("ol",{start:12},(0,n.kt)("li",{parentName:"ol"},"Wait for a minute, bring up the browser tab with the online docs, refresh the page, and behold (or wait for a bit more and refresh).")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_12.png",src:i(1170).Z,width:"927",height:"633"})),(0,n.kt)("p",null,'You can check on the status of the "pages jobs" that run after each commit, under the CI/CD menu of your GitLab project. If anything went wrong, it will probably show up there.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab_14.png",src:i(3382).Z,width:"809",height:"466"})),(0,n.kt)("p",null,"Resources for this tutorial:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GitLab project and repository: ",(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com/naikymen/gitbuilding-pages-on-gitlab"},"https://gitlab.com/naikymen/gitbuilding-pages-on-gitlab")),(0,n.kt)("li",{parentName:"ul"},"Published GitBuilding website: ",(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com/naikymen/gitbuilding-pages-on-gitlab"},"https://gitlab.com/naikymen/gitbuilding-pages-on-gitlab"))))}g.isMDXComponent=!0},137:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/gitlab_01-f9ae990f631c33112c9524d5e2377d9d.png"},6379:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/gitlab_02-c9404eddd6450848bd98d73971cc63d3.png"},9156:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/gitlab_03-43d3f3f7722febcd5bf40207ef94d908.png"},2770:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/gitlab_05-f824b222181ae655e44942ef578cd83c.png"},7565:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/gitlab_06-016cd6f4a856d8de4e03e4f3a44d33ed.png"},3774:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/gitlab_07-1b36dc82a01c5a114da872dcd0f61dd5.png"},8624:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/gitlab_08-4fd9fe4bdc5b63399f0811df3040a457.png"},1048:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/gitlab_09-08d675211d67a63260b704a9136bb0e0.png"},6876:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/gitlab_10-dfda2fda6de8ace2e4039ef59b3aa631.png"},6758:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/gitlab_11-143e1704558aa134426d7d9c04141997.png"},1170:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/gitlab_12-0f53b4d6979b21ffbb424d99e22a1dc4.png"},5945:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/gitlab_13-80e2d96d6479f9944a88d13a0c598eb6.png"},3382:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/gitlab_14-42c48b6de14033cb3b9076f6b7fd12e7.png"}}]);