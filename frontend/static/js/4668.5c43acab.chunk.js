"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[4668],{13724:(e,l,s)=>{s.d(l,{c:()=>N});var a=s(69060),n=s(27454),d=s(700),i=s(5548),o=s(99904),t=s(85624),r=s(33856),c=s(58612),m=s(53248),u=s(29504),x=s(5930),h=s(39308),v=s(41459),b=s(46864),j=s(82496);const f=e=>{let{dataArray:l=[],columns:s=[],onClickFun:f=null,isExpendable:N=!1,expandableComp:p=null,tableMaxHeight:g=550,initialPageCount:S=20,EnableSerialNumber:_=!1,CellSize:C="small",disablePagination:y=!1,title:I=""}=e;const[D,w]=(0,a.useState)(0),[F,A]=(0,a.useState)(S),[k,L]=(0,a.useState)([]),R=[{type:"left",class:"text-start"},{type:"right",class:"text-end"},{type:"center",class:"text-center"}],T=(e=>{if(!k.length)return e;return[...e].sort(((e,l)=>{for(const s of k){const{columnId:a,direction:n}=s,d=e[a],i=l[a];if(d!==i)return"asc"===n?d>i?1:-1:d<i?1:-1}return 0}))})(l),M=D*F,B=M+F,E=T.slice(M,B),z=(e,l)=>{switch(l){case"number":return(0,h.SA)(e);case"date":return(0,h.uy)(e);case"time":return(0,h.AX)(e);case"string":return e;default:return""}},P=e=>{let{row:l,index:o}=e;const[t,r]=(0,a.useState)(!1),c="20px";return(0,j.jsxs)(a.Fragment,{children:[(0,j.jsxs)(n.c,{children:[!0===N&&p&&(0,j.jsx)(d.c,{className:"fa-13 border-end text-center",children:(0,j.jsx)(i.c,{size:"small",onClick:()=>r((e=>!e)),children:t?(0,j.jsx)(v.c,{sx:{fontSize:c}}):(0,j.jsx)(b.c,{sx:{fontSize:c}})})}),!0===_&&(0,j.jsx)(d.c,{className:"fa-13 border-end text-center",children:F*D+o+1}),null===s||void 0===s?void 0:s.map(((e,s)=>{var a;return((0,h.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,h.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,j.jsx)(d.c,{className:"fa-13 border-end "+(e.align?null===(a=R.find((l=>l.type===String(e.align).toLowerCase())))||void 0===a?void 0:a.class:""),children:e.Cell({row:l,Field_Name:e.Field_Name})},s):Object.entries(l).map((a=>{var n;let[i,o]=a;return e.Field_Name===i&&((0,h.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,h.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(0,j.jsx)(d.c,{className:"fa-13 border-end "+(e.align?null===(n=R.find((l=>l.type===String(e.align).toLowerCase())))||void 0===n?void 0:n.class:""),onClick:()=>f?f(l):console.log("Function not supplied"),children:z(o,null===e||void 0===e?void 0:e.Fied_Data)},s)})))}))]}),!0===N&&p&&t&&(0,j.jsx)(n.c,{children:(0,j.jsx)(d.c,{colSpan:Number(null===s||void 0===s?void 0:s.length)+(!0===_?2:1),children:p({row:l,index:o})})})]})};return(0,j.jsxs)("div",{children:[I&&(0,j.jsx)("h6",{className:"fw-bold text-muted",children:I}),(0,j.jsx)(o.c,{component:t.c,sx:{maxHeight:g},children:(0,j.jsxs)(r.c,{stickyHeader:!0,size:C,children:[(0,j.jsx)(c.c,{children:(0,j.jsxs)(n.c,{children:[N&&p&&(0,j.jsx)(d.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"#"}),_&&(0,j.jsx)(d.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"SNo"}),s.map(((e,l)=>{const s=(0,h.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,h.Qr)(null===e||void 0===e?void 0:e.isVisible,1),a=!1===Boolean(null===e||void 0===e?void 0:e.isCustomCell)||!e.Cell,n=k.find((l=>l.columnId===e.Field_Name)),i=n?n.direction:"asc";var o,t,r,c;return s?a?(0,j.jsx)(d.c,{className:"fa-13 fw-bold border-end border-top "+(e.align?null===(o=R.find((l=>l.type===String(e.align).toLowerCase())))||void 0===o?void 0:o.class:""),style:{backgroundColor:"#EDF0F7"},sortDirection:!!n&&i,children:(0,j.jsx)(m.c,{active:!!n,direction:i,onClick:()=>(e=>{const l=k.find((l=>l.columnId===e));if(l){const s="asc"===l.direction;L(k.map((l=>l.columnId===e?{...l,direction:s?"desc":"asc"}:l)))}else L([...k,{columnId:e,direction:"asc"}])})(e.Field_Name),children:e.ColumnHeader||(null===e||void 0===e||null===(t=e.Field_Name)||void 0===t?void 0:t.replace(/_/g," "))})},l):(0,j.jsx)(d.c,{className:"".concat(e.ColumnHeader||null!==e&&void 0!==e&&e.Field_Name?" fa-13 fw-bold border-end border-top p-2 appFont ":" p-0 "," ")+(e.align?null===(r=R.find((l=>l.type===String(e.align).toLowerCase())))||void 0===r?void 0:r.class:""),style:{backgroundColor:"#EDF0F7"},children:e.ColumnHeader||(null===e||void 0===e||null===(c=e.Field_Name)||void 0===c?void 0:c.replace(/_/g," "))},l):null}))]})}),(0,j.jsxs)(u.c,{children:[(y?T:E).map(((e,l)=>(0,j.jsx)(P,{row:e,index:l},l))),0===l.length&&(0,j.jsx)(n.c,{children:(0,j.jsx)(d.c,{colSpan:s.length+(!0===N&&p?1:0)+(!0===_?1:0),sx:{textAlign:"center"},children:"No Data"})})]})]})}),!y&&0!==E.length&&(0,j.jsx)("div",{className:"p-2 pb-0",children:(0,j.jsx)(x.c,{component:"div",count:l.length,page:D,onPageChange:(e,l)=>{w(l)},rowsPerPage:F,onRowsPerPageChange:e=>{A(parseInt(e.target.value,10)),w(0)},rowsPerPageOptions:Array.from(new Set([S,5,20,50,100,200,500])).sort(((e,l)=>e-l)),labelRowsPerPage:"Rows per page",showFirstButton:!0,showLastButton:!0})})]})};f.defaultProps={dataArray:[],columns:[],onClickFun:null,isExpendable:!1,expandableComp:null,tableMaxHeight:550,initialPageCount:20,EnableSerialNumber:!1,CellSize:"small",disablePagination:!1,title:void 0};const N=f},62344:(e,l,s)=>{s.d(l,{o$:()=>i,o5:()=>o,cF:()=>d,iI:()=>n});const a=s.p+"static/media/smt.aa4d4f940bbebff07a57.png",n={table:{style:{width:"auto",backgroundColor:"transparent"}},rows:{style:{backgroundColor:"transparent"}},headCells:{style:{backgroundColor:"#6b9080f8",color:"white",fontSize:"14px"}}},d={control:(e,l)=>({...e,height:"45px",background:"rgba(255, 255, 255, 0.322)"}),menu:(e,l)=>({...e,zIndex:9999})},i=[{id:1,headname:"Menu ID",variant:"head",align:"left",width:100},{id:2,headname:"MenuName"},{id:3,headname:"Read Rights"},{id:4,headname:"Add Rights"},{id:5,headname:"Edit Rights"},{id:6,headname:"Delete Rights"},{id:7,headname:"Print Rights"},{id:8,headname:"Action"}],o=[{dataBase:1,name:"SHANKAR TRADERS",business:"Wholesale Merchant in Dhall",address:"32, Chitrakara Street, Madurai - 01 <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:a,gstin:"33AADFS6973R1ZD",phone:"984-313-1353, 984-335-5166",fssai:"12418012000818",bankAccount:"0021 5032 0885 122",ifsc:"TMBL0000002"},{dataBase:2,name:"SMT AGRO PRODUCTS",business:"",address:"H.O: 153, Chitrakara Street, 2nd Floor, Madurai -01 <br /> G.O: 746 Puliyur, Sayanapuram, Svga <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:a,gstin:"33ACMFS3420Q1ZQ",phone:"0452-4371625",fssai:"12418012000818",bankAccount:"0025 3031 0875 947",ifsc:"TMBL0000002"},{dataBase:3,name:"BHAVANI TRADERS",business:"",address:"H.O: 152-A, Chitrakara Street, Madurai -01 <br /> G.O: 30/1-Rajman Nagar, Chintamani Main Road, Mdu-01 <br /> Tax Invoice",logo:a,gstin:"33AAEFB6728J1ZG",phone:"958-559-7641, 958-559-7614",fssai:"12418012000670",bankAccount:"0021 5005 0800 309",ifsc:"TMBL0000002"}]},95112:(e,l,s)=>{s.d(l,{c:()=>i});var a=s(39308),n=s(62344),d=s(82496);const i=e=>{var l;let{companyInfo:s,invoieInfo:i,expencesInfo:o}=e;const t=(e,l)=>{let s=0;return e.forEach((e=>{s+=Number(e[l])})),s};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"d-flex justify-content-between align-items-center ",children:[(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("img",{src:null===(l=n.o5[null===s||void 0===s?void 0:s.Company_Id])||void 0===l?void 0:l.logo,className:"invoiceLogo",alt:"company_logo"}),(0,d.jsxs)("div",{className:"",children:[(0,d.jsx)("p",{className:"mb-0 ",children:null===s||void 0===s?void 0:s.Company_Name}),(0,d.jsx)("p",{className:"mb-0 text-muted",children:null===s||void 0===s?void 0:s.Company_address_1}),(0,d.jsx)("p",{className:"mb-0 text-muted fa-14",children:null===s||void 0===s?void 0:s.Company_address_2}),(null===s||void 0===s?void 0:s.Company_address_3)&&(0,d.jsx)("p",{className:"mb-0 text-muted fa-14",children:null===s||void 0===s?void 0:s.Company_address_3})]})]}),(0,d.jsxs)("div",{className:"table-responsive",children:[(0,d.jsx)("table",{className:"table",children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{className:"p-1 border-0 fa-13",children:"GSTIN"}),(0,d.jsx)("td",{className:"p-1 border-0 fa-13 text-end",children:null===s||void 0===s?void 0:s.Company_GSTIN})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{className:"p-1 border-0 fa-13",children:"PHONE"}),(0,d.jsx)("td",{className:"p-1 border-0 fa-13 text-end",children:null===s||void 0===s?void 0:s.Company_Mobile})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{className:"p-1 border-0 fa-13",children:"FSSAI"}),(0,d.jsx)("td",{className:"p-1 border-0 fa-13 text-end",children:null===s||void 0===s?void 0:s.fssai_no})]})]})}),(0,d.jsxs)("p",{className:"mb-0 fa-13 d-flex",children:[(0,d.jsx)("span",{className:"flex-grow-1 text-muted",children:" "}),(0,d.jsx)("span",{children:" "})]}),(0,d.jsxs)("p",{className:"mb-0 fa-13 d-flex",children:[(0,d.jsx)("span",{className:"flex-grow-1 text-muted"}),(0,d.jsx)("span",{})]}),(0,d.jsxs)("p",{className:"mb-0 fa-13 d-flex",children:[(0,d.jsx)("span",{className:"flex-grow-1 text-muted"}),(0,d.jsx)("span",{})]})]})]}),(0,d.jsx)("table",{className:"table mb-0 border",children:(0,d.jsx)("tbody",{children:(0,d.jsxs)("tr",{children:[(0,d.jsxs)("td",{className:"border",children:[(0,d.jsx)("p",{className:"fa-13 mb-0",children:"To"}),(0,d.jsx)("p",{className:"fa-13 mb-0 ps-3 fw-bold",children:null===s||void 0===s?void 0:s.Customer_name}),(0,d.jsx)("p",{className:"fa-13 mb-0 ps-3",children:null===s||void 0===s?void 0:s.Customer_Mobile}),(0,d.jsxs)("p",{className:"fa-13 mb-0 ps-3",children:["GSTIN: ",null===s||void 0===s?void 0:s.Customer_GSTIN]})]}),(0,d.jsxs)("td",{className:"border",children:[(0,d.jsxs)("p",{className:"mb-0 d-flex fa-13",children:["Date:",(0,d.jsx)("span",{className:"flex-grow-1 ps-2 text-primary",children:null!==s&&void 0!==s&&s.invoice_date?new Date(null===s||void 0===s?void 0:s.invoice_date).toLocaleDateString("en-IN",{day:"2-digit",month:"2-digit",year:"2-digit"}):""}),(0,d.jsx)("span",{children:null===s||void 0===s?void 0:s.Bill_Type})]}),(0,d.jsxs)("p",{className:"fa-13 mb-0",children:["Bill No: ",null===s||void 0===s?void 0:s.invoice_no]}),(0,d.jsxs)("p",{className:"fa-13 mb-0 d-flex",children:[(0,d.jsxs)("span",{className:"flex-grow-1",children:["Broker: ",null===s||void 0===s?void 0:s.Broker_Name]}),(0,d.jsxs)("span",{children:["Transpoter: ",null===s||void 0===s?void 0:s.Transporter]})]})]})]})})}),(0,d.jsx)("div",{className:"table-responsive",children:(0,d.jsxs)("table",{className:"table mb-0",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{className:"fa-13 border",children:"Sno"}),(0,d.jsx)("th",{className:"fa-13 border",children:"Items"}),(0,d.jsx)("th",{className:"fa-13 border",children:"HSN"}),(0,d.jsx)("th",{className:"fa-13 border",children:"GST"}),(0,d.jsx)("th",{className:"fa-13 border",children:"Qty"}),(0,d.jsx)("th",{className:"fa-13 border",children:"Rate"}),(0,d.jsx)("th",{className:"fa-13 border",children:"Bags"}),(0,d.jsx)("th",{className:"fa-13 border",children:"Amount"})]})}),(0,d.jsxs)("tbody",{children:[null===i||void 0===i?void 0:i.map(((e,l)=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{className:"fa-13 border",children:l+1}),(0,d.jsx)("td",{className:"fa-13 border",children:null===e||void 0===e?void 0:e.stock_item_name}),(0,d.jsx)("td",{className:"fa-13 border",children:null===e||void 0===e?void 0:e.hsn_code}),(0,d.jsx)("td",{className:"fa-13 border",children:Number(null===e||void 0===e?void 0:e.igst)?null===e||void 0===e?void 0:e.igst:Number(null===e||void 0===e?void 0:e.cgst)+Number(e.sgst)}),(0,d.jsx)("td",{className:"fa-13 border",children:Number(null===e||void 0===e?void 0:e.bill_qty).toLocaleString("en-IN")}),(0,d.jsx)("td",{className:"fa-13 border",children:((null===e||void 0===e?void 0:e.amount)/(null===e||void 0===e?void 0:e.bill_qty)).toLocaleString("en-IN")}),(0,d.jsx)("td",{className:"fa-13 border",children:Number(null!==e&&void 0!==e&&e.bags?null===e||void 0===e?void 0:e.bags:null===e||void 0===e?void 0:e.bill_alt_qty).toLocaleString("en-IN")}),(0,d.jsx)("td",{className:"fa-13 border",children:Number(null===e||void 0===e?void 0:e.amount).toLocaleString("en-IN")})]},l))),(0,d.jsxs)("tr",{children:[(0,d.jsxs)("td",{className:"fa-13 border",colSpan:4,children:[(0,d.jsx)("span",{className:"fw-bold",children:"BANK: "}),null===s||void 0===s?void 0:s.bank_name]}),(0,d.jsx)("td",{className:"fa-13 border",children:t(i,"bill_qty").toLocaleString("en-IN")}),(0,d.jsx)("td",{className:"fa-13 border"}),(0,d.jsx)("td",{className:"fa-13 border",children:t(i,"bill_alt_qty").toLocaleString("en-IN")}),(0,d.jsx)("td",{className:"fa-13 border",children:t(i,"amount").toLocaleString("en-IN")})]}),(0,d.jsxs)("tr",{children:[(0,d.jsxs)("td",{className:"fa-13 border fw-bold",colSpan:6,children:[(0,a.m4)(null===s||void 0===s?void 0:s.total_invoice_value)," Only"]}),(0,d.jsxs)("td",{className:"fa-13 border",colSpan:2,children:[o.map(((e,l)=>(0,d.jsxs)("p",{className:"d-flex mb-0",children:[(0,d.jsx)("span",{className:"flex-grow-1",children:null===e||void 0===e?void 0:e.ledger_name}),(0,d.jsx)("span",{children:Number((null===e||void 0===e?void 0:e.amount_value_DR)||(null===e||void 0===e?void 0:e.amount_value_CR)).toLocaleString("en-IN")})]},l))),(0,d.jsxs)("p",{className:"d-flex mb-0",children:[(0,d.jsx)("span",{className:"flex-grow-1",children:"Net:"}),(0,d.jsx)("span",{className:"fa-18",children:Number(null===s||void 0===s?void 0:s.total_invoice_value).toLocaleString("en-IN")})]})]})]})]})]})}),(0,d.jsx)("div",{className:"table-responsive",children:(0,d.jsxs)("table",{className:"table",children:[(0,d.jsxs)("thead",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{className:"border fa-13 text-center",rowSpan:2,style:{verticalAlign:"middle"},children:"HSN / SAC"}),(0,d.jsx)("th",{className:"border fa-13 text-center",rowSpan:2,style:{verticalAlign:"middle"},children:"Taxable Value"}),(0,d.jsx)("th",{className:"border fa-13 text-center",colSpan:2,children:"Central Tax"}),(0,d.jsx)("th",{className:"border fa-13 text-center",colSpan:2,children:"State Tax"}),(0,d.jsx)("th",{className:"border fa-13 text-center",children:"Total"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{className:"border fa-13 text-center",children:"Rate"}),(0,d.jsx)("th",{className:"border fa-13 text-center",children:"Amount"}),(0,d.jsx)("th",{className:"border fa-13 text-center",children:"Rate"}),(0,d.jsx)("th",{className:"border fa-13 text-center",children:"Amount"}),(0,d.jsx)("th",{className:"border fa-13 text-center",children:"Tax Amount"})]})]}),(0,d.jsxs)("tbody",{children:[i.map(((e,l)=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{className:"border fa-13 text-end",children:null===e||void 0===e?void 0:e.hsn_code}),(0,d.jsx)("td",{className:"border fa-13 text-end",children:Number(null===e||void 0===e?void 0:e.amount).toLocaleString("en-IN")}),(0,d.jsx)("td",{className:"border fa-13 text-end",children:null===e||void 0===e?void 0:e.cgst}),(0,d.jsx)("td",{className:"border fa-13 text-end",children:(null!==e&&void 0!==e&&e.cgst?(null===e||void 0===e?void 0:e.amount)/100*(null===e||void 0===e?void 0:e.cgst):0).toLocaleString("en-IN",{maximumFractionDigits:2})}),(0,d.jsx)("td",{className:"border fa-13 text-end",children:null===e||void 0===e?void 0:e.sgst}),(0,d.jsx)("td",{className:"border fa-13 text-end",children:(null!==e&&void 0!==e&&e.sgst?(null===e||void 0===e?void 0:e.amount)/100*(null===e||void 0===e?void 0:e.sgst):0).toLocaleString("en-IN",{maximumFractionDigits:2})}),(0,d.jsx)("td",{className:"border fa-13 text-end",children:Number((null!==e&&void 0!==e&&e.cgst?(null===e||void 0===e?void 0:e.amount)/100*(null===e||void 0===e?void 0:e.cgst):0)+(null!==e&&void 0!==e&&e.sgst?(null===e||void 0===e?void 0:e.amount)/100*(null===e||void 0===e?void 0:e.sgst):0)).toLocaleString("en-IN",{maximumFractionDigits:2})})]},l))),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{className:"border fa-13 text-end",children:"Total"}),(0,d.jsx)("td",{className:"border fa-13 text-end",children:t(i,"amount").toLocaleString("en-IN")}),(0,d.jsx)("td",{className:"border fa-13 text-end"}),(0,d.jsx)("td",{className:"border fa-13 text-end",children:(()=>{let e=0;return i.forEach((l=>{e+=null!==l&&void 0!==l&&l.cgst?(null===l||void 0===l?void 0:l.amount)/100*(null===l||void 0===l?void 0:l.cgst):0})),e.toLocaleString("en-IN",{maximumFractionDigits:2})})()}),(0,d.jsx)("td",{className:"border fa-13 text-end"}),(0,d.jsx)("td",{className:"border fa-13 text-end",children:(()=>{let e=0;return i.forEach((l=>{e+=null!==l&&void 0!==l&&l.sgst?(null===l||void 0===l?void 0:l.amount)/100*(null===l||void 0===l?void 0:l.sgst):0})),e.toLocaleString("en-IN",{maximumFractionDigits:2})})()}),(0,d.jsx)("td",{className:"border fa-13 text-end",children:(()=>{let e=0,l=0;i.forEach((s=>{e+=null!==s&&void 0!==s&&s.cgst?(null===s||void 0===s?void 0:s.amount)/100*(null===s||void 0===s?void 0:s.cgst):0,l+=null!==s&&void 0!==s&&s.sgst?(null===s||void 0===s?void 0:s.amount)/100*(null===s||void 0===s?void 0:s.sgst):0}));return(e+l).toLocaleString("en-IN",{maximumFractionDigits:2})})()})]})]})]})})]})}},5824:(e,l,s)=>{s.r(l),s.d(l,{default:()=>N});var a=s(82656),n=s(26773),d=s(5548),i=s(4488),o=s(90048),t=s(89e3),r=s(33452),c=s(69060),m=s(56640),u=s(14499),x=s(71412),h=s(95112),v=s(39308),b=s(1908),j=s(13724),f=s(82496);const N=()=>{var e;const l=JSON.parse(localStorage.getItem("user")),[s,N]=(0,c.useState)([]),[p,g]=(0,c.useState)([]),[S,_]=(0,c.useState)(0),[C,y]=(0,c.useState)({salesInfoDialog:!1,billDialog:!1}),[I,D]=(0,c.useState)({}),[w,F]=(0,c.useState)([]),[A,k]=(0,c.useState)([]),L=(0,c.useRef)();(0,c.useEffect)((()=>{(0,b.q)({address:"userModule/customer/customerSalesReport?UserId=".concat(null===l||void 0===l?void 0:l.UserId)}).then((e=>{if(e.success){N(e.data);let l=0;e.data.forEach((e=>{l+=Number(null===e||void 0===e?void 0:e.Total_Amount),console.log(null===e||void 0===e?void 0:e.Total_Amount)})),_(l)}})).catch((e=>console.error(e)))}),[]);const R=(0,r.useReactToPrint)({content:()=>L.current});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"card",children:[(0,f.jsx)("div",{className:"card-header py-3 bg-white",children:(0,f.jsxs)("p",{className:"mb-0 fw-bold",children:[(0,f.jsxs)("span",{children:["Balance of ",null===l||void 0===l?void 0:l.Name]}),(0,f.jsxs)("span",{className:S>0?"text-primary":"text-danger",children:[" \xa0( ",(0,v.SA)(S)," ",S<0?" CR":" DR"," )"]})]})}),(0,f.jsx)("div",{className:"card-body p-0 table-responsive",style:{maxHeight:"80vh"},children:(0,f.jsxs)("table",{className:"table",children:[(0,f.jsx)("thead",{children:(0,f.jsx)("tr",{children:["S.No","-","Company","Ledger","Balance","Dr/Cr"].map(((e,l)=>(0,f.jsx)("th",{className:"tble-hed-stick fa-13",children:e},l)))})}),(0,f.jsx)("tbody",{children:s.map(((e,l)=>(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{style:{fontSize:"13px"},children:l+1}),(0,f.jsx)("td",{style:{fontSize:"13px"},children:(0,f.jsx)("button",{className:"icon-btn",onClick:()=>{var l;l=e,g([]),(0,b.q)({address:"userModule/customer/salesInfo?Cust_Id=".concat(null===l||void 0===l?void 0:l.Cust_Id,"&Acc_Id=").concat(null===l||void 0===l?void 0:l.tally_id,"&Company_Id=").concat(null===l||void 0===l?void 0:l.Company_Id)}).then((e=>{e.success&&(g(e.data),y((e=>({...e,salesInfoDialog:!0}))))})).catch((e=>console.log(e)))},children:(0,f.jsx)(m.c,{sx:{fontSize:"inherit"}})})}),(0,f.jsx)("td",{style:{fontSize:"13px"},children:null===e||void 0===e?void 0:e.Company_Name}),(0,f.jsx)("td",{style:{fontSize:"13px"},children:null===e||void 0===e?void 0:e.ledger_name}),(0,f.jsx)("td",{style:{fontSize:"13px"},children:(0,v.SA)(null===e||void 0===e?void 0:e.Total_Amount)}),(0,f.jsx)("td",{style:{fontSize:"13px"},children:null===e||void 0===e?void 0:e.Total_Count})]},l)))})]})})]}),(0,f.jsxs)(a.c,{fullScreen:!0,open:C.salesInfoDialog,onClose:()=>y((e=>({...e,salesInfoDialog:!1}))),children:[(0,f.jsxs)(n.c,{className:"d-flex",children:["Sales List Of",(0,f.jsxs)("span",{className:"text-primary flex-grow-1",children:[" ",null===(e=p[0])||void 0===e?void 0:e.Customer_name]}),(0,f.jsx)(d.c,{size:"small",color:"error",onClick:()=>y((e=>({...e,salesInfoDialog:!1}))),children:(0,f.jsx)(u.c,{})})]}),(0,f.jsx)(i.c,{children:(0,f.jsx)(j.c,{dataArray:p,columns:[{Field_Name:"invoice_date",isVisible:1,Fied_Data:"date"},{Field_Name:"invoice_no",isVisible:1,Fied_Data:"string"},{Field_Name:"total_invoice_value",isVisible:1,Fied_Data:"number"},{Field_Name:"View_Bill",isVisible:1,isCustomCell:!0,Cell:e=>{let{row:s}=e;return(0,f.jsx)(d.c,{onClick:()=>{return e=null===s||void 0===s?void 0:s.Company_Id,a=null===s||void 0===s?void 0:s.invoice_no,D({}),F([]),k([]),void(e&&a&&(0,b.q)({address:"userModule/customer/invoiceDetails?Company_Id=".concat(e,"&UserId=").concat(null===l||void 0===l?void 0:l.UserId,"&Invoice_No=").concat(a)}).then((e=>{if(e.success){var l,s;if(null!==e&&void 0!==e&&null!==(l=e.data[0])&&void 0!==l&&l.length){const l=e.data[0];D(l[0])}null!==e&&void 0!==e&&null!==(s=e.data[1])&&void 0!==s&&s.length&&F(null===e||void 0===e?void 0:e.data[1]),null!==e&&void 0!==e&&e.data[2].length&&k(null===e||void 0===e?void 0:e.data[2]),y((e=>({...e,billDialog:!0})))}})).catch((e=>console.log(e))));var e,a},size:"small",children:(0,f.jsx)(x.c,{})})}}],EnableSerialNumber:!0,tableMaxHeight:720})}),(0,f.jsx)(o.c,{children:(0,f.jsx)(t.c,{color:"error",variant:"outlined",onClick:()=>y((e=>({...e,salesInfoDialog:!1}))),children:"close"})})]}),(0,f.jsxs)(a.c,{open:C.billDialog,onClose:()=>y((e=>({...e,billDialog:!1}))),fullWidth:!0,maxWidth:"lg",children:[(0,f.jsxs)(n.c,{className:"border-bottom text-primary d-flex align-items-center fa-18",children:[(0,f.jsx)("span",{className:"flex-grow-1",children:"Invoice Details"}),(0,f.jsx)(t.c,{className:"fw-bold",onClick:R,children:"PDF"}),(0,f.jsx)(d.c,{size:"small",className:"bg-light",onClick:()=>y((e=>({...e,billDialog:!1}))),children:(0,f.jsx)(u.c,{})})]}),(0,f.jsx)(i.c,{className:"p-0",ref:L,children:(0,f.jsx)(h.c,{invoieInfo:w,companyInfo:I,expencesInfo:A})})]})]})}},14499:(e,l,s)=>{s.d(l,{c:()=>d});var a=s(27664),n=s(82496);const d=(0,a.c)((0,n.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},56640:(e,l,s)=>{s.d(l,{c:()=>d});var a=s(27664),n=s(82496);const d=(0,a.c)((0,n.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"LaunchOutlined")},71412:(e,l,s)=>{s.d(l,{c:()=>d});var a=s(27664),n=s(82496);const d=(0,a.c)((0,n.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")}}]);
//# sourceMappingURL=4668.5c43acab.chunk.js.map