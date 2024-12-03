"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[2084],{2084:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var i=a(69060),l=a(39308),r=a(56480),s=a(43692),d=a(89e3),n=a(84436),c=a(82656),o=a(26773),u=a(4488),m=a(90048),v=a(77536),h=a(1908),p=a(82496);const x=()=>{const e=JSON.parse(localStorage.getItem("user")),{contextObj:t}=(0,i.useContext)(v.a),a={Id:0,EntryDate:(0,l.Q7)(),LocationDetails:"MILL",StockItem:"",StartTime:"10:00",EndTime:"12:00",InputKG:0,OutputKG:0,WeingtCheckedBy:"",ApproximateOutput:0,EntryBy:e.UserId},[x,j]=(0,i.useState)([]),[g,N]=(0,i.useState)([]),[f,b]=(0,i.useState)([]),[y,C]=(0,i.useState)(a),[S,I]=(0,i.useState)(!1),[O,T]=(0,i.useState)({reqDate:(0,l.Q7)(),reqLocation:"MILL",dialog:!1});(0,i.useEffect)((()=>{(0,h.q)({address:"dataEntry/weightCheckActivity/getStaffs"}).then((e=>N(e.success?e.data:[]))).catch((e=>console.error(e))),(0,h.q)({address:"dataEntry/weightCheckActivity/getItems"}).then((e=>b(e.success?e.data:[]))).catch((e=>console.error(e)))}),[S]),(0,i.useEffect)((()=>{(0,h.q)({address:"dataEntry/weightCheckActivity?reqDate=".concat(O.reqDate,"&reqLocation=").concat(O.reqLocation)}).then((e=>{if(e.success){var t;const a=null===(t=e.data)||void 0===t?void 0:t.map((e=>({...e,StartTime:(0,l.OM)(null===e||void 0===e?void 0:e.StartTime),EndTime:(0,l.OM)(null===e||void 0===e?void 0:e.EndTime)})));j(a)}})).catch((e=>console.error(e)))}),[S,O.reqDate,O.reqLocation]);const k=()=>{T((e=>({...e,dialog:!1}))),C(a)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(s.c,{children:[(0,p.jsxs)("div",{className:"p-2 border-bottom fa-16 fw-bold d-flex justify-content-between align-items-center",children:[(0,p.jsx)("span",{className:"text-primary text-uppercase ps-3",children:"WeiGht Checking"}),(0,l.Qr)(null===t||void 0===t?void 0:t.Add_Rights,1)&&(0,p.jsx)(d.c,{variant:"outlined",onClick:()=>T((e=>({...e,dialog:!0}))),children:"Add Activity"})]}),(0,p.jsxs)("div",{className:"d-flex p-2 px-3",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("label",{className:"mb-1 w-100",children:"DATE"}),(0,p.jsx)("input",{type:"date",className:"cus-inpt w-auto",value:O.reqDate,onChange:e=>T((t=>({...t,reqDate:e.target.value})))})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("label",{className:"mb-1 w-100",children:"LOCATION"}),(0,p.jsxs)("select",{className:"cus-inpt w-auto",value:O.reqLocation,onChange:e=>T((t=>({...t,reqLocation:e.target.value}))),children:[(0,p.jsx)("option",{value:"MILL",children:"MILL"}),(0,p.jsx)("option",{value:"GODOWN",children:"GODOWN"})]})]})]}),(0,p.jsx)(n.c,{children:(0,p.jsx)("div",{className:"table-responsive",children:(0,p.jsxs)("table",{className:"table",children:[(0,p.jsx)("thead",{children:(0,p.jsx)("tr",{children:["SNo","Stock Item","Start","End","Duration","Input","Output","Difference","Expected","Actual","Weingt Checked By"].map(((e,t)=>(0,p.jsx)("th",{className:"border fa-14 text-muted text-uppercase text-center",children:e},t)))})}),(0,p.jsx)("tbody",{children:(null===x||void 0===x?void 0:x.length)>0&&(null===x||void 0===x?void 0:x.map(((e,t)=>(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"border text-center fa-13",children:t+1}),(0,p.jsx)("td",{className:"border fa-13 cellHoverColor",onClick:()=>{C(e),T((e=>({...e,dialog:!0})))},children:null===e||void 0===e?void 0:e.StockItem}),(0,p.jsx)("td",{className:"border text-center fa-13",children:null!==e&&void 0!==e&&e.StartTime?(0,l.Gu)((0,l.Wi)(null===e||void 0===e?void 0:e.StartTime)):"-"}),(0,p.jsx)("td",{className:"border text-center fa-13",children:null!==e&&void 0!==e&&e.EndTime?(0,l.Gu)((0,l.Wi)(null===e||void 0===e?void 0:e.EndTime)):"-"}),(0,p.jsx)("td",{className:"border text-center fa-13 text-primary fw-bold",children:null!==e&&void 0!==e&&e.StartTime&&null!==e&&void 0!==e&&e.EndTime?(0,l.Zp)(null===e||void 0===e?void 0:e.StartTime,null===e||void 0===e?void 0:e.EndTime):"-"}),(0,p.jsx)("td",{className:"border text-center fa-13",children:null!==e&&void 0!==e&&e.InputKG?(0,l.SA)(null===e||void 0===e?void 0:e.InputKG):"-"}),(0,p.jsx)("td",{className:"border text-center fa-13",children:null!==e&&void 0!==e&&e.OutputKG?(0,l.SA)(null===e||void 0===e?void 0:e.OutputKG):"-"}),(0,p.jsx)("td",{className:"border text-center fa-13 text-primary fw-bold",children:null!==e&&void 0!==e&&e.InputKG&&null!==e&&void 0!==e&&e.OutputKG?(0,l.od)(null===e||void 0===e?void 0:e.OutputKG,null===e||void 0===e?void 0:e.InputKG):"-"}),(0,p.jsx)("td",{className:"border text-center fa-13",children:null!==e&&void 0!==e&&e.ApproximateOutput?(null===e||void 0===e?void 0:e.ApproximateOutput)+"%":"-"}),(0,p.jsx)("td",{className:"border text-center fa-13",children:null!==e&&void 0!==e&&e.InputKG&&null!==e&&void 0!==e&&e.OutputKG?(e.OutputKG/e.InputKG*100).toFixed(2)+"%":"-"}),(0,p.jsx)("td",{className:"border text-center fa-13",children:null===e||void 0===e?void 0:e.WeingtCheckedBy})]},t))))})]})})})]}),(0,p.jsxs)(c.c,{open:O.dialog,onClose:k,fullWidth:!0,maxWidth:"sm",children:[(0,p.jsx)(o.c,{children:null!==y&&void 0!==y&&y.Id?"Modify Activity":"Add Activity"}),(0,p.jsxs)("form",{onSubmit:e=>{e.preventDefault(),(0,h.q)({address:"dataEntry/weightCheckActivity",method:y.Id?"PUT":"POST",headers:{"Content-Type":"application/json"},bodyData:y}).then((e=>{e.success?(r.m4.success(e.message),I(!S),k()):r.m4.error(e.message)})).catch((e=>console.error(e)))},children:[(0,p.jsx)(u.c,{children:(0,p.jsx)("div",{className:"table-responsive",children:(0,p.jsx)("table",{className:"table",children:(0,p.jsxs)("tbody",{children:[(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"border-0 fa-15",style:{verticalAlign:"middle"},children:"Date"}),(0,p.jsx)("td",{className:"border-0",children:(0,p.jsx)("input",{type:"date",value:null!==y&&void 0!==y&&y.EntryDate?(0,l.Q7)(null===y||void 0===y?void 0:y.EntryDate):"",className:"cus-inpt",onChange:e=>C((t=>({...t,EntryDate:e.target.value}))),required:!0})})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"border-0 fa-15",style:{verticalAlign:"middle"},children:"Location"}),(0,p.jsx)("td",{className:"border-0",children:(0,p.jsxs)("select",{value:null===y||void 0===y?void 0:y.LocationDetails,onChange:e=>C((t=>({...t,LocationDetails:e.target.value}))),className:"cus-inpt",required:!0,children:[(0,p.jsx)("option",{value:"MILL",children:"MILL"}),(0,p.jsx)("option",{value:"GODOWN",children:"GODOWN"})]})})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"border-0 fa-15",style:{verticalAlign:"middle"},children:"Stock Item"}),(0,p.jsx)("td",{className:"border-0",children:(0,p.jsx)("input",{value:null===y||void 0===y?void 0:y.StockItem,type:"search",list:"StockItem",required:!0,className:"cus-inpt",placeholder:"Type or Search Stock Item",onChange:e=>C((t=>({...t,StockItem:e.target.value})))})})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"border-0 fa-15",style:{verticalAlign:"middle"},children:"Start Time"}),(0,p.jsx)("td",{className:"border-0",children:(0,p.jsx)("input",{value:null!==y&&void 0!==y&&y.StartTime?null===y||void 0===y?void 0:y.StartTime:"",className:"cus-inpt",type:"time",required:!0,onChange:e=>C((t=>({...t,StartTime:e.target.value})))})})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"border-0 fa-15",style:{verticalAlign:"middle"},children:"End Time"}),(0,p.jsx)("td",{className:"border-0",children:(0,p.jsx)("input",{value:null!==y&&void 0!==y&&y.EndTime?null===y||void 0===y?void 0:y.EndTime:"",className:"cus-inpt",type:"time",min:y.StartTime?(0,l.OM)(null===y||void 0===y?void 0:y.StartTime):"",required:!0,onChange:e=>C((t=>({...t,EndTime:e.target.value})))})})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"border-0 fa-15",style:{verticalAlign:"middle"},children:"Input KGs"}),(0,p.jsx)("td",{className:"border-0",children:(0,p.jsx)("input",{value:null!==y&&void 0!==y&&y.InputKG?null===y||void 0===y?void 0:y.InputKG:"",className:"cus-inpt",type:"number",required:!0,min:1,placeholder:"Weight in kgs",onChange:e=>C((t=>({...t,InputKG:e.target.value})))})})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"border-0 fa-15",style:{verticalAlign:"middle"},children:"Output KGs"}),(0,p.jsx)("td",{className:"border-0",children:(0,p.jsx)("input",{value:null!==y&&void 0!==y&&y.OutputKG?null===y||void 0===y?void 0:y.OutputKG:"",className:"cus-inpt",type:"number",required:!0,min:1,placeholder:"Weight in kgs",onChange:e=>C((t=>({...t,OutputKG:e.target.value})))})})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"border-0 fa-15",style:{verticalAlign:"middle"},children:"Expected Output ( % )"}),(0,p.jsx)("td",{className:"border-0",children:(0,p.jsx)("input",{value:null!==y&&void 0!==y&&y.ApproximateOutput?null===y||void 0===y?void 0:y.ApproximateOutput:"",className:"cus-inpt",type:"number",required:!0,min:1,placeholder:"in Percentage (%)",onChange:e=>C((t=>({...t,ApproximateOutput:e.target.value})))})})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"border-0 fa-15",style:{verticalAlign:"middle"},children:"Weight Checked By"}),(0,p.jsx)("td",{className:"border-0",children:(0,p.jsx)("input",{value:null===y||void 0===y?void 0:y.WeingtCheckedBy,type:"search",list:"staffList",required:!0,className:"cus-inpt",placeholder:"Type or Search Name",onChange:e=>C((t=>({...t,WeingtCheckedBy:e.target.value})))})})]})]})})})}),(0,p.jsxs)(m.c,{children:[(0,p.jsx)(d.c,{onClick:k,type:"button",children:"Cancel"}),(0,p.jsx)(d.c,{type:"submit",children:"SUBMIT"})]})]})]}),(0,p.jsx)("datalist",{id:"staffList",children:g.map(((e,t)=>(0,p.jsx)("option",{value:e.WeingtCheckedBy},t)))}),(0,p.jsx)("datalist",{id:"StockItem",children:f.map(((e,t)=>(0,p.jsx)("option",{value:e.StockItem},t)))})]})}},84436:(e,t,a)=>{a.d(t,{c:()=>x});var i=a(45072),l=a(95656),r=a(69060),s=a(79736),d=a(21412),n=a(12556),c=a(49836),o=a(10099),u=a(33448);function m(e){return(0,u.cp)("MuiCardContent",e)}(0,o.c)("MuiCardContent",["root"]);var v=a(82496);const h=["className","component"],p=(0,n.cp)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),x=r.forwardRef((function(e,t){const a=(0,c.C)({props:e,name:"MuiCardContent"}),{className:r,component:n="div"}=a,o=(0,l.c)(a,h),u=(0,i.c)({},a,{component:n}),x=(e=>{const{classes:t}=e;return(0,d.c)({root:["root"]},m,t)})(u);return(0,v.jsx)(p,(0,i.c)({as:n,className:(0,s.c)(x.root,r),ownerState:u,ref:t},o))}))},43692:(e,t,a)=>{a.d(t,{c:()=>j});var i=a(45072),l=a(95656),r=a(69060),s=a(79736),d=a(21412),n=a(12556),c=a(49836),o=a(85624),u=a(10099),m=a(33448);function v(e){return(0,m.cp)("MuiCard",e)}(0,u.c)("MuiCard",["root"]);var h=a(82496);const p=["className","raised"],x=(0,n.cp)(o.c,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),j=r.forwardRef((function(e,t){const a=(0,c.C)({props:e,name:"MuiCard"}),{className:r,raised:n=!1}=a,o=(0,l.c)(a,p),u=(0,i.c)({},a,{raised:n}),m=(e=>{const{classes:t}=e;return(0,d.c)({root:["root"]},v,t)})(u);return(0,h.jsx)(x,(0,i.c)({className:(0,s.c)(m.root,r),elevation:n?8:void 0,ref:t,ownerState:u},o))}))}}]);
//# sourceMappingURL=2084.1b09f130.chunk.js.map