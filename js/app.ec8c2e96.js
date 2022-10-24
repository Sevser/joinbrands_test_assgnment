(function(){"use strict";var e={5723:function(e,t,n){var r=n(9242),s=n(1373),o=n(3396),a=n(7139);const i={id:"nav"};function d(e,t,n,r,s,d){const u=(0,o.up)("router-link"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",i,[(0,o.Wm)(u,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Homepage")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(u,{to:"/sign-up"},{default:(0,o.w5)((()=>[(0,o.Uk)("SignUp")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(u,{to:"/sign-in"},{default:(0,o.w5)((()=>[(0,o.Uk)("SignIn")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(u,{to:"/lost-password"},{default:(0,o.w5)((()=>[(0,o.Uk)("LostPassword")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(u,{to:"/profile"},{default:(0,o.w5)((()=>[(0,o.Uk)("Profile")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(u,{to:"/change-password"},{default:(0,o.w5)((()=>[(0,o.Uk)("ChangePassword")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(u,{to:"/sign-out"},{default:(0,o.w5)((()=>[(0,o.Uk)("SignOut")])),_:1})]),(0,o._)("div",null,[(0,o._)("h2",null,(0,a.zw)(e.title),1),(0,o.Wm)(c)])],64)}var u=(0,o.aZ)({name:"App",components:{},computed:{title(){return this.$route.name}}}),c=n(89);const l=(0,c.Z)(u,[["render",d]]);var m=l,f=n(2483),w=n(3764);const h={class:"home"};function g(e,t,n,r,s,a){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",h,[(0,o.Wm)(i,{to:"/sign-up"},{default:(0,o.w5)((()=>[(0,o.Uk)("SignUp")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(i,{to:"/sign-in"},{default:(0,o.w5)((()=>[(0,o.Uk)("SignIn")])),_:1})])}var p=(0,o.aZ)({name:"Home"});const v=(0,c.Z)(p,[["render",g]]);var b=v;const y=[{path:"/",name:"Home",component:b,meta:{private:!1}},{path:"/sign-up",name:"SignUp",component:()=>n.e(597).then(n.bind(n,4597)),meta:{private:!1}},{path:"/sign-in",name:"SignIn",component:()=>n.e(662).then(n.bind(n,8662)),meta:{private:!1}},{path:"/lost-password",name:"LostPassword",props:e=>(console.log(e),{email:e.query.email,code:e.query.code}),component:()=>n.e(380).then(n.bind(n,8380)),meta:{private:!1}},{path:"/profile",name:"Profile",component:()=>n.e(950).then(n.bind(n,2950)),meta:{private:!0}},{path:"/change-password",name:"ChangePassword",component:()=>n.e(955).then(n.bind(n,9955)),meta:{private:!0}},{path:"/sign-out",name:"SignOut",redirect:()=>(w.Z.logoff(),{name:"Home"})},{path:"/(.*)",name:"404",redirect:()=>({name:"Home"})}],k=(0,f.p7)({history:(0,f.PO)("/joinbrands_test_assgnment/"),routes:y});k.beforeEach(((e,t,n)=>{e.matched.length?!e.meta.private||w.Z.user?n():n({name:"SignIn"}):n({name:"Home"})}));var P=k,C=n(65),I=(0,C.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const Z=(0,s.Z)(),D=(0,r.ri)(m);D.config.globalProperties.$formBus=Z,D.use(I).use(P).mount("#app")},1597:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(2482);class s{constructor(e){(0,r.Z)(this,"data",void 0),(0,r.Z)(this,"result",void 0),this.data=e.data,this.result=e.result||!1}}var o=n(4347);class a{constructor(e){(0,r.Z)(this,"activated",void 0),(0,r.Z)(this,"email",void 0),(0,r.Z)(this,"id",void 0),(0,r.Z)(this,"password",void 0),(0,r.Z)(this,"userName",void 0),(0,r.Z)(this,"resetPasswordCode",void 0),(0,r.Z)(this,"registerCode",void 0),this.email=e.email,this.password=e.password,this.userName=e.userName,this.activated=e.activated,this.resetPasswordCode=(0,o.wi)(),this.registerCode=e.registerCode,this.id=e.id}}var i=n(8451);class d{constructor(e){(0,r.Z)(this,"activated",void 0),(0,r.Z)(this,"email",void 0),(0,r.Z)(this,"id",void 0),(0,r.Z)(this,"password",void 0),(0,r.Z)(this,"registerCode",void 0),(0,r.Z)(this,"userName",void 0),this.email=e.email,this.password=(0,i.sha256)(e.password.concat("a0d6cfd3-1ea2-40be-80c5-5834f3dc3724")),this.userName=e.userName,void 0!==e.activated?this.activated=e.activated:this.activated=!0,void 0!==e.id&&(this.id=e.id),void 0!==e.registerCode?this.registerCode=e.registerCode:this.registerCode=(0,o.wi)()}}class u{constructor(){let e,t;(0,r.Z)(this,"DBOpenRequest",void 0),(0,r.Z)(this,"db",void 0),(0,r.Z)(this,"hasError",void 0),(0,r.Z)(this,"pending",void 0),this.DBOpenRequest=window.indexedDB.open("users",1),this.hasError=!1,this.pending=!0,this.db=new Promise(((n,r)=>{e=n,t=r})),this.DBOpenRequest.onerror=e=>{console.error(e),this.hasError=!0,this.pending=!1,t(e)},this.DBOpenRequest.onsuccess=t=>{console.log("Database initialised."),this.db=this.DBOpenRequest.result,this.pending=!1,e(this.db)},this.DBOpenRequest.onupgradeneeded=e=>{const t=e.target.result;t.onerror=e=>{console.error(e)};const n=["email","userName"],r=t.createObjectStore("userList",{keyPath:n,unique:!1});r.createIndex("userName","userName",{unique:!0}),r.createIndex("email","email",{unique:!0}),r.createIndex("password","password",{unique:!1}),r.createIndex("registerCode","registerCode",{unique:!1}),r.createIndex("resetPasswordCode","resetPasswordCode",{unique:!1}),r.createIndex("activated","activated",{unique:!1})},window.addEventListener("beforeunload",(()=>{this.pending||this.hasError||this.db.close()}))}}void 0===window.indexedDB&&(window.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB),void 0===window.IDBTransaction&&(window.indexedDB=window.IDBTransaction||window.webkitIDBTransaction||window.msIDBTransaction),void 0===window.IDBKeyRange&&(window.indexedDB=window.IDBKeyRange||window.webkitIDBKeyRange||window.msIDBKeyRange);const c=new u;var l=c;class m{constructor(){(0,r.Z)(this,"db",void 0),l.db.then((e=>{this.db=e}))}async signUp(e){return new Promise(((t,n)=>{const r=this.db.transaction(["userList"],"readwrite");r.oncomplete=()=>{t(new s({data:{},result:!0}))},r.onerror=e=>{n(new Error(e.target.error))};const o=r.objectStore("userList"),a=o.add(new d(e));a.onsuccess=e=>{console.log(e)}}))}async resetPassword(e){return new Promise(((t,n)=>{const r=this.db.transaction(["userList"],"readwrite"),o=new s({data:{},result:!1});r.oncomplete=()=>{console.log(o),t(o)},r.onerror=e=>{n(new Error(e.target.error))};const i=r.objectStore("userList"),d=i.index("email"),u=e.email,c=e.email,l=IDBKeyRange.bound(u,c),m=d.openCursor(l);m.onsuccess=e=>{if(e.target&&e.target.result&&e.target.result.value){const{value:t}=e.target.result,n=new a(t),r=i.put(n);r.onsuccess=()=>{o.result=!0,o.data.userInfo={userName:t.userName,email:t.email},o.data.message="Link was send to your email"}}else o.result=!1,o.data.message="User wasn`t found"}}))}async getCode(e){return new Promise(((t,n)=>{const r=this.db.transaction(["userList"],"readwrite"),o=new s({data:{},result:!1});r.oncomplete=()=>{console.log(o),t(o)},r.onerror=e=>{n(new Error(e.target.error))};const a=r.objectStore("userList"),i=a.index("email"),d=e.email,u=e.email,c=IDBKeyRange.bound(d,u),l=i.openCursor(c);l.onsuccess=e=>{if(e.target&&e.target.result&&e.target.result.value){const{value:t}=e.target.result;o.data.code=t.resetPasswordCode}else o.result=!1,o.data.message="User wasn`t found"}}))}async updatePassword(e){return new Promise(((t,n)=>{const r=this.db.transaction(["userList"],"readwrite"),o=new s({data:{},result:!1});r.oncomplete=()=>{console.log(o),t(o)},r.onerror=e=>{n(new Error(e.target.error))};const a=r.objectStore("userList"),u=a.index("email"),c=e.email,l=e.email,m=IDBKeyRange.bound(c,l),f=u.openCursor(m);f.onsuccess=t=>{if(t.target&&t.target.result&&t.target.result.value){const{value:n}=t.target.result;if(!n.activated)return o.result=!1,void(o.data.message="Email not confirmed check your email!");if(e.password){const t=(0,i.sha256)(e.password.concat("a0d6cfd3-1ea2-40be-80c5-5834f3dc3724"));if(t!==n.password)return o.result=!1,void(o.data.message="Password incorrect")}else if(e.code!==n.resetPasswordCode)return o.result=!1,void(o.data.message="Reset password code incorrect");const r=new d({...n,password:e.newPassword}),s=a.put(r);s.onsuccess=e=>{console.log(e),o.result=!0,o.data.userInfo={userName:n.userName,email:n.email}}}else o.result=!1,o.data.message="User wasn`t found"}}))}async signIn(e){return new Promise(((t,n)=>{const r=this.db.transaction(["userList"],"readwrite"),o=new s({data:{},result:!1});r.oncomplete=()=>{console.log(o),t(o)},r.onerror=e=>{n(new Error(e.target.error))};const a=r.objectStore("userList"),d=a.index("email"),u=e.email,c=e.email,l=IDBKeyRange.bound(u,c),m=d.openCursor(l);m.onsuccess=t=>{if(t.target&&t.target.result&&t.target.result.value){const{value:n}=t.target.result;if(!n.activated)return o.result=!1,void(o.data.message="Email not confirmed check your email!");const r=(0,i.sha256)(e.password.concat("a0d6cfd3-1ea2-40be-80c5-5834f3dc3724"));if(r!==n.password)return o.result=!1,void(o.data.message="User with this password wasn`t found");o.result=!0,o.data.userInfo={userName:n.userName,email:n.email}}else o.result=!1,o.data.message="User wasn`t found"}}))}}const f=new m;var w=f},3764:function(e,t,n){var r=n(2482),s=n(1597);class o{constructor(e){(0,r.Z)(this,"email",void 0),(0,r.Z)(this,"userName",void 0),this.userName=e.userName,this.email=e.email}}class a{constructor(){(0,r.Z)(this,"user",void 0),this.user=null}async changePassword({newPassword:e,password:t}){const n=await s.Z.updatePassword({...this.user,newPassword:e,password:t});return n.result&&void 0!==n.data.userInfo&&(this.user=new o(n.data.userInfo)),n}async changePasswordWithCode({code:e,newPassword:t,email:n}){const r=await s.Z.updatePassword({email:n,code:e,newPassword:t});return r.result&&void 0!==r.data.userInfo&&(this.user=new o(r.data.userInfo)),r}async login(e){const t=await s.Z.signIn(e);return t.result&&void 0!==t.data.userInfo&&(this.user=new o(t.data.userInfo)),t}async logoff(){console.log("logoff"),this.user=null}}const i=new a;t["Z"]=i},4347:function(e,t,n){n.d(t,{SF:function(){return s},wi:function(){return o}});const r=()=>{const e=Math.random();return Math.floor(65536*e).toString(16)},s=()=>`${r()}${r()}-${r()}-${r()}-${r()}-${r()}${r()}${r()}`,o=()=>`${r()}-${r()}`}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,s,o){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],o=e[c][2];for(var i=!0,d=0;d<r.length;d++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[d])}))?r.splice(d--,1):(i=!1,o<a&&(a=o));if(i){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,s,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{380:"a6f9ceb0",597:"06dbb28e",662:"dd46f22a",950:"8ae9959a",955:"8b4ea93e"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{380:"03d07bb4",597:"8d4eb6e8",662:"22b7d67b",950:"9a50fac7",955:"f09e441f"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="joinbrants_test_assignment:";n.l=function(r,s,o,a){if(e[r])e[r].push(s);else{var i,d;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var l=u[c];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){i=l;break}}i||(d=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[s];var m=function(t,n){i.onerror=i.onload=null,clearTimeout(f);var s=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),d&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/joinbrands_test_assgnment/"}(),function(){var e=function(e,t,n,r){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var o=function(o){if(s.onerror=s.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=i,s.parentNode.removeChild(s),r(d)}};return s.onerror=s.onload=o,s.href=t,document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var s=n[r],o=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===e||o===t))return s}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){s=a[r],o=s.getAttribute("data-href");if(o===e||o===t)return s}},r=function(r){return new Promise((function(s,o){var a=n.miniCssF(r),i=n.p+a;if(t(a,i))return s();e(r,i,s,o)}))},s={143:0};n.f.miniCss=function(e,t){var n={380:1,597:1,662:1,950:1,955:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=r(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var s=n.o(e,t)?e[t]:void 0;if(0!==s)if(s)r.push(s[2]);else{var o=new Promise((function(n,r){s=e[t]=[n,r]}));r.push(s[2]=o);var a=n.p+n.u(t),i=new Error,d=function(r){if(n.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,s[1](i)}};n.l(a,d,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,o,a=r[0],i=r[1],d=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(d)var c=d(n)}for(t&&t(r);u<a.length;u++)o=a[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunkjoinbrants_test_assignment"]=self["webpackChunkjoinbrants_test_assignment"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5723)}));r=n.O(r)})();
//# sourceMappingURL=app.ec8c2e96.js.map