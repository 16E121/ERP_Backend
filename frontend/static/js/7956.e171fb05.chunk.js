"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[7956],{62344:(a,e,s)=>{s.d(e,{o$:()=>o,o5:()=>r,cF:()=>n,iI:()=>t});const l=s.p+"static/media/smt.aa4d4f940bbebff07a57.png",t={table:{style:{width:"auto",backgroundColor:"transparent"}},rows:{style:{backgroundColor:"transparent"}},headCells:{style:{backgroundColor:"#6b9080f8",color:"white",fontSize:"14px"}}},n={control:(a,e)=>({...a,height:"45px",background:"rgba(255, 255, 255, 0.322)"}),menu:(a,e)=>({...a,zIndex:9999})},o=[{id:1,headname:"Menu ID",variant:"head",align:"left",width:100},{id:2,headname:"MenuName"},{id:3,headname:"Read Rights"},{id:4,headname:"Add Rights"},{id:5,headname:"Edit Rights"},{id:6,headname:"Delete Rights"},{id:7,headname:"Print Rights"},{id:8,headname:"Action"}],r=[{dataBase:1,name:"SHANKAR TRADERS",business:"Wholesale Merchant in Dhall",address:"32, Chitrakara Street, Madurai - 01 <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:l,gstin:"33AADFS6973R1ZD",phone:"984-313-1353, 984-335-5166",fssai:"12418012000818",bankAccount:"0021 5032 0885 122",ifsc:"TMBL0000002"},{dataBase:2,name:"SMT AGRO PRODUCTS",business:"",address:"H.O: 153, Chitrakara Street, 2nd Floor, Madurai -01 <br /> G.O: 746 Puliyur, Sayanapuram, Svga <br /> Bill of Supply -Disclaimer Affidavlt Field Extemped",logo:l,gstin:"33ACMFS3420Q1ZQ",phone:"0452-4371625",fssai:"12418012000818",bankAccount:"0025 3031 0875 947",ifsc:"TMBL0000002"},{dataBase:3,name:"BHAVANI TRADERS",business:"",address:"H.O: 152-A, Chitrakara Street, Madurai -01 <br /> G.O: 30/1-Rajman Nagar, Chintamani Main Road, Mdu-01 <br /> Tax Invoice",logo:l,gstin:"33AAEFB6728J1ZG",phone:"958-559-7641, 958-559-7614",fssai:"12418012000670",bankAccount:"0021 5005 0800 309",ifsc:"TMBL0000002"}]},20160:(a,e,s)=>{s.r(e),s.d(e,{default:()=>g});var l=s(69060),t=s(43692),n=s(85624),o=s(11096),r=s(84436),d=s(77536),i=s(30612),c=s(62344),m=s(27664),u=s(82496);const v=(0,m.c)((0,u.jsx)("circle",{cx:"12",cy:"12",r:"8"}),"FiberManualRecord"),p=(0,m.c)([(0,u.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,u.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime"),h=(0,m.c)((0,u.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"}),"SmsOutlined");var x=s(33452),b=s(1908),N=s(39308);const g=a=>{let{loadingOn:e,loadingOff:s}=a;const m=localStorage.getItem("user"),g=JSON.parse(m),[f,j]=(0,l.useState)([]),[y,k]=(0,l.useState)([]),[_,C]=(0,l.useState)([]),{contextObj:T}=(0,l.useContext)(d.a),[M,S]=(0,l.useState)({startDate:(0,N.SO)(1),endDate:(0,N.Q7)(),Emp_Id:null===g||void 0===g?void 0:g.UserId,Emp_Name:null===g||void 0===g?void 0:g.Name,Task_Id:"",Task_Name:"Select Task"}),R=(0,l.useRef)();(0,l.useEffect)((()=>{e&&e(),(0,b.q)({address:"taskManagement/task/work?Emp_Id=".concat(null===M||void 0===M?void 0:M.Emp_Id,"&from=").concat(M.startDate,"&to=").concat(M.endDate,"&Task_Id=").concat(null===M||void 0===M?void 0:M.Task_Id)}).then((a=>{if(a.success){var e;const s=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.reduce(((a,e)=>{const s=(0,N.Q7)(null===e||void 0===e?void 0:e.Work_Dt);return a[s]||(a[s]=[]),a[s].push(e),a}),{});j(s)}})).catch((a=>console.error(a))).finally((()=>{s&&s()}))}),[null===g||void 0===g?void 0:g.UserId,M]),(0,l.useEffect)((()=>{(0,b.q)({address:"taskManagement/task/assignEmployee/task/dropDown"}).then((a=>{a.success&&C(a.data)})).catch((a=>console.error(a)))}),[]),(0,l.useEffect)((()=>{1===Number(null===T||void 0===T?void 0:T.Print_Rights)&&(0,b.q)({address:"masters/users/employee/dropDown?Company_id=".concat(null===g||void 0===g?void 0:g.Company_id)}).then((a=>{var e;a.success&&k(null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.sort(((a,e)=>String(null===a||void 0===a?void 0:a.Name).localeCompare(null===e||void 0===e?void 0:e.Name))))})).catch((a=>console.error(a)))}),[null===T||void 0===T?void 0:T.Print_Rights,null===g||void 0===g?void 0:g.Company_id]);const A=a=>{const[e,s]=a.split(":").map(Number);let l=e%12;l=l||12;const t=e<12?"AM":"PM",n=s<10?"0"+s:s;return"".concat(l<10?"0"+l:l,":").concat(n," ").concat(t)},w=(0,x.useReactToPrint)({content:()=>R.current}),D=a=>["","bg-primary","bg-warning","bg-success","bg-danger"][Number(a)],P=()=>(0,u.jsx)("div",{className:"px-2",children:Object.keys(f).map((a=>{var e;return(0,u.jsxs)("div",{className:"cus-card pb-0",children:[(0,u.jsxs)("h6",{className:"p-3 mb-0 bg-light",children:["Date:",(0,N.uy)(a)," ( "+(null===(e=f[a])||void 0===e?void 0:e.length)+" Tasks )"]}),(0,u.jsx)("hr",{className:"m-0"}),(0,u.jsx)("div",{className:"table-responsive day-abstract-table",children:(0,u.jsx)("table",{className:"table",children:(0,u.jsx)("tbody",{children:f[a].map(((a,e)=>{var s,l;return(0,u.jsxs)("tr",{children:[(0,u.jsxs)("td",{style:{verticalAlign:"middle"},children:[(0,u.jsx)(v,{className:"fa-in text-primary"})," ",a.Task_Name]}),(0,u.jsxs)("td",{style:{verticalAlign:"middle"},children:[(0,u.jsx)(p,{className:"fa-15"})," ",a.Tot_Minutes," Minutes"]}),(0,u.jsx)("td",{className:"fa-14 ",style:{verticalAlign:"middle"},children:A(a.Start_Time)+" - "+A(a.End_Time)}),(0,u.jsx)("td",{style:{verticalAlign:"middle"},children:(0,u.jsx)("span",{className:"badge fa-10 ms-2 p-1 ".concat(D(null===a||void 0===a?void 0:a.Work_Status)),children:null===a||void 0===a?void 0:a.WorkStatus})}),(0,u.jsx)("td",{style:{verticalAlign:"middle"},children:(0,u.jsxs)("p",{className:"mb-0 fa-14 text-muted",children:[(0,u.jsx)(h,{className:"fa-in"}),(0,u.jsxs)("span",{children:["\u2003",a.Work_Done]})]})}),(0,u.jsx)("td",{style:{verticalAlign:"middle"},children:(null===a||void 0===a||null===(s=a.Work_Param)||void 0===s?void 0:s.length)>0&&(0,u.jsx)("div",{className:"cus-card p-2 m-0",children:null===a||void 0===a||null===(l=a.Work_Param)||void 0===l?void 0:l.map(((a,e)=>(0,u.jsxs)("p",{className:"mb-0 fa-14 d-flex",children:[(0,u.jsxs)("span",{className:"flex-grow-1",children:[null===a||void 0===a?void 0:a.Paramet_Name,":"]}),(0,u.jsx)("span",{className:"text-primary",children:isNaN(null===a||void 0===a?void 0:a.Current_Value)||"number"!==(null===a||void 0===a?void 0:a.Paramet_Data_Type)?null===a||void 0===a?void 0:a.Current_Value:Number(null===a||void 0===a?void 0:a.Current_Value).toLocaleString("en-IN")})]},e)))})})]},e)}))})})}),(0,u.jsx)("div",{className:"row mb-2 px-3 day-abstract-card d-none",children:f[a].map((a=>{var e,s,l,t;return(0,u.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 p-2 py-0",children:(0,u.jsxs)("div",{className:"cus-card shadow-sm p-3",children:[(0,u.jsx)("p",{className:"mb-2 fa-15 fw-bold text-secondary",children:a.Task_Name+" "}),(0,u.jsxs)("p",{className:"mb-2 fa-14 text-secondary",children:[A(a.Start_Time)+" - "+A(a.End_Time),(0,u.jsx)("span",{className:"badge fa-10 ms-2 p-1 ".concat(D(null===a||void 0===a?void 0:a.Work_Status)),children:null===a||void 0===a?void 0:a.WorkStatus})]}),(0,u.jsxs)("p",{className:"mb-2 fa-14 text-secondary",children:[(0,u.jsx)(p,{className:"fa-15"})," ",a.Tot_Minutes," Minutes"]}),(0,u.jsxs)("p",{className:"mb-0 fa-14 text-muted",children:[(0,u.jsx)("span",{className:"fw-bold",children:"Summary : "}),(0,u.jsx)("br",{}),(0,u.jsxs)("span",{children:["\u2003",a.Work_Done]})]}),(null===a||void 0===a||null===(e=a.Work_Param)||void 0===e?void 0:e.length)>0&&(0,u.jsxs)("p",{className:"mb-1 text-secondary fa-14 fw-bold",children:["Parameters ( ",null===a||void 0===a||null===(s=a.Work_Param)||void 0===s?void 0:s.length," )"]}),(null===a||void 0===a||null===(l=a.Work_Param)||void 0===l?void 0:l.length)>0&&(0,u.jsx)("hr",{className:"m-0"}),null===a||void 0===a||null===(t=a.Work_Param)||void 0===t?void 0:t.map(((a,e)=>(0,u.jsxs)("p",{className:"mb-0 fa-14 d-flex flex-wrap",children:[(0,u.jsxs)("span",{className:"flex-grow-1",children:[null===a||void 0===a?void 0:a.Paramet_Name,":"]}),(0,u.jsxs)("span",{children:[" ",null===a||void 0===a?void 0:a.Current_Value]})]},e)))]})},a.Work_Id)}))})]},a)}))});return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(t.c,{component:n.c,variant:"elevation",children:[(0,u.jsx)(o.c,{title:"Work Abstract",className:"pb-0"}),(0,u.jsxs)(r.c,{className:"pt-2",style:{minHeight:"500px"},children:[(0,u.jsxs)("div",{className:"row",children:[(0,u.jsxs)("div",{className:"col-xxl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,u.jsx)("label",{className:"pb-2",children:"From: "}),(0,u.jsx)("input",{type:"date",className:"cus-inpt",value:M.startDate,onChange:a=>S({...M,startDate:a.target.value})})]}),(0,u.jsxs)("div",{className:"col-xxl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,u.jsx)("label",{className:"pb-2",children:"To: "}),(0,u.jsx)("input",{type:"date",className:"cus-inpt",value:M.endDate,onChange:a=>S({...M,endDate:a.target.value})})]}),(0,u.jsxs)("div",{className:"col-xxl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,u.jsx)("label",{className:"pb-2",children:"User "}),(0,u.jsx)(i.cp,{value:{value:null===M||void 0===M?void 0:M.Emp_Id,label:null===M||void 0===M?void 0:M.Emp_Name},onChange:a=>S({...M,Emp_Id:a.value,Emp_Name:a.label}),options:[{value:null===g||void 0===g?void 0:g.UserId,label:null===g||void 0===g?void 0:g.Name},{value:"",label:"ALL EMPLOYEE"},...y.map((a=>({value:a.UserId,label:a.Name})))],styles:c.cF,isDisabled:0===Number(null===T||void 0===T?void 0:T.Print_Rights),isSearchable:!0,placeholder:"User Name"})]}),(0,u.jsxs)("div",{className:"col-xxl-2 col-lg-3 col-md-4 col-sm-6 p-2",children:[(0,u.jsx)("label",{className:"pb-2",children:"Task "}),(0,u.jsx)(i.cp,{value:{value:null===M||void 0===M?void 0:M.Task_Id,label:null===M||void 0===M?void 0:M.Task_Name},onChange:a=>S({...M,Task_Id:a.value,Task_Name:a.label}),options:[{value:"",label:"All Task"},..._.map((a=>({value:a.Task_Id,label:a.Task_Name})))],styles:c.cF,isSearchable:!0,placeholder:"Task Name"})]}),(0,u.jsx)("div",{className:"col-xxl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-end p-2",children:(0,u.jsx)("button",{className:"btn btn-primary rounded-5 px-3",onClick:w,children:"Print PDF"})})]}),(0,u.jsx)(P,{}),(0,u.jsx)("div",{className:"d-none px-3",children:(0,u.jsxs)("div",{className:"px-3",ref:R,children:[(0,u.jsxs)("h5",{children:["Work Abstract Of ",M.Emp_Name," "]}),(0,u.jsxs)("p",{className:"mb-0",children:["From ",(0,N.uy)(M.startDate),"\xa0 - To: ",(0,N.uy)(M.endDate)]}),(0,u.jsx)(P,{})]})})]})]})})}},84436:(a,e,s)=>{s.d(e,{c:()=>x});var l=s(45072),t=s(95656),n=s(69060),o=s(79736),r=s(21412),d=s(12556),i=s(49836),c=s(10099),m=s(33448);function u(a){return(0,m.cp)("MuiCardContent",a)}(0,c.c)("MuiCardContent",["root"]);var v=s(82496);const p=["className","component"],h=(0,d.cp)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(a,e)=>e.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),x=n.forwardRef((function(a,e){const s=(0,i.C)({props:a,name:"MuiCardContent"}),{className:n,component:d="div"}=s,c=(0,t.c)(s,p),m=(0,l.c)({},s,{component:d}),x=(a=>{const{classes:e}=a;return(0,r.c)({root:["root"]},u,e)})(m);return(0,v.jsx)(h,(0,l.c)({as:d,className:(0,o.c)(x.root,n),ownerState:m,ref:e},c))}))},11096:(a,e,s)=>{s.d(e,{c:()=>j});var l=s(95656),t=s(45072),n=s(69060),o=s(79736),r=s(21412),d=s(56880),i=s(49836),c=s(12556),m=s(10099),u=s(33448);function v(a){return(0,u.cp)("MuiCardHeader",a)}const p=(0,m.c)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var h=s(82496);const x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],b=(0,c.cp)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>(0,t.c)({["& .".concat(p.title)]:e.title,["& .".concat(p.subheader)]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),N=(0,c.cp)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),g=(0,c.cp)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=(0,c.cp)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),j=n.forwardRef((function(a,e){const s=(0,i.C)({props:a,name:"MuiCardHeader"}),{action:n,avatar:c,className:m,component:u="div",disableTypography:p=!1,subheader:j,subheaderTypographyProps:y,title:k,titleTypographyProps:_}=s,C=(0,l.c)(s,x),T=(0,t.c)({},s,{component:u,disableTypography:p}),M=(a=>{const{classes:e}=a;return(0,r.c)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,e)})(T);let S=k;null==S||S.type===d.c||p||(S=(0,h.jsx)(d.c,(0,t.c)({variant:c?"body2":"h5",className:M.title,component:"span",display:"block"},_,{children:S})));let R=j;return null==R||R.type===d.c||p||(R=(0,h.jsx)(d.c,(0,t.c)({variant:c?"body2":"body1",className:M.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:R}))),(0,h.jsxs)(b,(0,t.c)({className:(0,o.c)(M.root,m),as:u,ref:e,ownerState:T},C,{children:[c&&(0,h.jsx)(N,{className:M.avatar,ownerState:T,children:c}),(0,h.jsxs)(f,{className:M.content,ownerState:T,children:[S,R]}),n&&(0,h.jsx)(g,{className:M.action,ownerState:T,children:n})]}))}))},43692:(a,e,s)=>{s.d(e,{c:()=>b});var l=s(45072),t=s(95656),n=s(69060),o=s(79736),r=s(21412),d=s(12556),i=s(49836),c=s(85624),m=s(10099),u=s(33448);function v(a){return(0,u.cp)("MuiCard",a)}(0,m.c)("MuiCard",["root"]);var p=s(82496);const h=["className","raised"],x=(0,d.cp)(c.c,{name:"MuiCard",slot:"Root",overridesResolver:(a,e)=>e.root})((()=>({overflow:"hidden"}))),b=n.forwardRef((function(a,e){const s=(0,i.C)({props:a,name:"MuiCard"}),{className:n,raised:d=!1}=s,c=(0,t.c)(s,h),m=(0,l.c)({},s,{raised:d}),u=(a=>{const{classes:e}=a;return(0,r.c)({root:["root"]},v,e)})(m);return(0,p.jsx)(x,(0,l.c)({className:(0,o.c)(u.root,n),elevation:d?8:void 0,ref:e,ownerState:m},c))}))}}]);
//# sourceMappingURL=7956.e171fb05.chunk.js.map