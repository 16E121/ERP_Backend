"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[3352],{13724:(e,a,r)=>{r.d(a,{c:()=>f});var s=r(69060),l=r(27454),o=r(700),t=r(5548),i=r(99904),n=r(85624),d=r(33856),c=r(58612),m=r(53248),u=r(29504),p=r(5930),v=r(39308),h=r(41459),x=r(46864),g=r(82496);const b=e=>{let{dataArray:a=[],columns:r=[],onClickFun:b=null,isExpendable:f=!1,expandableComp:N=null,tableMaxHeight:j=550,initialPageCount:C=20,EnableSerialNumber:y=!1,CellSize:S="small",disablePagination:_=!1,title:F=""}=e;const[w,D]=(0,s.useState)(0),[P,k]=(0,s.useState)(C),[A,R]=(0,s.useState)([]),M=[{type:"left",class:""},{type:"right",class:"text-end"},{type:"center",class:"text-center"}],I=(e=>{if(!A.length)return e;return[...e].sort(((e,a)=>{for(const r of A){const{columnId:s,direction:l}=r,o=e[s],t=a[s];if(o!==t)return"asc"===l?o>t?1:-1:o<t?1:-1}return 0}))})(a),E=w*P,T=E+P,B=I.slice(E,T),O=(e,a)=>{switch(a){case"number":return(0,v.SA)(e);case"date":return(0,v.uy)(e);case"time":return(0,v.AX)(e);case"string":return e;default:return""}},V=e=>{let{row:a,index:i}=e;const[n,d]=(0,s.useState)(!1),c="20px";return(0,g.jsxs)(s.Fragment,{children:[(0,g.jsxs)(l.c,{children:[!0===f&&N&&(0,g.jsx)(o.c,{className:"fa-13 border-end text-center",children:(0,g.jsx)(t.c,{size:"small",onClick:()=>d((e=>!e)),children:n?(0,g.jsx)(h.c,{sx:{fontSize:c}}):(0,g.jsx)(x.c,{sx:{fontSize:c}})})}),!0===y&&(0,g.jsx)(o.c,{className:"fa-13 border-end text-center",children:P*w+i+1}),null===r||void 0===r?void 0:r.map(((e,r)=>{var s;return((0,v.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,v.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,g.jsx)(o.c,{className:"fa-13 border-end "+(e.align?null===(s=M.find((a=>a.type===String(e.align).toLowerCase())))||void 0===s?void 0:s.class:""),children:e.Cell({row:a,Field_Name:e.Field_Name})},r):Object.entries(a).map((s=>{var l;let[t,i]=s;return e.Field_Name===t&&((0,v.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,v.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(0,g.jsx)(o.c,{className:"fa-13 border-end "+(e.align?null===(l=M.find((a=>a.type===String(e.align).toLowerCase())))||void 0===l?void 0:l.class:""),onClick:()=>b?b(a):console.log("Function not supplied"),children:O(i,null===e||void 0===e?void 0:e.Fied_Data)},r)})))}))]}),!0===f&&N&&n&&(0,g.jsx)(l.c,{children:(0,g.jsx)(o.c,{colSpan:Number(null===r||void 0===r?void 0:r.length)+(!0===y?2:1),children:N({row:a,index:i})})})]})};return(0,g.jsxs)("div",{children:[F&&(0,g.jsx)("h6",{className:"fw-bold text-muted",children:F}),(0,g.jsx)(i.c,{component:n.c,sx:{maxHeight:j},children:(0,g.jsxs)(d.c,{stickyHeader:!0,size:S,children:[(0,g.jsx)(c.c,{children:(0,g.jsxs)(l.c,{children:[!0===f&&N&&(0,g.jsx)(o.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"#"}),!0===y&&(0,g.jsx)(o.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"SNo"}),r.map(((e,a)=>{var r,s,l,t;return((0,v.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,v.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,g.jsx)(o.c,{className:"".concat(e.ColumnHeader?"fa-13 fw-bold border-end border-top":" p-0 ")+(e.align?null===(l=M.find((a=>a.type===String(e.align).toLowerCase())))||void 0===l?void 0:l.class:""),style:{backgroundColor:"#EDF0F7"},children:e.ColumnHeader?e.ColumnHeader:null===e||void 0===e||null===(t=e.Field_Name)||void 0===t?void 0:t.replace(/_/g," ")},a):(0,g.jsx)(o.c,{className:"fa-13 fw-bold border-end border-top "+(e.align?null===(r=M.find((a=>a.type===String(e.align).toLowerCase())))||void 0===r?void 0:r.class:""),style:{backgroundColor:"#EDF0F7"},sortDirection:!!A.some((a=>a.columnId===e.Field_Name))&&A.find((a=>a.columnId===e.Field_Name)).direction,children:(0,g.jsx)(m.c,{active:A.some((a=>a.columnId===e.Field_Name)),direction:A.some((a=>a.columnId===e.Field_Name))?A.find((a=>a.columnId===e.Field_Name)).direction:"asc",onClick:()=>(e=>{const a=A.find((a=>a.columnId===e));if(a){const r="asc"===a.direction;R(A.map((a=>a.columnId===e?{...a,direction:r?"desc":"asc"}:a)))}else R([...A,{columnId:e,direction:"asc"}])})(e.Field_Name),children:e.ColumnHeader?e.ColumnHeader:null===e||void 0===e||null===(s=e.Field_Name)||void 0===s?void 0:s.replace(/_/g," ")})},a))}))]})}),(0,g.jsxs)(u.c,{children:[(_?a:B).map(((e,a)=>(0,g.jsx)(V,{row:e,index:a},a))),0===a.length&&(0,g.jsx)(l.c,{children:(0,g.jsx)(o.c,{colSpan:r.length+(!0===f&&N?1:0)+(!0===y?1:0),sx:{textAlign:"center"},children:"No Data"})})]})]})}),!_&&0!==B.length&&(0,g.jsx)("div",{className:"p-2 pb-0",children:(0,g.jsx)(p.c,{component:"div",count:a.length,page:w,onPageChange:(e,a)=>{D(a)},rowsPerPage:P,onRowsPerPageChange:e=>{k(parseInt(e.target.value,10)),D(0)},rowsPerPageOptions:Array.from(new Set([C,5,20,50,100,200,500])).sort(((e,a)=>e-a)),labelRowsPerPage:"Rows per page",showFirstButton:!0,showLastButton:!0})})]})};b.defaultProps={dataArray:[],columns:[],onClickFun:null,isExpendable:!1,expandableComp:null,tableMaxHeight:550,initialPageCount:20,EnableSerialNumber:!1,CellSize:"small",disablePagination:!1,title:void 0};const f=b},62344:(e,a,r)=>{r.d(a,{o$:()=>t,o5:()=>i,cF:()=>o,iI:()=>l});const s=r.p+"static/media/smt.aa4d4f940bbebff07a57.png",l={table:{style:{width:"auto",backgroundColor:"transparent"}},rows:{style:{backgroundColor:"transparent"}},headCells:{style:{backgroundColor:"#6b9080f8",color:"white",fontSize:"14px"}}},o={control:(e,a)=>({...e,height:"45px",background:"rgba(255, 255, 255, 0.322)"}),menu:(e,a)=>({...e,zIndex:9999})},t=[{id:1,headname:"Menu ID",variant:"head",align:"left",width:100},{id:2,headname:"MenuName"},{id:3,headname:"Read Rights"},{id:4,headname:"Add Rights"},{id:5,headname:"Edit Rights"},{id:6,headname:"Delete Rights"},{id:7,headname:"Print Rights"},{id:8,headname:"Action"}],i=[{dataBase:1,name:"SHANKAR TRADERS",business:"Wholesale Merchant in Dhall",address:"32, Chitrakara Street, Madurai - 01 <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:s,gstin:"33AADFS6973R1ZD",phone:"984-313-1353, 984-335-5166",fssai:"12418012000818",bankAccount:"0021 5032 0885 122",ifsc:"TMBL0000002"},{dataBase:2,name:"SMT AGRO PRODUCTS",business:"",address:"H.O: 153, Chitrakara Street, 2nd Floor, Madurai -01 <br /> G.O: 746 Puliyur, Sayanapuram, Svga <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:s,gstin:"33ACMFS3420Q1ZQ",phone:"0452-4371625",fssai:"12418012000818",bankAccount:"0025 3031 0875 947",ifsc:"TMBL0000002"},{dataBase:3,name:"BHAVANI TRADERS",business:"",address:"H.O: 152-A, Chitrakara Street, Madurai -01 <br /> G.O: 30/1-Rajman Nagar, Chintamani Main Road, Mdu-01 <br /> Tax Invoice",logo:s,gstin:"33AAEFB6728J1ZG",phone:"958-559-7641, 958-559-7614",fssai:"12418012000670",bankAccount:"0021 5005 0800 309",ifsc:"TMBL0000002"}]},80312:(e,a,r)=>{r.r(a),r.d(a,{default:()=>E});var s=r(69060),l=r(43692),o=r(85624),t=r(84436),i=r(5548),n=r(27532),d=r(95656),c=r(45072),m=r(79736),u=r(21412),p=r(12556),v=r(49836),h=r(27664),x=r(82496);const g=(0,h.c)((0,x.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var b=r(10099),f=r(33448);function N(e){return(0,f.cp)("MuiAvatar",e)}(0,b.c)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var j=r(69888);const C=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],y=(0,p.cp)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a[r.variant],r.colorDefault&&a.colorDefault]}})((e=>{let{theme:a}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,c.c)({color:(a.vars||a).palette.background.default},a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:(0,c.c)({backgroundColor:a.palette.grey[400]},a.applyStyles("dark",{backgroundColor:a.palette.grey[600]})))}]}})),S=(0,p.cp)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),_=(0,p.cp)(g,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,a)=>a.fallback})({width:"75%",height:"75%"});const F=s.forwardRef((function(e,a){const r=(0,v.C)({props:e,name:"MuiAvatar"}),{alt:l,children:o,className:t,component:i="div",slots:n={},slotProps:p={},imgProps:h,sizes:g,src:b,srcSet:f,variant:F="circular"}=r,w=(0,d.c)(r,C);let D=null;const P=function(e){let{crossOrigin:a,referrerPolicy:r,src:l,srcSet:o}=e;const[t,i]=s.useState(!1);return s.useEffect((()=>{if(!l&&!o)return;i(!1);let e=!0;const s=new Image;return s.onload=()=>{e&&i("loaded")},s.onerror=()=>{e&&i("error")},s.crossOrigin=a,s.referrerPolicy=r,s.src=l,o&&(s.srcset=o),()=>{e=!1}}),[a,r,l,o]),t}((0,c.c)({},h,{src:b,srcSet:f})),k=b||f,A=k&&"error"!==P,R=(0,c.c)({},r,{colorDefault:!A,component:i,variant:F}),M=(e=>{const{classes:a,variant:r,colorDefault:s}=e,l={root:["root",r,s&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,u.c)(l,N,a)})(R),[I,E]=(0,j.c)("img",{className:M.img,elementType:S,externalForwardedProps:{slots:n,slotProps:{img:(0,c.c)({},h,p.img)}},additionalProps:{alt:l,src:b,srcSet:f,sizes:g},ownerState:R});return D=A?(0,x.jsx)(I,(0,c.c)({},E)):o||0===o?o:k&&l?l[0]:(0,x.jsx)(_,{ownerState:R,className:M.fallback}),(0,x.jsx)(y,(0,c.c)({as:i,ownerState:R,className:(0,m.c)(M.root,t),ref:a},w,{children:D}))}));var w=r(77536),D=r(30612),P=r(62344),k=r(29248),A=r(73412),R=r(1908),M=r(13724),I=r(39308);const E=()=>{var e,a,r,d,c,m;const u=localStorage.getItem("user"),p=JSON.parse(u),[v,h]=(0,s.useState)({}),{contextObj:g}=(0,s.useContext)(w.a),[b,f]=(0,s.useState)([]),[N,j]=(0,s.useState)({UserId:p.UserId,Name:p.Name});return(0,s.useEffect)((()=>{h({}),(0,R.q)({address:"dashboard/employeeAbstract?UserId=".concat(null===N||void 0===N?void 0:N.UserId)}).then((e=>{e.success&&h(e.data[0])})).catch((e=>console.error(e)))}),[null===N||void 0===N?void 0:N.UserId]),(0,s.useEffect)((()=>{(0,R.q)({address:"masters/users/employee/dropDown?Company_id=".concat(null===p||void 0===p?void 0:p.Company_id)}).then((e=>{e.success&&f(e.data)})).catch((e=>console.error(e)))}),[]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(l.c,{component:o.c,children:[(0,x.jsxs)("div",{className:"p-3 m-0 border-bottom row align-items-center",children:[(0,x.jsx)("div",{style:{fontSize:"24px"},className:"flex-grow-1 col-lg-8 col-md-7 col-sm-4 col-12",children:"USER INFO"}),(0,x.jsx)("div",{className:"col-lg-4 col-md-5 col-sm-8 col-12",children:1===Number(null===g||void 0===g?void 0:g.Print_Rights)&&(0,x.jsx)(D.cp,{value:{value:null===N||void 0===N?void 0:N.UserId,label:null===N||void 0===N?void 0:N.Name},onChange:e=>j({...N,UserId:e.value,Name:e.label}),options:[{value:null===p||void 0===p?void 0:p.UserId,label:null===p||void 0===p?void 0:p.Name},...b.map((e=>({value:e.UserId,label:e.Name})))],styles:P.cF,isDisabled:0===Number(null===g||void 0===g?void 0:g.Print_Rights),isSearchable:!0,placeholder:"User Name"})})]}),(0,x.jsxs)(t.c,{className:"py-2",children:[(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-6 p-2",children:(0,x.jsxs)("div",{className:"d-flex align-items-center rounded-4 p-2 border",children:[(0,x.jsx)("div",{className:"pe-3",children:(0,x.jsx)(i.c,{className:"border p-1",children:(0,x.jsx)(k.c,{sx:{fontSize:"50px"},className:"text-muted"})})}),(0,x.jsxs)("div",{className:" flex-grow-1",children:[(0,x.jsx)("h6",{className:"mb-0 text-primary",children:null===v||void 0===v?void 0:v.Name}),(0,x.jsx)("p",{className:"mb-0 fa-14",children:null===v||void 0===v?void 0:v.UserType})]})]})}),(0,x.jsx)("div",{className:"col-md-6 p-2",children:(0,x.jsxs)("div",{className:"d-flex align-items-center rounded-4 p-2 border",children:[(0,x.jsx)("div",{className:"pe-3",children:(0,x.jsx)(i.c,{className:"border p-1",children:(0,x.jsx)(A.c,{sx:{fontSize:"50px"},className:"text-muted"})})}),(0,x.jsxs)("div",{className:" flex-grow-1",children:[(0,x.jsxs)("p",{className:"mb-0 fa-14 d-flex pe-2",children:[(0,x.jsx)("span",{className:"flex-grow-1",children:"Projects"}),null===v||void 0===v||null===(e=v.Projects)||void 0===e?void 0:e.length]}),(0,x.jsxs)("p",{className:"mb-0 fa-14 d-flex pe-2",children:[(0,x.jsx)("span",{className:"flex-grow-1",children:"Tasks"}),null===v||void 0===v||null===(a=v.AssignedTasks)||void 0===a?void 0:a.length]})]})]})})]}),(0,x.jsx)("hr",{className:"text-muted"}),(0,x.jsxs)("h6",{className:"mt-2 mb-3 ps-3",children:["Projects ( ",null===v||void 0===v||null===(r=v.Projects)||void 0===r?void 0:r.length," )"]}),(0,x.jsx)("div",{className:"px-3",children:(null===v||void 0===v||null===(d=v.Projects)||void 0===d?void 0:d.length)>0&&(null===v||void 0===v||null===(c=v.Projects)||void 0===c?void 0:c.map(((e,a)=>(0,x.jsx)(n.c,{color:"primary",avatar:(0,x.jsx)(F,{className:"text-uppercase",children:null===e||void 0===e?void 0:e.Project_Name[0]}),className:"mx-1",label:null===e||void 0===e?void 0:e.Project_Name},a))))}),(0,x.jsx)("br",{}),(0,x.jsxs)("h6",{className:"mt-2 mb-3 ps-3",children:["Tasks ( ",null===v||void 0===v||null===(m=v.AssignedTasks)||void 0===m?void 0:m.length," )"]}),(0,x.jsx)(M.c,{columns:[{Field_Name:"Task_Name",Fied_Data:"string",isVisible:1,OrderBy:1},{Field_Name:"Task_Desc",Fied_Data:"string",isVisible:1,OrderBy:2},{Field_Name:"Est_Start_Dt",Fied_Data:"date",isVisible:1,OrderBy:3},{Field_Name:"Est_End_Dt",Fied_Data:"date",isVisible:1,OrderBy:4},{Field_Name:"Sch_Time",Fied_Data:"string",isVisible:1,OrderBy:1},{Field_Name:"EN_Time",Fied_Data:"string",isVisible:1,OrderBy:1},{Field_Name:"Sch_Period",Fied_Data:"string",isVisible:1,OrderBy:1}],dataArray:Array.isArray(v.AssignedTasks)?v.AssignedTasks:[],isExpendable:!0,EnableSerialNumber:!0,expandableComp:e=>{let{row:a}=e;return(0,x.jsx)(M.c,{initialPageCount:15,dataArray:Array.isArray(a.Work_Details)?a.Work_Details:[],EnableSerialNumber:!0,columns:[{Field_Name:"Work_Dt",isVisible:1,Fied_Data:"date"},{Field_Name:"Start_Time",isVisible:1,Fied_Data:"string"},{Field_Name:"End_Time",isVisible:1,Fied_Data:"string"},{Field_Name:"Tot_Minutes",isVisible:1,Fied_Data:"number"},{Field_Name:"Work_Done",isVisible:1,Fied_Data:"string"},{Field_Name:"Parameters",isVisible:1,Fied_Data:"string",isCustomCell:!0,Cell:e=>{let{row:a}=e;return(0,x.jsx)("div",{className:" d-flex align-items-center flex-wrap p-2 pb-0",children:Array.isArray(a.Parameter_Details)&&a.Parameter_Details.map(((e,a)=>(0,x.jsxs)("div",{className:"d-flex align-items-center me-2",children:[(0,x.jsxs)("p",{className:"me-2",children:[null===e||void 0===e?void 0:e.Paramet_Name,":"]},a),(0,x.jsx)("p",{className:" fw-bold px-3 py-1 border rounded-3 ",children:(0,I.Q$)(null===e||void 0===e?void 0:e.Current_Value)&&"number"===(null===e||void 0===e?void 0:e.Paramet_Data_Type)?Number(null===e||void 0===e?void 0:e.Current_Value).toLocaleString("en-IN"):null===e||void 0===e?void 0:e.Current_Value})]})))})}}]})},tableMaxHeight:740})]})]})})}},84436:(e,a,r)=>{r.d(a,{c:()=>x});var s=r(45072),l=r(95656),o=r(69060),t=r(79736),i=r(21412),n=r(12556),d=r(49836),c=r(10099),m=r(33448);function u(e){return(0,m.cp)("MuiCardContent",e)}(0,c.c)("MuiCardContent",["root"]);var p=r(82496);const v=["className","component"],h=(0,n.cp)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,a)=>a.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),x=o.forwardRef((function(e,a){const r=(0,d.C)({props:e,name:"MuiCardContent"}),{className:o,component:n="div"}=r,c=(0,l.c)(r,v),m=(0,s.c)({},r,{component:n}),x=(e=>{const{classes:a}=e;return(0,i.c)({root:["root"]},u,a)})(m);return(0,p.jsx)(h,(0,s.c)({as:n,className:(0,t.c)(x.root,o),ownerState:m,ref:a},c))}))},43692:(e,a,r)=>{r.d(a,{c:()=>g});var s=r(45072),l=r(95656),o=r(69060),t=r(79736),i=r(21412),n=r(12556),d=r(49836),c=r(85624),m=r(10099),u=r(33448);function p(e){return(0,u.cp)("MuiCard",e)}(0,m.c)("MuiCard",["root"]);var v=r(82496);const h=["className","raised"],x=(0,n.cp)(c.c,{name:"MuiCard",slot:"Root",overridesResolver:(e,a)=>a.root})((()=>({overflow:"hidden"}))),g=o.forwardRef((function(e,a){const r=(0,d.C)({props:e,name:"MuiCard"}),{className:o,raised:n=!1}=r,c=(0,l.c)(r,h),m=(0,s.c)({},r,{raised:n}),u=(e=>{const{classes:a}=e;return(0,i.c)({root:["root"]},p,a)})(m);return(0,v.jsx)(x,(0,s.c)({className:(0,t.c)(u.root,o),elevation:n?8:void 0,ref:a,ownerState:m},c))}))},69888:(e,a,r)=>{r.d(a,{c:()=>u});var s=r(45072),l=r(95656),o=r(91544),t=r(58152),i=r(79024),n=r(6256);const d=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],c=["component","slots","slotProps"],m=["component"];function u(e,a){const{className:r,elementType:u,ownerState:p,externalForwardedProps:v,getSlotOwnerState:h,internalForwardedProps:x}=a,g=(0,l.c)(a,d),{component:b,slots:f={[e]:void 0},slotProps:N={[e]:void 0}}=v,j=(0,l.c)(v,c),C=f[e]||u,y=(0,t.i)(N[e],p),S=(0,i.E)((0,s.c)({className:r},g,{externalForwardedProps:"root"===e?j:void 0,externalSlotProps:y})),{props:{component:_},internalRef:F}=S,w=(0,l.c)(S.props,m),D=(0,o.c)(F,null==y?void 0:y.ref,a.ref),P=h?h(w):{},k=(0,s.c)({},p,P),A="root"===e?_||b:_,R=(0,n.s)(C,(0,s.c)({},"root"===e&&!b&&!f[e]&&x,"root"!==e&&!f[e]&&x,w,A&&{as:A},{ref:D}),k);return Object.keys(P).forEach((e=>{delete R[e]})),[C,R]}}}]);
//# sourceMappingURL=3352.b3535fd1.chunk.js.map