"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[2344],{42344:(e,l,i)=>{i.r(l),i.d(l,{default:()=>y});var d=i(69060),n=i(43692),o=i(89e3),a=i(84436),s=i(15786),r=i(78092),t=i(3358),v=i(82656),u=i(26773),c=i(4488),m=i(90048),b=i(33808),_=i(70288),x=i(58985),h=i(36992),p=i(18256),j=i(29720),N=i(61584),T=i(44048),f=i(39308),C=i(56480),I=i(51560),g=i(77536),J=i(1908),S=i(82496);const y=()=>{var e,l,i,y,w,k;const B=JSON.parse(localStorage.getItem("user")),F=(0,I.i6)(),{contextObj:D}=(0,d.useContext)(g.a),A=(0,I.IT)().state,Q={Report_Type_Id:"",reportName:"",tables:[],tableJoins:[],currentTab:"tbl_Q_Pay_Summarry",previewDialog:!1,createdBy:B.UserId},[O,R]=(0,d.useState)(Q),[V,q]=(0,d.useState)([]),E=null===O||void 0===O||null===(e=O.tables)||void 0===e?void 0:e.reduce(((e,l)=>e+(Boolean(Number(null===l||void 0===l?void 0:l.isChecked))?1:0)),0),K=null===O||void 0===O||null===(l=O.tables)||void 0===l?void 0:l.reduce(((e,l)=>{var i;return e+(Boolean(Number(null===l||void 0===l?void 0:l.isChecked))?null===l||void 0===l||null===(i=l.columns)||void 0===i?void 0:i.reduce(((e,l)=>e+((0,f.Qr)(null===l||void 0===l?void 0:l.isVisible,1)?1:0)),0):0)}),0),M=(0,S.jsx)("span",{className:"p-2 mt-3 border rounded-3 d-inline-block w-auto",children:(0,S.jsx)("table",{children:(0,S.jsxs)("tbody",{children:[(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{className:" border-end",children:"Tables Selected"}),(0,S.jsx)("td",{className:"px-2 blue-text",children:E})]}),(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{className:" border-end",children:"Columns Selected\u2003\u2003"}),(0,S.jsx)("td",{className:"px-2 blue-text",children:K})]})]})})});(0,d.useEffect)((()=>{const e=null===A||void 0===A?void 0:A.ReportState;(0,f.CY)(e)&&R((l=>{var i,d,n,o;return{...l,Report_Type_Id:null!==(i=null===e||void 0===e?void 0:e.Report_Type_Id)&&void 0!==i?i:"",reportName:null!==(d=null===e||void 0===e?void 0:e.reportName)&&void 0!==d?d:"",tables:null!==(n=null===e||void 0===e?void 0:e.tables)&&void 0!==n?n:[],createdBy:null!==(o=null===e||void 0===e?void 0:e.createdBy)&&void 0!==o?o:null===B||void 0===B?void 0:B.UserId}}))}),[]),(0,d.useEffect)((()=>{(0,J.q)({address:"reports/tablesAndColumns"}).then((e=>{null!==e&&void 0!==e&&e.success&&q(null===e||void 0===e?void 0:e.data)})).catch((e=>console.log(e)))}),[]);const P=(e,l,i)=>{R((d=>{const n=[...d.tableJoins],o={...n[l]};return o[i]=e,"Join_First_Table_Id"===i&&(o.Join_First_Table_Column=""),"Join_Second_Table_Id"===i&&(o.Join_Second_Table_Column=""),(null===o||void 0===o?void 0:o.Join_First_Table_Id)===(null===o||void 0===o?void 0:o.Join_Second_Table_Id)&&(o.Join_Second_Table_Id=""),n[l]=o,{...d,tableJoins:[...n]}}))};return(0,f.Qr)(null===D||void 0===D?void 0:D.Add_Rights,1)&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(n.c,{children:[(0,S.jsxs)("div",{className:"p-2 border-bottom fa-16 fw-bold d-flex justify-content-between align-items-center",children:[(0,S.jsx)("span",{className:"text-primary text-uppercase ps-3",children:null!==O&&void 0!==O&&O.Report_Type_Id?"Modify Report Template":"Report Templates Creation"}),(0,S.jsx)(o.c,{variant:"outlined",onClick:()=>F(-1),startIcon:(0,S.jsx)(b.c,{}),children:"Back"})]}),(0,S.jsxs)(a.c,{children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{className:"w-100",children:"Report Name"}),(0,S.jsx)("input",{type:"text",className:"cus-inpt w-auto",value:O.reportName,onChange:e=>R({...O,reportName:e.target.value})})]}),M,(0,S.jsx)(T.c,{className:"d-flex flex-wrap mt-3",children:(0,S.jsxs)(p.cp,{value:O.currentTab,children:[(0,S.jsx)(j.c,{indicatorColor:"transparent",onChange:(e,l)=>R({...O,currentTab:l}),variant:"scrollable",scrollButtons:"auto",orientation:"vertical",allowScrollButtonsMobile:!0,sx:{maxHeight:"400px"},children:V.map(((e,l)=>{var i;return(0,S.jsx)(s.c,{sx:O.currentTab===(null===e||void 0===e?void 0:e.Table_Name)?{backgroundColor:"#c6d7eb"}:{},className:Boolean(null===(i=O.tables.find((l=>l.Table_Name===(null===e||void 0===e?void 0:e.Table_Name))))||void 0===i?void 0:i.isChecked)?"text-success fw-bold":"text-primary",label:null===e||void 0===e?void 0:e.AliasName,value:null===e||void 0===e?void 0:e.Table_Name},l)}))}),V.map(((e,l)=>{var i,d;return(0,S.jsxs)(N.c,{value:null===e||void 0===e?void 0:e.Table_Name,className:"flex-grow-1 p-3 border rounded-2",children:[(0,S.jsxs)("div",{className:"d-flex align-items-center mb-4 border-bottom",children:[(0,S.jsx)(r.c,{checked:Boolean(null===(i=O.tables.find((l=>l.Table_Name===(null===e||void 0===e?void 0:e.Table_Name))))||void 0===i?void 0:i.isChecked),onChange:l=>{return i=null===e||void 0===e?void 0:e.Table_Name,d=l.target.checked,n=null===e||void 0===e?void 0:e.AliasName,void R((e=>{var l,o,a;const s=[...e.tables],r=s.findIndex((e=>e.Table_Name===i)),t=[],v=null===V||void 0===V?void 0:V.findIndex((e=>e.Table_Name===i)),u=null===(l=V[v])||void 0===l||null===(o=l.Columns)||void 0===o?void 0:o.findIndex((e=>(0,f.Qr)(null===e||void 0===e?void 0:e.IS_Default,1))),c=-1!==u?null===(a=V[v])||void 0===a?void 0:a.Columns[u]:{};var m;return-1!==u&&(c.Order_By="",c.isVisible=!0),t.push(c),-1!==r?(s[r].isChecked=d,s[r].columns=d?t:[]):s.push({Table_Id:(null===V||void 0===V||null===(m=V.find((e=>(null===e||void 0===e?void 0:e.Table_Name)===i)))||void 0===m?void 0:m.Table_Id)||"",Table_Name:i,AliasName:n,isChecked:d,columns:t}),{...e,tables:s.filter((e=>Boolean(Number(null===e||void 0===e?void 0:e.isChecked))))}}));var i,d,n}}),(0,S.jsxs)("h6",{className:"fa-13 mb-0 fw-bold ",children:[null===e||void 0===e?void 0:e.AliasName," TABLE"]})]}),(0,S.jsx)("div",{className:"cus-grid",children:null===e||void 0===e||null===(d=e.Columns)||void 0===d?void 0:d.map(((l,i)=>{var d,o,a,s,t,v;return(0,S.jsx)("div",{children:(0,S.jsxs)(n.c,{className:"p-2 d-flex justify-content-between align-items-center flex-wrap ".concat(i%2===0?"bg-light":""),children:[(0,S.jsxs)("div",{className:"d-flex justify-content-between align-items-center flex-wrap",children:[(0,S.jsx)(r.c,{checked:Boolean(null===l||void 0===l?void 0:l.IS_Default)||Boolean(null===(d=O.tables.find((l=>l.Table_Name===(null===e||void 0===e?void 0:e.Table_Name))))||void 0===d||null===(o=d.columns)||void 0===o||null===(a=o.find((e=>e.Column_Name===(null===l||void 0===l?void 0:l.Column_Name))))||void 0===a?void 0:a.isVisible),disabled:Boolean(null===l||void 0===l?void 0:l.IS_Default),onChange:i=>{return d=null===e||void 0===e?void 0:e.Table_Name,n=l,o=i.target.checked,void R((e=>{const l=[...e.tables],i=l.findIndex((e=>e.Table_Name===d));if(-1!==i){const e=l[i].columns||[],d=null===e||void 0===e?void 0:e.findIndex((e=>(null===e||void 0===e?void 0:e.Column_Name)===(null===n||void 0===n?void 0:n.Column_Name)));-1!==d?e[d].isVisible=o?1:0:e.push({...n,Order_By:"",isVisible:o?1:0}),l[i].columns=null===e||void 0===e?void 0:e.filter((e=>(0,f.Qr)(null===e||void 0===e?void 0:e.isVisible,1)))}return{...e,tables:l}}));var d,n,o}}),(0,S.jsx)("h6",{className:"fa-12 m-0 fw-bold",children:null===l||void 0===l?void 0:l.Column_Name})]}),(0,S.jsx)("input",{type:"number",className:"p-1 border cus-inpt ".concat(i%2!==0?"bg-light":""),style:{width:"80px"},placeholder:"Order",value:(null===(s=O.tables.find((l=>l.Table_Name===(null===e||void 0===e?void 0:e.Table_Name))))||void 0===s||null===(t=s.columns)||void 0===t||null===(v=t.find((e=>e.Column_Name===(null===l||void 0===l?void 0:l.Column_Name))))||void 0===v?void 0:v.Order_By)||"",onChange:i=>{return d=null===e||void 0===e?void 0:e.Table_Name,n=l,o=i.target.value,void R((e=>{const l=[...e.tables],i=l.findIndex((e=>e.Table_Name===d));if(-1!==i){const e=l[i].columns||[],d=null===e||void 0===e?void 0:e.findIndex((e=>(null===e||void 0===e?void 0:e.Column_Name)===(null===n||void 0===n?void 0:n.Column_Name)));-1!==d?e[d].Order_By=o:e.push({...n,Order_By:o,isVisible:!0}),l[i].columns=e}return{...e,tables:l}}));var d,n,o}})]})},i)}))})]},l)}))]})})]}),(0,S.jsx)("hr",{className:"mt-2 mb-0"}),(0,S.jsx)("div",{className:"p-3 d-flex justify-content-end",children:(0,S.jsx)(t.c,{title:K<=4&&"Select Minimum 5 Columns",children:(0,S.jsx)("span",{children:(0,S.jsx)(o.c,{variant:"outlined",startIcon:(0,S.jsx)(_.c,{}),disabled:!(null!==O&&void 0!==O&&O.reportName)||0===E||K<=4,onClick:K>50?()=>C.m4.warn("Maximum 50 Column limit exceeded"):()=>(()=>{var e;const l=null===(e=O.tables)||void 0===e?void 0:e.reduce(((e,l)=>e+(Boolean(null===l||void 0===l?void 0:l.isChecked)?1:0)),0);R((e=>({...e,previewDialog:!0,tableJoins:l>1?Array.from({length:(0,f.od)(l,1)}).map(((e,l)=>({Join_First_Table_Id:"",Join_First_Table_Column:"",Join_Second_Table_Id:"",Join_Second_Table_Column:""}))):[]})))})(),children:"Preview"})})})})]}),(0,S.jsxs)(v.c,{open:null===O||void 0===O?void 0:O.previewDialog,onClose:()=>R((e=>({...e,previewDialog:!1}))),fullScreen:!0,children:[(0,S.jsx)(u.c,{children:"Define Table Joins"}),(0,S.jsxs)("form",{onSubmit:e=>{e.preventDefault(),(()=>{var e;const l=new Set;if(null===(e=O.tableJoins)||void 0===e||e.forEach((e=>{l.add(e.Join_First_Table_Id),l.add(e.Join_Second_Table_Id)})),l.size!==O.tableJoins.length+1&&O.tables.length>1)return C.m4.error("Invalid table joins");R((e=>({...e,previewDialog:!1}))),(0,J.q)({address:"reports/template",method:null!==O&&void 0!==O&&O.Report_Type_Id?"PUT":"POST",bodyData:O}).then((e=>{null!==e&&void 0!==e&&e.success?(R(Q),F(-1),C.m4.success(e.message)):C.m4.error(e.message)})).catch((e=>console.log(e)))})()},children:[(0,S.jsxs)(c.c,{children:[M,(0,S.jsx)("div",{className:"table-responsive",children:(0,S.jsxs)("table",{className:"table",children:[(0,S.jsx)("thead",{children:(0,S.jsx)("tr",{children:null===O||void 0===O||null===(i=O.tables)||void 0===i?void 0:i.map(((e,l)=>{var i;return(0,S.jsx)(d.Fragment,{children:(0,S.jsxs)("th",{className:"border fa-14 text-center",children:[null===e||void 0===e?void 0:e.AliasName," ( ",null===e||void 0===e||null===(i=e.columns)||void 0===i?void 0:i.length," )"]})},l)}))})}),(0,S.jsx)("tbody",{children:(0,S.jsx)("tr",{children:null===O||void 0===O||null===(y=O.tables)||void 0===y?void 0:y.map(((e,l)=>{var i;return(0,S.jsx)(d.Fragment,{children:(0,S.jsx)("td",{className:"border fa-13 text-center",children:null===e||void 0===e||null===(i=e.columns)||void 0===i?void 0:i.map(((e,l)=>(0,S.jsx)("p",{children:null===e||void 0===e?void 0:e.Column_Name},l)))})},l)}))})})]})}),(null===O||void 0===O||null===(w=O.tables)||void 0===w?void 0:w.length)>1&&(0,S.jsx)("div",{className:"p-2 cus-grid",children:null===O||void 0===O||null===(k=O.tableJoins)||void 0===k?void 0:k.map(((e,l)=>{var i,d,n,o,a,s,r,t;return(0,S.jsxs)("div",{className:" p-2",children:[(0,S.jsxs)("h5",{className:"border-bottom pb-2 text-center",children:["JOIN - ",l+1]}),(0,S.jsx)("div",{className:"p-2 mt-3 border rounded-3 ",children:(0,S.jsx)("table",{className:"w-100",children:(0,S.jsxs)("tbody",{children:[(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{className:"fa-13 blue-text",children:"Table - 1"}),(0,S.jsx)("td",{className:"fa-13 ",children:(0,S.jsxs)("select",{value:null===e||void 0===e?void 0:e.Join_First_Table_Id,className:"cus-inpt ",onChange:e=>P(e.target.value,l,"Join_First_Table_Id"),required:!0,children:[(0,S.jsx)("option",{value:"",children:"Select"}),null===O||void 0===O||null===(i=O.tables)||void 0===i?void 0:i.map(((e,l)=>{var i;return(0,S.jsx)("option",{value:null===e||void 0===e?void 0:e.Table_Id,disabled:null===O||void 0===O||null===(i=O.tableJoins)||void 0===i?void 0:i.find((l=>(0,f.Qr)(l.Join_First_Table_Id,null===e||void 0===e?void 0:e.Table_Id))),children:null===e||void 0===e?void 0:e.AliasName},l)}))]})})]}),(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{className:"fa-13 blue-text",children:"Table - 2"}),(0,S.jsx)("td",{className:"fa-13 ",children:(0,S.jsxs)("select",{value:null===e||void 0===e?void 0:e.Join_Second_Table_Id,className:"cus-inpt ",onChange:e=>P(e.target.value,l,"Join_Second_Table_Id"),required:!0,children:[(0,S.jsx)("option",{value:"",children:"Select"}),null===O||void 0===O||null===(d=O.tables)||void 0===d?void 0:d.map(((l,i)=>(0,S.jsx)("option",{value:null===l||void 0===l?void 0:l.Table_Id,disabled:(0,f.Qr)(null===e||void 0===e?void 0:e.Join_First_Table_Id,null===l||void 0===l?void 0:l.Table_Id),children:null===l||void 0===l?void 0:l.AliasName},i)))]})})]}),(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{className:"fa-13 blue-text",children:"Table - 1 Key"}),(0,S.jsx)("td",{className:"fa-13 ",children:(0,S.jsxs)("select",{value:null===e||void 0===e?void 0:e.Join_First_Table_Column,className:"cus-inpt ",onChange:e=>P(e.target.value,l,"Join_First_Table_Column"),required:!0,children:[(0,S.jsx)("option",{value:"",children:"Select"}),(null===e||void 0===e?void 0:e.Join_First_Table_Id)&&(null===(n=[...null===O||void 0===O?void 0:O.tables])||void 0===n||null===(o=n.find((l=>(0,f.Qr)(null===l||void 0===l?void 0:l.Table_Id,null===e||void 0===e?void 0:e.Join_First_Table_Id))))||void 0===o||null===(a=o.columns)||void 0===a?void 0:a.map(((e,l)=>(0,f.Qr)(null===e||void 0===e?void 0:e.IS_Join_Key,1)&&(0,S.jsx)("option",{value:null===e||void 0===e?void 0:e.Column_Name,children:null===e||void 0===e?void 0:e.Column_Name},l))))]})})]}),(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{className:"fa-13 blue-text",children:"Table - 2 Key"}),(0,S.jsx)("td",{className:"fa-13 ",children:(0,S.jsxs)("select",{value:null===e||void 0===e?void 0:e.Join_Second_Table_Column,className:"cus-inpt ",onChange:e=>P(e.target.value,l,"Join_Second_Table_Column"),required:!0,children:[(0,S.jsx)("option",{value:"",children:"Select"}),(null===e||void 0===e?void 0:e.Join_Second_Table_Id)&&(null===(s=[...null===O||void 0===O?void 0:O.tables])||void 0===s||null===(r=s.find((l=>(0,f.Qr)(null===l||void 0===l?void 0:l.Table_Id,null===e||void 0===e?void 0:e.Join_Second_Table_Id))))||void 0===r||null===(t=r.columns)||void 0===t?void 0:t.map(((e,l)=>(0,f.Qr)(null===e||void 0===e?void 0:e.IS_Join_Key,1)&&(0,S.jsx)("option",{value:null===e||void 0===e?void 0:e.Column_Name,children:null===e||void 0===e?void 0:e.Column_Name},l))))]})})]})]})})})]},l)}))})]}),(0,S.jsxs)(m.c,{children:[(0,S.jsx)(o.c,{onClick:()=>R((e=>({...e,previewDialog:!1}))),type:"button",startIcon:(0,S.jsx)(x.c,{}),children:"Back"}),(0,S.jsx)(o.c,{type:"submit",startIcon:(0,S.jsx)(h.c,{}),children:"Submit"})]})]})]})]})}}}]);
//# sourceMappingURL=2344.917670a6.chunk.js.map