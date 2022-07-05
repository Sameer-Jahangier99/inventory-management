"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5152],{50910:function(e,t,n){n(72791);var r=n(78983),a=n(80184);t.Z=function(e){return(0,a.jsx)("div",{className:"row bg-white pt-2 pl-2 mb-4 ",style:{margin:"0px 1px"},children:(0,a.jsx)("div",{className:"col-12  ",children:(0,a.jsx)(r.fj,{className:"d-flex  align-items-center",style:{"--cui-breadcrumb-divider":"'>'"},children:e.breadCrumbsInfo&&e.breadCrumbsInfo.length&&e.breadCrumbsInfo.map((function(e){return(0,a.jsx)(r.Sd,{href:e.href?e.href:null,children:e.name})}))})})})}},35152:function(e,t,n){n.r(t);var r=n(93433),a=n(74165),c=n(15861),i=n(29439),s=n(72791),o=n(70895),l=n(59434),d=n(74569),u=n.n(d),f=n(50910),p=n(78983),m=n(80184);t.default=function(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2),n=t[0],d=t[1],x=(0,s.useState)([]),h=(0,i.Z)(x,2),v=h[0],y=h[1],j=(0,l.v9)((function(e){return e.userLogin})).userInfo;(0,s.useEffect)((function(){b()}),[]);var b=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t,n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j.token)}},e.next=3,u().get("".concat(o._,"/request/noc"),t);case 3:n=e.sent,(r=n.data)&&(d(r.data),y(r.data));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t){var c,i,s,l,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j.token)}},e.next=3,u().get("".concat(o._,"/request/nocRejected/").concat(t._id),c);case 3:i=e.sent,i.data.success&&(t.nocApproved=!1,s=(0,r.Z)(n),l=s.filter((function(e){return e.id==t._id})),f=s.indexOf(l[0]),s[f]=t,d(s));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t){var c,i,s,l,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j.token)}},e.next=3,u().get("".concat(o._,"/request/nocApproved/").concat(t._id),c);case 3:i=e.sent,i.data.success&&(t.nocApproved=!0,s=(0,r.Z)(n),l=s.filter((function(e){return e.id==t._id})),f=s.indexOf(l[0]),s[f]=t,d(s));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsxs)("main",{className:"main-div",children:[(0,m.jsx)(f.Z,{breadCrumbsInfo:[{name:"Home",href:"/"},{name:"Request"},{name:"All Requests"}]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6"}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-6 d-flex justify-content-center",children:[(0,m.jsx)("div",{className:"d-flex justify-content-center align-items-center mr-3",children:"Requests"}),(0,m.jsxs)(p.LX,{"aria-label":"Default select example",onChange:function(e){!function(e){if("software"===e){var t=v.filter((function(e){return"software"==e.type}));d(t)}if("hardware"===e){var n=v.filter((function(e){return"hardware"==e.type}));d(n)}"All"===e&&d(v)}(e.target.value)},children:[(0,m.jsx)("option",{value:"All",children:"All"}),(0,m.jsx)("option",{value:"software",children:"Software"}),(0,m.jsx)("option",{value:"hardware",children:"Hardware"})]})]}),(0,m.jsx)("div",{className:"col-6"})]})})]}),(0,m.jsx)("div",{children:(0,m.jsx)("h4",{className:"font-semibold",children:"All Requests"})}),(0,m.jsx)("div",{className:"flex flex-col",children:(0,m.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,m.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:(0,m.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:(0,m.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,m.jsx)("thead",{className:"bg-gray-50",children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider",children:"Title"}),(0,m.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider",children:"Lab"}),(0,m.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider",children:"Type"}),(0,m.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider",children:"Added By"}),(0,m.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider",children:"Action"})]})}),(0,m.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:n&&n.map((function(e){return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,m.jsx)("div",{className:"flex items-center",children:(0,m.jsx)("div",{className:"ml-4",children:(0,m.jsx)("div",{className:"text-base font-medium text-gray-900",children:e.title})})})}),(0,m.jsx)("td",{className:"px-2 py-2 whitespace-nowrap",children:(0,m.jsx)("div",{className:"flex items-center",children:(0,m.jsx)("div",{className:"ml-4",children:(0,m.jsx)("div",{className:"text-base font-medium text-gray-900",children:e.lab})})})}),(0,m.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-base font-medium",children:e.type&&e.type}),(0,m.jsx)("td",{className:"px-2 py-2 whitespace-nowrap",children:(0,m.jsx)("div",{className:"flex items-center",children:(0,m.jsx)("div",{className:"ml-4",children:(0,m.jsx)("div",{className:"text-base font-medium text-gray-900",children:e.user&&e.user.name})})})}),(0,m.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-right text-base font-medium d-flex justify-content-start",children:null==e.nocApproved?(0,m.jsxs)(m.Fragment,{children:[" ",(0,m.jsx)(p.u5,{color:"success",className:"text-white",onClick:function(){return g(e)},children:e.nocApproved?"Approved":"Approve"})," ",(0,m.jsx)(p.u5,{color:"danger",className:"text-white ml-2",onClick:function(){return w(e)},children:null==e.nocApproved?"Reject ":"Rejected"})," "]}):e.nocApproved?(0,m.jsx)(p.u5,{color:"success",className:"text-white",onClick:function(){return g(e)},children:e.nocApproved?"Approved":"Approve"}):(0,m.jsx)(p.u5,{color:"danger",className:"text-white",onClick:function(){return w(e)},children:e.nocApproved?"Reject":"Rejected"})})]},e._id)}))})]})})})})})]})}},30907:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},83878:function(e,t,n){function r(e){if(Array.isArray(e))return e}n.d(t,{Z:function(){return r}})},59199:function(e,t,n){function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},25267:function(e,t,n){function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return r}})},29439:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(83878);var a=n(40181),c=n(25267);function i(e,t){return(0,r.Z)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(o){s=!0,a=o}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return c}}(e,t)||(0,a.Z)(e,t)||(0,c.Z)()}},93433:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(30907);var a=n(59199),c=n(40181);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,c.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40181:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(30907);function a(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=5152.552d2c38.chunk.js.map