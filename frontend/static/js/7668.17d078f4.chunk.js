"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[7668],{13724:(e,l,s)=>{s.d(l,{A:()=>k,c:()=>T});var a=s(69060),n=s(93996),i=s(14696),o=s(13224),t=s(27454),d=s(700),r=s(5548),c=s(3358),m=s(66931),u=s(89500),x=s(99904),h=s(85624),v=s(33856),b=s(58612),f=s(53248),p=s(29504),j=s(5930),g=s(39308),N=s(41459),S=s(46864),y=s(4284),C=s(76491),_=s(10728),w=s(49608),D=s(28064),I=(s(37692),s(35832)),F=s(82496);const A=(e,l)=>e.map((e=>{const s={};return l.forEach(((l,a)=>{if(l.isVisible||l.Defult_Display)if(l.isCustomCell&&l.Cell){const n=l.Cell({row:e}),i=l.ColumnHeader?String(l.ColumnHeader).replace(/\s+/g,"_").toLowerCase():"field_".concat(a+1);"string"!==typeof n&&"number"!==typeof n&&"bigint"!==typeof n||(s[i]=n)}else{let a=l.Field_Name;s[a]=e[a]||""}})),s})),k=function(){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{isVisible:1,Field_Name:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",Fied_Data:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"string",align:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"left",verticalAlign:arguments.length>4&&void 0!==arguments[4]?arguments[4]:"middle",...e&&{ColumnHeader:e}}},L=e=>{let{dataArray:l=[],columns:s=[],onClickFun:k=null,isExpendable:L=!1,expandableComp:T=null,tableMaxHeight:M=550,initialPageCount:R=20,EnableSerialNumber:z=!1,CellSize:B="small",disablePagination:E=!1,title:P="",PDFPrintOption:H=!1,ExcelPrintOption:O=!1,maxHeightOption:V=!1,ButtonArea:Q=null,MenuButtons:G=[]}=e;const[q,U]=(0,a.useState)(0),[$,W]=(0,a.useState)(R),[Z,J]=(0,a.useState)([]),[K,X]=(0,a.useState)(!0),Y=K&&V?" max-content ":M,ee=[{type:"left",class:"text-start"},{type:"right",class:"text-end"},{type:"center",class:"text-center"}],le=[{type:"top",class:" vtop "},{type:"bottom",class:" vbottom "},{type:"center",class:" vctr "}],se=(e=>{if(!Z.length)return e;return[...e].sort(((e,l)=>{for(const s of Z){const{columnId:a,direction:n}=s,i=e[a],o=l[a];if(i!==o)return"asc"===n?i>o?1:-1:i<o?1:-1}return 0}))})(l),ae=q*$,ne=ae+$,ie=se.slice(ae,ne),oe=(e,l)=>{switch(l){case"number":return(0,g.SA)(e);case"date":return(0,g.uy)(e);case"time":return(0,g.AX)(e);case"string":return e;default:return""}},te=e=>{let{row:l,index:n}=e;const[i,o]=(0,a.useState)(!1),c="20px";return(0,F.jsxs)(a.Fragment,{children:[(0,F.jsxs)(t.c,{children:[!0===L&&T&&(0,F.jsx)(d.c,{className:"fa-13 border-end text-center vtop",children:(0,F.jsx)(r.c,{size:"small",onClick:()=>o((e=>!e)),children:i?(0,F.jsx)(N.c,{sx:{fontSize:c}}):(0,F.jsx)(S.c,{sx:{fontSize:c}})})}),!0===z&&(0,F.jsx)(d.c,{className:"fa-13 border-end text-center vtop",children:$*q+n+1}),null===s||void 0===s?void 0:s.map(((e,s)=>{var a,n;return((0,g.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,g.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,F.jsx)(d.c,{className:"fa-13 border-end "+(e.align?null===(a=ee.find((l=>l.type===String(e.align).toLowerCase())))||void 0===a?void 0:a.class:"")+(e.verticalAlign?null===(n=le.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===n?void 0:n.class:" vctr "),children:e.Cell({row:l,Field_Name:e.Field_Name})},s):Object.entries(l).map((a=>{var n,i;let[o,t]=a;return e.Field_Name===o&&((0,g.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,g.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(0,F.jsx)(d.c,{className:"fa-13 border-end "+(e.align?null===(n=ee.find((l=>l.type===String(e.align).toLowerCase())))||void 0===n?void 0:n.class:"")+(e.verticalAlign?null===(i=le.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===i?void 0:i.class:" vctr "),onClick:()=>k?k(l):console.log("Function not supplied"),children:oe(t,null===e||void 0===e?void 0:e.Fied_Data)},s)})))}))]}),!0===L&&T&&i&&(0,F.jsx)(t.c,{children:(0,F.jsx)(d.c,{colSpan:Number(null===s||void 0===s?void 0:s.length)+(!0===z?2:1),children:T({row:l,index:n})})})]})},de=()=>{const[e,t]=(0,a.useState)(null),d=Boolean(e);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(c.c,{title:"Export options and more...",children:(0,F.jsx)(r.c,{"aria-describedby":d,onClick:e=>{t(e.currentTarget)},className:"ms-2",size:"small",children:(0,F.jsx)(y.c,{})})}),(0,F.jsx)(m.cp,{open:d,anchorEl:e,onClose:()=>{t(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:(0,F.jsxs)(u.c,{children:[V&&(0,F.jsxs)(n.c,{onClick:()=>X((e=>!e)),disabled:(0,g.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,F.jsx)(i.c,{children:K?(0,F.jsx)(C.c,{fontSize:"small",color:"primary"}):(0,F.jsx)(_.c,{fontSize:"small"})}),(0,F.jsx)(o.c,{color:K?"success":"",children:"Max Height"})]}),H&&(0,F.jsxs)(n.c,{onClick:()=>((e,l)=>{try{const s=new D.default,a=A(e,l),n=l.filter((e=>e.isVisible||e.Defult_Display)).map((e=>e.Field_Name||String(e.ColumnHeader).replace(/\s+/g,"_").toLowerCase())),i=a.map((e=>n.map((l=>e[l])))).map(((e,l)=>({...e,Sno:l+1})));s.autoTable({head:[n],body:i}),s.save("table.pdf")}catch(s){console.error(s)}})(l,s),disabled:(0,g.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,F.jsx)(i.c,{children:(0,F.jsx)(w.c,{fontSize:"small",color:"primary"})}),(0,F.jsx)(o.c,{children:"Download PDF"})]}),O&&(0,F.jsxs)(n.c,{onClick:()=>((e,l)=>{try{const s=A(e,l),a=I.c$.json_to_sheet(s),n=I.c$.book_new();I.c$.book_append_sheet(n,a,"Data"),I.a8(n,"table.xlsx")}catch(s){console.error(s)}})(l,s),disabled:(0,g.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,F.jsx)(i.c,{children:(0,F.jsx)(w.c,{fontSize:"small",color:"primary"})}),(0,F.jsx)(o.c,{children:"Download Excel"})]}),G.map((e=>function(e,l,s){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,F.jsxs)(n.c,{onClick:s,disabled:a,children:[(0,F.jsx)(i.c,{children:l}),(0,F.jsx)(o.c,{children:e})]})}(e.name,e.icon,e.onclick,e.disabled)))]})})]})};return(0,F.jsxs)("div",{className:"rounded-3 bg-white overflow-hidden",children:[(0,F.jsxs)("div",{className:"d-flex align-items-center flex-wrap px-3 py-2 flex-row-reverse ",children:[(H||O||G.length>0||V)&&(0,F.jsx)(de,{}),Q&&Q,P&&(0,F.jsx)("h6",{className:"fw-bold text-muted flex-grow-1 m-0",children:P})]}),(0,F.jsx)(x.c,{component:h.c,sx:{maxHeight:Y},children:(0,F.jsxs)(v.c,{stickyHeader:!0,size:B,children:[(0,F.jsx)(b.c,{children:(0,F.jsxs)(t.c,{children:[L&&T&&(0,F.jsx)(d.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"#"}),z&&(0,F.jsx)(d.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"SNo"}),s.map(((e,l)=>{const s=(0,g.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,g.Qr)(null===e||void 0===e?void 0:e.isVisible,1),a=!1===Boolean(null===e||void 0===e?void 0:e.isCustomCell)||!e.Cell,n=Z.find((l=>l.columnId===e.Field_Name)),i=n?n.direction:"asc";var o,t,r,c;return s?a?(0,F.jsx)(d.c,{className:"fa-13 fw-bold border-end border-top "+(e.align?null===(o=ee.find((l=>l.type===String(e.align).toLowerCase())))||void 0===o?void 0:o.class:""),style:{backgroundColor:"#EDF0F7"},sortDirection:!!n&&i,children:(0,F.jsx)(f.c,{active:!!n,direction:i,onClick:()=>(e=>{const l=Z.find((l=>l.columnId===e));if(l){const s="asc"===l.direction;J(Z.map((l=>l.columnId===e?{...l,direction:s?"desc":"asc"}:l)))}else J([...Z,{columnId:e,direction:"asc"}])})(e.Field_Name),children:e.ColumnHeader||(null===e||void 0===e||null===(t=e.Field_Name)||void 0===t?void 0:t.replace(/_/g," "))})},l):(0,F.jsx)(d.c,{className:"".concat(e.ColumnHeader||null!==e&&void 0!==e&&e.Field_Name?" fa-13 fw-bold border-end border-top p-2 appFont ":" p-0 "," ")+(e.align?null===(r=ee.find((l=>l.type===String(e.align).toLowerCase())))||void 0===r?void 0:r.class:""),style:{backgroundColor:"#EDF0F7"},children:e.ColumnHeader||(null===e||void 0===e||null===(c=e.Field_Name)||void 0===c?void 0:c.replace(/_/g," "))},l):null}))]})}),(0,F.jsxs)(p.c,{children:[(E?se:ie).map(((e,l)=>(0,F.jsx)(te,{row:e,index:l},l))),0===l.length&&(0,F.jsx)(t.c,{children:(0,F.jsx)(d.c,{colSpan:s.length+(!0===L&&T?1:0)+(!0===z?1:0),sx:{textAlign:"center"},children:"No Data"})})]})]})}),!E&&0!==ie.length&&(0,F.jsx)("div",{className:"p-2 pb-0",children:(0,F.jsx)(j.c,{component:"div",count:l.length,page:q,onPageChange:(e,l)=>{U(l)},rowsPerPage:$,onRowsPerPageChange:e=>{W(parseInt(e.target.value,10)),U(0)},rowsPerPageOptions:Array.from(new Set([R,5,20,50,100,200,500])).sort(((e,l)=>e-l)),labelRowsPerPage:"Rows per page",showFirstButton:!0,showLastButton:!0})})]})};L.defaultProps={dataArray:[],columns:[],onClickFun:null,isExpendable:!1,expandableComp:null,tableMaxHeight:550,initialPageCount:20,EnableSerialNumber:!1,CellSize:"small",disablePagination:!1,title:void 0,PDFPrintOption:!1,ExcelPrintOption:!1,maxHeightOption:!1,ButtonArea:null,MenuButtons:[]};const T=L},62344:(e,l,s)=>{s.d(l,{o$:()=>o,o5:()=>t,cF:()=>i,iI:()=>n});const a=s.p+"static/media/smt.aa4d4f940bbebff07a57.png",n={table:{style:{width:"auto",backgroundColor:"transparent"}},rows:{style:{backgroundColor:"transparent"}},headCells:{style:{backgroundColor:"#6b9080f8",color:"white",fontSize:"14px"}}},i={control:(e,l)=>({...e,height:"45px",background:"rgba(255, 255, 255, 0.322)"}),menu:(e,l)=>({...e,zIndex:9999})},o=[{id:1,headname:"Menu ID",variant:"head",align:"left",width:100},{id:2,headname:"MenuName"},{id:3,headname:"Read Rights"},{id:4,headname:"Add Rights"},{id:5,headname:"Edit Rights"},{id:6,headname:"Delete Rights"},{id:7,headname:"Print Rights"},{id:8,headname:"Action"}],t=[{dataBase:1,name:"SHANKAR TRADERS",business:"Wholesale Merchant in Dhall",address:"32, Chitrakara Street, Madurai - 01 <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:a,gstin:"33AADFS6973R1ZD",phone:"984-313-1353, 984-335-5166",fssai:"12418012000818",bankAccount:"0021 5032 0885 122",ifsc:"TMBL0000002"},{dataBase:2,name:"SMT AGRO PRODUCTS",business:"",address:"H.O: 153, Chitrakara Street, 2nd Floor, Madurai -01 <br /> G.O: 746 Puliyur, Sayanapuram, Svga <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:a,gstin:"33ACMFS3420Q1ZQ",phone:"0452-4371625",fssai:"12418012000818",bankAccount:"0025 3031 0875 947",ifsc:"TMBL0000002"},{dataBase:3,name:"BHAVANI TRADERS",business:"",address:"H.O: 152-A, Chitrakara Street, Madurai -01 <br /> G.O: 30/1-Rajman Nagar, Chintamani Main Road, Mdu-01 <br /> Tax Invoice",logo:a,gstin:"33AAEFB6728J1ZG",phone:"958-559-7641, 958-559-7614",fssai:"12418012000670",bankAccount:"0021 5005 0800 309",ifsc:"TMBL0000002"}]},95112:(e,l,s)=>{s.d(l,{c:()=>o});var a=s(39308),n=s(62344),i=s(82496);const o=e=>{var l;let{companyInfo:s,invoieInfo:o,expencesInfo:t}=e;const d=(e,l)=>{let s=0;return e.forEach((e=>{s+=Number(e[l])})),s};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"d-flex justify-content-between align-items-center ",children:[(0,i.jsxs)("div",{className:"d-flex",children:[(0,i.jsx)("img",{src:null===(l=n.o5[null===s||void 0===s?void 0:s.Company_Id])||void 0===l?void 0:l.logo,className:"invoiceLogo",alt:"company_logo"}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)("p",{className:"mb-0 ",children:null===s||void 0===s?void 0:s.Company_Name}),(0,i.jsx)("p",{className:"mb-0 text-muted",children:null===s||void 0===s?void 0:s.Company_address_1}),(0,i.jsx)("p",{className:"mb-0 text-muted fa-14",children:null===s||void 0===s?void 0:s.Company_address_2}),(null===s||void 0===s?void 0:s.Company_address_3)&&(0,i.jsx)("p",{className:"mb-0 text-muted fa-14",children:null===s||void 0===s?void 0:s.Company_address_3})]})]}),(0,i.jsxs)("div",{className:"table-responsive",children:[(0,i.jsx)("table",{className:"table",children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"p-1 border-0 fa-13",children:"GSTIN"}),(0,i.jsx)("td",{className:"p-1 border-0 fa-13 text-end",children:null===s||void 0===s?void 0:s.Company_GSTIN})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"p-1 border-0 fa-13",children:"PHONE"}),(0,i.jsx)("td",{className:"p-1 border-0 fa-13 text-end",children:null===s||void 0===s?void 0:s.Company_Mobile})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"p-1 border-0 fa-13",children:"FSSAI"}),(0,i.jsx)("td",{className:"p-1 border-0 fa-13 text-end",children:null===s||void 0===s?void 0:s.fssai_no})]})]})}),(0,i.jsxs)("p",{className:"mb-0 fa-13 d-flex",children:[(0,i.jsx)("span",{className:"flex-grow-1 text-muted",children:" "}),(0,i.jsx)("span",{children:" "})]}),(0,i.jsxs)("p",{className:"mb-0 fa-13 d-flex",children:[(0,i.jsx)("span",{className:"flex-grow-1 text-muted"}),(0,i.jsx)("span",{})]}),(0,i.jsxs)("p",{className:"mb-0 fa-13 d-flex",children:[(0,i.jsx)("span",{className:"flex-grow-1 text-muted"}),(0,i.jsx)("span",{})]})]})]}),(0,i.jsx)("table",{className:"table mb-0 border",children:(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{className:"border",children:[(0,i.jsx)("p",{className:"fa-13 mb-0",children:"To"}),(0,i.jsx)("p",{className:"fa-13 mb-0 ps-3 fw-bold",children:null===s||void 0===s?void 0:s.Customer_name}),(0,i.jsx)("p",{className:"fa-13 mb-0 ps-3",children:null===s||void 0===s?void 0:s.Customer_Mobile}),(0,i.jsxs)("p",{className:"fa-13 mb-0 ps-3",children:["GSTIN: ",null===s||void 0===s?void 0:s.Customer_GSTIN]})]}),(0,i.jsxs)("td",{className:"border",children:[(0,i.jsxs)("p",{className:"mb-0 d-flex fa-13",children:["Date:",(0,i.jsx)("span",{className:"flex-grow-1 ps-2 text-primary",children:null!==s&&void 0!==s&&s.invoice_date?new Date(null===s||void 0===s?void 0:s.invoice_date).toLocaleDateString("en-IN",{day:"2-digit",month:"2-digit",year:"2-digit"}):""}),(0,i.jsx)("span",{children:null===s||void 0===s?void 0:s.Bill_Type})]}),(0,i.jsxs)("p",{className:"fa-13 mb-0",children:["Bill No: ",null===s||void 0===s?void 0:s.invoice_no]}),(0,i.jsxs)("p",{className:"fa-13 mb-0 d-flex",children:[(0,i.jsxs)("span",{className:"flex-grow-1",children:["Broker: ",null===s||void 0===s?void 0:s.Broker_Name]}),(0,i.jsxs)("span",{children:["Transpoter: ",null===s||void 0===s?void 0:s.Transporter]})]})]})]})})}),(0,i.jsx)("div",{className:"table-responsive",children:(0,i.jsxs)("table",{className:"table mb-0",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{className:"fa-13 border",children:"Sno"}),(0,i.jsx)("th",{className:"fa-13 border",children:"Items"}),(0,i.jsx)("th",{className:"fa-13 border",children:"HSN"}),(0,i.jsx)("th",{className:"fa-13 border",children:"GST"}),(0,i.jsx)("th",{className:"fa-13 border",children:"Qty"}),(0,i.jsx)("th",{className:"fa-13 border",children:"Rate"}),(0,i.jsx)("th",{className:"fa-13 border",children:"Bags"}),(0,i.jsx)("th",{className:"fa-13 border",children:"Amount"})]})}),(0,i.jsxs)("tbody",{children:[null===o||void 0===o?void 0:o.map(((e,l)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fa-13 border",children:l+1}),(0,i.jsx)("td",{className:"fa-13 border",children:null===e||void 0===e?void 0:e.stock_item_name}),(0,i.jsx)("td",{className:"fa-13 border",children:null===e||void 0===e?void 0:e.hsn_code}),(0,i.jsx)("td",{className:"fa-13 border",children:Number(null===e||void 0===e?void 0:e.igst)?null===e||void 0===e?void 0:e.igst:Number(null===e||void 0===e?void 0:e.cgst)+Number(e.sgst)}),(0,i.jsx)("td",{className:"fa-13 border",children:Number(null===e||void 0===e?void 0:e.bill_qty).toLocaleString("en-IN")}),(0,i.jsx)("td",{className:"fa-13 border",children:((null===e||void 0===e?void 0:e.amount)/(null===e||void 0===e?void 0:e.bill_qty)).toLocaleString("en-IN")}),(0,i.jsx)("td",{className:"fa-13 border",children:Number(null!==e&&void 0!==e&&e.bags?null===e||void 0===e?void 0:e.bags:null===e||void 0===e?void 0:e.bill_alt_qty).toLocaleString("en-IN")}),(0,i.jsx)("td",{className:"fa-13 border",children:Number(null===e||void 0===e?void 0:e.amount).toLocaleString("en-IN")})]},l))),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{className:"fa-13 border",colSpan:4,children:[(0,i.jsx)("span",{className:"fw-bold",children:"BANK: "}),null===s||void 0===s?void 0:s.bank_name]}),(0,i.jsx)("td",{className:"fa-13 border",children:d(o,"bill_qty").toLocaleString("en-IN")}),(0,i.jsx)("td",{className:"fa-13 border"}),(0,i.jsx)("td",{className:"fa-13 border",children:d(o,"bill_alt_qty").toLocaleString("en-IN")}),(0,i.jsx)("td",{className:"fa-13 border",children:d(o,"amount").toLocaleString("en-IN")})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{className:"fa-13 border fw-bold",colSpan:6,children:[(0,a.m4)(null===s||void 0===s?void 0:s.total_invoice_value)," Only"]}),(0,i.jsxs)("td",{className:"fa-13 border",colSpan:2,children:[t.map(((e,l)=>(0,i.jsxs)("p",{className:"d-flex mb-0",children:[(0,i.jsx)("span",{className:"flex-grow-1",children:null===e||void 0===e?void 0:e.ledger_name}),(0,i.jsx)("span",{children:Number((null===e||void 0===e?void 0:e.amount_value_DR)||(null===e||void 0===e?void 0:e.amount_value_CR)).toLocaleString("en-IN")})]},l))),(0,i.jsxs)("p",{className:"d-flex mb-0",children:[(0,i.jsx)("span",{className:"flex-grow-1",children:"Net:"}),(0,i.jsx)("span",{className:"fa-18",children:Number(null===s||void 0===s?void 0:s.total_invoice_value).toLocaleString("en-IN")})]})]})]})]})]})}),(0,i.jsx)("div",{className:"table-responsive",children:(0,i.jsxs)("table",{className:"table",children:[(0,i.jsxs)("thead",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{className:"border fa-13 text-center",rowSpan:2,style:{verticalAlign:"middle"},children:"HSN / SAC"}),(0,i.jsx)("th",{className:"border fa-13 text-center",rowSpan:2,style:{verticalAlign:"middle"},children:"Taxable Value"}),(0,i.jsx)("th",{className:"border fa-13 text-center",colSpan:2,children:"Central Tax"}),(0,i.jsx)("th",{className:"border fa-13 text-center",colSpan:2,children:"State Tax"}),(0,i.jsx)("th",{className:"border fa-13 text-center",children:"Total"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{className:"border fa-13 text-center",children:"Rate"}),(0,i.jsx)("th",{className:"border fa-13 text-center",children:"Amount"}),(0,i.jsx)("th",{className:"border fa-13 text-center",children:"Rate"}),(0,i.jsx)("th",{className:"border fa-13 text-center",children:"Amount"}),(0,i.jsx)("th",{className:"border fa-13 text-center",children:"Tax Amount"})]})]}),(0,i.jsxs)("tbody",{children:[o.map(((e,l)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"border fa-13 text-end",children:null===e||void 0===e?void 0:e.hsn_code}),(0,i.jsx)("td",{className:"border fa-13 text-end",children:Number(null===e||void 0===e?void 0:e.amount).toLocaleString("en-IN")}),(0,i.jsx)("td",{className:"border fa-13 text-end",children:null===e||void 0===e?void 0:e.cgst}),(0,i.jsx)("td",{className:"border fa-13 text-end",children:(null!==e&&void 0!==e&&e.cgst?(null===e||void 0===e?void 0:e.amount)/100*(null===e||void 0===e?void 0:e.cgst):0).toLocaleString("en-IN",{maximumFractionDigits:2})}),(0,i.jsx)("td",{className:"border fa-13 text-end",children:null===e||void 0===e?void 0:e.sgst}),(0,i.jsx)("td",{className:"border fa-13 text-end",children:(null!==e&&void 0!==e&&e.sgst?(null===e||void 0===e?void 0:e.amount)/100*(null===e||void 0===e?void 0:e.sgst):0).toLocaleString("en-IN",{maximumFractionDigits:2})}),(0,i.jsx)("td",{className:"border fa-13 text-end",children:Number((null!==e&&void 0!==e&&e.cgst?(null===e||void 0===e?void 0:e.amount)/100*(null===e||void 0===e?void 0:e.cgst):0)+(null!==e&&void 0!==e&&e.sgst?(null===e||void 0===e?void 0:e.amount)/100*(null===e||void 0===e?void 0:e.sgst):0)).toLocaleString("en-IN",{maximumFractionDigits:2})})]},l))),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"border fa-13 text-end",children:"Total"}),(0,i.jsx)("td",{className:"border fa-13 text-end",children:d(o,"amount").toLocaleString("en-IN")}),(0,i.jsx)("td",{className:"border fa-13 text-end"}),(0,i.jsx)("td",{className:"border fa-13 text-end",children:(()=>{let e=0;return o.forEach((l=>{e+=null!==l&&void 0!==l&&l.cgst?(null===l||void 0===l?void 0:l.amount)/100*(null===l||void 0===l?void 0:l.cgst):0})),e.toLocaleString("en-IN",{maximumFractionDigits:2})})()}),(0,i.jsx)("td",{className:"border fa-13 text-end"}),(0,i.jsx)("td",{className:"border fa-13 text-end",children:(()=>{let e=0;return o.forEach((l=>{e+=null!==l&&void 0!==l&&l.sgst?(null===l||void 0===l?void 0:l.amount)/100*(null===l||void 0===l?void 0:l.sgst):0})),e.toLocaleString("en-IN",{maximumFractionDigits:2})})()}),(0,i.jsx)("td",{className:"border fa-13 text-end",children:(()=>{let e=0,l=0;o.forEach((s=>{e+=null!==s&&void 0!==s&&s.cgst?(null===s||void 0===s?void 0:s.amount)/100*(null===s||void 0===s?void 0:s.cgst):0,l+=null!==s&&void 0!==s&&s.sgst?(null===s||void 0===s?void 0:s.amount)/100*(null===s||void 0===s?void 0:s.sgst):0}));return(e+l).toLocaleString("en-IN",{maximumFractionDigits:2})})()})]})]})]})})]})}},5824:(e,l,s)=>{s.r(l),s.d(l,{default:()=>j});var a=s(82656),n=s(26773),i=s(5548),o=s(4488),t=s(90048),d=s(89e3),r=s(33452),c=s(69060),m=s(56640),u=s(14499),x=s(71412),h=s(95112),v=s(39308),b=s(1908),f=s(13724),p=s(82496);const j=()=>{var e;const l=JSON.parse(localStorage.getItem("user")),[s,j]=(0,c.useState)([]),[g,N]=(0,c.useState)([]),[S,y]=(0,c.useState)(0),[C,_]=(0,c.useState)({salesInfoDialog:!1,billDialog:!1}),[w,D]=(0,c.useState)({}),[I,F]=(0,c.useState)([]),[A,k]=(0,c.useState)([]),L=(0,c.useRef)();(0,c.useEffect)((()=>{(0,b.q)({address:"userModule/customer/customerSalesReport?UserId=".concat(null===l||void 0===l?void 0:l.UserId)}).then((e=>{if(e.success){j(e.data);let l=0;e.data.forEach((e=>{l+=Number(null===e||void 0===e?void 0:e.Total_Amount),console.log(null===e||void 0===e?void 0:e.Total_Amount)})),y(l)}})).catch((e=>console.error(e)))}),[]);const T=(0,r.useReactToPrint)({content:()=>L.current});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"card",children:[(0,p.jsx)("div",{className:"card-header py-3 bg-white",children:(0,p.jsxs)("p",{className:"mb-0 fw-bold",children:[(0,p.jsxs)("span",{children:["Balance of ",null===l||void 0===l?void 0:l.Name]}),(0,p.jsxs)("span",{className:S>0?"text-primary":"text-danger",children:[" \xa0( ",(0,v.SA)(S)," ",S<0?" CR":" DR"," )"]})]})}),(0,p.jsx)("div",{className:"card-body p-0 table-responsive",style:{maxHeight:"80vh"},children:(0,p.jsxs)("table",{className:"table",children:[(0,p.jsx)("thead",{children:(0,p.jsx)("tr",{children:["S.No","-","Company","Ledger","Balance","Dr/Cr"].map(((e,l)=>(0,p.jsx)("th",{className:"tble-hed-stick fa-13",children:e},l)))})}),(0,p.jsx)("tbody",{children:s.map(((e,l)=>(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{style:{fontSize:"13px"},children:l+1}),(0,p.jsx)("td",{style:{fontSize:"13px"},children:(0,p.jsx)("button",{className:"icon-btn",onClick:()=>{var l;l=e,N([]),(0,b.q)({address:"userModule/customer/salesInfo?Cust_Id=".concat(null===l||void 0===l?void 0:l.Cust_Id,"&Acc_Id=").concat(null===l||void 0===l?void 0:l.tally_id,"&Company_Id=").concat(null===l||void 0===l?void 0:l.Company_Id)}).then((e=>{e.success&&(N(e.data),_((e=>({...e,salesInfoDialog:!0}))))})).catch((e=>console.log(e)))},children:(0,p.jsx)(m.c,{sx:{fontSize:"inherit"}})})}),(0,p.jsx)("td",{style:{fontSize:"13px"},children:null===e||void 0===e?void 0:e.Company_Name}),(0,p.jsx)("td",{style:{fontSize:"13px"},children:null===e||void 0===e?void 0:e.ledger_name}),(0,p.jsx)("td",{style:{fontSize:"13px"},children:(0,v.SA)(null===e||void 0===e?void 0:e.Total_Amount)}),(0,p.jsx)("td",{style:{fontSize:"13px"},children:null===e||void 0===e?void 0:e.Total_Count})]},l)))})]})})]}),(0,p.jsxs)(a.c,{fullScreen:!0,open:C.salesInfoDialog,onClose:()=>_((e=>({...e,salesInfoDialog:!1}))),children:[(0,p.jsxs)(n.c,{className:"d-flex",children:["Sales List Of",(0,p.jsxs)("span",{className:"text-primary flex-grow-1",children:[" ",null===(e=g[0])||void 0===e?void 0:e.Customer_name]}),(0,p.jsx)(i.c,{size:"small",color:"error",onClick:()=>_((e=>({...e,salesInfoDialog:!1}))),children:(0,p.jsx)(u.c,{})})]}),(0,p.jsx)(o.c,{children:(0,p.jsx)(f.c,{dataArray:g,columns:[{Field_Name:"invoice_date",isVisible:1,Fied_Data:"date"},{Field_Name:"invoice_no",isVisible:1,Fied_Data:"string"},{Field_Name:"total_invoice_value",isVisible:1,Fied_Data:"number"},{Field_Name:"View_Bill",isVisible:1,isCustomCell:!0,Cell:e=>{let{row:s}=e;return(0,p.jsx)(i.c,{onClick:()=>{return e=null===s||void 0===s?void 0:s.Company_Id,a=null===s||void 0===s?void 0:s.invoice_no,D({}),F([]),k([]),void(e&&a&&(0,b.q)({address:"userModule/customer/invoiceDetails?Company_Id=".concat(e,"&UserId=").concat(null===l||void 0===l?void 0:l.UserId,"&Invoice_No=").concat(a)}).then((e=>{if(e.success){var l,s;if(null!==e&&void 0!==e&&null!==(l=e.data[0])&&void 0!==l&&l.length){const l=e.data[0];D(l[0])}null!==e&&void 0!==e&&null!==(s=e.data[1])&&void 0!==s&&s.length&&F(null===e||void 0===e?void 0:e.data[1]),null!==e&&void 0!==e&&e.data[2].length&&k(null===e||void 0===e?void 0:e.data[2]),_((e=>({...e,billDialog:!0})))}})).catch((e=>console.log(e))));var e,a},size:"small",children:(0,p.jsx)(x.c,{})})}}],EnableSerialNumber:!0,tableMaxHeight:720})}),(0,p.jsx)(t.c,{children:(0,p.jsx)(d.c,{color:"error",variant:"outlined",onClick:()=>_((e=>({...e,salesInfoDialog:!1}))),children:"close"})})]}),(0,p.jsxs)(a.c,{open:C.billDialog,onClose:()=>_((e=>({...e,billDialog:!1}))),fullWidth:!0,maxWidth:"lg",children:[(0,p.jsxs)(n.c,{className:"border-bottom text-primary d-flex align-items-center fa-18",children:[(0,p.jsx)("span",{className:"flex-grow-1",children:"Invoice Details"}),(0,p.jsx)(d.c,{className:"fw-bold",onClick:T,children:"PDF"}),(0,p.jsx)(i.c,{size:"small",className:"bg-light",onClick:()=>_((e=>({...e,billDialog:!1}))),children:(0,p.jsx)(u.c,{})})]}),(0,p.jsx)(o.c,{className:"p-0",ref:L,children:(0,p.jsx)(h.c,{invoieInfo:I,companyInfo:w,expencesInfo:A})})]})]})}},14499:(e,l,s)=>{s.d(l,{c:()=>i});var a=s(27664),n=s(82496);const i=(0,a.c)((0,n.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},56640:(e,l,s)=>{s.d(l,{c:()=>i});var a=s(27664),n=s(82496);const i=(0,a.c)((0,n.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"LaunchOutlined")},71412:(e,l,s)=>{s.d(l,{c:()=>i});var a=s(27664),n=s(82496);const i=(0,a.c)((0,n.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")},81568:(e,l,s)=>{function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}s.d(l,{c:()=>a})}}]);
//# sourceMappingURL=7668.17d078f4.chunk.js.map