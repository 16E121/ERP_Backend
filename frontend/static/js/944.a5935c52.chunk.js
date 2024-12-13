"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[944],{13724:(e,l,i)=>{i.d(l,{A:()=>M,c:()=>k});var n=i(69060),t=i(93996),s=i(14696),r=i(13224),a=i(27454),d=i(700),o=i(5548),u=i(3358),c=i(66931),v=i(89500),m=i(99904),x=i(85624),p=i(33856),h=i(58612),g=i(53248),b=i(29504),j=i(5930),C=i(39308),_=i(41459),f=i(46864),y=i(4284),S=i(76491),N=i(10728),w=i(49608),F=i(28064),D=(i(37692),i(35832)),A=i(82496);const H=(e,l)=>e.map((e=>{const i={};return l.forEach(((l,n)=>{if(l.isVisible||l.Defult_Display)if(l.isCustomCell&&l.Cell){const t=l.Cell({row:e}),s=l.ColumnHeader?String(l.ColumnHeader).replace(/\s+/g,"_").toLowerCase():"field_".concat(n+1);"string"!==typeof t&&"number"!==typeof t&&"bigint"!==typeof t||(i[s]=t)}else{let n=l.Field_Name;i[n]=e[n]||""}})),i})),M=function(){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{isVisible:1,Field_Name:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",Fied_Data:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"string",align:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"left",verticalAlign:arguments.length>4&&void 0!==arguments[4]?arguments[4]:"middle",...e&&{ColumnHeader:e}}},z=e=>{let{dataArray:l=[],columns:i=[],onClickFun:M=null,isExpendable:z=!1,expandableComp:k=null,tableMaxHeight:V=550,initialPageCount:P=20,EnableSerialNumber:E=!1,CellSize:R="small",disablePagination:I=!1,title:O="",PDFPrintOption:L=!1,ExcelPrintOption:Q=!1,maxHeightOption:B=!1,ButtonArea:U=null,MenuButtons:T=[]}=e;const[q,W]=(0,n.useState)(0),[$,G]=(0,n.useState)(P),[X,Y]=(0,n.useState)([]),[J,K]=(0,n.useState)(!0),Z=J&&B?" max-content ":V,ee=[{type:"left",class:"text-start"},{type:"right",class:"text-end"},{type:"center",class:"text-center"}],le=[{type:"top",class:" vtop "},{type:"bottom",class:" vbottom "},{type:"center",class:" vctr "}],ie=(e=>{if(!X.length)return e;return[...e].sort(((e,l)=>{for(const i of X){const{columnId:n,direction:t}=i,s=e[n],r=l[n];if(s!==r)return"asc"===t?s>r?1:-1:s<r?1:-1}return 0}))})(l),ne=q*$,te=ne+$,se=ie.slice(ne,te),re=(e,l)=>{switch(l){case"number":return(0,C.SA)(e);case"date":return(0,C.uy)(e);case"time":return(0,C.AX)(e);case"string":return e;default:return""}},ae=e=>{let{row:l,index:t}=e;const[s,r]=(0,n.useState)(!1),u="20px";return(0,A.jsxs)(n.Fragment,{children:[(0,A.jsxs)(a.c,{children:[!0===z&&k&&(0,A.jsx)(d.c,{className:"fa-13 border-end text-center vtop",children:(0,A.jsx)(o.c,{size:"small",onClick:()=>r((e=>!e)),children:s?(0,A.jsx)(_.c,{sx:{fontSize:u}}):(0,A.jsx)(f.c,{sx:{fontSize:u}})})}),!0===E&&(0,A.jsx)(d.c,{className:"fa-13 border-end text-center vtop",children:$*q+t+1}),null===i||void 0===i?void 0:i.map(((e,i)=>{var n,t;return((0,C.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,C.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,A.jsx)(d.c,{className:"fa-13 border-end "+(e.align?null===(n=ee.find((l=>l.type===String(e.align).toLowerCase())))||void 0===n?void 0:n.class:"")+(e.verticalAlign?null===(t=le.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===t?void 0:t.class:" vctr "),children:e.Cell({row:l,Field_Name:e.Field_Name})},i):Object.entries(l).map((n=>{var t,s;let[r,a]=n;return e.Field_Name===r&&((0,C.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,C.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(0,A.jsx)(d.c,{className:"fa-13 border-end "+(e.align?null===(t=ee.find((l=>l.type===String(e.align).toLowerCase())))||void 0===t?void 0:t.class:"")+(e.verticalAlign?null===(s=le.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===s?void 0:s.class:" vctr "),onClick:()=>M?M(l):console.log("Function not supplied"),children:re(a,null===e||void 0===e?void 0:e.Fied_Data)},i)})))}))]}),!0===z&&k&&s&&(0,A.jsx)(a.c,{children:(0,A.jsx)(d.c,{colSpan:Number(null===i||void 0===i?void 0:i.length)+(!0===E?2:1),children:k({row:l,index:t})})})]})},de=()=>{const[e,a]=(0,n.useState)(null),d=Boolean(e);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(u.c,{title:"Export options and more...",children:(0,A.jsx)(o.c,{"aria-describedby":d,onClick:e=>{a(e.currentTarget)},className:"ms-2",size:"small",children:(0,A.jsx)(y.c,{})})}),(0,A.jsx)(c.cp,{open:d,anchorEl:e,onClose:()=>{a(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:(0,A.jsxs)(v.c,{children:[B&&(0,A.jsxs)(t.c,{onClick:()=>K((e=>!e)),disabled:(0,C.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,A.jsx)(s.c,{children:J?(0,A.jsx)(S.c,{fontSize:"small",color:"primary"}):(0,A.jsx)(N.c,{fontSize:"small"})}),(0,A.jsx)(r.c,{color:J?"success":"",children:"Max Height"})]}),L&&(0,A.jsxs)(t.c,{onClick:()=>((e,l)=>{try{const i=new F.default,n=H(e,l),t=l.filter((e=>e.isVisible||e.Defult_Display)).map((e=>e.Field_Name||String(e.ColumnHeader).replace(/\s+/g,"_").toLowerCase())),s=n.map((e=>t.map((l=>e[l])))).map(((e,l)=>({...e,Sno:l+1})));i.autoTable({head:[t],body:s}),i.save("table.pdf")}catch(i){console.error(i)}})(l,i),disabled:(0,C.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,A.jsx)(s.c,{children:(0,A.jsx)(w.c,{fontSize:"small",color:"primary"})}),(0,A.jsx)(r.c,{children:"Download PDF"})]}),Q&&(0,A.jsxs)(t.c,{onClick:()=>((e,l)=>{try{const i=H(e,l),n=D.c$.json_to_sheet(i),t=D.c$.book_new();D.c$.book_append_sheet(t,n,"Data"),D.a8(t,"table.xlsx")}catch(i){console.error(i)}})(l,i),disabled:(0,C.Qr)(null===l||void 0===l?void 0:l.length,0),children:[(0,A.jsx)(s.c,{children:(0,A.jsx)(w.c,{fontSize:"small",color:"primary"})}),(0,A.jsx)(r.c,{children:"Download Excel"})]}),T.map((e=>function(e,l,i){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,A.jsxs)(t.c,{onClick:i,disabled:n,children:[(0,A.jsx)(s.c,{children:l}),(0,A.jsx)(r.c,{children:e})]})}(e.name,e.icon,e.onclick,e.disabled)))]})})]})};return(0,A.jsxs)("div",{className:"rounded-3 bg-white overflow-hidden",children:[(0,A.jsxs)("div",{className:"d-flex align-items-center flex-wrap px-3 py-2 flex-row-reverse ",children:[(L||Q||T.length>0||B)&&(0,A.jsx)(de,{}),U&&U,O&&(0,A.jsx)("h6",{className:"fw-bold text-muted flex-grow-1 m-0",children:O})]}),(0,A.jsx)(m.c,{component:x.c,sx:{maxHeight:Z},children:(0,A.jsxs)(p.c,{stickyHeader:!0,size:R,children:[(0,A.jsx)(h.c,{children:(0,A.jsxs)(a.c,{children:[z&&k&&(0,A.jsx)(d.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"#"}),E&&(0,A.jsx)(d.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"SNo"}),i.map(((e,l)=>{const i=(0,C.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,C.Qr)(null===e||void 0===e?void 0:e.isVisible,1),n=!1===Boolean(null===e||void 0===e?void 0:e.isCustomCell)||!e.Cell,t=X.find((l=>l.columnId===e.Field_Name)),s=t?t.direction:"asc";var r,a,o,u;return i?n?(0,A.jsx)(d.c,{className:"fa-13 fw-bold border-end border-top "+(e.align?null===(r=ee.find((l=>l.type===String(e.align).toLowerCase())))||void 0===r?void 0:r.class:""),style:{backgroundColor:"#EDF0F7"},sortDirection:!!t&&s,children:(0,A.jsx)(g.c,{active:!!t,direction:s,onClick:()=>(e=>{const l=X.find((l=>l.columnId===e));if(l){const i="asc"===l.direction;Y(X.map((l=>l.columnId===e?{...l,direction:i?"desc":"asc"}:l)))}else Y([...X,{columnId:e,direction:"asc"}])})(e.Field_Name),children:e.ColumnHeader||(null===e||void 0===e||null===(a=e.Field_Name)||void 0===a?void 0:a.replace(/_/g," "))})},l):(0,A.jsx)(d.c,{className:"".concat(e.ColumnHeader||null!==e&&void 0!==e&&e.Field_Name?" fa-13 fw-bold border-end border-top p-2 appFont ":" p-0 "," ")+(e.align?null===(o=ee.find((l=>l.type===String(e.align).toLowerCase())))||void 0===o?void 0:o.class:""),style:{backgroundColor:"#EDF0F7"},children:e.ColumnHeader||(null===e||void 0===e||null===(u=e.Field_Name)||void 0===u?void 0:u.replace(/_/g," "))},l):null}))]})}),(0,A.jsxs)(b.c,{children:[(I?ie:se).map(((e,l)=>(0,A.jsx)(ae,{row:e,index:l},l))),0===l.length&&(0,A.jsx)(a.c,{children:(0,A.jsx)(d.c,{colSpan:i.length+(!0===z&&k?1:0)+(!0===E?1:0),sx:{textAlign:"center"},children:"No Data"})})]})]})}),!I&&0!==se.length&&(0,A.jsx)("div",{className:"p-2 pb-0",children:(0,A.jsx)(j.c,{component:"div",count:l.length,page:q,onPageChange:(e,l)=>{W(l)},rowsPerPage:$,onRowsPerPageChange:e=>{G(parseInt(e.target.value,10)),W(0)},rowsPerPageOptions:Array.from(new Set([P,5,20,50,100,200,500])).sort(((e,l)=>e-l)),labelRowsPerPage:"Rows per page",showFirstButton:!0,showLastButton:!0})})]})};z.defaultProps={dataArray:[],columns:[],onClickFun:null,isExpendable:!1,expandableComp:null,tableMaxHeight:550,initialPageCount:20,EnableSerialNumber:!1,CellSize:"small",disablePagination:!1,title:void 0,PDFPrintOption:!1,ExcelPrintOption:!1,maxHeightOption:!1,ButtonArea:null,MenuButtons:[]};const k=z},64568:(e,l,i)=>{i.d(l,{c:()=>t});var n=i(82496);const t=()=>(0,n.jsx)("span",{style:{color:"red",fontWeight:"bold",fontSize:"1em"},children:" *"})},33416:(e,l,i)=>{i.r(l),i.d(l,{default:()=>C});var n=i(69060),t=i(1908),s=i(39308),r=i(3358),a=i(89e3),d=i(5548),o=i(82656),u=i(26773),c=i(4488),v=i(90048),m=i(96064),x=i(86e3),p=i(56480),h=i(13724),g=i(64568),b=i(82496);const j={id:"",name:"",menu_type:1,parent_id:"",url:"",display_order:1,is_active:1,parantDetails:{}},C=e=>{var l;let{loadingOn:i,loadingOff:C}=e;const[_,f]=(0,n.useState)(j),[y,S]=(0,n.useState)(!1),[N,w]=(0,n.useState)([]),[F,D]=(0,n.useState)(!1);(0,n.useEffect)((()=>{(0,t.q)({address:"authorization/menuMaster"}).then((e=>{e.success&&w(e.data)})).catch((e=>console.error(e)))}),[y]);const A=e=>{var l;let{dataSource:i}=e;return(0,b.jsx)(h.c,{dataArray:null!==(l=null===i||void 0===i?void 0:i.SubRoutes)&&void 0!==l?l:[],title:"Sub Routes",columns:[{isVisible:1,Field_Name:"name",Fied_Data:"string",ColumnHeader:"Menu"},{isVisible:1,Field_Name:"url",Fied_Data:"string",ColumnHeader:"Address"},{isVisible:1,isCustomCell:!0,Cell:e=>{var l,i;let{row:n}=e;return(0,b.jsx)(r.c,{title:"Add SubRouting",children:(0,b.jsx)("span",{children:(0,b.jsx)(a.c,{size:"small",className:"bg-light",onClick:()=>{f((e=>{var l;return{...e,menu_type:0,parent_id:n.id,parantDetails:n,url:(null!==(l=null===n||void 0===n?void 0:n.url)&&void 0!==l?l:"")+"/"}})),D(!0)},startIcon:(0,b.jsx)(m.c,{sx:{fontSize:"18px"}}),children:null!==(l=null===n||void 0===n||null===(i=n.SubRoutes)||void 0===i?void 0:i.length)&&void 0!==l?l:0})})})},ColumnHeader:"Sub Routings"},{isVisible:1,Field_Name:"display_order",Fied_Data:"number",ColumnHeader:"Order"},{isVisible:1,isCustomCell:!0,Cell:e=>{let{row:l}=e;return(0,s.Qr)(null===l||void 0===l?void 0:l.is_active,1)?(0,b.jsx)("span",{className:"px-3 py-1 rounded-3 text-white bg-success",children:"Active"}):(0,b.jsx)("span",{className:"px-3 py-1 rounded-3 text-white bg-danger",children:"In-Active"})},ColumnHeader:"Status"},{isVisible:1,isCustomCell:!0,Cell:e=>{let{row:l}=e;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(r.c,{title:"Edit Menu",children:(0,b.jsx)(d.c,{size:"small",className:"p-1",onClick:()=>{f((e=>{var i,n,t,s,r;return{...e,id:null===l||void 0===l?void 0:l.id,name:null!==(i=null===l||void 0===l?void 0:l.name)&&void 0!==i?i:"",menu_type:0,parent_id:null!==(n=null===l||void 0===l?void 0:l.parent_id)&&void 0!==n?n:"",url:null!==(t=null===l||void 0===l?void 0:l.url)&&void 0!==t?t:"",display_order:null!==(s=null===l||void 0===l?void 0:l.display_order)&&void 0!==s?s:"",is_active:null!==(r=null===l||void 0===l?void 0:l.is_active)&&void 0!==r?r:""}})),D(!0)},children:(0,b.jsx)(x.c,{sx:{fontSize:"18px"}})})})})},ColumnHeader:"Action"}],tableMaxHeight:700,isExpendable:!0,expandableComp:e=>{var l;let{row:i}=e;return(null===i||void 0===i||null===(l=i.SubRoutes)||void 0===l?void 0:l.length)>0&&(0,b.jsx)(A,{dataSource:i})}})},H=e=>{var l,i;let{row:n}=e;return(0,b.jsxs)(b.Fragment,{children:[(null===n||void 0===n||null===(l=n.ChildMenu)||void 0===l?void 0:l.length)>0&&(0,b.jsx)(h.c,{dataArray:null!==(i=null===n||void 0===n?void 0:n.ChildMenu)&&void 0!==i?i:[],title:"Child Menus",columns:[{isVisible:1,Field_Name:"name",Fied_Data:"string",ColumnHeader:"Child Menu"},{isVisible:1,Field_Name:"url",Fied_Data:"string",ColumnHeader:"Address"},{isVisible:1,isCustomCell:!0,Cell:e=>{var l,i;let{row:n}=e;return(0,b.jsx)(r.c,{title:"Add SubRouting",children:(0,b.jsx)("span",{children:(0,b.jsx)(a.c,{size:"small",className:"bg-light",onClick:()=>{f((e=>{var l,i,t;return{...e,menu_type:0,parent_id:n.id,parantDetails:n,url:(null!==n&&void 0!==n&&null!==(l=n.ParantData)&&void 0!==l&&l.url?(null===n||void 0===n||null===(i=n.ParantData)||void 0===i?void 0:i.url)+"/":"")+(null!==(t=null===n||void 0===n?void 0:n.url)&&void 0!==t?t:"")+"/"}})),D(!0)},startIcon:(0,b.jsx)(m.c,{sx:{fontSize:"18px"}}),children:null!==(l=null===n||void 0===n||null===(i=n.SubRoutes)||void 0===i?void 0:i.length)&&void 0!==l?l:0})})})},ColumnHeader:"Sub Routings"},{isVisible:1,Field_Name:"display_order",Fied_Data:"number",ColumnHeader:"Order"},{isVisible:1,isCustomCell:!0,Cell:e=>{let{row:l}=e;return(0,s.Qr)(null===l||void 0===l?void 0:l.is_active,1)?(0,b.jsx)("span",{className:"px-3 py-1 rounded-3 text-white bg-success",children:"Active"}):(0,b.jsx)("span",{className:"px-3 py-1 rounded-3 text-white bg-danger",children:"In-Active"})},ColumnHeader:"Status"},{isVisible:1,isCustomCell:!0,Cell:e=>{let{row:l}=e;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(r.c,{title:"Edit Menu",children:(0,b.jsx)(d.c,{size:"small",className:"p-1",onClick:()=>{f((e=>{var i,n,t,s,r;return{...e,id:null===l||void 0===l?void 0:l.id,name:null!==(i=null===l||void 0===l?void 0:l.name)&&void 0!==i?i:"",menu_type:3,parent_id:null!==(n=null===l||void 0===l?void 0:l.parent_id)&&void 0!==n?n:"",url:null!==(t=null===l||void 0===l?void 0:l.url)&&void 0!==t?t:"",display_order:null!==(s=null===l||void 0===l?void 0:l.display_order)&&void 0!==s?s:"",is_active:null!==(r=null===l||void 0===l?void 0:l.is_active)&&void 0!==r?r:""}})),D(!0)},children:(0,b.jsx)(x.c,{sx:{fontSize:"18px"}})})})})},ColumnHeader:"Action"}]}),n.SubRoutes.length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("br",{}),(0,b.jsx)(A,{dataSource:n})]})]})},M=e=>{var l;let{row:i}=e;return(0,b.jsxs)(b.Fragment,{children:[i.SubMenu.length>0&&(0,b.jsx)(h.c,{dataArray:null!==(l=null===i||void 0===i?void 0:i.SubMenu)&&void 0!==l?l:[],title:"Sub Menus",columns:[{isVisible:1,Field_Name:"name",Fied_Data:"string",ColumnHeader:"Sub Menu"},{isVisible:1,Field_Name:"url",Fied_Data:"string",ColumnHeader:"Address"},{isVisible:1,isCustomCell:!0,Cell:e=>{var l,i;let{row:n}=e;return(0,b.jsx)(r.c,{title:"Add Child-Menu",children:(0,b.jsx)("span",{children:(0,b.jsx)(a.c,{size:"small",className:"bg-light",onClick:()=>{f((e=>{var l,i,t;return{...e,menu_type:3,parent_id:n.id,parantDetails:n,url:(null!==n&&void 0!==n&&null!==(l=n.ParantData)&&void 0!==l&&l.url?(null===n||void 0===n||null===(i=n.ParantData)||void 0===i?void 0:i.url)+"/":"")+(null!==(t=null===n||void 0===n?void 0:n.url)&&void 0!==t?t:"")+"/"}})),D(!0)},startIcon:(0,b.jsx)(m.c,{sx:{fontSize:"18px"}}),children:null!==(l=null===n||void 0===n||null===(i=n.ChildMenu)||void 0===i?void 0:i.length)&&void 0!==l?l:0})})})},ColumnHeader:"Child Menu"},{isVisible:1,isCustomCell:!0,Cell:e=>{var l,i;let{row:n}=e;return(0,b.jsx)(r.c,{title:"Add SubRouting",children:(0,b.jsx)("span",{children:(0,b.jsx)(a.c,{size:"small",className:"bg-light",onClick:()=>{f((e=>{var l,i,t;return{...e,menu_type:0,parent_id:n.id,parantDetails:n,url:(null!==n&&void 0!==n&&null!==(l=n.ParantData)&&void 0!==l&&l.url?(null===n||void 0===n||null===(i=n.ParantData)||void 0===i?void 0:i.url)+"/":"")+(null!==(t=null===n||void 0===n?void 0:n.url)&&void 0!==t?t:"")+"/"}})),D(!0)},startIcon:(0,b.jsx)(m.c,{sx:{fontSize:"18px"}}),children:null!==(l=null===n||void 0===n||null===(i=n.SubRoutes)||void 0===i?void 0:i.length)&&void 0!==l?l:0})})})},ColumnHeader:"Sub Routings"},{isVisible:1,Field_Name:"display_order",Fied_Data:"number",ColumnHeader:"Order"},{isVisible:1,isCustomCell:!0,Cell:e=>{let{row:l}=e;return(0,s.Qr)(null===l||void 0===l?void 0:l.is_active,1)?(0,b.jsx)("span",{className:"px-3 py-1 rounded-3 text-white bg-success",children:"Active"}):(0,b.jsx)("span",{className:"px-3 py-1 rounded-3 text-white bg-danger",children:"In-Active"})},ColumnHeader:"Status"},{isVisible:1,isCustomCell:!0,Cell:e=>{let{row:l}=e;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(r.c,{title:"Edit Menu",children:(0,b.jsx)(d.c,{size:"small",className:"p-1",onClick:()=>{f((e=>{var i,n,t,s,r;return{...e,id:null===l||void 0===l?void 0:l.id,name:null!==(i=null===l||void 0===l?void 0:l.name)&&void 0!==i?i:"",menu_type:2,parent_id:null!==(n=null===l||void 0===l?void 0:l.parent_id)&&void 0!==n?n:"",url:null!==(t=null===l||void 0===l?void 0:l.url)&&void 0!==t?t:"",display_order:null!==(s=null===l||void 0===l?void 0:l.display_order)&&void 0!==s?s:"",is_active:null!==(r=null===l||void 0===l?void 0:l.is_active)&&void 0!==r?r:""}})),D(!0)},children:(0,b.jsx)(x.c,{sx:{fontSize:"18px"}})})})})},ColumnHeader:"Action"}],tableMaxHeight:700,isExpendable:!0,expandableComp:e=>{var l,i;let{row:n}=e;return((null===n||void 0===n||null===(l=n.ChildMenu)||void 0===l?void 0:l.length)>0||(null===n||void 0===n||null===(i=n.SubRoutes)||void 0===i?void 0:i.length)>0)&&(0,b.jsx)(H,{row:n})}}),i.SubRoutes.length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("br",{}),(0,b.jsx)(A,{dataSource:i})]})]})},z=()=>{D(!1),f(j)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.c,{title:"Main Menu",ButtonArea:(0,b.jsx)(a.c,{onClick:()=>{D(!0),f(j)},variant:"outlined",startIcon:(0,b.jsx)(m.c,{}),children:"New Menu"}),dataArray:N,columns:[{isVisible:1,Field_Name:"name",Fied_Data:"string",ColumnHeader:"Main Menu"},{isVisible:1,Field_Name:"url",Fied_Data:"string",ColumnHeader:"Address"},{isVisible:1,isCustomCell:!0,Cell:e=>{var l,i;let{row:n}=e;return(0,b.jsx)(r.c,{title:"Add Sub-Menu",children:(0,b.jsx)("span",{children:(0,b.jsx)(a.c,{size:"small",className:"bg-light",onClick:()=>{f((e=>{var l;return{...e,menu_type:2,parent_id:n.id,parantDetails:n,url:(null!==(l=null===n||void 0===n?void 0:n.url)&&void 0!==l?l:"")+"/"}})),D(!0)},startIcon:(0,b.jsx)(m.c,{sx:{fontSize:"18px"}}),children:null!==(l=null===n||void 0===n||null===(i=n.SubMenu)||void 0===i?void 0:i.length)&&void 0!==l?l:0})})})},ColumnHeader:"Sub Menu",align:"center"},{isVisible:1,isCustomCell:!0,Cell:e=>{var l,i;let{row:n}=e;return(0,b.jsx)(r.c,{title:"Add SubRouting",children:(0,b.jsx)("span",{children:(0,b.jsx)(a.c,{size:"small",className:"bg-light",onClick:()=>{f((e=>{var l;return{...e,menu_type:0,parent_id:n.id,parantDetails:n,url:(null!==(l=null===n||void 0===n?void 0:n.url)&&void 0!==l?l:"")+"/"}})),D(!0)},startIcon:(0,b.jsx)(m.c,{sx:{fontSize:"18px"}}),children:null!==(l=null===n||void 0===n||null===(i=n.SubRoutes)||void 0===i?void 0:i.length)&&void 0!==l?l:0})})})},ColumnHeader:"Sub Routings",align:"center"},{isVisible:1,Field_Name:"display_order",Fied_Data:"number",ColumnHeader:"Order"},{isVisible:1,isCustomCell:!0,Cell:e=>{let{row:l}=e;return(0,s.Qr)(null===l||void 0===l?void 0:l.is_active,1)?(0,b.jsx)("span",{className:"px-3 py-1 rounded-3 text-white bg-success",children:"Active"}):(0,b.jsx)("span",{className:"px-3 py-1 rounded-3 text-white bg-danger",children:"In-Active"})},ColumnHeader:"Status"},{isVisible:1,isCustomCell:!0,Cell:e=>{let{row:l}=e;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(r.c,{title:"Edit Menu",children:(0,b.jsx)(d.c,{size:"small",className:"p-1",onClick:()=>{f((e=>{var i,n,t,s,r;return{...e,id:null===l||void 0===l?void 0:l.id,name:null!==(i=null===l||void 0===l?void 0:l.name)&&void 0!==i?i:"",menu_type:1,parent_id:null!==(n=null===l||void 0===l?void 0:l.parent_id)&&void 0!==n?n:"",url:null!==(t=null===l||void 0===l?void 0:l.url)&&void 0!==t?t:"",display_order:null!==(s=null===l||void 0===l?void 0:l.display_order)&&void 0!==s?s:"",is_active:null!==(r=null===l||void 0===l?void 0:l.is_active)&&void 0!==r?r:""}})),D(!0)},children:(0,b.jsx)(x.c,{sx:{fontSize:"18px"}})})})})},ColumnHeader:"Action"}],tableMaxHeight:700,isExpendable:!0,expandableComp:e=>{var l,i;let{row:n}=e;return((null===n||void 0===n||null===(l=n.SubMenu)||void 0===l?void 0:l.length)>0||(null===n||void 0===n||null===(i=n.SubRoutes)||void 0===i?void 0:i.length)>0)&&(0,b.jsx)(M,{row:n})}}),(0,b.jsxs)(o.c,{open:F,onClose:z,maxWidth:"sm",fullWidth:!0,children:[(0,b.jsxs)(u.c,{children:[_.id?"Modify ":"Add ",(()=>{switch(_.menu_type){case 0:return"SUB ROUTING";case 1:return"MAIN MENU";case 2:return"SUB MENU";case 3:return"CHILD MENU";default:return""}})()]}),(0,b.jsxs)("form",{onSubmit:e=>{e.preventDefault(),i&&i(),(0,t.q)({address:"authorization/menuMaster",method:_.id?"PUT":"POST",bodyData:_}).then((e=>{e.success?(p.m4.success(e.message),z(),S((e=>!e))):p.m4.error(e.message)})).catch((e=>console.error(e))).finally((()=>{C&&C()}))},children:[(0,b.jsx)(c.c,{children:(0,b.jsxs)("div",{className:"row",children:[(0,s.CY)(_.parantDetails)&&_.parantDetails.name&&(0,b.jsxs)("div",{className:"col-lg-12 p-2",children:[(0,b.jsx)("label",{children:"Parant Name "}),(0,b.jsx)("input",{className:"cus-inpt",value:null===_||void 0===_||null===(l=_.parantDetails)||void 0===l?void 0:l.name,disabled:!0})]}),(0,b.jsxs)("div",{className:"col-lg-6 p-2",children:[(0,b.jsxs)("label",{children:["Name ",(0,b.jsx)(g.c,{})]}),(0,b.jsx)("input",{className:"cus-inpt",value:_.name,onChange:e=>f((l=>({...l,name:e.target.value}))),required:!0,minLength:3,maxLength:20})]}),(0,b.jsxs)("div",{className:"col-lg-6 p-2",children:[(0,b.jsx)("label",{children:"Order No"}),(0,b.jsx)("input",{className:"cus-inpt",value:_.display_order,onChange:e=>f((l=>({...l,display_order:e.target.value})))})]}),(0,b.jsxs)("div",{className:"col-lg-12 p-2",children:[(0,b.jsx)("label",{children:"URL (Link)"}),(0,b.jsx)("input",{className:"cus-inpt",value:_.url,onChange:e=>f((l=>({...l,url:e.target.value})))})]}),_.id&&(0,b.jsxs)("div",{className:"col-lg-6 p-2",children:[(0,b.jsx)("label",{children:"Is Active"}),(0,b.jsxs)("select",{className:"cus-inpt",value:_.is_active,onChange:e=>f((l=>({...l,is_active:e.target.value}))),children:[(0,b.jsx)("option",{value:"",disabled:!0,children:"select"}),(0,b.jsx)("option",{value:"1",children:"Active"}),(0,b.jsx)("option",{value:"0",children:"In-Active"})]})]})]})}),(0,b.jsxs)(v.c,{children:[(0,b.jsx)(a.c,{type:"button",onClick:z,children:"cancel"}),(0,b.jsx)(a.c,{type:"submit",variant:"outlined",children:"save"})]})]})]})]})}},96064:(e,l,i)=>{i.d(l,{c:()=>s});var n=i(27664),t=i(82496);const s=(0,n.c)((0,t.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},86e3:(e,l,i)=>{i.d(l,{c:()=>s});var n=i(27664),t=i(82496);const s=(0,n.c)((0,t.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},81568:(e,l,i)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}i.d(l,{c:()=>n})}}]);
//# sourceMappingURL=944.a5935c52.chunk.js.map