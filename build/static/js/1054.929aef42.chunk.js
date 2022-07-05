"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1054],{50910:function(e,t,r){r(72791);var n=r(78983),a=r(80184);t.Z=function(e){return(0,a.jsx)("div",{className:"row bg-white pt-2 pl-2 mb-4 ",style:{margin:"0px 1px"},children:(0,a.jsx)("div",{className:"col-12  ",children:(0,a.jsx)(n.fj,{className:"d-flex  align-items-center",style:{"--cui-breadcrumb-divider":"'>'"},children:e.breadCrumbsInfo&&e.breadCrumbsInfo.length&&e.breadCrumbsInfo.map((function(e){return(0,a.jsx)(n.Sd,{href:e.href?e.href:null,children:e.name})}))})})})}},25158:function(e,t,r){r.d(t,{Kf:function(){return l},az:function(){return d},ej:function(){return p}});var n=r(74165),a=r(15861),s=r(39892),c=r(74569),i=r.n(c),o=r(70895),l=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var c,l,d,p,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:s.x$}),c=a(),l=c.userLogin.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}},t.next=6,i().post("".concat(o._,"/complaint"),e,d);case 6:p=t.sent,u=p.data,r({type:s.My,payload:u}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:s.UL,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var c,l,d,p,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:s.GV}),c=a(),l=c.userLogin.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}},t.next=6,i().post("".concat(o._,"/complaint/approvedByDco"),{_id:e},d);case 6:p=t.sent,u=p.data,r({type:s.bc,payload:u}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:s.fN,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,a){var c,l,d,p,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:s.bs}),c=a(),l=c.userLogin.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}},t.next=6,i().post("".concat(o._,"/complaint/rejectedByDco"),{_id:e},d);case 6:p=t.sent,u=p.data,r({type:s.ji,payload:u}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:s.hh,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()}},98269:function(e,t,r){r.d(t,{x:function(){return n}});var n=function(e){return new Date(e).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}},71054:function(e,t,r){r.r(t);var n=r(74165),a=r(15861),s=r(29439),c=r(72791),i=r(59434),o=(r(25158),r(78983)),l=r(74569),d=r.n(l),p=r(70895),u=r(98269),m=r(50910),x=r(80184);t.default=function(){(0,i.I0)();var e=(0,i.v9)((function(e){return e.allComplaint})),t=(e.error,e.loading,e.complaints),r=(0,i.v9)((function(e){return e.userLogin})).userInfo,l=(0,c.useState)(t),f=(0,s.Z)(l,2),h=f[0],y=f[1],v=(0,c.useState)([]),g=(0,s.Z)(v,2),j=(g[0],g[1]),w=(0,c.useState)(!1),N=(0,s.Z)(w,2),b=N[0];N[1];(0,c.useEffect)((0,a.Z)((0,n.Z)().mark((function e(){var t,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.token)}},e.next=3,d().get("".concat(p._,"/complaint"),t);case 3:a=e.sent,s=a.data,y(s&&s.data),j(s&&s.data);case 7:case"end":return e.stop()}}),e)}))));return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("main",{className:"main-div",children:[(0,x.jsx)(m.Z,{breadCrumbsInfo:[{name:"Home",href:"/"},{name:"Complaints"},{name:"Accepted Complaints"}]}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-6"}),(0,x.jsx)("div",{className:"col-6",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-6 d-flex justify-content-center",children:[(0,x.jsx)("div",{className:"d-flex justify-content-center align-items-center mr-3",children:"Complaints"}),(0,x.jsxs)(o.LX,{"aria-label":"Default select example",onChange:function(e){var t;"software"==(t=e.target.value)&&console.log("software"),"hardware"==t&&console.log("hardware")},children:[(0,x.jsx)("option",{value:"all",children:"All"}),(0,x.jsx)("option",{value:"software",children:"Software"}),(0,x.jsx)("option",{value:"hardware",children:"Hardware"}),(0,x.jsx)("option",{value:"hardware",children:"Network"}),(0,x.jsx)("option",{value:"hardware",children:"Other"})]})]}),(0,x.jsx)("div",{className:"col-6"})]})})]}),(0,x.jsx)("div",{children:(0,x.jsx)("h4",{className:"font-semibold",children:"All Complaints"})}),(0,x.jsx)("div",{className:"flex flex-col",children:(0,x.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,x.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:(0,x.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:(0,x.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,x.jsx)("thead",{className:"bg-gray-50",children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Title"}),(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Lab"}),(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Product Name"}),(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Added By"}),(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Type"}),(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"DCO Aprroved"}),(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Committee Aprroved"}),b?(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Noc Status"}):(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"works Status"}),(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Recovery Date"})]})}),(0,x.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:h&&h.map((function(e){return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,x.jsx)("div",{className:"flex items-center",children:(0,x.jsx)("div",{className:"ml-4",children:(0,x.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.title})})})}),(0,x.jsx)("td",{className:"px-2 py-2 whitespace-nowrap",children:(0,x.jsx)("div",{className:"flex items-center",children:(0,x.jsx)("div",{className:"ml-4",children:(0,x.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.lab})})})}),(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.product&&e.product.name}),(0,x.jsx)("td",{className:"px-2 py-2 whitespace-nowrap",children:(0,x.jsx)("div",{className:"flex items-center",children:(0,x.jsx)("div",{className:"ml-4",children:(0,x.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.user&&e.user.name})})})}),(0,x.jsx)("td",{className:"px-2 py-2 whitespace-nowrap",children:(0,x.jsx)("div",{className:"flex items-center",children:(0,x.jsx)("div",{className:"ml-4",children:(0,x.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e&&e.type&&e.type})})})}),(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.dcoApproved?"Approved":"pending"}),(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.committeApproved?"Approved":"pending"}),b?(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.nocApproved?"Approved":"pending"}):(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.worksApproved?"Approved":"pending"}),(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:e.deadline?(0,u.x)(e.deadline):"no date give yet"})]},e._id)}))})]})})})})})]})})}},30907:function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},83878:function(e,t,r){function n(e){if(Array.isArray(e))return e}r.d(t,{Z:function(){return n}})},25267:function(e,t,r){function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,{Z:function(){return n}})},29439:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(83878);var a=r(40181),s=r(25267);function c(e,t){return(0,n.Z)(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);c=!0);}catch(o){i=!0,a=o}finally{try{c||null==r.return||r.return()}finally{if(i)throw a}}return s}}(e,t)||(0,a.Z)(e,t)||(0,s.Z)()}},40181:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(30907);function a(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=1054.929aef42.chunk.js.map