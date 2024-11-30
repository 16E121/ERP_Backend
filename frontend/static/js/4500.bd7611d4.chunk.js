"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[4500],{84500:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var a=s(69060),c=s(56480),r=s(42136),n=s(99904),o=s(33856),i=s(58612),l=s(27454),d=s(700),p=s(53248),u=s(29504),y=s(5548),m=s(82656),h=s(26773),x=s(4488),b=s(90048),T=s(86e3),v=s(45180),f=s(1908),k=s(82496);const j=e=>{let{open:t,onClose:s,existingTaskType:c,onCreate:r,onUpdate:n}=e;const[o,i]=a.useState({Task_Type:"",Task_Type_Id:""});(0,a.useEffect)((()=>{i(c||{Task_Type:"",Task_Type_Id:""})}),[c]);return(0,k.jsxs)(m.c,{open:t,onClose:s,children:[(0,k.jsx)(h.c,{className:"bg-primary text-white mb-2 px-3 py-2",children:c?"Edit Task Type":"Create Task Type"}),(0,k.jsx)(x.c,{children:(0,k.jsxs)("form",{onSubmit:e=>{e.preventDefault(),c?n(o):r(o.Task_Type),s()},children:[(0,k.jsxs)("div",{className:"p-2",children:[(0,k.jsx)("label",{children:"Task Type"}),(0,k.jsx)("input",{type:"text",onChange:e=>i({...o,Task_Type:e.target.value}),value:o.Task_Type,className:"cus-inpt"})]}),(0,k.jsxs)(b.c,{children:[(0,k.jsx)("button",{className:"btn btn-light rounded-5 px-3",type:"button",onClick:s,children:"Cancel"}),(0,k.jsx)("button",{className:"btn btn-primary rounded-5 px-3",type:"submit",children:c?"Update":"Create"})]})]})})]})},g=()=>{const[e,t]=(0,a.useState)([]),[s,g]=(0,a.useState)(!1),[C,N]=(0,a.useState)(!1),[w,S]=(0,a.useState)(null),[_,D]=(0,a.useState)(!1),[I,E]=(0,a.useState)("asc"),[L,M]=(0,a.useState)("Task_Type_Id");(0,a.useEffect)((()=>{(async()=>{try{const e=await(0,f.q)({address:"masters/taskType"});e.success?t(e.data):c.m4.error("Failed to fetch task types: "+e.message)}catch(e){console.error(e),c.m4.error("Error fetching task types.")}})()}),[s]);const z=()=>{N(!1)},R=[...e].sort(((e,t)=>{const s=e[L],a=t[L];return"asc"===I?s<a?-1:1:s>a?-1:1}));return(0,k.jsxs)(a.Fragment,{children:[(0,k.jsxs)("div",{className:"card",children:[(0,k.jsxs)("div",{className:"card-header bg-white fw-bold d-flex align-items-center justify-content-between",children:["Task Types",(0,k.jsx)(r.c,{className:"rounded-5 px-3 py-1 fa-13 shadow",onClick:()=>{S(null),D(!0)},children:"Create Task Type"})]}),(0,k.jsx)("div",{className:"card-body overflow-scroll",style:{maxHeight:"78vh"},children:(0,k.jsx)(n.c,{children:(0,k.jsxs)(o.c,{children:[(0,k.jsx)(i.c,{children:(0,k.jsx)(l.c,{children:[{id:"index",label:"Id No",sort:!1},{id:"Task_Type",label:"Task Type",sort:!0},{id:"actions",label:"Actions",sort:!1}].map((e=>(0,k.jsx)(d.c,{sx:{padding:"4px 8px"},children:e.sort?(0,k.jsx)(p.c,{active:L===e.id,direction:L===e.id?I:"asc",onClick:()=>{return t=e.id,E(L===t&&"asc"===I?"desc":"asc"),void M(t);var t},children:e.label}):e.label},e.id)))})}),(0,k.jsx)(u.c,{children:R.map(((e,t)=>(0,k.jsxs)(l.c,{children:[(0,k.jsx)(d.c,{sx:{padding:"4px 8px"},children:t+1}),(0,k.jsx)(d.c,{sx:{padding:"4px 8px"},children:e.Task_Type}),(0,k.jsxs)(d.c,{sx:{padding:"4px 8px"},children:[(0,k.jsx)(y.c,{onClick:()=>(S(e),void D(!0)),size:"small",children:(0,k.jsx)(T.c,{})}),(0,k.jsx)(y.c,{onClick:()=>(S(e),void N(!0)),sx:{color:"#FF6865"},children:(0,k.jsx)(v.c,{})})]})]},e.Task_Type_Id)))})]})})})]}),(0,k.jsx)(j,{open:_,onClose:()=>D(!1),existingTaskType:w,onCreate:async e=>{try{const t=await(0,f.q)({address:"masters/taskType",method:"POST",headers:{"Content-Type":"application/json"},bodyData:{Task_Type:e}});t.success?(g(!s),c.m4.success("Task type created successfully!"),D(!1)):c.m4.error("Failed to create task type: "+t.message)}catch(t){console.error(t),c.m4.error("Error creating task type.")}},onUpdate:async e=>{try{const t=await(0,f.q)({address:"masters/taskType",method:"PUT",headers:{"Content-Type":"application/json"},bodyData:{...e}});t.success?(g(!s),c.m4.success("Task type updated successfully!"),D(!1)):c.m4.error("Failed to update task type: "+t.message)}catch(t){console.error(t),c.m4.error("Error updating task type.")}}}),(0,k.jsxs)(m.c,{open:C,onClose:z,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,k.jsx)(h.c,{className:"bg-primary text-white mb-4 px-3 py-2",children:"Confirmation"}),(0,k.jsxs)(x.c,{className:"p-4",children:["Do you want to delete the Task Type",(0,k.jsx)("span",{className:"text-primary",children:" "+(null===w||void 0===w?void 0:w.Task_Type)+" "}),"?"]}),(0,k.jsxs)(b.c,{children:[(0,k.jsx)(r.c,{className:"btn btn-light rounded-5 px-3 me-1",onClick:z,children:"Cancel"}),(0,k.jsx)(r.c,{className:"btn btn-primary rounded-5 px-3",onClick:async()=>{try{const e=await(0,f.q)({address:"masters/taskType",method:"DELETE",headers:{"Content-Type":"application/json"},bodyData:{Task_Type_Id:w.Task_Type_Id}});e.success?(g(!s),N(!1),c.m4.success("Task type deleted successfully!")):c.m4.error("Failed to delete task type: "+e.message)}catch(e){console.error(e),c.m4.error("Error deleting task type.")}},children:"Delete"})]})]})]})}},45180:(e,t,s)=>{s.d(t,{c:()=>r});var a=s(27664),c=s(82496);const r=(0,a.c)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},86e3:(e,t,s)=>{s.d(t,{c:()=>r});var a=s(27664),c=s(82496);const r=(0,a.c)((0,c.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},53248:(e,t,s)=>{s.d(t,{c:()=>j});var a=s(95656),c=s(45072),r=s(21412),n=s(79736),o=s(69060),i=s(33440),l=s(27664),d=s(82496);const p=(0,l.c)((0,d.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");var u=s(12556),y=s(49836),m=s(55832),h=s(10099),x=s(33448);function b(e){return(0,x.cp)("MuiTableSortLabel",e)}const T=(0,h.c)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),v=["active","children","className","direction","hideSortIcon","IconComponent"],f=(0,u.cp)(i.c,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.active&&t.active]}})((e=>{let{theme:t}=e;return{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(t.vars||t).palette.text.secondary},"&:hover":{color:(t.vars||t).palette.text.secondary,["& .".concat(T.icon)]:{opacity:.5}},["&.".concat(T.active)]:{color:(t.vars||t).palette.text.primary,["& .".concat(T.icon)]:{opacity:1,color:(t.vars||t).palette.text.secondary}}}})),k=(0,u.cp)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.icon,t["iconDirection".concat((0,m.c)(s.direction))]]}})((e=>{let{theme:t,ownerState:s}=e;return(0,c.c)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===s.direction&&{transform:"rotate(0deg)"},"asc"===s.direction&&{transform:"rotate(180deg)"})})),j=o.forwardRef((function(e,t){const s=(0,y.C)({props:e,name:"MuiTableSortLabel"}),{active:o=!1,children:i,className:l,direction:u="asc",hideSortIcon:h=!1,IconComponent:x=p}=s,T=(0,a.c)(s,v),j=(0,c.c)({},s,{active:o,direction:u,hideSortIcon:h,IconComponent:x}),g=(e=>{const{classes:t,direction:s,active:a}=e,c={root:["root",a&&"active"],icon:["icon","iconDirection".concat((0,m.c)(s))]};return(0,r.c)(c,b,t)})(j);return(0,d.jsxs)(f,(0,c.c)({className:(0,n.c)(g.root,l),component:"span",disableRipple:!0,ownerState:j,ref:t},T,{children:[i,h&&!o?null:(0,d.jsx)(k,{as:x,className:(0,n.c)(g.icon),ownerState:j})]}))}))},16344:(e,t,s)=>{s.d(t,{cV:()=>n,cp:()=>i});var a=s(69060),c=s(82496);const r=["as","disabled"];function n(e){let{tagName:t,disabled:s,href:a,target:c,rel:r,role:n,onClick:o,tabIndex:i=0,type:l}=e;t||(t=null!=a||null!=c||null!=r?"a":"button");const d={tagName:t};if("button"===t)return[{type:l||"button",disabled:s},d];const p=e=>{(s||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),s?e.stopPropagation():null==o||o(e)};return"a"===t&&(a||(a="#"),s&&(a=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:s?void 0:i,href:a,target:"a"===t?c:void 0,"aria-disabled":s||void 0,rel:"a"===t?r:void 0,onClick:p,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),p(e))}},d]}const o=a.forwardRef(((e,t)=>{let{as:s,disabled:a}=e,o=function(e,t){if(null==e)return{};var s,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(c[s]=e[s]);return c}(e,r);const[i,{tagName:l}]=n(Object.assign({tagName:s,disabled:a},o));return(0,c.jsx)(l,Object.assign({},o,i,{ref:t}))}));o.displayName="Button";const i=o},42136:(e,t,s)=>{s.d(t,{c:()=>d});var a=s(264),c=s.n(a),r=s(69060),n=s(16344),o=s(83576),i=s(82496);const l=r.forwardRef(((e,t)=>{let{as:s,bsPrefix:a,variant:r="primary",size:l,active:d=!1,disabled:p=!1,className:u,...y}=e;const m=(0,o.Ky)(a,"btn"),[h,{tagName:x}]=(0,n.cV)({tagName:s,disabled:p,...y}),b=x;return(0,i.jsx)(b,{...h,...y,ref:t,disabled:p,className:c()(u,m,d&&"active",r&&"".concat(m,"-").concat(r),l&&"".concat(m,"-").concat(l),y.href&&p&&"disabled")})}));l.displayName="Button";const d=l}}]);
//# sourceMappingURL=4500.bd7611d4.chunk.js.map