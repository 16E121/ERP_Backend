"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[5680],{25680:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var s=a(69060),r=a(27664),o=a(82496);const n=(0,r.c)((0,o.jsx)("path",{d:"M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15z"}),"UnfoldMoreOutlined");var c=a(56480),l=a(5548),d=a(43692),i=a(84436),u=a(82656),m=a(26773),h=a(4488),x=a(90048),p=a(89e3),j=a(32635),v=a(77536),b=a(39308),f=a(1908);const C=()=>{const{contextObj:e}=(0,s.useContext)(v.a),[t,a]=(0,s.useState)([]),r=JSON.parse(localStorage.getItem("user")),[C,y]=(0,s.useState)({searchData:"",payStatus:"0"}),[N,S]=(0,s.useState)(!1),g={date:(0,b.Q7)(),discribtion:"",verifyStatus:0,Pay_Id:""},[_,A]=(0,s.useState)(g),[w,D]=(0,s.useState)(!1),[I,M]=(0,s.useState)(null),[P,R]=(0,s.useState)([]),[L,O]=(0,s.useState)([]);(0,s.useEffect)((()=>{a([]),(0,f.q)({address:"userModule/customer/isCustomer?UserId=".concat(null===r||void 0===r?void 0:r.UserId)}).then((e=>{e.success?M(!0):M(!1)})).catch((e=>console.error(e)))}),[]),(0,s.useEffect)((()=>{null===I||!0!==I&&!1!==I||(a([]),(0,f.q)({address:"userModule/customer/payment?payStatus=".concat(C.payStatus,"&Auth=").concat(r.Autheticate_Id)}).then((e=>{e.success&&(e.data.forEach((e=>{e.Created_At=new Date(e.Created_At),e.Total_Amount=Number(e.Total_Amount)})),a(e.data))})).catch((e=>console.error(e))))}),[w,C.payStatus,I]),(0,s.useEffect)((()=>{const e=t.filter((e=>Object.values(e).some((e=>String(e).toLowerCase().includes(C.searchData.toLowerCase())))));R(e)}),[C.searchData,t]),(0,s.useEffect)((()=>{O(P&&P.length>0?P:""===C.searchData?t:[])}),[P,C.searchData]);const k=()=>{A(g)},B=[{name:"Date",selector:e=>e.Created_At,cell:e=>(0,b.uy)(e.Created_At),sortable:!0},{name:"Name",selector:e=>e.Customer_name,sortable:!0},{name:"Bills",selector:e=>e.Bill_Count,sortable:!0},{name:"Amount",selector:e=>e.Total_Amount,cell:e=>(0,b.SA)(e.Total_Amount),sortable:!0},{name:"Company",selector:e=>e.Company_Name,sortable:!0},{name:"OrderId",selector:e=>e.Order_Id},{name:"Status",selector:e=>e.Payment_Status,sortable:!0},{name:"Action",cell:t=>(0,b.Qr)(null===e||void 0===e?void 0:e.Edit_Rights,1)&&(0,b.Qr)(C.payStatus,0)?(0,o.jsx)(l.c,{onClick:()=>{S(!0),A({..._,Pay_Id:t.Id})},children:(0,o.jsx)(n,{})}):(0,o.jsx)(o.Fragment,{}),sortable:!0}],T=[{name:"Date",selector:e=>e.Created_At,cell:e=>(0,b.uy)(e.Created_At),sortable:!0},{name:"Name",selector:e=>e.Customer_name,sortable:!0},{name:"Bills",selector:e=>e.Bill_Count,sortable:!0},{name:"Amount",selector:e=>e.Total_Amount,cell:e=>(0,b.SA)(e.Total_Amount),sortable:!0},{name:"Company",selector:e=>e.Company_Name,sortable:!0},{name:"OrderId",selector:e=>e.Order_Id},{name:"Status",selector:e=>e.Payment_Status,sortable:!0}],E=()=>(0,o.jsx)(j.cp,{data:L,columns:I?T:B,expandableRows:!0,pagination:!0,highlightOnHover:!0,fixedHeader:!0,fixedHeaderScrollHeight:"58vh",expandableRowsComponent:e=>(0,o.jsx)("div",{className:"table-responisve m-2",style:{width:"fit-content"},children:(0,o.jsxs)("table",{className:"table mb-0",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{className:"border fa-14",children:"SNo"}),(0,o.jsx)("td",{className:"border fa-14",children:"Invoice No"}),(0,o.jsx)("td",{className:"border fa-14",children:"Bill Amount"}),(0,o.jsx)("td",{className:"border fa-14",children:"Ledger No"})]})}),(0,o.jsx)("tbody",{children:e.data.PaymentDetails.map(((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{className:"border",children:t+1}),(0,o.jsx)("td",{className:"border",children:e.Invoice_No}),(0,o.jsx)("td",{className:"border",children:e.Bal_Amount}),(0,o.jsx)("td",{className:"border",children:e.Ledger_Name})]},t)))})]})})});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.c,{children:[(0,o.jsx)("div",{className:"p-3 border-bottom",children:(0,o.jsx)("h6",{className:"fa-18 mb-0",children:"Payment Report"})}),(0,o.jsxs)(i.c,{children:[(0,o.jsxs)("div",{className:"d-sm-flex justify-content-between mb-3",children:[(0,o.jsxs)("select",{style:{padding:10},className:"cus-inpt w-auto rounded-2",value:C.payStatus,onChange:e=>y({...C,payStatus:e.target.value}),children:[(0,o.jsx)("option",{value:"0",children:"Verification Pending List"}),(0,o.jsx)("option",{value:"1",children:"Verified"}),(0,o.jsx)("option",{value:"2",children:"Rejected"})]}),(0,o.jsx)("div",{className:"flex-column mt-sm-0 mt-2",children:(0,o.jsx)("input",{type:"search",className:"cus-inpt w-auto rounded-5",value:C.searchData,onChange:e=>{y({...C,searchData:e.target.value})},placeholder:"Search..."})})]}),(0,o.jsx)(E,{})]})]}),(0,o.jsxs)(u.c,{open:N,onClose:()=>{S(!1),k()},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"md",fullWidth:!0,children:[(0,o.jsx)(m.c,{id:"alert-dialog-title",children:"Payment Action"}),(0,o.jsxs)(h.c,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{children:"Discrition"}),(0,o.jsx)("textarea",{rows:"3",className:"cus-inpt shadow-none",maxLength:330,onChange:e=>A({..._,discribtion:e.target.value}),value:_.discribtion})]}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-md-6 ",children:[(0,o.jsx)("label",{children:"Verification Date"}),(0,o.jsx)("input",{type:"date",className:"cus-inpt",onChange:e=>A({..._,date:e.target.value}),value:_.date})]}),(0,o.jsxs)("div",{className:"col-md-6 ",children:[(0,o.jsx)("label",{children:"Status"}),(0,o.jsxs)("select",{style:{padding:12},className:"cus-inpt",onChange:e=>A({..._,verifyStatus:e.target.value}),value:_.verifyStatus,children:[(0,o.jsx)("option",{value:"0",children:"Verification Pending"}),(0,o.jsx)("option",{value:"1",children:"Verify"}),(0,o.jsx)("option",{value:"2",children:"Reject"})]})]})]})]}),(0,o.jsxs)(x.c,{children:[(0,o.jsx)(p.c,{onClick:()=>{S(!1),k()},children:"Close"}),(0,o.jsx)(p.c,{onClick:()=>{I||(0,f.q)({address:"userModule/customer/payment/verification",method:"POST",bodyData:{Pay_Id:_.Pay_Id,description:_.discribtion,verifiedDate:_.date,verifyStatus:_.verifyStatus}}).then((e=>{e.success?(c.m4.success(e.message),k(),S(!1),D(!w)):c.m4.error(e.message)})).catch((e=>console.error(e)))},autoFocus:!0,children:"Submit"})]})]})]})}},84436:(e,t,a)=>{a.d(t,{c:()=>j});var s=a(45072),r=a(95656),o=a(69060),n=a(79736),c=a(21412),l=a(12556),d=a(49836),i=a(10099),u=a(33448);function m(e){return(0,u.cp)("MuiCardContent",e)}(0,i.c)("MuiCardContent",["root"]);var h=a(82496);const x=["className","component"],p=(0,l.cp)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),j=o.forwardRef((function(e,t){const a=(0,d.C)({props:e,name:"MuiCardContent"}),{className:o,component:l="div"}=a,i=(0,r.c)(a,x),u=(0,s.c)({},a,{component:l}),j=(e=>{const{classes:t}=e;return(0,c.c)({root:["root"]},m,t)})(u);return(0,h.jsx)(p,(0,s.c)({as:l,className:(0,n.c)(j.root,o),ownerState:u,ref:t},i))}))},43692:(e,t,a)=>{a.d(t,{c:()=>v});var s=a(45072),r=a(95656),o=a(69060),n=a(79736),c=a(21412),l=a(12556),d=a(49836),i=a(85624),u=a(10099),m=a(33448);function h(e){return(0,m.cp)("MuiCard",e)}(0,u.c)("MuiCard",["root"]);var x=a(82496);const p=["className","raised"],j=(0,l.cp)(i.c,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),v=o.forwardRef((function(e,t){const a=(0,d.C)({props:e,name:"MuiCard"}),{className:o,raised:l=!1}=a,i=(0,r.c)(a,p),u=(0,s.c)({},a,{raised:l}),m=(e=>{const{classes:t}=e;return(0,c.c)({root:["root"]},h,t)})(u);return(0,x.jsx)(j,(0,s.c)({className:(0,n.c)(m.root,o),elevation:l?8:void 0,ref:t,ownerState:u},i))}))}}]);
//# sourceMappingURL=5680.8f2fde40.chunk.js.map