"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7062],{50910:function(e,s,n){n(72791);var t=n(78983),r=n(80184);s.Z=function(e){return(0,r.jsx)("div",{className:"row bg-white pt-2 pl-2 mb-4 ",style:{margin:"0px 1px"},children:(0,r.jsx)("div",{className:"col-12  ",children:(0,r.jsx)(t.fj,{className:"d-flex  align-items-center",style:{"--cui-breadcrumb-divider":"'>'"},children:e.breadCrumbsInfo&&e.breadCrumbsInfo.length&&e.breadCrumbsInfo.map((function(e){return(0,r.jsx)(t.Sd,{href:e.href?e.href:null,children:e.name})}))})})})}},80789:function(e,s,n){n.r(s);var t=n(74165),r=n(15861),a=n(29439),l=n(72791),c=n(79271),i=n(74569),d=n.n(i),o=n(70895),m=n(59434),h=n(78983),u=n(92266),x=(n(830),n(50910)),f=n(80184);s.default=function(){var e=(0,c.UO)(),s=(0,c.k6)(),n=(0,l.useState)(e.id),i=(0,a.Z)(n,2),j=i[0],p=(i[1],(0,l.useState)()),b=(0,a.Z)(p,2),N=b[0],y=b[1],w=(0,l.useState)(!1),v=(0,a.Z)(w,2),k=v[0],g=v[1],C=(0,l.useState)(new Date),Z=(0,a.Z)(C,2),S=Z[0],_=Z[1],I=(0,l.useState)(),A=(0,a.Z)(I,2),D=A[0],B=A[1],T=(0,l.useState)(),L=(0,a.Z)(T,2),z=L[0],E=L[1],O=(0,l.useState)(),U=(0,a.Z)(O,2),q=U[0],F=U[1],G=(0,l.useState)(!1),H=(0,a.Z)(G,2),P=H[0],J=H[1],K=(0,m.v9)((function(e){return e.userLogin})).userInfo;(0,l.useEffect)((0,r.Z)((0,t.Z)().mark((function e(){var s,n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(K.token)}},e.next=3,d().get("".concat(o._,"/complaint/").concat(j),s);case 3:n=e.sent,r=n.data,y(r);case 6:case"end":return e.stop()}}),e)}))),[]);var M=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(n,r){var a,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),z){e.next=3;break}return e.abrupt("return");case 3:if(!z){e.next=11;break}return J(!0),a={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(K.token)}},e.next=8,d().post("".concat(o._,"/complaint/deadline/").concat(r),{ApiDate:z},a);case 8:l=e.sent,l.data&&(J(!1),s.push("/noc/AllApprovedcomplaints"));case 11:case"end":return e.stop()}}),e)})));return function(s,n){return e.apply(this,arguments)}}();return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("main",{className:"main-div",children:[(0,f.jsx)(x.Z,{breadCrumbsInfo:[{name:"Home",href:"/"},{name:"Complaints"},{name:"Complaint Time"}]}),(0,f.jsx)(h.rb,{children:(0,f.jsx)(h.b7,{className:"mb-3",children:(0,f.jsx)("button",{style:{background:"#3C4B64"},class:" text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300",onClick:function(){return s.push("/noc/AllApprovedcomplaints")},children:"Go Back"})})}),(0,f.jsxs)(h.rb,{className:"d-flex justify-content-center",children:[(0,f.jsxs)(h.b7,{md:9,className:"bg-white p-3 shadow-sm rounded-sm ",children:[(0,f.jsxs)(h.rb,{children:[(0,f.jsxs)(h.b7,{md:6,className:"d-flex",children:[(0,f.jsx)("p",{className:"font-bold",children:"Title: "}),(0,f.jsx)("p",{className:"ml-2 font-bold",children:N&&N.title&&N.title})]}),q&&(0,f.jsxs)(h.b7,{md:6,className:"d-flex justify-content-center",children:[(0,f.jsx)("p",{className:"font-bold",children:"Selected Date: "}),(0,f.jsx)("p",{className:"ml-2",children:D})]})]}),(0,f.jsx)(h.rb,{children:(0,f.jsxs)(h.b7,{md:8,children:[(0,f.jsxs)(h.rb,{children:[(0,f.jsxs)(h.b7,{md:12,className:"d-flex align-items-center my-2",children:[(0,f.jsx)("div",{className:"font-bold",children:"Complaint Type: "}),(0,f.jsx)("div",{className:"ml-2",children:N&&N.type})]}),(0,f.jsx)("hr",{className:"m-0"})]}),(0,f.jsxs)(h.rb,{children:[(0,f.jsxs)(h.b7,{md:12,className:"d-flex align-items-center my-2",children:[(0,f.jsx)("div",{className:"font-bold",children:"Complaint Note: "}),N&&"software"==N.type&&(0,f.jsxs)("div",{className:"ml-2 ",children:[" ",N&&"software"==N.type&&N.software&&N.software.note]}),N&&"network"==N.type&&(0,f.jsxs)("div",{className:"ml-2 ",children:[" ",N&&"network"==N.type&&N.network&&N.network.note]}),N&&"other"==N.type&&(0,f.jsxs)("div",{className:"ml-2 ",children:[" ",N&&"other"==N.type&&N.other&&N.other.note]}),N&&"hardware"==N.type&&(0,f.jsxs)("div",{className:"ml-2 ",children:[" ",N&&"hardware"==N.type&&N.hardware&&N.hardware.note]})]}),(0,f.jsx)("hr",{className:"m-0"})]}),(0,f.jsxs)(h.rb,{children:[(0,f.jsxs)(h.b7,{md:12,className:"d-flex align-items-center my-2",children:[(0,f.jsx)("div",{className:"font-bold",children:"Added By: "}),(0,f.jsx)("div",{className:"ml-2 ",children:N&&N.user&&N.user.name})]}),(0,f.jsx)("hr",{className:"m-0"})]}),N&&"network"==N.type&&(0,f.jsxs)(h.rb,{children:[(0,f.jsxs)(h.b7,{md:12,className:"d-flex align-items-center my-2",children:[(0,f.jsx)("div",{className:"font-bold",children:"Network Issue: "}),(0,f.jsx)("div",{className:"ml-2 ",children:N&&N.network&&N.network.type})]}),(0,f.jsx)("hr",{className:"m-0"})]}),N&&"other"==N.type&&(0,f.jsxs)(h.rb,{children:[(0,f.jsxs)(h.b7,{md:12,className:"d-flex align-items-center my-2",children:[(0,f.jsx)("div",{className:"font-bold",children:"Other Equipement Issue: "}),(0,f.jsx)("div",{className:"ml-2 ",children:N&&N.other&&N.other.type})]}),(0,f.jsx)("hr",{className:"m-0"})]}),(0,f.jsxs)(h.rb,{children:[(0,f.jsxs)(h.b7,{md:12,className:"d-flex align-items-center my-2",children:[(0,f.jsx)("div",{className:"font-bold",children:"Lab: "}),(0,f.jsx)("div",{className:"ml-2",children:N&&N.lab&&N.lab.name})]}),(0,f.jsx)("hr",{className:"m-0"})]}),N&&"software"==N.type&&(0,f.jsx)(h.rb,{className:"my-2",children:(0,f.jsxs)(h.b7,{md:12,className:"",children:[(0,f.jsx)("h6",{className:"font-bold",children:"Issues In Softwares: "}),N&&"software"==N.type?(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:"",children:N.software.softwares.length&&N.software.softwares.map((function(e,s){return(0,f.jsxs)("div",{style:{display:"block"},children:[s+1," \xa0 ",e," \xa0"]})}))})}):null]})})]})}),(0,f.jsxs)(h.rb,{children:[(0,f.jsx)(h.b7,{md:4,className:"",children:(0,f.jsx)(h.u5,{color:"primary",className:"text-white w-full",onClick:function(){return g(!0)},children:"Select Date"})}),(0,f.jsx)(h.b7,{md:4}),(0,f.jsx)(h.b7,{md:4,className:"d-flex justify-content-end",children:(0,f.jsx)(h.u5,{color:"primary",className:"text-white w-full",onClick:function(e){return M(e,N&&N._id)},children:P?"Sumbiting...":"Submit"})})]})]}),(0,f.jsx)(h.b7,{md:3,className:"d-flex justify-content-center",children:k&&(0,f.jsx)(u.ZP,{onChange:function(e){return function(e){B(e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),F(!0),_(e),E(e)}(e)},value:S})})]})]})})}}}]);
//# sourceMappingURL=7062.cfbc6204.chunk.js.map