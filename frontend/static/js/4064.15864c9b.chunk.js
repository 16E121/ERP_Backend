"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[4064],{13724:(e,t,a)=>{a.d(t,{c:()=>g});var l=a(69060),r=a(27454),n=a(700),i=a(5548),o=a(99904),s=a(85624),d=a(33856),c=a(58612),u=a(53248),m=a(29504),p=a(5930),h=a(39308),v=a(41459),x=a(46864),f=a(82496);const b=e=>{let{dataArray:t=[],columns:a=[],onClickFun:b=null,isExpendable:g=!1,expandableComp:y=null,tableMaxHeight:j=550,initialPageCount:w=20,EnableSerialNumber:C=!1,CellSize:E="small",disablePagination:N=!1,title:S=""}=e;const[T,D]=(0,l.useState)(0),[I,F]=(0,l.useState)(w),[A,_]=(0,l.useState)([]),k=[{type:"left",class:"text-start"},{type:"right",class:"text-end"},{type:"center",class:"text-center"}],O=(e=>{if(!A.length)return e;return[...e].sort(((e,t)=>{for(const a of A){const{columnId:l,direction:r}=a,n=e[l],i=t[l];if(n!==i)return"asc"===r?n>i?1:-1:n<i?1:-1}return 0}))})(t),M=T*I,R=M+I,H=O.slice(M,R),P=(e,t)=>{switch(t){case"number":return(0,h.SA)(e);case"date":return(0,h.uy)(e);case"time":return(0,h.AX)(e);case"string":return e;default:return""}},B=e=>{let{row:t,index:o}=e;const[s,d]=(0,l.useState)(!1),c="20px";return(0,f.jsxs)(l.Fragment,{children:[(0,f.jsxs)(r.c,{children:[!0===g&&y&&(0,f.jsx)(n.c,{className:"fa-13 border-end text-center",children:(0,f.jsx)(i.c,{size:"small",onClick:()=>d((e=>!e)),children:s?(0,f.jsx)(v.c,{sx:{fontSize:c}}):(0,f.jsx)(x.c,{sx:{fontSize:c}})})}),!0===C&&(0,f.jsx)(n.c,{className:"fa-13 border-end text-center",children:I*T+o+1}),null===a||void 0===a?void 0:a.map(((e,a)=>{var l;return((0,h.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,h.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,f.jsx)(n.c,{className:"fa-13 border-end "+(e.align?null===(l=k.find((t=>t.type===String(e.align).toLowerCase())))||void 0===l?void 0:l.class:""),children:e.Cell({row:t,Field_Name:e.Field_Name})},a):Object.entries(t).map((l=>{var r;let[i,o]=l;return e.Field_Name===i&&((0,h.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,h.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(0,f.jsx)(n.c,{className:"fa-13 border-end "+(e.align?null===(r=k.find((t=>t.type===String(e.align).toLowerCase())))||void 0===r?void 0:r.class:""),onClick:()=>b?b(t):console.log("Function not supplied"),children:P(o,null===e||void 0===e?void 0:e.Fied_Data)},a)})))}))]}),!0===g&&y&&s&&(0,f.jsx)(r.c,{children:(0,f.jsx)(n.c,{colSpan:Number(null===a||void 0===a?void 0:a.length)+(!0===C?2:1),children:y({row:t,index:o})})})]})};return(0,f.jsxs)("div",{children:[S&&(0,f.jsx)("h6",{className:"fw-bold text-muted",children:S}),(0,f.jsx)(o.c,{component:s.c,sx:{maxHeight:j},children:(0,f.jsxs)(d.c,{stickyHeader:!0,size:E,children:[(0,f.jsx)(c.c,{children:(0,f.jsxs)(r.c,{children:[g&&y&&(0,f.jsx)(n.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"#"}),C&&(0,f.jsx)(n.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"SNo"}),a.map(((e,t)=>{const a=(0,h.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,h.Qr)(null===e||void 0===e?void 0:e.isVisible,1),l=!1===Boolean(null===e||void 0===e?void 0:e.isCustomCell)||!e.Cell,r=A.find((t=>t.columnId===e.Field_Name)),i=r?r.direction:"asc";var o,s,d,c;return a?l?(0,f.jsx)(n.c,{className:"fa-13 fw-bold border-end border-top "+(e.align?null===(o=k.find((t=>t.type===String(e.align).toLowerCase())))||void 0===o?void 0:o.class:""),style:{backgroundColor:"#EDF0F7"},sortDirection:!!r&&i,children:(0,f.jsx)(u.c,{active:!!r,direction:i,onClick:()=>(e=>{const t=A.find((t=>t.columnId===e));if(t){const a="asc"===t.direction;_(A.map((t=>t.columnId===e?{...t,direction:a?"desc":"asc"}:t)))}else _([...A,{columnId:e,direction:"asc"}])})(e.Field_Name),children:e.ColumnHeader||(null===e||void 0===e||null===(s=e.Field_Name)||void 0===s?void 0:s.replace(/_/g," "))})},t):(0,f.jsx)(n.c,{className:"".concat(e.ColumnHeader||null!==e&&void 0!==e&&e.Field_Name?" fa-13 fw-bold border-end border-top p-2 appFont ":" p-0 "," ")+(e.align?null===(d=k.find((t=>t.type===String(e.align).toLowerCase())))||void 0===d?void 0:d.class:""),style:{backgroundColor:"#EDF0F7"},children:e.ColumnHeader||(null===e||void 0===e||null===(c=e.Field_Name)||void 0===c?void 0:c.replace(/_/g," "))},t):null}))]})}),(0,f.jsxs)(m.c,{children:[(N?O:H).map(((e,t)=>(0,f.jsx)(B,{row:e,index:t},t))),0===t.length&&(0,f.jsx)(r.c,{children:(0,f.jsx)(n.c,{colSpan:a.length+(!0===g&&y?1:0)+(!0===C?1:0),sx:{textAlign:"center"},children:"No Data"})})]})]})}),!N&&0!==H.length&&(0,f.jsx)("div",{className:"p-2 pb-0",children:(0,f.jsx)(p.c,{component:"div",count:t.length,page:T,onPageChange:(e,t)=>{D(t)},rowsPerPage:I,onRowsPerPageChange:e=>{F(parseInt(e.target.value,10)),D(0)},rowsPerPageOptions:Array.from(new Set([w,5,20,50,100,200,500])).sort(((e,t)=>e-t)),labelRowsPerPage:"Rows per page",showFirstButton:!0,showLastButton:!0})})]})};b.defaultProps={dataArray:[],columns:[],onClickFun:null,isExpendable:!1,expandableComp:null,tableMaxHeight:550,initialPageCount:20,EnableSerialNumber:!1,CellSize:"small",disablePagination:!1,title:void 0};const g=b},62344:(e,t,a)=>{a.d(t,{o$:()=>i,o5:()=>o,cF:()=>n,iI:()=>r});const l=a.p+"static/media/smt.aa4d4f940bbebff07a57.png",r={table:{style:{width:"auto",backgroundColor:"transparent"}},rows:{style:{backgroundColor:"transparent"}},headCells:{style:{backgroundColor:"#6b9080f8",color:"white",fontSize:"14px"}}},n={control:(e,t)=>({...e,height:"45px",background:"rgba(255, 255, 255, 0.322)"}),menu:(e,t)=>({...e,zIndex:9999})},i=[{id:1,headname:"Menu ID",variant:"head",align:"left",width:100},{id:2,headname:"MenuName"},{id:3,headname:"Read Rights"},{id:4,headname:"Add Rights"},{id:5,headname:"Edit Rights"},{id:6,headname:"Delete Rights"},{id:7,headname:"Print Rights"},{id:8,headname:"Action"}],o=[{dataBase:1,name:"SHANKAR TRADERS",business:"Wholesale Merchant in Dhall",address:"32, Chitrakara Street, Madurai - 01 <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:l,gstin:"33AADFS6973R1ZD",phone:"984-313-1353, 984-335-5166",fssai:"12418012000818",bankAccount:"0021 5032 0885 122",ifsc:"TMBL0000002"},{dataBase:2,name:"SMT AGRO PRODUCTS",business:"",address:"H.O: 153, Chitrakara Street, 2nd Floor, Madurai -01 <br /> G.O: 746 Puliyur, Sayanapuram, Svga <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:l,gstin:"33ACMFS3420Q1ZQ",phone:"0452-4371625",fssai:"12418012000818",bankAccount:"0025 3031 0875 947",ifsc:"TMBL0000002"},{dataBase:3,name:"BHAVANI TRADERS",business:"",address:"H.O: 152-A, Chitrakara Street, Madurai -01 <br /> G.O: 30/1-Rajman Nagar, Chintamani Main Road, Mdu-01 <br /> Tax Invoice",logo:l,gstin:"33AAEFB6728J1ZG",phone:"958-559-7641, 958-559-7614",fssai:"12418012000670",bankAccount:"0021 5005 0800 309",ifsc:"TMBL0000002"}]},74920:(e,t,a)=>{a.d(t,{c:()=>n});var l=a(39308),r=a(82496);const n=e=>{let{Value:t,Label:a}=e;return(0,r.jsxs)("div",{className:"grid-card d-flex align-items-center justify-content-center flex-column cus-shadow",children:[(0,r.jsx)("h1",{style:{fontSize:"45px",color:"blue",margin:"0 0.5em"},children:isNaN(t)?t||"-":t?(0,l.SA)(t):"0"}),(0,r.jsx)("h2",{className:"fa-20",children:a})]})}},27112:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var l=a(69060),r=a(43692),n=a(84436),i=a(3358),o=a(5548),s=a(89e3),d=a(82656),c=a(26773),u=a(4488),m=a(30612),p=a(62344),h=a(39308),v=a(37508),x=a(14499),f=a(11782),b=a(6444),g=a(60336),y=a(99016),j=a(11040),w=a(1908),C=a(74920),E=a(13724),N=a(97332),S=a(82496);const T=(0,N.g0)({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),D=e=>{let{Value:t,Label:a}=e;return(0,S.jsx)(C.c,{Value:t,Label:a})},I=()=>{var e;const[t,a]=(0,l.useState)([]),[C,I]=(0,l.useState)([]),[F,A]=(0,l.useState)([]),[_,k]=(0,l.useState)(!1),[O,M]=(0,l.useState)(!1),[R,H]=(0,l.useState)({}),[P,B]=(0,l.useState)({From:(0,h.Ir)(),To:(0,h.Q7)(),EmpId:"",Name:"All Employees",display:0,salaryType:""});(0,l.useEffect)((()=>{(0,w.q)({address:"empAttendance/fingerPrintAttendance?Fromdate=".concat(P.From,"&Todate=").concat(P.To,"&EmpId=").concat(P.EmpId)}).then((e=>{if(e.success){a(e.data);const t=new Set(e.data.map((e=>null===e||void 0===e?void 0:e.Salary_Type)));A(Array.from(t));const l=[],r=new Set;e.data.forEach((e=>{r.has(e.Emp_Id)||(l.push({Emp_Name:e.Emp_Name,fingerPrintEmpId:e.fingerPrintEmpId,Emp_Id:e.Emp_Id}),r.add(e.Emp_Id))})),l.sort(((e,t)=>String(e.Emp_Name).localeCompare(t.Emp_Name))),I(l)}})).catch((e=>console.error(e)))}),[P.From,P.To,P.EmpId]);const L=()=>{k(!1),H({})},Q=(0,h.Oe)(new Date(P.From),new Date(P.To)),V=t.filter((e=>(0,h.Qr)(e.Emp_Id,P.EmpId))).length,z=Q-V,W=t.filter((e=>(0,h.Qr)(e.Emp_Id,P.EmpId))).reduce(((e,t)=>e+(new Date(t.OutTime)-new Date(t.InTime))),0),q=W/V,G=new Date(t.filter((e=>(0,h.Qr)(e.Emp_Id,P.EmpId))).reduce(((e,t)=>e+new Date(t.InTime).getTime()),0)/V).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),U=new Date(t.filter((e=>(0,h.Qr)(e.Emp_Id,P.EmpId))).reduce(((e,t)=>e+new Date(t.OutTime).getTime()),0)/V).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1});let K=Math.floor(q/36e5),X=Math.round(q%36e5/6e4);60===X&&(K+=1,X=0);const Z=t.filter((e=>(0,h.Qr)(e.Emp_Id,P.EmpId))).reduce(((e,t)=>e+new Date(t.InTime).getTime()),0)/V,J=t.filter((e=>(0,h.Qr)(e.Emp_Id,P.EmpId))).reduce(((e,t)=>e+new Date(t.OutTime).getTime()),0)/V,$=[{label:"Total Days",value:Q},{label:"Present Days",value:V},{label:"Absent Days",value:z},{label:"Average Hours",value:K+":"+X},{label:"Average In-Time",value:(0,h.a)(G)},{label:"Average Out-Time",value:(0,h.a)(U)},{label:"Total Hours Worked",value:"".concat(Math.floor(W/36e5)," hours")},{label:"Late Arrivals",value:t.filter((e=>(0,h.Qr)(e.Emp_Id,P.EmpId))).filter((e=>new Date(e.InTime).getTime()>Z)).length},{label:"Early Departures",value:t.filter((e=>(0,h.Qr)(e.Emp_Id,P.EmpId))).filter((e=>new Date(e.OutTime).getTime()<J)).length},{label:"Half Present Days",value:t.filter((e=>(0,h.Qr)(e.Emp_Id,P.EmpId))).filter((e=>"\xbdPresent"===e.AttendanceStatus.trim())).length}],Y=[{label:"Total Days",value:(0,h.Oe)(new Date(P.From),new Date(P.To))},{label:"Total Employees",value:C.length},{label:"Average Attendance",value:t.length/Q}],ee=e=>e.map((e=>({Emp_Id:e.Emp_Id,Employee:e.Emp_Name,InTime:e.InTime,OutTime:e.OutTime,Date:e.InTime,Salary_Type:e.Salary_Type}))).filter((e=>!P.EmpId||(0,h.Qr)(e.Emp_Id,P.EmpId))).filter((e=>!P.salaryType||e.Salary_Type===P.salaryType));return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(r.c,{children:(0,S.jsxs)(n.c,{sx:{minHeight:"50vh"},children:[(0,S.jsxs)("div",{className:"ps-3 pb-2 pt-0 d-flex align-items-center justify-content-between border-bottom mb-3",children:[(0,S.jsx)("h6",{className:"fa-18",children:"Employee Attendance"}),(0,S.jsxs)("div",{children:[(0,S.jsx)(i.c,{title:"Download Excel Data",children:(0,S.jsx)(o.c,{onClick:()=>(e=>{const t=(0,N.oF)(T)(e);(0,N.kj)(T)(t)})(ee(t)),className:"me-2",children:(0,S.jsx)(v.c,{})})}),(0,S.jsx)(s.c,{variant:"outlined",onClick:()=>M(!0),children:P.EmpId?"Emplyee Summary":"Attendance Summary"})]})]}),(0,S.jsxs)("div",{className:"px-2 row mb-4",children:[(0,S.jsxs)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,S.jsx)("label",{children:"Employee"}),(0,S.jsx)(m.cp,{value:{value:null===P||void 0===P?void 0:P.UserId,label:null===P||void 0===P?void 0:P.Name},onChange:e=>B({...P,EmpId:e.value,Name:e.label}),options:[{value:"",label:"("+C.length+") All Employees "},...C.map((e=>({value:null===e||void 0===e?void 0:e.Emp_Id,label:null===e||void 0===e?void 0:e.Emp_Name})))],styles:p.cF,isSearchable:!0,placeholder:"Employee Name"})]}),(0,S.jsxs)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,S.jsx)("label",{children:"From"}),(0,S.jsx)("input",{type:"date",className:"cus-inpt ",value:null===P||void 0===P?void 0:P.From,onChange:e=>B((t=>({...t,From:e.target.value})))})]}),(0,S.jsxs)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,S.jsx)("label",{children:"To"}),(0,S.jsx)("input",{type:"date",className:"cus-inpt ",value:null===P||void 0===P?void 0:P.To,onChange:e=>B((t=>({...t,To:e.target.value})))})]}),(0,S.jsxs)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,S.jsx)("label",{children:"Display View"}),(0,S.jsxs)("select",{className:"cus-inpt",value:null===P||void 0===P?void 0:P.display,onChange:e=>B((t=>({...t,display:Number(e.target.value)}))),children:[(0,S.jsx)("option",{value:0,children:"Calendar"}),(0,S.jsx)("option",{value:1,children:"Table"})]})]}),(0,S.jsxs)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,S.jsx)("label",{children:"Salary Type"}),(0,S.jsxs)("select",{className:"cus-inpt",value:null===P||void 0===P?void 0:P.salaryType,onChange:e=>B((t=>({...t,salaryType:e.target.value}))),children:[(0,S.jsx)("option",{value:"",children:"- Select -"}),F.map(((e,t)=>(0,S.jsx)("option",{value:e,children:e},t)))]})]})]}),(0,h.Qr)(P.display,0)&&(0,S.jsx)(f.c,{plugins:[g.c,j.c,b.c,y.cp],initialView:"listMonth",initialDate:new Date,events:null===(e=ee(t))||void 0===e?void 0:e.map((e=>({title:null===e||void 0===e?void 0:e.Employee,start:new Date(null===e||void 0===e?void 0:e.InTime),end:new Date(null===e||void 0===e?void 0:e.OutTime),objectData:e}))),headerToolbar:{left:"prev next",center:"title",right:"timeGridDay, timeGridWeek, dayGridMonth, listMonth"},slotDuration:"00:30:00",showNonCurrentDates:!1,editable:!1,selectable:!0,selectMirror:!0,eventClick:e=>{const t=e.event.extendedProps.objectData;H(t),k(!0)},datesSet:e=>{const t=new Date(e.endStr);t.setDate(t.getDate()-1);const a=t.toLocaleDateString("en-CA");B((t=>({...t,From:e.startStr.split("T")[0],To:a})))},height:800}),(0,h.Qr)(P.display,1)&&(0,S.jsx)(E.c,{dataArray:ee(t),columns:[{Field_Name:"Employee",Fied_Data:"string",isVisible:1,OrderBy:1},{Field_Name:"Salary_Type",Fied_Data:"string",isVisible:1,OrderBy:1},{Field_Name:"Date",Fied_Data:"date",isVisible:1,OrderBy:2},{Field_Name:"InTime",Fied_Data:"time",isVisible:1,OrderBy:2},{Field_Name:"OutTime",Fied_Data:"time",isVisible:1,OrderBy:3}],EnableSerialNumber:!0})]})}),(0,S.jsxs)(d.c,{open:_,onClose:L,fullWidth:!0,maxWidth:"sm",children:[(0,S.jsxs)(c.c,{className:"d-flex justify-content-between",children:[(0,S.jsx)("span",{children:"Attendance Details"}),(0,S.jsx)(o.c,{onClick:L,children:(0,S.jsx)(x.c,{sx:{color:"black"}})})]}),(0,S.jsx)(u.c,{children:(0,S.jsx)("div",{className:"table-responsive",children:(0,S.jsx)("table",{className:"table",children:(0,S.jsxs)("tbody",{children:[(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{className:"fa-14 fw-bold text-muted border",children:"Start Date"}),(0,S.jsx)("td",{className:"fa-14 fw-bold text-end text-muted border",children:"End Date"})]}),(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{className:"fa-14 fw-bold text-primary border",children:null!==R&&void 0!==R&&R.InTime?(0,h.uy)(null===R||void 0===R?void 0:R.InTime):" - "}),(0,S.jsx)("td",{className:"fa-14 fw-bold text-primary border text-end",children:null!==R&&void 0!==R&&R.OutTime?(0,h.uy)(null===R||void 0===R?void 0:R.OutTime):" - "})]}),(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{className:"fa-14 fw-bold text-muted border",children:"In Time"}),(0,S.jsx)("td",{className:"fa-14 fw-bold text-end text-muted border",children:"Out Time"})]}),(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{className:"fa-14 fw-bold text-primary border",children:null!==R&&void 0!==R&&R.InTime?(0,h.AX)(null===R||void 0===R?void 0:R.InTime):" - "}),(0,S.jsx)("td",{className:"fa-14 fw-bold text-primary border text-end",children:null!==R&&void 0!==R&&R.OutTime?(0,h.AX)(null===R||void 0===R?void 0:R.OutTime):" - "})]})]})})})})]}),(0,S.jsxs)(d.c,{open:O,onClose:()=>M(!1),maxWidth:"lg",fullWidth:!0,children:[(0,S.jsxs)(c.c,{className:"d-flex justify-content-between",children:[(0,S.jsxs)("span",{children:["Attendance summary ",P.EmpId&&"of "+P.Name,(0,S.jsx)("span",{className:"ps-2 blue-text",children:(0,h.uy)(P.From)+" - "+(0,h.uy)(P.To)})]}),(0,S.jsx)(o.c,{onClick:()=>M(!1),children:(0,S.jsx)(x.c,{sx:{color:"black"}})})]}),(0,S.jsx)(u.c,{children:(0,S.jsx)("div",{className:"row",children:P.EmpId?$.map(((e,t)=>(0,S.jsx)("div",{className:"col-lg-4 p-2",children:(0,S.jsx)(D,{Value:e.value,Label:e.label})},t))):Y.map(((e,t)=>(0,S.jsx)("div",{className:"col-lg-4 p-2",children:(0,S.jsx)(D,{Value:e.value,Label:e.label})},t)))})})]})]})}},14499:(e,t,a)=>{a.d(t,{c:()=>n});var l=a(27664),r=a(82496);const n=(0,l.c)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},37508:(e,t,a)=>{a.d(t,{c:()=>n});var l=a(27664),r=a(82496);const n=(0,l.c)((0,r.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"}),"FileDownload")},84436:(e,t,a)=>{a.d(t,{c:()=>x});var l=a(45072),r=a(95656),n=a(69060),i=a(79736),o=a(21412),s=a(12556),d=a(49836),c=a(10099),u=a(33448);function m(e){return(0,u.cp)("MuiCardContent",e)}(0,c.c)("MuiCardContent",["root"]);var p=a(82496);const h=["className","component"],v=(0,s.cp)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),x=n.forwardRef((function(e,t){const a=(0,d.C)({props:e,name:"MuiCardContent"}),{className:n,component:s="div"}=a,c=(0,r.c)(a,h),u=(0,l.c)({},a,{component:s}),x=(e=>{const{classes:t}=e;return(0,o.c)({root:["root"]},m,t)})(u);return(0,p.jsx)(v,(0,l.c)({as:s,className:(0,i.c)(x.root,n),ownerState:u,ref:t},c))}))},43692:(e,t,a)=>{a.d(t,{c:()=>f});var l=a(45072),r=a(95656),n=a(69060),i=a(79736),o=a(21412),s=a(12556),d=a(49836),c=a(85624),u=a(10099),m=a(33448);function p(e){return(0,m.cp)("MuiCard",e)}(0,u.c)("MuiCard",["root"]);var h=a(82496);const v=["className","raised"],x=(0,s.cp)(c.c,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),f=n.forwardRef((function(e,t){const a=(0,d.C)({props:e,name:"MuiCard"}),{className:n,raised:s=!1}=a,c=(0,r.c)(a,v),u=(0,l.c)({},a,{raised:s}),m=(e=>{const{classes:t}=e;return(0,o.c)({root:["root"]},p,t)})(u);return(0,h.jsx)(x,(0,l.c)({className:(0,i.c)(m.root,n),elevation:s?8:void 0,ref:t,ownerState:u},c))}))},97332:(e,t,a)=>{a.d(t,{g0:()=>r,kj:()=>E,oF:()=>C});var l={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},r=e=>Object.assign({},l,e);class n extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class i extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class o extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class s extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var d=e=>e,c=d,u=d,m=d,p=d,h=d,v=e=>p("object"===typeof e?e.key:e),x=e=>h("object"===typeof e?e.displayLabel:e),f=e=>t=>u(e+t+"\r\n"),b=e=>(t,a)=>g(e)(m(t+a)),g=e=>t=>t+e.fieldSeparator,y=(e,t)=>{if((e=>+e===e&&(!isFinite(e)||Boolean(e%1)))(t)){if("locale"===e.decimalSeparator)return c(t.toLocaleString());if(e.decimalSeparator)return c(t.toString().replace(".",e.decimalSeparator))}return c(t.toString())},j=(e,t)=>{let a=t;return(e.quoteStrings||e.fieldSeparator&&t.indexOf(e.fieldSeparator)>-1||e.quoteCharacter&&t.indexOf(e.quoteCharacter)>-1||t.indexOf("\n")>-1||t.indexOf("\r")>-1)&&(a=e.quoteCharacter+function(e,t){return'"'==t&&e.indexOf('"')>-1?e.replace(/"/g,'""'):e}(t,e.quoteCharacter)+e.quoteCharacter),c(a)},w=(e,t)=>{if("number"===typeof t)return y(e,t);if("string"===typeof t)return j(e,t);if("boolean"===typeof t&&e.boolDisplay)return((e,t)=>{const a=t?"true":"false";return c(e.boolDisplay[a])})(e,t);if(null===t||"undefined"===typeof t)return((e,t)=>"undefined"===typeof t&&void 0!==e.replaceUndefinedWith?j(e,e.replaceUndefinedWith+""):j(e,null===t?"null":""))(e,t);throw new s("\n    typeof ".concat(typeof t," isn't supported. Only number, string, boolean, null and undefined are supported.\n    Please convert the data in your object to one of those before generating the CSV.\n    "))},C=e=>t=>{const a=r(e),l=a.useKeysAsHeaders?Object.keys(t[0]):a.columnHeaders;let o=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),l=1;l<t;l++)a[l-1]=arguments[l];return a.reduce(((e,t)=>t(e)),e)}(u(""),(e=>t=>e.useBom?u(t+"\ufeff"):t)(a),(e=>t=>e.showTitle?f(u(t+e.title))(m("")):t)(a),((e,t)=>a=>{if(!e.showColumnHeaders)return a;if(t.length<1)throw new i("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let l=m("");for(let r=0;r<t.length;r++){const a=x(t[r]);l=b(e)(l,w(e,a))}return l=m(l.slice(0,-1)),f(a)(l)})(a,l),((e,t,a)=>l=>{let r=l;for(var n=0;n<a.length;n++){let l=m("");for(let r=0;r<t.length;r++){const i=v(t[r]),o=a[n][i];l=b(e)(l,w(e,o))}l=m(l.slice(0,-1)),r=f(r)(l)}return r})(a,l,t));if(o.length<1)throw new n("Output is empty. Is your data formatted correctly?");return o},E=e=>t=>{if(!window)throw new o("Downloading only supported in a browser environment.");const a=(e=>t=>{const a=t,l=r(e).useTextFile?"plain":"csv";return new Blob([a],{type:"text/".concat(l,";charset=utf8;")})})(e)(t),l=r(e),n=l.useTextFile?"txt":"csv",i="".concat(l.filename,".").concat(n),s=document.createElement("a");s.download=i,s.href=URL.createObjectURL(a),s.setAttribute("visibility","hidden"),document.body.appendChild(s),s.click(),document.body.removeChild(s)}}}]);
//# sourceMappingURL=4064.15864c9b.chunk.js.map