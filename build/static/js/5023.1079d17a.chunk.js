"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5023],{50910:function(e,n,t){t(72791);var r=t(78983),a=t(80184);n.Z=function(e){return(0,a.jsx)("div",{className:"row bg-white pt-2 pl-2 mb-4 ",style:{margin:"0px 1px"},children:(0,a.jsx)("div",{className:"col-12  ",children:(0,a.jsx)(r.fj,{className:"d-flex  align-items-center",style:{"--cui-breadcrumb-divider":"'>'"},children:e.breadCrumbsInfo&&e.breadCrumbsInfo.length&&e.breadCrumbsInfo.map((function(e){return(0,a.jsx)(r.Sd,{href:e.href?e.href:null,children:e.name})}))})})})}},68117:function(e,n,t){t.d(n,{Js:function(){return f},Od:function(){return l},at:function(){return d},tS:function(){return u}});var r=t(74165),a=t(15861),s=t(41738),c=t(74569),o=t.n(c),i=t(70895),l=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a,c,l,u,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:s.Ty}),a=t(),c=a.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,o().get("".concat(i._,"/product"),l);case 6:u=e.sent,d=u.data,n({type:s.js,payload:d}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),n({type:s.Vh,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,t){return e.apply(this,arguments)}}()},u=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,a){var c,l,u,d,f;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:s.Jy}),c=a(),l=c.userLogin.userInfo,u={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(l.token)}},n.next=6,o().post("".concat(i._,"/product"),e,u);case 6:d=n.sent,f=d.data,t({type:s.s$,payload:f}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),t({type:s.Wt,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,t){return n.apply(this,arguments)}}()},d=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,a){var c,l,u,d,f;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:s.W4}),c=a(),l=c.userLogin.userInfo,u={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}},n.next=6,o().post("".concat(i._,"/product/qrId"),{qrId:e},u);case 6:d=n.sent,f=d.data,t({type:s.X5,payload:f}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),t({type:s.Ao,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,t){return n.apply(this,arguments)}}()},f=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,a){var c,l,u,d,f;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:s.L7}),c=a(),l=c.userLogin.userInfo,u={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(l.token)}},n.next=6,o().put("".concat(i._,"/product"),e,u);case 6:d=n.sent,f=d.data,t({type:s.zk,payload:f}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),t({type:s.ki,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,t){return n.apply(this,arguments)}}()}},65023:function(e,n,t){t.r(n);var r=t(93433),a=t(74165),s=t(15861),c=t(29439),o=t(72791),i=t(20741),l=(t(73292),t(78983)),u=t(68117),d=t(59434),f=t(50910),p=t(74569),m=t.n(p),x=t(70895),h=t(80184);n.default=function(){var e=(0,o.useState)(""),n=(0,c.Z)(e,2),t=n[0],p=n[1],g=(0,o.useState)(),j=(0,c.Z)(g,2),b=j[0],y=j[1],v=(0,o.useState)(""),w=(0,c.Z)(v,2),Z=w[0],N=w[1],k=(0,o.useState)([]),S=(0,c.Z)(k,2),C=S[0],_=S[1],I=(0,o.useState)(""),A=(0,c.Z)(I,2),L=A[0],R=A[1],D=(0,o.useState)(""),V=(0,c.Z)(D,2),E=V[0],T=V[1],Y=(0,o.useState)(""),z=(0,c.Z)(Y,2),O=z[0],q=z[1],B=(0,o.useState)(null),G=(0,c.Z)(B,2),H=(G[0],G[1]),J=(0,o.useState)([]),P=(0,c.Z)(J,2),F=P[0],U=P[1],W=(0,o.useState)(),X=(0,c.Z)(W,2),M=(X[0],X[1],(0,o.useState)("")),Q=(0,c.Z)(M,2),$=Q[0],K=Q[1],ee=(0,o.useRef)(null),ne=((0,o.useRef)(null),(0,d.I0)()),te=(0,d.v9)((function(e){return e.addProduct})),re=te.loading,ae=te.product,se=te.error,ce=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,t=Date.now().toString(36)+Math.random().toString(36),e.next=5,i.toDataURL(t);case 5:r=e.sent,p(r),y(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();(0,o.useEffect)((0,s.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m().get("".concat(x._,"/lab/"));case 2:n=e.sent,t=n.data,U(t&&t);case 5:case"end":return e.stop()}}),e)}))),[]);var oe=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),console.log(C),$&&Z&&O&&C&&((r=new FormData).append("productImage",$,$.name),r.append("name",Z),r.append("specification",JSON.stringify(C)),r.append("lab",O),r.append("imageUrl",t),r.append("qrId",b),ne((0,u.tS)(r)),console.log(r));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("main",{className:"main-div",children:[(0,h.jsx)(f.Z,{breadCrumbsInfo:[{name:"Home",href:"/"},{name:"Inventory"},{name:"Add Equipment"}]}),(0,h.jsxs)("div",{className:"bg-white p-3 shadow-sm rounded-sm mt-3",children:[(0,h.jsx)(l.rb,{children:(0,h.jsx)(l.b7,{md:12,children:se&&(0,h.jsx)(l.Gc,{color:"danger",style:{textAlign:"center"},children:se})})}),(0,h.jsx)(l.rb,{children:(0,h.jsx)(l.b7,{md:12,children:ae&&(0,h.jsx)(l.Gc,{color:"success",style:{textAlign:"center"},children:ae.message})})}),(0,h.jsxs)(l.rb,{className:"justify-content-center",children:[(0,h.jsx)(l.b7,{md:12,children:(0,h.jsx)("p",{className:"text-gray-800 dark:text-gray-200 text-xl font-bold",children:"Add New Product"})}),(0,h.jsx)(l.b7,{md:12,className:"bg-white rounded-lg",children:(0,h.jsxs)(l.lx,{className:"row mx-4 g-3",children:[(0,h.jsx)(l.b7,{md:6,children:(0,h.jsxs)(l.YR,{className:"mb-3",children:[(0,h.jsx)(l.wV,{children:(0,h.jsx)("i",{class:"fas fa-signature"})}),(0,h.jsx)(l.jO,{placeholder:"Enter Name",value:Z,onChange:function(e){return N(e.target.value)}})]})}),(0,h.jsx)(l.b7,{md:6,children:(0,h.jsxs)(l.YR,{className:"mb-4",children:[(0,h.jsx)(l.wV,{children:(0,h.jsx)("i",{class:"fas fa-laptop"})}),(0,h.jsxs)(l.LX,{"aria-label":"Default select example",onChange:function(e){q(e.target.value)},children:[(0,h.jsx)("option",{children:"Select Lab"}),F.length&&F.map((function(e){return(0,h.jsx)("option",{value:e._id,children:e.name})}))]})]})}),(0,h.jsxs)(l.rb,{className:"my-4",children:[(0,h.jsx)(l.b7,{md:3,children:(0,h.jsx)(l.YR,{children:(0,h.jsx)("button",{className:"py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg",onClick:function(e){return ce(e)},children:"Generate Qr Code"})})}),(0,h.jsx)(l.b7,{md:3,className:"mt-0",children:(0,h.jsx)(l.YR,{className:"d-flex justify-content-center align-items-center",children:t?(0,h.jsx)("a",{href:t,download:!0,children:(0,h.jsx)("img",{src:t,alt:"img"})}):null})}),(0,h.jsx)(l.b7,{md:6,children:(0,h.jsx)("input",{ref:ee,onChange:function(){var e;(null===(e=ee.current)||void 0===e?void 0:e.files)&&H(ee.current.files[0].name),K(ee.current.files[0])},type:"file"})})]}),(0,h.jsx)(l.rb,{children:(0,h.jsx)(l.b7,{md:12,children:(0,h.jsx)("p",{className:"text-gray-800 dark:text-gray-200 text-xl font-bold",children:"Add Hardware"})})}),(0,h.jsx)(l.rb,{className:"my-4",children:(0,h.jsxs)(l.b7,{md:12,className:"d-flex justify-content-center align-items-center",children:[(0,h.jsx)(l.b7,{md:4,className:"",children:(0,h.jsxs)(l.YR,{children:[(0,h.jsx)(l.wV,{children:(0,h.jsx)("i",{class:"fas fa-star"})}),(0,h.jsx)(l.jO,{placeholder:"Enter Name",value:L,onChange:function(e){return R(e.target.value)}})]})}),(0,h.jsx)(l.b7,{md:1}),(0,h.jsx)(l.b7,{md:5,className:"",children:(0,h.jsxs)(l.YR,{children:[(0,h.jsx)(l.wV,{children:(0,h.jsx)("i",{class:"fas fa-star"})}),(0,h.jsx)(l.jO,{placeholder:"Enter Value",value:E,onChange:function(e){return T(e.target.value)}})]})}),(0,h.jsx)(l.b7,{md:2,className:"d-flex justify-content-center align-items-center",children:(0,h.jsx)("button",{className:" ml-2 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg",onClick:function(e){return function(e,n,t){if(e.preventDefault(),n&&t){var a={key:n,value:t};_([].concat((0,r.Z)(C),[a]))}}(e,L,E)},children:"Add"})})]})}),(0,h.jsx)(l.rb,{children:(0,h.jsx)(l.b7,{md:12,children:C&&C.map((function(e){return(0,h.jsx)(l.xH,{className:"d-flex justify-content-center mt-2",children:(0,h.jsxs)(l.sl,{className:"d-flex",children:[(0,h.jsx)("div",{className:"mx-3",children:(0,h.jsxs)("p",{children:[(0,h.jsx)("span",{className:"text-gray-800 dark:text-gray-200 text-md font-bold",children:"Name:\xa0 \xa0"}),e.key]})}),(0,h.jsx)("div",{className:"mx-3",children:(0,h.jsxs)("p",{children:[(0,h.jsx)("span",{className:"text-gray-800 dark:text-gray-200 text-md font-bold",children:"Value: \xa0 \xa0"}),e.value]})})]})})}))})}),(0,h.jsx)(l.rb,{className:"flex items-center justify-end my-4",children:(0,h.jsx)(l.b7,{md:3,xs:8,children:(0,h.jsx)("button",{onClick:oe,className:"py-2 px-4 mt-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",children:re?"Loading":"Add Product"})})})]})})]})]})]})})}},59199:function(e,n,t){function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}t.d(n,{Z:function(){return r}})},93433:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(30907);var a=t(59199),s=t(40181);function c(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,s.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=5023.1079d17a.chunk.js.map