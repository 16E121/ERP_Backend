"use strict";(self.webpackChunkerp=self.webpackChunkerp||[]).push([[8656],{63528:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var r=a(69060),n=a(86e3),s=a(12572),o=a(3358),c=a(5548),i=a(89e3),l=(a(21680),a(41978)),d=a(56480),u=a(1908),m=a(39308),p=a(82496);function v(e){e.target.value=e.target.value.replace(/[^0-9]/g,"")}const h=e=>{let{screen:t,setScreen:a,underArray:n,row:s,refresh:o}=e;const c=JSON.parse(localStorage.getItem("user")),i={Branch_Id:0,Company_Id:0,Cust_Id:"",Cust_No:"",Customer_name:"",Contact_Person:"",Mobile_no:"",Email_Id:"",Address1:"",Address2:"",Address3:"",Address4:"",Pincode:"",State:"",Country:"India",Gstin:"",Under_Id:"",User_Mgt_Id:"",User_Type_Id:"",Entry_By:null===c||void 0===c?void 0:c.UserId},[l,h]=(0,r.useState)(i),[b,g]=(0,r.useState)([]);(0,r.useEffect)((()=>{(0,u.q)({address:"masters/branch/dropDown?User_Id=".concat(null===c||void 0===c?void 0:c.UserId,"&Company_id=").concat(null===c||void 0===c?void 0:c.Company_id)}).then((e=>{e.success&&g(e.data)})).catch((e=>console.error(e)))}),[]),(0,r.useEffect)((()=>{const{Branch_Id:e,Company_Id:t,Cust_Id:a,Cust_No:r,Customer_name:n,Contact_Person:o,Mobile_no:c,Email_Id:i,Address1:l,Address2:d,Address3:u,Address4:m,Pincode:p,State:v,Country:b,Gstin:g,Under_Id:y,User_Mgt_Id:x,User_Type_Id:I}=s;h((s=>({...s,Branch_Id:e,Company_Id:t,Cust_Id:a,Cust_No:r,Customer_name:n,Contact_Person:o,Mobile_no:c,Email_Id:i,Address1:l,Address2:d,Address3:u,Address4:m,Pincode:p,State:v,Country:b,Gstin:g,Under_Id:y,User_Mgt_Id:x,User_Type_Id:I})))}),[s]);const y=()=>{h(i)},x=n.filter((e=>(0,m.Qr)(e.User_Type_Id,5)&&(0,m.Qr)(e.Id,null===l||void 0===l?void 0:l.Cust_Id))).map((e=>({value:e.Cust_Id,label:e.Customer_name}))),I=[{label:"Name",elem:"input",placeholder:"Mr / Ms",event:e=>h({...l,Customer_name:e.target.value}),required:!0,value:l.Customer_name},{label:"Mobile",elem:"input",oninput:e=>v(e),placeholder:"Enter Mobile Number",event:e=>h({...l,Mobile_no:e.target.value}),required:!0,value:l.Mobile_no,max:10},{label:"Branch",elem:"select",options:[{value:0,label:" - Select - ",disabled:!0,selected:!0},...b.map((e=>({value:Number(e.BranchId),label:e.BranchName})))],class:"selectpicker",data:!0,event:e=>h({...l,Branch_Id:parseInt(e.target.value)}),required:!0,value:l.Branch_Id},{label:"User Type",elem:"select",options:[{value:"",label:" - Select - ",disabled:!0,selected:!0},{value:4,label:"CUSTOMER"},{value:5,label:"BROKER"}],event:e=>h({...l,User_Type_Id:parseInt(e.target.value)}),required:!0,value:l.User_Type_Id},{label:"Contact Person",elem:"input",placeholder:"",event:e=>h({...l,Contact_Person:e.target.value}),required:!0,value:l.Contact_Person},{label:"Email ID",elem:"input",type:"email",placeholder:"emailaddress@mail.com",event:e=>h({...l,Email_Id:e.target.value}),required:!1,value:l.Email_Id},{label:"Gstin",elem:"input",placeholder:"",event:e=>h({...l,Gstin:e.target.value}),required:!1,value:l.Gstin,max:15},{label:"Under",elem:"select",options:[{value:"",label:" - Select - ",disabled:!0,selected:!0},{value:0,label:" Primary "},...x],class:"selectpicker",data:!0,event:e=>h({...l,Under_Id:parseInt(e.target.value)}),required:!0,value:l.Under_Id},{label:"Pincode",elem:"input",placeholder:"654321",oninput:e=>v(e),event:e=>h({...l,Pincode:e.target.value}),required:!1,value:l.Pincode,max:6},{label:"State",elem:"input",placeholder:"",event:e=>h({...l,State:e.target.value}),required:!1,value:l.State},{label:"Address Line 1",elem:"textarea",event:e=>h({...l,Address1:e.target.value}),required:!0,value:l.Address1},{label:"Address Line 2",elem:"textarea",event:e=>h({...l,Address2:e.target.value}),value:l.Address2},{label:"Address Line 3",elem:"textarea",event:e=>h({...l,Address3:e.target.value}),value:l.Address3},{label:"Address Line 4",elem:"textarea",event:e=>h({...l,Address4:e.target.value}),value:l.Address4}],C=()=>{for(const e of I)if(e.required&&""===e.value)return"".concat(e.label," is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l.Email_Id)&&""!==l.Email_Id)return"Invalid email address";if(!/^\d{10}$/.test(l.Mobile_no))return"Invalid phone number";if(!/^\d{15}$/.test(l.Gstin)&&""!==l.Gstin)return"Invalid gstin";return/^\d{6}$/.test(l.Pincode)||""===l.Pincode?"Success":"Invalid Pincode"};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"card",children:[(0,p.jsxs)("div",{className:"card-header py-2 d-flex align-items-center justify-content-between",children:[(0,p.jsx)("h5",{className:"mb-0 ",children:"Customer Details"}),(0,p.jsx)("button",{className:"comadbtn mb-0",onClick:()=>{a(!t),y()},children:"Back"})]}),(0,p.jsx)("div",{className:"card-body row",children:I.map(((e,t)=>(0,p.jsxs)("div",{className:"col-lg-4 col-md-6 p-2 px-3",children:[(0,p.jsxs)("label",{children:[e.label,e.required&&(0,p.jsx)("p",{style:{color:"red",display:"inline",fontWeight:"bold",fontSize:"1em"},children:" *"})]}),"input"===e.elem?(0,p.jsx)("input",{type:e.type||"text",className:"cus-inpt b-0",onChange:e.event,onInput:e.oninput,disabled:e.disabled,value:e.value,maxLength:e.max}):"select"===e.elem?(0,p.jsx)("select",{className:"cus-inpt b-0",onChange:e.event,value:e.value,children:e.options.map(((e,t)=>(0,p.jsx)("option",{value:e.value,disabled:e.disabled,defaultValue:e.selected,children:e.label},t)))}):"textarea"===e.elem?(0,p.jsx)("textarea",{className:"cus-inpt b-0",onChange:e.event,rows:4,value:e.value}):null]},t)))}),(0,p.jsxs)("div",{className:"card-footer text-end",children:[(0,p.jsx)("button",{className:"cancelbtn",onClick:()=>a(!t),children:"Cancel"}),(0,p.jsx)("button",{className:"comadbtn mb-0",onClick:s.Cust_Id?()=>{const e=C();"Success"===e?(0,u.q)({address:"userModule/customer",method:"PUT",bodyData:{...l}}).then((e=>{e.success?(y(),d.m4.success(e.message),o(),a(!t)):d.m4.error(e.message)})).catch((e=>console.error(e))):d.m4.error(e)}:()=>{const e=C();"Success"===e?(0,u.q)({address:"userModule/customer",method:"POST",bodyData:{...l}}).then((e=>{e.success?(y(),d.m4.success(e.message),o(),a(!t)):d.m4.error(e.message)})).catch((e=>console.error(e))):d.m4.error(e)},children:s.Cust_Id?"Update":"Create"})]})]})})},b=()=>{const[e,t]=(0,r.useState)([]),[a,d]=(0,r.useState)(!1),[m,v]=(0,r.useState)({}),[b,g]=(0,r.useState)(!0);(0,r.useEffect)((()=>{(0,u.q)({address:"userModule/customer"}).then((e=>{t(e.data?e.data:[])})).catch((e=>console.error(e)))}),[a]),(0,r.useEffect)((()=>{!0===b&&v({})}),[b]);const y=(0,r.useMemo)((()=>[{header:"Action",size:130,Cell:e=>{let{renderedCellValue:t,row:a}=e;return(0,p.jsx)(s.c,{children:(0,p.jsx)(o.c,{title:"Edit",children:(0,p.jsx)("span",{children:(0,p.jsx)(c.c,{onClick:()=>{v(a.original),g(!b)},children:(0,p.jsx)(n.c,{})})})})})}},{header:"No",accessorKey:"Cust_No",size:110},{header:"Name",accessorKey:"Customer_name",size:250},{header:"Phone",accessorKey:"Mobile_no",size:140},{header:"Type",accessorKey:"UserTypeGet"},{header:"Contact Person",accessorKey:"Contact_Person"},{header:"Email",accessorKey:"Email_Id"},{header:"Under",accessorKey:"underGet"},{header:"State",accessorKey:"State"},{header:"Pincode",accessorKey:"Pincode"},{header:"Gstin",accessorKey:"Gstin"},{header:"Created By",accessorKey:"EnteyByGet"}]),[]),x=(0,l.g$)({columns:y,data:e,enableColumnResizing:!0,enableGrouping:!0,enableStickyHeader:!0,enableStickyFooter:!0,enableRowVirtualization:!0,enableColumnOrdering:!0,enableColumnPinning:!0,enableRowNumbers:!0,initialState:{density:"compact",expanded:!0,grouping:[],pagination:{pageIndex:0,pageSize:100},sorting:[{id:"Customer_name",desc:!1}],columnVisibility:{EnteyByGet:!1,Gstin:!1,Pincode:!1,State:!1}},muiToolbarAlertBannerChipProps:{color:"primary"},muiTableContainerProps:{sx:{maxHeight:"60vh"}}});return(0,p.jsx)(p.Fragment,{children:b?(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"card",children:[(0,p.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[(0,p.jsx)("h5",{className:"mb-0",children:"Customers"}),(0,p.jsx)("span",{children:(0,p.jsx)(i.c,{variant:"outlined",onClick:()=>g(!b),children:"Add"})})]}),(0,p.jsx)("div",{className:"card-body p-0",children:(0,p.jsx)(l._Y,{table:x})})]})}):(0,p.jsx)(h,{screen:b,setScreen:g,underArray:e,row:m,refresh:()=>{d(!a)}})})}},86e3:(e,t,a)=>{a.d(t,{c:()=>s});var r=a(27664),n=a(82496);const s=(0,r.c)((0,n.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},69456:(e,t,a)=>{a.d(t,{L:()=>s,c:()=>o});var r=a(10099),n=a(33448);function s(e){return(0,n.cp)("MuiDivider",e)}const o=(0,r.c)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},14696:(e,t,a)=>{a.d(t,{c:()=>h});var r=a(95656),n=a(45072),s=a(69060),o=a(79736),c=a(21412),i=a(12556),l=a(49836),d=a(65188),u=a(14008),m=a(82496);const p=["className"],v=(0,i.cp)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,"flex-start"===a.alignItems&&t.alignItemsFlexStart]}})((e=>{let{theme:t,ownerState:a}=e;return(0,n.c)({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===a.alignItems&&{marginTop:8})})),h=s.forwardRef((function(e,t){const a=(0,l.C)({props:e,name:"MuiListItemIcon"}),{className:i}=a,h=(0,r.c)(a,p),b=s.useContext(u.c),g=(0,n.c)({},a,{alignItems:b.alignItems}),y=(e=>{const{alignItems:t,classes:a}=e,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,c.c)(r,d.G,a)})(g);return(0,m.jsx)(v,(0,n.c)({className:(0,o.c)(y.root,i),ownerState:g,ref:t},h))}))},65188:(e,t,a)=>{a.d(t,{G:()=>s,c:()=>o});var r=a(10099),n=a(33448);function s(e){return(0,n.cp)("MuiListItemIcon",e)}const o=(0,r.c)("MuiListItemIcon",["root","alignItemsFlexStart"])},81532:(e,t,a)=>{a.d(t,{Y:()=>s,c:()=>o});var r=a(10099),n=a(33448);function s(e){return(0,n.cp)("MuiListItemText",e)}const o=(0,r.c)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},93996:(e,t,a)=>{a.d(t,{c:()=>j});var r=a(95656),n=a(45072),s=a(69060),o=a(79736),c=a(21412),i=a(13344),l=a(12556),d=a(43424),u=a(49836),m=a(14008),p=a(33440),v=a(87188),h=a(56268),b=a(69456),g=a(65188),y=a(81532),x=a(10099),I=a(33448);function C(e){return(0,I.cp)("MuiMenuItem",e)}const f=(0,x.c)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var _=a(82496);const S=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],M=(0,l.cp)(p.c,{shouldForwardProp:e=>(0,d.c)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:a}=e;return(0,n.c)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(f.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,i.W4)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(f.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,i.W4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(f.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,i.W4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,i.W4)(t.palette.primary.main,t.palette.action.selectedOpacity)}},["&.".concat(f.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(f.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["& + .".concat(b.c.root)]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},["& + .".concat(b.c.inset)]:{marginLeft:52},["& .".concat(y.c.root)]:{marginTop:0,marginBottom:0},["& .".concat(y.c.inset)]:{paddingLeft:36},["& .".concat(g.c.root)]:{minWidth:36}},!a.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&(0,n.c)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{["& .".concat(g.c.root," svg")]:{fontSize:"1.25rem"}}))})),j=s.forwardRef((function(e,t){const a=(0,u.C)({props:e,name:"MuiMenuItem"}),{autoFocus:i=!1,component:l="li",dense:d=!1,divider:p=!1,disableGutters:b=!1,focusVisibleClassName:g,role:y="menuitem",tabIndex:x,className:I}=a,f=(0,r.c)(a,S),j=s.useContext(m.c),N=s.useMemo((()=>({dense:d||j.dense||!1,disableGutters:b})),[j.dense,d,b]),w=s.useRef(null);(0,v.c)((()=>{i&&w.current&&w.current.focus()}),[i]);const A=(0,n.c)({},a,{dense:N.dense,divider:p,disableGutters:b}),L=(e=>{const{disabled:t,dense:a,divider:r,disableGutters:s,selected:o,classes:i}=e,l={root:["root",a&&"dense",t&&"disabled",!s&&"gutters",r&&"divider",o&&"selected"]},d=(0,c.c)(l,C,i);return(0,n.c)({},i,d)})(a),P=(0,h.c)(w,t);let T;return a.disabled||(T=void 0!==x?x:-1),(0,_.jsx)(m.c.Provider,{value:N,children:(0,_.jsx)(M,(0,n.c)({ref:P,role:y,tabIndex:T,component:l,focusVisibleClassName:(0,o.c)(L.focusVisible,g),className:(0,o.c)(L.root,I)},f,{ownerState:A,classes:L}))})}))},53248:(e,t,a)=>{a.d(t,{c:()=>f});var r=a(95656),n=a(45072),s=a(21412),o=a(79736),c=a(69060),i=a(33440),l=a(27664),d=a(82496);const u=(0,l.c)((0,d.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");var m=a(12556),p=a(49836),v=a(55832),h=a(10099),b=a(33448);function g(e){return(0,b.cp)("MuiTableSortLabel",e)}const y=(0,h.c)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),x=["active","children","className","direction","hideSortIcon","IconComponent"],I=(0,m.cp)(i.c,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.active&&t.active]}})((e=>{let{theme:t}=e;return{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(t.vars||t).palette.text.secondary},"&:hover":{color:(t.vars||t).palette.text.secondary,["& .".concat(y.icon)]:{opacity:.5}},["&.".concat(y.active)]:{color:(t.vars||t).palette.text.primary,["& .".concat(y.icon)]:{opacity:1,color:(t.vars||t).palette.text.secondary}}}})),C=(0,m.cp)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.icon,t["iconDirection".concat((0,v.c)(a.direction))]]}})((e=>{let{theme:t,ownerState:a}=e;return(0,n.c)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===a.direction&&{transform:"rotate(0deg)"},"asc"===a.direction&&{transform:"rotate(180deg)"})})),f=c.forwardRef((function(e,t){const a=(0,p.C)({props:e,name:"MuiTableSortLabel"}),{active:c=!1,children:i,className:l,direction:m="asc",hideSortIcon:h=!1,IconComponent:b=u}=a,y=(0,r.c)(a,x),f=(0,n.c)({},a,{active:c,direction:m,hideSortIcon:h,IconComponent:b}),_=(e=>{const{classes:t,direction:a,active:r}=e,n={root:["root",r&&"active"],icon:["icon","iconDirection".concat((0,v.c)(a))]};return(0,s.c)(n,g,t)})(f);return(0,d.jsxs)(I,(0,n.c)({className:(0,o.c)(_.root,l),component:"span",disableRipple:!0,ownerState:f,ref:t},y,{children:[i,h&&!c?null:(0,d.jsx)(C,{as:b,className:(0,o.c)(_.icon),ownerState:f})]}))}))},46e3:(e,t,a)=>{a.d(t,{c:()=>s});a(69060);var r=a(27664),n=a(82496);const s=(0,r.c)((0,n.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage")},38780:(e,t,a)=>{a.d(t,{c:()=>s});a(69060);var r=a(27664),n=a(82496);const s=(0,r.c)((0,n.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},46320:(e,t,a)=>{a.d(t,{c:()=>s});a(69060);var r=a(27664),n=a(82496);const s=(0,r.c)((0,n.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},80280:(e,t,a)=>{a.d(t,{c:()=>s});a(69060);var r=a(27664),n=a(82496);const s=(0,r.c)((0,n.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage")}}]);
//# sourceMappingURL=8656.b8df6f84.chunk.js.map