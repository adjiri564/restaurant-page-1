(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var s=n.getElementsByTagName("script");if(s.length)for(var a=s.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=s[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"457e447721227da5eaf3.jpg",n=e.p+"25616c307ac2780287a6.jpg",s=e.p+"28fbde491fdd6b8bc586.jpg",a=e.p+"c20d9fac063a5b24b165.webp",i=document.querySelector(".hm-btn"),c=document.querySelector(".mn-btn"),o=document.querySelector(".abt-btn");document.getElementById("content").innerHTML=`\n<h1 class= "header">Welcome to our website!</h1>\n<img class="rest-img" src="${t}" alt="restaurant">\n<p class ="text">We are a restaurant that is focused on serving the best dishes from the african continent.</p>\n<p class ="text">Please visit our menu page to see the list of dishes available</p>\n<p class ="text end">Hope you enjoy our dishes!!!</p>\n`,i.addEventListener("click",(()=>{!function(){const e=document.getElementById("content");e.innerHTML=`\n        <h1 class= "header">Welcome to our website!</h1>\n        <img class="rest-img" src="${t}" alt="restaurant">\n        <p class ="text">We are a restaurant that is focused on serving the best dishes from the african continent.</p>\n        <p class ="text">Please visit our menu page to see the list of dishes available</p>\n        <p class ="text end">Hope you enjoy our dishes!!!</p>`}()})),c.addEventListener("click",(()=>{!function(){const e=document.getElementById("content");e.innerHTML=`<h1 class= "header">Menu</h1>\n        <p class= "menu-p"> This is a menu specially prepared for you  love</p>\n        <div class = "info">\n        <img class = "menu-img" src="${n}" alt="waakye">\n        <p class= "menu-txt"> The waakye is a very delicious dish that takes you out of this world</p>\n        </div>\n        <div class = "info">\n        <img class = "menu-img" src="${s}" alt="jollof">\n        <p class= "menu-txt"> This dish is taken on special occasions and it is called Jollof</p>\n        </div>\n        <div class = "info">\n        <img class = "menu-img" src="${a}" alt="beans">\n        <p class= "menu-txt"> Beans is the salvation of most ghanaians, because it is delicious yet cheap.</p>\n        </div>\n        `}()})),o.addEventListener("click",(()=>{document.getElementById("content").innerHTML='\n    <h2 class= "header">About Page</h2>\n    <p class= "about-txt">This restaurant is located in Accra</p>\n    <p class= "about-txt"> Contact Us: +233*********</p>\n    '}))})();