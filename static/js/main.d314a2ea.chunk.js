(this["webpackJsonpsecond-project"]=this["webpackJsonpsecond-project"]||[]).push([[0],{106:function(e,t,n){},108:function(e,t,n){},127:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),a=n(12),r=n(20),s=n(31),o=n(44),l=n(10),d=n(67),j=(n(96),n(45),n(65),n(32),Object(o.a)((function(){return n.e(5).then(n.bind(null,170))}))),u=Object(o.a)((function(){return n.e(4).then(n.bind(null,173))})),b=Object(o.a)((function(){return n.e(6).then(n.bind(null,171))})),f=Object(o.a)((function(){return n.e(3).then(n.bind(null,172))})),O=Object(r.b)((function(e){return{isSignedIn:e.auth.isSignedIn,userObj:e.auth.userObj}}))((function(){var e=Object(r.c)();return Object(i.useEffect)((function(){!function(){var t=localStorage.userInfo;e(t?Object(s.b)(JSON.parse(t)):Object(s.c)())}()}),[]),Object(c.jsxs)("div",{className:"app-container",children:[Object(c.jsx)(d.d,{}),Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{exact:!0,path:"".concat("","/"),component:j}),Object(c.jsx)(l.b,{exact:!0,path:"/",children:Object(c.jsx)(l.a,{to:"".concat("","/")})}),Object(c.jsx)(l.b,{path:"".concat("","/detail/:detail"),component:u}),Object(c.jsx)(l.b,{path:"".concat("","/calendar"),component:f}),Object(c.jsx)(l.b,{path:"".concat("","/mypage"),component:b})]})]})})),h=n(21),p=n(38),m=n(36),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isSignedIn:!1,userObj:null,needSignIn:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(m.a)(Object(m.a)({},e),{},{isSignedIn:!0,userObj:t.payload});case"SIGN_OUT":return Object(m.a)(Object(m.a)({},e),{},{isSignedIn:!1,needSignIn:!1,userObj:t.payload});case"NEED_SIGN_IN":return Object(m.a)(Object(m.a)({},e),{},{needSignIn:!0});default:return e}},g=Object(p.b)({auth:x}),v=Object(p.c)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(a.render)(Object(c.jsx)(r.a,{store:v,children:Object(c.jsx)(h.a,{children:Object(c.jsx)(O,{})})}),document.getElementById("root"))},31:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return a}));var c=function(e){return{type:"SIGN_IN",payload:e}},i=function(){return{type:"NEED_SIGN_IN"}},a=function(){return{type:"SIGN_OUT"}}},53:function(e){e.exports=JSON.parse('{"testSet":[{"title":"Siri","isLike":false},{"title":"Alexa","isLike":false},{"title":"Google","isLike":false},{"title":"Facebook","isLike":false},{"title":"Twitter","isLike":false},{"title":"Linkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false},{"title":"Sinkedin","isLike":false}]}')},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return y})),n.d(t,"i",(function(){return T})),n.d(t,"h",(function(){return Y})),n.d(t,"d",(function(){return R})),n.d(t,"j",(function(){return W})),n.d(t,"c",(function(){return Q})),n.d(t,"k",(function(){return $})),n.d(t,"e",(function(){return te})),n.d(t,"f",(function(){return K})),n.d(t,"g",(function(){return se}));var c=n(2),i=n(0),a=(n(71),n(29)),r=n(82),s=n.n(r),o=n(31),l=n(20),d=(n(106),function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.auth.needSignIn}));return Object(c.jsxs)(a.a,{open:t,trigger:Object(c.jsx)("button",{className:"sign-btn",children:"Sign In"}),position:"center center",contentStyle:{borderRadius:".3rem",width:"auto",padding:"1.3rem 3rem"},modal:!0,children:[Object(c.jsx)("div",{className:"pop-up-app-title",children:"JMTGR"}),Object(c.jsx)(s.a,{clientId:"429317503516-n2vc5gga0noauela0l2rb26c9vun3e80.apps.googleusercontent.com",onSuccess:function(t){e(Object(o.b)(t)),localStorage.setItem("userInfo",JSON.stringify(t))},onFailure:function(){return console.log("error")},cookiePolicy:"single_host_origin"})]})}),j=n(66),u=n(86),b=n.n(u),f=n(35),O=n.n(f),h=n(87),p=n.n(h),m=n(88),x=n.n(m),g=(n(108),Object(j.b)(O.a)),v=function(e){var t=e.event;return Object(c.jsxs)(a.a,{contentStyle:{borderRadius:".3rem",width:"auto"},trigger:Object(c.jsx)("div",{children:t.title}),position:"bottom center",modal:!0,children:[Object(c.jsx)("div",{style:{fontSize:"1.5rem",color:"#e85a4f"},children:t.title}),Object(c.jsx)("p",{style:{color:"#e98074"},children:"Start"}),Object(c.jsx)("div",{children:t.start.toString()}),Object(c.jsx)("p",{style:{color:"#e98074"},children:"End"}),Object(c.jsx)("div",{children:t.end.toString()}),t.desc.where&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{style:{color:"#e98074"},children:"Describe"}),Object(c.jsx)("div",{children:t.desc.where})]})]})},_=function(e){return Object(c.jsxs)("div",{className:"toolbar-container",children:[Object(c.jsxs)("div",{className:"back-next-icons",children:[Object(c.jsx)(p.a,{className:"arrow-icons",onClick:function(){e.date.setMonth(e.date.getMonth()-1),e.onNavigate("prev")}}),Object(c.jsxs)("div",{className:"label-today",children:[Object(c.jsx)("label",{className:"label-date",children:function(){var t=O()(e.date);return Object(c.jsxs)("span",{className:"month-year-label",children:[Object(c.jsx)("b",{children:t.format("MMMM")}),Object(c.jsxs)("span",{children:[" ",t.format("YYYY")]})]})}()}),Object(c.jsx)("span",{className:"today-span",onClick:function(){var t=new Date;e.date.setMonth(t.getMonth()),e.date.setYear(t.getFullYear()),e.onNavigate("current")},children:"Go to today"})]}),Object(c.jsx)(x.a,{className:"arrow-icons",onClick:function(){e.date.setMonth(e.date.getMonth()+1),e.onNavigate("next")}})]}),Object(c.jsx)("div",{className:"dmy-btns",children:Object(c.jsxs)("span",{className:"rbc-btn-group",children:[Object(c.jsx)("span",{className:"label-filter-off",onClick:function(){e.onView("month")},children:"Month"}),Object(c.jsx)("span",{className:"label-filter-off",onClick:function(){e.onView("day")},children:"Day"}),Object(c.jsx)("span",{className:"label-filter-off",onClick:function(){e.onView("week")},children:"Week"})]})})]})},y=function(){var e={id:1,title:"test",start:new Date(2020,9,31),end:new Date(2020,10,3),allDay:!0,resource:"test",desc:"this is desc"},t={id:2,title:"Good good",start:new Date(2020,10,3),end:new Date(2020,10,13),allDay:!0,resource:"Have a good days",desc:{where:"here"}};return Object(c.jsx)("div",{children:Object(c.jsx)(j.a,{events:[e,t],eventPropGetter:function(e){return{style:{backgroundColor:e.id%2===0?"#e85a4f":"#8e8d8a"}}},step:60,showMultiDayTimes:!0,defaultDate:O()().toDate(),components:{event:v,toolbar:_},localizer:g,style:(b.a,{width:"100%",height:"90vh",backgroundColor:"#eae7dc"}),popup:!0})})},S=n(17),k=n(21),N=n(156),w=n(160),I=n(162),L=n(69),D=n(68),E=n(90),C=n.n(E),M=n(53),T=(n(127),M.testSet,function(){var e=Object(i.useState)(!0),t=Object(S.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(""),s=Object(S.a)(r,2),o=s[0],l=s[1],d=Object(i.useState)([]),j=Object(S.a)(d,2),u=(j[0],j[1]),b=Object(L.a)("api/certificate/CertificatesFilter/?keyword=".concat(o),D.a).data;Object(i.useEffect)((function(){u(b)}),[o]);return Object(c.jsxs)("div",{className:"searchform-container",children:[Object(c.jsxs)(N.a,{component:"form",onSubmit:function(e){e.preventDefault()},className:"searchform-paper",children:[Object(c.jsx)(w.a,{type:"submit","aria-label":"search",children:Object(c.jsx)(C.a,{})}),Object(c.jsx)(I.a,{placeholder:"  Search..",type:"text",value:o,onChange:function(e){a(!1);var t=e.target.value;l(t.toLowerCase())}})]}),!n&&Object(c.jsx)("ul",{children:b?b.length?b.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)(k.b,{style:{fontSize:"1.2rem",margin:".2rem"},to:"/detail/".concat(e.cert_id),children:e.name})},t)})):Object(c.jsx)("li",{children:"No result"}):Object(c.jsx)(te,{})})]})}),Y=(n(129),function(e){var t=e.userObj,n=e.myData;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"profile-card",children:[Object(c.jsx)("img",{className:"big-avatar",src:t.profileObj.imageUrl,alt:"img"}),Object(c.jsxs)("div",{className:"profile-card-info",children:[Object(c.jsx)("span",{className:"profile-card-name",children:t.profileObj.name}),Object(c.jsx)("span",{className:"profile-card-email",children:t.profileObj.email}),Object(c.jsxs)("span",{children:["Big on :"," ",Object(c.jsx)("span",{className:"profile-card-favorite",children:null===n||void 0===n?void 0:n.interest})]})]})]})})}),G=n(165),R=(n(130),function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.auth.isSignedIn})),n=Object(l.d)((function(e){return e.auth.userObj}));return Object(c.jsxs)("header",{className:"header-container",children:[Object(c.jsx)("span",{className:"app-title",children:Object(c.jsx)(k.b,{to:"/",children:"JMTGR "})}),Object(c.jsx)(k.b,{to:"".concat("","/"),children:"Home"}),Object(c.jsx)(k.b,{to:"".concat("","/calendar"),children:"Calendar"}),t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k.b,{to:"".concat("","/mypage"),children:"My page"}),Object(c.jsx)(G.a,{alt:"User",src:n.profileObj.imageUrl}),Object(c.jsx)("button",{className:"sign-btn",onClick:function(){e(Object(o.c)()),localStorage.removeItem("userInfo")},children:"SignOut"})]}):Object(c.jsx)(d,{})]})}),U=n(94),F=(n(131),n(132),n(166)),z=n(157),B=n(163),J=n(167),A=n(161),V={reg_start:"#07fc03",test_start:"#07fc03",reg_end:"#fcba03",test_end:"#fcba03",result:"#e85a4f"},X={reg_start:"\uc811\uc218 \uc2dc\uc791",test_start:"\uc2dc\ud5d8\ub0a0",reg_end:"\uc811\uc218 \ub9c8\uac10",test_end:"\uc2dc\ud5d8\ub0a0",result:"\uacb0\uacfc \ubc1c\ud45c"},W=function(e){var t,n,r=e.myData,s=Object(i.useState)(new Date),o=Object(S.a)(s,2),l=o[0],d=(o[1],Object(i.useState)([])),j=Object(S.a)(d,2),u=j[0],b=j[1],f=Object(i.useState)(null===(t=r.cert_likes[0])||void 0===t?void 0:t.cert_id),h=Object(S.a)(f,2),p=h[0],m=h[1],x=Object(i.useState)(null===(n=r.cert_likes[0])||void 0===n?void 0:n.cert_schedule),g=Object(S.a)(x,2),v=g[0],_=g[1];Object(i.useEffect)((function(){var e,t=[];v&&(null===(e=v.cert_schedule)||void 0===e||e.forEach((function(e){t.push({cert_info:v,test_type:e.test_type,type:"reg_start",d:e.reg_start_date}),t.push({cert_info:v,test_type:e.test_type,type:"reg_end",d:e.reg_end_date}),t.push({cert_info:v,test_type:e.test_type,type:"test_start",d:e.test_start_date}),t.push({cert_info:v,test_type:e.test_type,type:"test_end",d:e.test_end_date}),t.push({cert_info:v,test_type:e.test_type,type:"result",d:e.result_date_1}),t.push({cert_info:v,test_type:e.test_type,type:"result",d:e.resutl_date_2})})),b(t));console.log(r)}),[p]);return Object(c.jsxs)("div",{className:"small-calendar-container",children:[Object(c.jsx)(U.a,{className:"small-calendar",value:l,calendarType:"US",tileContent:function(e){e.activeStartDate;var t=e.date,n=(e.view,u.find((function(e){return e.d==O()(t).format("YYYY-MM-DD")})));return n?Object(c.jsx)(a.a,{contentStyle:{borderRadius:".3rem",width:"auto"},trigger:Object(c.jsx)("div",{style:{color:V[n.type]},children:"\u25cf"}),position:"top end",modal:!0,children:Object(c.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:".5rem 1rem"},children:[Object(c.jsx)("div",{style:{fontSize:"2rem"},children:O()(t).format("YYYY/ MM / DD")}),Object(c.jsxs)("div",{style:{fontSize:"1.2rem"},children:[Object(c.jsx)("span",{children:n.cert_info.name})," ",Object(c.jsxs)("span",{style:{color:"#e85a4f"},children:[n.test_type," ",X[n.type]]})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{style:{marginTop:"1rem"},children:["\uc8fc\uad00 : ",n.cert_info.department]}),"\ud544\uae30"===n.test_type?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{children:["\ud544\uae30 \uc811\uc218 \uac00\uaca9 : ",n.cert_info.cost," \uc6d0"]}),Object(c.jsxs)("div",{children:["\ud544\uae30 \ud569\uaca9\ub960 : ",n.cert_info.pass_percent,"%"]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{children:["\uc2e4\uae30 \uc811\uc218 \uac00\uaca9 : ",n.cert_info.cost_sil," \uc6d0"]}),Object(c.jsxs)("div",{children:["\uc2e4\uae30 \ud569\uaca9\ub960 : ",n.cert_info.pass_percent_sil,"%"]})]})]})]})}):null}}),r.cert_likes.length?Object(c.jsx)("div",{style:{marginTop:"3vh"},children:Object(c.jsxs)(F.a,{component:"fieldset",children:[Object(c.jsx)(z.a,{component:"legend",style:{color:"#e85a4f",fontSize:"1.3rem",margin:"2vh",fontWeight:"bold"},children:"\ub2ec\ub825\uc5d0 \uc77c\uc815\uc744 \ud45c\uc2dc\ud560 \uc790\uaca9\uc99d \uc120\ud0dd"}),Object(c.jsx)(B.a,{"aria-label":"cert",value:l,onChange:function(e){var t=e.target.value;m(t);var n=r.cert_likes.find((function(e){return e.cert_id==t}));_(n)},children:null===r||void 0===r?void 0:r.cert_likes.map((function(e,t){return Object(c.jsx)(J.a,{control:Object(c.jsx)(A.a,{checked:e.cert_id==p,style:{color:"#e98074"}}),label:e.name,value:e.cert_id,style:{color:"#8e8d8a",fontWeight:"bold",margin:"-1vh"}})}))})]})}):null]})},H=(n(133),n(32)),P=n.n(H),q=n(158),K=function(e){var t=e.isLoading;return Object(c.jsx)(a.a,{contentStyle:{width:"auto",background:"none",border:"none"},open:t,position:"bottom center",children:Object(c.jsx)(q.a,{color:"secondary"})})},Q=function(e){var t=e.myData,n=e.revalidateUser,a=Object(i.useState)(!1),r=Object(S.a)(a,2),s=r[0],o=r[1],l=function(e){var c=e.target.value;o(!0),P.a.post("/api/cert_like/".concat(t.email,"/").concat(c)).then((function(e){n(),o(!1),console.log(e)})).catch((function(e){return console.log(e)}))};return s?Object(c.jsx)(K,{isLoading:s}):Object(c.jsxs)("div",{className:"favorite-certificate-container",children:[Object(c.jsx)("span",{children:"Favorite Certificates"}),Object(c.jsx)("div",{className:"favorite-certificate-inner-container",children:Object(c.jsx)("ul",{children:t&&0!==t.cert_likes.length?t.cert_likes.map((function(e,t){return Object(c.jsxs)("li",{className:"favorite-certificate-list",children:[Object(c.jsx)(k.b,{to:"/detail/".concat(e.cert_id),children:e.name}),Object(c.jsx)("button",{value:e.cert_id,onClick:l,children:"X"})]},t)})):Object(c.jsx)("li",{className:"favorite-certificate-list",children:"No certificate You Like"})})})]})},Z=(n(134),M.testSet),$=function(){return Object(c.jsxs)("div",{className:"todo-certificate-container",children:[Object(c.jsx)("span",{children:"Todo"}),Object(c.jsx)("div",{className:"todo-certificate-inner-container",children:Object(c.jsx)("ul",{children:Z.map((function(e){return e.isLike&&Object(c.jsx)("li",{className:"todo-certificate-list",children:e.title})}))})})]})},ee=n(168),te=function(){return Object(c.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(c.jsx)(ee.a,{color:"secondary",style:{margin:"10vh 0",width:"90%"}}),Object(c.jsx)("span",{style:{fontSize:"1.5rem",color:"#e85a4f"},children:"Loading.."})]})},ne=function(e){var t=e.certificateData,n=e.index,i=e.showAll,a=e.engTitle;return Object(c.jsx)("li",{id:"".concat(a,"-").concat(n),className:i?"unRollingLi":"rollingLi",children:Object(c.jsxs)(k.b,{to:"/detail/".concat(t.cert_id),children:[n+1,". ",t.name]})},"".concat(a,"-").concat(n))},ce=n(159),ie=n(93),ae=n.n(ie),re=(n(135),Object(ce.a)((function(e){return{showAll:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.standard})},showRolling:{transform:"rotate(180deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.standard})}}}))),se=function(e){var t,n=e.popularCertificates,a=e.title,r=e.engTitle,s=re(),o=Object(i.useState)(!1),l=Object(S.a)(o,2),d=l[0],j=l[1],u=Object(i.useState)(0),b=Object(S.a)(u,2),f=b[0],O=b[1],h=null===n||void 0===n?void 0:n.length;Object(i.useEffect)((function(){if(!1===d)return p(f),t=setInterval((function(){var e=f+1;e===h&&(e=0),O(e),p()}),2500),function(){clearInterval(t)};clearInterval(t)}));var p=function(){var e=document.getElementById("".concat(r,"-").concat(f)),t=0===f?document.getElementById("".concat(r,"-").concat(h-1)):document.getElementById("".concat(r,"-").concat(f-1)),n=f===h-1?document.getElementById("".concat(r,"-0")):document.getElementById("".concat(r,"-").concat(f+1));e&&t&&n&&(e.style.top="0%",e.style.transition="top 1s ease-in-out",t.style.top="-150%",n.style.top="150%",n.style.transition="none")};return Object(c.jsxs)("div",{className:"pop-cert-container",children:[Object(c.jsx)("span",{className:"pop-cert-title",children:a}),Object(c.jsxs)("div",{className:"pop-cert-roller",children:[Object(c.jsx)("ul",{className:d?"unRollingUl":"rollingUl",children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(c.jsx)(ne,{certificateData:e,index:t,showAll:d,engTitle:r},t)}))}),Object(c.jsx)(w.a,{onClick:function(){j(!d)},className:d?s.showRolling:s.showAll,children:Object(c.jsx)(ae.a,{style:{color:"white"},fontSize:"large"})})]})]})}},68:function(e,t,n){"use strict";var c=n(32),i=n.n(c);t.a=function(e){return i.a.get(e,{withCredentials:!0}).then((function(e){return e.data}))}},96:function(e,t,n){}},[[137,1,2]]]);
//# sourceMappingURL=main.d314a2ea.chunk.js.map