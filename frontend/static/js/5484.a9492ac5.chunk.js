"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[5484],{13724:(e,l,a)=>{a.d(l,{c:()=>_});var d=a(69060),s=a(27454),t=a(700),i=a(5548),r=a(99904),n=a(85624),o=a(33856),c=a(58612),u=a(53248),v=a(29504),m=a(5930),h=a(39308),x=a(41459),b=a(46864),j=a(82496);const p=e=>{let{dataArray:l=[],columns:a=[],onClickFun:p=null,isExpendable:_=!1,expandableComp:g=null,tableMaxHeight:N=550,initialPageCount:C=20,EnableSerialNumber:I=!1,CellSize:y="small",disablePagination:S=!1}=e;const[f,P]=(0,d.useState)(0),[R,A]=(0,d.useState)(C),[D,B]=(0,d.useState)([]),w=[{type:"left",class:""},{type:"right",class:"text-right"},{type:"center",class:"text-center"}],F=(e=>{if(!D.length)return e;return[...e].sort(((e,l)=>{for(const a of D){const{columnId:d,direction:s}=a,t=e[d],i=l[d];if(t!==i)return"asc"===s?t>i?1:-1:t<i?1:-1}return 0}))})(l),M=f*R,G=M+R,Q=F.slice(M,G),O=(e,l)=>{switch(l){case"number":return(0,h.SA)(e);case"date":return(0,h.uy)(e);case"time":return(0,h.AX)(e);case"string":return e;default:return""}},k=e=>{let{row:l,index:r}=e;const[n,o]=(0,d.useState)(!1),c="20px";return(0,j.jsxs)(d.Fragment,{children:[(0,j.jsxs)(s.c,{children:[!0===_&&g&&(0,j.jsx)(t.c,{className:"fa-13 border-end text-center",children:(0,j.jsx)(i.c,{size:"small",onClick:()=>o((e=>!e)),children:n?(0,j.jsx)(x.c,{sx:{fontSize:c}}):(0,j.jsx)(b.c,{sx:{fontSize:c}})})}),!0===I&&(0,j.jsx)(t.c,{className:"fa-13 border-end text-center",children:R*f+r+1}),null===a||void 0===a?void 0:a.map(((e,a)=>{var d;return((0,h.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,h.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,j.jsx)(t.c,{className:"fa-13 border-end "+(e.align?null===(d=w.find((l=>l.type===String(e.align).toLowerCase())))||void 0===d?void 0:d.class:""),children:e.Cell({row:l,Field_Name:e.Field_Name})},a):Object.entries(l).map((d=>{var s;let[i,r]=d;return e.Field_Name===i&&((0,h.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,h.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(0,j.jsx)(t.c,{className:"fa-13 border-end "+(e.align?null===(s=w.find((l=>l.type===String(e.align).toLowerCase())))||void 0===s?void 0:s.class:""),onClick:()=>p?p(l):console.log("Function not supplied"),children:O(r,null===e||void 0===e?void 0:e.Fied_Data)},a)})))}))]}),!0===_&&g&&n&&(0,j.jsx)(s.c,{children:(0,j.jsx)(t.c,{colSpan:Number(null===a||void 0===a?void 0:a.length)+(!0===I?2:1),children:g({row:l,index:r})})})]})};return(0,j.jsxs)("div",{children:[(0,j.jsx)(r.c,{component:n.c,sx:{maxHeight:N},children:(0,j.jsxs)(o.c,{stickyHeader:!0,size:y,children:[(0,j.jsx)(c.c,{children:(0,j.jsxs)(s.c,{children:[!0===_&&g&&(0,j.jsx)(t.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"#"}),!0===I&&(0,j.jsx)(t.c,{className:"fa-13 fw-bold border-end border-top text-center",style:{backgroundColor:"#EDF0F7"},children:"SNo"}),a.map(((e,l)=>{var a,d,s,i;return((0,h.Qr)(null===e||void 0===e?void 0:e.Defult_Display,1)||(0,h.Qr)(null===e||void 0===e?void 0:e.isVisible,1))&&(!1!==Boolean(null===e||void 0===e?void 0:e.isCustomCell)&&e.Cell?(0,j.jsx)(t.c,{className:"fa-13 fw-bold border-end border-top "+(e.align?null===(s=w.find((l=>l.type===String(e.align).toLowerCase())))||void 0===s?void 0:s.class:""),style:{backgroundColor:"#EDF0F7"},children:e.ColumnHeader?e.ColumnHeader:null===e||void 0===e||null===(i=e.Field_Name)||void 0===i?void 0:i.replace(/_/g," ")},l):(0,j.jsx)(t.c,{className:"fa-13 fw-bold border-end border-top "+(e.align?null===(a=w.find((l=>l.type===String(e.align).toLowerCase())))||void 0===a?void 0:a.class:""),style:{backgroundColor:"#EDF0F7"},sortDirection:!!D.some((l=>l.columnId===e.Field_Name))&&D.find((l=>l.columnId===e.Field_Name)).direction,children:(0,j.jsx)(u.c,{active:D.some((l=>l.columnId===e.Field_Name)),direction:D.some((l=>l.columnId===e.Field_Name))?D.find((l=>l.columnId===e.Field_Name)).direction:"asc",onClick:()=>(e=>{const l=D.find((l=>l.columnId===e));if(l){const a="asc"===l.direction;B(D.map((l=>l.columnId===e?{...l,direction:a?"desc":"asc"}:l)))}else B([...D,{columnId:e,direction:"asc"}])})(e.Field_Name),children:e.ColumnHeader?e.ColumnHeader:null===e||void 0===e||null===(d=e.Field_Name)||void 0===d?void 0:d.replace(/_/g," ")})},l))}))]})}),(0,j.jsxs)(v.c,{children:[(S?l:Q).map(((e,l)=>(0,j.jsx)(k,{row:e,index:l},l))),0===l.length&&(0,j.jsx)(s.c,{children:(0,j.jsx)(t.c,{colSpan:a.length+(!0===_&&g?1:0)+(!0===I?1:0),sx:{textAlign:"center"},children:"No Data"})})]})]})}),!S&&0!==Q.length&&(0,j.jsx)("div",{className:"p-2 pb-0",children:(0,j.jsx)(m.c,{component:"div",count:l.length,page:f,onPageChange:(e,l)=>{P(l)},rowsPerPage:R,onRowsPerPageChange:e=>{A(parseInt(e.target.value,10)),P(0)},rowsPerPageOptions:Array.from(new Set([C,5,20,50,100,200,500])).sort(((e,l)=>e-l)),labelRowsPerPage:"Rows per page",showFirstButton:!0,showLastButton:!0})})]})};p.defaultProps={dataArray:[],columns:[],onClickFun:null,isExpendable:!1,expandableComp:null,tableMaxHeight:550,initialPageCount:20,EnableSerialNumber:!1,CellSize:"small",disablePagination:!1};const _=p},62344:(e,l,a)=>{a.d(l,{o$:()=>i,o5:()=>r,cF:()=>t,iI:()=>s});const d=a.p+"static/media/smt.aa4d4f940bbebff07a57.png",s={table:{style:{width:"auto",backgroundColor:"transparent"}},rows:{style:{backgroundColor:"transparent"}},headCells:{style:{backgroundColor:"#6b9080f8",color:"white",fontSize:"14px"}}},t={control:(e,l)=>({...e,height:"45px",background:"rgba(255, 255, 255, 0.322)"}),menu:(e,l)=>({...e,zIndex:9999})},i=[{id:1,headname:"Menu ID",variant:"head",align:"left",width:100},{id:2,headname:"MenuName"},{id:3,headname:"Read Rights"},{id:4,headname:"Add Rights"},{id:5,headname:"Edit Rights"},{id:6,headname:"Delete Rights"},{id:7,headname:"Print Rights"},{id:8,headname:"Action"}],r=[{dataBase:1,name:"SHANKAR TRADERS",business:"Wholesale Merchant in Dhall",address:"32, Chitrakara Street, Madurai - 01 <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:d,gstin:"33AADFS6973R1ZD",phone:"984-313-1353, 984-335-5166",fssai:"12418012000818",bankAccount:"0021 5032 0885 122",ifsc:"TMBL0000002"},{dataBase:2,name:"SMT AGRO PRODUCTS",business:"",address:"H.O: 153, Chitrakara Street, 2nd Floor, Madurai -01 <br /> G.O: 746 Puliyur, Sayanapuram, Svga <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:d,gstin:"33ACMFS3420Q1ZQ",phone:"0452-4371625",fssai:"12418012000818",bankAccount:"0025 3031 0875 947",ifsc:"TMBL0000002"},{dataBase:3,name:"BHAVANI TRADERS",business:"",address:"H.O: 152-A, Chitrakara Street, Madurai -01 <br /> G.O: 30/1-Rajman Nagar, Chintamani Main Road, Mdu-01 <br /> Tax Invoice",logo:d,gstin:"33AAEFB6728J1ZG",phone:"958-559-7641, 958-559-7614",fssai:"12418012000670",bankAccount:"0021 5005 0800 309",ifsc:"TMBL0000002"}]},62860:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Q});var d=a(69060),s=a(3358),t=a(5548),i=a(43692),r=a(89e3),n=a(84436),o=a(82656),c=a(26773),u=a(4488),v=a(90048),m=(a(67472),a(30612)),h=a(62344),x=a(39308),b=a(14499),j=a(49608),p=a(36992),_=a(33452),g=a(1908),N=a(82496);const C=e=>{const l=JSON.parse(localStorage.getItem("user")),{orderDetails:a,orderProducts:s,postFun:t,download:i}=e,[n,m]=(0,d.useState)(!1),[h,C]=(0,d.useState)([]),[I,y]=(0,d.useState)({}),[S,f]=(0,d.useState)({}),P=(0,d.useRef)(null);(0,d.useEffect)((()=>{(0,g.q)({address:"masters/products?Company_Id=".concat(null===l||void 0===l?void 0:l.Company_id)}).then((e=>{e.success&&C(e.data)})).catch((e=>console.error(e))),(0,g.q)({address:"masters/company?Company_id=".concat(null===l||void 0===l?void 0:l.Company_id)}).then((e=>{e.success&&f(null!==e&&void 0!==e&&e.data[0]?null===e||void 0===e?void 0:e.data[0]:{})})).catch((e=>console.error(e)))}),[null===l||void 0===l?void 0:l.Company_id]),(0,d.useEffect)((()=>{e.open&&m(!0)}),[e.open]),(0,d.useEffect)((()=>{null!==a&&void 0!==a&&a.Retailer_Id&&(0,g.q)({address:"masters/retailers/info?Retailer_Id=".concat(null===a||void 0===a?void 0:a.Retailer_Id)}).then((e=>{e.success&&y(null!==e&&void 0!==e&&e.data[0]?null===e||void 0===e?void 0:e.data[0]:{})})).catch((e=>console.error(e)))}),[null===a||void 0===a?void 0:a.Retailer_Id]);const R=()=>{m(!1),e.clearDetails&&e.clearDetails()},A=h.filter((e=>null===s||void 0===s?void 0:s.some((l=>(0,x.Qr)(null===l||void 0===l?void 0:l.Item_Id,null===e||void 0===e?void 0:e.Product_Id)&&(0,x.QT)(null===l||void 0===l?void 0:l.Bill_Qty,0))))),D=A.reduce(((e,l)=>{var a;return e+((null===s||void 0===s||null===(a=s.find((e=>(0,x.Qr)(null===e||void 0===e?void 0:e.Item_Id,null===l||void 0===l?void 0:l.Product_Id))))||void 0===a?void 0:a.Bill_Qty)||0)*(null===l||void 0===l?void 0:l.Item_Rate)}),0),B=(0,_.useReactToPrint)({content:()=>P.current});return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{onClick:()=>{m(!0)},children:e.children}),(0,N.jsxs)(o.c,{open:n,onClose:R,fullWidth:!0,maxWidth:"lg",children:[(0,N.jsx)(c.c,{children:"Order Preview"}),(0,N.jsxs)(u.c,{ref:P,children:[(0,N.jsx)("h3",{className:"text-center mb-2",children:"Sale Order"}),(0,N.jsx)("div",{className:"table-responsive",children:(0,N.jsx)("table",{className:"table mb-0",children:(0,N.jsx)("tbody",{children:(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border border-bottom-0 border-end-0",children:(0,N.jsxs)("p",{className:"fa-14",children:[(0,N.jsx)("span",{className:"fw-bold",children:null===S||void 0===S?void 0:S.Company_Name})," ",(0,N.jsx)("br",{}),null===S||void 0===S?void 0:S.Region," - ",null===S||void 0===S?void 0:S.State," - ",null===S||void 0===S?void 0:S.Pincode," ",(0,N.jsx)("br",{}),null===S||void 0===S?void 0:S.Company_Address]})}),(0,N.jsx)("td",{className:"border border-bottom-0 border-start-0 fa-14 p-1",children:(0,N.jsx)("table",{className:"table mb-0",children:(0,N.jsxs)("tbody",{children:[(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 p-1",children:"GST"}),(0,N.jsx)("td",{className:"border-0 p-1",children:null!==S&&void 0!==S&&S.Gst_Number?null===S||void 0===S?void 0:S.Gst_Number:" - "})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 p-1",children:"Account No"}),(0,N.jsx)("td",{className:"border-0 p-1",children:null!==S&&void 0!==S&&S.Account_Number?null===S||void 0===S?void 0:S.Account_Number:" - "})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 p-1",children:"IFSC"}),(0,N.jsx)("td",{className:"border-0 p-1",children:null!==S&&void 0!==S&&S.IFC_Code?null===S||void 0===S?void 0:S.IFC_Code:" - "})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 p-1",children:"Bank"}),(0,N.jsx)("td",{className:"border-0 p-1",children:null!==S&&void 0!==S&&S.Bank_Name?null===S||void 0===S?void 0:S.Bank_Name:" - "})]})]})})})]})})})}),(0,N.jsx)("div",{className:"table-responsive",children:(0,N.jsx)("table",{className:"table mb-0",children:(0,N.jsx)("tbody",{children:(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border",children:(0,N.jsxs)("p",{className:"fa-14",children:[(0,N.jsx)("span",{className:"fw-bold",children:null===I||void 0===I?void 0:I.Retailer_Name})," ",(0,N.jsx)("br",{}),null===I||void 0===I?void 0:I.Mobile_No," ",(0,N.jsx)("br",{}),null===I||void 0===I?void 0:I.Reatailer_Address]})}),(0,N.jsxs)("td",{className:"border fa-14",children:["Date: ",(0,x.uy)(null===a||void 0===a?void 0:a.So_Date)," ",(0,N.jsx)("br",{}),(null===a||void 0===a?void 0:a.Order_Id)&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("span",{children:["Order ID: ",null===a||void 0===a?void 0:a.Order_Id]}),(0,N.jsx)("br",{})]}),"Order taken by: ",null===a||void 0===a?void 0:a.Sales_Person_Name]})]})})})}),(0,N.jsx)("div",{className:"table-responsive",children:(0,N.jsxs)("table",{className:"table",children:[(0,N.jsx)("thead",{children:(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border text-white theme-bg fa-14",children:"Sno"}),(0,N.jsx)("td",{className:"border text-white theme-bg fa-14",children:"Product"}),(0,N.jsx)("td",{className:"border text-white theme-bg fa-14 text-end",children:"Quantity"}),(0,N.jsx)("td",{className:"border text-white theme-bg fa-14 text-end",children:"Rate"}),(0,N.jsx)("td",{className:"border text-white theme-bg fa-14 text-end",children:"Amount"})]})}),(0,N.jsxs)("tbody",{children:[A.map(((e,l)=>{var a;const d=(null===s||void 0===s||null===(a=s.find((l=>(0,x.Qr)(null===l||void 0===l?void 0:l.Item_Id,null===e||void 0===e?void 0:e.Product_Id))))||void 0===a?void 0:a.Bill_Qty)||0,t=d*(null===e||void 0===e?void 0:e.Item_Rate);return(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border fa-13",children:l+1}),(0,N.jsx)("td",{className:"border fa-13",children:null===e||void 0===e?void 0:e.Product_Name}),(0,N.jsx)("td",{className:"border fa-13 text-end",children:(0,x.SA)(d)}),(0,N.jsx)("td",{className:"border fa-13 text-end",children:(0,x.SA)(null===e||void 0===e?void 0:e.Item_Rate)}),(0,N.jsx)("td",{className:"border fa-13 text-end",children:(0,x.SA)(t)})]},l)})),(0,N.jsxs)("tr",{children:[(0,N.jsxs)("td",{className:"border",rowSpan:2,colSpan:3,children:[(0,x.m4)(D)," Only."]}),(0,N.jsx)("td",{className:"text-end fa-14",children:"Total"}),(0,N.jsx)("td",{className:"border text-end fw-bold",children:(0,x.SA)(D)})]})]})]})})]}),(0,N.jsxs)(v.c,{children:[(0,N.jsx)(r.c,{startIcon:(0,N.jsx)(b.c,{}),variant:"outlined",color:"error",onClick:R,children:"Close"}),i&&(0,N.jsx)(r.c,{startIcon:(0,N.jsx)(j.c,{}),variant:"outlined",onClick:B,children:"Download"}),t&&(0,N.jsx)(r.c,{startIcon:(0,N.jsx)(p.c,{}),variant:"contained",color:"success",onClick:()=>{t(),R()},children:"Submit"})]})]})]})};var I=a(71412),y=a(86e3),S=a(61988),f=a(27664);const P=(0,f.c)((0,N.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");var R=a(96064);const A=[{id:0,label:"New",color:" bg-info text-white "},{id:1,label:"Verified",color:" bg-warning text-white "},{id:2,label:"Converted",color:" bg-success text-white "},{id:3,label:"Canceled",color:" bg-danger text-white "}];var D=a(13724),B=a(56480),w=a(45180);const F=(0,f.c)((0,N.jsx)("path",{d:"M5 13h14v-2H5zm-2 4h14v-2H3zM7 7v2h14V7z"}),"ClearAll"),M=()=>(0,N.jsx)("span",{style:{color:"red",fontWeight:"bold",fontSize:"1em"},children:" *"}),G=e=>{let{editValues:l,loadingOn:a,loadingOff:s,reload:i}=e;const n=JSON.parse(localStorage.getItem("user")),[b,j]=(0,d.useState)([]),[_,C]=(0,d.useState)([]),[I,S]=(0,d.useState)([]),[f,P]=(0,d.useState)([]),[A,G]=(0,d.useState)([]),[Q,O]=(0,d.useState)({}),k={Company_Id:null===n||void 0===n?void 0:n.Company_id,So_Date:(0,x.Q7)(),Retailer_Id:"",Retailer_Name:"Select",Sales_Person_Id:null===n||void 0===n?void 0:n.UserId,Sales_Person_Name:null===n||void 0===n?void 0:n.Name,Branch_Id:null===n||void 0===n?void 0:n.BranchId,Narration:"",Created_by:null===n||void 0===n?void 0:n.UserId,Product_Array:[],So_Id:"",GST_Inclusive:1,IS_IGST:0},H={Item_Id:"",ItemName:"Search Item",Bill_Qty:0,Item_Rate:0,UOM:"",Units:"",Product:{},Group:"Search Group",GroupID:"",Brand:"Search Brand",BrandID:"",Amount:0},[T,U]=(0,d.useState)(k),[z,E]=(0,d.useState)([]),[V,L]=(0,d.useState)(H),[q,W]=(0,d.useState)(!1),[X,J]=(0,d.useState)(!1);(0,d.useEffect)((()=>{var e;(0,x.CY)(l)?(U((e=>({...e,So_Date:null===l||void 0===l?void 0:l.So_Date,Retailer_Id:null===l||void 0===l?void 0:l.Retailer_Id,Retailer_Name:null===l||void 0===l?void 0:l.Retailer_Name,Sales_Person_Id:null===l||void 0===l?void 0:l.Sales_Person_Id,Sales_Person_Name:null===l||void 0===l?void 0:l.Sales_Person_Name,Branch_Id:null===l||void 0===l?void 0:l.Branch_Id,Narration:null===l||void 0===l?void 0:l.Narration,Created_by:null===l||void 0===l?void 0:l.Created_by,So_Id:null===l||void 0===l?void 0:l.So_Id,GST_Inclusive:null===l||void 0===l?void 0:l.GST_Inclusive,IS_IGST:null===l||void 0===l?void 0:l.IS_IGST}))),E(null===l||void 0===l||null===(e=l.Products_List)||void 0===e?void 0:e.map((e=>{var l,a,d,s,t,i,r;return{...e,Item_Id:null!==(l=e.Item_Id)&&void 0!==l?l:"",ItemName:null!==(a=null===e||void 0===e?void 0:e.Product_Name)&&void 0!==a?a:"",Bill_Qty:null!==(d=null===e||void 0===e?void 0:e.Bill_Qty)&&void 0!==d?d:0,Item_Rate:null!==(s=null===e||void 0===e?void 0:e.Item_Rate)&&void 0!==s?s:0,UOM:null!==(t=null===e||void 0===e?void 0:e.Unit_Id)&&void 0!==t?t:"",Units:null!==(i=null===e||void 0===e?void 0:e.Units)&&void 0!==i?i:"",Product:null!==e&&void 0!==e?e:{},Group:"Search Group",GroupID:"",Brand:"Search Brand",BrandID:"",Amount:null!==(r=null===e||void 0===e?void 0:e.Amount)&&void 0!==r?r:0}}))),W(!0)):(U(k),E([]),W(!1))}),[l]),(0,d.useEffect)((()=>{(0,g.q)({address:"masters/retailers/dropDown?Company_Id=".concat(null===n||void 0===n?void 0:n.Company_id)}).then((e=>{e.success&&j(e.data)})).catch((e=>console.error(e))),(0,g.q)({address:"masters/products?Company_Id=".concat(null===n||void 0===n?void 0:n.Company_id)}).then((e=>{if(e.success){C(e.data);const l=(0,x.Un)(e.data,"Product_Group",["Pro_Group"]);S(l);const a=(0,x.Un)(e.data,"Brand",["Brand_Name"]);P(a);const d=(0,x.Un)(e.data,"UOM_Id",["Units"]);G(d)}else C([]),S([]),P([])})).catch((e=>console.error(e))),(0,g.q)({address:"masters/company?Company_id=".concat(null===n||void 0===n?void 0:n.Company_id)}).then((e=>{e.success&&O(null!==e&&void 0!==e&&e.data[0]?null===e||void 0===e?void 0:e.data[0]:{})})).catch((e=>console.error(e)))}),[null===n||void 0===n?void 0:n.Company_id]);const K=()=>{J(!1),L(H)};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:"p-3 pt-0",children:[(0,N.jsxs)("div",{className:"p-3 bg-light rounded-3 mb-3 shadow-sm",children:[(0,N.jsx)("h5",{className:"border-bottom",children:"From:"}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-lg-8 col-md-7",children:(0,N.jsx)("table",{className:"table",children:(0,N.jsxs)("tbody",{children:[(0,N.jsx)("tr",{children:(0,N.jsx)("td",{className:"border-0 bg-light",colSpan:2,children:null===Q||void 0===Q?void 0:Q.Company_Name})}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 bg-light",children:"Address:"}),(0,N.jsx)("td",{className:"border-0 bg-light",children:null===Q||void 0===Q?void 0:Q.Company_Address})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 bg-light",children:"Phone:"}),(0,N.jsx)("td",{className:"border-0 bg-light",children:null===Q||void 0===Q?void 0:Q.Telephone_Number})]})]})})}),(0,N.jsx)("div",{className:"col-lg-4 col-md-5",children:(0,N.jsx)("table",{className:"table",children:(0,N.jsxs)("tbody",{children:[(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 bg-light",children:"Date:"}),(0,N.jsx)("td",{className:"border-0 bg-light",children:(0,N.jsx)("input",{type:"date",value:null!==T&&void 0!==T&&T.So_Date?(0,x.Q7)(null===T||void 0===T?void 0:T.So_Date):"",onChange:e=>U({...T,So_Date:e.target.value}),className:"cus-inpt p-1"})})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 bg-light",children:"Invoice Type:"}),(0,N.jsx)("td",{className:"border-0 bg-light",children:(0,N.jsxs)("select",{className:"cus-inpt p-1",onChange:e=>U({...T,GST_Inclusive:Number(e.target.value)}),children:[(0,N.jsx)("option",{value:1,children:"Inclusive Tax"}),(0,N.jsx)("option",{value:0,children:"Exclusive Tax"})]})})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 bg-light",children:"Tax Type:"}),(0,N.jsx)("td",{className:"border-0 bg-light",children:(0,N.jsxs)("select",{className:"cus-inpt p-1",onChange:e=>U({...T,IS_IGST:Number(e.target.value)}),children:[(0,N.jsx)("option",{value:0,children:"GST"}),(0,N.jsx)("option",{value:1,children:"IGST"})]})})]})]})})})]})]}),(0,N.jsxs)("div",{className:"p-3 bg-light rounded-3 mb-3 shadow-sm",children:[(0,N.jsx)("h5",{className:"border-bottom",children:"To:"}),(0,N.jsxs)("div",{className:"row ",children:[(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)("table",{className:"table",children:(0,N.jsxs)("tbody",{children:[(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 bg-light",children:"Retailer Name:"}),(0,N.jsx)("td",{className:"border-0 bg-light",children:(0,N.jsx)(m.cp,{value:{value:null===T||void 0===T?void 0:T.Retailer_Id,label:null===T||void 0===T?void 0:T.Retailer_Name},onChange:e=>U({...T,Retailer_Id:e.value,Retailer_Name:e.label}),options:[{value:"",label:"select",isDisabled:!0},...b.map((e=>({value:null===e||void 0===e?void 0:e.Retailer_Id,label:null===e||void 0===e?void 0:e.Retailer_Name})))],styles:h.cF,isSearchable:!0,placeholder:"Retailer Name",maxMenuHeight:200})})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 bg-light",children:"Address:"}),(0,N.jsx)("td",{className:"border-0 bg-light",children:n.Name})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 bg-light",children:"Phone:"}),(0,N.jsx)("td",{className:"border-0 bg-light"})]})]})})}),(0,N.jsx)("div",{className:"col-md-6",children:(0,N.jsx)("table",{className:"table",children:(0,N.jsxs)("tbody",{children:[(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 bg-light",children:"Q-Pay:"}),(0,N.jsx)("td",{className:"border-0 bg-light",children:10})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"border-0 bg-light",children:"Frequency Days:"}),(0,N.jsx)("td",{className:"border-0 bg-light",children:20})]})]})})})]})]}),(0,N.jsx)("div",{className:"d-flex align-items-end justify-content-end flex-wrap mb-3",children:(0,N.jsx)(r.c,{onClick:()=>J(!0),sx:{ml:1},variant:"outlined",startIcon:(0,N.jsx)(R.c,{}),children:"Add Product"})}),(0,N.jsx)(D.c,{dataArray:z,columns:[{isCustomCell:!0,Cell:e=>{var l;let{row:a}=e;return null===a||void 0===a||null===(l=a.Product)||void 0===l?void 0:l.Product_Name},ColumnHeader:"Product",isVisible:1},{Field_Name:"UOM",ColumnHeader:"Units",Fied_Data:"string",isVisible:1,align:"center"},{Field_Name:"Bill_Qty",ColumnHeader:"Quantity",Fied_Data:"string",isVisible:1},{Field_Name:"Item_Rate",ColumnHeader:"Rate",Fied_Data:"number",isVisible:1},{isCustomCell:!0,Cell:e=>{let{row:l}=e;return null===l||void 0===l?void 0:l.Amount},ColumnHeader:"Amount",isVisible:1},{isCustomCell:!0,Cell:e=>{let{row:l}=e;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(t.c,{onClick:()=>{var e,a,d,s,t;L({Item_Id:l.Item_Id,ItemName:null===l||void 0===l||null===(e=l.Product)||void 0===e?void 0:e.Product_Name,Bill_Qty:l.Bill_Qty,Item_Rate:l.Item_Rate,UOM:l.Product.UOM_Id,Product:l.Product,Group:null===l||void 0===l||null===(a=l.Product)||void 0===a?void 0:a.Pro_Group,GroupID:null===l||void 0===l||null===(d=l.Product)||void 0===d?void 0:d.Product_Group,Brand:null===l||void 0===l||null===(s=l.Product)||void 0===s?void 0:s.Brand_Name,BrandID:null===l||void 0===l||null===(t=l.Product)||void 0===t?void 0:t.Brand,Amount:null===l||void 0===l?void 0:l.Amount}),J(!0)},size:"small",children:(0,N.jsx)(y.c,{})}),(0,N.jsx)(t.c,{size:"small",onClick:()=>{E((e=>e.filter((e=>!(0,x.Qr)(e.Item_Id,l.Item_Id)))))},color:"error",children:(0,N.jsx)(w.c,{})})]})},ColumnHeader:"Action",isVisible:1}],EnableSerialNumber:!0,CellSize:"medium",disablePagination:!0}),(0,N.jsx)("p",{className:"fa-15 mt-3 m-0",children:"Narration"}),(0,N.jsx)("textarea",{className:"cus-inpt ",value:T.Narration,onChange:e=>U((l=>({...l,Narration:e.target.value})))}),(0,N.jsx)("div",{className:"d-flex justify-content-end",children:(0,N.jsx)(r.c,{onClick:()=>{if((null===z||void 0===z?void 0:z.length)>0&&null!==T&&void 0!==T&&T.Retailer_Id)a(),(0,g.q)({address:"sales/saleOrder",method:q?"PUT":"POST",bodyData:{...T,Product_Array:z.filter((e=>(0,x.QT)(null===e||void 0===e?void 0:e.Bill_Qty,0)))}}).then((e=>{e.success?(B.m4.success(null===e||void 0===e?void 0:e.message),i(),U(k),E([])):B.m4.error(null===e||void 0===e?void 0:e.message)})).catch((e=>console.error(e))).finally((()=>s()));else{if(z.length<=0)return B.m4.error("Enter any one product quantity");if(null===T||void 0===T||!T.Retailer_Id)return B.m4.error("Select Retailer")}},sx:{ml:1},variant:"outlined",color:"success",startIcon:(0,N.jsx)(p.c,{}),disabled:0===(null===z||void 0===z?void 0:z.length)||!(null!==T&&void 0!==T&&T.Retailer_Id),children:"Save"})})]}),(0,N.jsxs)(o.c,{open:X,onClose:K,maxWidth:"sm",fullWidth:!0,children:[(0,N.jsx)(c.c,{className:"border-bottom",children:(0,N.jsx)("span",{children:"Add Products Details"})}),(0,N.jsxs)("form",{onSubmit:e=>{e.preventDefault(),V.Item_Id&&V.Bill_Qty&&V.Item_Rate?(((e,l,a,d,s,t)=>{const i=z.findIndex((l=>(0,x.Qr)(l.Item_Id,e)));if(-1!==i){const e=[...z];e[i].Bill_Qty=Number(l),e[i].Item_Rate=Number(a),e[i].UOM=s,e[i].Units=t,e[i].Amount=(0,x.eX)(l,a),e[i]={...e[i],Product:d},E(e)}else E((i=>[...i,{Item_Id:e,Bill_Qty:Number(l),Item_Rate:Number(a),UOM:s,Units:t,Amount:(0,x.eX)(l,a),Product:d}]))})(V.Item_Id,V.Bill_Qty,V.Item_Rate,V.Product,V.UOM,V.Units),K()):B.m4.warn(V.Item_Id?V.Bill_Qty?"Enter Rate or Amount":"Enter Quantity":"Select Product")},children:[(0,N.jsx)(u.c,{children:(0,N.jsxs)("div",{className:"row pb-5",children:[(0,N.jsxs)("div",{className:"col-6 p-2",children:[(0,N.jsx)("label",{children:"Brand"}),(0,N.jsx)(m.cp,{value:{value:V.BrandID,label:V.Brand},onChange:e=>L((l=>({...l,BrandID:e.value,Brand:e.label}))),options:[{value:"",label:"select",isDisabled:!0},...f.map((e=>({value:null===e||void 0===e?void 0:e.Brand,label:null===e||void 0===e?void 0:e.Brand_Name})))],styles:h.cF,isSearchable:!0,placeholder:"Select Brand",maxMenuHeight:200})]}),(0,N.jsxs)("div",{className:"col-6 p-2",children:[(0,N.jsx)("label",{children:"Group"}),(0,N.jsx)(m.cp,{value:{value:V.GroupID,label:V.Group},onChange:e=>L((l=>({...l,GroupID:e.value,Group:e.label}))),options:[{value:"",label:"select",isDisabled:!0},...I.map((e=>({value:null===e||void 0===e?void 0:e.Product_Group,label:null===e||void 0===e?void 0:e.Pro_Group})))],styles:h.cF,isSearchable:!0,placeholder:"Select Group",maxMenuHeight:200})]}),(0,N.jsxs)("div",{className:"col-12 p-2",children:[(0,N.jsxs)("label",{children:["Item Name ",(0,N.jsx)(M,{})]}),(0,N.jsx)(m.cp,{value:{value:V.Item_Id,label:V.ItemName},onChange:e=>{const l=_.find((l=>(0,x.Qr)(l.Product_Id,e.value)));L((a=>{var d,s,t,i,r,n,o;return{...a,Item_Id:e.value,ItemName:e.label,Product:null!==l&&void 0!==l?l:{},Group:null!==(d=l.Pro_Group)&&void 0!==d?d:a.Group,GroupID:null!==(s=l.Product_Group)&&void 0!==s?s:a.GroupID,Brand:null!==(t=l.Brand_Name)&&void 0!==t?t:a.Brand,BrandID:null!==(i=l.Brand)&&void 0!==i?i:a.BrandID,UOM:null!==(r=l.UOM_Id)&&void 0!==r?r:a.UOM,Units:null!==(n=l.Units)&&void 0!==n?n:a.Units,Item_Rate:null!==(o=l.Item_Rate)&&void 0!==o?o:0,Amount:0,Bill_Qty:0}}))},options:[{value:"",label:"select",isDisabled:!0},...[..._.filter((e=>!V.BrandID||(0,x.Qr)(e.Brand,V.BrandID))).filter((e=>!V.GroupID||(0,x.Qr)(e.Product_Group,V.GroupID)))].map((e=>({value:null===e||void 0===e?void 0:e.Product_Id,label:null===e||void 0===e?void 0:e.Product_Name})))],styles:h.cF,isSearchable:!0,required:!0,placeholder:"Select Product",maxMenuHeight:200})]}),(0,N.jsxs)("div",{className:"col-lg-4 col-md-6 p-2",children:[(0,N.jsxs)("label",{children:["Quantity ",(0,N.jsx)(M,{})]}),(0,N.jsx)("input",{type:"number",value:V.Bill_Qty?V.Bill_Qty:"",onChange:e=>{V.Item_Rate?L((l=>({...l,Amount:(0,x.eX)(V.Item_Rate,e.target.value),Bill_Qty:e.target.value}))):V.Amount?L((l=>({...l,Item_Rate:(0,x.yy)(l.Amount,e.target.value),Bill_Qty:e.target.value}))):L((l=>({...l,Bill_Qty:e.target.value})))},className:"cus-inpt"})]}),(0,N.jsxs)("div",{className:"col-lg-4 col-md-6 p-2",children:[(0,N.jsx)("label",{children:"Rate "}),(0,N.jsx)("input",{type:"number",value:V.Item_Rate?(0,x.SA)(V.Item_Rate):"",onChange:e=>L((l=>({...l,Item_Rate:e.target.value,Amount:l.Bill_Qty?(0,x.eX)(e.target.value,l.Bill_Qty):l.Amount}))),className:"cus-inpt"})]}),(0,N.jsxs)("div",{className:"col-lg-4 col-md-6 p-2",children:[(0,N.jsx)("label",{children:"UOM"}),(0,N.jsxs)("select",{value:V.UOM,onChange:e=>{const l=e.target.selectedIndex,a=e.target.options[l].text,d=e.target.value;L((e=>({...e,UOM:d,Units:a})))},className:"cus-inpt",children:[(0,N.jsx)("option",{value:"",disabled:!0,children:"select"}),A.map(((e,l)=>(0,N.jsx)("option",{value:e.UOM_Id,children:e.Units},l)))]})]}),(0,N.jsxs)("div",{className:"col-md-6 p-2",children:[(0,N.jsx)("label",{children:"Amount"}),(0,N.jsx)("input",{type:"number",value:V.Amount?V.Amount:"",onChange:e=>L((l=>({...l,Amount:e.target.value,Item_Rate:l.Bill_Qty?(0,x.yy)(e.target.value,l.Bill_Qty):l.Item_Rate}))),className:"cus-inpt"})]})]})}),(0,N.jsxs)(v.c,{className:"d-flex justify-content-between align-items-center",children:[(0,N.jsx)(r.c,{onClick:()=>L(H),type:"button",startIcon:(0,N.jsx)(F,{}),children:"Clear"}),(0,N.jsxs)("span",{children:[(0,N.jsx)(r.c,{type:"button",onClick:K,children:"cancel"}),(0,N.jsx)(r.c,{type:"submit",variant:"outlined",children:"Add"})]})]})]})]})]})},Q=e=>{let{loadingOn:l,loadingOff:a}=e;const b=JSON.parse(localStorage.getItem("user")),[j,p]=(0,d.useState)([]),[_,f]=(0,d.useState)([]),[B,w]=(0,d.useState)([]),[F,M]=(0,d.useState)([]),[Q,O]=(0,d.useState)(!0),[k,H]=(0,d.useState)({}),[T,U]=(0,d.useState)({}),[z,E]=(0,d.useState)(!1),[V,L]=(0,d.useState)({Fromdate:(0,x.SO)(7),Todate:(0,x.Q7)(),Retailer_Id:"",RetailerGet:"ALL",Created_by:"",CreatedByGet:"ALL",Sales_Person_Id:"",SalsePersonGet:"ALL",Cancel_status:0}),[q,W]=(0,d.useState)({filters:!1,orderDetails:!1});(0,d.useEffect)((()=>{(0,g.q)({address:"sales/saleOrder?Fromdate=".concat(null===V||void 0===V?void 0:V.Fromdate,"&Todate=").concat(null===V||void 0===V?void 0:V.Todate,"&Retailer_Id=").concat(null===V||void 0===V?void 0:V.Retailer_Id,"&Sales_Person_Id=").concat(null===V||void 0===V?void 0:V.Sales_Person_Id,"&Created_by=").concat(null===V||void 0===V?void 0:V.Created_by,"&Cancel_status=").concat(null===V||void 0===V?void 0:V.Cancel_status)}).then((e=>{e.success&&p(null===e||void 0===e?void 0:e.data)})).catch((e=>console.error(e)))}),[V.Fromdate,null===V||void 0===V?void 0:V.Todate,null===V||void 0===V?void 0:V.Retailer_Id,null===V||void 0===V?void 0:V.Sales_Person_Id,null===V||void 0===V?void 0:V.Created_by,null===V||void 0===V?void 0:V.Cancel_status,z]),(0,d.useEffect)((()=>{(0,g.q)({address:"masters/retailers/dropDown?Company_Id=".concat(null===b||void 0===b?void 0:b.Company_id)}).then((e=>{e.success&&f(e.data)})).catch((e=>console.error(e))),(0,g.q)({address:"masters/users/salesPerson/dropDown?Company_id=".concat(null===b||void 0===b?void 0:b.Company_id)}).then((e=>{e.success&&w(e.data)})).catch((e=>console.error(e))),(0,g.q)({address:"masters/user/dropDown?Company_id=".concat(null===b||void 0===b?void 0:b.Company_id)}).then((e=>{e.success&&M(e.data)})).catch((e=>console.error(e)))}),[]);const X=[{Field_Name:"Retailer_Name",ColumnHeader:"Customer",Fied_Data:"string",isVisible:1},{Field_Name:"So_Date",ColumnHeader:"Date",Fied_Data:"date",isVisible:1,align:"center"},{Field_Name:"Products",ColumnHeader:"Products / Quantity",isVisible:1,align:"center",isCustomCell:!0,Cell:e=>{var l,a,d,s;let{row:t}=e;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{children:null!==(l=null===t||void 0===t||null===(a=t.Products_List)||void 0===a?void 0:a.length)&&void 0!==l?l:0})," /\xa0",(0,N.jsx)("span",{children:null!==(d=null===t||void 0===t||null===(s=t.Products_List)||void 0===s?void 0:s.reduce(((e,l)=>{var a;return e+(null!==(a=null===l||void 0===l?void 0:l.Bill_Qty)&&void 0!==a?a:0)}),0))&&void 0!==d?d:0})]})}},{Field_Name:"Total_Invoice_value",ColumnHeader:"Invoice Value",Fied_Data:"string",isVisible:1,align:"center"},{ColumnHeader:"Status",isVisible:1,align:"center",isCustomCell:!0,Cell:e=>{var l,a;let{row:d}=e;const s=A.find((e=>e.id===Number(null===d||void 0===d?void 0:d.isConverted)));return(0,N.jsx)("span",{className:null!==(l="py-0 fw-bold px-2 rounded-4 fa-12 "+(null===s||void 0===s?void 0:s.color))&&void 0!==l?l:"bg-secondary text-white",children:null!==(a=null===s||void 0===s?void 0:s.label)&&void 0!==a?a:"Undefined"})}},{Field_Name:"Sales_Person_Name",ColumnHeader:"Sales Person",Fied_Data:"string",isVisible:1},{Field_Name:"Action",isVisible:1,isCustomCell:!0,Cell:e=>{let{row:l}=e;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(s.c,{title:"View Order",children:(0,N.jsx)(t.c,{onClick:()=>{U({orderDetails:l,orderProducts:null!==l&&void 0!==l&&l.Products_List?null===l||void 0===l?void 0:l.Products_List:[]})},color:"primary",size:"small",children:(0,N.jsx)(I.c,{className:"fa-16"})})}),(0,N.jsx)(s.c,{title:"Edit",children:(0,N.jsx)(t.c,{onClick:()=>{J(),console.log(l),H({...l,isEdit:!0})},size:"small",children:(0,N.jsx)(y.c,{className:"fa-16"})})})]})}}],J=()=>{O(!Q),H({})},K=()=>{W({...q,filters:!1,orderDetails:!1}),H({})};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(i.c,{children:[(0,N.jsxs)("div",{className:"p-3 py-2 d-flex align-items-center justify-content-between",children:[(0,N.jsx)("h6",{className:"fa-18 m-0 p-0",children:Q?"Sale Orders":(0,x.CY)(k)?"Modify Sale Order":"Sale Order Creation"}),(0,N.jsxs)("span",{children:[Q&&(0,N.jsx)(s.c,{title:"Filters",children:(0,N.jsx)(t.c,{size:"small",onClick:()=>W({...q,filters:!0}),children:(0,N.jsx)(S.c,{})})}),(0,N.jsx)(r.c,{variant:"outlined",startIcon:Q?(0,N.jsx)(R.c,{}):(0,N.jsx)(P,{}),onClick:J,children:Q?"New":"Cancel"})]})]}),(0,N.jsx)(n.c,{className:"p-0 ",children:Q?(0,N.jsx)(D.c,{dataArray:j,columns:X,EnableSerialNumber:!0,isExpendable:!0,tableMaxHeight:550}):(0,N.jsx)(G,{editValues:k,loadingOn:l,loadingOff:a,reload:()=>{E((e=>!e)),O((e=>!e))}})})]}),Object.keys(T).length>0&&(0,N.jsx)(C,{orderDetails:null===T||void 0===T?void 0:T.orderDetails,orderProducts:null===T||void 0===T?void 0:T.orderProducts,download:!0,open:!0,clearDetails:()=>U({})}),(0,N.jsxs)(o.c,{open:q.filters,onClose:K,fullWidth:!0,maxWidth:"sm",children:[(0,N.jsx)(c.c,{children:"Filters"}),(0,N.jsx)(u.c,{children:(0,N.jsx)("div",{className:"table-responsive pb-4",children:(0,N.jsx)("table",{className:"table",children:(0,N.jsxs)("tbody",{children:[(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{style:{verticalAlign:"middle"},children:"Retailer"}),(0,N.jsx)("td",{children:(0,N.jsx)(m.cp,{value:{value:null===V||void 0===V?void 0:V.Retailer_Id,label:null===V||void 0===V?void 0:V.RetailerGet},onChange:e=>L({...V,Retailer_Id:e.value,RetailerGet:e.label}),options:[{value:"",label:"ALL"},..._.map((e=>({value:null===e||void 0===e?void 0:e.Retailer_Id,label:null===e||void 0===e?void 0:e.Retailer_Name})))],styles:h.cF,isSearchable:!0,placeholder:"Retailer Name"})})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{style:{verticalAlign:"middle"},children:"Salse Person"}),(0,N.jsx)("td",{children:(0,N.jsx)(m.cp,{value:{value:null===V||void 0===V?void 0:V.Sales_Person_Id,label:null===V||void 0===V?void 0:V.SalsePersonGet},onChange:e=>L({...V,Sales_Person_Id:e.value,SalsePersonGet:e.label}),options:[{value:"",label:"ALL"},...B.map((e=>({value:null===e||void 0===e?void 0:e.UserId,label:null===e||void 0===e?void 0:e.Name})))],styles:h.cF,isSearchable:!0,placeholder:"Sales Person Name"})})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{style:{verticalAlign:"middle"},children:"Created By"}),(0,N.jsx)("td",{children:(0,N.jsx)(m.cp,{value:{value:null===V||void 0===V?void 0:V.Created_by,label:null===V||void 0===V?void 0:V.CreatedByGet},onChange:e=>L({...V,Created_by:e.value,CreatedByGet:e.label}),options:[{value:"",label:"ALL"},...F.map((e=>({value:null===e||void 0===e?void 0:e.UserId,label:null===e||void 0===e?void 0:e.Name})))],styles:h.cF,isSearchable:!0,placeholder:"Sales Person Name"})})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{style:{verticalAlign:"middle"},children:"From"}),(0,N.jsx)("td",{children:(0,N.jsx)("input",{type:"date",value:V.Fromdate,onChange:e=>L({...V,Fromdate:e.target.value}),className:"cus-inpt"})})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{style:{verticalAlign:"middle"},children:"To"}),(0,N.jsx)("td",{children:(0,N.jsx)("input",{type:"date",value:V.Todate,onChange:e=>L({...V,Todate:e.target.value}),className:"cus-inpt"})})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{style:{verticalAlign:"middle"},children:"Canceled Order"}),(0,N.jsx)("td",{children:(0,N.jsxs)("select",{type:"date",value:V.Cancel_status,onChange:e=>L({...V,Cancel_status:Number(e.target.value)}),className:"cus-inpt",children:[(0,N.jsx)("option",{value:1,children:"Show"}),(0,N.jsx)("option",{value:0,children:"Hide"})]})})]})]})})})}),(0,N.jsx)(v.c,{children:(0,N.jsx)(r.c,{onClick:K,children:"close"})})]})]})}},96064:(e,l,a)=>{a.d(l,{c:()=>t});var d=a(27664),s=a(82496);const t=(0,d.c)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},14499:(e,l,a)=>{a.d(l,{c:()=>t});var d=a(27664),s=a(82496);const t=(0,d.c)((0,s.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},45180:(e,l,a)=>{a.d(l,{c:()=>t});var d=a(27664),s=a(82496);const t=(0,d.c)((0,s.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},49608:(e,l,a)=>{a.d(l,{c:()=>t});var d=a(27664),s=a(82496);const t=(0,d.c)((0,s.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download")},86e3:(e,l,a)=>{a.d(l,{c:()=>t});var d=a(27664),s=a(82496);const t=(0,d.c)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},61988:(e,l,a)=>{a.d(l,{c:()=>t});var d=a(27664),s=a(82496);const t=(0,d.c)((0,s.jsx)("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61"}),"FilterAlt")},36992:(e,l,a)=>{a.d(l,{c:()=>t});var d=a(27664),s=a(82496);const t=(0,d.c)((0,s.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save")},71412:(e,l,a)=>{a.d(l,{c:()=>t});var d=a(27664),s=a(82496);const t=(0,d.c)((0,s.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")},84436:(e,l,a)=>{a.d(l,{c:()=>b});var d=a(45072),s=a(95656),t=a(69060),i=a(79736),r=a(21412),n=a(12556),o=a(49836),c=a(10099),u=a(33448);function v(e){return(0,u.cp)("MuiCardContent",e)}(0,c.c)("MuiCardContent",["root"]);var m=a(82496);const h=["className","component"],x=(0,n.cp)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,l)=>l.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),b=t.forwardRef((function(e,l){const a=(0,o.C)({props:e,name:"MuiCardContent"}),{className:t,component:n="div"}=a,c=(0,s.c)(a,h),u=(0,d.c)({},a,{component:n}),b=(e=>{const{classes:l}=e;return(0,r.c)({root:["root"]},v,l)})(u);return(0,m.jsx)(x,(0,d.c)({as:n,className:(0,i.c)(b.root,t),ownerState:u,ref:l},c))}))},43692:(e,l,a)=>{a.d(l,{c:()=>j});var d=a(45072),s=a(95656),t=a(69060),i=a(79736),r=a(21412),n=a(12556),o=a(49836),c=a(85624),u=a(10099),v=a(33448);function m(e){return(0,v.cp)("MuiCard",e)}(0,u.c)("MuiCard",["root"]);var h=a(82496);const x=["className","raised"],b=(0,n.cp)(c.c,{name:"MuiCard",slot:"Root",overridesResolver:(e,l)=>l.root})((()=>({overflow:"hidden"}))),j=t.forwardRef((function(e,l){const a=(0,o.C)({props:e,name:"MuiCard"}),{className:t,raised:n=!1}=a,c=(0,s.c)(a,x),u=(0,d.c)({},a,{raised:n}),v=(e=>{const{classes:l}=e;return(0,r.c)({root:["root"]},m,l)})(u);return(0,h.jsx)(b,(0,d.c)({className:(0,i.c)(v.root,t),elevation:n?8:void 0,ref:l,ownerState:u},c))}))},38780:(e,l,a)=>{a.d(l,{c:()=>t});a(69060);var d=a(27664),s=a(82496);const t=(0,d.c)((0,s.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},46320:(e,l,a)=>{a.d(l,{c:()=>t});a(69060);var d=a(27664),s=a(82496);const t=(0,d.c)((0,s.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")}}]);
//# sourceMappingURL=5484.a9492ac5.chunk.js.map