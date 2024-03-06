import{a as H,j as e,r as c}from"./react-4da7f7e8.js";import{c as te}from"./react-dom-0558681e.js";import{L as D,c as re,R as ne}from"./react-router-dom-3e4c2649.js";import{F as ae,a as oe,L as ie}from"./react-icons-1924df68.js";import{u as S,a as N,P as ce}from"./react-redux-40cd5e78.js";import{c as F,a as I,b as de}from"./@reduxjs-f2bc3b37.js";import{S as le,T as Z,d as J,a as ue,C as he,A as me,B as k,b as pe,c as fe,e as X,f as Y,Z as U,I as xe,g as je,D as K,h as V,i as ge,j as ye,k as ve,l as be,m as Ce,F as T,n as _,o as L,p as ke,M as G,q as we,r as Se,s as Ne,t as q,u as Oe,L as Te}from"./@mui-c62ebfc4.js";import{c as W,O as De,f as Ee}from"./react-router-01041704.js";import{C as _e}from"./react-circular-progressbar-1c980919.js";import{a as Le}from"./axios-c24e582b.js";import"./hoist-non-react-statics-23d96a9a.js";import"./@babel-08013fda.js";import"./scheduler-765c72db.js";import"./@remix-run-f96eec5b.js";import"./use-sync-external-store-78ed2917.js";import"./immer-41fd5235.js";import"./redux-a54cdd54.js";import"./redux-thunk-ef899f4c.js";import"./clsx-1229b3e0.js";import"./@emotion-12f15d9d.js";import"./stylis-79144faa.js";import"./react-transition-group-dfbcdf08.js";import"./@popperjs-f3391c26.js";import"./react-is-e8e5dbb3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const R=t=>{const s=new Date(t),n=s.getDate(),o=s.getMonth()+1,a=s.getFullYear();let r="",i="";switch(o){case 1:{i="Jan";break}case 2:{i="Feb";break}case 3:{i="Mar";break}case 4:{i="Apr";break}case 5:{i="May";break}case 6:{i="Jun";break}case 7:{i="Jul";break}case 8:{i="Aug";break}case 9:{i="Sept";break}case 10:{i="Oct";break}case 11:{i="Nov";break}case 12:{i="Dec";break}default:{i="";break}}if(n===11||n===12||n===13)return{day:n,monthInWord:i,year:a,superString:"th"};switch(String(n).length>1?parseInt(String(n)[1]):n){case 1:{r="st";break}case 0:{r="th";break}case 2:{r="nd";break}case 3:{r="rd";break}case 4:{r="th";break}case 5:{r="th";break}case 6:{r="th";break}case 7:{r="th";break}case 8:{r="th";break}case 9:{r="th";break}default:{r="";break}}return{day:n,monthInWord:i,year:a,superString:r}},Ie=t=>t.reverse(),w="https://stt-server.onrender.com",$e=async()=>{const s=await(await fetch(`${w}/api/stocked/products`,{credentials:"include"})).json();return console.log(s.length),s},Fe=async()=>(await fetch(w+"/api/logout",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"})).status,Re=async(t,s)=>{const n=JSON.stringify({email:t,password:s});try{const o=await fetch(w+"/api/login",{method:"POST",credentials:"include",body:n,headers:{"Content-Type":"application/json"}}),a=await o.json(),r=o.status;return{status:a,statusCode:r}}catch{return{status:{name:void 0},statusCode:404}}},Pe=async()=>{try{return await(await fetch(`${w}/api/stocked/logs`,{credentials:"include"})).json()}catch(t){return console.error(t),{}}},Be=async()=>{try{const s=await(await fetch(`${w}/api/current/offers`,{credentials:"include"})).json();return s.message==="Unauthorized"?[]:s}catch(t){return console.error(t.message),[]}},Ae=async t=>{const{product_code:s,product_description:n,image_link:o,product_link:a,validity:r,discount_condition:i,discount:u}=t;t=r!==""?t:{product_code:s,product_description:n,image_link:o,product_link:a,validity:"1995-01-01",discount_condition:i,discount:u};try{return await(await fetch(`${w}/api/current/addOffer`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}catch(x){return console.error(x.message),"Error"}},Ue=async()=>{try{const s=await(await fetch(`${w}/api/delivery/dns`,{credentials:"include"})).json();return s.message==="Unauthorized"?[]:Ie(s)}catch(t){return console.error(t),[]}},Me=async()=>{try{return await(await fetch(`${w}/api/user`,{credentials:"include"})).json()}catch(t){console.error(t.message)}},We=F({name:"chemicals",initialState:{chemicals:[],status:"idle",error:"",lastUpdated:{}},reducers:{},extraReducers(t){t.addCase(B.pending,s=>{s.status="loading"}).addCase(B.fulfilled,(s,n)=>{s.status="succeeded",n.payload.message=="No data"?s.chemicals=[]:s.chemicals=n.payload}).addCase(B.rejected,(s,n)=>{s.status="failed",s.error=n.error.message}).addCase(A.pending,s=>{s.lastUpdated={}}).addCase(A.fulfilled,(s,n)=>{s.lastUpdated={...n.payload}}).addCase(A.rejected,s=>{s.lastUpdated={}})}}),ze=We.reducer,B=I("chemicals/fetchData",$e),A=I("chemicals/fetchCurrentStockLogs",Pe);H.forwardRef(function(s,n){return e.jsx(le,{direction:"up",ref:n,...s})});const qe=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"category-header",children:"CATEGORIES"}),e.jsx(D,{className:"category-link",to:"stocked/chemicals",children:"Chemicals"}),e.jsx(D,{className:"category-link",to:"services",children:"Services"}),e.jsx(D,{className:"category-link",to:"stockTake",style:{display:"none"},children:"FifoTool"}),e.jsx(D,{className:"category-link",to:"offers",children:e.jsx(Z,{title:e.jsx(J,{fontSize:"small"}),placement:"right",children:e.jsx("span",{children:"Specials"})})}),e.jsx(D,{className:"category-link",to:"delivery-notes",style:{display:"block"},children:e.jsx(Z,{title:e.jsx(J,{fontSize:"small"}),placement:"right",children:e.jsx("span",{children:"D_Notes"})})})]}),Ze=F({name:"upload",initialState:{upload:!0},reducers:{toggleOnOff(t,s){t.upload=s.payload}}}),Je=Ze.reducer,Ge=()=>{window.onscroll=function(){t()};function t(){const n=document.getElementById("top");(document.body.scrollTop>20||document.documentElement.scrollTop>20)&&(window.location.hash==="#/stocked/chemicals"||window.location.hash==="#/delivery-notes")?n.style.display="block":n.style.display="none"}function s(){document.body.scrollTop=0,document.documentElement.scrollTop=0}return e.jsx("button",{className:"top",id:"top",onClick:s,children:"TOP"})},He=F({name:"user",initialState:{user:"IBTZ"},extraReducers(t){t.addCase(g.fulfilled,(s,n)=>{console.log("called fetch User fx"),s.user=n.payload})}}),g=I("user/fetchUser",Me),Xe=He.reducer,Ye=()=>{const t=S(o=>o.user.user),s=N(),n=t.user||"IBTZ";return c.useEffect(()=>{s(g())},[s,g]),e.jsx(ue,{direction:"row",spacing:3,children:e.jsx(he,{avatar:e.jsx(me,{children:n[0]}),label:n,color:n==="IBTZ"?"error":"success"})})},Ke=()=>{const[t,s]=c.useState(!0),n=N(),o=W(),a=()=>{document.getElementById("drawer").style.width="0"},r=()=>{document.getElementById("drawer").style.width="11rem"},i=async()=>{const u=await Fe();console.log(u),u===200?(n(g()),o("/stocked/chemicals")):console.log(u.statusText)};return c.useEffect(()=>{n(g()),setTimeout(()=>{o("/stocked/chemicals"),s(!1)},500)},[n,g]),e.jsxs("div",{className:"container",children:[e.jsxs("header",{className:"header",children:[e.jsx("div",{className:"menu",onClick:r,children:e.jsx(ae,{className:"home-icon"})}),e.jsxs("div",{className:"header-right-navbar",children:[e.jsx(D,{to:"login",className:"demo-link",children:e.jsx(k,{variant:"outlined",sx:{color:"white",border:"none"},children:"LOGIN"})}),e.jsx(k,{variant:"outlined",sx:{color:"white",border:"none"},onClick:i,children:"LOGOUT"}),e.jsx(Ye,{})]})]}),e.jsxs("main",{className:"main",children:[e.jsxs("div",{className:"drawer",id:"drawer",autoFocus:!0,children:[e.jsx("div",{className:"close-btn",onClick:a,children:e.jsx(oe,{})}),e.jsx("div",{className:"categories",children:e.jsx(qe,{})})]}),e.jsxs("div",{className:"main-content",id:"main",children:[t?e.jsx("p",{style:{color:"red"},children:"Redirecting to home in 1s ..."}):e.jsx(De,{}),e.jsx(Ge,{})]})]}),e.jsx("footer",{className:"footer",children:"All rights reserved"})]})};const Ve=()=>{const t=Ee();return e.jsxs("div",{id:"error-page",children:[e.jsx("h1",{children:"Oops!"}),e.jsx("p",{children:"Sorry, an unexpected error has occurred."}),e.jsx("p",{children:e.jsx("i",{children:t.statusText||t.message})}),e.jsx(D,{to:"/",children:e.jsx("button",{className:"return-home",children:"HOME"})})]})};const Qe=({searchTerm:t,setSearchTerm:s})=>{const n=N(),o=S(r=>r.chemicals.lastUpdated),a=new Date(o.changed_on);return c.useEffect(()=>{n(A())},[n]),e.jsxs("div",{className:"instructions",children:[e.jsxs("div",{className:"fore-ground",children:[e.jsx("p",{children:"All chemicals belong to a specific box, each box has a unique box number (look below in Box Number)."}),e.jsxs("p",{children:["PLEASE NOTE: When you remove a chemical in the box, you have to record, the ",e.jsx("b",{children:"catalog number"})," of the chemical and ",e.jsx("b",{children:"quantity"})," ","taken out."]})]}),e.jsxs("div",{className:"logs fore-ground",children:[e.jsxs("p",{children:[e.jsx("b",{children:"Updated on: "}),e.jsx("span",{className:"logs-color",children:`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`})]}),e.jsxs("p",{children:[e.jsx("b",{children:"Updated by: "}),e.jsx("span",{className:"logs-color",children:`${o.name}`})]}),e.jsx("hr",{}),e.jsx("form",{action:"",className:"search-form",children:e.jsx("input",{type:"text",id:"search-field",className:"search-field",placeholder:"Enter keyword -- ethanol --",value:t,onChange:r=>s(r.target.value)})})]})]})};const Q=({message:t=""})=>e.jsx("div",{children:e.jsxs(pe,{sx:{color:"#fff",zIndex:s=>s.zIndex.drawer+1},open:!0,children:[e.jsxs("h1",{className:"backdrop-message",children:[t,"  "]}),t===""?e.jsx(fe,{color:"inherit"}):e.jsx(e.Fragment,{})]})}),es=()=>{const[t,s]=c.useState(""),n=N(),o=S(r=>r.chemicals.chemicals),a=S(r=>r.chemicals.status);return c.useEffect(()=>{a==="idle"&&n(B())},[n,a]),e.jsxs("div",{className:"table",children:[a==="loading"?e.jsx(Q,{}):e.jsx(e.Fragment,{}),e.jsx(Qe,{searchTerm:t,setSearchTerm:s}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Stock"}),e.jsx("th",{children:"Store"}),e.jsx("th",{children:"Box"})]})}),e.jsx("tbody",{children:o.length<=0?e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{})]}):o.filter(r=>t.toLowerCase()===""?!0:r.product_description.toLowerCase().includes(t.toLowerCase())).map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:r.product_code}),e.jsx("td",{children:r.product_description}),e.jsx("td",{style:{textAlign:"center"},children:r.qty_instock}),e.jsx("td",{style:{textAlign:"center"},children:r.store_location}),e.jsx("td",{style:{textAlign:"center"},children:r.box_number})]},r.product_code))})]})]})},ss=[{product_description:"Mastercycler® X50 - PCR Thermocycler",product_code:"6303000010",discount:"20",discount_condition:"Offer valid until ",validity:"30 Dec 2024",img_link:"https://www.eppendorf.com/product-media/img/global/233332/Eppendorf_PCR_Mastercycler-X50s_product.jpg?imwidth=540",product_link:"https://www.eppendorf.com/za-en/eShop-Products/PCR/Thermocyclers/Mastercycler-X50-p-PF-217186"}],ee=F({name:"offers",initialState:{currentOffers:ss,status:""},reducers:{getOffers(t){t.currentOffers=t.currentOffers},addNewOffer(t,s){t.currentOffers=[...t.currentOffers,s.payload]},updateExistingOffer(t,s){t.currentOffers.find(o=>o.product_code===s.payload.product_code)||console.log("product does not exist")}},extraReducers(t){t.addCase(M.fulfilled,(s,n)=>{s.status="success",s.currentOffers=n.payload}).addCase(se.fulfilled,(s,n)=>{s.status=n.payload})}}),M=I("offers/fetchOffers",Be),se=I("offers/addNewOffer",Ae),{getOffers:ts,addNewOffer:As,updateExistingOffer:Us}=ee.actions,rs=ee.reducer,ns=F({name:"deliveries",initialState:{dns:[],status:""},reducers:{},extraReducers(t){t.addCase(E.pending,(s,n)=>{s.status="loading"}).addCase(E.fulfilled,(s,n)=>{s.dns=n.payload}).addCase(E.rejected,(s,n)=>{s.dns=[...s.dns],s.status="fail"})}}),E=I("deliveries/fetchDns",Ue),as=ns.reducer,os=de({reducer:{chemicals:ze,upload:Je,offers:rs,dns:as,user:Xe}});const is=()=>{const[t,s]=c.useState(""),[n,o]=c.useState(""),[a,r]=c.useState(!1),[i,u]=c.useState(!1),[x,h]=c.useState(""),[O,m]=c.useState(""),l=W(),y=N(),$=async b=>{b.preventDefault(),r(!a);const{status:j,statusCode:d}=await Re(n,t);j.name&&d===200?(r(a),y(g()),setTimeout(()=>{l("/stocked/chemicals")},1e3*2),m("success"),u(!0),h("Authenticated successfully")):(r(a),m("error"),u(!0),h("Incorrect credentials"))},v=(b,j)=>{j!=="clickaway"&&u(!1)};return e.jsxs("div",{className:"login",children:[a?e.jsx(Q,{message:"let's sign you in ..."}):e.jsx(e.Fragment,{}),e.jsx("h1",{className:"login-header",children:"enter your credentials below.."}),e.jsxs("form",{action:"",method:"post",className:"login-form",onSubmit:$,children:[e.jsx("input",{type:"email",placeholder:"Enter email",id:"email",name:"email",className:"input-field",value:n,onChange:b=>o(b.target.value),required:!0,autoComplete:"email"}),e.jsx("input",{type:"password",placeholder:"password",id:"password",name:"password",className:"input-field",value:t,onChange:b=>s(b.target.value),required:!0}),e.jsx("button",{className:"logon-btn",type:"submit",children:"LOGIN"})]}),e.jsx("div",{children:e.jsx(X,{open:i,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:v,children:e.jsx(Y,{onClose:v,severity:O,variant:"filled",sx:{width:"100%"},children:x})})})]})};const cs=()=>e.jsx("div",{className:"register",children:"Only admin can login at the moment .."});const P={refferenceLetter:"IBTZ/2024/5",RLsentTo:"TARI",RLdate:"25-05-2022",resolutionPOA:"IBTZ150"},ds=()=>e.jsxs("div",{className:"services",children:[e.jsx(U,{in:!0,style:{transitionDelay:"500ms"},children:e.jsxs("div",{className:"services-card",children:[e.jsx("h2",{children:"Letter Refference Number"}),e.jsxs("p",{children:["Current Refference | ",e.jsx("b",{children:P.refferenceLetter})]}),e.jsxs("p",{children:["Used to | ",e.jsx("b",{children:P.RLsentTo})]}),e.jsxs("p",{children:["On | ",e.jsx("b",{children:P.RLdate})]}),e.jsx(k,{variant:"outlined",color:"success",size:"larger",sx:{fontWeight:"bold"},children:"Generate New"})]})}),e.jsx(U,{in:!0,style:{transitionDelay:"1000ms"},children:e.jsxs("div",{className:"services-card",children:[e.jsx("h2",{children:"SPOA Resolution Number"}),e.jsxs("p",{children:["Current RN | ",e.jsx("b",{children:P.resolutionPOA})," "]}),e.jsx(k,{variant:"outlined",color:"success",size:"larger",sx:{fontWeight:"bold"},children:"Generate New"})]})})]});const ls=({open:t,setfdbOpen:s,fdbMessage:n})=>{const o=(r,i)=>{i!=="clickaway"&&s(!1)},a=e.jsx(e.Fragment,{children:e.jsx(xe,{size:"small","aria-label":"close",color:"inherit",onClick:o,children:e.jsx(je,{fontSize:"small"})})});return e.jsx("div",{children:e.jsx(X,{open:t,autoHideDuration:5e3,onClose:o,action:a,children:e.jsx(Y,{onClose:o,severity:n==="Record Exists!!"?"warning":"success",variant:"filled",sx:{width:"100%"},children:n})})})},us=()=>{const[t,s]=c.useState(!1),[n,o]=c.useState(!0),[a,r]=c.useState(0),[i,u]=c.useState(""),[x,h]=c.useState(!1),[O,m]=c.useState(""),l=N(),y=W(),$=S(d=>d.dns.dns),v=S(d=>d.user.user).user,b=async d=>{const C=new FormData;for(const p of d.files)C.append("files",p);try{Le.post(`${w}/api/delivery/notes`,C,{withCredentials:!0,onUploadProgress:p=>{const z=Math.round(p.loaded*100/p.total);o(!1),r(z-3)}}).then(p=>{p.status===200&&p.data.message!=="Record Exists!!"?(r(100),m("Upload Successfully!"),h(!0)):(m(`${p.data.message}`),h(!0),r(0)),s(!t),o(!0),r(0)}).catch(p=>console.log(p))}catch(p){console.log("Something went wrong!",p.message)}},j=async()=>{const d=document.getElementById("fileId");d.files.length===1&&(b(d),l(E()))};return c.useEffect(()=>{l(E())},[l,E]),c.useLayoutEffect(()=>{if(l(g()),v==="IBTZ")return y("/login")},[l,E,g]),e.jsxs("div",{children:[e.jsx(ls,{open:x,setfdbOpen:h,fdbMessage:O}),e.jsx("div",{style:{position:"absolute"},children:e.jsxs(K,{anchor:"bottom",open:t,children:[e.jsx("div",{className:"deliveryNoteHeader"}),e.jsx(V,{sx:{"& .MuiTextField-root":{m:1,width:"30rem"},width:"100%",height:"100%",top:"7rem",padding:"1.5rem"},component:"form",children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",justifyItems:"center"},children:[e.jsx(ge,{type:"file",id:"fileId",required:!0,accept:"*.pdf"}),e.jsx(k,{variant:"contained",color:"success",component:"span",size:"large",onClick:j,startIcon:e.jsx(ye,{}),disabled:!n,children:"Upload"}),e.jsx("button",{style:{position:"absolute",top:"1rem",right:"1rem",backgroundColor:"black",color:"white",borderRadius:"50%"},onClick:d=>{d.preventDefault(),s(!t),r(0),o(!0)},type:"submit",disabled:!n,children:"X"}),e.jsx("div",{style:{width:100,height:100},children:e.jsx(_e,{value:a,text:`${a}%`})})]})})]})}),e.jsxs("form",{action:"",name:"searchBar",className:"search-dn",children:[e.jsx(k,{variant:"outlined",sx:{margin:"0.2rem",fontWeight:"bold"},onClick:()=>s(!t),color:"success",children:"Add New"}),e.jsx("input",{type:"text",style:{fontSize:"1rem"},placeholder:"Enter keyword -- DN name --",value:i,onChange:d=>u(d.target.value)})]}),$.filter(d=>i.toLowerCase()===""?!0:d.filename.toLowerCase().includes(i.toLowerCase())).map((d,C)=>e.jsx(U,{in:!0,style:{transitionDelay:`${C*50}ms`},children:e.jsxs("div",{className:"files_data",children:[e.jsx("div",{children:e.jsx("b",{children:d.filename})}),e.jsxs("div",{className:"files_data-actions",children:[e.jsxs("span",{children:[`${R(d.uploaddate).day}`,e.jsx("sup",{children:`${R(d.uploaddate).superString}`}),` ${R(d.uploaddate).monthInWord}`,` ${R(d.uploaddate).year}`]}),e.jsx("a",{href:`${d.viewlink}`,target:"_blank",children:e.jsx(ve,{})}),e.jsx("a",{href:`${d.downloadlink}`,children:e.jsx(be,{})}),e.jsx("span",{children:e.jsx("button",{type:"submit",id:d.fileid,disabled:!0,children:e.jsx(Ce,{})})})]})]})},C))]})};function hs({pCodeToEdit:t,open:s,setOpen:n,editState:o,setEdit:a}){const[r,i]=c.useState(""),[u,x]=c.useState(""),[h,O]=c.useState(""),[m,l]=c.useState(""),[y,$]=c.useState(""),[v,b]=c.useState(""),[j,d]=c.useState(""),C=N(),p=()=>{u&&r&&h&&m&&v&&j&&C(se({product_description:r,product_code:u,discount:h,discount_condition:m,validity:y,image_link:v,product_link:j})),C(M()),n(!s)},z=()=>{u&&r&&h&&m&&v&&j&&C(updateExistingOffer({product_description:r,product_code:u,discount:h,discount_condition:m,validity:y,image_link:v,product_link:j})),C(ts()),n(!s),a(!o)};return e.jsx("div",{style:{position:"absolute"},children:e.jsxs(K,{anchor:"right",open:s,onClose:()=>n(!s),children:[e.jsx("div",{className:"head-cover",children:e.jsx("p",{children:"ADD NEW OFFER"})}),e.jsx(V,{sx:{"& .MuiTextField-root":{m:1,width:"25ch"},minWidth:"30rem",height:"100%",top:"4rem",padding:"1.5rem"},component:"form",children:e.jsxs("div",{className:"input-fields-container",children:[e.jsxs(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(_,{htmlFor:"product_description",required:!0,children:"product_Description"}),e.jsx(L,{id:"product_description","aria-describedby":"product_description-input-field",type:"text",value:r,onChange:f=>i(f.target.value)})]}),e.jsxs(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(_,{htmlFor:"item-code",required:!0,children:"Item Code"}),e.jsx(L,{id:"item-code","aria-describedby":"item-code-input-field",type:"text",value:u,onChange:f=>x(f.target.value)})]}),e.jsxs(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(_,{htmlFor:"discount",required:!0,children:"Discount"}),e.jsx(L,{id:"discount","aria-describedby":"discount-input-field",type:"number",value:h,onChange:f=>O(f.target.value)})]}),e.jsxs(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(_,{id:"silvester",required:!0,children:"Discount Condition"}),e.jsxs(ke,{labelId:"silvester",id:"silvester",label:"condition",value:m,onChange:f=>l(f.target.value),children:[e.jsx(G,{value:"Offer valid until",children:"Offer valid untill"}),e.jsx(G,{value:"While stock last",children:"While stock last"})]})]}),e.jsx(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:e.jsx(L,{id:"validity","aria-describedby":"validity-input-field",type:"date",value:y,onChange:f=>$(f.target.value),disabled:m==="While stock last"})}),e.jsxs(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(_,{htmlFor:"image-address",required:!0,children:"Image Address"}),e.jsx(L,{id:"image-address","aria-describedby":"image-address-input-field",type:"text",value:v,onChange:f=>b(f.target.value)})]}),e.jsxs(T,{variant:"standard",sx:{m:1,minWidth:"100%"},children:[e.jsx(_,{htmlFor:"product-link",required:!0,children:"Product Link"}),e.jsx(L,{id:"product-link","aria-describedby":"product-link-input-field",type:"text",value:j,onChange:f=>d(f.target.value)})]}),o?e.jsx(k,{variant:"outlined",sx:{margin:"1rem",fontWeight:"bold"},color:"secondary",onClick:z,children:"Save Changes"}):e.jsx(k,{variant:"outlined",sx:{margin:"1rem",fontWeight:"bold"},onClick:p,color:"secondary",children:"SUBMIT"})]})}),e.jsx("div",{className:"head-cover-footer"})]})})}function ms(){const[t,s]=c.useState(!1),[n,o]=c.useState(""),[a,r]=c.useState(!1),i=N(),u=W(),x=c.useRef(),h=S(l=>l.offers.currentOffers),O=S(l=>l.user.user).user,m=()=>{o(x.current.innerText),s(!t),r(!0)};return c.useLayoutEffect(()=>{if(i(M()),i(g()),O==="IBTZ")return u("/login")},[i,M,g]),e.jsxs("div",{className:"offers-container",children:[h.map((l,y)=>e.jsx(U,{in:!0,style:{transitionDelay:`${y*400+800}ms`},children:e.jsxs(we,{sx:{maxWidth:345},children:[e.jsx(Se,{component:"img",alt:"product img",height:"auto",image:l.image_link}),e.jsxs(Ne,{children:[e.jsx(q,{gutterBottom:!0,variant:"h5",component:"div",children:l.product_description}),e.jsxs(q,{gutterBottom:!0,variant:"p",component:"div",children:["Cat. no: ",e.jsx("span",{ref:x,children:l.product_code}),"."]}),e.jsxs(q,{variant:"body2",color:"text.secondary",sx:{marginTop:"1rem"},children:["Now available with ",e.jsxs("b",{children:[l.discount,"% Discount"]}),".",e.jsx("span",{children:l.validity===""?` ${l.discount_condition} `:` ${l.discount_condition} ${new Date(l.validity).getDate()}/${new Date(l.validity).getMonth()+1}/${new Date(l.validity).getFullYear()} `})]})]}),e.jsxs(Oe,{children:[e.jsx(k,{size:"small",onClick:m,children:"Edit"}),e.jsx(k,{size:"small",children:e.jsx(Te,{href:l.product_link,underline:"hover",target:"blank",children:"Learn more"})})]})]})},y)),e.jsx(hs,{open:t,setOpen:s,editState:a,setEdit:r,pCodeToEdit:n}),e.jsx("div",{className:"offer-add-new",children:e.jsxs("button",{onClick:()=>{s(!t),r(!1)},children:[e.jsx(ie,{})," NEW"]})})]})}const ps=re([{path:"/",element:e.jsx(Ke,{}),errorElement:e.jsx(Ve,{}),children:[{path:"services",element:e.jsx(ds,{})},{path:"stocked/chemicals",element:e.jsx(es,{})},{path:"login",element:e.jsx(is,{})},{path:"register",element:e.jsx(cs,{})},{path:"delivery-notes",element:e.jsx(us,{})},{path:"offers",element:e.jsx(ms,{})}]}]);te.createRoot(document.getElementById("root")).render(e.jsx(H.StrictMode,{children:e.jsx(ce,{store:os,children:e.jsx(ne,{router:ps})})}));
