import{a as c}from"./react-4da7f7e8.js";var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=c.createContext&&c.createContext(g),l=globalThis&&globalThis.__assign||function(){return l=Object.assign||function(t){for(var r,e=1,a=arguments.length;e<a;e++){r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)},h=globalThis&&globalThis.__rest||function(t,r){var e={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(e[a[n]]=t[a[n]]);return e};function m(t){return t&&t.map(function(r,e){return c.createElement(r.tag,l({key:e},r.attr),m(r.child))})}function i(t){return function(r){return c.createElement(v,l({attr:l({},t.attr)},r),m(t.child))}}function v(t){var r=function(e){var a=t.attr,n=t.size,s=t.title,d=h(t,["attr","size","title"]),u=n||e.size||"1em",o;return e.className&&(o=e.className),t.className&&(o=(o?o+" ":"")+t.className),c.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,d,{className:o,style:l(l({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&c.createElement("title",null,s),t.children)};return f!==void 0?c.createElement(f.Consumer,null,function(e){return r(e)}):r(g)}function b(t){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M427.84 380.67l-196.5 97.82a18.6 18.6 0 0 1-14.67 0L20.16 380.67c-4-2-4-5.28 0-7.29L67.22 350a18.65 18.65 0 0 1 14.69 0l134.76 67a18.51 18.51 0 0 0 14.67 0l134.76-67a18.62 18.62 0 0 1 14.68 0l47.06 23.43c4.05 1.96 4.05 5.24 0 7.24zm0-136.53l-47.06-23.43a18.62 18.62 0 0 0-14.68 0l-134.76 67.08a18.68 18.68 0 0 1-14.67 0L81.91 220.71a18.65 18.65 0 0 0-14.69 0l-47.06 23.43c-4 2-4 5.29 0 7.31l196.51 97.8a18.6 18.6 0 0 0 14.67 0l196.5-97.8c4.05-2.02 4.05-5.3 0-7.31zM20.16 130.42l196.5 90.29a20.08 20.08 0 0 0 14.67 0l196.51-90.29c4-1.86 4-4.89 0-6.74L231.33 33.4a19.88 19.88 0 0 0-14.67 0l-196.5 90.28c-4.05 1.85-4.05 4.88 0 6.74z"}}]})(t)}function w(t){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"}}]})(t)}function O(t){return i({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"}},{tag:"path",attr:{d:"M12 5v14"}}]})(t)}export{b as F,O as L,w as a};