"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[5232],{13724:(e,l,n)=>{n.d(l,{c:()=>j});var o=n(69060),a=n(27454),i=n(700),t=n(5548),r=n(99904),s=n(85624),d=n(33856),c=n(58612),u=n(53248),v=n(29504),m=n(5930),p=n(39308),x=n(41459),h=n(46864),b=n(82496);const g=e=>{let{dataArray:l=[],columns:n=[],onClickFun:g=null,isExpendable:j=!1,expandableComp:C=null,tableMaxHeight:f=550,initialPageCount:_=20,EnableSerialNumber:N=!1,CellSize:y="small",disablePagination:S=!1,title:w=""}=e;const[D,T]=(0,o.useState)(0),[F,I]=(0,o.useState)(_),[A,k]=(0,o.useState)([]),R=[{type:"left",class:""},{type:"right",class:"text-end"},{type:"center",class:"text-center"}],E=(e=>{if(!A.length)return e;return[...e].sort(((e,l)=>{for(const n of A){const{columnId:o,direction:a}=n,i=e[o],t=l[o];if(i!==t)return"asc"===a?i>t?1:-1:i<t?1:-1}return 0}))})(l),B=D*F,O=B+F,L=E.slice(B,O),P=(e,l)=>{switch(l){case"number":return(0,p.SA)(e);case"date":return(0,p.uy)(e);case"time":return(0,p.AX)(e);case"string":return e;default:return""}},H=e=>{let{row:l,index:r}=e;const[s,d]=(0,o.useState)(!1),c="20px";return(0,b.jsxs)(o.Fragment,{children:[(0,b.jsxs)(a.c,{children:[!0===j&&C&&(0,b.jsx)(i.c,{className:"fa-13 border-end text-center",children:(0,b.jsx)(t.c,{size:"small",onClick:()=>d((e=>!e)),children:s?(0,b.jsx)(x.c,{sx:{fontSize:c}}):(0,b.jsx)(h.c,{sx:{fontSize:c}})})}),!0===N&&(0,b.jsx)(i.c,{className:"fa-13 border-end text-center",children:F*D+r+1}),null===n||void 0===n?void 0:n.map(((e,n)=>{var o;return((0,p.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,p.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,b.jsx)(i.c,{className:"fa-13 border-end "+(e.align?null===(o=R.find((l=>l.type===String(e.align).toLowerCase())))||void 0===o?void 0:o.class:""),children:e.Cell({row:l,Field_Name:e.Field_Name})},n):Object.entries(l).map((o=>{var a;let[t,r]=o;return e.Field_Name===t&&((0,p.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,p.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(0,b.jsx)(i.c,{className:"fa-13 border-end "+(e.align?null===(a=R.find((l=>l.type===String(e.align).toLowerCase())))||void 0===a?void 0:a.class:""),onClick:()=>g?g(l):console.log("Function not supplied"),children:P(r,null===e||void 0===e?void 0:e.Fied_Data)},n)})))}))]}),!0===j&&C&&s&&(0,b.jsx)(a.c,{children:(0,b.jsx)(i.c,{colSpan:Number(null===n||void 0===n?void 0:n.length)+(!0===N?2:1),children:C({row:l,index:r})})})]})};return(0,b.jsxs)("div",{children:[w&&(0,b.jsx)("h6",{className:"fw-bold text-muted",children:w}),(0,b.jsx)(r.c,{component:s.c,sx:{maxHeight:f},children:(0,b.jsxs)(d.c,{stickyHeader:!0,size:y,children:[(0,b.jsx)(c.c,{children:(0,b.jsxs)(a.c,{children:[!0===j&&C&&(0,b.jsx)(i.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"#"}),!0===N&&(0,b.jsx)(i.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"SNo"}),n.map(((e,l)=>{var n,o,a,t;return((0,p.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,p.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,b.jsx)(i.c,{className:"".concat(e.ColumnHeader?"fa-13 fw-bold border-end border-top":" p-0 ")+(e.align?null===(a=R.find((l=>l.type===String(e.align).toLowerCase())))||void 0===a?void 0:a.class:""),style:{backgroundColor:"#EDF0F7"},children:e.ColumnHeader?e.ColumnHeader:null===e||void 0===e||null===(t=e.Field_Name)||void 0===t?void 0:t.replace(/_/g," ")},l):(0,b.jsx)(i.c,{className:"fa-13 fw-bold border-end border-top "+(e.align?null===(n=R.find((l=>l.type===String(e.align).toLowerCase())))||void 0===n?void 0:n.class:""),style:{backgroundColor:"#EDF0F7"},sortDirection:!!A.some((l=>l.columnId===e.Field_Name))&&A.find((l=>l.columnId===e.Field_Name)).direction,children:(0,b.jsx)(u.c,{active:A.some((l=>l.columnId===e.Field_Name)),direction:A.some((l=>l.columnId===e.Field_Name))?A.find((l=>l.columnId===e.Field_Name)).direction:"asc",onClick:()=>(e=>{const l=A.find((l=>l.columnId===e));if(l){const n="asc"===l.direction;k(A.map((l=>l.columnId===e?{...l,direction:n?"desc":"asc"}:l)))}else k([...A,{columnId:e,direction:"asc"}])})(e.Field_Name),children:e.ColumnHeader?e.ColumnHeader:null===e||void 0===e||null===(o=e.Field_Name)||void 0===o?void 0:o.replace(/_/g," ")})},l))}))]})}),(0,b.jsxs)(v.c,{children:[(S?l:L).map(((e,l)=>(0,b.jsx)(H,{row:e,index:l},l))),0===l.length&&(0,b.jsx)(a.c,{children:(0,b.jsx)(i.c,{colSpan:n.length+(!0===j&&C?1:0)+(!0===N?1:0),sx:{textAlign:"center"},children:"No Data"})})]})]})}),!S&&0!==L.length&&(0,b.jsx)("div",{className:"p-2 pb-0",children:(0,b.jsx)(m.c,{component:"div",count:l.length,page:D,onPageChange:(e,l)=>{T(l)},rowsPerPage:F,onRowsPerPageChange:e=>{I(parseInt(e.target.value,10)),T(0)},rowsPerPageOptions:Array.from(new Set([_,5,20,50,100,200,500])).sort(((e,l)=>e-l)),labelRowsPerPage:"Rows per page",showFirstButton:!0,showLastButton:!0})})]})};g.defaultProps={dataArray:[],columns:[],onClickFun:null,isExpendable:!1,expandableComp:null,tableMaxHeight:550,initialPageCount:20,EnableSerialNumber:!1,CellSize:"small",disablePagination:!1,title:void 0};const j=g},65232:(e,l,n)=>{n.r(l),n.d(l,{default:()=>ee});var o=n(69060),a=n(12572),i=n(56880),t=n(5548),r=n(66931),s=n(89500),d=n(93996),c=n(14696),u=n(13224),v=n(43692),m=n(89e3),p=n(84436),x=n(82656),h=n(26773),b=n(4488),g=n(90048),j=n(77828),C=n(15786),f=n(30796),_=n(71412),N=n(61988),y=n(86e3),S=n(45180),w=n(14499),D=n(58985),T=n(28655),F=n(39308),I=n(77536),A=n(51560),k=n(41978),R=n(71448),E=n(52924),B=n(44380),O=n(3358),L=n(68424),P=n(39504),H=n(37508),z=n(58744),V=n(74912),Q=n(97332),q=n(1908),K=n(82496);const J=(e,l)=>{switch(l){case"number":return(0,F.SA)(e);case"date":return(0,F.uy)(e);case"string":return e;default:return""}},M=e=>{switch(e){case"number":return{filterVariant:"range",filterFn:"between"};case"date":case"string":return{filterVariant:"text"};default:return{}}},W=(0,Q.g0)({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),G=(0,K.jsx)(L.c,{fontSize:"small"}),X=(0,K.jsx)(P.c,{fontSize:"small"}),Y=e=>{let{reportId:l,company:n,queryFilters:i,buttons:r,groupingState:s}=e;const[d,c]=(0,o.useState)([]),[u,v]=(0,o.useState)([]),[p,j]=(0,o.useState)([]),[C,f]=(0,o.useState)({}),[_,y]=(0,o.useState)(u),S=Object.keys(C).length>0?_:u,[w,D]=(0,o.useState)({}),[T,I]=(0,o.useState)({filters:!1,aggregations:!1});console.log(s),(0,o.useEffect)((()=>{(0,q.q)({address:"reports/template?ReportId=".concat(l)}).then((e=>{if(null!==e&&void 0!==e&&e.success&&e.data[0]){var l,n;const o=e.data[0],a={Report_Type_Id:null===o||void 0===o?void 0:o.Report_Type_Id,reportName:null===o||void 0===o?void 0:o.Report_Name,tables:null===o||void 0===o||null===(l=o.tablesList)||void 0===l?void 0:l.map((e=>{var l;return{Table_Id:null===e||void 0===e?void 0:e.Table_Id,Table_Name:null===e||void 0===e?void 0:e.Table_Name,AliasName:null===e||void 0===e?void 0:e.AliasName,Table_Accronym:null===e||void 0===e?void 0:e.Table_Accronym,isChecked:!0,columns:null===e||void 0===e||null===(l=e.columnsList)||void 0===l?void 0:l.map((l=>({Column_Data_Type:null===l||void 0===l?void 0:l.Column_Data_Type,Column_Name:null===l||void 0===l?void 0:l.Column_Name,IS_Default:null===l||void 0===l?void 0:l.IS_Default,IS_Join_Key:null===l||void 0===l?void 0:l.IS_Join_Key,Order_By:null===l||void 0===l?void 0:l.Order_By,Table_Id:null===l||void 0===l?void 0:l.Table_Id,isVisible:!0,accessColumnName:"".concat(null===e||void 0===e?void 0:e.Table_Accronym,"_").concat(null===l||void 0===l?void 0:l.Column_Name)})))}}))},i=null===(n=a.tables)||void 0===n?void 0:n.reduce(((e,l)=>e.concat(l.columns)),[]);j(i)}})).catch((e=>console.log(e)))}),[l]),(0,o.useEffect)((()=>{l&&(0,q.q)({address:"reports/template/executeQuery",method:"POST",headers:{Db:n},bodyData:{filterReq:i,ReportID:l}}).then((e=>{null!==e&&void 0!==e&&e.success&&v(null===e||void 0===e?void 0:e.data)})).catch((e=>console.log(e)))}),[n,l]),(0,o.useEffect)((()=>{const e=[...p].sort(((e,l)=>e.Order_By&&l.Order_By?e.Order_By-l.Order_By:l.Order_By-e.Order_By)).filter((e=>!Boolean(Number(null===e||void 0===e?void 0:e.IS_Default))&&!Boolean(Number(null===e||void 0===e?void 0:e.IS_Join_Key)))).map((e=>{var l;return{header:null===e||void 0===e||null===(l=e.Column_Name)||void 0===l?void 0:l.replace(/_/g," "),accessorKey:null===e||void 0===e?void 0:e.accessColumnName,sortable:!0,size:150,aggregationFn:w[null===e||void 0===e?void 0:e.Column_Name]?w[null===e||void 0===e?void 0:e.Column_Name]:"",AggregatedCell:e=>{let{cell:l}=e;return(0,K.jsx)("div",{className:"blue-text text-center float-end w-100",children:l.getValue()?(0,F.SA)(l.getValue()):""})},Cell:l=>{let{cell:n}=l;return(0,K.jsx)("p",{className:"m-0 text-center fa-14 w-100",children:J(n.getValue(),null===e||void 0===e?void 0:e.Column_Data_Type)})},...M(null===e||void 0===e?void 0:e.Column_Data_Type)}}));c(e)}),[p,w]),(0,o.useEffect)((()=>{$()}),[C]);const A=()=>{const e=(0,Q.oF)(W)(u);(0,Q.kj)(W)(e)},L=(0,k.g$)({columns:d,data:S||[],enableColumnResizing:!0,enableGrouping:!0,enableStickyHeader:!0,enableStickyFooter:!0,enableColumnOrdering:!0,enableRowNumbers:!1,initialState:{density:"compact",pagination:{pageIndex:0,pageSize:100}},muiToolbarAlertBannerChipProps:{color:"primary"},muiTableContainerProps:{sx:{maxHeight:"68dvh",minHeight:"46vh"}},muiTableProps:{sx:{caption:{captionSide:"top"}}},muiTableHeadCellProps:{sx:{fontWeight:"normal"},className:" border text-center"},muiTableBodyCellProps:{className:" border-end text-center"},renderTopToolbarCustomActions:e=>{let{table:l}=e;return(0,K.jsxs)(a.c,{sx:{display:"flex",gap:"16px",padding:"8px",flexWrap:"wrap"},children:[(0,K.jsx)(m.c,{onClick:A,startIcon:(0,K.jsx)(H.c,{}),children:"All Data"}),(0,K.jsx)(m.c,{disabled:0===l.getPrePaginationRowModel().rows.length,onClick:()=>(e=>{const l=e.map((e=>e.original)),n=(0,Q.oF)(W)(l);(0,Q.kj)(W)(n)})(l.getPrePaginationRowModel().rows),startIcon:(0,K.jsx)(H.c,{}),children:"Filtered Rows"}),(0,K.jsx)(m.c,{onClick:()=>I((e=>({...e,aggregations:!0}))),startIcon:(0,K.jsx)(z.c,{}),children:"Aggregation"}),(0,K.jsx)(m.c,{onClick:()=>I((e=>({...e,filters:!0}))),className:"d-md-none d-inline",startIcon:(0,K.jsx)(N.c,{}),children:"Filters"})]})}}),P=(0,o.useMemo)((()=>L),[L,w,S,s]),Y=(e,l)=>{f((n=>({...n,[e]:l})))},$=()=>{let e=[...u];for(const n of p)if(C[n.accessColumnName])if("range"===C[n.accessColumnName].type){const{min:l,max:o}=C[n.accessColumnName];e=e.filter((e=>{const a=e[n.accessColumnName];return(void 0===l||a>=l)&&(void 0===o||a<=o)}))}else if("date"===C[n.accessColumnName].type){const{start:l,end:o}=C[n.accessColumnName].value;e=e.filter((e=>{const a=new Date(e[n.accessColumnName]);return(void 0===l||a>=new Date(l))&&(void 0===o||a<=new Date(o))}))}else if(Array.isArray(C[n.accessColumnName])){var l;e=(null===(l=C[n.accessColumnName])||void 0===l?void 0:l.length)>0?e.filter((e=>C[n.accessColumnName].includes(e[n.accessColumnName].toLowerCase().trim()))):e}y(e)},U=e=>{const{accessColumnName:l,Column_Name:n,Column_Data_Type:o}=e;var a,i,t,r,s,d,c,v,m,p;if("number"===o)return(0,K.jsxs)("div",{className:"d-flex justify-content-between px-2",children:[(0,K.jsx)("input",{placeholder:"Min",type:"number",className:"bg-light border-0 m-1 p-1 w-50",value:null!==(a=null===(i=C[l])||void 0===i?void 0:i.min)&&void 0!==a?a:"",onChange:e=>Y(l,{type:"range",...C[l],min:e.target.value?parseFloat(e.target.value):void 0})}),(0,K.jsx)("input",{placeholder:"Max",type:"number",className:"bg-light border-0 m-1 p-1 w-50",value:null!==(t=null===(r=C[l])||void 0===r?void 0:r.max)&&void 0!==t?t:"",onChange:e=>Y(l,{type:"range",...C[l],max:e.target.value?parseFloat(e.target.value):void 0})})]});if("date"===o)return(0,K.jsxs)("div",{className:"d-flex justify-content-between px-2",children:[(0,K.jsx)("input",{placeholder:"Start Date",type:"date",className:"bg-light border-0 m-1 p-1 w-50",value:null!==(s=null===(d=C[l])||void 0===d||null===(c=d.value)||void 0===c?void 0:c.start)&&void 0!==s?s:"",onChange:e=>{var n;return Y(l,{type:"date",value:{...null===(n=C[l])||void 0===n?void 0:n.value,start:e.target.value||void 0}})}}),(0,K.jsx)("input",{placeholder:"End Date",type:"date",className:"bg-light border-0 m-1 p-1 w-50",value:null!==(v=null===(m=C[l])||void 0===m||null===(p=m.value)||void 0===p?void 0:p.end)&&void 0!==v?v:"",onChange:e=>{var n;return Y(l,{type:"date",value:{...null===(n=C[l])||void 0===n?void 0:n.value,end:e.target.value||void 0}})}})]});if("string"===o){const e=[...new Set(u.map((e=>{var n,o;return null===(n=e[l])||void 0===n||null===(o=n.toLowerCase())||void 0===o?void 0:o.trim()})))].sort();return(0,K.jsx)(R.c,{multiple:!0,id:"".concat(l,"-filter"),options:e,disableCloseOnSelect:!0,getOptionLabel:e=>e,value:C[l]||[],onChange:(e,n)=>Y(l,n),renderOption:(e,l,n)=>{let{selected:o}=n;return(0,K.jsxs)("li",{...e,children:[(0,K.jsx)(E.c,{icon:G,checkedIcon:X,style:{marginRight:8},checked:o}),l]})},isOptionEqualToValue:(e,l)=>e===l,renderInput:e=>(0,K.jsx)(B.c,{...e,label:null===n||void 0===n?void 0:n.replace(/_/g," "),placeholder:"Select ".concat(null===n||void 0===n?void 0:n.replace(/_/g," "))})})}};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)("div",{className:"row ",children:[(0,K.jsx)("div",{className:"col-xxl-10 col-lg-9 col-md-8",children:(0,K.jsx)("div",{className:"p-2",children:(0,K.jsx)(k._Y,{table:P})})}),(0,K.jsxs)("div",{className:"col-xxl-2 col-lg-3 col-md-4 d-none d-md-block",children:[(0,K.jsxs)("h5",{className:"d-flex justify-content-between px-2",children:["Filters",(0,K.jsx)(O.c,{title:"Clear Filters",children:(0,K.jsx)(t.c,{size:"small",onClick:()=>f({}),children:(0,K.jsx)(V.c,{})})})]}),(0,K.jsxs)("div",{className:"border rounded-3 ",style:{maxHeight:"70vh",overflow:"auto"},children:[p.map(((e,l)=>{var n;return(0,F.Qr)(null===e||void 0===e?void 0:e.IS_Default,0)&&(0,F.Qr)(null===e||void 0===e?void 0:e.IS_Join_Key,0)&&(0,K.jsxs)("div",{className:"py-3 px-3 hov-bg border-bottom",children:[(0,K.jsx)("label",{className:"mt-2 mb-1",children:null===e||void 0===e||null===(n=e.Column_Name)||void 0===n?void 0:n.replace(/_/g," ")}),U(e)]},l)})),(0,K.jsx)("br",{})]})]})]}),(0,K.jsxs)(x.c,{open:T.filters,onClose:()=>I((e=>({...e,filters:!1}))),fullWidth:!0,maxWidth:"sm",children:[(0,K.jsx)(h.c,{children:(0,K.jsxs)("h5",{className:"d-flex justify-content-between px-2",children:["Filters",(0,K.jsx)(O.c,{title:"Clear Filters",children:(0,K.jsx)(t.c,{size:"small",onClick:()=>f({}),children:(0,K.jsx)(V.c,{})})})]})}),(0,K.jsx)(b.c,{children:(0,K.jsxs)("div",{className:"border rounded-3 ",style:{maxHeight:"70vh",overflow:"auto"},children:[p.map(((e,l)=>{var n;return(0,F.Qr)(null===e||void 0===e?void 0:e.IS_Default,0)&&(0,F.Qr)(null===e||void 0===e?void 0:e.IS_Join_Key,0)&&(0,K.jsxs)("div",{className:"py-3 px-3 hov-bg border-bottom",children:[(0,K.jsx)("label",{className:"mt-2 mb-1",children:null===e||void 0===e||null===(n=e.Column_Name)||void 0===n?void 0:n.replace(/_/g," ")}),U(e)]},l)})),(0,K.jsx)("br",{})]})}),(0,K.jsx)(g.c,{children:(0,K.jsx)(m.c,{onClick:()=>I((e=>({...e,filters:!1}))),children:"Close"})})]}),(0,K.jsxs)(x.c,{open:T.aggregations,onClose:()=>I((e=>({...e,aggregations:!1}))),fullWidth:!0,maxWidth:"lg",children:[(0,K.jsx)(h.c,{children:"Aggregations"}),(0,K.jsx)(b.c,{children:(0,K.jsx)("div",{className:"row",style:{minHeight:"30dvh"},children:[...p].filter((e=>(0,F.Qr)(null===e||void 0===e?void 0:e.IS_Default,0)&&(0,F.Qr)(null===e||void 0===e?void 0:e.IS_Join_Key,0)&&("number"===e.Column_Data_Type||"string"===e.Column_Data_Type))).map(((e,l)=>{var n,o;return(0,K.jsxs)("div",{className:"col-xxl-3 col-lg-4 col-md-6 p-2",children:[(0,K.jsx)("label",{children:null===e||void 0===e||null===(n=e.Column_Name)||void 0===n?void 0:n.replace(/_/g," ")}),(0,K.jsx)("select",{className:"cus-inpt",value:null!==(o=w[null===e||void 0===e?void 0:e.Column_Name])&&void 0!==o?o:"",onChange:l=>D((n=>({...n,[e.Column_Name]:l.target.value}))),children:[{label:"Select Aggregation",value:""},{label:"count",value:"count"},{label:"extent",value:"extent"},{label:"max",value:"max"},{label:"min",value:"min"},{label:"mean",value:"mean"},{label:"median",value:"median"},{label:"uniqueCount",value:"uniqueCount"},{label:"sum",value:"sum"},{label:"unique",value:"unique"}].map(((e,l)=>(0,K.jsx)("option",{value:e.value,children:e.label},l)))})]},l)}))})}),(0,K.jsx)(g.c,{children:(0,K.jsx)(m.c,{onClick:()=>I((e=>({...e,aggregations:!1}))),children:"Close"})})]})]})};var $=n(56480),U=n(13724);const Z=e=>{const{children:l,value:n,index:o,...t}=e;return(0,K.jsx)("div",{role:"tabpanel",hidden:n!==o,id:"tabpanel-".concat(o),"aria-labelledby":"tab-".concat(o),...t,children:n===o&&(0,K.jsx)(a.c,{p:3,children:(0,K.jsx)(i.c,{children:l})})})},ee=()=>{var e,l,n,a,i,k,R,E,B,O;const L=JSON.parse(localStorage.getItem("user")),[P,H]=(0,o.useState)([]),[z,V]=(0,o.useState)({search:"",openFilterDialog:!1,filterTablesAndColumns:{},deleteConfirmationDialog:!1,preFilterDialog:!1}),{contextObj:Q}=(0,o.useContext)(I.a),[J,M]=(0,o.useState)({}),W=(0,A.i6)(),[G,X]=(0,o.useState)(!1),[ee,le]=(0,o.useState)(0);(0,o.useEffect)((()=>{(0,q.q)({address:"reports/template"}).then((e=>{null!==e&&void 0!==e&&e.success&&H(null===e||void 0===e?void 0:e.data)})).catch((e=>console.log(e)))}),[G]);const ne=(e,l)=>{M((n=>({...n,[e]:l})))},oe=e=>{const{Column_Name:l,Column_Data_Type:n}=e;var o,a,i,t,r,s,d,c,u,v,m,p;return"number"===n?(0,K.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,K.jsx)("input",{placeholder:"Min",type:"number",className:"cus-inpt me-1",value:null!==(o=null===(a=J[l])||void 0===a?void 0:a.min)&&void 0!==o?o:"",onChange:e=>ne(l,{type:"range",...J[l],min:e.target.value?parseFloat(e.target.value):void 0})}),(0,K.jsx)("input",{placeholder:"Max",type:"number",className:"cus-inpt ms-1",value:null!==(i=null===(t=J[l])||void 0===t?void 0:t.max)&&void 0!==i?i:"",onChange:e=>ne(l,{type:"range",...J[l],max:e.target.value?parseFloat(e.target.value):void 0})})]}):"date"===n?(0,K.jsxs)("div",{className:"d-flex justify-content-between flex-wrap",children:[(0,K.jsx)("input",{placeholder:"Start Date",type:"date",className:"cus-inpt w-auto flex-grow-1 me-1 my-1",value:null!==(r=null===(s=J[l])||void 0===s||null===(d=s.value)||void 0===d?void 0:d.start)&&void 0!==r?r:"",onChange:e=>{var n;return ne(l,{type:"date",value:{...null===(n=J[l])||void 0===n?void 0:n.value,start:e.target.value||void 0}})}}),(0,K.jsx)("input",{placeholder:"End Date",type:"date",className:"cus-inpt w-auto flex-grow-1 ms-1 my-1",value:null!==(c=null===(u=J[l])||void 0===u||null===(v=u.value)||void 0===v?void 0:v.end)&&void 0!==c?c:"",onChange:e=>{var n;return ne(l,{type:"date",value:{...null===(n=J[l])||void 0===n?void 0:n.value,end:e.target.value||void 0}})}})]}):"string"===n?(0,K.jsx)("input",{type:"text",placeholder:"Search...",className:"cus-inpt",value:null!==(m=null===(p=J[l])||void 0===p?void 0:p.value)&&void 0!==m?m:"",onChange:e=>ne(l,{type:"textCompare",value:String(e.target.value).toLowerCase()||""})}):void 0},ae=e=>{var l;let{o:n}=e;const[a,i]=(0,o.useState)(null),v={Report_Type_Id:null===n||void 0===n?void 0:n.Report_Type_Id,reportName:null===n||void 0===n?void 0:n.Report_Name,ReportState:null===n||void 0===n?void 0:n.ReportState,tables:null===n||void 0===n||null===(l=n.tablesList)||void 0===l?void 0:l.map((e=>{var l;return{Table_Id:null===e||void 0===e?void 0:e.Table_Id,Table_Name:null===e||void 0===e?void 0:e.Table_Name,AliasName:null===e||void 0===e?void 0:e.AliasName,Table_Accronym:null===e||void 0===e?void 0:e.Table_Accronym,isChecked:!0,columns:null===e||void 0===e||null===(l=e.columnsList)||void 0===l?void 0:l.map((e=>({Column_Data_Type:null===e||void 0===e?void 0:e.Column_Data_Type,Column_Name:null===e||void 0===e?void 0:e.Column_Name,IS_Default:null===e||void 0===e?void 0:e.IS_Default,IS_Join_Key:null===e||void 0===e?void 0:e.IS_Join_Key,Order_By:null===e||void 0===e?void 0:e.Order_By,Table_Id:null===e||void 0===e?void 0:e.Table_Id,isVisible:!0})))}}))},m=Boolean(a),p=m?null===n||void 0===n?void 0:n.Report_Name:void 0;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(t.c,{"aria-describedby":p,onClick:e=>{i(e.currentTarget)},children:(0,K.jsx)(f.c,{})}),(0,K.jsx)(r.cp,{id:p,open:m,anchorEl:a,onClose:()=>{i(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:(0,K.jsxs)(s.c,{children:[(0,K.jsxs)(d.c,{onClick:()=>{V((e=>({...e,filterTablesAndColumns:v,openFilterDialog:!0}))),le(0),M({})},children:[(0,K.jsx)(c.c,{children:(0,K.jsx)(_.c,{fontSize:"small"})}),(0,K.jsx)(u.c,{children:"OPEN"})]}),(0,K.jsxs)(d.c,{onClick:null!==L&&void 0!==L&&L.Company_id?()=>{V((e=>({...e,filterTablesAndColumns:v,preFilterDialog:!0}))),M({}),le(0)}:()=>$.m4.warn("Select Company!"),children:[(0,K.jsx)(c.c,{children:(0,K.jsx)(N.c,{fontSize:"small"})}),(0,K.jsx)(u.c,{children:"FILTERS"})]}),(0,K.jsxs)(d.c,{onClick:()=>W("create",{state:{ReportState:v}}),children:[(0,K.jsx)(c.c,{children:(0,K.jsx)(y.c,{fontSize:"small"})}),(0,K.jsx)(u.c,{children:"EDIT"})]}),(0,K.jsxs)(d.c,{onClick:()=>V((e=>({...e,deleteConfirmationDialog:!0,filterTablesAndColumns:v}))),children:[(0,K.jsx)(c.c,{children:(0,K.jsx)(S.c,{fontSize:"small",color:"error"})}),(0,K.jsx)(u.c,{children:"DELETE"})]})]})})]})},ie=e=>{var l;let{o:n}=e;return(0,K.jsx)(K.Fragment,{children:(0,K.jsx)("div",{className:"table-responsive",children:(0,K.jsxs)("table",{className:"table",children:[(0,K.jsx)("thead",{children:(0,K.jsx)("tr",{children:["SNo","Table","Column","Data-Type","Order"].map((e=>(0,K.jsx)("th",{className:"border fa-14 text-center",style:{backgroundColor:"#EDF0F7"},children:e},e)))})}),(0,K.jsx)("tbody",{children:null===n||void 0===n||null===(l=n.tablesList)||void 0===l?void 0:l.map(((e,l)=>{var n;return(0,K.jsx)(o.Fragment,{children:null===e||void 0===e||null===(n=e.columnsList)||void 0===n?void 0:n.map(((n,o)=>{var a,i;return(0,K.jsxs)("tr",{children:[0===o&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("td",{className:"border fa-13 text-center vctr",rowSpan:null===e||void 0===e||null===(a=e.columnsList)||void 0===a?void 0:a.length,children:l+1}),(0,K.jsx)("td",{className:"border fa-13 text-center blue-text vctr",rowSpan:null===e||void 0===e||null===(i=e.columnsList)||void 0===i?void 0:i.length,children:null===e||void 0===e?void 0:e.AliasName})]}),(0,K.jsx)("td",{className:"\n                                                                border fa-13 vctr\n                                                                ".concat(Boolean(Number(null===n||void 0===n?void 0:n.IS_Default))?" blue-text ":"","\n                                                                ").concat(Boolean(Number(null===n||void 0===n?void 0:n.IS_Join_Key))?" fw-bold ":"","\n                                                                "),children:null===n||void 0===n?void 0:n.Column_Name}),(0,K.jsx)("td",{className:"border fa-13 vctr",children:null===n||void 0===n?void 0:n.Column_Data_Type}),(0,K.jsx)("td",{className:"border fa-13 vctr",children:null===n||void 0===n?void 0:n.Order_By})]},o)}))},l)}))})]})})})},te=()=>{V((e=>({...e,openFilterDialog:!1,filterTablesAndColumns:{}})))},re=()=>{V((e=>({...e,deleteConfirmationDialog:!1,filterTablesAndColumns:{}})))},se=()=>{V((e=>({...e,preFilterDialog:!1}))),M({})};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(v.c,{children:[(0,K.jsxs)("div",{className:"p-2 border-bottom fa-16 fw-bold d-flex justify-content-between align-items-center",children:[(0,K.jsx)("span",{className:"text-primary text-uppercase ps-3",children:"Report Templates"}),(0,F.Qr)(null===Q||void 0===Q?void 0:Q.Add_Rights,1)&&(0,K.jsx)(m.c,{variant:"outlined",onClick:()=>W("create"),children:"Add Report"})]}),(0,K.jsx)("div",{className:"d-flex justify-content-end p-3",children:(0,K.jsx)("input",{type:"search",className:"cus-inpt w-auto",placeholder:"Search Report Name",value:null!==(e=null===z||void 0===z?void 0:z.search)&&void 0!==e?e:"",onChange:e=>V((l=>({...l,search:String(e.target.value).toLowerCase()})))})}),(0,K.jsx)(p.c,{className:"p-0",children:(0,K.jsx)(U.c,{dataArray:null!==z&&void 0!==z&&z.search?[...P].filter((e=>String(null===e||void 0===e?void 0:e.Report_Name).toLowerCase().includes(z.search))):P,columns:[{Field_Name:"Report_Name",ColumnHeader:"Report Name",Fied_Data:"string",isVisible:1},{ColumnHeader:"Tables",isVisible:1,isCustomCell:!0,Cell:e=>{var l;let{row:n}=e;return null===n||void 0===n||null===(l=n.tablesList)||void 0===l?void 0:l.length}},{ColumnHeader:"Columns",isVisible:1,isCustomCell:!0,Cell:e=>{var l;let{row:n}=e;return null===n||void 0===n||null===(l=n.tablesList)||void 0===l?void 0:l.reduce(((e,l)=>{var n;return e+Number(null===l||void 0===l||null===(n=l.columnsList)||void 0===n?void 0:n.length)}),0)}},{Field_Name:"CreatedByGet",ColumnHeader:"Created By",Fied_Data:"string",isVisible:1},{ColumnHeader:"Columns",isVisible:1,isCustomCell:!0,Cell:e=>{let{row:l}=e;return null!==l&&void 0!==l&&l.CreatedAt?(0,F.gt)(null===l||void 0===l?void 0:l.CreatedAt):" - "}},{ColumnHeader:"Action",isVisible:1,isCustomCell:!0,Cell:e=>{let{row:l}=e;return(0,K.jsx)(ae,{o:l})}}],EnableSerialNumber:!0,isExpendable:!0,expandableComp:e=>{let{row:l}=e;return(0,K.jsx)(ie,{o:l})},tableMaxHeight:650})})]}),(0,K.jsxs)(x.c,{open:null===z||void 0===z?void 0:z.openFilterDialog,onClose:te,fullScreen:!0,children:[(0,K.jsxs)(h.c,{className:"d-flex justify-content-between align-items-center fa-16",children:[(0,K.jsxs)("span",{children:["Report - ",(0,K.jsx)("span",{className:"blue-text",children:null===z||void 0===z||null===(l=z.filterTablesAndColumns)||void 0===l?void 0:l.reportName})]}),(0,K.jsx)("span",{children:(0,K.jsx)(t.c,{onClick:te,color:"error",className:" shadow-lg",children:(0,K.jsx)(w.c,{})})})]}),(0,K.jsx)(b.c,{children:(null===z||void 0===z||null===(n=z.filterTablesAndColumns)||void 0===n?void 0:n.Report_Type_Id)&&(null===L||void 0===L?void 0:L.Company_id)&&(0,K.jsx)(Y,{reportId:null===z||void 0===z||null===(a=z.filterTablesAndColumns)||void 0===a?void 0:a.Report_Type_Id,company:null===L||void 0===L?void 0:L.Company_id,queryFilters:J})}),(0,K.jsx)(g.c,{children:(0,K.jsx)(m.c,{onClick:te,startIcon:(0,K.jsx)(D.c,{}),children:"Back"})})]}),(0,K.jsxs)(x.c,{open:null===z||void 0===z?void 0:z.deleteConfirmationDialog,onClose:re,fullWidth:!0,maxWidth:"sm",children:[(0,K.jsx)(h.c,{children:"Confirmation"}),(0,K.jsxs)(b.c,{children:["Do you want to delete the Template ",(0,K.jsx)("span",{className:"blue-text",children:null===z||void 0===z||null===(i=z.filterTablesAndColumns)||void 0===i?void 0:i.reportName})," permanently"]}),(0,K.jsxs)(g.c,{children:[(0,K.jsx)(m.c,{onClick:re,children:"cancel"}),(0,K.jsx)(m.c,{onClick:()=>{var e;V((e=>({...e,deleteConfirmationDialog:!1}))),(0,q.q)({address:"reports/template",method:"DELETE",bodyData:{Report_Type_Id:null===z||void 0===z||null===(e=z.filterTablesAndColumns)||void 0===e?void 0:e.Report_Type_Id}}).then((e=>{null!==e&&void 0!==e&&e.success?($.m4.success(e.message),X((e=>!e))):$.m4.error(e.message)})).catch((e=>console.log(e))).finally((()=>V((e=>({...e,filterTablesAndColumns:{}})))))},startIcon:(0,K.jsx)(S.c,{}),variant:"outlined",color:"error",children:"Delete"})]})]}),(0,K.jsxs)(x.c,{open:null===z||void 0===z?void 0:z.preFilterDialog,onClose:se,fullWidth:!0,maxWidth:"md",children:[(0,K.jsxs)(h.c,{className:"d-flex justify-content-between",children:[(0,K.jsxs)("span",{children:["Filters For ",(0,K.jsx)("span",{className:"blue-text",children:null===z||void 0===z||null===(k=z.filterTablesAndColumns)||void 0===k?void 0:k.reportName})," - Report"]}),(0,K.jsx)("span",{children:(0,K.jsx)(t.c,{onClick:se,color:"error",className:"shadow-lg ",children:(0,K.jsx)(w.c,{})})})]}),(0,K.jsxs)(b.c,{children:[(0,K.jsx)(j.c,{value:ee,onChange:(e,l)=>{le(l)},children:null===z||void 0===z||null===(R=z.filterTablesAndColumns)||void 0===R||null===(E=R.tables)||void 0===E?void 0:E.map(((e,l)=>(0,K.jsx)(C.c,{label:null===e||void 0===e?void 0:e.AliasName},l)))}),null===z||void 0===z||null===(B=z.filterTablesAndColumns)||void 0===B||null===(O=B.tables)||void 0===O?void 0:O.map(((e,l)=>{var n;return(0,K.jsx)(Z,{value:ee,index:l,children:(0,K.jsx)("div",{className:"row",children:null===e||void 0===e||null===(n=e.columns)||void 0===n?void 0:n.map(((e,l)=>!Boolean(Number(null===e||void 0===e?void 0:e.IS_Default))&&!Boolean(Number(null===e||void 0===e?void 0:e.IS_Join_Key))&&(0,K.jsxs)("div",{className:"p-2 col-md-6 ",children:[(0,K.jsx)("label",{className:"mb-2 fw-bold text-muted",children:null===e||void 0===e?void 0:e.Column_Name}),oe(e)]},l)))})},l)}))]}),(0,K.jsxs)(g.c,{children:[(0,K.jsx)(m.c,{onClick:se,children:"cancel"}),(0,K.jsx)(m.c,{onClick:()=>V((e=>({...e,openFilterDialog:!0,preFilterDialog:!1}))),startIcon:(0,K.jsx)(T.c,{}),variant:"contained",children:"Open report"})]})]})]})}}}]);
//# sourceMappingURL=5232.23a675da.chunk.js.map