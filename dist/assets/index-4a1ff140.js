import{a as H,j as e,r as c}from"./react-4da7f7e8.js";import{c as ee}from"./react-dom-0558681e.js";import{L as T,c as se,R as te}from"./react-router-dom-3e4c2649.js";import{F as re,a as ne,L as ae}from"./react-icons-1924df68.js";import{u as k,a as w,P as oe}from"./react-redux-40cd5e78.js";import{c as I,a as L,b as ie}from"./@reduxjs-f2bc3b37.js";import{S as ce,T as Z,d as J,a as de,C as le,A as ue,B as y,b as he,c as me,Z as B,e as pe,f as fe,I as xe,g as je,D as X,h as Y,i as ge,j as ye,k as ve,l as be,m as Ce,F as O,n as E,o as _,p as ke,M as G,q as we,r as Ne,s as Se,t as q,u as Oe,L as Te}from"./@mui-5ccac305.js";import{c as U,O as De,f as Ee}from"./react-router-01041704.js";import{C as _e}from"./react-circular-progressbar-1c980919.js";import{a as Le}from"./axios-c24e582b.js";import"./hoist-non-react-statics-23d96a9a.js";import"./@babel-08013fda.js";import"./scheduler-765c72db.js";import"./@remix-run-f96eec5b.js";import"./use-sync-external-store-78ed2917.js";import"./immer-41fd5235.js";import"./redux-a54cdd54.js";import"./redux-thunk-ef899f4c.js";import"./clsx-1229b3e0.js";import"./@emotion-12f15d9d.js";import"./stylis-79144faa.js";import"./react-transition-group-dfbcdf08.js";import"./@popperjs-f3391c26.js";import"./react-is-e8e5dbb3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const $=t=>{const s=new Date(t),n=s.getDate(),o=s.getMonth()+1,a=s.getFullYear();let r="",i="";switch(o){case 1:{i="Jan";break}case 2:{i="Feb";break}case 3:{i="Mar";break}case 4:{i="Apr";break}case 5:{i="May";break}case 6:{i="Jun";break}case 7:{i="Jul";break}case 8:{i="Aug";break}case 9:{i="Sept";break}case 10:{i="Oct";break}case 11:{i="Nov";break}case 12:{i="Dec";break}default:{i="";break}}if(n===11||n===12||n===13)return{day:n,monthInWord:i,year:a,superString:"th"};switch(String(n).length>1?parseInt(String(n)[1]):n){case 1:{r="st";break}case 0:{r="th";break}case 2:{r="nd";break}case 3:{r="rd";break}case 4:{r="th";break}case 5:{r="th";break}case 6:{r="th";break}case 7:{r="th";break}case 8:{r="th";break}case 9:{r="th";break}default:{r="";break}}return{day:n,monthInWord:i,year:a,superString:r}},Ie=t=>t.reverse(),v="https://stt-server.onrender.com",$e=async()=>{const s=await(await fetch(`${v}/api/stocked/products`,{credentials:"include"})).json();return console.log(s.length),s},Fe=async()=>(await fetch(v+"/api/logout",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"})).status,Re=async(t,s)=>{const n=JSON.stringify({email:t,password:s}),o=await fetch(v+"/api/login",{method:"POST",credentials:"include",body:n,headers:{"Content-Type":"application/json"}}),a=await o.json(),r=o.status;return{status:a,statusCode:r}},Pe=async()=>{try{return await(await fetch(`${v}/api/stocked/logs`,{credentials:"include"})).json()}catch(t){return console.error(t),{}}},Be=async()=>{try{const s=await(await fetch(`${v}/api/current/offers`,{credentials:"include"})).json();return s.message==="Unauthorized"?[]:s}catch(t){return console.error(t.message),[]}},Ae=async t=>{const{product_code:s,product_description:n,image_link:o,product_link:a,validity:r,discount_condition:i,discount:u}=t;t=r!==""?t:{product_code:s,product_description:n,image_link:o,product_link:a,validity:"1995-01-01",discount_condition:i,discount:u};try{return await(await fetch(`${v}/api/current/addOffer`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}catch(x){return console.error(x.message),"Error"}},Ue=async()=>{try{const s=await(await fetch(`${v}/api/delivery/dns`,{credentials:"include"})).json();return s.message==="Unauthorized"?[]:Ie(s)}catch(t){return console.error(t),[]}},Me=async()=>{try{return await(await fetch(`${v}/api/user`,{credentials:"include"})).json()}catch(t){console.error(t.message)}},We=I({name:"chemicals",initialState:{chemicals:[],status:"idle",error:"",lastUpdated:{}},reducers:{},extraReducers(t){t.addCase(R.pending,s=>{s.status="loading"}).addCase(R.fulfilled,(s,n)=>{s.status="succeeded",n.payload.message=="No data"?s.chemicals=[]:s.chemicals=n.payload}).addCase(R.rejected,(s,n)=>{s.status="failed",s.error=n.error.message}).addCase(P.pending,s=>{s.lastUpdated={}}).addCase(P.fulfilled,(s,n)=>{s.lastUpdated={...n.payload}}).addCase(P.rejected,s=>{s.lastUpdated={}})}}),ze=We.reducer,R=L("chemicals/fetchData",$e),P=L("chemicals/fetchCurrentStockLogs",Pe);H.forwardRef(function(s,n){return e.jsx(ce,{direction:"up",ref:n,...s})});const qe=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"category-header",children:"CATEGORIES"}),e.jsx(T,{className:"category-link",to:"stocked/chemicals",children:"Chemicals"}),e.jsx(T,{className:"category-link",to:"services",children:"Services"}),e.jsx(T,{className:"category-link",to:"stockTake",style:{display:"none"},children:"FifoTool"}),e.jsx(T,{className:"category-link",to:"offers",children:e.jsx(Z,{title:e.jsx(J,{fontSize:"small"}),placement:"right",children:e.jsx("span",{children:"Specials"})})}),e.jsx(T,{className:"category-link",to:"delivery-notes",style:{display:"block"},children:e.jsx(Z,{title:e.jsx(J,{fontSize:"small"}),placement:"right",children:e.jsx("span",{children:"D_Notes"})})})]}),Ze=I({name:"upload",initialState:{upload:!0},reducers:{toggleOnOff(t,s){t.upload=s.payload}}}),Je=Ze.reducer,Ge=()=>{window.onscroll=function(){t()};function t(){const n=document.getElementById("top");(document.body.scrollTop>20||document.documentElement.scrollTop>20)&&(window.location.hash==="#/stocked/chemicals"||window.location.hash==="#/delivery-notes")?n.style.display="block":n.style.display="none"}function s(){document.body.scrollTop=0,document.documentElement.scrollTop=0}return e.jsx("button",{className:"top",id:"top",onClick:s,children:"TOP"})},He=I({name:"user",initialState:{user:"IBTZ"},extraReducers(t){t.addCase(j.fulfilled,(s,n)=>{console.log("called fetch User fx"),s.user=n.payload})}}),j=L("user/fetchUser",Me),Xe=He.reducer,Ye=()=>{const t=k(o=>o.user.user),s=w(),n=t.user||"IBTZ";return c.useEffect(()=>{s(j())},[s,j]),e.jsx(de,{direction:"row",spacing:3,children:e.jsx(le,{avatar:e.jsx(ue,{children:n[0]}),label:n,color:n==="IBTZ"?"error":"success"})})},Ke=()=>{const[t,s]=c.useState(!0),n=w(),o=U(),a=()=>{document.getElementById("drawer").style.width="0"},r=()=>{document.getElementById("drawer").style.width="11rem"},i=async()=>{const u=await Fe();console.log(u),u===200?(n(j()),o("/stocked/chemicals")):console.log(u.statusText)};return c.useEffect(()=>{n(j()),setTimeout(()=>{o("/stocked/chemicals"),s(!1)},500)},[n,j]),e.jsxs("div",{className:"container",children:[e.jsxs("header",{className:"header",children:[e.jsx("div",{className:"menu",onClick:r,children:e.jsx(re,{className:"home-icon"})}),e.jsxs("div",{className:"header-right-navbar",children:[e.jsx(T,{to:"login",className:"demo-link",children:e.jsx(y,{variant:"outlined",sx:{color:"white",border:"none"},children:"LOGIN"})}),e.jsx(y,{variant:"outlined",sx:{color:"white",border:"none"},onClick:i,children:"LOGOUT"}),e.jsx(Ye,{})]})]}),e.jsxs("main",{className:"main",children:[e.jsxs("div",{className:"drawer",id:"drawer",autoFocus:!0,children:[e.jsx("div",{className:"close-btn",onClick:a,children:e.jsx(ne,{})}),e.jsx("div",{className:"categories",children:e.jsx(qe,{})})]}),e.jsxs("div",{className:"main-content",id:"main",children:[t?e.jsx("p",{style:{color:"red"},children:"Redirecting to home in 1s ..."}):e.jsx(De,{}),e.jsx(Ge,{})]})]}),e.jsx("footer",{className:"footer",children:"All rights reserved"})]})};const Ve=()=>{const t=Ee();return e.jsxs("div",{id:"error-page",children:[e.jsx("h1",{children:"Oops!"}),e.jsx("p",{children:"Sorry, an unexpected error has occurred."}),e.jsx("p",{children:e.jsx("i",{children:t.statusText||t.message})}),e.jsx(T,{to:"/",children:e.jsx("button",{className:"return-home",children:"HOME"})})]})};const Qe=({searchTerm:t,setSearchTerm:s})=>{const n=w(),o=k(r=>r.chemicals.lastUpdated),a=new Date(o.changed_on);return c.useEffect(()=>{n(P())},[n]),e.jsxs("div",{className:"instructions",children:[e.jsxs("div",{className:"fore-ground",children:[e.jsx("p",{children:"All chemicals belong to a specific box, each box has a unique box number (look below in Box Number)."}),e.jsxs("p",{children:["PLEASE NOTE: When you remove a chemical in the box, you have to record, the ",e.jsx("b",{children:"catalog number"})," of the chemical and ",e.jsx("b",{children:"quantity"})," ","taken out."]})]}),e.jsxs("div",{className:"logs fore-ground",children:[e.jsxs("p",{children:[e.jsx("b",{children:"Updated on: "}),e.jsx("span",{className:"logs-color",children:`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`})]}),e.jsxs("p",{children:[e.jsx("b",{children:"Updated by: "}),e.jsx("span",{className:"logs-color",children:`${o.name}`})]}),e.jsx("hr",{}),e.jsx("form",{action:"",className:"search-form",children:e.jsx("input",{type:"text",id:"search-field",className:"search-field",placeholder:"Enter keyword -- ethanol --",value:t,onChange:r=>s(r.target.value)})})]})]})};const K=({message:t=""})=>e.jsx("div",{children:e.jsxs(he,{sx:{color:"#fff",zIndex:s=>s.zIndex.drawer+1},open:!0,children:[e.jsxs("h1",{className:"backdrop-message",children:[t,"  "]}),t===""?e.jsx(me,{color:"inherit"}):e.jsx(e.Fragment,{})]})}),es=()=>{const[t,s]=c.useState(""),n=w(),o=k(r=>r.chemicals.chemicals),a=k(r=>r.chemicals.status);return c.useEffect(()=>{a==="idle"&&n(R())},[n,a]),e.jsxs("div",{className:"table",children:[a==="loading"?e.jsx(K,{}):e.jsx(e.Fragment,{}),e.jsx(Qe,{searchTerm:t,setSearchTerm:s}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Stock"}),e.jsx("th",{children:"Store"}),e.jsx("th",{children:"Box"})]})}),e.jsx("tbody",{children:o.length<=0?e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{})]}):o.filter(r=>t.toLowerCase()===""?!0:r.product_description.toLowerCase().includes(t.toLowerCase())).map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:r.product_code}),e.jsx("td",{children:r.product_description}),e.jsx("td",{style:{textAlign:"center"},children:r.qty_instock}),e.jsx("td",{style:{textAlign:"center"},children:r.store_location}),e.jsx("td",{style:{textAlign:"center"},children:r.box_number})]},r.product_code))})]})]})},ss=[{product_description:"Mastercycler® X50 - PCR Thermocycler",product_code:"6303000010",discount:"20",discount_condition:"Offer valid until ",validity:"30 Dec 2024",img_link:"https://www.eppendorf.com/product-media/img/global/233332/Eppendorf_PCR_Mastercycler-X50s_product.jpg?imwidth=540",product_link:"https://www.eppendorf.com/za-en/eShop-Products/PCR/Thermocyclers/Mastercycler-X50-p-PF-217186"}],V=I({name:"offers",initialState:{currentOffers:ss,status:""},reducers:{getOffers(t){t.currentOffers=t.currentOffers},addNewOffer(t,s){t.currentOffers=[...t.currentOffers,s.payload]},updateExistingOffer(t,s){t.currentOffers.find(o=>o.product_code===s.payload.product_code)||console.log("product does not exist")}},extraReducers(t){t.addCase(A.fulfilled,(s,n)=>{s.status="success",s.currentOffers=n.payload}).addCase(Q.fulfilled,(s,n)=>{s.status=n.payload})}}),A=L("offers/fetchOffers",Be),Q=L("offers/addNewOffer",Ae),{getOffers:ts,addNewOffer:As,updateExistingOffer:Us}=V.actions,rs=V.reducer,ns=I({name:"deliveries",initialState:{dns:[],status:""},reducers:{},extraReducers(t){t.addCase(D.pending,(s,n)=>{s.status="loading"}).addCase(D.fulfilled,(s,n)=>{s.dns=n.payload}).addCase(D.rejected,(s,n)=>{s.dns=[...s.dns],s.status="fail"})}}),D=L("deliveries/fetchDns",Ue),as=ns.reducer,os=ie({reducer:{chemicals:ze,upload:Je,offers:rs,dns:as,user:Xe}});const is=()=>{const[t,s]=c.useState(""),[n,o]=c.useState(""),[a,r]=c.useState(!1),i=U(),u=w(),x=async h=>{h.preventDefault(),r(!0);const{status:b,statusCode:p}=await Re(n,t);b.name&&p===200?(r(!0),u(j()),i("/stocked/chemicals")):console.log(b)};return e.jsxs("div",{className:"login",children:[a?e.jsx(K,{message:"let's sign you in ..."}):e.jsx(e.Fragment,{}),e.jsx("h1",{className:"login-header",children:"enter your credentials below.."}),e.jsxs("form",{action:"",method:"post",className:"login-form",onSubmit:x,children:[e.jsx("input",{type:"email",placeholder:"Enter email",id:"email",name:"email",className:"input-field",value:n,onChange:h=>o(h.target.value),required:!0,autoComplete:"email"}),e.jsx("input",{type:"password",placeholder:"password",id:"password",name:"password",className:"input-field",value:t,onChange:h=>s(h.target.value),required:!0}),e.jsx("button",{className:"logon-btn",type:"submit",children:"LOGIN"})]})]})};const cs=()=>e.jsx("div",{className:"register",children:"Only admin can login at the moment .."});const F={refferenceLetter:"IBTZ/2024/5",RLsentTo:"TARI",RLdate:"25-05-2022",resolutionPOA:"IBTZ150"},ds=()=>e.jsxs("div",{className:"services",children:[e.jsx(B,{in:!0,style:{transitionDelay:"500ms"},children:e.jsxs("div",{className:"services-card",children:[e.jsx("h2",{children:"Letter Refference Number"}),e.jsxs("p",{children:["Current Refference | ",e.jsx("b",{children:F.refferenceLetter})]}),e.jsxs("p",{children:["Used to | ",e.jsx("b",{children:F.RLsentTo})]}),e.jsxs("p",{children:["On | ",e.jsx("b",{children:F.RLdate})]}),e.jsx(y,{variant:"outlined",color:"success",size:"larger",sx:{fontWeight:"bold"},children:"Generate New"})]})}),e.jsx(B,{in:!0,style:{transitionDelay:"1000ms"},children:e.jsxs("div",{className:"services-card",children:[e.jsx("h2",{children:"SPOA Resolution Number"}),e.jsxs("p",{children:["Current RN | ",e.jsx("b",{children:F.resolutionPOA})," "]}),e.jsx(y,{variant:"outlined",color:"success",size:"larger",sx:{fontWeight:"bold"},children:"Generate New"})]})})]});const ls=({open:t,setfdbOpen:s,fdbMessage:n})=>{const o=(r,i)=>{i!=="clickaway"&&s(!1)},a=e.jsx(e.Fragment,{children:e.jsx(xe,{size:"small","aria-label":"close",color:"inherit",onClick:o,children:e.jsx(je,{fontSize:"small"})})});return e.jsx("div",{children:e.jsx(pe,{open:t,autoHideDuration:5e3,onClose:o,action:a,children:e.jsx(fe,{onClose:o,severity:n==="Record Exists!!"?"warning":"success",variant:"filled",sx:{width:"100%"},children:n})})})},us=()=>{const[t,s]=c.useState(!1),[n,o]=c.useState(!0),[a,r]=c.useState(0),[i,u]=c.useState(""),[x,h]=c.useState(!1),[b,p]=c.useState(""),l=w(),C=U(),M=k(d=>d.dns.dns),N=k(d=>d.user.user).user,W=async d=>{const g=new FormData;for(const m of d.files)g.append("files",m);try{Le.post(`${v}/api/delivery/notes`,g,{withCredentials:!0,onUploadProgress:m=>{const z=Math.round(m.loaded*100/m.total);o(!1),r(z-3)}}).then(m=>{m.status===200&&m.data.message!=="Record Exists!!"?(r(100),p("Upload Successfully!"),h(!0)):(p(`${m.data.message}`),h(!0),r(0)),s(!t),o(!0),r(0)}).catch(m=>console.log(m))}catch(m){console.log("Something went wrong!",m.message)}},S=async()=>{const d=document.getElementById("fileId");d.files.length===1&&(W(d),l(D()))};return c.useEffect(()=>{l(D())},[l,D]),c.useLayoutEffect(()=>{if(l(j()),N==="IBTZ")return C("/login")},[l,D,j]),e.jsxs("div",{children:[e.jsx(ls,{open:x,setfdbOpen:h,fdbMessage:b}),e.jsx("div",{style:{position:"absolute"},children:e.jsxs(X,{anchor:"bottom",open:t,children:[e.jsx("div",{className:"deliveryNoteHeader"}),e.jsx(Y,{sx:{"& .MuiTextField-root":{m:1,width:"30rem"},width:"100%",height:"100%",top:"7rem",padding:"1.5rem"},component:"form",children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",justifyItems:"center"},children:[e.jsx(ge,{type:"file",id:"fileId",required:!0,accept:"*.pdf"}),e.jsx(y,{variant:"contained",color:"success",component:"span",size:"large",onClick:S,startIcon:e.jsx(ye,{}),disabled:!n,children:"Upload"}),e.jsx("button",{style:{position:"absolute",top:"1rem",right:"1rem",backgroundColor:"black",color:"white",borderRadius:"50%"},onClick:d=>{d.preventDefault(),s(!t),r(0),o(!0)},type:"submit",disabled:!n,children:"X"}),e.jsx("div",{style:{width:100,height:100},children:e.jsx(_e,{value:a,text:`${a}%`})})]})})]})}),e.jsxs("form",{action:"",name:"searchBar",className:"search-dn",children:[e.jsx(y,{variant:"outlined",sx:{margin:"0.2rem",fontWeight:"bold"},onClick:()=>s(!t),color:"success",children:"Add New"}),e.jsx("input",{type:"text",style:{fontSize:"1rem"},placeholder:"Enter keyword -- DN name --",value:i,onChange:d=>u(d.target.value)})]}),M.filter(d=>i.toLowerCase()===""?!0:d.filename.toLowerCase().includes(i.toLowerCase())).map((d,g)=>e.jsx(B,{in:!0,style:{transitionDelay:`${g*50}ms`},children:e.jsxs("div",{className:"files_data",children:[e.jsx("div",{children:e.jsx("b",{children:d.filename})}),e.jsxs("div",{className:"files_data-actions",children:[e.jsxs("span",{children:[`${$(d.uploaddate).day}`,e.jsx("sup",{children:`${$(d.uploaddate).superString}`}),` ${$(d.uploaddate).monthInWord}`,` ${$(d.uploaddate).year}`]}),e.jsx("a",{href:`${d.viewlink}`,target:"_blank",children:e.jsx(ve,{})}),e.jsx("a",{href:`${d.downloadlink}`,children:e.jsx(be,{})}),e.jsx("span",{children:e.jsx("button",{type:"submit",id:d.fileid,disabled:!0,children:e.jsx(Ce,{})})})]})]})},g))]})};function hs({pCodeToEdit:t,open:s,setOpen:n,editState:o,setEdit:a}){const[r,i]=c.useState(""),[u,x]=c.useState(""),[h,b]=c.useState(""),[p,l]=c.useState(""),[C,M]=c.useState(""),[N,W]=c.useState(""),[S,d]=c.useState(""),g=w(),m=()=>{u&&r&&h&&p&&N&&S&&g(Q({product_description:r,product_code:u,discount:h,discount_condition:p,validity:C,image_link:N,product_link:S})),g(A()),n(!s)},z=()=>{u&&r&&h&&p&&N&&S&&g(updateExistingOffer({product_description:r,product_code:u,discount:h,discount_condition:p,validity:C,image_link:N,product_link:S})),g(ts()),n(!s),a(!o)};return e.jsx("div",{style:{position:"absolute"},children:e.jsxs(X,{anchor:"right",open:s,onClose:()=>n(!s),children:[e.jsx("div",{className:"head-cover",children:e.jsx("p",{children:"ADD NEW OFFER"})}),e.jsx(Y,{sx:{"& .MuiTextField-root":{m:1,width:"25ch"},minWidth:"30rem",height:"100%",top:"4rem",padding:"1.5rem"},component:"form",children:e.jsxs("div",{className:"input-fields-container",children:[e.jsxs(O,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(E,{htmlFor:"product_description",required:!0,children:"product_Description"}),e.jsx(_,{id:"product_description","aria-describedby":"product_description-input-field",type:"text",value:r,onChange:f=>i(f.target.value)})]}),e.jsxs(O,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(E,{htmlFor:"item-code",required:!0,children:"Item Code"}),e.jsx(_,{id:"item-code","aria-describedby":"item-code-input-field",type:"text",value:u,onChange:f=>x(f.target.value)})]}),e.jsxs(O,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(E,{htmlFor:"discount",required:!0,children:"Discount"}),e.jsx(_,{id:"discount","aria-describedby":"discount-input-field",type:"number",value:h,onChange:f=>b(f.target.value)})]}),e.jsxs(O,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(E,{id:"silvester",required:!0,children:"Discount Condition"}),e.jsxs(ke,{labelId:"silvester",id:"silvester",label:"condition",value:p,onChange:f=>l(f.target.value),children:[e.jsx(G,{value:"Offer valid until",children:"Offer valid untill"}),e.jsx(G,{value:"While stock last",children:"While stock last"})]})]}),e.jsx(O,{variant:"standard",sx:{m:1,minWidth:"100%"},children:e.jsx(_,{id:"validity","aria-describedby":"validity-input-field",type:"date",value:C,onChange:f=>M(f.target.value),disabled:p==="While stock last"})}),e.jsxs(O,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(E,{htmlFor:"image-address",required:!0,children:"Image Address"}),e.jsx(_,{id:"image-address","aria-describedby":"image-address-input-field",type:"text",value:N,onChange:f=>W(f.target.value)})]}),e.jsxs(O,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(E,{htmlFor:"product-link",required:!0,children:"Product Link"}),e.jsx(_,{id:"product-link","aria-describedby":"product-link-input-field",type:"text",value:S,onChange:f=>d(f.target.value)})]}),o?e.jsx(y,{variant:"outlined",sx:{margin:"1rem",fontWeight:"bold"},color:"secondary",onClick:z,children:"Save Changes"}):e.jsx(y,{variant:"outlined",sx:{margin:"1rem",fontWeight:"bold"},onClick:m,color:"secondary",children:"SUBMIT"})]})}),e.jsx("div",{className:"head-cover-footer"})]})})}function ms(){const[t,s]=c.useState(!1),[n,o]=c.useState(""),[a,r]=c.useState(!1),i=w(),u=U(),x=c.useRef(),h=k(l=>l.offers.currentOffers),b=k(l=>l.user.user).user,p=()=>{o(x.current.innerText),s(!t),r(!0)};return c.useLayoutEffect(()=>{if(i(A()),i(j()),b==="IBTZ")return u("/login")},[i,A,j]),e.jsxs("div",{className:"offers-container",children:[h.map((l,C)=>e.jsx(B,{in:!0,style:{transitionDelay:`${C*400+800}ms`},children:e.jsxs(we,{sx:{maxWidth:345},children:[e.jsx(Ne,{component:"img",alt:"product img",height:"auto",image:l.image_link}),e.jsxs(Se,{children:[e.jsx(q,{gutterBottom:!0,variant:"h5",component:"div",children:l.product_description}),e.jsxs(q,{gutterBottom:!0,variant:"p",component:"div",children:["Cat. no: ",e.jsx("span",{ref:x,children:l.product_code}),"."]}),e.jsxs(q,{variant:"body2",color:"text.secondary",sx:{marginTop:"1rem"},children:["Now available with ",e.jsxs("b",{children:[l.discount,"% Discount"]}),".",e.jsx("span",{children:l.validity===""?` ${l.discount_condition} `:` ${l.discount_condition} ${new Date(l.validity).getDate()}/${new Date(l.validity).getMonth()+1}/${new Date(l.validity).getFullYear()} `})]})]}),e.jsxs(Oe,{children:[e.jsx(y,{size:"small",onClick:p,children:"Edit"}),e.jsx(y,{size:"small",children:e.jsx(Te,{href:l.product_link,underline:"hover",target:"blank",children:"Learn more"})})]})]})},C)),e.jsx(hs,{open:t,setOpen:s,editState:a,setEdit:r,pCodeToEdit:n}),e.jsx("div",{className:"offer-add-new",children:e.jsxs("button",{onClick:()=>{s(!t),r(!1)},children:[e.jsx(ae,{})," NEW"]})})]})}const ps=se([{path:"/",element:e.jsx(Ke,{}),errorElement:e.jsx(Ve,{}),children:[{path:"services",element:e.jsx(ds,{})},{path:"stocked/chemicals",element:e.jsx(es,{})},{path:"login",element:e.jsx(is,{})},{path:"register",element:e.jsx(cs,{})},{path:"delivery-notes",element:e.jsx(us,{})},{path:"offers",element:e.jsx(ms,{})}]}]);ee.createRoot(document.getElementById("root")).render(e.jsx(H.StrictMode,{children:e.jsx(oe,{store:os,children:e.jsx(te,{router:ps})})}));
