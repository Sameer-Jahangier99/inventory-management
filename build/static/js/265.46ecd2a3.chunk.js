"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[265],{50910:function(e,n,r){r(72791);var t=r(78983),a=r(80184);n.Z=function(e){return(0,a.jsx)("div",{className:"row bg-white pt-2 pl-2 mb-4 ",style:{margin:"0px 1px"},children:(0,a.jsx)("div",{className:"col-12  ",children:(0,a.jsx)(t.fj,{className:"d-flex  align-items-center",style:{"--cui-breadcrumb-divider":"'>'"},children:e.breadCrumbsInfo&&e.breadCrumbsInfo.length&&e.breadCrumbsInfo.map((function(e){return(0,a.jsx)(t.Sd,{href:e.href?e.href:null,children:e.name})}))})})})}},90265:function(e,n,r){r.r(n);var t=r(74165),a=r(15861),s=r(29439),o=r(72791),l=r(78983),c=r(59434),i=r(70895),u=r(74569),d=r.n(u),f=r(50910),m=r(80184);n.default=function(){var e=(0,o.useState)(!1),n=(0,s.Z)(e,2),r=n[0],u=n[1],h=(0,o.useState)([]),x=(0,s.Z)(h,2),b=x[0],j=x[1],p=(0,o.useState)(""),g=(0,s.Z)(p,2),v=g[0],y=g[1],w=(0,o.useState)(""),Z=(0,s.Z)(w,2),N=Z[0],S=Z[1],C=(0,o.useState)(""),_=(0,s.Z)(C,2),A=_[0],R=_[1],k=(0,o.useState)(),q=(0,s.Z)(k,2),I=q[0],O=q[1],V=(0,o.useState)(""),Y=(0,s.Z)(V,2),T=Y[0],L=Y[1],D=(0,o.useState)("Software"),E=(0,s.Z)(D,2),F=E[0],X=(E[1],(0,c.v9)((function(e){return e.userLogin})).userInfo),z=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,a,s,o,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),u(!0),r=typeof F,console.log(r),e.prev=4,a={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(X.token)}},s=X._id,console.log(s),e.next=10,d().post("".concat(i._,"/request/addFacultyRequest"),{user:s,name:v,courseCode:N,courseTitle:A,numberOfStudent:I,lab:T,type:F},a);case 10:o=e.sent,(l=o.data)&&(u(!1),console.log(l)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0);case 18:console.log("submitted"),console.log(v),console.log(T),console.log(N),console.log(A),console.log(I),console.log(F);case 25:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(n){return e.apply(this,arguments)}}();return(0,o.useEffect)((0,a.Z)((0,t.Z)().mark((function e(){var n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d().get("".concat(i._,"/lab/"));case 3:n=e.sent,(r=n.data)&&j(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("main",{children:[(0,m.jsx)(f.Z,{breadCrumbsInfo:[{name:"Home",href:"/"},{name:"Add Request"}]}),(0,m.jsx)("div",{className:"bg-white p-3 shadow-sm rounded-sm mt-3",children:(0,m.jsx)(l.rb,{className:"justify-content-center",children:(0,m.jsx)(l.b7,{md:12,className:"bg-white rounded-lg",children:(0,m.jsxs)(l.lx,{className:"row mx-4 g-3",onSubmit:z,children:[(0,m.jsx)(l.b7,{md:12,children:(0,m.jsx)("p",{className:"text-gray-800 dark:text-gray-200 text-xl font-bold",children:"Add Request"})}),(0,m.jsx)(l.b7,{md:4,children:(0,m.jsxs)(l.YR,{className:"mb-3",children:[(0,m.jsx)(l.wV,{children:(0,m.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})}),(0,m.jsx)(l.jO,{placeholder:"Name of Software",value:v,onChange:function(e){return y(e.target.value)},required:!0})]})}),(0,m.jsx)(l.b7,{md:4,children:(0,m.jsxs)(l.YR,{className:"mb-4",children:[(0,m.jsx)(l.wV,{children:(0,m.jsx)("i",{className:"fas fa-user-tag"})}),(0,m.jsxs)(l.LX,{"aria-label":"Default select example",children:[(0,m.jsx)("option",{children:"Request Type"}),(0,m.jsx)("option",{value:"software",children:"software"})]})]})}),(0,m.jsx)(l.b7,{md:4,children:(0,m.jsxs)(l.YR,{className:"mb-3",children:[(0,m.jsx)(l.wV,{children:(0,m.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})}),(0,m.jsx)(l.jO,{placeholder:"Course Code",value:N,onChange:function(e){return S(e.target.value)},required:!0})]})}),(0,m.jsx)(l.b7,{md:4,children:(0,m.jsxs)(l.YR,{className:"mb-4",children:[(0,m.jsx)(l.wV,{children:(0,m.jsx)("i",{className:"fas fa-user-tag"})}),(0,m.jsxs)(l.LX,{"aria-label":"Default select example",onChange:function(e){return L(e.target.value)},children:[(0,m.jsx)("option",{children:"Select Lab"}),b&&b.map((function(e){return(0,m.jsx)("option",{value:e.name,children:e.name})}))]})]})}),(0,m.jsx)(l.b7,{md:4,children:(0,m.jsxs)(l.YR,{className:"mb-3",children:[(0,m.jsx)(l.wV,{children:(0,m.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})}),(0,m.jsx)(l.jO,{placeholder:"Course Title",value:A,onChange:function(e){return R(e.target.value)},required:!0})]})}),(0,m.jsx)(l.b7,{md:4,children:(0,m.jsxs)(l.YR,{className:"mb-3",children:[(0,m.jsx)(l.wV,{children:(0,m.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})}),(0,m.jsx)(l.jO,{placeholder:" Number of student",type:"Number",value:I,onChange:function(e){return O(e.target.value)},required:!0})]})}),(0,m.jsx)(l.rb,{className:"flex items-center justify-start mb-3",children:(0,m.jsx)(l.b7,{md:3,xs:8,children:(0,m.jsx)("button",{type:"submit",className:"py-2 px-4 mt-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",children:r?"Adding...":"Add Request"})})})]})})})})]})})}},30907:function(e,n,r){function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}r.d(n,{Z:function(){return t}})},83878:function(e,n,r){function t(e){if(Array.isArray(e))return e}r.d(n,{Z:function(){return t}})},25267:function(e,n,r){function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(n,{Z:function(){return t}})},29439:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(83878);var a=r(40181),s=r(25267);function o(e,n){return(0,t.Z)(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,s=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(t=r.next()).done)&&(s.push(t.value),!n||s.length!==n);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return s}}(e,n)||(0,a.Z)(e,n)||(0,s.Z)()}},40181:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(30907);function a(e,n){if(e){if("string"===typeof e)return(0,t.Z)(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,t.Z)(e,n):void 0}}}}]);
//# sourceMappingURL=265.46ecd2a3.chunk.js.map