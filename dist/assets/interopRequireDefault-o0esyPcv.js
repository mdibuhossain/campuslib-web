import{r as a,m}from"./index-wJGs2Dyv.js";function _(...e){return e.reduce((t,u)=>u==null?t:function(...l){t.apply(this,l),u.apply(this,l)},()=>{})}function y(e,t){var u,n;return a.isValidElement(e)&&t.indexOf((u=e.type.muiName)!=null?u:(n=e.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}let s=0;function x(e){const[t,u]=a.useState(e),n=e||t;return a.useEffect(()=>{t==null&&(s+=1,u(`mui-${s}`))},[t]),n}const r=m.useId;function v(e){if(r!==void 0){const t=r();return e??t}return x(e)}function E({controlled:e,default:t,name:u,state:n="value"}){const{current:l}=a.useRef(e!==void 0),[i,f]=a.useState(t),c=l?e:i,p=a.useCallback(d=>{l||f(d)},[]);return[c,p]}var o={exports:{}};(function(e){function t(u){return u&&u.__esModule?u:{default:u}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(o);var R=o.exports;export{v as a,y as b,_ as c,R as i,E as u};