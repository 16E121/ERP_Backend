"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[5380],{78688:(e,s,a)=>{a.d(s,{c:()=>h});var l=a(69060),r=a(3358),i=a(82656),n=a(26773),d=a(5548),t=a(4488),o=a(14499),c=a(82496);const h=e=>{const[s,a]=(0,l.useState)(!1),{url:h}=e,u=()=>{a(!1)};return(0,c.jsxs)("span",{children:[(0,c.jsx)(r.c,{title:"Tap to Open",children:(0,c.jsx)("span",{onClick:()=>{a(!0)},style:{cursor:"pointer"},children:e.children})}),(0,c.jsxs)(i.c,{open:s,onClose:u,fullWidth:!0,maxWidth:"lg",children:[(0,c.jsxs)(n.c,{className:"bg-dark text-white d-flex justify-content-between",children:[(0,c.jsx)("span",{children:"Image Preview"}),(0,c.jsx)(d.c,{onClick:u,children:(0,c.jsx)(o.c,{sx:{color:"white"}})})]}),(0,c.jsx)(t.c,{className:"bg-dark pb-4 d-flex align-items-center justify-content-center",children:(0,c.jsx)("img",{src:h,alt:"Preview",style:{maxWidth:"100%",maxHeight:"100%"}})})]})]})}},62344:(e,s,a)=>{a.d(s,{o$:()=>n,o5:()=>d,cF:()=>i,iI:()=>r});const l=a.p+"static/media/smt.aa4d4f940bbebff07a57.png",r={table:{style:{width:"auto",backgroundColor:"transparent"}},rows:{style:{backgroundColor:"transparent"}},headCells:{style:{backgroundColor:"#6b9080f8",color:"white",fontSize:"14px"}}},i={control:(e,s)=>({...e,height:"45px",background:"rgba(255, 255, 255, 0.322)"}),menu:(e,s)=>({...e,zIndex:9999})},n=[{id:1,headname:"Menu ID",variant:"head",align:"left",width:100},{id:2,headname:"MenuName"},{id:3,headname:"Read Rights"},{id:4,headname:"Add Rights"},{id:5,headname:"Edit Rights"},{id:6,headname:"Delete Rights"},{id:7,headname:"Print Rights"},{id:8,headname:"Action"}],d=[{dataBase:1,name:"SHANKAR TRADERS",business:"Wholesale Merchant in Dhall",address:"32, Chitrakara Street, Madurai - 01 <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:l,gstin:"33AADFS6973R1ZD",phone:"984-313-1353, 984-335-5166",fssai:"12418012000818",bankAccount:"0021 5032 0885 122",ifsc:"TMBL0000002"},{dataBase:2,name:"SMT AGRO PRODUCTS",business:"",address:"H.O: 153, Chitrakara Street, 2nd Floor, Madurai -01 <br /> G.O: 746 Puliyur, Sayanapuram, Svga <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:l,gstin:"33ACMFS3420Q1ZQ",phone:"0452-4371625",fssai:"12418012000818",bankAccount:"0025 3031 0875 947",ifsc:"TMBL0000002"},{dataBase:3,name:"BHAVANI TRADERS",business:"",address:"H.O: 152-A, Chitrakara Street, Madurai -01 <br /> G.O: 30/1-Rajman Nagar, Chintamani Main Road, Mdu-01 <br /> Tax Invoice",logo:l,gstin:"33AAEFB6728J1ZG",phone:"958-559-7641, 958-559-7614",fssai:"12418012000670",bankAccount:"0021 5005 0800 309",ifsc:"TMBL0000002"}]},88076:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var l=a(69060),r=a(3358),i=a(5548),n=a(43692),d=a(84436),t=a(1571),o=a(27664),c=a(82496);const h=(0,o.c)((0,c.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"PersonAdd");var u=a(30612),m=a(62344),v=a(39308),x=a(32635),p=a(78688),j=a(1908),b=a(51560);const g=()=>{const e=JSON.parse(localStorage.getItem("user")),s=(0,b.i6)(),[a,o]=(0,l.useState)([]),[g,f]=(0,l.useState)([]),[N,C]=(0,l.useState)({UserId:"",UserGet:"All Sales Person",reqDate:(0,v.Q7)()});(0,l.useEffect)((()=>{(0,j.q)({address:"empAttendance/visitLogs?UserId=".concat(null===N||void 0===N?void 0:N.UserId,"&reqDate=").concat(null===N||void 0===N?void 0:N.reqDate)}).then((e=>{e.success&&o(e.data)})).catch((e=>console.error(e)))}),[null===N||void 0===N?void 0:N.UserId,null===N||void 0===N?void 0:N.reqDate]),(0,l.useEffect)((()=>{(0,j.q)({address:"masters/users/salesPerson/dropDown?Company_id=".concat(null===e||void 0===e?void 0:e.Company_id)}).then((e=>{e.success&&f(e.data)})).catch((e=>console.error(e)))}),[null===e||void 0===e?void 0:e.Company_id]);const w=[{name:"Picture",cell:e=>(0,c.jsx)("span",{className:"py-1",children:(0,c.jsx)(p.c,{url:null===e||void 0===e?void 0:e.imageUrl,children:(0,c.jsx)("img",{src:null===e||void 0===e?void 0:e.imageUrl,alt:"Picture",style:{height:150,width:150}})})}),sortable:!1,maxWidth:"170px"},{name:"Retailer Info",cell:e=>(0,c.jsxs)("div",{className:"py-2 w-100",children:[(0,c.jsxs)("h6",{children:[null===e||void 0===e?void 0:e.EntryByGet,", ",(0,v.AX)(null===e||void 0===e?void 0:e.EntryAt)]}),(0,c.jsx)("p",{className:"mb-2",children:(null===e||void 0===e?void 0:e.Narration)&&"Narration: "+(null===e||void 0===e?void 0:e.Narration)}),(0,c.jsx)("div",{className:"table-responisve rounded-3 border p-2",children:(0,c.jsx)("table",{className:"mb-0",children:(0,c.jsxs)("tbody",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:"border-0",children:"Reatailer "}),(0,c.jsxs)("td",{className:"border-0",children:[null===e||void 0===e?void 0:e.Reatailer_Name,(0,c.jsx)("span",{className:"ps-2",children:!Boolean(null===e||void 0===e?void 0:e.IsExistingRetailer)&&(0,c.jsx)("span",{className:"p-2 py-0 fa-10 rounded-4 bg-success text-white fw-bold",children:"New"})})]})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:"pe-4 border-0",children:"Contact_Person "}),(0,c.jsxs)("td",{className:"border-0",children:[" ",null===e||void 0===e?void 0:e.Contact_Person]})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:"border-0",children:"Mobile "}),(0,c.jsx)("td",{className:"border-0",children:null===e||void 0===e?void 0:e.Contact_Mobile})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:"border-0",children:"Address "}),(0,c.jsx)("td",{className:"border-0",children:null===e||void 0===e?void 0:e.Location_Address})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:"border-0",children:"Location "}),(0,c.jsx)("td",{className:"border-0",children:(null===e||void 0===e?void 0:e.Latitude)+", "+(null===e||void 0===e?void 0:e.Longitude)})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Actions"}),(0,c.jsxs)("td",{className:"border-0",children:[(null===e||void 0===e?void 0:e.Latitude)&&e.Longitude&&(0,c.jsx)(r.c,{title:"Open in Google Map",children:(0,c.jsx)(i.c,{size:"small",onClick:()=>window.open("https://www.google.com/maps/search/?api=1&query=".concat(null===e||void 0===e?void 0:e.Latitude,",").concat(null===e||void 0===e?void 0:e.Longitude),"_blank"),color:"primary",children:(0,c.jsx)(t.c,{className:"fa-18"})})}),!Boolean(null===e||void 0===e?void 0:e.IsExistingRetailer)&&(0,c.jsx)(r.c,{title:"Convert as a Retailer",children:(0,c.jsx)(i.c,{color:"primary",size:"small",onClick:()=>s("/masters/retailers",{state:{retailer:e}}),children:(0,c.jsx)(h,{})})})]})]})]})})})]}),minWidth:"500px"}];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.c,{children:(0,c.jsxs)(d.c,{sx:{minHeight:"300px"},children:[(0,c.jsx)("div",{className:"px-3 pt-2 mb-3 d-flex align-items-center justify-content-between",children:(0,c.jsx)("h6",{className:"fa-18",children:"Visit Logs"})}),(0,c.jsxs)("div",{className:"row mb-3",children:[(0,c.jsxs)("div",{className:"col-xl-3 col-md-4 col-sm-6",children:[(0,c.jsx)("label",{children:"Sales Person"}),(0,c.jsx)(u.cp,{value:{value:null===N||void 0===N?void 0:N.UserId,label:null===N||void 0===N?void 0:N.UserGet},onChange:e=>C({...N,UserId:e.value,UserGet:e.label}),options:[{value:"",label:"All SalesPerson"},...g.map((e=>({value:null===e||void 0===e?void 0:e.UserId,label:null===e||void 0===e?void 0:e.Name})))],styles:m.cF,isSearchable:!0,placeholder:"Sales Person Name"})]}),(0,c.jsxs)("div",{className:"col-xl-3 col-md-4 col-sm-6",children:[(0,c.jsx)("label",{children:"Date"}),(0,c.jsx)("input",{type:"date",value:null===N||void 0===N?void 0:N.reqDate,onChange:e=>C({...N,reqDate:e.target.value}),className:"cus-inpt"})]})]}),(0,c.jsx)("div",{className:"rounded-4 overflow-hidden",children:(0,c.jsx)(x.cp,{columns:w,data:a,pagination:!0,highlightOnHover:!1,fixedHeader:!0,fixedHeaderScrollHeight:"60vh",customStyles:m.iI})})]})})})}},14499:(e,s,a)=>{a.d(s,{c:()=>i});var l=a(27664),r=a(82496);const i=(0,l.c)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},1571:(e,s,a)=>{a.d(s,{c:()=>i});var l=a(27664),r=a(82496);const i=(0,l.c)((0,r.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn")},84436:(e,s,a)=>{a.d(s,{c:()=>p});var l=a(45072),r=a(95656),i=a(69060),n=a(79736),d=a(21412),t=a(12556),o=a(49836),c=a(10099),h=a(33448);function u(e){return(0,h.cp)("MuiCardContent",e)}(0,c.c)("MuiCardContent",["root"]);var m=a(82496);const v=["className","component"],x=(0,t.cp)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,s)=>s.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),p=i.forwardRef((function(e,s){const a=(0,o.C)({props:e,name:"MuiCardContent"}),{className:i,component:t="div"}=a,c=(0,r.c)(a,v),h=(0,l.c)({},a,{component:t}),p=(e=>{const{classes:s}=e;return(0,d.c)({root:["root"]},u,s)})(h);return(0,m.jsx)(x,(0,l.c)({as:t,className:(0,n.c)(p.root,i),ownerState:h,ref:s},c))}))},43692:(e,s,a)=>{a.d(s,{c:()=>j});var l=a(45072),r=a(95656),i=a(69060),n=a(79736),d=a(21412),t=a(12556),o=a(49836),c=a(85624),h=a(10099),u=a(33448);function m(e){return(0,u.cp)("MuiCard",e)}(0,h.c)("MuiCard",["root"]);var v=a(82496);const x=["className","raised"],p=(0,t.cp)(c.c,{name:"MuiCard",slot:"Root",overridesResolver:(e,s)=>s.root})((()=>({overflow:"hidden"}))),j=i.forwardRef((function(e,s){const a=(0,o.C)({props:e,name:"MuiCard"}),{className:i,raised:t=!1}=a,c=(0,r.c)(a,x),h=(0,l.c)({},a,{raised:t}),u=(e=>{const{classes:s}=e;return(0,d.c)({root:["root"]},m,s)})(h);return(0,v.jsx)(p,(0,l.c)({className:(0,n.c)(u.root,i),elevation:t?8:void 0,ref:s,ownerState:h},c))}))}}]);
//# sourceMappingURL=5380.acae4b77.chunk.js.map