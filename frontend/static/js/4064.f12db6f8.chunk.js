"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[4064],{13724:(e,l,t)=>{t.d(l,{A:()=>_,c:()=>k});var a=t(69060),n=t(93996),r=t(14696),i=t(13224),o=t(27454),s=t(700),d=t(5548),c=t(3358),u=t(66931),m=t(89500),p=t(99904),h=t(85624),v=t(33856),x=t(58612),f=t(53248),b=t(29504),g=t(5930),y=t(39308),j=t(41459),w=t(46864),C=t(4284),S=t(76491),E=t(10728),N=t(49608),D=t(28064),T=(t(37692),t(35832)),F=t(82496);const I=(e,l)=>e.map((e=>{const t={};return l.forEach(((l,a)=>{if(l.isVisible||l.Defult_Display)if(l.isCustomCell&&l.Cell){const n=l.Cell({row:e}),r=l.ColumnHeader?String(l.ColumnHeader).replace(/\s+/g,"_").toLowerCase():"field_".concat(a+1);"string"!==typeof n&&"number"!==typeof n&&"bigint"!==typeof n||(t[r]=n)}else{let a=l.Field_Name;t[a]=e[a]||""}})),t})),_=function(){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{isVisible:1,Field_Name:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",Fied_Data:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"string",align:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"left",verticalAlign:arguments.length>4&&void 0!==arguments[4]?arguments[4]:"middle",...e&&{ColumnHeader:e}}},A=e=>{let{dataArray:l=[],columns:t=[],onClickFun:_=null,isExpendable:A=!1,expandableComp:k=null,tableMaxHeight:O=550,initialPageCount:M=20,EnableSerialNumber:H=!1,CellSize:P="small",disablePagination:B=!1,title:R="",PDFPrintOption:L=!1,ExcelPrintOption:Q=!1,maxHeightOption:V=!1,ButtonArea:z=null,MenuButtons:W=[]}=e;const[q,G]=(0,a.useState)(0),[U,K]=(0,a.useState)(M),[$,X]=(0,a.useState)([]),[Z,J]=(0,a.useState)(!0),Y=Z&&V?" max-content ":O,ee=[{type:"left",class:"text-start"},{type:"right",class:"text-end"},{type:"center",class:"text-center"}],le=[{type:"top",class:" vtop "},{type:"bottom",class:" vbottom "},{type:"center",class:" vctr "}],te=(e=>{if(!$.length)return e;return[...e].sort(((e,l)=>{for(const t of $){const{columnId:a,direction:n}=t,r=e[a],i=l[a];if(r!==i)return"asc"===n?r>i?1:-1:r<i?1:-1}return 0}))})(l),ae=q*U,ne=ae+U,re=te.slice(ae,ne),ie=(e,l)=>{switch(l){case"number":return(0,y.SA)(e);case"date":return(0,y.uy)(e);case"time":return(0,y.AX)(e);case"string":return e;default:return""}},oe=e=>{let{row:l,index:n}=e;const[r,i]=(0,a.useState)(!1),c="20px";return(0,F.jsxs)(a.Fragment,{children:[(0,F.jsxs)(o.c,{children:[!0===A&&k&&(0,F.jsx)(s.c,{className:"fa-13 border-end text-center vtop",children:(0,F.jsx)(d.c,{size:"small",onClick:()=>i((e=>!e)),children:r?(0,F.jsx)(j.c,{sx:{fontSize:c}}):(0,F.jsx)(w.c,{sx:{fontSize:c}})})}),!0===H&&(0,F.jsx)(s.c,{className:"fa-13 border-end text-center vtop",children:U*q+n+1}),null===t||void 0===t?void 0:t.map(((e,t)=>{var a,n;return((0,y.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,y.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,F.jsx)(s.c,{className:"fa-13 border-end "+(e.align?null===(a=ee.find((l=>l.type===String(e.align).toLowerCase())))||void 0===a?void 0:a.class:"")+(e.verticalAlign?null===(n=le.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===n?void 0:n.class:" vctr "),children:e.Cell({row:l,Field_Name:e.Field_Name})},t):Object.entries(l).map((a=>{var n,r;let[i,o]=a;return e.Field_Name===i&&((0,y.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,y.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(0,F.jsx)(s.c,{className:"fa-13 border-end "+(e.align?null===(n=ee.find((l=>l.type===String(e.align).toLowerCase())))||void 0===n?void 0:n.class:"")+(e.verticalAlign?null===(r=le.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===r?void 0:r.class:" vctr "),onClick:()=>_?_(l):console.log("Function not supplied"),children:ie(o,null===e||void 0===e?void 0:e.Fied_Data)},t)})))}))]}),!0===A&&k&&r&&(0,F.jsx)(o.c,{children:(0,F.jsx)(s.c,{colSpan:Number(null===t||void 0===t?void 0:t.length)+(!0===H?2:1),children:k({row:l,index:n})})})]})},se=()=>{const[e,o]=(0,a.useState)(null),s=Boolean(e);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(c.c,{title:"Export options and more...",children:(0,F.jsx)(d.c,{"aria-describedby":s,onClick:e=>{o(e.currentTarget)},className:"ms-2",size:"small",children:(0,F.jsx)(C.c,{})})}),(0,F.jsx)(u.cp,{open:s,anchorEl:e,onClose:()=>{o(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:(0,F.jsxs)(m.c,{children:[V&&(0,F.jsxs)(n.c,{onClick:()=>J((e=>!e)),disabled:(0,y.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,F.jsx)(r.c,{children:Z?(0,F.jsx)(S.c,{fontSize:"small",color:"primary"}):(0,F.jsx)(E.c,{fontSize:"small"})}),(0,F.jsx)(i.c,{color:Z?"success":"",children:"Max Height"})]}),L&&(0,F.jsxs)(n.c,{onClick:()=>((e,l)=>{try{const t=new D.default,a=I(e,l),n=l.filter((e=>e.isVisible||e.Defult_Display)).map((e=>e.Field_Name||String(e.ColumnHeader).replace(/\s+/g,"_").toLowerCase())),r=a.map((e=>n.map((l=>e[l])))).map(((e,l)=>({...e,Sno:l+1})));t.autoTable({head:[n],body:r}),t.save("table.pdf")}catch(t){console.error(t)}})(l,t),disabled:(0,y.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,F.jsx)(r.c,{children:(0,F.jsx)(N.c,{fontSize:"small",color:"primary"})}),(0,F.jsx)(i.c,{children:"Download PDF"})]}),Q&&(0,F.jsxs)(n.c,{onClick:()=>((e,l)=>{try{const t=I(e,l),a=T.c$.json_to_sheet(t),n=T.c$.book_new();T.c$.book_append_sheet(n,a,"Data"),T.a8(n,"table.xlsx")}catch(t){console.error(t)}})(l,t),disabled:(0,y.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,F.jsx)(r.c,{children:(0,F.jsx)(N.c,{fontSize:"small",color:"primary"})}),(0,F.jsx)(i.c,{children:"Download Excel"})]}),W.map((e=>function(e,l,t){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,F.jsxs)(n.c,{onClick:t,disabled:a,children:[(0,F.jsx)(r.c,{children:l}),(0,F.jsx)(i.c,{children:e})]})}(e.name,e.icon,e.onclick,e.disabled)))]})})]})};return(0,F.jsxs)("div",{className:"rounded-3 bg-white overflow-hidden",children:[(0,F.jsxs)("div",{className:"d-flex align-items-center flex-wrap px-3 py-2 flex-row-reverse ",children:[(L||Q||W.length>0||V)&&(0,F.jsx)(se,{}),z&&z,R&&(0,F.jsx)("h6",{className:"fw-bold text-muted flex-grow-1 m-0",children:R})]}),(0,F.jsx)(p.c,{component:h.c,sx:{maxHeight:Y},children:(0,F.jsxs)(v.c,{stickyHeader:!0,size:P,children:[(0,F.jsx)(x.c,{children:(0,F.jsxs)(o.c,{children:[A&&k&&(0,F.jsx)(s.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"#"}),H&&(0,F.jsx)(s.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"SNo"}),t.map(((e,l)=>{const t=(0,y.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,y.Qr)(null===e||void 0===e?void 0:e.isVisible,1),a=!1===Boolean(null===e||void 0===e?void 0:e.isCustomCell)||!e.Cell,n=$.find((l=>l.columnId===e.Field_Name)),r=n?n.direction:"asc";var i,o,d,c;return t?a?(0,F.jsx)(s.c,{className:"fa-13 fw-bold border-end border-top "+(e.align?null===(i=ee.find((l=>l.type===String(e.align).toLowerCase())))||void 0===i?void 0:i.class:""),style:{backgroundColor:"#EDF0F7"},sortDirection:!!n&&r,children:(0,F.jsx)(f.c,{active:!!n,direction:r,onClick:()=>(e=>{const l=$.find((l=>l.columnId===e));if(l){const t="asc"===l.direction;X($.map((l=>l.columnId===e?{...l,direction:t?"desc":"asc"}:l)))}else X([...$,{columnId:e,direction:"asc"}])})(e.Field_Name),children:e.ColumnHeader||(null===e||void 0===e||null===(o=e.Field_Name)||void 0===o?void 0:o.replace(/_/g," "))})},l):(0,F.jsx)(s.c,{className:"".concat(e.ColumnHeader||null!==e&&void 0!==e&&e.Field_Name?" fa-13 fw-bold border-end border-top p-2 appFont ":" p-0 "," ")+(e.align?null===(d=ee.find((l=>l.type===String(e.align).toLowerCase())))||void 0===d?void 0:d.class:""),style:{backgroundColor:"#EDF0F7"},children:e.ColumnHeader||(null===e||void 0===e||null===(c=e.Field_Name)||void 0===c?void 0:c.replace(/_/g," "))},l):null}))]})}),(0,F.jsxs)(b.c,{children:[(B?te:re).map(((e,l)=>(0,F.jsx)(oe,{row:e,index:l},l))),0===l.length&&(0,F.jsx)(o.c,{children:(0,F.jsx)(s.c,{colSpan:t.length+(!0===A&&k?1:0)+(!0===H?1:0),sx:{textAlign:"center"},children:"No Data"})})]})]})}),!B&&0!==re.length&&(0,F.jsx)("div",{className:"p-2 pb-0",children:(0,F.jsx)(g.c,{component:"div",count:l.length,page:q,onPageChange:(e,l)=>{G(l)},rowsPerPage:U,onRowsPerPageChange:e=>{K(parseInt(e.target.value,10)),G(0)},rowsPerPageOptions:Array.from(new Set([M,5,20,50,100,200,500])).sort(((e,l)=>e-l)),labelRowsPerPage:"Rows per page",showFirstButton:!0,showLastButton:!0})})]})};A.defaultProps={dataArray:[],columns:[],onClickFun:null,isExpendable:!1,expandableComp:null,tableMaxHeight:550,initialPageCount:20,EnableSerialNumber:!1,CellSize:"small",disablePagination:!1,title:void 0,PDFPrintOption:!1,ExcelPrintOption:!1,maxHeightOption:!1,ButtonArea:null,MenuButtons:[]};const k=A},62344:(e,l,t)=>{t.d(l,{o$:()=>i,o5:()=>o,cF:()=>r,iI:()=>n});const a=t.p+"static/media/smt.aa4d4f940bbebff07a57.png",n={table:{style:{width:"auto",backgroundColor:"transparent"}},rows:{style:{backgroundColor:"transparent"}},headCells:{style:{backgroundColor:"#6b9080f8",color:"white",fontSize:"14px"}}},r={control:(e,l)=>({...e,height:"45px",background:"rgba(255, 255, 255, 0.322)"}),menu:(e,l)=>({...e,zIndex:9999})},i=[{id:1,headname:"Menu ID",variant:"head",align:"left",width:100},{id:2,headname:"MenuName"},{id:3,headname:"Read Rights"},{id:4,headname:"Add Rights"},{id:5,headname:"Edit Rights"},{id:6,headname:"Delete Rights"},{id:7,headname:"Print Rights"},{id:8,headname:"Action"}],o=[{dataBase:1,name:"SHANKAR TRADERS",business:"Wholesale Merchant in Dhall",address:"32, Chitrakara Street, Madurai - 01 <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:a,gstin:"33AADFS6973R1ZD",phone:"984-313-1353, 984-335-5166",fssai:"12418012000818",bankAccount:"0021 5032 0885 122",ifsc:"TMBL0000002"},{dataBase:2,name:"SMT AGRO PRODUCTS",business:"",address:"H.O: 153, Chitrakara Street, 2nd Floor, Madurai -01 <br /> G.O: 746 Puliyur, Sayanapuram, Svga <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:a,gstin:"33ACMFS3420Q1ZQ",phone:"0452-4371625",fssai:"12418012000818",bankAccount:"0025 3031 0875 947",ifsc:"TMBL0000002"},{dataBase:3,name:"BHAVANI TRADERS",business:"",address:"H.O: 152-A, Chitrakara Street, Madurai -01 <br /> G.O: 30/1-Rajman Nagar, Chintamani Main Road, Mdu-01 <br /> Tax Invoice",logo:a,gstin:"33AAEFB6728J1ZG",phone:"958-559-7641, 958-559-7614",fssai:"12418012000670",bankAccount:"0021 5005 0800 309",ifsc:"TMBL0000002"}]},74920:(e,l,t)=>{t.d(l,{c:()=>r});var a=t(39308),n=t(82496);const r=e=>{let{Value:l,Label:t}=e;return(0,n.jsxs)("div",{className:"grid-card d-flex align-items-center justify-content-center flex-column cus-shadow",children:[(0,n.jsx)("h1",{style:{fontSize:"45px",color:"blue",margin:"0 0.5em"},children:isNaN(l)?l||"-":l?(0,a.SA)(l):"0"}),(0,n.jsx)("h2",{className:"fa-20",children:t})]})}},27112:(e,l,t)=>{t.r(l),t.d(l,{default:()=>F});var a=t(69060),n=t(43692),r=t(84436),i=t(3358),o=t(5548),s=t(89e3),d=t(82656),c=t(26773),u=t(4488),m=t(30612),p=t(62344),h=t(39308),v=t(37508),x=t(14499),f=t(11782),b=t(6444),g=t(60336),y=t(99016),j=t(11040),w=t(1908),C=t(74920),S=t(13724),E=t(97332),N=t(82496);const D=(0,E.g0)({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),T=e=>{let{Value:l,Label:t}=e;return(0,N.jsx)(C.c,{Value:l,Label:t})},F=()=>{var e;const[l,t]=(0,a.useState)([]),[C,F]=(0,a.useState)([]),[I,_]=(0,a.useState)([]),[A,k]=(0,a.useState)(!1),[O,M]=(0,a.useState)(!1),[H,P]=(0,a.useState)({}),[B,R]=(0,a.useState)({From:(0,h.Ir)(),To:(0,h.Q7)(),EmpId:"",Name:"All Employees",display:0,salaryType:""});(0,a.useEffect)((()=>{(0,w.q)({address:"empAttendance/fingerPrintAttendance?Fromdate=".concat(B.From,"&Todate=").concat(B.To,"&EmpId=").concat(B.EmpId)}).then((e=>{if(e.success){t(e.data);const l=new Set(e.data.map((e=>null===e||void 0===e?void 0:e.Salary_Type)));_(Array.from(l));const a=[],n=new Set;e.data.forEach((e=>{n.has(e.Emp_Id)||(a.push({Emp_Name:e.Emp_Name,fingerPrintEmpId:e.fingerPrintEmpId,Emp_Id:e.Emp_Id}),n.add(e.Emp_Id))})),a.sort(((e,l)=>String(e.Emp_Name).localeCompare(l.Emp_Name))),F(a)}})).catch((e=>console.error(e)))}),[B.From,B.To,B.EmpId]);const L=()=>{k(!1),P({})},Q=(0,h.Oe)(new Date(B.From),new Date(B.To)),V=l.filter((e=>(0,h.Qr)(e.Emp_Id,B.EmpId))).length,z=Q-V,W=l.filter((e=>(0,h.Qr)(e.Emp_Id,B.EmpId))).reduce(((e,l)=>e+(new Date(l.OutTime)-new Date(l.InTime))),0),q=W/V,G=new Date(l.filter((e=>(0,h.Qr)(e.Emp_Id,B.EmpId))).reduce(((e,l)=>e+new Date(l.InTime).getTime()),0)/V).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),U=new Date(l.filter((e=>(0,h.Qr)(e.Emp_Id,B.EmpId))).reduce(((e,l)=>e+new Date(l.OutTime).getTime()),0)/V).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1});let K=Math.floor(q/36e5),$=Math.round(q%36e5/6e4);60===$&&(K+=1,$=0);const X=l.filter((e=>(0,h.Qr)(e.Emp_Id,B.EmpId))).reduce(((e,l)=>e+new Date(l.InTime).getTime()),0)/V,Z=l.filter((e=>(0,h.Qr)(e.Emp_Id,B.EmpId))).reduce(((e,l)=>e+new Date(l.OutTime).getTime()),0)/V,J=[{label:"Total Days",value:Q},{label:"Present Days",value:V},{label:"Absent Days",value:z},{label:"Average Hours",value:K+":"+$},{label:"Average In-Time",value:(0,h.a)(G)},{label:"Average Out-Time",value:(0,h.a)(U)},{label:"Total Hours Worked",value:"".concat(Math.floor(W/36e5)," hours")},{label:"Late Arrivals",value:l.filter((e=>(0,h.Qr)(e.Emp_Id,B.EmpId))).filter((e=>new Date(e.InTime).getTime()>X)).length},{label:"Early Departures",value:l.filter((e=>(0,h.Qr)(e.Emp_Id,B.EmpId))).filter((e=>new Date(e.OutTime).getTime()<Z)).length},{label:"Half Present Days",value:l.filter((e=>(0,h.Qr)(e.Emp_Id,B.EmpId))).filter((e=>"\xbdPresent"===e.AttendanceStatus.trim())).length}],Y=[{label:"Total Days",value:(0,h.Oe)(new Date(B.From),new Date(B.To))},{label:"Total Employees",value:C.length},{label:"Average Attendance",value:l.length/Q}],ee=e=>e.map((e=>({Emp_Id:e.Emp_Id,Employee:e.Emp_Name,InTime:e.InTime,OutTime:e.OutTime,Date:e.InTime,Salary_Type:e.Salary_Type}))).filter((e=>!B.EmpId||(0,h.Qr)(e.Emp_Id,B.EmpId))).filter((e=>!B.salaryType||e.Salary_Type===B.salaryType));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(n.c,{children:(0,N.jsxs)(r.c,{sx:{minHeight:"50vh"},children:[(0,N.jsxs)("div",{className:"ps-3 pb-2 pt-0 d-flex align-items-center justify-content-between border-bottom mb-3",children:[(0,N.jsx)("h6",{className:"fa-18",children:"Employee Attendance"}),(0,N.jsxs)("div",{children:[(0,N.jsx)(i.c,{title:"Download Excel Data",children:(0,N.jsx)(o.c,{onClick:()=>(e=>{const l=(0,E.oF)(D)(e);(0,E.kj)(D)(l)})(ee(l)),className:"me-2",children:(0,N.jsx)(v.c,{})})}),(0,N.jsx)(s.c,{variant:"outlined",onClick:()=>M(!0),children:B.EmpId?"Emplyee Summary":"Attendance Summary"})]})]}),(0,N.jsxs)("div",{className:"px-2 row mb-4",children:[(0,N.jsxs)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,N.jsx)("label",{children:"Employee"}),(0,N.jsx)(m.cp,{value:{value:null===B||void 0===B?void 0:B.UserId,label:null===B||void 0===B?void 0:B.Name},onChange:e=>R({...B,EmpId:e.value,Name:e.label}),options:[{value:"",label:"("+C.length+") All Employees "},...C.map((e=>({value:null===e||void 0===e?void 0:e.Emp_Id,label:null===e||void 0===e?void 0:e.Emp_Name})))],styles:p.cF,isSearchable:!0,placeholder:"Employee Name"})]}),(0,N.jsxs)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,N.jsx)("label",{children:"From"}),(0,N.jsx)("input",{type:"date",className:"cus-inpt ",value:null===B||void 0===B?void 0:B.From,onChange:e=>R((l=>({...l,From:e.target.value})))})]}),(0,N.jsxs)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,N.jsx)("label",{children:"To"}),(0,N.jsx)("input",{type:"date",className:"cus-inpt ",value:null===B||void 0===B?void 0:B.To,onChange:e=>R((l=>({...l,To:e.target.value})))})]}),(0,N.jsxs)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,N.jsx)("label",{children:"Display View"}),(0,N.jsxs)("select",{className:"cus-inpt",value:null===B||void 0===B?void 0:B.display,onChange:e=>R((l=>({...l,display:Number(e.target.value)}))),children:[(0,N.jsx)("option",{value:0,children:"Calendar"}),(0,N.jsx)("option",{value:1,children:"Table"})]})]}),(0,N.jsxs)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,N.jsx)("label",{children:"Salary Type"}),(0,N.jsxs)("select",{className:"cus-inpt",value:null===B||void 0===B?void 0:B.salaryType,onChange:e=>R((l=>({...l,salaryType:e.target.value}))),children:[(0,N.jsx)("option",{value:"",children:"- Select -"}),I.map(((e,l)=>(0,N.jsx)("option",{value:e,children:e},l)))]})]})]}),(0,h.Qr)(B.display,0)&&(0,N.jsx)(f.c,{plugins:[g.c,j.c,b.c,y.cp],initialView:"listMonth",initialDate:new Date,events:null===(e=ee(l))||void 0===e?void 0:e.map((e=>({title:null===e||void 0===e?void 0:e.Employee,start:new Date(null===e||void 0===e?void 0:e.InTime),end:new Date(null===e||void 0===e?void 0:e.OutTime),objectData:e}))),headerToolbar:{left:"prev next",center:"title",right:"timeGridDay, timeGridWeek, dayGridMonth, listMonth"},slotDuration:"00:30:00",showNonCurrentDates:!1,editable:!1,selectable:!0,selectMirror:!0,eventClick:e=>{const l=e.event.extendedProps.objectData;P(l),k(!0)},datesSet:e=>{const l=new Date(e.endStr);l.setDate(l.getDate()-1);const t=l.toLocaleDateString("en-CA");R((l=>({...l,From:e.startStr.split("T")[0],To:t})))},height:800}),(0,h.Qr)(B.display,1)&&(0,N.jsx)(S.c,{dataArray:ee(l),columns:[{Field_Name:"Employee",Fied_Data:"string",isVisible:1,OrderBy:1},{Field_Name:"Salary_Type",Fied_Data:"string",isVisible:1,OrderBy:1},{Field_Name:"Date",Fied_Data:"date",isVisible:1,OrderBy:2},{Field_Name:"InTime",Fied_Data:"time",isVisible:1,OrderBy:2},{Field_Name:"OutTime",Fied_Data:"time",isVisible:1,OrderBy:3}],EnableSerialNumber:!0})]})}),(0,N.jsxs)(d.c,{open:A,onClose:L,fullWidth:!0,maxWidth:"sm",children:[(0,N.jsxs)(c.c,{className:"d-flex justify-content-between",children:[(0,N.jsx)("span",{children:"Attendance Details"}),(0,N.jsx)(o.c,{onClick:L,children:(0,N.jsx)(x.c,{sx:{color:"black"}})})]}),(0,N.jsx)(u.c,{children:(0,N.jsx)("div",{className:"table-responsive",children:(0,N.jsx)("table",{className:"table",children:(0,N.jsxs)("tbody",{children:[(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"fa-14 fw-bold text-muted border",children:"Start Date"}),(0,N.jsx)("td",{className:"fa-14 fw-bold text-end text-muted border",children:"End Date"})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"fa-14 fw-bold text-primary border",children:null!==H&&void 0!==H&&H.InTime?(0,h.uy)(null===H||void 0===H?void 0:H.InTime):" - "}),(0,N.jsx)("td",{className:"fa-14 fw-bold text-primary border text-end",children:null!==H&&void 0!==H&&H.OutTime?(0,h.uy)(null===H||void 0===H?void 0:H.OutTime):" - "})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"fa-14 fw-bold text-muted border",children:"In Time"}),(0,N.jsx)("td",{className:"fa-14 fw-bold text-end text-muted border",children:"Out Time"})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"fa-14 fw-bold text-primary border",children:null!==H&&void 0!==H&&H.InTime?(0,h.AX)(null===H||void 0===H?void 0:H.InTime):" - "}),(0,N.jsx)("td",{className:"fa-14 fw-bold text-primary border text-end",children:null!==H&&void 0!==H&&H.OutTime?(0,h.AX)(null===H||void 0===H?void 0:H.OutTime):" - "})]})]})})})})]}),(0,N.jsxs)(d.c,{open:O,onClose:()=>M(!1),maxWidth:"lg",fullWidth:!0,children:[(0,N.jsxs)(c.c,{className:"d-flex justify-content-between",children:[(0,N.jsxs)("span",{children:["Attendance summary ",B.EmpId&&"of "+B.Name,(0,N.jsx)("span",{className:"ps-2 blue-text",children:(0,h.uy)(B.From)+" - "+(0,h.uy)(B.To)})]}),(0,N.jsx)(o.c,{onClick:()=>M(!1),children:(0,N.jsx)(x.c,{sx:{color:"black"}})})]}),(0,N.jsx)(u.c,{children:(0,N.jsx)("div",{className:"row",children:B.EmpId?J.map(((e,l)=>(0,N.jsx)("div",{className:"col-lg-4 p-2",children:(0,N.jsx)(T,{Value:e.value,Label:e.label})},l))):Y.map(((e,l)=>(0,N.jsx)("div",{className:"col-lg-4 p-2",children:(0,N.jsx)(T,{Value:e.value,Label:e.label})},l)))})})]})]})}},14499:(e,l,t)=>{t.d(l,{c:()=>r});var a=t(27664),n=t(82496);const r=(0,a.c)((0,n.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},37508:(e,l,t)=>{t.d(l,{c:()=>r});var a=t(27664),n=t(82496);const r=(0,a.c)((0,n.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"}),"FileDownload")},84436:(e,l,t)=>{t.d(l,{c:()=>x});var a=t(45072),n=t(95656),r=t(69060),i=t(79736),o=t(21412),s=t(12556),d=t(49836),c=t(10099),u=t(33448);function m(e){return(0,u.cp)("MuiCardContent",e)}(0,c.c)("MuiCardContent",["root"]);var p=t(82496);const h=["className","component"],v=(0,s.cp)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,l)=>l.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),x=r.forwardRef((function(e,l){const t=(0,d.C)({props:e,name:"MuiCardContent"}),{className:r,component:s="div"}=t,c=(0,n.c)(t,h),u=(0,a.c)({},t,{component:s}),x=(e=>{const{classes:l}=e;return(0,o.c)({root:["root"]},m,l)})(u);return(0,p.jsx)(v,(0,a.c)({as:s,className:(0,i.c)(x.root,r),ownerState:u,ref:l},c))}))},43692:(e,l,t)=>{t.d(l,{c:()=>f});var a=t(45072),n=t(95656),r=t(69060),i=t(79736),o=t(21412),s=t(12556),d=t(49836),c=t(85624),u=t(10099),m=t(33448);function p(e){return(0,m.cp)("MuiCard",e)}(0,u.c)("MuiCard",["root"]);var h=t(82496);const v=["className","raised"],x=(0,s.cp)(c.c,{name:"MuiCard",slot:"Root",overridesResolver:(e,l)=>l.root})((()=>({overflow:"hidden"}))),f=r.forwardRef((function(e,l){const t=(0,d.C)({props:e,name:"MuiCard"}),{className:r,raised:s=!1}=t,c=(0,n.c)(t,v),u=(0,a.c)({},t,{raised:s}),m=(e=>{const{classes:l}=e;return(0,o.c)({root:["root"]},p,l)})(u);return(0,h.jsx)(x,(0,a.c)({className:(0,i.c)(m.root,r),elevation:s?8:void 0,ref:l,ownerState:u},c))}))},97332:(e,l,t)=>{t.d(l,{g0:()=>n,kj:()=>S,oF:()=>C});var a={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},n=e=>Object.assign({},a,e);class r extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class i extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class o extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class s extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var d=e=>e,c=d,u=d,m=d,p=d,h=d,v=e=>p("object"===typeof e?e.key:e),x=e=>h("object"===typeof e?e.displayLabel:e),f=e=>l=>u(e+l+"\r\n"),b=e=>(l,t)=>g(e)(m(l+t)),g=e=>l=>l+e.fieldSeparator,y=(e,l)=>{if((e=>+e===e&&(!isFinite(e)||Boolean(e%1)))(l)){if("locale"===e.decimalSeparator)return c(l.toLocaleString());if(e.decimalSeparator)return c(l.toString().replace(".",e.decimalSeparator))}return c(l.toString())},j=(e,l)=>{let t=l;return(e.quoteStrings||e.fieldSeparator&&l.indexOf(e.fieldSeparator)>-1||e.quoteCharacter&&l.indexOf(e.quoteCharacter)>-1||l.indexOf("\n")>-1||l.indexOf("\r")>-1)&&(t=e.quoteCharacter+function(e,l){return'"'==l&&e.indexOf('"')>-1?e.replace(/"/g,'""'):e}(l,e.quoteCharacter)+e.quoteCharacter),c(t)},w=(e,l)=>{if("number"===typeof l)return y(e,l);if("string"===typeof l)return j(e,l);if("boolean"===typeof l&&e.boolDisplay)return((e,l)=>{const t=l?"true":"false";return c(e.boolDisplay[t])})(e,l);if(null===l||"undefined"===typeof l)return((e,l)=>"undefined"===typeof l&&void 0!==e.replaceUndefinedWith?j(e,e.replaceUndefinedWith+""):j(e,null===l?"null":""))(e,l);throw new s("\n    typeof ".concat(typeof l," isn't supported. Only number, string, boolean, null and undefined are supported.\n    Please convert the data in your object to one of those before generating the CSV.\n    "))},C=e=>l=>{const t=n(e),a=t.useKeysAsHeaders?Object.keys(l[0]):t.columnHeaders;let o=function(e){for(var l=arguments.length,t=new Array(l>1?l-1:0),a=1;a<l;a++)t[a-1]=arguments[a];return t.reduce(((e,l)=>l(e)),e)}(u(""),(e=>l=>e.useBom?u(l+"\ufeff"):l)(t),(e=>l=>e.showTitle?f(u(l+e.title))(m("")):l)(t),((e,l)=>t=>{if(!e.showColumnHeaders)return t;if(l.length<1)throw new i("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let a=m("");for(let n=0;n<l.length;n++){const t=x(l[n]);a=b(e)(a,w(e,t))}return a=m(a.slice(0,-1)),f(t)(a)})(t,a),((e,l,t)=>a=>{let n=a;for(var r=0;r<t.length;r++){let a=m("");for(let n=0;n<l.length;n++){const i=v(l[n]),o=t[r][i];a=b(e)(a,w(e,o))}a=m(a.slice(0,-1)),n=f(n)(a)}return n})(t,a,l));if(o.length<1)throw new r("Output is empty. Is your data formatted correctly?");return o},S=e=>l=>{if(!window)throw new o("Downloading only supported in a browser environment.");const t=(e=>l=>{const t=l,a=n(e).useTextFile?"plain":"csv";return new Blob([t],{type:"text/".concat(a,";charset=utf8;")})})(e)(l),a=n(e),r=a.useTextFile?"txt":"csv",i="".concat(a.filename,".").concat(r),s=document.createElement("a");s.download=i,s.href=URL.createObjectURL(t),s.setAttribute("visibility","hidden"),document.body.appendChild(s),s.click(),document.body.removeChild(s)}}}]);
//# sourceMappingURL=4064.f12db6f8.chunk.js.map