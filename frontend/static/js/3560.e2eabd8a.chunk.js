"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[3560],{3560:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var l=o(69060),n=o(50952),r=o(96064),i=o(43692),s=o(84436),a=o(39308),d=o(1908),c=o(82496);const u=(e,t)=>{let o=0;return Array.isArray(e)&&e.forEach((e=>{o+=Number(e[t])})),o},x=()=>{const e=JSON.parse(localStorage.getItem("user")),[t,o]=(0,l.useState)([]),[x,v]=(0,l.useState)({Report_Type:2,Fromdate:(0,a.Ir)(),Todate:(0,a.Q7)(),Report:"PENDING PURCHASE ORDER"});(0,l.useEffect)((()=>{o([]),null!==e&&void 0!==e&&e.Company_id&&(0,d.q)({address:"reports/PurchaseOrderReportCard?Report_Type=".concat(x.Report_Type,"&Fromdate=").concat(x.Fromdate,"&Todate=").concat(x.Todate),headers:{Db:null===e||void 0===e?void 0:e.Company_id}}).then((e=>{e.success&&(e.data.sort(((e,t)=>new Date(t.po_date)-new Date(e.po_date))),o(e.data))})).catch((e=>console.error(e)))}),[x.Report_Type,x.Fromdate,x.Todate]);const p=e=>{var t,o,i,s;let{rowData:a}=e;const[d,u]=(0,l.useState)(!1),x=null===a||void 0===a||null===(t=a.product_details)||void 0===t?void 0:t.reduce(((e,t)=>{var o;return e+(null===t||void 0===t||null===(o=t.product_details_1)||void 0===o?void 0:o.reduce(((e,t)=>e+(null===t||void 0===t?void 0:t.bill_qty)),0))}),0),v=null===a||void 0===a||null===(o=a.product_details)||void 0===o?void 0:o.reduce(((e,t)=>{var o;return e+(null===t||void 0===t||null===(o=t.product_details_1)||void 0===o?void 0:o.reduce(((e,t)=>e+(null===t||void 0===t?void 0:t.amount)),0))}),0);return(null===a||void 0===a||null===(i=a.product_details)||void 0===i?void 0:i.length)>0&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:"fa-12",children:(0,c.jsx)("button",{onClick:()=>u(!d),className:"icon-btn",children:d?(0,c.jsx)(n.c,{sx:{fontSize:"inherit"}}):(0,c.jsx)(r.c,{sx:{fontSize:"inherit"}})})}),(0,c.jsx)("td",{className:"text-success fa-12 fw-bold bg-light",children:null===a||void 0===a?void 0:a.Stock_Group}),(0,c.jsx)("td",{className:"text-success fa-12",children:"-"}),(0,c.jsx)("td",{className:"text-success fa-12 bg-light fw-bold",children:null===(s=x/1e3)||void 0===s?void 0:s.toLocaleString("en-IN",{maximumFractionDigits:2})}),(0,c.jsx)("td",{className:"text-success fa-12 fw-bold",children:(v/x).toLocaleString("en-IN",{maximumFractionDigits:2})}),(0,c.jsx)("td",{className:"text-success fa-12 bg-light fw-bold",children:null===v||void 0===v?void 0:v.toLocaleString("en-IN")})]}),d&&a.product_details.map(((e,t)=>(0,c.jsx)(h,{subRowData:e},t)))]})},h=e=>{var t,o;let{subRowData:i}=e;const[s,a]=(0,l.useState)(!1),d=u(null===i||void 0===i?void 0:i.product_details_1,"bill_qty"),x=u(null===i||void 0===i?void 0:i.product_details_1,"amount");return(null===i||void 0===i||null===(t=i.product_details_1)||void 0===t?void 0:t.length)>0&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{style:{fontSize:"12px"},className:"text-primary"}),(0,c.jsx)("td",{style:{fontSize:"12px"},className:"text-primary bg-light",children:(0,c.jsx)("button",{onClick:()=>a(!s),className:"icon-btn",children:s?(0,c.jsx)(n.c,{sx:{fontSize:"inherit"}}):(0,c.jsx)(r.c,{sx:{fontSize:"inherit"}})})}),(0,c.jsxs)("td",{style:{fontSize:"12px"},className:"text-primary",children:[null===i||void 0===i?void 0:i.Item_Name_Modified," (Sum)"]}),(0,c.jsx)("td",{style:{fontSize:"12px"},className:"text-primary bg-light fw-bold",children:(d/1e3).toLocaleString("en-IN",{maximumFractionDigits:2})}),(0,c.jsx)("td",{style:{fontSize:"12px"},className:"text-primary fw-bold",children:(Number(x)/Number(d)).toLocaleString("en-IN",{maximumFractionDigits:2})}),(0,c.jsx)("td",{style:{fontSize:"12px"},className:"text-primary bg-light fw-bold",children:x.toLocaleString("en-IN",{maximumFractionDigits:2})})]}),s&&(null===i||void 0===i||null===(o=i.product_details_1)||void 0===o?void 0:o.map(((e,t)=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{style:{fontSize:"12px"},children:null===e||void 0===e?void 0:e.po_no}),(0,c.jsx)("td",{style:{fontSize:"12px"},className:"bg-light",children:new Date(null===e||void 0===e?void 0:e.po_date).toLocaleDateString("en-IN")}),(0,c.jsx)("td",{style:{fontSize:"12px"},children:null===e||void 0===e?void 0:e.ledger_name}),(0,c.jsx)("td",{style:{fontSize:"12px"},className:"bg-light fw-bold",children:(null===e||void 0===e?void 0:e.bill_qty.toLocaleString("en-IN"))+" "+(null===e||void 0===e?void 0:e.bill_unit)}),(0,c.jsx)("td",{style:{fontSize:"12px"},className:" fw-bold",children:null===e||void 0===e?void 0:e.item_rate.toLocaleString("en-IN")}),(0,c.jsx)("td",{style:{fontSize:"12px"},className:"bg-light fw-bold",children:null===e||void 0===e?void 0:e.amount.toLocaleString("en-IN")})]},t))))]})},m=e=>{var t,o;let{row:i}=e;const[s,a]=(0,l.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("button",{onClick:()=>a(!s),className:"icon-btn",children:s?(0,c.jsx)(n.c,{sx:{fontSize:"inherit"}}):(0,c.jsx)(r.c,{sx:{fontSize:"inherit"}})})}),(0,c.jsx)("td",{style:{fontSize:"12px"},children:null===i||void 0===i?void 0:i.ledger_name}),(0,c.jsx)("td",{style:{fontSize:"12px"},children:null===i||void 0===i||null===(t=i.Order_details)||void 0===t?void 0:t.length}),(0,c.jsx)("td",{style:{fontSize:"12px"},className:"text-primary fw-bold",children:u(null===i||void 0===i?void 0:i.Order_details,"total_invoice_value").toLocaleString("en-IN")})]}),s&&(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:4,className:"overflow-scroll",children:(0,c.jsxs)("table",{className:"table",children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{style:{fontSize:"14px"},children:"PO No"}),(0,c.jsx)("th",{style:{fontSize:"14px"},children:"Date"}),(0,c.jsx)("th",{style:{fontSize:"14px"},children:"Order Value"})]})}),(0,c.jsx)("tbody",{children:null===i||void 0===i||null===(o=i.Order_details)||void 0===o?void 0:o.map(((e,t)=>{var o;return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{style:{fontSize:"12px"},children:null===e||void 0===e?void 0:e.po_no}),(0,c.jsx)("td",{style:{fontSize:"12px"},children:(null===e||void 0===e?void 0:e.po_date)&&new Date(e.po_date).toLocaleDateString("en-IN")}),(0,c.jsx)("td",{style:{fontSize:"12px"},children:null===e||void 0===e||null===(o=e.total_invoice_value)||void 0===o?void 0:o.toLocaleString("en-IN")})]},t)}))})]})})})]})},j=()=>{let e=0,o=0;return t.forEach((t=>{var l;null===t||void 0===t||null===(l=t.product_details)||void 0===l||l.forEach((t=>{null===t||void 0===t||t.product_details_1.forEach((t=>{e+=Number(t.bill_qty),o+=Number(t.amount)}))}))})),{amount:parseInt(o).toLocaleString("en-IN"),tonage:parseInt(e).toLocaleString("en-IN")}};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(i.c,{children:[(0,c.jsxs)("div",{className:"d-flex justify-content-between align-items-center px-3 py-2",style:{backgroundColor:"#eae0cc"},children:[(0,c.jsxs)("div",{className:"d-flex flex-column justify-content-center fw-bold text-dark",children:[e.Company_Name,(0,c.jsxs)("span",{style:{fontSize:"11px"},children:["( ",x.Report," )"]})]}),(0,c.jsxs)("select",{className:"cus-inpt w-auto rounded-5 border-0",onChange:e=>{const t=e.target.selectedIndex,o=e.target.options[t].text;v({...x,Report_Type:Number(e.target.value),Report:o})},value:x.Report_Type,children:[(0,c.jsx)("option",{value:2,children:"PENDING PURCHASE ORDER"}),(0,c.jsx)("option",{value:0,children:"PURCHASE ORDER"}),(0,c.jsx)("option",{value:1,children:"PURCHASE"}),(0,c.jsx)("option",{value:3,children:"ORDER VALUE"})]})]}),(0,c.jsxs)("div",{className:"px-3 py-2 d-flex justify-content-between align-items-center",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("input",{type:"date",className:"cus-inpt py-1 w-auto rounded-5",value:x.Fromdate,onChange:e=>{v({...x,Fromdate:e.target.value})}}),(0,c.jsx)("input",{type:"date",className:"cus-inpt py-1 w-auto rounded-5",value:x.Todate,onChange:e=>{v({...x,Todate:e.target.value})}})]}),(0,c.jsx)("p",{className:"text-primary fw-bold fa-14 mb-0",children:3!==Number(x.Report_Type)?" ( "+j().tonage+" ) - ( "+j().amount+" )":" "+(()=>{let e=0;return t.forEach((t=>{var o;null===t||void 0===t||null===(o=t.Order_details)||void 0===o||o.forEach((t=>{e+=Number(null===t||void 0===t?void 0:t.total_invoice_value)}))})),parseInt(e).toLocaleString("en-IN")})()})]}),(0,c.jsx)(s.c,{style:{maxHeight:"75vh"},className:"overflow-auto pt-0",children:3!==Number(x.Report_Type)?(0,c.jsxs)("table",{className:"table",children:[(0,c.jsx)("thead",{children:(0,c.jsx)("tr",{children:["-","Stock Group","Item","Tonnage","Rate","Value (\u20b9)"].map(((e,t)=>(0,c.jsx)("th",{className:"tble-hed-stick fa-13 border",children:e},t)))})}),(0,c.jsx)("tbody",{children:t.map(((e,t)=>(0,c.jsx)(p,{rowData:e},t)))})]}):(0,c.jsxs)("table",{className:"table",children:[(0,c.jsx)("thead",{children:(0,c.jsx)("tr",{children:["SNo","Ledger","Order(s)","Amount"].map(((e,t)=>(0,c.jsx)("th",{className:"tble-hed-stick fa-14 border",children:e},t)))})}),(0,c.jsx)("tbody",{children:t.map(((e,t)=>(0,c.jsx)(m,{row:e},t)))})]})})]})})}},96064:(e,t,o)=>{o.d(t,{c:()=>r});var l=o(27664),n=o(82496);const r=(0,l.c)((0,n.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},50952:(e,t,o)=>{o.d(t,{c:()=>r});var l=o(27664),n=o(82496);const r=(0,l.c)((0,n.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove")},84436:(e,t,o)=>{o.d(t,{c:()=>m});var l=o(45072),n=o(95656),r=o(69060),i=o(79736),s=o(21412),a=o(12556),d=o(49836),c=o(10099),u=o(33448);function x(e){return(0,u.cp)("MuiCardContent",e)}(0,c.c)("MuiCardContent",["root"]);var v=o(82496);const p=["className","component"],h=(0,a.cp)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),m=r.forwardRef((function(e,t){const o=(0,d.C)({props:e,name:"MuiCardContent"}),{className:r,component:a="div"}=o,c=(0,n.c)(o,p),u=(0,l.c)({},o,{component:a}),m=(e=>{const{classes:t}=e;return(0,s.c)({root:["root"]},x,t)})(u);return(0,v.jsx)(h,(0,l.c)({as:a,className:(0,i.c)(m.root,r),ownerState:u,ref:t},c))}))},43692:(e,t,o)=>{o.d(t,{c:()=>j});var l=o(45072),n=o(95656),r=o(69060),i=o(79736),s=o(21412),a=o(12556),d=o(49836),c=o(85624),u=o(10099),x=o(33448);function v(e){return(0,x.cp)("MuiCard",e)}(0,u.c)("MuiCard",["root"]);var p=o(82496);const h=["className","raised"],m=(0,a.cp)(c.c,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),j=r.forwardRef((function(e,t){const o=(0,d.C)({props:e,name:"MuiCard"}),{className:r,raised:a=!1}=o,c=(0,n.c)(o,h),u=(0,l.c)({},o,{raised:a}),x=(e=>{const{classes:t}=e;return(0,s.c)({root:["root"]},v,t)})(u);return(0,p.jsx)(m,(0,l.c)({className:(0,i.c)(x.root,r),elevation:a?8:void 0,ref:t,ownerState:u},c))}))}}]);
//# sourceMappingURL=3560.e2eabd8a.chunk.js.map