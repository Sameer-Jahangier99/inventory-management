"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5037],{50910:function(e,t,n){n(72791);var r=n(78983),s=n(80184);t.Z=function(e){return(0,s.jsx)("div",{className:"row bg-white pt-2 pl-2 mb-4 ",style:{margin:"0px 1px"},children:(0,s.jsx)("div",{className:"col-12  ",children:(0,s.jsx)(r.fj,{className:"d-flex  align-items-center",style:{"--cui-breadcrumb-divider":"'>'"},children:e.breadCrumbsInfo&&e.breadCrumbsInfo.length&&e.breadCrumbsInfo.map((function(e){return(0,s.jsx)(r.Sd,{href:e.href?e.href:null,children:e.name})}))})})})}},68117:function(e,t,n){n.d(t,{Js:function(){return p},Od:function(){return d},at:function(){return u},tS:function(){return l}});var r=n(74165),s=n(15861),a=n(41738),c=n(74569),o=n.n(c),i=n(70895),d=function(){return function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t,n){var s,c,d,l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:a.Ty}),s=n(),c=s.userLogin.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,o().get("".concat(i._,"/product"),d);case 6:l=e.sent,u=l.data,t({type:a.js,payload:u}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:a.Vh,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=(0,s.Z)((0,r.Z)().mark((function t(n,s){var c,d,l,u,p;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:a.Jy}),c=s(),d=c.userLogin.userInfo,l={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(d.token)}},t.next=6,o().post("".concat(i._,"/product"),e,l);case 6:u=t.sent,p=u.data,n({type:a.s$,payload:p}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:a.Wt,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,s.Z)((0,r.Z)().mark((function t(n,s){var c,d,l,u,p;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:a.W4}),c=s(),d=c.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.token)}},t.next=6,o().post("".concat(i._,"/product/qrId"),{qrId:e},l);case 6:u=t.sent,p=u.data,n({type:a.X5,payload:p}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:a.Ao,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,s.Z)((0,r.Z)().mark((function t(n,s){var c,d,l,u,p;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:a.L7}),c=s(),d=c.userLogin.userInfo,l={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(d.token)}},t.next=6,o().put("".concat(i._,"/product"),e,l);case 6:u=t.sent,p=u.data,n({type:a.zk,payload:p}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:a.ki,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()}},65920:function(e,t,n){n.d(t,{s:function(){return r}});var r="https://ims-backend-app.herokuapp.com/public/images/"},85037:function(e,t,n){n.r(t);var r=n(29439),s=n(72791),a=n(78983),c=n(73292),o=n.n(c),i=n(68117),d=n(59434),l=n(65920),u=n(50910),p=n(80184);t.default=function(){var e=(0,d.I0)(),t=(0,s.useState)(""),n=(0,r.Z)(t,2),c=(n[0],n[1]),x=(0,s.useState)(!0),h=(0,r.Z)(x,2),f=h[0],m=h[1],g=(0,s.useState)(!1),j=(0,r.Z)(g,2),b=j[0],y=j[1],v=(0,d.v9)((function(e){return e.findProduct})),k=(v.loading,v.product);v.error;console.log(k);return(0,p.jsxs)("main",{children:[(0,p.jsx)(u.Z,{breadCrumbsInfo:[{name:"Home",href:"/"},{name:"Inventory"},{name:"Scan Equipment"}]}),(0,p.jsxs)(a.KB,{children:[(0,p.jsx)(a.rb,{children:(0,p.jsx)(a.b7,{md:12,className:"mb-4",children:(0,p.jsx)("h3",{children:"Scan Qr Code"})})}),(0,p.jsxs)(a.rb,{children:[f?(0,p.jsx)(a.b7,{md:4,children:(0,p.jsx)(o(),{delay:300,style:{width:"100%"},onError:function(e){console.log(e)},onScan:function(t){t&&(c(t),e((0,i.at)(t)),c(""),m(!1),y(!0))}})}):(0,p.jsx)(a.b7,{md:4,className:"d-flex justify-content-center align-items-center",children:(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{class:"text-gray-900 font-bold text-2xl text-center",children:"Scanned"}),(0,p.jsx)("button",{className:"py-2 px-4 mt-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",onClick:function(){m(!0),y(!1)},children:"Scan Again"})]})}),(0,p.jsx)(a.b7,{md:8,children:b&&(0,p.jsx)("div",{class:"bg-white overflow-hidden",children:(0,p.jsxs)(a.rb,{children:[(0,p.jsx)(a.b7,{md:4,children:(0,p.jsx)("img",{style:{height:"100% ",width:"100%",objectFit:"cover"},src:"".concat(l.s).concat(k&&k.product.productImage),alt:k&&k.product.name})}),(0,p.jsxs)(a.b7,{md:7,children:[(0,p.jsx)(a.rb,{children:(0,p.jsx)(a.b7,{md:12,children:(0,p.jsx)("h1",{class:"text-gray-900 font-bold text-2xl text-center",children:k&&k.product.name&&k.product.name})})}),(0,p.jsxs)(a.rb,{children:[(0,p.jsx)(a.b7,{md:6,children:(0,p.jsxs)("div",{className:"d-flex",children:[(0,p.jsx)("h3",{class:"text-gray-900 font-bold text-xl",children:"Lab:"}),(0,p.jsx)("div",{children:(0,p.jsx)("p",{class:"text-gray-600 text-xl ml-4",children:k&&k.product.lab.name})})]})}),(0,p.jsx)(a.b7,{md:6,children:(0,p.jsxs)("div",{className:"d-flex",children:[(0,p.jsx)("h3",{class:"text-gray-900 font-bold text-xl",children:"Added By:"}),(0,p.jsx)("div",{children:(0,p.jsx)("p",{class:"text-gray-600 text-xl ml-4",children:k&&k.product.user&&k.product.user.name&&k.product.user.name})})]})})]}),(0,p.jsxs)(a.rb,{children:[(0,p.jsxs)(a.b7,{md:6,children:[(0,p.jsx)("h3",{class:"text-gray-900 font-bold text-xl",children:"Specification:"}),k&&k.product.specification&&k.product.specification.map((function(e){return(0,p.jsxs)("div",{class:"flex item-center  mt-3",children:[(0,p.jsx)("h1",{class:"text-gray-700 font-bold text-xl",children:e.key}),(0,p.jsx)("p",{class:"text-gray-600 text-xl ml-4",children:e.value})]},e._id)}))]}),(0,p.jsxs)(a.b7,{md:6,children:[(0,p.jsx)("h3",{class:"text-gray-900 font-bold text-xl",children:"Qr Code"}),(0,p.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,p.jsx)("a",{href:k&&k.product.imageUrl,download:!0,children:(0,p.jsx)("img",{style:{width:"7rem",height:"7rem"},src:k&&k.product.imageUrl,alt:k&&k.product.name})})})]})]})]})]})})})]})]})]})}}}]);
//# sourceMappingURL=5037.0932dd12.chunk.js.map