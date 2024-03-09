import{a as X,j as e,r as c}from"./react-4da7f7e8.js";import{c as re}from"./react-dom-0558681e.js";import{L as D,c as ne,R as ae}from"./react-router-dom-3e4c2649.js";import{F as oe,a as ie,L as ce}from"./react-icons-1924df68.js";import{u as S,a as N,P as de}from"./react-redux-40cd5e78.js";import{c as R,a as $,b as le}from"./@reduxjs-f2bc3b37.js";import{S as ue,T as J,d as G,a as he,C as me,A as pe,B as k,b as fe,c as xe,e as Y,f as K,Z as M,I as ge,g as je,D as V,h as Q,i as ye,j as ve,k as F,l as be,m as Ce,n as ke,F as T,o as L,p as I,q as we,M as H,r as Se,s as Ne,t as Oe,u as Z,v as Te,L as De}from"./@mui-761cc5eb.js";import{c as z,O as Ee,f as _e}from"./react-router-01041704.js";import{C as Le}from"./react-circular-progressbar-1c980919.js";import{a as Ie}from"./axios-c24e582b.js";import"./hoist-non-react-statics-23d96a9a.js";import"./@babel-08013fda.js";import"./scheduler-765c72db.js";import"./@remix-run-f96eec5b.js";import"./use-sync-external-store-78ed2917.js";import"./immer-41fd5235.js";import"./redux-a54cdd54.js";import"./redux-thunk-ef899f4c.js";import"./clsx-1229b3e0.js";import"./@emotion-12f15d9d.js";import"./stylis-79144faa.js";import"./react-transition-group-dfbcdf08.js";import"./@popperjs-f3391c26.js";import"./react-is-e8e5dbb3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const P=s=>{const t=new Date(s),n=t.getDate(),o=t.getMonth()+1,a=t.getFullYear();let r="",i="";switch(o){case 1:{i="Jan";break}case 2:{i="Feb";break}case 3:{i="Mar";break}case 4:{i="Apr";break}case 5:{i="May";break}case 6:{i="Jun";break}case 7:{i="Jul";break}case 8:{i="Aug";break}case 9:{i="Sept";break}case 10:{i="Oct";break}case 11:{i="Nov";break}case 12:{i="Dec";break}default:{i="";break}}if(n===11||n===12||n===13)return{day:n,monthInWord:i,year:a,superString:"th"};switch(String(n).length>1?parseInt(String(n)[1]):n){case 1:{r="st";break}case 0:{r="th";break}case 2:{r="nd";break}case 3:{r="rd";break}case 4:{r="th";break}case 5:{r="th";break}case 6:{r="th";break}case 7:{r="th";break}case 8:{r="th";break}case 9:{r="th";break}default:{r="";break}}return{day:n,monthInWord:i,year:a,superString:r}},$e=s=>s.reverse(),w="https://stt-server.onrender.com",Fe=async()=>{const t=await(await fetch(`${w}/api/stocked/products`,{credentials:"include"})).json();return console.log(t.length),t},Re=async()=>(await fetch(w+"/api/logout",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"})).status,Pe=async(s,t)=>{const n=JSON.stringify({email:s,password:t});try{const o=await fetch(w+"/api/login",{method:"POST",credentials:"include",body:n,headers:{"Content-Type":"application/json"}}),a=await o.json(),r=o.status;return{status:a,statusCode:r}}catch{return{status:{name:void 0},statusCode:404}}},Be=async()=>{try{return await(await fetch(`${w}/api/stocked/logs`,{credentials:"include"})).json()}catch(s){return console.error(s),{}}},Ae=async()=>{try{const t=await(await fetch(`${w}/api/current/offers`,{credentials:"include"})).json();return t.message==="Unauthorized"?[]:t}catch(s){return console.error(s.message),[]}},Ue=async s=>{const{product_code:t,product_description:n,image_link:o,product_link:a,validity:r,discount_condition:i,discount:u}=s;s=r!==""?s:{product_code:t,product_description:n,image_link:o,product_link:a,validity:"1995-01-01",discount_condition:i,discount:u};try{return await(await fetch(`${w}/api/current/addOffer`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).json()}catch(x){return console.error(x.message),"Error"}},Me=async()=>{try{const t=await(await fetch(`${w}/api/delivery/dns`,{credentials:"include"})).json();return t.message==="Unauthorized"?[]:$e(t)}catch(s){return console.error(s),[]}},We=async()=>{try{return await(await fetch(`${w}/api/user`,{credentials:"include"})).json()}catch(s){console.error(s.message)}},ze=R({name:"chemicals",initialState:{chemicals:[],status:"idle",error:"",lastUpdated:{}},reducers:{},extraReducers(s){s.addCase(A.pending,t=>{t.status="loading"}).addCase(A.fulfilled,(t,n)=>{t.status="succeeded",n.payload.message=="No data"?t.chemicals=[]:t.chemicals=n.payload}).addCase(A.rejected,(t,n)=>{t.status="failed",t.error=n.error.message}).addCase(U.pending,t=>{t.lastUpdated={}}).addCase(U.fulfilled,(t,n)=>{t.lastUpdated={...n.payload}}).addCase(U.rejected,t=>{t.lastUpdated={}})}}),qe=ze.reducer,A=$("chemicals/fetchData",Fe),U=$("chemicals/fetchCurrentStockLogs",Be);X.forwardRef(function(t,n){return e.jsx(ue,{direction:"up",ref:n,...t})});const Ze=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"category-header",children:"CATEGORIES"}),e.jsx(D,{className:"category-link",to:"stocked/chemicals",children:"Chemicals"}),e.jsx(D,{className:"category-link",to:"services",children:"Services"}),e.jsx(D,{className:"category-link",to:"stockTake",style:{display:"none"},children:"FifoTool"}),e.jsx(D,{className:"category-link",to:"offers",children:e.jsx(J,{title:e.jsx(G,{fontSize:"small"}),placement:"right",children:e.jsx("span",{children:"Specials"})})}),e.jsx(D,{className:"category-link",to:"delivery-notes",style:{display:"block"},children:e.jsx(J,{title:e.jsx(G,{fontSize:"small"}),placement:"right",children:e.jsx("span",{children:"D_Notes"})})})]}),Je=R({name:"upload",initialState:{upload:!0},reducers:{toggleOnOff(s,t){s.upload=t.payload}}}),Ge=Je.reducer,He=()=>{window.onscroll=function(){s()};function s(){const n=document.getElementById("top");(document.body.scrollTop>20||document.documentElement.scrollTop>20)&&(window.location.hash==="#/stocked/chemicals"||window.location.hash==="#/delivery-notes")?n.style.display="block":n.style.display="none"}function t(){document.body.scrollTop=0,document.documentElement.scrollTop=0}return e.jsx("button",{className:"top",id:"top",onClick:t,children:"TOP"})},Xe=R({name:"user",initialState:{user:"IBTZ"},extraReducers(s){s.addCase(j.fulfilled,(t,n)=>{console.log("called fetch User fx"),t.user=n.payload})}}),j=$("user/fetchUser",We),Ye=Xe.reducer,Ke=()=>{const s=S(o=>o.user.user),t=N(),n=s.user||"IBTZ";return c.useEffect(()=>{t(j())},[t,j]),e.jsx(he,{direction:"row",spacing:3,children:e.jsx(me,{avatar:e.jsx(pe,{children:n[0]}),label:n,color:n==="IBTZ"?"error":"success"})})},Ve=()=>{const[s,t]=c.useState(!0),n=N(),o=z(),a=()=>{document.getElementById("drawer").style.width="0"},r=()=>{document.getElementById("drawer").style.width="11rem"},i=async()=>{const u=await Re();console.log(u),u===200?(n(j()),o("/login")):console.log(u.statusText)};return c.useEffect(()=>{n(j()),setTimeout(()=>{o("/stocked/chemicals"),t(!1)},500)},[n,j]),e.jsxs("div",{className:"container",children:[e.jsxs("header",{className:"header",children:[e.jsx("div",{className:"menu",onClick:r,children:e.jsx(oe,{className:"home-icon"})}),e.jsxs("div",{className:"header-right-navbar",children:[e.jsx(D,{to:"login",className:"demo-link",children:e.jsx(k,{variant:"outlined",sx:{color:"white",border:"none"},children:"LOGIN"})}),e.jsx(k,{variant:"outlined",sx:{color:"white",border:"none"},onClick:i,children:"LOGOUT"}),e.jsx(Ke,{})]})]}),e.jsxs("main",{className:"main",children:[e.jsxs("div",{className:"drawer",id:"drawer",autoFocus:!0,children:[e.jsx("div",{className:"close-btn",onClick:a,children:e.jsx(ie,{})}),e.jsx("div",{className:"categories",children:e.jsx(Ze,{})})]}),e.jsxs("div",{className:"main-content",id:"main",children:[s?e.jsx("p",{style:{color:"red"},children:"Redirecting to home in 1s ..."}):e.jsx(Ee,{}),e.jsx(He,{})]})]}),e.jsx("footer",{className:"footer",children:"All rights reserved"})]})};const Qe=()=>{const s=_e();return e.jsxs("div",{id:"error-page",children:[e.jsx("h1",{children:"Oops!"}),e.jsx("p",{children:"Sorry, an unexpected error has occurred."}),e.jsx("p",{children:e.jsx("i",{children:s.statusText||s.message})}),e.jsx(D,{to:"/",children:e.jsx("button",{className:"return-home",children:"HOME"})})]})};const et=({searchTerm:s,setSearchTerm:t})=>{const n=N(),o=S(r=>r.chemicals.lastUpdated),a=new Date(o.changed_on);return c.useEffect(()=>{n(U())},[n]),e.jsxs("div",{className:"instructions",children:[e.jsxs("div",{className:"fore-ground",children:[e.jsx("p",{children:"All chemicals belong to a specific box, each box has a unique box number (look below in Box Number)."}),e.jsxs("p",{children:["PLEASE NOTE: When you remove a chemical in the box, you have to record, the ",e.jsx("b",{children:"catalog number"})," of the chemical and ",e.jsx("b",{children:"quantity"})," ","taken out."]})]}),e.jsxs("div",{className:"logs fore-ground",children:[e.jsxs("p",{children:[e.jsx("b",{children:"Updated on: "}),e.jsx("span",{className:"logs-color",children:`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`})]}),e.jsxs("p",{children:[e.jsx("b",{children:"Updated by: "}),e.jsx("span",{className:"logs-color",children:`${o.name}`})]}),e.jsx("hr",{}),e.jsx("form",{action:"",className:"search-form",children:e.jsx("input",{type:"text",id:"search-field",className:"search-field",placeholder:"Enter keyword -- ethanol --",value:s,onChange:r=>t(r.target.value)})})]})]})};const ee=({message:s=""})=>e.jsx("div",{children:e.jsxs(fe,{sx:{color:"#fff",zIndex:t=>t.zIndex.drawer+1},open:!0,children:[e.jsxs("h1",{className:"backdrop-message",children:[s,"  "]}),s===""?e.jsx(xe,{color:"inherit"}):e.jsx(e.Fragment,{})]})}),tt=()=>{const[s,t]=c.useState(""),n=N(),o=S(r=>r.chemicals.chemicals),a=S(r=>r.chemicals.status);return c.useEffect(()=>{a==="idle"&&n(A())},[n,a]),e.jsxs("div",{className:"table",children:[a==="loading"?e.jsx(ee,{}):e.jsx(e.Fragment,{}),e.jsx(et,{searchTerm:s,setSearchTerm:t}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Stock"}),e.jsx("th",{children:"Store"}),e.jsx("th",{children:"Box"})]})}),e.jsx("tbody",{children:o.length<=0?e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{})]}):o.filter(r=>s.toLowerCase()===""?!0:r.product_description.toLowerCase().includes(s.toLowerCase())).map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:r.product_code}),e.jsx("td",{children:r.product_description}),e.jsx("td",{style:{textAlign:"center"},children:r.qty_instock}),e.jsx("td",{style:{textAlign:"center"},children:r.store_location}),e.jsx("td",{style:{textAlign:"center"},children:r.box_number})]},r.product_code))})]})]})},st=[{product_description:"Mastercycler® X50 - PCR Thermocycler",product_code:"6303000010",discount:"20",discount_condition:"Offer valid until ",validity:"30 Dec 2024",img_link:"https://www.eppendorf.com/product-media/img/global/233332/Eppendorf_PCR_Mastercycler-X50s_product.jpg?imwidth=540",product_link:"https://www.eppendorf.com/za-en/eShop-Products/PCR/Thermocyclers/Mastercycler-X50-p-PF-217186"}],te=R({name:"offers",initialState:{currentOffers:st,status:""},reducers:{getOffers(s){s.currentOffers=s.currentOffers},addNewOffer(s,t){s.currentOffers=[...s.currentOffers,t.payload]},updateExistingOffer(s,t){s.currentOffers.find(o=>o.product_code===t.payload.product_code)||console.log("product does not exist")}},extraReducers(s){s.addCase(W.fulfilled,(t,n)=>{t.status="success",t.currentOffers=n.payload}).addCase(se.fulfilled,(t,n)=>{t.status=n.payload})}}),W=$("offers/fetchOffers",Ae),se=$("offers/addNewOffer",Ue),{getOffers:rt,addNewOffer:Ut,updateExistingOffer:Mt}=te.actions,nt=te.reducer,at=R({name:"deliveries",initialState:{dns:[],status:""},reducers:{},extraReducers(s){s.addCase(E.pending,(t,n)=>{t.status="loading"}).addCase(E.fulfilled,(t,n)=>{t.dns=n.payload}).addCase(E.rejected,(t,n)=>{t.dns=[...t.dns],t.status="fail"})}}),E=$("deliveries/fetchDns",Me),ot=at.reducer,it=le({reducer:{chemicals:qe,upload:Ge,offers:nt,dns:ot,user:Ye}});const ct=()=>{const[s,t]=c.useState(""),[n,o]=c.useState(""),[a,r]=c.useState(!1),[i,u]=c.useState(!1),[x,h]=c.useState(""),[O,m]=c.useState(""),l=z(),y=N(),_=async b=>{b.preventDefault(),r(!a);const{status:g,statusCode:d}=await Pe(n,s);g.name&&d===200?(r(a),y(j()),setTimeout(()=>{l(-1)},1e3*2),m("success"),u(!0),h("Authenticated successfully")):(r(a),m("error"),u(!0),h("Incorrect credentials"))},v=(b,g)=>{g!=="clickaway"&&u(!1)};return e.jsxs("div",{className:"login",children:[a?e.jsx(ee,{message:"let's sign you in ..."}):e.jsx(e.Fragment,{}),e.jsx("h1",{className:"login-header",children:"enter your credentials below.."}),e.jsxs("form",{action:"",method:"post",className:"login-form",onSubmit:_,children:[e.jsx("input",{type:"email",placeholder:"Enter email",id:"email",name:"email",className:"input-field",value:n,onChange:b=>o(b.target.value),required:!0,autoComplete:"email"}),e.jsx("input",{type:"password",placeholder:"password",id:"password",name:"password",className:"input-field",value:s,onChange:b=>t(b.target.value),required:!0}),e.jsx("button",{className:"logon-btn",type:"submit",children:"LOGIN"})]}),e.jsx("div",{children:e.jsx(Y,{open:i,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:v,children:e.jsx(K,{onClose:v,severity:O,variant:"filled",sx:{width:"100%"},children:x})})})]})};const dt=()=>e.jsx("div",{className:"register",children:"Only admin can login at the moment .."});const B={refferenceLetter:"IBTZ/2024/5",RLsentTo:"TARI",RLdate:"25-05-2022",resolutionPOA:"IBTZ150"},lt=()=>e.jsxs("div",{className:"services",children:[e.jsx(M,{in:!0,style:{transitionDelay:"500ms"},children:e.jsxs("div",{className:"services-card",children:[e.jsx("h2",{children:"Letter Refference Number"}),e.jsxs("p",{children:["Current Refference | ",e.jsx("b",{children:B.refferenceLetter})]}),e.jsxs("p",{children:["Used to | ",e.jsx("b",{children:B.RLsentTo})]}),e.jsxs("p",{children:["On | ",e.jsx("b",{children:B.RLdate})]}),e.jsx(k,{variant:"outlined",color:"success",size:"larger",sx:{fontWeight:"bold"},children:"Generate New"})]})}),e.jsx(M,{in:!0,style:{transitionDelay:"1000ms"},children:e.jsxs("div",{className:"services-card",children:[e.jsx("h2",{children:"SPOA Resolution Number"}),e.jsxs("p",{children:["Current RN | ",e.jsx("b",{children:B.resolutionPOA})," "]}),e.jsx(k,{variant:"outlined",color:"success",size:"larger",sx:{fontWeight:"bold"},children:"Generate New"})]})})]});const ut=({open:s,setfdbOpen:t,fdbMessage:n})=>{const o=(r,i)=>{i!=="clickaway"&&t(!1)},a=e.jsx(e.Fragment,{children:e.jsx(ge,{size:"small","aria-label":"close",color:"inherit",onClick:o,children:e.jsx(je,{fontSize:"small"})})});return e.jsx("div",{children:e.jsx(Y,{open:s,autoHideDuration:5e3,onClose:o,action:a,children:e.jsx(K,{onClose:o,severity:n==="Record Exists!!"?"warning":"success",variant:"filled",sx:{width:"100%"},children:n})})})},ht=()=>{const[s,t]=c.useState(!1),[n,o]=c.useState(!0),[a,r]=c.useState(0),[i,u]=c.useState(""),[x,h]=c.useState(!1),[O,m]=c.useState(""),l=N(),y=z(),_=S(d=>d.dns.dns),v=S(d=>d.user.user).user,b=async d=>{const C=new FormData;for(const p of d.files)C.append("files",p);try{Ie.post(`${w}/api/delivery/notes`,C,{withCredentials:!0,onUploadProgress:p=>{const q=Math.round(p.loaded*100/p.total);o(!1),r(q-3)}}).then(p=>{p.status===200&&p.data.message!=="Record Exists!!"?(r(100),m("Upload Successfully!"),h(!0)):(m(`${p.data.message}`),h(!0),r(0)),t(!s),o(!0),r(0)}).catch(p=>console.log(p))}catch(p){console.log("Something went wrong!",p.message)}},g=async()=>{const d=document.getElementById("fileId");d.files.length===1&&(b(d),l(E()))};return c.useEffect(()=>{l(E())},[l,E]),c.useLayoutEffect(()=>{if(l(j()),v==="IBTZ")return y("/login")},[l,E,j]),e.jsxs("div",{children:[e.jsx(ut,{open:x,setfdbOpen:h,fdbMessage:O}),e.jsx("div",{style:{position:"absolute"},children:e.jsxs(V,{anchor:"bottom",open:s,children:[e.jsx("div",{className:"deliveryNoteHeader"}),e.jsx(Q,{sx:{"& .MuiTextField-root":{m:1,width:"30rem"},width:"100%",height:"100%",top:"7rem",padding:"1.5rem"},component:"form",children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",justifyItems:"center"},children:[e.jsx(ye,{type:"file",id:"fileId",required:!0,accept:"*.pdf"}),e.jsx(k,{variant:"contained",color:"success",component:"span",size:"large",onClick:g,startIcon:e.jsx(ve,{}),disabled:!n,children:"Upload"}),e.jsx("button",{style:{position:"absolute",top:"1rem",right:"1rem",backgroundColor:"black",color:"white",borderRadius:"50%"},onClick:d=>{d.preventDefault(),t(!s),r(0),o(!0)},type:"submit",disabled:!n,children:"X"}),e.jsx("div",{style:{width:100,height:100},children:e.jsx(Le,{value:a,text:`${a}%`})})]})})]})}),e.jsxs("form",{action:"",name:"searchBar",className:"search-dn",children:[e.jsx(k,{variant:"outlined",sx:{margin:"0.2rem",fontWeight:"bold"},onClick:()=>t(!s),color:"success",children:"Add New"}),e.jsx("input",{type:"text",style:{fontSize:"1rem"},placeholder:"Enter keyword -- DN name --",value:i,onChange:d=>u(d.target.value)})]}),_.length===0?e.jsxs(e.Fragment,{children:[e.jsx(F,{variant:"text",animation:"wave",width:"70%",height:"5rem",sx:{fontSize:"1rem",margin:"0 auto"}}),e.jsx(F,{variant:"text",animation:"wave",width:"70%",height:"5rem",sx:{fontSize:"1rem",margin:"0 auto"}}),e.jsx(F,{variant:"text",animation:"wave",width:"70%",height:"5rem",sx:{fontSize:"1rem",margin:"0 auto"}}),e.jsx(F,{variant:"text",animation:"wave",width:"70%",height:"5rem",sx:{fontSize:"1rem",margin:"0 auto"}}),e.jsx(F,{variant:"text",animation:"wave",width:"70%",height:"5rem",sx:{fontSize:"1rem",margin:"0 auto"}})]}):_.filter(d=>i.toLowerCase()===""?!0:d.filename.toLowerCase().includes(i.toLowerCase())).map((d,C)=>e.jsx(M,{in:!0,style:{transitionDelay:`${C*50}ms`},children:e.jsxs("div",{className:"files_data",children:[e.jsx("div",{children:e.jsx("b",{children:d.filename})}),e.jsxs("div",{className:"files_data-actions",children:[e.jsxs("span",{children:[`${P(d.uploaddate).day}`,e.jsx("sup",{children:`${P(d.uploaddate).superString}`}),` ${P(d.uploaddate).monthInWord}`,` ${P(d.uploaddate).year}`]}),e.jsx("a",{href:`${d.viewlink}`,target:"_blank",children:e.jsx(be,{})}),e.jsx("a",{href:`${d.downloadlink}`,children:e.jsx(Ce,{})}),e.jsx("span",{children:e.jsx("button",{type:"submit",id:d.fileid,disabled:!0,children:e.jsx(ke,{})})})]})]})},C))]})};function mt({pCodeToEdit:s,open:t,setOpen:n,editState:o,setEdit:a}){const[r,i]=c.useState(""),[u,x]=c.useState(""),[h,O]=c.useState(""),[m,l]=c.useState(""),[y,_]=c.useState(""),[v,b]=c.useState(""),[g,d]=c.useState(""),C=N(),p=()=>{u&&r&&h&&m&&v&&g&&C(se({product_description:r,product_code:u,discount:h,discount_condition:m,validity:y,image_link:v,product_link:g})),C(W()),n(!t)},q=()=>{u&&r&&h&&m&&v&&g&&C(updateExistingOffer({product_description:r,product_code:u,discount:h,discount_condition:m,validity:y,image_link:v,product_link:g})),C(rt()),n(!t),a(!o)};return e.jsx("div",{style:{position:"absolute"},children:e.jsxs(V,{anchor:"right",open:t,onClose:()=>n(!t),children:[e.jsx("div",{className:"head-cover",children:e.jsx("p",{children:"ADD NEW OFFER"})}),e.jsx(Q,{sx:{"& .MuiTextField-root":{m:1,width:"25ch"},minWidth:"30rem",height:"100%",top:"4rem",padding:"1.5rem"},component:"form",children:e.jsxs("div",{className:"input-fields-container",children:[e.jsxs(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(L,{htmlFor:"product_description",required:!0,children:"product_Description"}),e.jsx(I,{id:"product_description","aria-describedby":"product_description-input-field",type:"text",value:r,onChange:f=>i(f.target.value)})]}),e.jsxs(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(L,{htmlFor:"item-code",required:!0,children:"Item Code"}),e.jsx(I,{id:"item-code","aria-describedby":"item-code-input-field",type:"text",value:u,onChange:f=>x(f.target.value)})]}),e.jsxs(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(L,{htmlFor:"discount",required:!0,children:"Discount"}),e.jsx(I,{id:"discount","aria-describedby":"discount-input-field",type:"number",value:h,onChange:f=>O(f.target.value)})]}),e.jsxs(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(L,{id:"silvester",required:!0,children:"Discount Condition"}),e.jsxs(we,{labelId:"silvester",id:"silvester",label:"condition",value:m,onChange:f=>l(f.target.value),children:[e.jsx(H,{value:"Offer valid until",children:"Offer valid untill"}),e.jsx(H,{value:"While stock last",children:"While stock last"})]})]}),e.jsx(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:e.jsx(I,{id:"validity","aria-describedby":"validity-input-field",type:"date",value:y,onChange:f=>_(f.target.value),disabled:m==="While stock last"})}),e.jsxs(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(L,{htmlFor:"image-address",required:!0,children:"Image Address"}),e.jsx(I,{id:"image-address","aria-describedby":"image-address-input-field",type:"text",value:v,onChange:f=>b(f.target.value)})]}),e.jsxs(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(L,{htmlFor:"product-link",required:!0,children:"Product Link"}),e.jsx(I,{id:"product-link","aria-describedby":"product-link-input-field",type:"text",value:g,onChange:f=>d(f.target.value)})]}),o?e.jsx(k,{variant:"outlined",sx:{margin:"1rem",fontWeight:"bold"},color:"secondary",onClick:q,children:"Save Changes"}):e.jsx(k,{variant:"outlined",sx:{margin:"1rem",fontWeight:"bold"},onClick:p,color:"secondary",children:"SUBMIT"})]})}),e.jsx("div",{className:"head-cover-footer"})]})})}function pt(){const[s,t]=c.useState(!1),[n,o]=c.useState(""),[a,r]=c.useState(!1),i=N(),u=z(),x=c.useRef(),h=S(l=>l.offers.currentOffers),O=S(l=>l.user.user).user,m=()=>{o(x.current.innerText),t(!s),r(!0)};return c.useLayoutEffect(()=>{if(i(W()),i(j()),O==="IBTZ")return u("/login")},[i,W,j]),e.jsxs("div",{className:"offers-container",children:[h.map((l,y)=>e.jsx(M,{in:!0,style:{transitionDelay:`${y*400+800}ms`},children:e.jsxs(Se,{sx:{maxWidth:345},children:[e.jsx(Ne,{component:"img",alt:"product img",height:"auto",image:l.image_link}),e.jsxs(Oe,{children:[e.jsx(Z,{gutterBottom:!0,variant:"h5",component:"div",children:l.product_description}),e.jsxs(Z,{gutterBottom:!0,variant:"p",component:"div",children:["Cat. no: ",e.jsx("span",{ref:x,children:l.product_code}),"."]}),e.jsxs(Z,{variant:"body2",color:"text.secondary",sx:{marginTop:"1rem"},children:["Now available with ",e.jsxs("b",{children:[l.discount,"% Discount"]}),".",e.jsx("span",{children:l.validity===""?` ${l.discount_condition} `:` ${l.discount_condition} ${new Date(l.validity).getDate()}/${new Date(l.validity).getMonth()+1}/${new Date(l.validity).getFullYear()} `})]})]}),e.jsxs(Te,{children:[e.jsx(k,{size:"small",onClick:m,children:"Edit"}),e.jsx(k,{size:"small",children:e.jsx(De,{href:l.product_link,underline:"hover",target:"blank",children:"Learn more"})})]})]})},y)),e.jsx(mt,{open:s,setOpen:t,editState:a,setEdit:r,pCodeToEdit:n}),e.jsx("div",{className:"offer-add-new",children:e.jsxs("button",{onClick:()=>{t(!s),r(!1)},children:[e.jsx(ce,{})," NEW"]})})]})}const ft=ne([{path:"/",element:e.jsx(Ve,{}),errorElement:e.jsx(Qe,{}),children:[{path:"services",element:e.jsx(lt,{})},{path:"stocked/chemicals",element:e.jsx(tt,{})},{path:"login",element:e.jsx(ct,{})},{path:"register",element:e.jsx(dt,{})},{path:"delivery-notes",element:e.jsx(ht,{})},{path:"offers",element:e.jsx(pt,{})}]}]);re.createRoot(document.getElementById("root")).render(e.jsx(X.StrictMode,{children:e.jsx(de,{store:it,children:e.jsx(ae,{router:ft})})}));