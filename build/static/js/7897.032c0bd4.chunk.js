"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7897],{50910:function(e,n,t){t(72791);var s=t(78983),r=t(80184);n.Z=function(e){return(0,r.jsx)("div",{className:"row bg-white pt-2 pl-2 mb-4 ",style:{margin:"0px 1px"},children:(0,r.jsx)("div",{className:"col-12  ",children:(0,r.jsx)(s.fj,{className:"d-flex  align-items-center",style:{"--cui-breadcrumb-divider":"'>'"},children:e.breadCrumbsInfo&&e.breadCrumbsInfo.length&&e.breadCrumbsInfo.map((function(e){return(0,r.jsx)(s.Sd,{href:e.href?e.href:null,children:e.name})}))})})})}},44439:function(e,n,t){t.r(n);var s=t(74165),r=t(15861),a=t(29439),c=t(72791),l=t(79271),i=t(74569),d=t.n(i),o=t(70895),u=t(59434),m=t(78983),h=t(92266),x=(t(830),t(50910)),f=t(80184);n.default=function(){var e=(0,l.UO)(),n=(0,l.k6)(),t=(0,c.useState)(e.id),i=(0,a.Z)(t,2),b=i[0],p=(i[1],(0,c.useState)()),j=(0,a.Z)(p,2),N=j[0],v=j[1],y=(0,c.useState)(!1),k=(0,a.Z)(y,2),w=k[0],Z=k[1],g=(0,c.useState)(new Date),C=(0,a.Z)(g,2),S=C[0],_=C[1],D=(0,c.useState)(),q=(0,a.Z)(D,2),A=q[0],I=q[1],T=(0,c.useState)(),B=(0,a.Z)(T,2),L=B[0],z=B[1],R=(0,c.useState)(),U=(0,a.Z)(R,2),E=U[0],F=U[1],G=(0,c.useState)(!1),H=(0,a.Z)(G,2),O=H[0],P=H[1],J=(0,u.v9)((function(e){return e.userLogin})).userInfo;(0,c.useEffect)((0,r.Z)((0,s.Z)().mark((function e(){var n,t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(J.token)}},e.next=3,d().get("".concat(o._,"/request/").concat(b),n);case 3:t=e.sent,r=t.data,v(r[0]);case 6:case"end":return e.stop()}}),e)}))),[]),console.log(N);var K=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t,r){var a,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),L){e.next=3;break}return e.abrupt("return");case 3:if(!L){e.next=11;break}return P(!0),a={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(J.token)}},e.next=8,d().post("".concat(o._,"/request/deadline/").concat(r),{ApiDate:L},a);case 8:c=e.sent,c.data&&(P(!1),n.push("noc/approve/requests"));case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("main",{className:"main-div",children:[(0,f.jsx)(x.Z,{breadCrumbsInfo:[{name:"Home",href:"/"},{name:"Requests"},{name:"Request Time"}]}),(0,f.jsx)(m.rb,{children:(0,f.jsx)(m.b7,{className:"mb-3",children:(0,f.jsx)("button",{style:{background:"#3C4B64"},class:" text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300",onClick:function(){return n.push("/noc/AllApprovedcomplaints")},children:"Go Back"})})}),(0,f.jsxs)(m.rb,{className:"d-flex justify-content-center",children:[(0,f.jsxs)(m.b7,{md:9,className:"bg-white p-3 shadow-sm rounded-sm ",children:[(0,f.jsxs)(m.rb,{children:[(0,f.jsxs)(m.b7,{md:6,className:"d-flex",children:[(0,f.jsx)("p",{className:"font-bold",children:"Title: "}),(0,f.jsx)("p",{className:"ml-2 font-bold",children:N&&N.title&&N.title})]}),E&&(0,f.jsxs)(m.b7,{md:6,className:"d-flex justify-content-center",children:[(0,f.jsx)("p",{className:"font-bold",children:"Selected Date: "}),(0,f.jsx)("p",{className:"ml-2",children:A})]})]}),(0,f.jsx)(m.rb,{children:(0,f.jsxs)(m.b7,{md:8,children:[(0,f.jsx)(m.rb,{children:(0,f.jsxs)(m.b7,{md:12,className:"d-flex",children:[(0,f.jsx)("h6",{children:"Complaint Note: "}),(0,f.jsx)("p",{className:"ml-2",children:N&&N.note&&N.note})]})}),(0,f.jsx)(m.rb,{children:(0,f.jsxs)(m.b7,{md:12,className:"d-flex",children:[(0,f.jsx)("h6",{children:"Complaint Type: "}),(0,f.jsx)("p",{className:"ml-2",children:N&&N.type})]})}),(0,f.jsx)(m.rb,{children:(0,f.jsxs)(m.b7,{md:12,className:"d-flex",children:[(0,f.jsx)("h6",{children:"Lab: "}),(0,f.jsx)("p",{className:"ml-2",children:N&&N.lab&&N.lab})]})})]})}),(0,f.jsxs)(m.rb,{children:[(0,f.jsx)(m.b7,{md:4,className:"",children:(0,f.jsx)(m.u5,{color:"primary",className:"text-white w-full",onClick:function(){return Z(!0)},children:"Select Date"})}),(0,f.jsx)(m.b7,{md:4}),(0,f.jsx)(m.b7,{md:4,className:"d-flex justify-content-end",children:(0,f.jsx)(m.u5,{color:"primary",className:"text-white w-full",onClick:function(e){return K(e,N&&N._id)},children:O?"Sumbiting...":"Submit"})})]})]}),(0,f.jsx)(m.b7,{md:3,className:"d-flex justify-content-center",children:w&&(0,f.jsx)(h.ZP,{onChange:function(e){return function(e){I(e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),F(!0),_(e),z(e)}(e)},value:S})})]})]})})}}}]);
//# sourceMappingURL=7897.032c0bd4.chunk.js.map