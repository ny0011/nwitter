(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),r=n(47),s=n.n(r),i=n(11),u=n(37),j=n(15),o=n(0),l=n.n(o),b=n(2),O=n(22),d=n(16),p=n(29),x=n(48),f=n(49),h=n(50),m=n(51),v=(Object(x.a)({apiKey:"AIzaSyBvigBTJ1aEWSRHCCxe3aHu_88lwFgcwLc",authDomain:"nwitter-c2c20.firebaseapp.com",projectId:"nwitter-c2c20",storageBucket:"nwitter-c2c20.appspot.com",messagingSenderId:"85705643297",appId:"1:85705643297:web:205281906265d9a34cda60"}),Object(f.a)()),g=Object(h.a)(),w=Object(m.a)(),y=n(25),N=n(30),k=n(6),S=function(e){var t=e.nweetObj,n=e.isOwner,a=Object(c.useState)(!1),r=Object(i.a)(a,2),s=r[0],u=r[1],j=Object(c.useState)(t.text),o=Object(i.a)(j,2),O=o[0],x=o[1],f=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=7;break}return e.next=4,Object(d.c)(Object(d.d)(g,"nweets/".concat(t.id)));case 4:if(!t.attachmentUrl){e.next=7;break}return e.next=7,Object(p.a)(Object(p.d)(w,t.attachmentUrl));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){u((function(e){return!e}))},m=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Object(d.j)(Object(d.d)(g,"nweets/".concat(t.id)),{text:O});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)("div",{className:"nweet",children:s?Object(k.jsx)(k.Fragment,{children:n&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("form",{onSubmit:m,className:"container nweetEdit",children:[Object(k.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:O,onChange:function(e){x(t.text);var n=e.target.value;x(n)},required:!0}),Object(k.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(k.jsx)("button",{onClick:h,children:"Cancel"})]})}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(k.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px",alt:"nweet"}),n&&Object(k.jsxs)("div",{className:"nweet__actions",children:[Object(k.jsx)("span",{onClick:f,children:Object(k.jsx)(y.a,{icon:N.d})}),Object(k.jsx)("span",{onClick:h,children:Object(k.jsx)(y.a,{icon:N.a})})]})]})})},C=function(e){var t=e.refreshUser,n=e.userObj,a=Object(j.f)(),r=Object(c.useState)(n.displayName),s=Object(i.a)(r,2),u=s[0],o=s[1],p=Object(c.useState)([]),x=Object(i.a)(p,2),f=x[0],h=x[1],m=Object(c.useCallback)(Object(b.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(d.i)(Object(d.b)(g,"nweets"),Object(d.k)("creatorId","==",n.uid),Object(d.h)("createdAt","desc")),e.next=3,Object(d.e)(t);case 3:c=e.sent,h(c.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)}))),[n]);Object(c.useEffect)((function(){m()}),[m]);var w=function(){var e=Object(b.a)(l.a.mark((function e(c){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n.displayName===u){e.next=6;break}return a=v.currentUser,e.next=5,Object(O.i)(a,{displayName:u});case 5:t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{className:"container",children:[Object(k.jsxs)("form",{onSubmit:w,className:"profileForm",children:[Object(k.jsx)("input",{type:"text",autoFocus:!0,placeholder:"Display name",onChange:function(e){var t=e.target.value;o(t)},value:u,className:"formInput"}),Object(k.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(k.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){v.signOut(),a.push("/")},children:"Log Out"}),Object(k.jsx)("div",{style:{marginTop:30},children:f.map((function(e,t){return Object(k.jsx)(S,{nweetObj:e,isOwner:e.creatorId===n.uid},t)}))})]})},I=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),u=s[0],j=s[1],o=Object(c.useState)(!0),d=Object(i.a)(o,2),p=d[0],x=d[1],f=Object(c.useState)(""),h=Object(i.a)(f,2),m=h[0],g=h[1],w=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?a(c):"password"===n&&j(c)},y=function(){var e=Object(b.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,Object(O.c)(v,n,u);case 5:c=e.sent,e.next=11;break;case 8:return e.next=10,Object(O.g)(v,n,u);case 10:c=e.sent;case 11:console.log(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("form",{onSubmit:y,className:"container",children:[Object(k.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:w,className:"authInput"}),Object(k.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:w,className:"authInput"}),Object(k.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Sign In"}),m&&Object(k.jsx)("span",{className:"authError",children:m})]}),Object(k.jsx)("span",{onClick:function(){x((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},F=n(35),_=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,c,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?c=new O.b:"github"===n&&(c=new O.a),e.prev=2,e.next=5,Object(O.h)(v,c);case 5:e.next=15;break;case 7:if(e.prev=7,e.t0=e.catch(2),"auth/account-exists-with-different-credential"!==e.t0.code){e.next=15;break}return r=e.t0.customData.email,e.next=13,Object(O.d)(v,r);case 13:s=e.sent,a("".concat(r," is already ").concat(s[0]," account"));case 15:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{className:"authContainer",children:[Object(k.jsx)(y.a,{icon:F.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(k.jsx)(I,{}),Object(k.jsxs)("div",{className:"authBtns",children:[n&&Object(k.jsx)("span",{className:"authError",children:n}),Object(k.jsxs)("button",{onClick:r,name:"google",className:"authBtn",children:["Continue with Google ",Object(k.jsx)(y.a,{icon:F.b})]}),Object(k.jsxs)("button",{onClick:r,name:"github",className:"authBtn",children:["Continue with Github ",Object(k.jsx)(y.a,{icon:F.a})]})]})]})},A=n(54),U=n(70),B=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],u=Object(c.useState)(""),j=Object(i.a)(u,2),o=j[0],O=j[1],x=function(){var e=Object(b.a)(l.a.mark((function e(n){var c,a,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),e.prev=3,c="",""===o){e.next=13;break}return a=Object(p.d)(w,"".concat(t.uid,"/").concat(Object(U.a)())),e.next=9,Object(p.e)(a,o,"data_url");case 9:return i=e.sent,e.next=12,Object(p.b)(i.ref);case 12:c=e.sent;case 13:return u={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:c},e.next=16,Object(d.a)(Object(d.b)(g,"nweets"),u);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error("Error adding document: ",e.t0);case 21:s(""),O("");case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)("form",{onSubmit:x,className:"factoryForm",children:[Object(k.jsxs)("div",{className:"factoryInput__container",children:[Object(k.jsx)("input",{className:"factoryInput__input",type:"text",value:r,onChange:function(e){var t=e.target.value;s(t)},placeholder:"What's on your mind?",maxLength:120}),Object(k.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(k.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(k.jsx)("span",{children:"Add photos"}),Object(k.jsx)(y.a,{icon:N.b})]}),Object(k.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.target.result;O(t)},n.readAsDataURL(t)},style:{opacity:0}}),o&&Object(k.jsxs)("div",{className:"factoryForm__attachment",children:[Object(k.jsx)("img",{src:o,style:{backgroundImage:o},alt:"thumbnail"}),Object(k.jsxs)("div",{className:"factoryForm__clear",onClick:function(){O("")},children:[Object(k.jsx)("span",{children:"Remove"}),Object(k.jsx)(y.a,{icon:N.c})]})]})]})},D=function(e){var t=e.userObj,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){!function(){var e=Object(d.i)(Object(d.b)(g,"nweets"),Object(d.h)("createdAt","desc"));Object(d.g)(e,(function(e){var t=e.docs.map((function(e){return Object(A.a)({id:e.id},e.data())}));s(t)}))}()}),[]),Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(B,{userObj:t}),Object(k.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(k.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},E=function(e){var t=e.userObj;return Object(k.jsx)("nav",{children:Object(k.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(k.jsx)("li",{children:Object(k.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(k.jsx)(y.a,{icon:F.c,color:"#04AAFF",size:"2x"})})}),Object(k.jsx)("li",{children:Object(k.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(k.jsx)(y.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(k.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},T=function(e){var t=e.refreshUser,n=e.isLoggedIn,c=e.userObj;return Object(k.jsxs)(u.a,{children:[n&&Object(k.jsx)(E,{userObj:c}),Object(k.jsx)(j.c,{children:Object(k.jsx)(k.Fragment,{children:n?Object(k.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(k.jsx)(j.a,{exact:!0,path:"/",children:Object(k.jsx)(D,{userObj:c})}),Object(k.jsx)(j.a,{exact:!0,path:"/profile",children:Object(k.jsx)(C,{userObj:c,refreshUser:t})})]}):Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(j.a,{exact:!0,path:"/",children:Object(k.jsx)(_,{})})})})})]})};var L=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(i.a)(r,2),u=s[0],j=s[1];return Object(c.useEffect)((function(){Object(O.f)(v,(function(e){if(e){var t=null===e.displayName?"\ub274\ube44":e.displayName;j({displayName:t,uid:e.uid})}else j(null);a(!0)}))}),[]),Object(k.jsxs)(k.Fragment,{children:[n?Object(k.jsx)(T,{refreshUser:function(){var e=v.currentUser;j({displayName:e.displayName,uid:e.uid})},isLoggedIn:Boolean(u),userObj:u}):"Initializing...",Object(k.jsxs)("footer",{style:{display:"flex",justifyContent:"center",marginTop:50},children:["\xa9",(new Date).getFullYear()," Nwitter"]})]})};n(67);s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(L,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.edb17708.chunk.js.map