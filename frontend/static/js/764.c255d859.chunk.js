"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[764],{13724:(e,l,n)=>{n.d(l,{c:()=>b});var i=n(69060),s=n(27454),t=n(700),a=n(5548),r=n(99904),o=n(85624),d=n(33856),c=n(58612),u=n(53248),m=n(29504),v=n(5930),x=n(39308),p=n(41459),h=n(46864),g=n(82496);const j=e=>{let{dataArray:l=[],columns:n=[],onClickFun:j=null,isExpendable:b=!1,expandableComp:f=null,tableMaxHeight:N=550,initialPageCount:C=20,EnableSerialNumber:y=!1,CellSize:F="small",disablePagination:w=!1,title:_=""}=e;const[S,k]=(0,i.useState)(0),[D,A]=(0,i.useState)(C),[O,E]=(0,i.useState)([]),P=[{type:"left",class:"text-start"},{type:"right",class:"text-end"},{type:"center",class:"text-center"}],z=[{type:"top",class:" vtop "},{type:"bottom",class:" vbottom "},{type:"center",class:" vctr "}],B=(e=>{if(!O.length)return e;return[...e].sort(((e,l)=>{for(const n of O){const{columnId:i,direction:s}=n,t=e[i],a=l[i];if(t!==a)return"asc"===s?t>a?1:-1:t<a?1:-1}return 0}))})(l),H=S*D,I=H+D,L=B.slice(H,I),V=(e,l)=>{switch(l){case"number":return(0,x.SA)(e);case"date":return(0,x.uy)(e);case"time":return(0,x.AX)(e);case"string":return e;default:return""}},Q=e=>{let{row:l,index:r}=e;const[o,d]=(0,i.useState)(!1),c="20px";return(0,g.jsxs)(i.Fragment,{children:[(0,g.jsxs)(s.c,{children:[!0===b&&f&&(0,g.jsx)(t.c,{className:"fa-13 border-end text-center vtop",children:(0,g.jsx)(a.c,{size:"small",onClick:()=>d((e=>!e)),children:o?(0,g.jsx)(p.c,{sx:{fontSize:c}}):(0,g.jsx)(h.c,{sx:{fontSize:c}})})}),!0===y&&(0,g.jsx)(t.c,{className:"fa-13 border-end text-center vtop",children:D*S+r+1}),null===n||void 0===n?void 0:n.map(((e,n)=>{var i,s;return((0,x.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,x.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,g.jsx)(t.c,{className:"fa-13 border-end "+(e.align?null===(i=P.find((l=>l.type===String(e.align).toLowerCase())))||void 0===i?void 0:i.class:"")+(e.verticalAlign?null===(s=z.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===s?void 0:s.class:" vctr "),children:e.Cell({row:l,Field_Name:e.Field_Name})},n):Object.entries(l).map((i=>{var s,a;let[r,o]=i;return e.Field_Name===r&&((0,x.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,x.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(0,g.jsx)(t.c,{className:"fa-13 border-end "+(e.align?null===(s=P.find((l=>l.type===String(e.align).toLowerCase())))||void 0===s?void 0:s.class:"")+(e.verticalAlign?null===(a=z.find((l=>l.type===String(e.verticalAlign).toLowerCase())))||void 0===a?void 0:a.class:" vctr "),onClick:()=>j?j(l):console.log("Function not supplied"),children:V(o,null===e||void 0===e?void 0:e.Fied_Data)},n)})))}))]}),!0===b&&f&&o&&(0,g.jsx)(s.c,{children:(0,g.jsx)(t.c,{colSpan:Number(null===n||void 0===n?void 0:n.length)+(!0===y?2:1),children:f({row:l,index:r})})})]})};return(0,g.jsxs)("div",{children:[_&&(0,g.jsx)("h6",{className:"fw-bold text-muted",children:_}),(0,g.jsx)(r.c,{component:o.c,sx:{maxHeight:N},children:(0,g.jsxs)(d.c,{stickyHeader:!0,size:F,children:[(0,g.jsx)(c.c,{children:(0,g.jsxs)(s.c,{children:[b&&f&&(0,g.jsx)(t.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"#"}),y&&(0,g.jsx)(t.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"SNo"}),n.map(((e,l)=>{const n=(0,x.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,x.Qr)(null===e||void 0===e?void 0:e.isVisible,1),i=!1===Boolean(null===e||void 0===e?void 0:e.isCustomCell)||!e.Cell,s=O.find((l=>l.columnId===e.Field_Name)),a=s?s.direction:"asc";var r,o,d,c;return n?i?(0,g.jsx)(t.c,{className:"fa-13 fw-bold border-end border-top "+(e.align?null===(r=P.find((l=>l.type===String(e.align).toLowerCase())))||void 0===r?void 0:r.class:""),style:{backgroundColor:"#EDF0F7"},sortDirection:!!s&&a,children:(0,g.jsx)(u.c,{active:!!s,direction:a,onClick:()=>(e=>{const l=O.find((l=>l.columnId===e));if(l){const n="asc"===l.direction;E(O.map((l=>l.columnId===e?{...l,direction:n?"desc":"asc"}:l)))}else E([...O,{columnId:e,direction:"asc"}])})(e.Field_Name),children:e.ColumnHeader||(null===e||void 0===e||null===(o=e.Field_Name)||void 0===o?void 0:o.replace(/_/g," "))})},l):(0,g.jsx)(t.c,{className:"".concat(e.ColumnHeader||null!==e&&void 0!==e&&e.Field_Name?" fa-13 fw-bold border-end border-top p-2 appFont ":" p-0 "," ")+(e.align?null===(d=P.find((l=>l.type===String(e.align).toLowerCase())))||void 0===d?void 0:d.class:""),style:{backgroundColor:"#EDF0F7"},children:e.ColumnHeader||(null===e||void 0===e||null===(c=e.Field_Name)||void 0===c?void 0:c.replace(/_/g," "))},l):null}))]})}),(0,g.jsxs)(m.c,{children:[(w?B:L).map(((e,l)=>(0,g.jsx)(Q,{row:e,index:l},l))),0===l.length&&(0,g.jsx)(s.c,{children:(0,g.jsx)(t.c,{colSpan:n.length+(!0===b&&f?1:0)+(!0===y?1:0),sx:{textAlign:"center"},children:"No Data"})})]})]})}),!w&&0!==L.length&&(0,g.jsx)("div",{className:"p-2 pb-0",children:(0,g.jsx)(v.c,{component:"div",count:l.length,page:S,onPageChange:(e,l)=>{k(l)},rowsPerPage:D,onRowsPerPageChange:e=>{A(parseInt(e.target.value,10)),k(0)},rowsPerPageOptions:Array.from(new Set([C,5,20,50,100,200,500])).sort(((e,l)=>e-l)),labelRowsPerPage:"Rows per page",showFirstButton:!0,showLastButton:!0})})]})};j.defaultProps={dataArray:[],columns:[],onClickFun:null,isExpendable:!1,expandableComp:null,tableMaxHeight:550,initialPageCount:20,EnableSerialNumber:!1,CellSize:"small",disablePagination:!1,title:void 0};const b=j},50764:(e,l,n)=>{n.d(l,{c:()=>O});var i=n(69060),s=n(39308),t=n(71448),a=n(52924),r=n(44380),o=n(12572),d=n(89e3),c=n(3358),u=n(5548),m=n(82656),v=n(26773),x=n(4488),p=n(90048),h=n(43692),g=n(85624),j=n(78092),b=n(68424),f=n(39504),N=n(37508),C=n(61988),y=n(12120),F=n(74912),w=n(97332),_=n(13724),S=n(82496);const k=(0,w.g0)({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),D=(0,S.jsx)(b.c,{fontSize:"small"}),A=(0,S.jsx)(f.c,{fontSize:"small"}),O=e=>{let{dataArray:l=[],columns:n=[],ExpandableComp:b,enableFilters:f=!1}=e;const[O,E]=(0,i.useState)([]),[P,z]=(0,i.useState)({}),[B,H]=(0,i.useState)(l),I=Object.keys(P).length>0?B:l,[L,V]=(0,i.useState)({filters:!1,columnSettings:!1});(0,i.useEffect)((()=>{const e=n.map(((e,l)=>({Field_Name:null===e||void 0===e?void 0:e.Column_Name,Fied_Data:null===e||void 0===e?void 0:e.Data_Type,isVisible:l<=7?1:0,align:"center",OrderBy:l+1})));E(e)}),[n]);const Q=(0,i.useMemo)((()=>[...O].sort(((e,l)=>e.OrderBy-l.OrderBy))),[O]);(0,i.useEffect)((()=>{R()}),[P]);const M=(e,l)=>{z((n=>({...n,[e]:l})))},R=()=>{let e=[...l];for(const l of O)if(P[l.Field_Name])if("range"===P[l.Field_Name].type){const{min:n,max:i}=P[l.Field_Name];e=e.filter((e=>{const s=e[l.Field_Name];return(void 0===n||s>=n)&&(void 0===i||s<=i)}))}else if("date"===P[l.Field_Name].type){const{start:n,end:i}=P[l.Field_Name].value;e=e.filter((e=>{const s=new Date(e[l.Field_Name]);return(void 0===n||s>=new Date(n))&&(void 0===i||s<=new Date(i))}))}else if(Array.isArray(P[l.Field_Name])){var n;e=(null===(n=P[l.Field_Name])||void 0===n?void 0:n.length)>0?e.filter((e=>P[l.Field_Name].includes(e[l.Field_Name].toLowerCase().trim()))):e}H(e)},W=e=>{const{Field_Name:l,Fied_Data:n}=e;var i,s,o,d,c,u,m,v,x,p;if("number"===n)return(0,S.jsxs)("div",{className:"d-flex justify-content-between px-2",children:[(0,S.jsx)("input",{placeholder:"Min",type:"number",className:"bg-light border-0 m-1 p-1 w-50",value:null!==(i=null===(s=P[l])||void 0===s?void 0:s.min)&&void 0!==i?i:"",onChange:e=>M(l,{type:"range",...P[l],min:e.target.value?parseFloat(e.target.value):void 0})}),(0,S.jsx)("input",{placeholder:"Max",type:"number",className:"bg-light border-0 m-1 p-1 w-50",value:null!==(o=null===(d=P[l])||void 0===d?void 0:d.max)&&void 0!==o?o:"",onChange:e=>M(l,{type:"range",...P[l],max:e.target.value?parseFloat(e.target.value):void 0})})]});if("date"===n)return(0,S.jsxs)("div",{className:"d-flex justify-content-between px-2",children:[(0,S.jsx)("input",{placeholder:"Start Date",type:"date",className:"bg-light border-0 m-1 p-1 w-50",value:null!==(c=null===(u=P[l])||void 0===u||null===(m=u.value)||void 0===m?void 0:m.start)&&void 0!==c?c:"",onChange:e=>{var n;return M(l,{type:"date",value:{...null===(n=P[l])||void 0===n?void 0:n.value,start:e.target.value||void 0}})}}),(0,S.jsx)("input",{placeholder:"End Date",type:"date",className:"bg-light border-0 m-1 p-1 w-50",value:null!==(v=null===(x=P[l])||void 0===x||null===(p=x.value)||void 0===p?void 0:p.end)&&void 0!==v?v:"",onChange:e=>{var n;return M(l,{type:"date",value:{...null===(n=P[l])||void 0===n?void 0:n.value,end:e.target.value||void 0}})}})]});if("string"===n){const e=[...new Set(I.map((e=>{var n,i;return null===(n=e[l])||void 0===n||null===(i=n.toLowerCase())||void 0===i?void 0:i.trim()})))];return(0,S.jsx)(t.c,{multiple:!0,id:"".concat(l,"-filter"),options:e,disableCloseOnSelect:!0,getOptionLabel:e=>e,value:P[l]||[],onChange:(e,n)=>M(l,n),renderOption:(e,l,n)=>{let{selected:i}=n;return(0,S.jsxs)("li",{...e,children:[(0,S.jsx)(a.c,{icon:D,checkedIcon:A,style:{marginRight:8},checked:i}),l]})},isOptionEqualToValue:(e,l)=>e===l,renderInput:e=>(0,S.jsx)(r.c,{...e,label:l,placeholder:"Select ".concat(null===l||void 0===l?void 0:l.replace(/_/g," "))})})}};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(o.c,{sx:{display:"flex",gap:"16px",padding:"8px",flexWrap:"wrap"},children:[(0,S.jsx)(d.c,{onClick:()=>{const e=(0,w.oF)(k)(l);(0,w.kj)(k)(e)},startIcon:(0,S.jsx)(N.c,{}),children:"All Data"}),(0,S.jsx)(d.c,{disabled:0===B.length,className:f?"":"d-none",onClick:()=>(e=>{const l=(0,w.oF)(k)(e);(0,w.kj)(k)(l)})(B),startIcon:(0,S.jsx)(N.c,{}),children:"Filtered Rows"}),(0,S.jsx)(d.c,{onClick:()=>V((e=>({...e,filters:!0}))),className:f?"d-md-none d-inline":"d-none",startIcon:(0,S.jsx)(C.c,{}),children:"Filters"})]}),(0,S.jsxs)("div",{className:"row ",children:[(0,S.jsx)("div",{className:f?"col-xxl-10 col-lg-9 col-md-8":"",children:(0,S.jsx)("div",{className:"p-2",children:(0,S.jsx)(_.c,{dataArray:I,columns:Q,isExpendable:!!b,expandableComp:b||void 0,tableMaxHeight:650})})}),f&&(0,S.jsxs)("div",{className:"col-xxl-2 col-lg-3 col-md-4 d-none d-md-block",children:[(0,S.jsxs)("h5",{className:"d-flex justify-content-between px-2",children:[(0,S.jsx)("span",{children:"Filters"}),(0,S.jsxs)("span",{children:[(0,S.jsx)(c.c,{title:"Column Visiblity",children:(0,S.jsx)(u.c,{size:"small",onClick:()=>V((e=>({...e,columnSettings:!0}))),children:(0,S.jsx)(y.c,{})})}),(0,S.jsx)(c.c,{title:"Clear Filters",children:(0,S.jsx)(u.c,{size:"small",onClick:()=>z({}),children:(0,S.jsx)(F.c,{})})})]})]}),(0,S.jsxs)("div",{className:"border rounded-3 ",style:{maxHeight:"70vh",overflow:"auto"},children:[O.map(((e,l)=>{var n;return(0,S.jsxs)("div",{className:"py-3 px-3 hov-bg border-bottom",children:[(0,S.jsx)("label",{className:"mt-2 mb-1",children:null===e||void 0===e||null===(n=e.Field_Name)||void 0===n?void 0:n.replace(/_/g," ")}),W(e)]},l)})),(0,S.jsx)("br",{})]})]})]}),(0,S.jsxs)(m.c,{open:L.filters,onClose:()=>V((e=>({...e,filters:!1}))),fullWidth:!0,maxWidth:"sm",children:[(0,S.jsx)(v.c,{children:(0,S.jsx)("span",{children:(0,S.jsxs)("h5",{className:"d-flex justify-content-between px-2",children:[(0,S.jsx)("span",{children:"Filters"}),(0,S.jsxs)("span",{children:[(0,S.jsx)(c.c,{title:"Column Visiblity",children:(0,S.jsx)(u.c,{size:"small",onClick:()=>V((e=>({...e,filters:!1}))),children:(0,S.jsx)(y.c,{})})}),(0,S.jsx)(c.c,{title:"Clear Filters",children:(0,S.jsx)(u.c,{size:"small",onClick:()=>z({}),children:(0,S.jsx)(F.c,{})})})]})]})})}),(0,S.jsx)(x.c,{children:(0,S.jsxs)("div",{className:"border rounded-3 ",style:{maxHeight:"70vh",overflow:"auto"},children:[O.map(((e,l)=>{var n;return(0,S.jsxs)("div",{className:"py-3 px-3 hov-bg border-bottom",children:[(0,S.jsx)("label",{className:"mt-2 mb-1",children:null===e||void 0===e||null===(n=e.Field_Name)||void 0===n?void 0:n.replace(/_/g," ")}),W(e)]},l)})),(0,S.jsx)("br",{})]})}),(0,S.jsx)(p.c,{children:(0,S.jsx)(d.c,{onClick:()=>V((e=>({...e,filters:!1}))),children:"Close"})})]}),(0,S.jsxs)(m.c,{open:L.columnSettings,onClose:()=>V((e=>({...e,columnSettings:!1}))),maxWidth:"lg",fullWidth:!0,children:[(0,S.jsx)(v.c,{children:"Column Settings"}),(0,S.jsx)(x.c,{children:(0,S.jsx)("div",{className:"row",children:n.map(((e,l)=>{const n=O.find((l=>l.Field_Name===(null===e||void 0===e?void 0:e.Column_Name)));return(0,S.jsx)("div",{className:"col-lg-4 col-md-6 p-2",children:(0,S.jsxs)(h.c,{component:g.c,className:"p-2 d-flex justify-content-between align-items-center flex-wrap ".concat(l%2!==0?"bg-light":""),children:[(0,S.jsxs)("div",{className:"d-flex justify-content-between align-items-center flex-wrap",children:[(0,S.jsx)(j.c,{checked:Boolean(null===n||void 0===n?void 0:n.isVisible),onChange:l=>E((n=>n.map((n=>n.Field_Name===(null===e||void 0===e?void 0:e.Column_Name)?{...n,isVisible:l.target.checked?1:0}:n))))}),(0,S.jsx)("h6",{className:"fa-13 mb-0 fw-bold ",children:null===e||void 0===e?void 0:e.Column_Name})]}),(0,S.jsx)("input",{type:"number",value:(0,s.Q$)(null===n||void 0===n?void 0:n.OrderBy)?null===n||void 0===n?void 0:n.OrderBy:"",onChange:e=>E((l=>l.map((l=>l.Field_Name===(null===n||void 0===n?void 0:n.Field_Name)?{...l,OrderBy:e.target.value}:l)))),label:"Order Value",className:"mt-2 p-1 border-0 cus-inpt",style:{width:"80px"},placeholder:"Order"})]})},l)}))})}),(0,S.jsx)(p.c,{children:(0,S.jsx)(d.c,{onClick:()=>V((e=>({...e,columnSettings:!1}))),color:"error",children:"close"})})]})]})}}}]);
//# sourceMappingURL=764.c255d859.chunk.js.map