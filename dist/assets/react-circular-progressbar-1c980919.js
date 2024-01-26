import{r as i}from"./react-4da7f7e8.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var u=function(a,e){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var s in r)r.hasOwnProperty(s)&&(t[s]=r[s])},u(a,e)};function R(a,e){u(a,e);function t(){this.constructor=a}a.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var f=100,C=100,k=50,l=50,h=50;function m(a){var e=a.className,t=a.counterClockwise,r=a.dashRatio,s=a.pathRadius,o=a.strokeWidth,n=a.style;return i.createElement("path",{className:e,style:Object.assign({},n,x({pathRadius:s,dashRatio:r,counterClockwise:t})),d:v({pathRadius:s,counterClockwise:t}),strokeWidth:o,fillOpacity:0})}function v(a){var e=a.pathRadius,t=a.counterClockwise,r=e,s=t?1:0;return`
      M `+l+","+h+`
      m 0,-`+r+`
      a `+r+","+r+" "+s+" 1 1 0,"+2*r+`
      a `+r+","+r+" "+s+" 1 1 0,-"+2*r+`
    `}function x(a){var e=a.counterClockwise,t=a.dashRatio,r=a.pathRadius,s=Math.PI*2*r,o=(1-t)*s;return{strokeDasharray:s+"px "+s+"px",strokeDashoffset:(e?-o:o)+"px"}}var E=function(a){R(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},e.prototype.getPathRadius=function(){return k-this.props.strokeWidth/2-this.getBackgroundPadding()},e.prototype.getPathRatio=function(){var t=this.props,r=t.value,s=t.minValue,o=t.maxValue,n=Math.min(Math.max(r,s),o);return(n-s)/(o-s)},e.prototype.render=function(){var t=this.props,r=t.circleRatio,s=t.className,o=t.classes,n=t.counterClockwise,c=t.styles,d=t.strokeWidth,p=t.text,g=this.getPathRadius(),y=this.getPathRatio();return i.createElement("svg",{className:o.root+" "+s,style:c.root,viewBox:"0 0 "+f+" "+C,"data-test-id":"CircularProgressbar"},this.props.background?i.createElement("circle",{className:o.background,style:c.background,cx:l,cy:h,r:k}):null,i.createElement(m,{className:o.trail,counterClockwise:n,dashRatio:r,pathRadius:g,strokeWidth:d,style:c.trail}),i.createElement(m,{className:o.path,counterClockwise:n,dashRatio:y*r,pathRadius:g,strokeWidth:d,style:c.path}),p?i.createElement("text",{className:o.text,style:c.text,x:l,y:h},p):null)},e.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},e}(i.Component);export{E as C};
