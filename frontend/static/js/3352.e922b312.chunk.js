"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[3352],{13724:(e,l,a)=>{a.d(l,{A:()=>E,c:()=>T});var r=a(69060),s=a(93996),o=a(14696),i=a(13224),t=a(27454),n=a(700),d=a(5548),c=a(3358),m=a(66931),u=a(89500),p=a(43692),v=a(85624),h=a(99904),x=a(33856),g=a(58612),b=a(53248),f=a(29504),N=a(5930),j=a(39308),C=a(41459),y=a(46864),S=a(4284),_=a(76491),w=a(10728),F=a(49608),D=a(28064),P=(a(37692),a(35832)),k=a(82496);const A=(e,l)=>e.map((e=>{const a={};return l.forEach(((l,r)=>{if(l.isVisible||l.Defult_Display)if(l.isCustomCell&&l.Cell){const s=l.Cell({row:e}),o=l.ColumnHeader?String(l.ColumnHeader).replace(/\s+/g,"_").toLowerCase():"field_".concat(r+1);"string"!==typeof s&&"number"!==typeof s&&"bigint"!==typeof s||(a[o]=s)}else{let r=l.Field_Name;a[r]=e[r]||""}})),a})),E=function(){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{isVisible:1,Field_Name:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",Fied_Data:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"string",align:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"left",verticalAlign:arguments.length>4&&void 0!==arguments[4]?arguments[4]:"center",...e&&{ColumnHeader:e}}},R=e=>{let{dataArray:l=[],columns:a=[],onClickFun:E=null,isExpendable:R=!1,expandableComp:T=null,tableMaxHeight:O=550,initialPageCount:M=20,EnableSerialNumber:B=!1,CellSize:I="small",disablePagination:H=!1,title:z="",PDFPrintOption:V=!1,ExcelPrintOption:L=!1,maxHeightOption:U=!1,ButtonArea:Q=null,MenuButtons:W=[]}=e;const[$,q]=(0,r.useState)(0),[G,Z]=(0,r.useState)(M),[J,K]=(0,r.useState)([]),[X,Y]=(0,r.useState)(!0),ee=X&&U?" max-content ":O,le=[{type:"left",class:"text-start"},{type:"right",class:"text-end"},{type:"center",class:"text-center"}],ae=[{type:"top",class:" vtop "},{type:"bottom",class:" vbottom "},{type:"center",class:" vctr "}],re=(e=>{if(!J.length)return e;return[...e].sort(((e,l)=>{for(const a of J){const{columnId:r,direction:s}=a,o=e[r],i=l[r];if(o!==i)return"asc"===s?o>i?1:-1:o<i?1:-1}return 0}))})(l),se=$*G,oe=se+G,ie=re.slice(se,oe),te=(e,l)=>{switch(l){case"number":return(0,j.SA)(e);case"date":return(0,j.uy)(e);case"time":return(0,j.AX)(e);case"string":return e;default:return""}},ne=e=>{let{row:l,index:s}=e;const[o,i]=(0,r.useState)(!1),c="20px";return(0,k.jsxs)(r.Fragment,{children:[(0,k.jsxs)(t.c,{children:[!0===R&&T&&(0,k.jsx)(n.c,{className:"fa-13 border-end text-center vtop",children:(0,k.jsx)(d.c,{size:"small",onClick:()=>i((e=>!e)),children:o?(0,k.jsx)(C.c,{sx:{fontSize:c}}):(0,k.jsx)(y.c,{sx:{fontSize:c}})})}),!0===B&&(0,k.jsx)(n.c,{className:"fa-13 border-end text-center vtop",children:G*$+s+1}),null===a||void 0===a?void 0:a.map(((e,a)=>{var r,s;return((0,j.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,j.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,k.jsx)(n.c,{className:"fa-13 border-end "+(e.align?null===(r=le.find((l=>l.type===String(e.align).toLowerCase())))||void 0===r?void 0:r.class:"")+(e.verticalAlign?null===(s=ae.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===s?void 0:s.class:" vctr "),children:e.Cell({row:l,Field_Name:e.Field_Name})},a):Object.entries(l).map((r=>{var s,o;let[i,t]=r;return e.Field_Name===i&&((0,j.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,j.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(0,k.jsx)(n.c,{className:"fa-13 border-end "+(e.align?null===(s=le.find((l=>l.type===String(e.align).toLowerCase())))||void 0===s?void 0:s.class:"")+(e.verticalAlign?null===(o=ae.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===o?void 0:o.class:" vctr "),onClick:()=>E?E(l):console.log("Function not supplied"),children:te(t,null===e||void 0===e?void 0:e.Fied_Data)},a)})))}))]}),!0===R&&T&&o&&(0,k.jsx)(t.c,{children:(0,k.jsx)(n.c,{colSpan:Number(null===a||void 0===a?void 0:a.length)+(!0===B?2:1),children:T({row:l,index:s})})})]})},de=()=>{const[e,t]=(0,r.useState)(null),n=Boolean(e);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(c.c,{title:"Export options and more...",children:(0,k.jsx)(d.c,{"aria-describedby":n,onClick:e=>{t(e.currentTarget)},className:"ms-2",size:"small",children:(0,k.jsx)(S.c,{})})}),(0,k.jsx)(m.cp,{open:n,anchorEl:e,onClose:()=>{t(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:(0,k.jsxs)(u.c,{children:[U&&(0,k.jsxs)(s.c,{onClick:()=>Y((e=>!e)),disabled:(0,j.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,k.jsx)(o.c,{children:X?(0,k.jsx)(_.c,{fontSize:"small",color:"primary"}):(0,k.jsx)(w.c,{fontSize:"small"})}),(0,k.jsx)(i.c,{color:X?"success":"",children:"Max Height"})]}),V&&(0,k.jsxs)(s.c,{onClick:()=>((e,l)=>{try{const a=new D.default,r=A(e,l),s=l.filter((e=>e.isVisible||e.Defult_Display)).map((e=>e.Field_Name||String(e.ColumnHeader).replace(/\s+/g,"_").toLowerCase())),o=r.map((e=>s.map((l=>e[l])))).map(((e,l)=>({...e,Sno:l+1})));a.autoTable({head:[s],body:o}),a.save("table.pdf")}catch(a){console.error(a)}})(l,a),disabled:(0,j.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,k.jsx)(o.c,{children:(0,k.jsx)(F.c,{fontSize:"small",color:"primary"})}),(0,k.jsx)(i.c,{children:"Download PDF"})]}),L&&(0,k.jsxs)(s.c,{onClick:()=>((e,l)=>{try{const a=A(e,l),r=P.c$.json_to_sheet(a),s=P.c$.book_new();P.c$.book_append_sheet(s,r,"Data"),P.a8(s,"table.xlsx")}catch(a){console.error(a)}})(l,a),disabled:(0,j.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,k.jsx)(o.c,{children:(0,k.jsx)(F.c,{fontSize:"small",color:"primary"})}),(0,k.jsx)(i.c,{children:"Download Excel"})]}),W.map((e=>function(e,l,a){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,k.jsxs)(s.c,{onClick:a,disabled:r,children:[(0,k.jsx)(o.c,{children:l}),(0,k.jsx)(i.c,{children:e})]})}(e.name,e.icon,e.onclick,e.disabled)))]})})]})};return(0,k.jsxs)(p.c,{className:"rounded-3 bg-white overflow-hidden",component:v.c,children:[(0,k.jsxs)("div",{className:"d-flex align-items-center flex-wrap px-3 py-2 flex-row-reverse ",children:[(V||L||W.length>0||U)&&(0,k.jsx)(de,{}),Q&&Q,z&&(0,k.jsx)("h6",{className:"fw-bold text-muted flex-grow-1 m-0",children:z})]}),(0,k.jsx)(h.c,{sx:{maxHeight:ee},children:(0,k.jsxs)(x.c,{stickyHeader:!0,size:I,children:[(0,k.jsx)(g.c,{children:(0,k.jsxs)(t.c,{children:[R&&T&&(0,k.jsx)(n.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"#"}),B&&(0,k.jsx)(n.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"SNo"}),a.map(((e,l)=>{const a=(0,j.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,j.Qr)(null===e||void 0===e?void 0:e.isVisible,1),r=!1===Boolean(null===e||void 0===e?void 0:e.isCustomCell)||!e.Cell,s=J.find((l=>l.columnId===e.Field_Name)),o=s?s.direction:"asc";var i,t,d,c;return a?r?(0,k.jsx)(n.c,{className:"fa-13 fw-bold border-end border-top "+(e.align?null===(i=le.find((l=>l.type===String(e.align).toLowerCase())))||void 0===i?void 0:i.class:""),style:{backgroundColor:"#EDF0F7"},sortDirection:!!s&&o,children:(0,k.jsx)(b.c,{active:!!s,direction:o,onClick:()=>(e=>{const l=J.find((l=>l.columnId===e));if(l){const a="asc"===l.direction;K(J.map((l=>l.columnId===e?{...l,direction:a?"desc":"asc"}:l)))}else K([...J,{columnId:e,direction:"asc"}])})(e.Field_Name),children:e.ColumnHeader||(null===e||void 0===e||null===(t=e.Field_Name)||void 0===t?void 0:t.replace(/_/g," "))})},l):(0,k.jsx)(n.c,{className:"".concat(e.ColumnHeader||null!==e&&void 0!==e&&e.Field_Name?" fa-13 fw-bold border-end border-top p-2 appFont ":" p-0 "," ")+(e.align?null===(d=le.find((l=>l.type===String(e.align).toLowerCase())))||void 0===d?void 0:d.class:""),style:{backgroundColor:"#EDF0F7"},children:e.ColumnHeader||(null===e||void 0===e||null===(c=e.Field_Name)||void 0===c?void 0:c.replace(/_/g," "))},l):null}))]})}),(0,k.jsxs)(f.c,{children:[(H?re:ie).map(((e,l)=>(0,k.jsx)(ne,{row:e,index:l},l))),0===l.length&&(0,k.jsx)(t.c,{children:(0,k.jsx)(n.c,{colSpan:a.length+(!0===R&&T?1:0)+(!0===B?1:0),sx:{textAlign:"center"},children:"No Data"})})]})]})}),!H&&0!==ie.length&&(0,k.jsx)("div",{className:"p-2 pb-0",children:(0,k.jsx)(N.c,{component:"div",count:l.length,page:$,onPageChange:(e,l)=>{q(l)},rowsPerPage:G,onRowsPerPageChange:e=>{Z(parseInt(e.target.value,10)),q(0)},rowsPerPageOptions:Array.from(new Set([M,5,20,50,100,200,500])).sort(((e,l)=>e-l)),labelRowsPerPage:"Rows per page",showFirstButton:!0,showLastButton:!0})})]})};R.defaultProps={dataArray:[],columns:[],onClickFun:null,isExpendable:!1,expandableComp:null,tableMaxHeight:550,initialPageCount:20,EnableSerialNumber:!1,CellSize:"small",disablePagination:!1,title:void 0,PDFPrintOption:!1,ExcelPrintOption:!1,maxHeightOption:!1,ButtonArea:null,MenuButtons:[]};const T=R},62344:(e,l,a)=>{a.d(l,{o$:()=>i,o5:()=>t,cF:()=>o,iI:()=>s});const r=a.p+"static/media/smt.aa4d4f940bbebff07a57.png",s={table:{style:{width:"auto",backgroundColor:"transparent"}},rows:{style:{backgroundColor:"transparent"}},headCells:{style:{backgroundColor:"#6b9080f8",color:"white",fontSize:"14px"}}},o={control:(e,l)=>({...e,height:"45px",background:"rgba(255, 255, 255, 0.322)"}),menu:(e,l)=>({...e,zIndex:9999})},i=[{id:1,headname:"Menu ID",variant:"head",align:"left",width:100},{id:2,headname:"MenuName"},{id:3,headname:"Read Rights"},{id:4,headname:"Add Rights"},{id:5,headname:"Edit Rights"},{id:6,headname:"Delete Rights"},{id:7,headname:"Print Rights"},{id:8,headname:"Action"}],t=[{dataBase:1,name:"SHANKAR TRADERS",business:"Wholesale Merchant in Dhall",address:"32, Chitrakara Street, Madurai - 01 <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:r,gstin:"33AADFS6973R1ZD",phone:"984-313-1353, 984-335-5166",fssai:"12418012000818",bankAccount:"0021 5032 0885 122",ifsc:"TMBL0000002"},{dataBase:2,name:"SMT AGRO PRODUCTS",business:"",address:"H.O: 153, Chitrakara Street, 2nd Floor, Madurai -01 <br /> G.O: 746 Puliyur, Sayanapuram, Svga <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:r,gstin:"33ACMFS3420Q1ZQ",phone:"0452-4371625",fssai:"12418012000818",bankAccount:"0025 3031 0875 947",ifsc:"TMBL0000002"},{dataBase:3,name:"BHAVANI TRADERS",business:"",address:"H.O: 152-A, Chitrakara Street, Madurai -01 <br /> G.O: 30/1-Rajman Nagar, Chintamani Main Road, Mdu-01 <br /> Tax Invoice",logo:r,gstin:"33AAEFB6728J1ZG",phone:"958-559-7641, 958-559-7614",fssai:"12418012000670",bankAccount:"0021 5005 0800 309",ifsc:"TMBL0000002"}]},80312:(e,l,a)=>{a.r(l),a.d(l,{default:()=>O});var r=a(69060),s=a(43692),o=a(85624),i=a(84436),t=a(5548),n=a(27532),d=a(95656),c=a(45072),m=a(79736),u=a(21412),p=a(12556),v=a(49836),h=a(27664),x=a(82496);const g=(0,h.c)((0,x.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var b=a(10099),f=a(33448);function N(e){return(0,f.cp)("MuiAvatar",e)}(0,b.c)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var j=a(69888);const C=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],y=(0,p.cp)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,l)=>{const{ownerState:a}=e;return[l.root,l[a.variant],a.colorDefault&&l.colorDefault]}})((e=>{let{theme:l}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:l.typography.fontFamily,fontSize:l.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(l.vars||l).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,c.c)({color:(l.vars||l).palette.background.default},l.vars?{backgroundColor:l.vars.palette.Avatar.defaultBg}:(0,c.c)({backgroundColor:l.palette.grey[400]},l.applyStyles("dark",{backgroundColor:l.palette.grey[600]})))}]}})),S=(0,p.cp)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,l)=>l.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),_=(0,p.cp)(g,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,l)=>l.fallback})({width:"75%",height:"75%"});const w=r.forwardRef((function(e,l){const a=(0,v.C)({props:e,name:"MuiAvatar"}),{alt:s,children:o,className:i,component:t="div",slots:n={},slotProps:p={},imgProps:h,sizes:g,src:b,srcSet:f,variant:w="circular"}=a,F=(0,d.c)(a,C);let D=null;const P=function(e){let{crossOrigin:l,referrerPolicy:a,src:s,srcSet:o}=e;const[i,t]=r.useState(!1);return r.useEffect((()=>{if(!s&&!o)return;t(!1);let e=!0;const r=new Image;return r.onload=()=>{e&&t("loaded")},r.onerror=()=>{e&&t("error")},r.crossOrigin=l,r.referrerPolicy=a,r.src=s,o&&(r.srcset=o),()=>{e=!1}}),[l,a,s,o]),i}((0,c.c)({},h,{src:b,srcSet:f})),k=b||f,A=k&&"error"!==P,E=(0,c.c)({},a,{colorDefault:!A,component:t,variant:w}),R=(e=>{const{classes:l,variant:a,colorDefault:r}=e,s={root:["root",a,r&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,u.c)(s,N,l)})(E),[T,O]=(0,j.c)("img",{className:R.img,elementType:S,externalForwardedProps:{slots:n,slotProps:{img:(0,c.c)({},h,p.img)}},additionalProps:{alt:s,src:b,srcSet:f,sizes:g},ownerState:E});return D=A?(0,x.jsx)(T,(0,c.c)({},O)):o||0===o?o:k&&s?s[0]:(0,x.jsx)(_,{ownerState:E,className:R.fallback}),(0,x.jsx)(y,(0,c.c)({as:t,ownerState:E,className:(0,m.c)(R.root,i),ref:l},F,{children:D}))}));var F=a(77536),D=a(30612),P=a(62344),k=a(29248),A=a(73412),E=a(1908),R=a(13724),T=a(39308);const O=e=>{var l,a,d,c,m,u;let{loadingOn:p,loadingOff:v}=e;const h=localStorage.getItem("user"),g=JSON.parse(h),[b,f]=(0,r.useState)({}),{contextObj:N}=(0,r.useContext)(F.a),[j,C]=(0,r.useState)([]),[y,S]=(0,r.useState)({UserId:g.UserId,Name:g.Name});return(0,r.useEffect)((()=>{f({}),p&&p(),(0,E.q)({address:"dashboard/employeeAbstract?UserId=".concat(null===y||void 0===y?void 0:y.UserId)}).then((e=>{e.success&&f(e.data[0])})).catch((e=>console.error(e))).finally((()=>{v&&v()}))}),[null===y||void 0===y?void 0:y.UserId]),(0,r.useEffect)((()=>{1===Number(null===N||void 0===N?void 0:N.Print_Rights)&&(0,E.q)({address:"masters/users/employee/employeeAllDropDown?Company_id=".concat(null===g||void 0===g?void 0:g.Company_id)}).then((e=>{var l;e.success&&C(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.sort(((e,l)=>String(null===e||void 0===e?void 0:e.Name).localeCompare(null===l||void 0===l?void 0:l.Name))))})).catch((e=>console.error(e)))}),[]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(s.c,{component:o.c,children:[(0,x.jsxs)("div",{className:"p-3 m-0 border-bottom row align-items-center",children:[(0,x.jsx)("div",{style:{fontSize:"24px"},className:"flex-grow-1 col-lg-8 col-md-7 col-sm-4 col-12",children:"USER INFO"}),(0,x.jsx)("div",{className:"col-lg-4 col-md-5 col-sm-8 col-12",children:1===Number(null===N||void 0===N?void 0:N.Print_Rights)&&(0,x.jsx)(D.cp,{value:{value:null===y||void 0===y?void 0:y.UserId,label:null===y||void 0===y?void 0:y.Name},onChange:e=>S({...y,UserId:e.value,Name:e.label}),options:[{value:null===g||void 0===g?void 0:g.UserId,label:null===g||void 0===g?void 0:g.Name},...j.map((e=>({value:e.UserId,label:e.Name})))],styles:P.cF,isDisabled:0===Number(null===N||void 0===N?void 0:N.Print_Rights),isSearchable:!0,placeholder:"User Name"})})]}),(0,x.jsxs)(i.c,{className:"py-2",children:[(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-6 p-2",children:(0,x.jsxs)("div",{className:"d-flex align-items-center rounded-4 p-2 border",children:[(0,x.jsx)("div",{className:"pe-3",children:(0,x.jsx)(t.c,{className:"border p-1",children:(0,x.jsx)(k.c,{sx:{fontSize:"50px"},className:"text-muted"})})}),(0,x.jsxs)("div",{className:" flex-grow-1",children:[(0,x.jsx)("h6",{className:"mb-0 text-primary",children:null===b||void 0===b?void 0:b.Name}),(0,x.jsx)("p",{className:"mb-0 fa-14",children:null===b||void 0===b?void 0:b.UserType})]})]})}),(0,x.jsx)("div",{className:"col-md-6 p-2",children:(0,x.jsxs)("div",{className:"d-flex align-items-center rounded-4 p-2 border",children:[(0,x.jsx)("div",{className:"pe-3",children:(0,x.jsx)(t.c,{className:"border p-1",children:(0,x.jsx)(A.c,{sx:{fontSize:"50px"},className:"text-muted"})})}),(0,x.jsxs)("div",{className:" flex-grow-1",children:[(0,x.jsxs)("p",{className:"mb-0 fa-14 d-flex pe-2",children:[(0,x.jsx)("span",{className:"flex-grow-1",children:"Projects"}),null===b||void 0===b||null===(l=b.Projects)||void 0===l?void 0:l.length]}),(0,x.jsxs)("p",{className:"mb-0 fa-14 d-flex pe-2",children:[(0,x.jsx)("span",{className:"flex-grow-1",children:"Tasks"}),null===b||void 0===b||null===(a=b.AssignedTasks)||void 0===a?void 0:a.length]})]})]})})]}),(0,x.jsx)("hr",{className:"text-muted"}),(0,x.jsxs)("h6",{className:"mt-2 mb-3 ps-3",children:["Projects ( ",null===b||void 0===b||null===(d=b.Projects)||void 0===d?void 0:d.length," )"]}),(0,x.jsx)("div",{className:"px-3",children:(null===b||void 0===b||null===(c=b.Projects)||void 0===c?void 0:c.length)>0&&(null===b||void 0===b||null===(m=b.Projects)||void 0===m?void 0:m.map(((e,l)=>(0,x.jsx)(n.c,{color:"primary",avatar:(0,x.jsx)(w,{className:"text-uppercase",children:null===e||void 0===e?void 0:e.Project_Name[0]}),className:"mx-1",label:null===e||void 0===e?void 0:e.Project_Name},l))))}),(0,x.jsx)("br",{}),(0,x.jsxs)("h6",{className:"mt-2 mb-3 ps-3",children:["Tasks ( ",null===b||void 0===b||null===(u=b.AssignedTasks)||void 0===u?void 0:u.length," )"]}),(0,x.jsx)(R.c,{columns:[{Field_Name:"Task_Name",Fied_Data:"string",isVisible:1,OrderBy:1},{Field_Name:"Task_Desc",ColumnHeader:"Description",Fied_Data:"string",isVisible:1,OrderBy:2},{Field_Name:"Est_Start_Dt",ColumnHeader:"From Date",Fied_Data:"date",isVisible:1,OrderBy:3},{Field_Name:"Est_End_Dt",ColumnHeader:"To Date",Fied_Data:"date",isVisible:1,OrderBy:4},{isCustomCell:!0,Cell:e=>{let{row:l}=e;return null!==l&&void 0!==l&&l.Sch_Time?(0,T.a)(null===l||void 0===l?void 0:l.Sch_Time):null===l||void 0===l?void 0:l.Sch_Time},ColumnHeader:"Start Time",isVisible:1,OrderBy:1},{isCustomCell:!0,Cell:e=>{let{row:l}=e;return null!==l&&void 0!==l&&l.EN_Time?(0,T.a)(null===l||void 0===l?void 0:l.EN_Time):null===l||void 0===l?void 0:l.EN_Time},ColumnHeader:"End Time",isVisible:1,OrderBy:1},{Field_Name:"Sch_Period",ColumnHeader:"Duration",Fied_Data:"string",isVisible:1,OrderBy:1}],dataArray:Array.isArray(b.AssignedTasks)?b.AssignedTasks:[],isExpendable:!0,EnableSerialNumber:!0,expandableComp:e=>{let{row:l}=e;return(0,x.jsx)(R.c,{initialPageCount:15,dataArray:Array.isArray(l.Work_Details)?l.Work_Details:[],EnableSerialNumber:!0,columns:[{Field_Name:"Work_Dt",isVisible:1,Fied_Data:"date"},{Field_Name:"Start_Time",isVisible:1,Fied_Data:"string"},{Field_Name:"End_Time",isVisible:1,Fied_Data:"string"},{Field_Name:"Tot_Minutes",isVisible:1,Fied_Data:"number"},{Field_Name:"Work_Done",isVisible:1,Fied_Data:"string"},{Field_Name:"Parameters",isVisible:1,Fied_Data:"string",isCustomCell:!0,Cell:e=>{let{row:l}=e;return(0,x.jsx)("div",{className:" d-flex align-items-center flex-wrap p-2 pb-0",children:Array.isArray(l.Parameter_Details)&&l.Parameter_Details.map(((e,l)=>(0,x.jsxs)("div",{className:"d-flex align-items-center me-2",children:[(0,x.jsxs)("p",{className:"me-2",children:[null===e||void 0===e?void 0:e.Paramet_Name,":"]},l),(0,x.jsx)("p",{className:" fw-bold px-3 py-1 border rounded-3 ",children:(0,T.Q$)(null===e||void 0===e?void 0:e.Current_Value)&&"number"===(null===e||void 0===e?void 0:e.Paramet_Data_Type)?Number(null===e||void 0===e?void 0:e.Current_Value).toLocaleString("en-IN"):null===e||void 0===e?void 0:e.Current_Value})]})))})}}]})},tableMaxHeight:5e3})]})]})})}},84436:(e,l,a)=>{a.d(l,{c:()=>x});var r=a(45072),s=a(95656),o=a(69060),i=a(79736),t=a(21412),n=a(12556),d=a(49836),c=a(10099),m=a(33448);function u(e){return(0,m.cp)("MuiCardContent",e)}(0,c.c)("MuiCardContent",["root"]);var p=a(82496);const v=["className","component"],h=(0,n.cp)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,l)=>l.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),x=o.forwardRef((function(e,l){const a=(0,d.C)({props:e,name:"MuiCardContent"}),{className:o,component:n="div"}=a,c=(0,s.c)(a,v),m=(0,r.c)({},a,{component:n}),x=(e=>{const{classes:l}=e;return(0,t.c)({root:["root"]},u,l)})(m);return(0,p.jsx)(h,(0,r.c)({as:n,className:(0,i.c)(x.root,o),ownerState:m,ref:l},c))}))},69888:(e,l,a)=>{a.d(l,{c:()=>u});var r=a(45072),s=a(95656),o=a(91544),i=a(58152),t=a(79024),n=a(6256);const d=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],c=["component","slots","slotProps"],m=["component"];function u(e,l){const{className:a,elementType:u,ownerState:p,externalForwardedProps:v,getSlotOwnerState:h,internalForwardedProps:x}=l,g=(0,s.c)(l,d),{component:b,slots:f={[e]:void 0},slotProps:N={[e]:void 0}}=v,j=(0,s.c)(v,c),C=f[e]||u,y=(0,i.i)(N[e],p),S=(0,t.E)((0,r.c)({className:a},g,{externalForwardedProps:"root"===e?j:void 0,externalSlotProps:y})),{props:{component:_},internalRef:w}=S,F=(0,s.c)(S.props,m),D=(0,o.c)(w,null==y?void 0:y.ref,l.ref),P=h?h(F):{},k=(0,r.c)({},p,P),A="root"===e?_||b:_,E=(0,n.s)(C,(0,r.c)({},"root"===e&&!b&&!f[e]&&x,"root"!==e&&!f[e]&&x,F,A&&{as:A},{ref:D}),k);return Object.keys(P).forEach((e=>{delete E[e]})),[C,E]}}}]);
//# sourceMappingURL=3352.e922b312.chunk.js.map