"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[3640],{78688:(e,l,a)=>{a.d(l,{c:()=>u});var d=a(69060),s=a(3358),t=a(82656),i=a(26773),o=a(5548),n=a(4488),r=a(14499),c=a(82496);const u=e=>{const[l,a]=(0,d.useState)(!1),{url:u}=e,v=()=>{a(!1)};return(0,c.jsxs)("span",{children:[(0,c.jsx)(s.c,{title:"Tap to Open",children:(0,c.jsx)("span",{onClick:()=>{a(!0)},style:{cursor:"pointer"},children:e.children})}),(0,c.jsxs)(t.c,{open:l,onClose:v,fullWidth:!0,maxWidth:"lg",children:[(0,c.jsxs)(i.c,{className:"bg-dark text-white d-flex justify-content-between",children:[(0,c.jsx)("span",{children:"Image Preview"}),(0,c.jsx)(o.c,{onClick:v,children:(0,c.jsx)(r.c,{sx:{color:"white"}})})]}),(0,c.jsx)(n.c,{className:"bg-dark pb-4 d-flex align-items-center justify-content-center",children:(0,c.jsx)("img",{src:u,alt:"Preview",style:{maxWidth:"100%",maxHeight:"100%"}})})]})]})}},62344:(e,l,a)=>{a.d(l,{o$:()=>i,o5:()=>o,cF:()=>t,iI:()=>s});const d=a.p+"static/media/smt.aa4d4f940bbebff07a57.png",s={table:{style:{width:"auto",backgroundColor:"transparent"}},rows:{style:{backgroundColor:"transparent"}},headCells:{style:{backgroundColor:"#6b9080f8",color:"white",fontSize:"14px"}}},t={control:(e,l)=>({...e,height:"45px",background:"rgba(255, 255, 255, 0.322)"}),menu:(e,l)=>({...e,zIndex:9999})},i=[{id:1,headname:"Menu ID",variant:"head",align:"left",width:100},{id:2,headname:"MenuName"},{id:3,headname:"Read Rights"},{id:4,headname:"Add Rights"},{id:5,headname:"Edit Rights"},{id:6,headname:"Delete Rights"},{id:7,headname:"Print Rights"},{id:8,headname:"Action"}],o=[{dataBase:1,name:"SHANKAR TRADERS",business:"Wholesale Merchant in Dhall",address:"32, Chitrakara Street, Madurai - 01 <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:d,gstin:"33AADFS6973R1ZD",phone:"984-313-1353, 984-335-5166",fssai:"12418012000818",bankAccount:"0021 5032 0885 122",ifsc:"TMBL0000002"},{dataBase:2,name:"SMT AGRO PRODUCTS",business:"",address:"H.O: 153, Chitrakara Street, 2nd Floor, Madurai -01 <br /> G.O: 746 Puliyur, Sayanapuram, Svga <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:d,gstin:"33ACMFS3420Q1ZQ",phone:"0452-4371625",fssai:"12418012000818",bankAccount:"0025 3031 0875 947",ifsc:"TMBL0000002"},{dataBase:3,name:"BHAVANI TRADERS",business:"",address:"H.O: 152-A, Chitrakara Street, Madurai -01 <br /> G.O: 30/1-Rajman Nagar, Chintamani Main Road, Mdu-01 <br /> Tax Invoice",logo:d,gstin:"33AAEFB6728J1ZG",phone:"958-559-7641, 958-559-7614",fssai:"12418012000670",bankAccount:"0021 5005 0800 309",ifsc:"TMBL0000002"}]},89620:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Q});var d=a(69060),s=a(5548),t=a(60476),i=a(43692),o=a(84436),n=a(39308),r=a(50952),c=a(96064),u=a(1908),v=a(82496);const m=()=>{const e=JSON.parse(localStorage.getItem("user")),[l,a]=(0,d.useState)([]);(0,d.useEffect)((()=>{(0,u.q)({address:"masters/retailers/closingStock/areaBased?Company_id=".concat(null===e||void 0===e?void 0:e.Company_id)}).then((e=>{e.success&&a(e.data)})).catch((e=>console.error(e)))}),[null===e||void 0===e?void 0:e.Company_id]);const m=e=>{let{o:l,sno:a}=e;const[i,o]=(0,d.useState)(!1),[u,m]=(0,d.useState)("RETAILER"),h=(e=>{const l=new Map;return null===e||void 0===e||e.forEach((e=>{var a;null===e||void 0===e||null===(a=e.Closing_Stock)||void 0===a||a.forEach((e=>{const a=null===e||void 0===e?void 0:e.Item_Id,d=(null===e||void 0===e?void 0:e.Previous_Balance)*(null===e||void 0===e?void 0:e.Item_Rate),s=null===e||void 0===e?void 0:e.Previous_Balance;if(l.has(a)){const e=l.get(a);e.totalWorth+=d,e.totalQuantity+=s}else l.set(a,{Item_Id:a,Product_Name:null===e||void 0===e?void 0:e.Product_Name,totalWorth:d,totalQuantity:s})}))})),Array.from(l.values())})(null===l||void 0===l?void 0:l.Retailer);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"fa-13 border",children:(0,v.jsx)(s.c,{size:"small",onClick:()=>o(!i),children:i?(0,v.jsx)(r.c,{sx:{fontSize:"16px",color:"red"}}):(0,v.jsx)(c.c,{sx:{fontSize:"16px"}})})}),(0,v.jsx)("td",{className:"fa-13 border",children:a}),(0,v.jsx)("td",{className:"fa-13 border fw-bold text-muted",children:null!==l&&void 0!==l&&l.Area_Name?null===l||void 0===l?void 0:l.Area_Name:"unknown"}),(0,v.jsx)("td",{className:"fa-13 border text-end",children:null===h||void 0===h?void 0:h.length}),(0,v.jsx)("td",{className:"fa-13 border text-end text-primary fw-bold",children:(0,n.SA)((()=>{var e;let a=0;return null===l||void 0===l||null===(e=l.Retailer)||void 0===e||e.forEach((e=>{var l;null===e||void 0===e||null===(l=e.Closing_Stock)||void 0===l||l.forEach((e=>{a+=e.Previous_Balance*e.Item_Rate}))})),a})())})]}),(0,v.jsx)("tr",{children:(0,v.jsx)("td",{colSpan:5,className:"p-0 border-0",children:(0,v.jsxs)(t.c,{in:i,timeout:"auto",unmountOnExit:!0,children:[(0,v.jsxs)("div",{className:"my-3",children:[(0,v.jsx)("label",{className:"w-100 mb-2 text-muted fw-bold",children:"Report Type"}),(0,v.jsxs)("select",{value:u,onChange:e=>m(e.target.value),className:"cus-inpt w-auto",children:[(0,v.jsx)("option",{value:"RETAILER",children:"RETAILER BASED"}),(0,v.jsx)("option",{value:"PRODUCT",children:"PRODUCT BASED"})]})]}),(0,v.jsx)("div",{className:"table-responsive my-2",children:(e=>{var a;switch(e){case"RETAILER":return(0,v.jsxs)("table",{className:"table mb-0",children:[(0,v.jsx)("thead",{children:(0,v.jsx)("tr",{children:["","SNo","Retailer","Products","Value"].map(((e,l)=>(0,v.jsx)("th",{className:"fa-14 border",children:e},l)))})}),(0,v.jsx)("tbody",{children:null===l||void 0===l||null===(a=l.Retailer)||void 0===a?void 0:a.map(((e,l)=>(0,v.jsx)(x,{o:e,sno:l+1},l)))})]});case"PRODUCT":return(0,v.jsxs)("table",{className:"table",children:[(0,v.jsx)("thead",{children:(0,v.jsx)("tr",{children:["SNo","Product","Quantity","Value"].map(((e,l)=>(0,v.jsx)("th",{className:"fa-14 border text-center",children:e},l)))})}),(0,v.jsx)("tbody",{children:null===h||void 0===h?void 0:h.map(((e,l)=>(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"fa-13 border text-center",children:l+1}),(0,v.jsx)("td",{className:"fa-13 border",children:null===e||void 0===e?void 0:e.Product_Name}),(0,v.jsx)("td",{className:"fa-13 border text-end",children:(0,n.SA)(null===e||void 0===e?void 0:e.totalQuantity)}),(0,v.jsx)("td",{className:"fa-13 border text-end text-primary",children:(0,n.SA)(null===e||void 0===e?void 0:e.totalWorth)})]},l)))})]});default:v.Fragment}})(u)})]})})})]})},x=e=>{var l,a;let{o:i,sno:o}=e;const[u,m]=(0,d.useState)(!1);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:(0,v.jsx)(s.c,{size:"small",onClick:()=>m(!u),children:u?(0,v.jsx)(r.c,{sx:{fontSize:"16px",color:"red"}}):(0,v.jsx)(c.c,{sx:{fontSize:"16px"}})})}),(0,v.jsx)("td",{className:"fa-13 border",children:o}),(0,v.jsxs)("td",{className:"fa-13 border",children:[(0,v.jsx)("span",{className:"fw-bold text-muted",children:null===i||void 0===i?void 0:i.Retailer_Name})," ",(0,v.jsx)("br",{}),(0,v.jsx)("span",{className:"fa-12 text-muted",children:null===i||void 0===i?void 0:i.Reatailer_Address})]}),(0,v.jsx)("td",{className:"fa-13 border",children:null===i||void 0===i||null===(l=i.Closing_Stock)||void 0===l?void 0:l.length}),(0,v.jsx)("td",{className:"fa-13 border",children:(0,n.SA)((()=>{var e;let l=0;return null===i||void 0===i||null===(e=i.Closing_Stock)||void 0===e||e.forEach((e=>{l+=(null===e||void 0===e?void 0:e.Previous_Balance)*(null===e||void 0===e?void 0:e.Item_Rate)})),l})())})]}),(0,v.jsx)("tr",{children:(0,v.jsx)("td",{colSpan:5,className:"p-0 border-0",children:(0,v.jsx)(t.c,{in:u,timeout:"auto",unmountOnExit:!0,children:(0,v.jsx)("div",{className:"table-responsive my-2",children:(0,v.jsxs)("table",{className:"table",children:[(0,v.jsx)("thead",{children:(0,v.jsx)("tr",{children:["Sno","Product Name","Date","Quantity","Rate","Value"].map((e=>(0,v.jsx)("th",{className:"fa-14 border text-center",children:e},e)))})}),(0,v.jsx)("tbody",{children:null===i||void 0===i||null===(a=i.Closing_Stock)||void 0===a?void 0:a.map(((e,l)=>(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"fa-14 border",children:l+1}),(0,v.jsx)("td",{className:"fa-14 border",children:null===e||void 0===e?void 0:e.Product_Name}),(0,v.jsx)("td",{className:"fa-14 border text-center",children:(0,n.uy)(null===e||void 0===e?void 0:e.Cl_Date)}),(0,v.jsx)("td",{className:"fa-14 border text-end",children:(0,n.SA)(null===e||void 0===e?void 0:e.Previous_Balance)}),(0,v.jsx)("td",{className:"fa-14 border text-end",children:null===e||void 0===e?void 0:e.Item_Rate}),(0,v.jsx)("td",{className:"fa-14 border text-end",children:null!==e&&void 0!==e&&e.Previous_Balance&&null!==e&&void 0!==e&&e.Item_Rate?(0,n.SA)((null===e||void 0===e?void 0:e.Item_Rate)*(null===e||void 0===e?void 0:e.Previous_Balance)):0})]},l)))})]})})})})})]})};return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(i.c,{children:[(0,v.jsxs)("div",{className:"p-3 pb-2 d-flex align-items-center justify-content-between border-bottom",children:[(0,v.jsx)("h6",{className:"fa-18",children:"Closing Stock Reports"}),(0,v.jsxs)("span",{className:"fw-bold ",children:["\u20b9 ",(0,n.SA)((e=>{let l=0;return null===e||void 0===e||e.forEach((e=>{var a;null===e||void 0===e||null===(a=e.Retailer)||void 0===a||a.forEach((e=>{var a;null===e||void 0===e||null===(a=e.Closing_Stock)||void 0===a||a.forEach((e=>{l+=(null===e||void 0===e?void 0:e.Previous_Balance)*(null===e||void 0===e?void 0:e.Item_Rate)}))}))})),l})(l))]})]}),(0,v.jsx)(o.c,{children:(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsxs)("table",{className:"table",children:[(0,v.jsx)("thead",{children:(0,v.jsx)("tr",{children:["","SNo","Area","Products","Value"].map(((e,l)=>(0,v.jsx)("th",{className:"border text-center fa-14",children:e},l)))})}),(0,v.jsx)("tbody",{children:null===l||void 0===l?void 0:l.map(((e,l)=>(0,v.jsx)(m,{sno:l+1,o:e},l)))})]})})})]})})};var x=a(85624),h=a(50864),j=a(89e3),p=a(82656),b=a(26773),N=a(4488),_=a(12572),f=a(15786),g=a(90048),S=a(1571),I=a(19424),C=a(34036),y=a(22727),R=a(99768),P=a(86e3),w=a(12260),k=a(43564),T=a(30612),D=a(62344),A=a(56480),E=a(18256),B=a(29720),O=a(61584),F=a(78688);const L=()=>{var e,l;const a=JSON.parse(localStorage.getItem("user")),[r,c]=(0,d.useState)([]),[m,L]=(0,d.useState)([]),[Q,M]=(0,d.useState)({}),[G,z]=(0,d.useState)([]),[U,q]=(0,d.useState)([]),[V,W]=(0,d.useState)("1"),[H,J]=(0,d.useState)(!1),[Z,Y]=(0,d.useState)({closingStock:!1}),[K,$]=(0,d.useState)({cust:"",custGet:"Select Retailer",Fromdate:(0,n.SO)(10),Todate:(0,n.Q7)()}),X={Company_Id:null===a||void 0===a?void 0:a.Company_id,ST_Date:(0,n.Q7)(),Retailer_Id:"",Retailer_Name:"",Narration:"",Created_by:null===a||void 0===a?void 0:a.UserId,Product_Stock_List:[],ST_Id:""},[ee,le]=(0,d.useState)(X),[ae,de]=(0,d.useState)([]),[se,te]=(0,d.useState)(!1);(0,d.useEffect)((()=>{(0,u.q)({address:"masters/retailers/dropDown?Company_Id=".concat(null===a||void 0===a?void 0:a.Company_id)}).then((e=>{e.success&&c(e.data)})).catch((e=>console.error(e))),(0,u.q)({address:"masters/products/grouped?Company_Id=".concat(null===a||void 0===a?void 0:a.Company_id)}).then((e=>{e.success&&L(e.data)})).catch((e=>console.error(e)))}),[null===a||void 0===a?void 0:a.Company_id]),(0,d.useEffect)((()=>{null!==ee&&void 0!==ee&&ee.Retailer_Id&&(0,u.q)({address:"masters/retailers/closingStock/productBased?Retailer_Id=".concat(null===ee||void 0===ee?void 0:ee.Retailer_Id,"&reqDate=").concat(null===ee||void 0===ee?void 0:ee.ST_Date)}).then((e=>{e.success&&z(e.data)})).catch((e=>console.error(e)))}),[null===ee||void 0===ee?void 0:ee.ST_Date,null===ee||void 0===ee?void 0:ee.Retailer_Id,H]),(0,d.useEffect)((()=>{M({}),null!==K&&void 0!==K&&K.cust&&(0,u.q)({address:"masters/retailers/info?Retailer_Id=".concat(null===K||void 0===K?void 0:K.cust,"&Fromdate=").concat(null===K||void 0===K?void 0:K.Fromdate,"&Todate=").concat(null===K||void 0===K?void 0:K.Todate)}).then((e=>{var l;null!==e&&void 0!==e&&e.success&&(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.length)>0&&M(e.data[0])})).catch((e=>console.error(e)))}),[null===K||void 0===K?void 0:K.cust,null===K||void 0===K?void 0:K.Fromdate,null===K||void 0===K?void 0:K.Todate,H]);const ie=e=>{let{data:l}=e;return(0,v.jsx)(i.c,{component:x.c,variant:"outlined",sx:{mt:2},children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-xl-2 col-md-3 d-flex align-items-center",children:(0,v.jsx)(F.c,{url:null===l||void 0===l?void 0:l.imageUrl,children:(0,v.jsx)(h.c,{component:"img",sx:{width:200,height:200},image:null===l||void 0===l?void 0:l.imageUrl,alt:"retailer_picture"})})}),(0,v.jsx)("div",{className:"col-xl-10 col-md-9 d-flex flex-column justify-content-center p-2",children:(0,v.jsxs)(o.c,{children:[(0,v.jsx)("h6",{className:"mb-2 fa-18 fw-bold text-primary text-decoration-underline",onClick:()=>{var e,a,d,s;null!==l&&void 0!==l&&null!==(e=l.VERIFIED_LOCATION)&&void 0!==e&&e.latitude&&null!==l&&void 0!==l&&null!==(a=l.VERIFIED_LOCATION)&&void 0!==a&&a.longitude?window.open("https://www.google.com/maps/search/?api=1&query=".concat(null===l||void 0===l||null===(d=l.VERIFIED_LOCATION)||void 0===d?void 0:d.latitude,",").concat(null===l||void 0===l||null===(s=l.VERIFIED_LOCATION)||void 0===s?void 0:s.longitude),"_blank"):null!==l&&void 0!==l&&l.Latitude&&null!==l&&void 0!==l&&l.Longitude&&window.open("https://www.google.com/maps/search/?api=1&query=".concat(null===l||void 0===l?void 0:l.Latitude,",").concat(null===l||void 0===l?void 0:l.Longitude),"_blank")},children:null===l||void 0===l?void 0:l.Retailer_Name}),(0,v.jsxs)("p",{children:[(0,v.jsx)(S.c,{className:"fa-14 text-primary"})," ",null===l||void 0===l?void 0:l.Reatailer_Address]}),(0,v.jsxs)("p",{className:"fa-14 ",children:[" ",null===l||void 0===l?void 0:l.RouteGet]}),(0,v.jsxs)("p",{className:"fa-14 ",children:["Class: ",null===l||void 0===l?void 0:l.Retailer_Class]}),(0,v.jsxs)("p",{className:"text-primary ",children:[(0,v.jsx)(I.c,{className:"fa-14 text-primary"})," ",null===l||void 0===l?void 0:l.Contact_Person]}),(0,v.jsxs)("a",{href:"tel:".concat(null===l||void 0===l?void 0:l.Mobile_No),children:[(0,v.jsx)(C.c,{className:"fa-14 text-primary"}),(0,v.jsx)("span",{className:"ps-1",children:null===l||void 0===l?void 0:l.Mobile_No})]}),(0,v.jsxs)("p",{className:"fw-bold fa-14 text-muted",children:["Created: ",null!==l&&void 0!==l&&l.Created_Date?new Date(null===l||void 0===l?void 0:l.Created_Date).toLocaleDateString("en-IN"):"--:--:--","\xa0 - \xa0",null===l||void 0===l?void 0:l.createdBy]})]})})]})})},oe=()=>{Y({...Z,closingStock:!1}),de([]),le({...X,Retailer_Id:null===K||void 0===K?void 0:K.cust,Retailer_Name:null===K||void 0===K?void 0:K.custGet}),te(!1)},ne=e=>{var l;return(null===(l=(null===G||void 0===G?void 0:G.filter((l=>Number(null===l||void 0===l?void 0:l.Item_Id)===Number(e))))[0])||void 0===l?void 0:l.Previous_Balance)||0},re=e=>{var l;return(null===(l=(null===G||void 0===G?void 0:G.filter((l=>Number(null===l||void 0===l?void 0:l.Item_Id)===Number(e))))[0])||void 0===l?void 0:l.Cl_Date)||new Date},ce=e=>{var l,i;let{o:o}=e;const[n,r]=(0,d.useState)(!1);return(0,v.jsxs)("div",{className:" pt-3 ",children:[(0,v.jsxs)("div",{className:"fa-14 fw-bold text-muted d-flex align-items-center",children:[(0,v.jsx)(s.c,{size:"small",className:"me-2",onClick:()=>r(!n),children:n?(0,v.jsx)(y.c,{}):(0,v.jsx)(R.c,{})}),(0,v.jsxs)("span",{className:"flex-grow-1",children:["Date:\u2003",(0,v.jsx)("span",{className:"ps-1 text-primary",children:null!==o&&void 0!==o&&o.ST_Date?new Date(null===o||void 0===o?void 0:o.ST_Date).toLocaleDateString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric"}):null}),(0,v.jsx)("br",{}),"By:\u2003\u2003",(0,v.jsxs)("span",{className:"ps-1 text-primary",children:[null===o||void 0===o?void 0:o.CreatedByGet," "]}),"( ",null===o||void 0===o||null===(l=o.ProductCount)||void 0===l?void 0:l.length," )"]}),(0,v.jsx)("span",{className:"ps-1",children:(0,v.jsx)(s.c,{size:"small",onClick:()=>{var e;te(!0),le({...ee,Company_Id:null===Q||void 0===Q?void 0:Q.Company_Id,ST_Date:new Date(null===o||void 0===o?void 0:o.ST_Date).toISOString().split("T")[0],Retailer_Id:null===Q||void 0===Q?void 0:Q.Retailer_Id,Retailer_Name:null===Q||void 0===Q?void 0:Q.Retailer_Name,Narration:null===o||void 0===o?void 0:o.Narration,Created_by:null===a||void 0===a?void 0:a.UserId,ST_Id:null===o||void 0===o?void 0:o.ST_Id}),de([...null===o||void 0===o||null===(e=o.ProductCount)||void 0===e?void 0:e.map((e=>({Product_Id:null===e||void 0===e?void 0:e.Item_Id,ST_Qty:null===e||void 0===e?void 0:e.ST_Qty})))]),Y({...Z,closingStock:!0})},children:(0,v.jsx)(P.c,{className:"fa-16 text-dark"})})})]}),(0,v.jsx)(t.c,{in:n,unmountOnExit:!0,children:(0,v.jsx)("div",{className:"table-responsive mt-2",children:(0,v.jsxs)("table",{className:"table",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{className:"border fa-14",children:"SNo"}),(0,v.jsx)("th",{className:"border fa-14",children:"Product"}),(0,v.jsx)("th",{className:"border fa-14",children:"Quantity"})]})}),(0,v.jsx)("tbody",{children:null===o||void 0===o||null===(i=o.ProductCount)||void 0===i?void 0:i.map(((e,l)=>(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"border fa-14",children:l+1}),(0,v.jsx)("td",{className:"border fa-14 fw-bold text-muted",children:null===e||void 0===e?void 0:e.ProductName}),(0,v.jsx)("td",{className:"border fa-14",children:null===e||void 0===e?void 0:e.ST_Qty})]},l)))})]})})})]})};return(0,d.useEffect)((()=>{const e=null===G||void 0===G?void 0:G.filter((e=>Number(null===e||void 0===e?void 0:e.Previous_Balance)>0));q(e)}),[G]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"row mb-2",children:[(0,v.jsxs)("div",{className:"col-lg-3 col-md-4 col-sm-6",children:[(0,v.jsx)("label",{children:"Retailer"}),(0,v.jsx)(T.cp,{value:{value:null===K||void 0===K?void 0:K.cust,label:null===K||void 0===K?void 0:K.custGet},onChange:e=>{$({...K,cust:e.value,custGet:e.label}),le({...ee,Retailer_Id:e.value,Retailer_Name:e.label})},options:[{value:"",label:"All Retailer"},...r.map((e=>({value:null===e||void 0===e?void 0:e.Retailer_Id,label:null===e||void 0===e?void 0:e.Retailer_Name})))],styles:D.cF,isSearchable:!0,placeholder:"Retailer Name"})]}),(0,v.jsxs)("div",{className:"col-lg-3 col-md-4 col-sm-6",children:[(0,v.jsx)("label",{children:"From Date"}),(0,v.jsx)("input",{type:"date",onChange:e=>$({...K,Fromdate:e.target.value}),className:"cus-inpt",value:K.Fromdate?new Date(K.Fromdate).toISOString().split("T")[0]:""})]}),(0,v.jsxs)("div",{className:"col-lg-3 col-md-4 col-sm-6",children:[(0,v.jsx)("label",{children:"To Date"}),(0,v.jsx)("input",{type:"date",onChange:e=>$({...K,Todate:e.target.value}),className:"cus-inpt",value:K.Todate?new Date(K.Todate).toISOString().split("T")[0]:""})]})]}),K.cust&&(0,v.jsx)(ie,{data:Q}),K.cust&&(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(i.c,{component:x.c,variant:"outlined",sx:{mt:2},children:[(0,v.jsxs)("div",{className:"p-3 d-flex align-items-center border-bottom",children:[(0,v.jsx)("span",{className:"fa-18 fw-bold flex-grow-1",children:"Closing Stock"}),(0,v.jsx)("span",{children:(0,v.jsx)(j.c,{startIcon:(0,v.jsx)(w.c,{}),variant:"outlined",onClick:()=>Y({...Z,closingStock:!0}),children:"Add"})})]}),(null===Q||void 0===Q||null===(e=Q.ClosingStocks)||void 0===e?void 0:e.length)>0&&(0,v.jsx)(o.c,{className:"pt-0",sx:{maxHeight:"50vh",overflowY:"auto"},children:null===Q||void 0===Q||null===(l=Q.ClosingStocks)||void 0===l?void 0:l.map(((e,l)=>(0,v.jsx)(ce,{o:e},l)))})]})}),(null===K||void 0===K?void 0:K.cust)&&(0,v.jsxs)(i.c,{component:x.c,variant:"outlined",sx:{mt:2},children:[(0,v.jsxs)("div",{className:"p-3 d-flex justify-content-between fa-18 fw-bold",children:[(0,v.jsxs)("span",{children:["Current Stock",(0,v.jsxs)("span",{style:{fontWeight:"normal",fontSize:"16px"},children:[" ( Products ",null===U||void 0===U?void 0:U.length," )"]})]}),(0,v.jsxs)("span",{children:["\u20b9 ",(0,n.SA)(U.reduce(((e,l)=>e+l.Previous_Balance*l.Item_Rate),0))]})]}),(null===U||void 0===U?void 0:U.length)>0&&(0,v.jsx)(o.c,{sx:{maxHeight:"50vh",overflowY:"auto"},children:(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsxs)("table",{className:"table",children:[(0,v.jsx)("thead",{children:(0,v.jsx)("tr",{children:["Sno","Product Name","Date","Quantity","Rate","Value"].map((e=>(0,v.jsx)("th",{className:"fa-14 border text-center",children:e},e)))})}),(0,v.jsx)("tbody",{children:null===U||void 0===U?void 0:U.map(((e,l)=>(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"fa-14 border",children:l+1}),(0,v.jsx)("td",{className:"fa-14 border",children:null===e||void 0===e?void 0:e.Product_Name}),(0,v.jsx)("td",{className:"fa-14 border text-center",children:(0,n.uy)(null===e||void 0===e?void 0:e.Cl_Date)}),(0,v.jsx)("td",{className:"fa-14 border text-end",children:(0,n.SA)(null===e||void 0===e?void 0:e.Previous_Balance)}),(0,v.jsx)("td",{className:"fa-14 border text-end",children:null===e||void 0===e?void 0:e.Item_Rate}),(0,v.jsx)("td",{className:"fa-14 border text-end",children:null!==e&&void 0!==e&&e.Previous_Balance&&null!==e&&void 0!==e&&e.Item_Rate?(0,n.SA)((null===e||void 0===e?void 0:e.Item_Rate)*(null===e||void 0===e?void 0:e.Previous_Balance)):0})]},l)))})]})})})]}),(0,v.jsxs)(p.c,{open:null===Z||void 0===Z?void 0:Z.closingStock,onClose:oe,fullScreen:!0,children:[(0,v.jsxs)(b.c,{children:[(0,v.jsx)(s.c,{size:"small",onClick:oe,className:"me-2",children:(0,v.jsx)(k.c,{})}),se?"Modify":"Add"," Closing Stock For",(0,v.jsx)("span",{className:"ps-1 text-primary",children:null===ee||void 0===ee?void 0:ee.Retailer_Name})]}),(0,v.jsxs)(N.c,{className:"bg-light",children:[(0,v.jsxs)("div",{className:"col-xl-3 col-sm-4 mb-4",children:[(0,v.jsx)("label",{children:"Date"}),(0,v.jsx)("input",{type:"date",value:null!==ee&&void 0!==ee&&ee.ST_Date?new Date(null===ee||void 0===ee?void 0:ee.ST_Date).toISOString().split("T")[0]:"",onChange:e=>le({...ee,ST_Date:e.target.value}),className:"cus-inpt",required:!0})]}),(0,v.jsxs)(E.cp,{value:V,children:[(0,v.jsx)(_.c,{sx:{borderBottom:1,borderColor:"divider"},children:(0,v.jsx)(B.c,{indicatorColor:"transparant",onChange:(e,l)=>W(l),variant:"scrollable",scrollButtons:"auto",children:null===m||void 0===m?void 0:m.map(((e,l)=>(0,v.jsx)(f.c,{sx:String(V)===String(null===e||void 0===e?void 0:e.Pro_Group_Id)?{backgroundColor:"#c6d7eb"}:{},label:null===e||void 0===e?void 0:e.Pro_Group,value:String(null===e||void 0===e?void 0:e.Pro_Group_Id)},l)))})}),null===m||void 0===m?void 0:m.map(((e,l)=>{var a;return(0,v.jsx)(O.c,{value:String(null===e||void 0===e?void 0:e.Pro_Group_Id),sx:{p:0},children:(0,v.jsx)("div",{className:"row",children:null===e||void 0===e||null===(a=e.GroupedProductArray)||void 0===a?void 0:a.map(((e,l)=>{var a;return(0,v.jsx)("div",{className:"col-xl-4 col-lg-6 p-2",children:(0,v.jsxs)(i.c,{sx:{display:"flex"},children:[(0,v.jsx)(h.c,{component:"img",sx:{width:151},image:null===e||void 0===e?void 0:e.productImageUrl,alt:"Pic"}),(0,v.jsxs)(o.c,{sx:{flexGrow:"1"},children:[(0,v.jsx)("h6",{className:(0,n.QT)(ne(null===e||void 0===e?void 0:e.Product_Id)||0,0)&&"text-primary",children:null===e||void 0===e?void 0:e.Product_Name}),(0,v.jsx)("p",{children:(null===e||void 0===e?void 0:e.Product_Description)+" - "+(null===e||void 0===e?void 0:e.UOM)}),(0,v.jsxs)("div",{className:"py-2",children:[(0,v.jsx)("label",{className:"mb-2 w-100",children:"Closing Stock"}),(0,v.jsx)("input",{style:{maxWidth:350},type:"number",className:"cus-inpt",onChange:l=>((e,l,a,d)=>{const s=ae.findIndex((l=>l.Product_Id===e));if(-1!==s){const e=[...ae];e[s].ST_Qty=l,e[s].PR_Qty=d,e[s].LT_CL_Date=a,de(e)}else de((s=>[...s,{Product_Id:e,ST_Qty:l,PR_Qty:d,LT_CL_Date:a}]))})(null===e||void 0===e?void 0:e.Product_Id,l.target.value,re(null===e||void 0===e?void 0:e.Product_Id),ne(null===e||void 0===e?void 0:e.Product_Id)),value:(null===(a=ae.find((l=>Number(null===l||void 0===l?void 0:l.Product_Id)===Number(null===e||void 0===e?void 0:e.Product_Id))))||void 0===a?void 0:a.ST_Qty)||""}),(0,v.jsx)("label",{className:" text-muted fa-13",children:ne(null===e||void 0===e?void 0:e.Product_Id)?(0,v.jsxs)(v.Fragment,{children:["Previous:\xa0",(0,v.jsx)("span",{className:"me-2",children:(0,n.uy)(re(null===e||void 0===e?void 0:e.Product_Id))}),(0,v.jsxs)("span",{className:"text-primary ",children:["( ",ne(null===e||void 0===e?void 0:e.Product_Id)," )"]})]}):""})]})]})]})},l)}))})},l)}))]}),(0,v.jsxs)("div",{className:"col-lg-6 col-md-6 col-sm-8 mb-4",children:[(0,v.jsx)("label",{children:"Narration"}),(0,v.jsx)("textarea",{className:"cus-inpt",onChange:e=>le({...ee,Narration:e.target.value}),value:null===ee||void 0===ee?void 0:ee.Narration,rows:4})]})]}),(0,v.jsxs)(g.c,{children:[(0,v.jsx)(j.c,{onClick:oe,children:"cancel"}),(0,v.jsx)(j.c,{variant:"contained",color:"success",onClick:()=>{(null===ae||void 0===ae?void 0:ae.length)>0&&null!==ee&&void 0!==ee&&ee.Retailer_Id?(0,u.q)({address:"masters/retailers/closingStock",method:se?"PUT":"POST",bodyData:{...ee,Product_Stock_List:ae}}).then((e=>{e.success?(A.m4.success(null===e||void 0===e?void 0:e.message),oe(),J(!H)):A.m4.error(null===e||void 0===e?void 0:e.message)})).catch((e=>console.error(e))):A.m4.error("Enter any one valid stock value")},children:"confirm"})]})]})]})},Q=()=>{const[e,l]=(0,d.useState)(1);return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(E.cp,{value:e,children:[(0,v.jsx)(_.c,{sx:{borderBottom:1,borderColor:"divider"},children:(0,v.jsxs)(B.c,{indicatorColor:"transparant",onChange:(e,a)=>l(a),variant:"scrollable",scrollButtons:"auto",children:[(0,v.jsx)(f.c,{sx:1===e?{backgroundColor:"#c6d7eb"}:{},label:"Retailer Based",value:1}),(0,v.jsx)(f.c,{sx:2===e?{backgroundColor:"#c6d7eb"}:{},label:"Area Based",value:2})]})}),(0,v.jsx)(O.c,{value:1,sx:{p:0,pt:2},children:(0,v.jsx)(L,{})}),(0,v.jsx)(O.c,{value:2,sx:{p:0,pt:2},children:(0,v.jsx)(m,{})})]})})}}}]);
//# sourceMappingURL=3640.bb4e3cfa.chunk.js.map