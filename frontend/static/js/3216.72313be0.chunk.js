"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[3216],{13724:(e,l,r)=>{r.d(l,{A:()=>L,c:()=>R});var i=r(69060),t=r(93996),d=r(14696),n=r(13224),a=r(27454),s=r(700),o=r(5548),c=r(3358),v=r(66931),u=r(89500),m=r(43692),h=r(85624),x=r(99904),D=r(33856),j=r(58612),y=r(53248),N=r(29504),C=r(5930),g=r(39308),p=r(41459),I=r(46864),b=r(4284),P=r(76491),O=r(10728),f=r(49608),A=r(28064),S=(r(37692),r(35832)),w=r(82496);const _=(e,l)=>e.map((e=>{const r={};return l.forEach(((l,i)=>{if(l.isVisible||l.Defult_Display)if(l.isCustomCell&&l.Cell){const t=l.Cell({row:e}),d=l.ColumnHeader?String(l.ColumnHeader).replace(/\s+/g,"_").toLowerCase():"field_".concat(i+1);"string"!==typeof t&&"number"!==typeof t&&"bigint"!==typeof t||(r[d]=t)}else{let i=l.Field_Name;r[i]=e[i]||""}})),r})),L=function(){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{isVisible:1,Field_Name:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",Fied_Data:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"string",align:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"left",verticalAlign:arguments.length>4&&void 0!==arguments[4]?arguments[4]:"center",...e&&{ColumnHeader:e}}},E=e=>{let{dataArray:l=[],columns:r=[],onClickFun:L=null,isExpendable:E=!1,expandableComp:R=null,tableMaxHeight:k=550,initialPageCount:B=20,EnableSerialNumber:T=!1,CellSize:F="small",disablePagination:H=!1,title:Q="",PDFPrintOption:V=!1,ExcelPrintOption:M=!1,maxHeightOption:W=!1,ButtonArea:z=null,MenuButtons:Y=[]}=e;const[G,U]=(0,i.useState)(0),[X,$]=(0,i.useState)(B),[K,q]=(0,i.useState)([]),[J,Z]=(0,i.useState)(!0),ee=J&&W?" max-content ":k,le=[{type:"left",class:"text-start"},{type:"right",class:"text-end"},{type:"center",class:"text-center"}],re=[{type:"top",class:" vtop "},{type:"bottom",class:" vbottom "},{type:"center",class:" vctr "}],ie=(e=>{if(!K.length)return e;return[...e].sort(((e,l)=>{for(const r of K){const{columnId:i,direction:t}=r,d=e[i],n=l[i];if(d!==n)return"asc"===t?d>n?1:-1:d<n?1:-1}return 0}))})(l),te=G*X,de=te+X,ne=ie.slice(te,de),ae=(e,l)=>{switch(l){case"number":return(0,g.SA)(e);case"date":return(0,g.uy)(e);case"time":return(0,g.AX)(e);case"string":return e;default:return""}},se=e=>{let{row:l,index:t}=e;const[d,n]=(0,i.useState)(!1),c="20px";return(0,w.jsxs)(i.Fragment,{children:[(0,w.jsxs)(a.c,{children:[!0===E&&R&&(0,w.jsx)(s.c,{className:"fa-13 border-end text-center vtop",children:(0,w.jsx)(o.c,{size:"small",onClick:()=>n((e=>!e)),children:d?(0,w.jsx)(p.c,{sx:{fontSize:c}}):(0,w.jsx)(I.c,{sx:{fontSize:c}})})}),!0===T&&(0,w.jsx)(s.c,{className:"fa-13 border-end text-center vtop",children:X*G+t+1}),null===r||void 0===r?void 0:r.map(((e,r)=>{var i,t;return((0,g.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,g.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,w.jsx)(s.c,{className:"fa-13 border-end "+(e.align?null===(i=le.find((l=>l.type===String(e.align).toLowerCase())))||void 0===i?void 0:i.class:"")+(e.verticalAlign?null===(t=re.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===t?void 0:t.class:" vctr "),children:e.Cell({row:l,Field_Name:e.Field_Name})},r):Object.entries(l).map((i=>{var t,d;let[n,a]=i;return e.Field_Name===n&&((0,g.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,g.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(0,w.jsx)(s.c,{className:"fa-13 border-end "+(e.align?null===(t=le.find((l=>l.type===String(e.align).toLowerCase())))||void 0===t?void 0:t.class:"")+(e.verticalAlign?null===(d=re.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===d?void 0:d.class:" vctr "),onClick:()=>L?L(l):console.log("Function not supplied"),children:ae(a,null===e||void 0===e?void 0:e.Fied_Data)},r)})))}))]}),!0===E&&R&&d&&(0,w.jsx)(a.c,{children:(0,w.jsx)(s.c,{colSpan:Number(null===r||void 0===r?void 0:r.length)+(!0===T?2:1),children:R({row:l,index:t})})})]})},oe=()=>{const[e,a]=(0,i.useState)(null),s=Boolean(e);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c.c,{title:"Export options and more...",children:(0,w.jsx)(o.c,{"aria-describedby":s,onClick:e=>{a(e.currentTarget)},className:"ms-2",size:"small",children:(0,w.jsx)(b.c,{})})}),(0,w.jsx)(v.cp,{open:s,anchorEl:e,onClose:()=>{a(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:(0,w.jsxs)(u.c,{children:[W&&(0,w.jsxs)(t.c,{onClick:()=>Z((e=>!e)),disabled:(0,g.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,w.jsx)(d.c,{children:J?(0,w.jsx)(P.c,{fontSize:"small",color:"primary"}):(0,w.jsx)(O.c,{fontSize:"small"})}),(0,w.jsx)(n.c,{color:J?"success":"",children:"Max Height"})]}),V&&(0,w.jsxs)(t.c,{onClick:()=>((e,l)=>{try{const r=new A.default,i=_(e,l),t=l.filter((e=>e.isVisible||e.Defult_Display)).map((e=>e.Field_Name||String(e.ColumnHeader).replace(/\s+/g,"_").toLowerCase())),d=i.map((e=>t.map((l=>e[l])))).map(((e,l)=>({...e,Sno:l+1})));r.autoTable({head:[t],body:d}),r.save("table.pdf")}catch(r){console.error(r)}})(l,r),disabled:(0,g.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,w.jsx)(d.c,{children:(0,w.jsx)(f.c,{fontSize:"small",color:"primary"})}),(0,w.jsx)(n.c,{children:"Download PDF"})]}),M&&(0,w.jsxs)(t.c,{onClick:()=>((e,l)=>{try{const r=_(e,l),i=S.c$.json_to_sheet(r),t=S.c$.book_new();S.c$.book_append_sheet(t,i,"Data"),S.a8(t,"table.xlsx")}catch(r){console.error(r)}})(l,r),disabled:(0,g.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,w.jsx)(d.c,{children:(0,w.jsx)(f.c,{fontSize:"small",color:"primary"})}),(0,w.jsx)(n.c,{children:"Download Excel"})]}),Y.map((e=>function(e,l,r){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,w.jsxs)(t.c,{onClick:r,disabled:i,children:[(0,w.jsx)(d.c,{children:l}),(0,w.jsx)(n.c,{children:e})]})}(e.name,e.icon,e.onclick,e.disabled)))]})})]})};return(0,w.jsxs)(m.c,{className:"rounded-3 bg-white overflow-hidden",component:h.c,children:[(0,w.jsxs)("div",{className:"d-flex align-items-center flex-wrap px-3 py-2 flex-row-reverse ",children:[(V||M||Y.length>0||W)&&(0,w.jsx)(oe,{}),z&&z,Q&&(0,w.jsx)("h6",{className:"fw-bold text-muted flex-grow-1 m-0",children:Q})]}),(0,w.jsx)(x.c,{sx:{maxHeight:ee},children:(0,w.jsxs)(D.c,{stickyHeader:!0,size:F,children:[(0,w.jsx)(j.c,{children:(0,w.jsxs)(a.c,{children:[E&&R&&(0,w.jsx)(s.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"#"}),T&&(0,w.jsx)(s.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"SNo"}),r.map(((e,l)=>{const r=(0,g.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,g.Qr)(null===e||void 0===e?void 0:e.isVisible,1),i=!1===Boolean(null===e||void 0===e?void 0:e.isCustomCell)||!e.Cell,t=K.find((l=>l.columnId===e.Field_Name)),d=t?t.direction:"asc";var n,a,o,c;return r?i?(0,w.jsx)(s.c,{className:"fa-13 fw-bold border-end border-top "+(e.align?null===(n=le.find((l=>l.type===String(e.align).toLowerCase())))||void 0===n?void 0:n.class:""),style:{backgroundColor:"#EDF0F7"},sortDirection:!!t&&d,children:(0,w.jsx)(y.c,{active:!!t,direction:d,onClick:()=>(e=>{const l=K.find((l=>l.columnId===e));if(l){const r="asc"===l.direction;q(K.map((l=>l.columnId===e?{...l,direction:r?"desc":"asc"}:l)))}else q([...K,{columnId:e,direction:"asc"}])})(e.Field_Name),children:e.ColumnHeader||(null===e||void 0===e||null===(a=e.Field_Name)||void 0===a?void 0:a.replace(/_/g," "))})},l):(0,w.jsx)(s.c,{className:"".concat(e.ColumnHeader||null!==e&&void 0!==e&&e.Field_Name?" fa-13 fw-bold border-end border-top p-2 appFont ":" p-0 "," ")+(e.align?null===(o=le.find((l=>l.type===String(e.align).toLowerCase())))||void 0===o?void 0:o.class:""),style:{backgroundColor:"#EDF0F7"},children:e.ColumnHeader||(null===e||void 0===e||null===(c=e.Field_Name)||void 0===c?void 0:c.replace(/_/g," "))},l):null}))]})}),(0,w.jsxs)(N.c,{children:[(H?ie:ne).map(((e,l)=>(0,w.jsx)(se,{row:e,index:l},l))),0===l.length&&(0,w.jsx)(a.c,{children:(0,w.jsx)(s.c,{colSpan:r.length+(!0===E&&R?1:0)+(!0===T?1:0),sx:{textAlign:"center"},children:"No Data"})})]})]})}),!H&&0!==ne.length&&(0,w.jsx)("div",{className:"p-2 pb-0",children:(0,w.jsx)(C.c,{component:"div",count:l.length,page:G,onPageChange:(e,l)=>{U(l)},rowsPerPage:X,onRowsPerPageChange:e=>{$(parseInt(e.target.value,10)),U(0)},rowsPerPageOptions:Array.from(new Set([B,5,20,50,100,200,500])).sort(((e,l)=>e-l)),labelRowsPerPage:"Rows per page",showFirstButton:!0,showLastButton:!0})})]})};E.defaultProps={dataArray:[],columns:[],onClickFun:null,isExpendable:!1,expandableComp:null,tableMaxHeight:550,initialPageCount:20,EnableSerialNumber:!1,CellSize:"small",disablePagination:!1,title:void 0,PDFPrintOption:!1,ExcelPrintOption:!1,maxHeightOption:!1,ButtonArea:null,MenuButtons:[]};const R=E},56672:(e,l,r)=>{r.d(l,{a:()=>N,K:()=>u});var i=r(39308),t=r(3358),d=r(5548),n=r(71412),a=r(27664),s=r(82496);const o=(0,a.c)((0,s.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7zM12 2l4 4-4 4-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59z"}),"ShoppingCartCheckout");var c=r(86e3),v=r(45180);const u=e=>{let{data:l=[],status:r="ITEMS"}=e;switch(r){case"ITEMS":case"PO-Vendor-Wise":case"PO-Item-Wise":return null===l||void 0===l?void 0:l.reduce(((e,l)=>{if(!Array.isArray(null===l||void 0===l?void 0:l.ItemDetails))return e;const r=l.ItemDetails.map((e=>{var r,i,t,d,n;return{...e,OrderDetails:{Id:null===l||void 0===l?void 0:l.Id,Sno:null===l||void 0===l?void 0:l.Sno,PoYear:null===l||void 0===l?void 0:l.PoYear,PO_ID:null===l||void 0===l?void 0:l.PO_ID,BranchId:null===l||void 0===l?void 0:l.BranchId,BrokerId:null!==(r=l.BrokerId)&&void 0!==r?r:"",BrokerName:l.BrokerName,CreatedBy:l.CreatedBy,CreatedAt:l.CreatedAt,ItemDetails:null===l||void 0===l?void 0:l.ItemDetails,OrderStatus:null===l||void 0===l?void 0:l.OrderStatus,DeliveryDetails:null!==(i=l.DeliveryDetails)&&void 0!==i?i:[],LoadingDate:l.LoadingDate,IsConvertedAsInvoice:l.IsConvertedAsInvoice,OwnerId:null!==(t=l.OwnerId)&&void 0!==t?t:"",OwnerName:l.OwnerName,PartyAddress:l.PartyAddress,PartyId:null!==(d=l.PartyId)&&void 0!==d?d:"",PartyName:l.PartyName,PaymentCondition:l.PaymentCondition,Remarks:l.Remarks,TradeConfirmDate:l.TradeConfirmDate,TranspoterDetails:null!==(n=l.TranspoterDetails)&&void 0!==n?n:[],Ledger_Name:l.Ledger_Name,Party_District:l.Party_District}}}));return e.concat(r)}),[]);case"ITEMS PENDING":case"PO-Pending-Only":return null===l||void 0===l?void 0:l.reduce(((e,l)=>{var r;if(!Array.isArray(null===l||void 0===l?void 0:l.ItemDetails))return e;const t=null===l||void 0===l||null===(r=l.ItemDetails)||void 0===r?void 0:r.filter((e=>{var r;const t=(null===l||void 0===l||null===(r=l.DeliveryDetails)||void 0===r?void 0:r.filter((l=>(0,i.Qr)(l.ItemId,null===e||void 0===e?void 0:e.ItemId)))).reduce(((e,l)=>(0,i.Q5)(e,null===l||void 0===l?void 0:l.Weight)),0);return Number(t)<Number(null===e||void 0===e?void 0:e.Weight)})).map((e=>{var r,i,t,d,n;return{...e,OrderDetails:{Id:null===l||void 0===l?void 0:l.Id,Sno:null===l||void 0===l?void 0:l.Sno,PoYear:null===l||void 0===l?void 0:l.PoYear,PO_ID:null===l||void 0===l?void 0:l.PO_ID,BranchId:null===l||void 0===l?void 0:l.BranchId,BrokerId:null!==(r=l.BrokerId)&&void 0!==r?r:"",BrokerName:l.BrokerName,CreatedBy:l.CreatedBy,CreatedAt:l.CreatedAt,ItemDetails:null===l||void 0===l?void 0:l.ItemDetails,OrderStatus:null===l||void 0===l?void 0:l.OrderStatus,DeliveryDetails:null!==(i=l.DeliveryDetails)&&void 0!==i?i:[],LoadingDate:l.LoadingDate,IsConvertedAsInvoice:l.IsConvertedAsInvoice,OwnerId:null!==(t=l.OwnerId)&&void 0!==t?t:"",OwnerName:l.OwnerName,PartyAddress:l.PartyAddress,PartyId:null!==(d=l.PartyId)&&void 0!==d?d:"",PartyName:l.PartyName,PaymentCondition:l.PaymentCondition,Remarks:l.Remarks,TradeConfirmDate:l.TradeConfirmDate,TranspoterDetails:null!==(n=l.TranspoterDetails)&&void 0!==n?n:[],Ledger_Name:l.Ledger_Name,Party_District:l.Party_District}}}));return e.concat(t)}),[]);case"ITEMS ARRIVED":return null===l||void 0===l?void 0:l.reduce(((e,l)=>{var r;if(!Array.isArray(null===l||void 0===l?void 0:l.ItemDetails))return e;const t=null===l||void 0===l||null===(r=l.ItemDetails)||void 0===r?void 0:r.filter((e=>{var r;const t=(null===l||void 0===l||null===(r=l.DeliveryDetails)||void 0===r?void 0:r.filter((l=>(0,i.Qr)(l.ItemId,null===e||void 0===e?void 0:e.ItemId)))).reduce(((e,l)=>(0,i.Q5)(e,null===l||void 0===l?void 0:l.Weight)),0);return Number(t)>=Number(null===e||void 0===e?void 0:e.Weight)})).map((e=>{var r,i,t,d,n;return{...e,OrderDetails:{Id:null===l||void 0===l?void 0:l.Id,Sno:null===l||void 0===l?void 0:l.Sno,PoYear:null===l||void 0===l?void 0:l.PoYear,PO_ID:null===l||void 0===l?void 0:l.PO_ID,BranchId:null===l||void 0===l?void 0:l.BranchId,BrokerId:null!==(r=l.BrokerId)&&void 0!==r?r:"",BrokerName:l.BrokerName,CreatedBy:l.CreatedBy,CreatedAt:l.CreatedAt,ItemDetails:null===l||void 0===l?void 0:l.ItemDetails,OrderStatus:null===l||void 0===l?void 0:l.OrderStatus,DeliveryDetails:null!==(i=l.DeliveryDetails)&&void 0!==i?i:[],LoadingDate:l.LoadingDate,IsConvertedAsInvoice:null===l||void 0===l?void 0:l.IsConvertedAsInvoice,OwnerId:null!==(t=l.OwnerId)&&void 0!==t?t:"",OwnerName:l.OwnerName,PartyAddress:l.PartyAddress,PartyId:null!==(d=l.PartyId)&&void 0!==d?d:"",PartyName:l.PartyName,PaymentCondition:l.PaymentCondition,Remarks:l.Remarks,TradeConfirmDate:l.TradeConfirmDate,TranspoterDetails:null!==(n=l.TranspoterDetails)&&void 0!==n?n:[],Ledger_Name:l.Ledger_Name,Party_District:l.Party_District}}}));return e.concat(t)}),[]);case"AR-Item-Based":case"AR-Vendor-Wise":return null===l||void 0===l?void 0:l.reduce(((e,l)=>{if(!Array.isArray(null===l||void 0===l?void 0:l.DeliveryDetails))return e;const r=l.DeliveryDetails.map((e=>{var r,i,t,d,n,a;return{...e,OrderDetails:{Id:null===l||void 0===l?void 0:l.Id,Sno:null===l||void 0===l?void 0:l.Sno,PoYear:null===l||void 0===l?void 0:l.PoYear,PO_ID:null===l||void 0===l?void 0:l.PO_ID,BranchId:null===l||void 0===l?void 0:l.BranchId,BrokerId:null!==(r=l.BrokerId)&&void 0!==r?r:"",BrokerName:l.BrokerName,CreatedBy:l.CreatedBy,CreatedAt:l.CreatedAt,DeliveryDetails:null!==(i=null===l||void 0===l?void 0:l.DeliveryDetails)&&void 0!==i?i:[],OrderStatus:null===l||void 0===l?void 0:l.OrderStatus,ItemDetails:null!==(t=l.ItemDetails)&&void 0!==t?t:[],LoadingDate:l.LoadingDate,IsConvertedAsInvoice:null===l||void 0===l?void 0:l.IsConvertedAsInvoice,OwnerId:null!==(d=l.OwnerId)&&void 0!==d?d:"",OwnerName:l.OwnerName,PartyAddress:l.PartyAddress,PartyId:null!==(n=l.PartyId)&&void 0!==n?n:"",PartyName:l.PartyName,PaymentCondition:l.PaymentCondition,Remarks:l.Remarks,TradeConfirmDate:l.TradeConfirmDate,TranspoterDetails:null!==(a=l.TranspoterDetails)&&void 0!==a?a:[],Ledger_Name:l.Ledger_Name,Party_District:l.Party_District}}}));return e.concat(r)}),[]);case"ORDERS":return l;case"ORDERS PENDING":return l.reduce(((e,l)=>{var r;return!Array.isArray(null===l||void 0===l?void 0:l.DeliveryDetails)||(0,i.QT)(null===l||void 0===l||null===(r=l.DeliveryDetails)||void 0===r?void 0:r.length,0)?e:e.concat(l)}),[]);case"ORDERS ARRIVED":return l.reduce(((e,l)=>{var r;return!Array.isArray(null===l||void 0===l?void 0:l.DeliveryDetails)||(0,i.Qr)(null===l||void 0===l||null===(r=l.DeliveryDetails)||void 0===r?void 0:r.length,0)?e:e.concat(l)}),[]);case"COMPLETED ORDERS":return l.reduce(((e,l)=>"Completed"!==(null===l||void 0===l?void 0:l.OrderStatus)?e:e.concat(l)),[]);case"IN-COMPLETED ORDERS":return l.reduce(((e,l)=>"Completed"===(null===l||void 0===l?void 0:l.OrderStatus)?e:e.concat(l)),[]);default:return[]}},m=" bg-info fw-bold fa-11 px-2 py-1 rounded-3 ",h=" bg-warning fw-bold fa-11 px-2 py-1 rounded-3 ",x=" bg-success text-light fa-11 px-2 py-1 rounded-3 ",D=" bg-danger text-light fw-bold fa-11 px-2 py-1 rounded-3 ",j=e=>{switch(e){case"New Order":return m;case"On Process":return h;case"Completed":return x;case"Canceled":return D;default:return""}},y=(e,l,r)=>({isVisible:1,Field_Name:e,Fied_Data:l,...r&&{ColumnHeader:r}}),N=e=>{let{OrderStatus:l="ITEMS",dialogs:r,setOrderPreview:a,navigation:u}=e;y("OrderId","string","Order Id");const m=y("OwnerName","string","Owner Name"),h=y("BrokerName","string","Broker Name"),x=y("PartyName","string","Party"),D=(y("PaymentCondition","string","Payment Condition"),y("Remarks","string")),N=y("TradeConfirmDate","date","Trade Confirm Date"),C=(y("LoadingDate","date","Loading Date"),y("QualityCondition","string","Condition"),{isVisible:1,ColumnHeader:"Party",isCustomCell:!0,Cell:e=>{var l;let{row:r}=e;return null===r||void 0===r||null===(l=r.OrderDetails)||void 0===l?void 0:l.PartyName}}),g={isVisible:1,ColumnHeader:"Action",isCustomCell:!0,Cell:e=>{var l,m,h;let{row:x}=e;const D=null!==x&&void 0!==x?x:{},j=null!==(l=null===x||void 0===x?void 0:x.ItemDetails)&&void 0!==l?l:[],y=null!==(m=null===x||void 0===x?void 0:x.DeliveryDetails)&&void 0!==m?m:[],N=null!==(h=null===x||void 0===x?void 0:x.TranspoterDetails)&&void 0!==h?h:[];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.c,{title:"Preview Order",children:(0,s.jsx)("span",{children:(0,s.jsx)(d.c,{size:"small",color:"primary",onClick:()=>a((e=>({...e,OrderDetails:D,OrderItemsArray:j,DeliveryArray:y,TranspoterArray:N,display:!0}))),children:(0,s.jsx)(n.c,{className:"fa-16"})})})}),u&&(0,i.Qr)(null===x||void 0===x?void 0:x.IsConvertedAsInvoice,0)&&(0,s.jsx)(t.c,{title:"Convert to invoice",children:(0,s.jsx)(d.c,{size:"small",onClick:()=>{u({page:"/erp/purchase/invoice/create",stateToTransfer:{invoiceInfo:{Branch_Id:null===D||void 0===D?void 0:D.BranchId,Po_Inv_Date:(0,i.Q7)(),Po_Entry_Date:null!==D&&void 0!==D&&D.LoadingDate?(0,i.Q7)(null===D||void 0===D?void 0:D.LoadingDate):(0,i.Q7)(),Retailer_Id:null===D||void 0===D?void 0:D.PartyId},orderInfo:y.map((e=>({POI_St_Id:"",DeliveryId:null===e||void 0===e?void 0:e.Id,OrderId:null===e||void 0===e?void 0:e.OrderId,Location_Id:null===e||void 0===e?void 0:e.LocationId,Item_Id:null===e||void 0===e?void 0:e.ItemId,Bill_Qty:null===e||void 0===e?void 0:e.Weight,Item_Rate:null===e||void 0===e?void 0:e.BilledRate,Amount:(0,i.eX)(null===e||void 0===e?void 0:e.BilledRate,null===e||void 0===e?void 0:e.Weight),Bill_Alt_Qty:null===e||void 0===e?void 0:e.Weight,Free_Qty:0,Batch_No:null===e||void 0===e?void 0:e.BatchLocation})))}})},children:(0,s.jsx)(o,{})})}),u&&(0,i.Qr)(null===x||void 0===x?void 0:x.IsConvertedAsInvoice,0)&&(0,s.jsx)(t.c,{title:"Edit",children:(0,s.jsx)("span",{children:(0,s.jsx)(d.c,{size:"small",onClick:()=>{u({page:"/dataEntry/purchaseOrder/create",stateToTransfer:{OrderDetails:D,OrderItemsArray:j,DeliveryArray:y,TranspoterArray:N,editPage:"PurchaseOderWithDelivery"}})},children:(0,s.jsx)(c.c,{className:"fa-16"})})})}),(0,i.Qr)(null===x||void 0===x?void 0:x.IsConvertedAsInvoice,0)&&(0,s.jsx)(t.c,{title:"Delete Order",children:(0,s.jsx)("span",{children:(0,s.jsx)(d.c,{size:"small",onClick:()=>r((e=>({...e,deleteOrderDialog:!0,deleteOrderId:null===x||void 0===x?void 0:x.Id}))),color:"error",children:(0,s.jsx)(v.c,{className:"fa-16"})})})})]})}},p={isVisible:1,ColumnHeader:"Status",isCustomCell:!0,Cell:e=>{let{row:l}=e;const r=null===l||void 0===l?void 0:l.OrderStatus;return(0,s.jsx)("span",{className:j(r),children:String(r).replace(" ","")})}},I=y("PO_ID","string","Order ID"),b={isVisible:1,ColumnHeader:"Order ID",isCustomCell:!0,Cell:e=>{var l,r;let{row:i}=e;return null!==(l=null===i||void 0===i||null===(r=i.OrderDetails)||void 0===r?void 0:r.PO_ID)&&void 0!==l?l:""}},P=y("ItemName","string","Item"),O=y("Rate","number"),f={isVisible:1,ColumnHeader:"Weight",isCustomCell:!0,Cell:e=>{var l;let{row:r}=e;return(null!==(l=null===r||void 0===r?void 0:r.Weight)&&void 0!==l?l:0)+" "+(null===r||void 0===r?void 0:r.Units)}},A={isVisible:1,ColumnHeader:"Arrived Quantity",isCustomCell:!0,Cell:e=>{var l,r;let{row:t}=e;return(null===t||void 0===t||null===(l=t.OrderDetails)||void 0===l||null===(r=l.DeliveryDetails)||void 0===r?void 0:r.filter((e=>(0,i.Qr)(e.ItemId,null===t||void 0===t?void 0:t.ItemId)))).reduce(((e,l)=>(0,i.Q5)(e,null===l||void 0===l?void 0:l.Weight)),0)}},S={isVisible:1,ColumnHeader:"Pending-Quantity",isCustomCell:!0,Cell:e=>{var l,r;let{row:t}=e;const d=(null===t||void 0===t||null===(l=t.OrderDetails)||void 0===l||null===(r=l.DeliveryDetails)||void 0===r?void 0:r.filter((e=>(0,i.Qr)(e.ItemId,null===t||void 0===t?void 0:t.ItemId)))).reduce(((e,l)=>(0,i.Q5)(e,null===l||void 0===l?void 0:l.Weight)),0);return(0,i.od)(null===t||void 0===t?void 0:t.Weight,d)}},w={isVisible:1,isCustomCell:!0,ColumnHeader:"Date",Cell:e=>{var l;let{row:r}=e;return(0,i.uy)(null===r||void 0===r||null===(l=r.OrderDetails)||void 0===l?void 0:l.TradeConfirmDate)}},_={isVisible:1,ColumnHeader:"Action",isCustomCell:!0,Cell:e=>{let{row:l}=e;const r=null===l||void 0===l?void 0:l.OrderDetails,{ItemDetails:i,DeliveryDetails:o,TranspoterDetails:v}=r;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.c,{title:"Preview Order",children:(0,s.jsx)("span",{children:(0,s.jsx)(d.c,{size:"small",color:"primary",onClick:()=>a((e=>({...e,OrderDetails:r,OrderItemsArray:i,DeliveryArray:o,TranspoterArray:v,display:!0}))),children:(0,s.jsx)(n.c,{className:"fa-16"})})})}),u&&(0,s.jsx)(t.c,{title:"Edit",children:(0,s.jsx)("span",{children:(0,s.jsx)(d.c,{size:"small",onClick:()=>u({page:"/dataEntry/purchaseOrder/create",stateToTransfer:{OrderDetails:r,OrderItemsArray:i,DeliveryArray:o,TranspoterArray:v,editPage:"PurchaseOderWithDelivery"}}),children:(0,s.jsx)(c.c,{className:"fa-16"})})})})]})}},L={isVisible:1,isCustomCell:!0,ColumnHeader:"Arrived Date",Cell:e=>{let{row:l}=e;return null!==l&&void 0!==l&&l.ArrivalDate?(0,i.uy)(null===l||void 0===l?void 0:l.ArrivalDate):""}},E=y("Location","string"),R={isVisible:1,ColumnHeader:"Rate",isCustomCell:!0,Cell:e=>{var l,r,t,d;let{row:n}=e;const a=null!==(t=null===(d=(Array.isArray(null===n||void 0===n||null===(l=n.OrderDetails)||void 0===l?void 0:l.ItemDetails)?null===n||void 0===n||null===(r=n.OrderDetails)||void 0===r?void 0:r.ItemDetails:[]).find((e=>(0,i.Qr)(null===e||void 0===e?void 0:e.ItemId,null===n||void 0===n?void 0:n.ItemId))))||void 0===d?void 0:d.Rate)&&void 0!==t?t:0,s=Number(null===n||void 0===n?void 0:n.BilledRate);return"".concat(s," (").concat((0,i.QT)(s,a)?"+"+(s-a):"-"+(a-s),")")}},k=(y("Ledger_Name","string","LOL Ledger Name"),y("Party_District","string","LOL Party District"),{isVisible:1,ColumnHeader:"LOL Ledger Name",isCustomCell:!0,Cell:e=>{var l;let{row:r}=e;return null===r||void 0===r||null===(l=r.OrderDetails)||void 0===l?void 0:l.Ledger_Name}}),B={isVisible:1,ColumnHeader:"LOL Party District",isCustomCell:!0,Cell:e=>{var l;let{row:r}=e;return null===r||void 0===r||null===(l=r.OrderDetails)||void 0===l?void 0:l.Party_District}},T=y("Stock_Item","string","Stock Item"),F=y("Stock_Group","string","Stock Group");switch(l){case"ITEMS":case"ITEMS PENDING":case"ITEMS ARRIVED":return[b,C,w,P,f,A,S,O,_];case"ORDERS":case"COMPLETED ORDERS":case"IN-COMPLETED ORDERS":return[I,N,x,h,m,D,p,g];case"ORDERS PENDING":case"ORDERS ARRIVED":return[I,N,x,h,m,D,g];case"PO-Vendor-Wise":return[b,w,k,B,F,f,O,S,_];case"PO-Item-Wise":case"PO-Pending-Only":return[b,w,F,T,f,O,S,k,B,_];case"AR-Item-Based":return[b,L,E,F,T,f,R,k,B,_];case"AR-Vendor-Wise":return[b,L,E,k,B,F,R,f,S,_];default:return[]}}},76456:(e,l,r)=>{r.d(l,{c:()=>m});var i=r(82656),t=r(26773),d=r(89e3),n=r(4488),a=r(90048),s=r(69060),o=r(39308),c=r(33452),v=r(49608),u=r(82496);const m=e=>{var l,r,m,h;let{OrderDetails:x={},OrderItemsArray:D=[],DeliveryArray:j=[],TranspoterArray:y=[],display:N=!1,onCloseDialog:C}=e;const[g,p]=(0,s.useState)(!1),I="border fa-14 vctr",b=(0,s.useRef)(null);(0,s.useEffect)((()=>{p(!!N)}),[N]);const P=()=>{C&&C(),p(!1)},O=(0,c.useReactToPrint)({content:()=>b.current});return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(i.c,{open:g,onClose:P,maxWidth:"lg",fullWidth:!0,children:[(0,u.jsxs)(t.c,{className:"d-flex justify-content-between align-items-center flex-wrap",children:[(0,u.jsx)("span",{children:"Order Preview"}),(0,u.jsx)("span",{children:(0,u.jsx)(d.c,{startIcon:(0,u.jsx)(v.c,{}),variant:"outlined",onClick:O,children:"Download"})})]}),(0,u.jsx)(n.c,{ref:b,children:(0,u.jsxs)("div",{className:"table-responsive",children:[(0,u.jsx)("table",{className:"table m-0",children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:I+" text-primary fw-bold bg-light border-bottom-0",children:"ORDER DETAILS"}),(0,u.jsx)("td",{className:I+" text-primary fw-bold bg-light ",children:"PARTY DETAILS"})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:I+" p-0 border-0",children:(0,u.jsx)("table",{className:"table m-0 ",children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:I,children:"Loading Date"}),(0,u.jsx)("td",{className:I,children:null!==x&&void 0!==x&&x.LoadingDate?(0,o.uy)(null===x||void 0===x?void 0:x.LoadingDate):""})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:I,children:"Trade Confirm Date"}),(0,u.jsx)("td",{className:I,children:null!==x&&void 0!==x&&x.TradeConfirmDate?(0,o.uy)(null===x||void 0===x?void 0:x.TradeConfirmDate):""})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:I,children:"Owner Name"}),(0,u.jsx)("td",{className:I,children:null===x||void 0===x?void 0:x.OwnerName})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:I,children:"Broker Name"}),(0,u.jsx)("td",{className:I,children:null===x||void 0===x?void 0:x.BrokerName})]})]})})}),(0,u.jsx)("td",{className:I+" p-0 border-0 ",children:(0,u.jsx)("table",{className:"table m-0 p-0",children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:I,children:(0,u.jsxs)("h6",{className:"m-0",children:["Party Name: ",(0,u.jsx)("br",{})," \u2003 ",null!==(l=null===x||void 0===x?void 0:x.PartyName)&&void 0!==l?l:"-"]})}),(0,u.jsx)("td",{className:I,children:(0,u.jsxs)("h6",{className:"m-0",children:["Party Address: ",(0,u.jsx)("br",{})," \u2003 ",null!==(r=null===x||void 0===x?void 0:x.PartyAddress)&&void 0!==r?r:"-"]})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:I,children:(0,u.jsxs)("h6",{className:"m-0",children:["Payment Condition: ",(0,u.jsx)("br",{})," \u2003 ",null!==(m=null===x||void 0===x?void 0:x.PaymentCondition)&&void 0!==m?m:"-"]})}),(0,u.jsx)("td",{className:I,children:(0,u.jsxs)("h6",{className:"m-0",children:["Remarks: ",(0,u.jsx)("br",{})," \u2003 ",null!==(h=null===x||void 0===x?void 0:x.Remarks)&&void 0!==h?h:"-"]})})]})]})})})]})]})}),(0,u.jsxs)("table",{className:"table m-0",children:[(0,u.jsxs)("thead",{children:[(0,u.jsx)("tr",{children:(0,u.jsx)("td",{className:I+" text-primary fw-bold bg-light border-top-0",colSpan:7,children:"ORDER ITEMS"})}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{className:I+" text-center",children:"SNo"}),(0,u.jsx)("th",{className:I+" text-center",children:"Item Name"}),(0,u.jsx)("th",{className:I+" text-center",children:"Tonnage"}),(0,u.jsxs)("th",{className:I+" text-center",children:["Rate ",(0,u.jsx)("br",{}),"Deliver/Spot"]}),(0,u.jsx)("th",{className:I+" text-center",children:"Discount"}),(0,u.jsx)("th",{className:I+" text-center",children:"Quality Condition"})]})]}),(0,u.jsx)("tbody",{children:D.map(((e,l)=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:I,children:l+1}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.ItemName}),(0,u.jsx)("td",{className:I,children:(null===e||void 0===e?void 0:e.Weight)+" "+(null===e||void 0===e?void 0:e.Units)}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.Rate}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.Discount}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.QualityCondition})]},l)))})]}),(0,u.jsxs)("table",{className:"table m-0",children:[(0,u.jsxs)("thead",{children:[(0,u.jsx)("tr",{children:(0,u.jsx)("td",{className:I+" text-primary fw-bold bg-light border-top-0",colSpan:11,children:"DELIVERY DETAILS"})}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{className:I+" text-center",children:"SNo"}),(0,u.jsx)("th",{className:I+" text-center",children:"Location"}),(0,u.jsx)("th",{className:I+" text-center",children:"Arrival Date"}),(0,u.jsx)("th",{className:I+" text-center",children:"Item Name"}),(0,u.jsx)("th",{className:I+" text-center",children:"Concern"}),(0,u.jsx)("th",{className:I+" text-center",children:"Bill No"}),(0,u.jsx)("th",{className:I+" text-center",children:"Bill Date"}),(0,u.jsx)("th",{className:I+" text-center",children:"Quantity"}),(0,u.jsx)("th",{className:I+" text-center",children:"Billed Rate"}),(0,u.jsx)("th",{className:I+" text-center",children:"Tonnage / KGs"}),(0,u.jsx)("th",{className:I+" text-center",children:"Batch / Location"})]})]}),(0,u.jsx)("tbody",{children:j.map(((e,l)=>{var r;return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:I,children:l+1}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.Location}),(0,u.jsx)("td",{className:I,children:null!==e&&void 0!==e&&e.ArrivalDate?(0,o.uy)(null===e||void 0===e?void 0:e.ArrivalDate):""}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.ItemName}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.Concern}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.BillNo}),(0,u.jsx)("td",{className:I,children:null!==e&&void 0!==e&&e.BillDate?(0,o.uy)(null===e||void 0===e?void 0:e.BillDate):""}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.Quantity}),(0,u.jsx)("td",{className:I,children:null!==(r=null===e||void 0===e?void 0:e.BilledRate)&&void 0!==r?r:0}),(0,u.jsx)("td",{className:I,children:(null===e||void 0===e?void 0:e.Weight)+" "+(null===e||void 0===e?void 0:e.Units)}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.BatchLocation})]},l)}))})]}),(0,u.jsxs)("table",{className:"table m-0",children:[(0,u.jsxs)("thead",{children:[(0,u.jsx)("tr",{children:(0,u.jsx)("td",{className:I+" text-primary fw-bold bg-light border-top-0",colSpan:9,children:"OTHER DETAILS"})}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{className:I+" text-center",rowSpan:2,children:"SNo"}),(0,u.jsx)("th",{className:I+" text-center",colSpan:2,children:"Loading Wt"}),(0,u.jsx)("th",{className:I+" text-center",colSpan:2,children:"Unloading Wt"}),(0,u.jsx)("th",{className:I+" text-center",children:"Weight"}),(0,u.jsx)("th",{className:I+" text-center",colSpan:3,children:"Transport Details"})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{className:I+" text-center",children:"Load"}),(0,u.jsx)("th",{className:I+" text-center",children:"Empty"}),(0,u.jsx)("th",{className:I+" text-center",children:"Load"}),(0,u.jsx)("th",{className:I+" text-center",children:"Empty"}),(0,u.jsx)("th",{className:I+" text-center",children:"EX / SH"}),(0,u.jsx)("th",{className:I+" text-center",children:"Name"}),(0,u.jsx)("th",{className:I+" text-center",children:"Vehicle No"}),(0,u.jsx)("th",{className:I+" text-center",children:"Phone Number"})]})]}),(0,u.jsx)("tbody",{children:y.map(((e,l)=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:I,children:l+1}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.Loading_Load}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.Loading_Empty}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.Unloading_Load}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.Unloading_Empty}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.EX_SH}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.DriverName}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.VehicleNo}),(0,u.jsx)("td",{className:I,children:null===e||void 0===e?void 0:e.PhoneNumber})]},l)))})]})]})}),(0,u.jsx)(a.c,{children:(0,u.jsx)(d.c,{onClick:P,children:"close"})})]})})}},45180:(e,l,r)=>{r.d(l,{c:()=>d});var i=r(27664),t=r(82496);const d=(0,i.c)((0,t.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},86e3:(e,l,r)=>{r.d(l,{c:()=>d});var i=r(27664),t=r(82496);const d=(0,i.c)((0,t.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},61988:(e,l,r)=>{r.d(l,{c:()=>d});var i=r(27664),t=r(82496);const d=(0,i.c)((0,t.jsx)("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61"}),"FilterAlt")},71412:(e,l,r)=>{r.d(l,{c:()=>d});var i=r(27664),t=r(82496);const d=(0,i.c)((0,t.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")}}]);
//# sourceMappingURL=3216.72313be0.chunk.js.map