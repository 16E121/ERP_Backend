"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[1784],{13724:(e,l,a)=>{a.d(l,{A:()=>F,c:()=>P});var s=a(69060),t=a(93996),d=a(14696),n=a(13224),r=a(27454),i=a(700),o=a(5548),c=a(3358),x=a(66931),m=a(89500),h=a(43692),u=a(85624),b=a(99904),v=a(33856),g=a(58612),j=a(53248),p=a(29504),f=a(5930),N=a(39308),S=a(41459),T=a(46864),C=a(4284),_=a(76491),w=a(10728),A=a(49608),y=a(28064),I=(a(37692),a(35832)),D=a(82496);const R=(e,l)=>e.map((e=>{const a={};return l.forEach(((l,s)=>{if(l.isVisible||l.Defult_Display)if(l.isCustomCell&&l.Cell){const t=l.Cell({row:e}),d=l.ColumnHeader?String(l.ColumnHeader).replace(/\s+/g,"_").toLowerCase():"field_".concat(s+1);"string"!==typeof t&&"number"!==typeof t&&"bigint"!==typeof t||(a[d]=t)}else{let s=l.Field_Name;a[s]=e[s]||""}})),a})),F=function(){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{isVisible:1,Field_Name:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",Fied_Data:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"string",align:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"left",verticalAlign:arguments.length>4&&void 0!==arguments[4]?arguments[4]:"center",...e&&{ColumnHeader:e}}},O=e=>{let{dataArray:l=[],columns:a=[],onClickFun:F=null,isExpendable:O=!1,expandableComp:P=null,tableMaxHeight:k=550,initialPageCount:G=20,EnableSerialNumber:Q=!1,CellSize:B="small",disablePagination:E=!1,title:H="",PDFPrintOption:M=!1,ExcelPrintOption:V=!1,maxHeightOption:z=!1,ButtonArea:L=null,MenuButtons:X=[]}=e;const[U,$]=(0,s.useState)(0),[W,Z]=(0,s.useState)(G),[q,J]=(0,s.useState)([]),[K,Y]=(0,s.useState)(!0),ee=K&&z?" max-content ":k,le=[{type:"left",class:"text-start"},{type:"right",class:"text-end"},{type:"center",class:"text-center"}],ae=[{type:"top",class:" vtop "},{type:"bottom",class:" vbottom "},{type:"center",class:" vctr "}],se=(e=>{if(!q.length)return e;return[...e].sort(((e,l)=>{for(const a of q){const{columnId:s,direction:t}=a,d=e[s],n=l[s];if(d!==n)return"asc"===t?d>n?1:-1:d<n?1:-1}return 0}))})(l),te=U*W,de=te+W,ne=se.slice(te,de),re=(e,l)=>{switch(l){case"number":return(0,N.SA)(e);case"date":return(0,N.uy)(e);case"time":return(0,N.AX)(e);case"string":return e;default:return""}},ie=e=>{let{row:l,index:t}=e;const[d,n]=(0,s.useState)(!1),c="20px";return(0,D.jsxs)(s.Fragment,{children:[(0,D.jsxs)(r.c,{children:[!0===O&&P&&(0,D.jsx)(i.c,{className:"fa-13 border-end text-center vtop",children:(0,D.jsx)(o.c,{size:"small",onClick:()=>n((e=>!e)),children:d?(0,D.jsx)(S.c,{sx:{fontSize:c}}):(0,D.jsx)(T.c,{sx:{fontSize:c}})})}),!0===Q&&(0,D.jsx)(i.c,{className:"fa-13 border-end text-center vtop",children:W*U+t+1}),null===a||void 0===a?void 0:a.map(((e,a)=>{var s,t;return((0,N.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,N.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,D.jsx)(i.c,{className:"fa-13 border-end "+(e.align?null===(s=le.find((l=>l.type===String(e.align).toLowerCase())))||void 0===s?void 0:s.class:"")+(e.verticalAlign?null===(t=ae.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===t?void 0:t.class:" vctr "),children:e.Cell({row:l,Field_Name:e.Field_Name})},a):Object.entries(l).map((s=>{var t,d;let[n,r]=s;return e.Field_Name===n&&((0,N.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,N.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(0,D.jsx)(i.c,{className:"fa-13 border-end "+(e.align?null===(t=le.find((l=>l.type===String(e.align).toLowerCase())))||void 0===t?void 0:t.class:"")+(e.verticalAlign?null===(d=ae.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===d?void 0:d.class:" vctr "),onClick:()=>F?F(l):console.log("Function not supplied"),children:re(r,null===e||void 0===e?void 0:e.Fied_Data)},a)})))}))]}),!0===O&&P&&d&&(0,D.jsx)(r.c,{children:(0,D.jsx)(i.c,{colSpan:Number(null===a||void 0===a?void 0:a.length)+(!0===Q?2:1),children:P({row:l,index:t})})})]})},oe=()=>{const[e,r]=(0,s.useState)(null),i=Boolean(e);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(c.c,{title:"Export options and more...",children:(0,D.jsx)(o.c,{"aria-describedby":i,onClick:e=>{r(e.currentTarget)},className:"ms-2",size:"small",children:(0,D.jsx)(C.c,{})})}),(0,D.jsx)(x.cp,{open:i,anchorEl:e,onClose:()=>{r(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:(0,D.jsxs)(m.c,{children:[z&&(0,D.jsxs)(t.c,{onClick:()=>Y((e=>!e)),disabled:(0,N.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,D.jsx)(d.c,{children:K?(0,D.jsx)(_.c,{fontSize:"small",color:"primary"}):(0,D.jsx)(w.c,{fontSize:"small"})}),(0,D.jsx)(n.c,{color:K?"success":"",children:"Max Height"})]}),M&&(0,D.jsxs)(t.c,{onClick:()=>((e,l)=>{try{const a=new y.default,s=R(e,l),t=l.filter((e=>e.isVisible||e.Defult_Display)).map((e=>e.Field_Name||String(e.ColumnHeader).replace(/\s+/g,"_").toLowerCase())),d=s.map((e=>t.map((l=>e[l])))).map(((e,l)=>({...e,Sno:l+1})));a.autoTable({head:[t],body:d}),a.save("table.pdf")}catch(a){console.error(a)}})(l,a),disabled:(0,N.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,D.jsx)(d.c,{children:(0,D.jsx)(A.c,{fontSize:"small",color:"primary"})}),(0,D.jsx)(n.c,{children:"Download PDF"})]}),V&&(0,D.jsxs)(t.c,{onClick:()=>((e,l)=>{try{const a=R(e,l),s=I.c$.json_to_sheet(a),t=I.c$.book_new();I.c$.book_append_sheet(t,s,"Data"),I.a8(t,"table.xlsx")}catch(a){console.error(a)}})(l,a),disabled:(0,N.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,D.jsx)(d.c,{children:(0,D.jsx)(A.c,{fontSize:"small",color:"primary"})}),(0,D.jsx)(n.c,{children:"Download Excel"})]}),X.map((e=>function(e,l,a){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,D.jsxs)(t.c,{onClick:a,disabled:s,children:[(0,D.jsx)(d.c,{children:l}),(0,D.jsx)(n.c,{children:e})]})}(e.name,e.icon,e.onclick,e.disabled)))]})})]})};return(0,D.jsxs)(h.c,{className:"rounded-3 bg-white overflow-hidden",component:u.c,children:[(0,D.jsxs)("div",{className:"d-flex align-items-center flex-wrap px-3 py-2 flex-row-reverse ",children:[(M||V||X.length>0||z)&&(0,D.jsx)(oe,{}),L&&L,H&&(0,D.jsx)("h6",{className:"fw-bold text-muted flex-grow-1 m-0",children:H})]}),(0,D.jsx)(b.c,{sx:{maxHeight:ee},children:(0,D.jsxs)(v.c,{stickyHeader:!0,size:B,children:[(0,D.jsx)(g.c,{children:(0,D.jsxs)(r.c,{children:[O&&P&&(0,D.jsx)(i.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"#"}),Q&&(0,D.jsx)(i.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"SNo"}),a.map(((e,l)=>{const a=(0,N.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,N.Qr)(null===e||void 0===e?void 0:e.isVisible,1),s=!1===Boolean(null===e||void 0===e?void 0:e.isCustomCell)||!e.Cell,t=q.find((l=>l.columnId===e.Field_Name)),d=t?t.direction:"asc";var n,r,o,c;return a?s?(0,D.jsx)(i.c,{className:"fa-13 fw-bold border-end border-top "+(e.align?null===(n=le.find((l=>l.type===String(e.align).toLowerCase())))||void 0===n?void 0:n.class:""),style:{backgroundColor:"#EDF0F7"},sortDirection:!!t&&d,children:(0,D.jsx)(j.c,{active:!!t,direction:d,onClick:()=>(e=>{const l=q.find((l=>l.columnId===e));if(l){const a="asc"===l.direction;J(q.map((l=>l.columnId===e?{...l,direction:a?"desc":"asc"}:l)))}else J([...q,{columnId:e,direction:"asc"}])})(e.Field_Name),children:e.ColumnHeader||(null===e||void 0===e||null===(r=e.Field_Name)||void 0===r?void 0:r.replace(/_/g," "))})},l):(0,D.jsx)(i.c,{className:"".concat(e.ColumnHeader||null!==e&&void 0!==e&&e.Field_Name?" fa-13 fw-bold border-end border-top p-2 appFont ":" p-0 "," ")+(e.align?null===(o=le.find((l=>l.type===String(e.align).toLowerCase())))||void 0===o?void 0:o.class:""),style:{backgroundColor:"#EDF0F7"},children:e.ColumnHeader||(null===e||void 0===e||null===(c=e.Field_Name)||void 0===c?void 0:c.replace(/_/g," "))},l):null}))]})}),(0,D.jsxs)(p.c,{children:[(E?se:ne).map(((e,l)=>(0,D.jsx)(ie,{row:e,index:l},l))),0===l.length&&(0,D.jsx)(r.c,{children:(0,D.jsx)(i.c,{colSpan:a.length+(!0===O&&P?1:0)+(!0===Q?1:0),sx:{textAlign:"center"},children:"No Data"})})]})]})}),!E&&0!==ne.length&&(0,D.jsx)("div",{className:"p-2 pb-0",children:(0,D.jsx)(f.c,{component:"div",count:l.length,page:U,onPageChange:(e,l)=>{$(l)},rowsPerPage:W,onRowsPerPageChange:e=>{Z(parseInt(e.target.value,10)),$(0)},rowsPerPageOptions:Array.from(new Set([G,5,20,50,100,200,500])).sort(((e,l)=>e-l)),labelRowsPerPage:"Rows per page",showFirstButton:!0,showLastButton:!0})})]})};O.defaultProps={dataArray:[],columns:[],onClickFun:null,isExpendable:!1,expandableComp:null,tableMaxHeight:550,initialPageCount:20,EnableSerialNumber:!1,CellSize:"small",disablePagination:!1,title:void 0,PDFPrintOption:!1,ExcelPrintOption:!1,maxHeightOption:!1,ButtonArea:null,MenuButtons:[]};const P=O},62344:(e,l,a)=>{a.d(l,{o$:()=>n,o5:()=>r,cF:()=>d,iI:()=>t});const s=a.p+"static/media/smt.aa4d4f940bbebff07a57.png",t={table:{style:{width:"auto",backgroundColor:"transparent"}},rows:{style:{backgroundColor:"transparent"}},headCells:{style:{backgroundColor:"#6b9080f8",color:"white",fontSize:"14px"}}},d={control:(e,l)=>({...e,height:"45px",background:"rgba(255, 255, 255, 0.322)"}),menu:(e,l)=>({...e,zIndex:9999})},n=[{id:1,headname:"Menu ID",variant:"head",align:"left",width:100},{id:2,headname:"MenuName"},{id:3,headname:"Read Rights"},{id:4,headname:"Add Rights"},{id:5,headname:"Edit Rights"},{id:6,headname:"Delete Rights"},{id:7,headname:"Print Rights"},{id:8,headname:"Action"}],r=[{dataBase:1,name:"SHANKAR TRADERS",business:"Wholesale Merchant in Dhall",address:"32, Chitrakara Street, Madurai - 01 <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:s,gstin:"33AADFS6973R1ZD",phone:"984-313-1353, 984-335-5166",fssai:"12418012000818",bankAccount:"0021 5032 0885 122",ifsc:"TMBL0000002"},{dataBase:2,name:"SMT AGRO PRODUCTS",business:"",address:"H.O: 153, Chitrakara Street, 2nd Floor, Madurai -01 <br /> G.O: 746 Puliyur, Sayanapuram, Svga <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:s,gstin:"33ACMFS3420Q1ZQ",phone:"0452-4371625",fssai:"12418012000818",bankAccount:"0025 3031 0875 947",ifsc:"TMBL0000002"},{dataBase:3,name:"BHAVANI TRADERS",business:"",address:"H.O: 152-A, Chitrakara Street, Madurai -01 <br /> G.O: 30/1-Rajman Nagar, Chintamani Main Road, Mdu-01 <br /> Tax Invoice",logo:s,gstin:"33AAEFB6728J1ZG",phone:"958-559-7641, 958-559-7614",fssai:"12418012000670",bankAccount:"0021 5005 0800 309",ifsc:"TMBL0000002"}]},91924:(e,l,a)=>{a.d(l,{c:()=>v});var s=a(69060),t=a(82656),d=a(26773),n=a(4488),r=a(90048),i=a(89e3),o=a(14499),c=a(49608),x=a(39308),m=a(33452),h=a(1908),u=a(82496);const b=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1){case 0:return(0,x.kR)(e*(l/100));case 1:return(0,x.kR)(e-e*(100/(100+l)));default:return 0}},v=e=>{let{orderDetails:l,orderProducts:a,download:v,actionOpen:g,clearDetails:j,children:p,TitleText:f}=e;const N=JSON.parse(localStorage.getItem("user")),[S,T]=(0,s.useState)(!1),[C,_]=(0,s.useState)({}),[w,A]=(0,s.useState)({}),y=(0,s.useRef)(null),I=(0,x.Qr)(l.GST_Inclusive,0),D=(0,x.Qr)(l.GST_Inclusive,1),R=(0,x.Qr)(l.GST_Inclusive,2),F=(0,x.Qr)(l.IS_IGST,1);(0,s.useEffect)((()=>{(0,h.q)({address:"masters/company?Company_id=".concat(null===N||void 0===N?void 0:N.Company_id)}).then((e=>{e.success&&A(null!==e&&void 0!==e&&e.data[0]?null===e||void 0===e?void 0:e.data[0]:{})})).catch((e=>console.error(e)))}),[null===N||void 0===N?void 0:N.Company_id]),(0,s.useEffect)((()=>{g&&T(!0)}),[g]),(0,s.useEffect)((()=>{null!==l&&void 0!==l&&l.Retailer_Id&&(0,h.q)({address:"masters/retailers/info?Retailer_Id=".concat(null===l||void 0===l?void 0:l.Retailer_Id)}).then((e=>{e.success&&_(null!==e&&void 0!==e&&e.data[0]?null===e||void 0===e?void 0:e.data[0]:{})})).catch((e=>console.error(e)))}),[null===l||void 0===l?void 0:l.Retailer_Id]);const O=()=>{T(!1),j&&j()},P=a.filter((e=>(0,x.QT)(null===e||void 0===e?void 0:e.Bill_Qty,0))),k=a.reduce(((e,l)=>{const a=(0,x.kR)(null===l||void 0===l?void 0:l.Item_Rate),s=parseInt(null===l||void 0===l?void 0:l.Bill_Qty)||0;if(R)return e.TotalValue+=(0,x.eX)(s,a),e;const t=F?null===l||void 0===l?void 0:l.Igst:(0,x.Q5)(null===l||void 0===l?void 0:l.Sgst,null===l||void 0===l?void 0:l.Cgst);if(D){const l=b(1,a,t),d=(0,x.od)(a,l);e.TotalTax+=(0,x.eX)(s,l),e.TotalValue+=(0,x.eX)(s,d)}if(I){const l=b(0,a,t);e.TotalTax+=(0,x.eX)(s,l),e.TotalValue+=(0,x.eX)(s,a)}return e}),{TotalValue:0,TotalTax:0}),G=(0,m.useReactToPrint)({content:()=>y.current}),Q=[{labelOne:"Invoice No",dataOne:null===l||void 0===l?void 0:l.So_Id,labelTwo:"Dated",dataTwo:(0,x.uy)(null===l||void 0===l?void 0:l.So_Date)},{labelOne:"Delivery Note",dataOne:"",labelTwo:"Mode/Terms of Payment",dataTwo:""},{labelOne:"Reference No. & Date",dataOne:"",labelTwo:"Other References",dataTwo:""},{labelOne:"Buyer's Order No",dataOne:"",labelTwo:"Dated",dataTwo:""},{labelOne:"Dispatch Doc No",dataOne:"",labelTwo:"Delivery Note Date",dataTwo:""},{labelOne:"Dispatched through",dataOne:"",labelTwo:"Destination",dataTwo:""},{labelOne:"Bill of Lading/LR-RR No",dataOne:"",labelTwo:"Motor Vehicle No",dataTwo:""}],B=null===a||void 0===a?void 0:a.reduce(((e,a)=>{const s=e.findIndex((e=>e.hsnCode==a.HSN_Code)),{Taxable_Amount:t,Cgst_Amo:d,Sgst_Amo:n,Igst_Amo:r,HSN_Code:i,Cgst:o,Sgst:c,Igst:m}=a;if(-1!==s){const a=e[s],i={...a,taxableValue:a.taxableValue+t,cgst:(0,x.Q5)(a.cgst,d),sgst:(0,x.Q5)(a.sgst,n),igst:(0,x.Q5)(a.igst,r),totalTax:a.totalTax+Number(l.IS_IGST?r:(0,x.Q5)(d,n))};return e[s]=i,e}const h={hsnCode:i,taxableValue:t,cgst:d,cgstPercentage:o,sgst:n,sgstPercentage:c,igst:r,igstPercentage:m,totalTax:l.IS_IGST?Number(r):(0,x.Q5)(d,n)};return[...e,h]}),[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{onClick:()=>{T(!0)},children:p}),(0,u.jsxs)(t.c,{open:S,onClose:O,fullWidth:!0,maxWidth:"lg",children:[(0,u.jsx)(d.c,{children:"Order Preview"}),(0,u.jsxs)(n.c,{ref:y,children:[(0,u.jsx)("h3",{className:"text-center mb-2",children:null!==f&&void 0!==f?f:"Invoice Details"}),(0,u.jsxs)("div",{className:"row",children:[(0,u.jsxs)("div",{className:"col-6 p-0 border border-bottom-0 border-end-0",children:[" ",(0,u.jsxs)("div",{className:"border-bottom p-2",children:[(0,u.jsx)("p",{className:"m-0 fa-17",children:null===w||void 0===w?void 0:w.Company_Name}),(0,u.jsxs)("p",{className:"m-0 fa-14",children:["Address: ",null===w||void 0===w?void 0:w.Company_Address]}),(0,u.jsxs)("p",{className:"m-0 fa-14",children:["City: ",null===w||void 0===w?void 0:w.Region," - ",null===w||void 0===w?void 0:w.Pincode]}),(0,u.jsxs)("p",{className:"m-0 fa-14",children:["GSTIN / UIN: ",null===w||void 0===w?void 0:w.Gst_Number]}),(0,u.jsxs)("p",{className:"m-0 fa-14",children:["State: ",null===w||void 0===w?void 0:w.State]}),(0,u.jsx)("p",{className:"m-0 fa-14",children:"Code: "})]}),(0,u.jsxs)("div",{className:"p-2",children:[" ",(0,u.jsx)("p",{className:"m-0 fa-12",children:"Buyer (Bill to)"}),(0,u.jsx)("p",{className:"m-0 fa-15",children:null===C||void 0===C?void 0:C.Retailer_Name}),(0,u.jsx)("p",{className:"m-0 fa-14",children:(null===C||void 0===C?void 0:C.Mobile_No)+" - "+(null===C||void 0===C?void 0:C.Reatailer_Address)}),(0,u.jsxs)("p",{className:"m-0 fa-14",children:[null===C||void 0===C?void 0:C.Reatailer_City," - ",null===C||void 0===C?void 0:C.PinCode]}),(0,u.jsxs)("p",{className:"m-0 fa-14",children:["GSTIN / UIN: ",null===w||void 0===w?void 0:w.Gstno]}),(0,u.jsxs)("p",{className:"m-0 fa-14",children:["State Name: ",null===w||void 0===w?void 0:w.StateGet]}),(0,u.jsx)("p",{className:"m-0 fa-14",children:"Code: "})]})]}),(0,u.jsx)("div",{className:"col-6 p-0 border border-bottom-0",children:(0,u.jsx)("table",{className:"table m-0",children:(0,u.jsxs)("tbody",{children:[Q.map(((e,l)=>(0,u.jsxs)("tr",{children:[(0,u.jsxs)("td",{className:"border-end fa-12 p-0 px-1",children:[(0,u.jsx)("p",{className:"m-0",children:e.labelOne}),(0,u.jsxs)("p",{className:"m-0",children:["\u2003",e.dataOne]})]}),(0,u.jsxs)("td",{className:"fa-12 p-0 px-1",children:[(0,u.jsx)("p",{className:"m-0",children:e.labelTwo}),(0,u.jsxs)("p",{className:"m-0",children:["\u2003",e.dataTwo]})]})]},l))),(0,u.jsx)("tr",{children:(0,u.jsxs)("td",{colSpan:2,className:"border-0 fa-12 p-0",children:[(0,u.jsx)("p",{className:"m-0",children:"Terms of Delivery"}),(0,u.jsx)("p",{className:"m-0"}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{})]})})]})})})]}),(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-12 p-0",children:(0,u.jsxs)("table",{className:"table m-0",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"border bg-light fa-14",children:"Sno"}),(0,u.jsx)("td",{className:"border bg-light fa-14",children:"Product"}),(0,u.jsx)("td",{className:"border bg-light fa-14",children:"HSN/SAC"}),(0,u.jsx)("td",{className:"border bg-light fa-14 text-end",children:"Quantity"}),(0,u.jsx)("td",{className:"border bg-light fa-14 text-end",children:"Rate"}),(0,u.jsxs)("td",{className:"border bg-light fa-14 text-end",children:[(0,u.jsx)("p",{className:"m-2 ",children:"Rate"}),(0,u.jsxs)("p",{className:"m-0 ",children:[(0,x.Qr)(l.GST_Inclusive,1)&&"(Incl. of Tax)",(0,x.Qr)(l.GST_Inclusive,2)&&"(Tax not applicable)",(0,x.Qr)(l.GST_Inclusive,0)&&"(Excl. of Tax)"]})]}),(0,u.jsx)("td",{className:"border bg-light fa-14 text-end",children:"Amount"})]})}),(0,u.jsxs)("tbody",{children:[P.map(((e,a)=>{var s;const t=null!==(s=F?null===e||void 0===e?void 0:e.Igst_P:(null===e||void 0===e?void 0:e.Cgst)+(null===e||void 0===e?void 0:e.Sgst))&&void 0!==s?s:0,d=Number((null===e||void 0===e?void 0:e.Bill_Qty)||0),n=Number((null===e||void 0===e?void 0:e.Item_Rate)||0),r=b(l.GST_Inclusive,n,t);return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"border fa-13",children:a+1}),(0,u.jsx)("td",{className:"border fa-13",children:null===e||void 0===e?void 0:e.Product_Name}),(0,u.jsx)("td",{className:"border fa-13",children:null===e||void 0===e?void 0:e.HSN_Code}),(0,u.jsxs)("td",{className:"border fa-13 text-end",children:[(0,x.SA)(d),(null===e||void 0===e?void 0:e.UOM)&&" ("+(null===e||void 0===e?void 0:e.UOM)+") "]}),(0,u.jsxs)("td",{className:"border fa-13 text-end",children:[" ",(0,x.SA)((0,x.Qr)(l.GST_Inclusive,1)?n-r:n)]}),(0,u.jsxs)("td",{className:"border fa-13 text-end",children:[" ",(0,x.SA)((0,x.Qr)(l.GST_Inclusive,1)?n:n+r)]}),(0,u.jsxs)("td",{className:"border fa-13 text-end",children:[" ",(0,x.SA)(null===e||void 0===e?void 0:e.Taxable_Amount)]})]},a)})),(0,u.jsxs)("tr",{children:[(0,u.jsxs)("td",{className:"border p-2",rowSpan:F?4:5,colSpan:4,children:[(0,u.jsx)("p",{className:"m-0",children:"Amount Chargeable (in words):"}),(0,u.jsxs)("p",{className:"m-0",children:["\u2003 INR ",(0,x.m4)(parseInt(null===l||void 0===l?void 0:l.Total_Invoice_value))," Only."]})]}),(0,u.jsx)("td",{className:"border p-2 fa-14",colSpan:2,children:"Total Taxable Amount"}),(0,u.jsx)("td",{className:"border p-2 text-end fa-14",children:(0,x.SA)(k.TotalValue)})]}),F?(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"border p-2 fa-14",colSpan:2,children:"IGST"}),(0,u.jsx)("td",{className:"border p-2 fa-14 text-end",children:(0,x.SA)(l.IGST_Total)})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"border p-2 fa-14",colSpan:2,children:"CGST"}),(0,u.jsx)("td",{className:"border p-2 text-end fa-14",children:(0,x.SA)(null===l||void 0===l?void 0:l.CSGT_Total)})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"border p-2 fa-14",colSpan:2,children:"SGST"}),(0,u.jsx)("td",{className:"border p-2 fa-14 text-end",children:(0,x.SA)(null===l||void 0===l?void 0:l.SGST_Total)})]})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"border p-2 fa-14",colSpan:2,children:"Round Off"}),(0,u.jsx)("td",{className:"border p-2 fa-14 text-end",children:(0,x.SA)(null===l||void 0===l?void 0:l.Round_off)})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"border p-2 fa-14",colSpan:2,children:"Total"}),(0,u.jsx)("td",{className:"border p-2 fa-14 text-end fw-bold",children:(0,x.SA)(null===l||void 0===l?void 0:l.Total_Invoice_value)})]})]})]})})}),(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-12 p-0",children:(0,u.jsxs)("table",{className:"table",children:[(0,u.jsxs)("thead",{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"border bg-light fa-14 text-center",rowSpan:2,style:{verticalAlign:"middle"},children:"HSN / SAC"}),(0,u.jsx)("td",{className:"border bg-light fa-14 text-center",rowSpan:2,style:{verticalAlign:"middle"},children:"Taxable Value"}),(0,x.Qr)(l.IS_IGST,1)?(0,u.jsx)("td",{className:"border bg-light fa-14 text-center",colSpan:2,children:"IGST Tax"}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("td",{className:"border bg-light fa-14 text-center",colSpan:2,children:"Central Tax"}),(0,u.jsx)("td",{className:"border bg-light fa-14 text-center",colSpan:2,children:"State Tax"})]}),(0,u.jsx)("td",{className:"border bg-light fa-14 text-center",children:"Total"})]}),(0,u.jsxs)("tr",{children:[(0,x.Qr)(l.IS_IGST,1)?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("td",{className:"border bg-light fa-14 text-center",children:"Rate"}),(0,u.jsx)("td",{className:"border bg-light fa-14 text-center",children:"Amount"})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("td",{className:"border bg-light fa-14 text-center",children:"Rate"}),(0,u.jsx)("td",{className:"border bg-light fa-14 text-center",children:"Amount"}),(0,u.jsx)("td",{className:"border bg-light fa-14 text-center",children:"Rate"}),(0,u.jsx)("td",{className:"border bg-light fa-14 text-center",children:"Amount"})]}),(0,u.jsx)("td",{className:"border bg-light fa-14 text-center",children:"Tax Amount"})]})]}),(0,u.jsxs)("tbody",{children:[B.map(((e,a)=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"border fa-13 text-end",children:null===e||void 0===e?void 0:e.hsnCode}),(0,u.jsx)("td",{className:"border fa-13 text-end",children:(0,x.SA)(null===e||void 0===e?void 0:e.taxableValue)}),l.IS_IGST?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("td",{className:"border fa-13 text-end",children:(0,x.SA)(null===e||void 0===e?void 0:e.igstPercentage)}),(0,u.jsx)("td",{className:"border fa-13 text-end",children:(0,x.SA)(null===e||void 0===e?void 0:e.igst)})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("td",{className:"border fa-13 text-end",children:(0,x.SA)(null===e||void 0===e?void 0:e.cgstPercentage)}),(0,u.jsx)("td",{className:"border fa-13 text-end",children:(0,x.SA)(null===e||void 0===e?void 0:e.cgst)}),(0,u.jsx)("td",{className:"border fa-13 text-end",children:(0,x.SA)(null===e||void 0===e?void 0:e.sgstPercentage)}),(0,u.jsx)("td",{className:"border fa-13 text-end",children:(0,x.SA)(null===e||void 0===e?void 0:e.sgst)})]}),(0,u.jsx)("td",{className:"border fa-13 text-end",children:(0,x.SA)(null===e||void 0===e?void 0:e.totalTax)})]},a))),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"border fa-13 text-end",children:"Total"}),(0,u.jsx)("td",{className:"border fa-13 text-end fw-bold",children:(0,x.SA)(B.reduce(((e,l)=>e+Number(l.taxableValue)),0))}),l.IS_IGST?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("td",{className:"border fa-13 text-end"}),(0,u.jsx)("td",{className:"border fa-13 text-end fw-bold",children:(0,x.SA)(B.reduce(((e,l)=>e+Number(l.igst)),0))})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("td",{className:"border fa-13 text-end"}),(0,u.jsx)("td",{className:"border fa-13 text-end fw-bold",children:(0,x.SA)(B.reduce(((e,l)=>e+Number(l.cgst)),0))}),(0,u.jsx)("td",{className:"border fa-13 text-end"}),(0,u.jsx)("td",{className:"border fa-13 text-end fw-bold",children:(0,x.SA)(B.reduce(((e,l)=>e+Number(l.sgst)),0))})]}),(0,u.jsx)("td",{className:"border fa-13 text-end fw-bold",children:(0,x.SA)(B.reduce(((e,l)=>e+Number(l.totalTax)),0))})]}),(0,u.jsx)("tr",{children:(0,u.jsxs)("td",{colSpan:(0,x.Qr)(l.IS_IGST,1)?5:7,className:"border fa-13 fw-bold",children:["Tax Amount (in words) : INR \xa0",(0,x.m4)(parseInt(B.reduce(((e,l)=>e+Number(l.totalTax)),0)))," only."]})})]})]})}),(0,u.jsx)("div",{className:"col-12 text-center",children:(0,u.jsx)("p",{children:"This is a Computer Generated Invoice"})})]})]}),(0,u.jsxs)(r.c,{children:[(0,u.jsx)(i.c,{startIcon:(0,u.jsx)(o.c,{}),variant:"outlined",color:"error",onClick:O,children:"Close"}),v&&(0,u.jsx)(i.c,{startIcon:(0,u.jsx)(c.c,{}),variant:"outlined",onClick:G,children:"Download"})]})]})]})}}}]);
//# sourceMappingURL=1784.c129f871.chunk.js.map