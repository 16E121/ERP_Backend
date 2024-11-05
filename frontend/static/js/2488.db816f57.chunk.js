"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[2488,8668],{64568:(e,a,s)=>{s.d(a,{c:()=>l});var t=s(82496);const l=()=>(0,t.jsx)("span",{style:{color:"red",fontWeight:"bold",fontSize:"1em"},children:" *"})},63744:(e,a,s)=>{s.d(a,{c:()=>k});var t=s(69060),l=s(56480),r=(s(21680),s(67472),s(68424)),n=s(39504),d=s(82656),c=s(26773),o=s(4488),i=s(71448),m=s(52924),u=s(44380),h=s(90048),x=s(1908),v=s(39308),p=s(64568),j=s(82496);const b=(0,j.jsx)(r.c,{fontSize:"small"}),_=(0,j.jsx)(n.c,{fontSize:"small"}),k=e=>{var a;let{row:s,children:r,openAction:n,reload:k,onCloseFun:g,loadingOn:N,loadingOff:y,onTaskAdded:f,onToast:T}=e;const C=localStorage.getItem("user"),D=JSON.parse(C),P={Task_Id:"",Task_Name:"",Task_Desc:"",Task_Group_Id:0,Entry_By:null===D||void 0===D?void 0:D.UserId,Company_id:null===D||void 0===D?void 0:D.Company_id,Entry_Date:"",Update_By:"",Update_Date:"",Task_Parameters:[]},[S,w]=(0,t.useState)(!1),[I,E]=(0,t.useState)(!1),[O,M]=(0,t.useState)([]),[q,L]=(0,t.useState)([]),[z,F]=(0,t.useState)([]),[H,V]=(0,t.useState)(P);(0,t.useEffect)((()=>{(0,x.q)({address:"taskManagement/tasks/dropdown"}).then((e=>{e.success&&M(e.data)})).catch((e=>console.error(e))),(0,x.q)({address:"masters/taskType/dropDown"}).then((e=>{e.success&&L(e.data)})).catch((e=>console.error(e))),(0,x.q)({address:"taskManagement/parameters"}).then((e=>{e.success&&F(e.data)})).catch((e=>console.error(e)))}),[]),(0,t.useEffect)((()=>{w(!!n)}),[n]),(0,t.useEffect)((()=>{(0,v.CY)(s)?(V((e=>{let a={...e};return Object.entries(s).forEach((e=>{let[s,t]=e;a[s]=t})),a})),E(!0)):(V(P),E(!1))}),[s]);const A=()=>{V(P),w(!1),g&&g()};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{onClick:()=>w(!0),style:{cursor:"pointer"},children:r}),(0,j.jsxs)(d.c,{open:S,onClose:A,children:[(0,j.jsx)(c.c,{className:"bg-primary text-white mb-2 px-3 py-2",children:I?"Edit Task":"Add Task"}),(0,j.jsxs)("form",{onSubmit:e=>{e.preventDefault(),(async()=>{var e;const a=(null===H||void 0===H||null===(e=H.Task_Parameters)||void 0===e?void 0:e.map((e=>({...e,Param_Id:null===e||void 0===e?void 0:e.Paramet_Id}))))||[],s={...H,Task_Parameters:a};N&&N();try{const e=await(0,x.q)({address:"taskManagement/tasks",method:I?"PUT":"POST",bodyData:s});e.success?(l.m4.success(e.message),A(),k&&k(),f()):l.m4.error(e.message)}catch(t){console.error(t),l.m4.error("An error occurred while processing your request.")}finally{y&&y()}})()},children:[(0,j.jsx)(o.c,{children:(0,j.jsxs)("div",{className:"row ",children:[(0,j.jsxs)("div",{className:"col-md-4 p-2",children:[(0,j.jsxs)("label",{children:["Task Name ",(0,j.jsx)(p.c,{})]}),(0,j.jsx)("input",{maxLength:150,onChange:e=>V({...H,Task_Name:e.target.value}),required:!0,value:null===H||void 0===H?void 0:H.Task_Name,placeholder:"ex: File Checking",className:"cus-inpt"})]}),(0,j.jsxs)("div",{className:"col-md-4 p-2",children:[(0,j.jsxs)("label",{children:["Task Group ",(0,j.jsx)(p.c,{})]}),(0,j.jsxs)("select",{value:H.Task_Group_Id,className:"cus-inpt",required:!0,onChange:e=>V({...H,Task_Group_Id:e.target.value}),children:[(0,j.jsx)("option",{value:0,disabled:!0,children:"- select -"}),null===q||void 0===q?void 0:q.map(((e,a)=>0!==Number(null===e||void 0===e?void 0:e.Task_Type_Id)&&(0,j.jsx)("option",{value:null===e||void 0===e?void 0:e.Task_Type_Id,children:null===e||void 0===e?void 0:e.Task_Type},a)))]})]}),(0,j.jsxs)("div",{className:"col-md-4 p-2",children:[(0,j.jsx)("label",{children:"Base Task"}),(0,j.jsxs)("select",{value:H.Under_Task_Id,className:"cus-inpt",onChange:e=>V({...H,Under_Task_Id:e.target.value}),children:[(0,j.jsx)("option",{value:0,children:"Primary"}),null===O||void 0===O?void 0:O.map(((e,a)=>(0,j.jsx)("option",{value:null===e||void 0===e?void 0:e.Task_Id,children:null===e||void 0===e?void 0:e.Task_Name},a)))]})]}),(0,j.jsxs)("div",{className:"col-12",children:[(0,j.jsxs)("label",{children:["Task Describtion ",(0,j.jsx)(p.c,{})]}),(0,j.jsx)("textarea",{className:"cus-inpt",value:H.Task_Desc,rows:"3",onChange:e=>V({...H,Task_Desc:e.target.value})})]}),(0,j.jsx)("div",{className:"col-md-12 p-2",children:(0,j.jsx)(i.c,{multiple:!0,id:"checkboxes-tags-demo",options:[...null===z||void 0===z?void 0:z.map((e=>({...e,Default_Value:""})))],disableCloseOnSelect:!0,getOptionLabel:e=>(null===e||void 0===e?void 0:e.Paramet_Name)+" - "+(null===e||void 0===e?void 0:e.Paramet_Data_Type),value:(null===H||void 0===H?void 0:H.Task_Parameters)||[],onChange:(e,a)=>V({...H,Task_Parameters:a}),renderOption:(e,a,s)=>{let{selected:t}=s;return(0,j.jsxs)("li",{...e,children:[(0,j.jsx)(m.c,{icon:b,checkedIcon:_,style:{marginRight:8},checked:t}),(null===a||void 0===a?void 0:a.Paramet_Name)+" - "+(null===a||void 0===a?void 0:a.Paramet_Data_Type)]})},className:"pt-2",isOptionEqualToValue:(e,a)=>Number(null===e||void 0===e?void 0:e.Paramet_Id)===Number(null===a||void 0===a?void 0:a.Paramet_Id),renderInput:e=>(0,j.jsx)(u.c,{...e,label:"Task Prarameters",placeholder:"Choose Task Parameters"})})}),null===H||void 0===H||null===(a=H.Task_Parameters)||void 0===a?void 0:a.map(((e,a)=>(0,j.jsxs)("div",{className:"col-md-4 p-2",children:[(0,j.jsx)("label",{className:"mb-2",children:null===e||void 0===e?void 0:e.Paramet_Name}),(0,j.jsx)("input",{type:(null===e||void 0===e?void 0:e.Paramet_Data_Type)||"text",className:"cus-inpt",onChange:e=>{const s=[...H.Task_Parameters];s[a]={...s[a],Default_Value:e.target.value},V({...H,Task_Parameters:s})},value:null===e||void 0===e?void 0:e.Default_Value,placeholder:"Default Value"})]},a)))]})}),(0,j.jsxs)(h.c,{children:[(0,j.jsx)("button",{className:"btn btn-light rounded-5 px-3",type:"button",onClick:A,children:"Cancel"}),(0,j.jsx)("button",{className:"btn btn-primary rounded-5 px-3",type:"submit",children:"Submit"})]})]})]})]})}},52488:(e,a,s)=>{s.r(a),s.d(a,{default:()=>_});var t=s(77536),l=s(69060),r=s(56480),n=(s(21680),s(67472),s(86e3)),d=s(45180),c=s(5548),o=s(82656),i=s(26773),m=s(4488),u=s(90048),h=s(32635),x=s(48668),v=s(1908),p=s(63744),j=s(39308),b=s(82496);const _=e=>{let{loadingOn:a,loadingOff:s}=e;const _=localStorage.getItem("user"),k=JSON.parse(_),g={Task_Id:"",Task_Name:"",Task_Desc:"",Task_Group_Id:0,Entry_By:null===k||void 0===k?void 0:k.UserId,Entry_Date:"",Update_By:"",Update_Date:"",Task_Parameters:[]},[N,y]=(0,l.useState)([]),[f,T]=(0,l.useState)([]),[C,D]=(0,l.useState)(!1),{contextObj:P}=(0,l.useContext)(t.a),[S,w]=(0,l.useState)(g),[I,E]=(0,l.useState)(!1),[O,M]=(0,l.useState)(""),[q,L]=(0,l.useState)({});(0,l.useEffect)((()=>{(0,v.q)({address:"taskManagement/tasks?Company_id=".concat(null===k||void 0===k?void 0:k.Company_id)}).then((e=>{e.success&&y(e.data)})).catch((e=>console.error(e)))}),[C]),(0,l.useEffect)((()=>{const e=[...N].filter((e=>Object.values(e).some((e=>String(e).toLowerCase().includes(O.toLowerCase())))));T(e)}),[O,N]);const z=()=>{w(g),E(!1)},F=[{name:"Task",selector:e=>null===e||void 0===e?void 0:e.Task_Name,sortable:!0},{name:"Task Group",selector:e=>null===e||void 0===e?void 0:e.Task_Group,sortable:!0},{name:"Task Describtion",selector:e=>null===e||void 0===e?void 0:e.Task_Desc,sortable:!0,width:"170px"},{name:"Created At",selector:e=>new Date(null===e||void 0===e?void 0:e.Entry_Date),cell:e=>new Date(null===e||void 0===e?void 0:e.Entry_Date).toLocaleDateString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric"}),sortable:!0},{name:"Actions",cell:e=>(0,b.jsxs)("div",{children:[1===Number(null===P||void 0===P?void 0:P.Edit_Rights)&&(0,b.jsx)(c.c,{onClick:()=>L(e),children:(0,b.jsx)(n.c,{})}),1===Number(null===P||void 0===P?void 0:P.Delete_Rights)&&(0,b.jsx)(c.c,{onClick:()=>(e=>{w(e),E(!0)})(e),children:(0,b.jsx)(d.c,{sx:{color:"#FF6865"}})})]})}];const H=()=>L({});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x.default,{}),(0,j.CY)(q)&&(0,b.jsx)(p.c,{row:q,openAction:!0,reload:()=>D((e=>!e)),onCloseFun:H,loadingOn:a,loadingOff:s}),(0,b.jsxs)("div",{className:"card",children:[(0,b.jsxs)("div",{className:"card-header bg-white fw-bold d-flex align-items-center justify-content-between",children:[(0,b.jsx)("span",{children:"Task Master"}),(0,j.Qr)(P.Add_Rights,1)&&(0,b.jsx)(p.c,{openAction:!1,reload:()=>D((e=>!e)),onCloseFun:H,loadingOn:a,loadingOff:s,children:(0,b.jsx)("button",{className:"btn btn-primary rounded-5 px-3 py-1 fa-13 shadow",children:"Create Task"})})]}),(0,b.jsx)("div",{className:"card-body p-0 overflow-hidden rounded-bottom-3",children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"d-flex justify-content-end",children:(0,b.jsx)("div",{className:"col-md-4 p-2",children:(0,b.jsx)("input",{type:"search",value:O,className:"cus-inpt",placeholder:"Search",onChange:function(e){const a=e.target.value;M(a)}})})}),(0,b.jsx)(h.cp,{columns:F,data:O?f:N,pagination:!0,highlightOnHover:!0,fixedHeader:!0,fixedHeaderScrollHeight:"68vh"})]})})]}),(0,b.jsxs)(o.c,{open:I,onClose:z,"aria-labelledby":"create-dialog-title","aria-describedby":"create-dialog-description",children:[(0,b.jsx)(i.c,{className:"bg-primary text-white mb-2 px-3 py-2",children:"Confirmation"}),(0,b.jsxs)(m.c,{className:"p-4",children:["Do you want to delete the",(0,b.jsx)("span",{className:"text-primary",children:" "+(null===S||void 0===S?void 0:S.Task_Name)+" "}),"Task ?"]}),(0,b.jsxs)(u.c,{children:[(0,b.jsx)("button",{className:"btn btn-light rounded-5 px-3 me-1",onClick:z,children:"Cancel"}),(0,b.jsx)("button",{className:"btn btn-primary rounded-5 px-3",onClick:async()=>{null!==S&&void 0!==S&&S.Task_Id&&1===Number(P.Delete_Rights)&&(0,v.q)({address:"taskManagement/tasks",method:"DELETE",bodyData:{Task_Id:null===S||void 0===S?void 0:S.Task_Id}}).then((e=>{e.success?(r.m4.success(e.message),D(!C),z()):r.m4.error(e.message)})).catch((e=>console.error(e)))},children:"Delete"})]})]})]})}},48668:(e,a,s)=>{s.r(a),s.d(a,{default:()=>p});var t=s(5548),l=s(60476),r=s(82656),n=s(26773),d=s(4488),c=s(90048),o=s(89e3),i=s(69060),m=s(56480),u=s(22727),h=s(99768),x=s(1908),v=s(82496);const p=e=>{var a;let{isOpened:s,disableCollapse:p}=e;const j={Paramet_Id:"",Paramet_Name:"",Paramet_Data_Type:""},[b,_]=(0,i.useState)([]),[k,g]=(0,i.useState)(!1),[N,y]=(0,i.useState)(!1),[f,T]=(0,i.useState)(j),[C,D]=(0,i.useState)(!1),[P,S]=(0,i.useState)(!!s),[w,I]=(0,i.useState)(""),[E,O]=(0,i.useState)([]);(0,i.useEffect)((()=>{(0,x.q)({address:"taskManagement/parameters"}).then((e=>{e.success&&_(e.data)})).catch((e=>console.error(e)))}),[C]);const M=()=>{g(!1),T(j)},q=()=>{T(j),y(!1)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"card mb-3",children:[(0,v.jsxs)("div",{className:"card-header bg-white fw-bold d-flex align-items-center justify-content-between",children:[(0,v.jsxs)("div",{className:"flex-grow-1 mb-0",children:[!p&&(0,v.jsx)(t.c,{size:"small",onClick:()=>S(!P),children:P?(0,v.jsx)(u.c,{style:{fontSize:"18px",color:"black"}}):(0,v.jsx)(h.c,{style:{fontSize:"18px",color:"black"}})}),"Task Parameters"]}),(0,v.jsx)("button",{onClick:()=>g(!0),className:"btn btn-primary rounded-5 px-3 py-1 fa-13 shadow",children:"Create Parameter"})]}),(0,v.jsx)(l.c,{in:P,unmountOnExit:!0,children:(0,v.jsxs)("div",{className:"card-body",style:{maxHeight:p?"auto":"40vh",overflowY:"auto"},children:[(0,v.jsx)("div",{className:"row flex-row-reverse",children:(0,v.jsx)("div",{className:"col-md-4 pb-2",children:(0,v.jsx)("input",{type:"search",value:w,className:"cus-inpt",placeholder:"Search",onChange:function(e){const a=e.target.value;I(a);const s=b.filter((e=>Object.values(e).some((e=>String(e).toLowerCase().includes(a.toLowerCase())))));O(s)}})})}),(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsxs)("table",{className:"table",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{className:"border fa-14",children:"Sno"}),(0,v.jsx)("th",{className:"border fa-14",children:"Parameter"}),(0,v.jsx)("th",{className:"border fa-14",children:"Data Type"})]})}),(0,v.jsx)("tbody",{children:null===(a=E.length>0?E:""===w?b:[])||void 0===a?void 0:a.map(((e,a)=>(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"border fa-14",children:a+1}),(0,v.jsx)("td",{className:"border fa-14",children:null===e||void 0===e?void 0:e.Paramet_Name}),(0,v.jsx)("td",{className:"border fa-14",children:null===e||void 0===e?void 0:e.Paramet_Data_Type})]},a)))})]})})]})})]}),(0,v.jsxs)(r.c,{open:k,onClose:M,maxWidth:"sm",fullWidth:!0,children:[(0,v.jsx)(n.c,{children:"Create Task Parameters"}),(0,v.jsxs)("form",{onSubmit:e=>{e.preventDefault(),(0,x.q)({address:"taskManagement/parameters",method:"POST",bodyData:f}).then((e=>{e.success?(m.m4.success(e.message),D(!C)):m.m4.error(e.message)})).catch((e=>console.error(e))).finally(M)},children:[(0,v.jsx)(d.c,{children:(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsx)("table",{className:"table",children:(0,v.jsxs)("tbody",{children:[(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"border-0 fa-14",children:"Name"}),(0,v.jsx)("td",{className:"border-0 fa-14",children:(0,v.jsx)("input",{className:"cus-inpt",value:null===f||void 0===f?void 0:f.Paramet_Name,required:!0,onChange:e=>T({...f,Paramet_Name:e.target.value})})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"border-0 fa-14",children:"Data Type"}),(0,v.jsx)("td",{className:"border-0 fa-14",children:(0,v.jsxs)("select",{className:"cus-inpt",value:null===f||void 0===f?void 0:f.Paramet_Data_Type,required:!0,onChange:e=>T({...f,Paramet_Data_Type:e.target.value}),children:[(0,v.jsx)("option",{value:"",disabled:!0,children:"Select Data Type"}),(0,v.jsx)("option",{value:"number",children:"number"}),(0,v.jsx)("option",{value:"text",children:"text"}),(0,v.jsx)("option",{value:"date",children:"date"})]})})]})]})})})}),(0,v.jsxs)(c.c,{children:[(0,v.jsx)(o.c,{onClick:M,type:"button",children:"cancel"}),(0,v.jsx)(o.c,{type:"submit",children:"Create Parameter"})]})]})]}),(0,v.jsxs)(r.c,{open:N,onClose:q,children:[(0,v.jsx)(n.c,{children:"Confirm Delete"}),(0,v.jsxs)(d.c,{children:["Do you want to delete the",(null===f||void 0===f?void 0:f.Paramet_Name)&&(0,v.jsx)("span",{className:"text-primary px-1",children:null===f||void 0===f?void 0:f.Paramet_Name}),"Parameter?"]}),(0,v.jsxs)(c.c,{children:[(0,v.jsx)(o.c,{onClick:q,children:"Cancel"}),(0,v.jsx)(o.c,{onClick:()=>{(0,x.q)({address:"taskManagement/parameters",method:"DELETE",bodyData:{Paramet_Id:f.Paramet_Id}}).then((e=>{e.success?(m.m4.success(e.message),D(!C)):m.m4.error(e.message)})).catch((e=>console.error(e))).finally(q)},children:"Delete"})]})]})]})}},39504:(e,a,s)=>{s.d(a,{c:()=>r});var t=s(27664),l=s(82496);const r=(0,t.c)((0,l.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckBox")},68424:(e,a,s)=>{s.d(a,{c:()=>r});var t=s(27664),l=s(82496);const r=(0,t.c)((0,l.jsx)("path",{d:"M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"}),"CheckBoxOutlineBlank")},45180:(e,a,s)=>{s.d(a,{c:()=>r});var t=s(27664),l=s(82496);const r=(0,t.c)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},86e3:(e,a,s)=>{s.d(a,{c:()=>r});var t=s(27664),l=s(82496);const r=(0,t.c)((0,l.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},22727:(e,a,s)=>{s.d(a,{c:()=>r});var t=s(27664),l=s(82496);const r=(0,t.c)((0,l.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess")},99768:(e,a,s)=>{s.d(a,{c:()=>r});var t=s(27664),l=s(82496);const r=(0,t.c)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")}}]);
//# sourceMappingURL=2488.db816f57.chunk.js.map