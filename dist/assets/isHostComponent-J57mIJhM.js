import{R as A,r as a,_ as X,b as te,d as E,j as _,g as be,an as ne,s as oe,u as ge,a as Ie,e as Oe}from"./index-wJGs2Dyv.js";import{e as ce,f as Ue,a as W}from"./createSvgIcon-yjtepLD4.js";function Z(e,o){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,t){return l.__proto__=t,l},Z(e,o)}function ze(e,o){e.prototype=Object.create(o.prototype),e.prototype.constructor=e,Z(e,o)}const pe=A.createContext(null);function Ke(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ie(e,o){var s=function(n){return o&&a.isValidElement(n)?o(n):n},l=Object.create(null);return e&&a.Children.map(e,function(t){return t}).forEach(function(t){l[t.key]=s(t)}),l}function Ae(e,o){e=e||{},o=o||{};function s(d){return d in o?o[d]:e[d]}var l=Object.create(null),t=[];for(var n in e)n in o?t.length&&(l[n]=t,t=[]):t.push(n);var i,c={};for(var u in o){if(l[u])for(i=0;i<l[u].length;i++){var p=l[u][i];c[l[u][i]]=s(p)}c[u]=s(u)}for(i=0;i<t.length;i++)c[t[i]]=s(t[i]);return c}function k(e,o,s){return s[o]!=null?s[o]:e.props[o]}function Xe(e,o){return ie(e.children,function(s){return a.cloneElement(s,{onExited:o.bind(null,s),in:!0,appear:k(s,"appear",e),enter:k(s,"enter",e),exit:k(s,"exit",e)})})}function Ye(e,o,s){var l=ie(e.children),t=Ae(o,l);return Object.keys(t).forEach(function(n){var i=t[n];if(a.isValidElement(i)){var c=n in o,u=n in l,p=o[n],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?t[n]=a.cloneElement(i,{onExited:s.bind(null,i),in:!0,exit:k(i,"exit",e),enter:k(i,"enter",e)}):!u&&c&&!d?t[n]=a.cloneElement(i,{in:!1}):u&&c&&a.isValidElement(p)&&(t[n]=a.cloneElement(i,{onExited:s.bind(null,i),in:p.props.in,exit:k(i,"exit",e),enter:k(i,"enter",e)}))}}),t}var He=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},We={component:"div",childFactory:function(o){return o}},re=function(e){ze(o,e);function o(l,t){var n;n=e.call(this,l,t)||this;var i=n.handleExited.bind(Ke(n));return n.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},n}var s=o.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(t,n){var i=n.children,c=n.handleExited,u=n.firstRender;return{children:u?Xe(t,c):Ye(t,i,c),firstRender:!1}},s.handleExited=function(t,n){var i=ie(this.props.children);t.key in i||(t.props.onExited&&t.props.onExited(n),this.mounted&&this.setState(function(c){var u=X({},c.children);return delete u[t.key],{children:u}}))},s.render=function(){var t=this.props,n=t.component,i=t.childFactory,c=te(t,["component","childFactory"]),u=this.state.contextValue,p=He(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,n===null?A.createElement(pe.Provider,{value:u},p):A.createElement(pe.Provider,{value:u},A.createElement(n,c,p))},o}(A.Component);re.propTypes={};re.defaultProps=We;const Ge=re;function qe(e){const{className:o,classes:s,pulsate:l=!1,rippleX:t,rippleY:n,rippleSize:i,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=E(o,s.ripple,s.rippleVisible,l&&s.ripplePulsate),C={width:i,height:i,top:-(i/2)+n,left:-(i/2)+t},h=E(s.child,d&&s.childLeaving,l&&s.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),_.jsx("span",{className:b,style:C,children:_.jsx("span",{className:h})})}const Je=be("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Je,Qe=["center","classes","className"];let G=e=>e,fe,de,he,me;const ee=550,Ze=80,et=ne(fe||(fe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),tt=ne(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),nt=ne(he||(he=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ot=oe("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),it=oe(qe,{name:"MuiTouchRipple",slot:"Ripple"})(me||(me=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,et,ee,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,tt,ee,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,nt,({theme:e})=>e.transitions.easing.easeInOut),rt=a.forwardRef(function(o,s){const l=ge({props:o,name:"MuiTouchRipple"}),{center:t=!1,classes:n={},className:i}=l,c=te(l,Qe),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),C=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{C.current&&clearTimeout(C.current)},[]);const I=a.useCallback(f=>{const{pulsate:y,rippleX:M,rippleY:L,rippleSize:N,cb:U}=f;p(T=>[...T,_.jsx(it,{classes:{ripple:E(n.ripple,m.ripple),rippleVisible:E(n.rippleVisible,m.rippleVisible),ripplePulsate:E(n.ripplePulsate,m.ripplePulsate),child:E(n.child,m.child),childLeaving:E(n.childLeaving,m.childLeaving),childPulsate:E(n.childPulsate,m.childPulsate)},timeout:ee,pulsate:y,rippleX:M,rippleY:L,rippleSize:N},d.current)]),d.current+=1,g.current=U},[n]),j=a.useCallback((f={},y={},M=()=>{})=>{const{pulsate:L=!1,center:N=t||y.pulsate,fakeElement:U=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const T=U?null:R.current,B=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,D,w;if(N||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(B.width/2),D=Math.round(B.height/2);else{const{clientX:S,clientY:P}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(S-B.left),D=Math.round(P-B.top)}if(N)w=Math.sqrt((2*B.width**2+B.height**2)/3),w%2===0&&(w+=1);else{const S=Math.max(Math.abs((T?T.clientWidth:0)-v),v)*2+2,P=Math.max(Math.abs((T?T.clientHeight:0)-D),D)*2+2;w=Math.sqrt(S**2+P**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{I({pulsate:L,rippleX:v,rippleY:D,rippleSize:w,cb:M})},C.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},Ze)):I({pulsate:L,rippleX:v,rippleY:D,rippleSize:w,cb:M})},[t,I]),O=a.useCallback(()=>{j({},{pulsate:!0})},[j]),F=a.useCallback((f,y)=>{if(clearTimeout(C.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.current=setTimeout(()=>{F(f,y)});return}h.current=null,p(M=>M.length>0?M.slice(1):M),g.current=y},[]);return a.useImperativeHandle(s,()=>({pulsate:O,start:j,stop:F}),[O,j,F]),_.jsx(ot,X({className:E(m.root,n.root,i),ref:R},c,{children:_.jsx(Ge,{component:null,exit:!0,children:u})}))}),st=rt;function at(e){return Ie("MuiButtonBase",e)}const lt=be("MuiButtonBase",["root","disabled","focusVisible"]),ut=lt,ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],pt=e=>{const{disabled:o,focusVisible:s,focusVisibleClassName:l,classes:t}=e,i=Oe({root:["root",o&&"disabled",s&&"focusVisible"]},at,t);return s&&l&&(i.root+=` ${l}`),i},ft=oe("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ut.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),dt=a.forwardRef(function(o,s){const l=ge({props:o,name:"MuiButtonBase"}),{action:t,centerRipple:n=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:I,onDragLeave:j,onFocus:O,onFocusVisible:F,onKeyDown:f,onKeyUp:y,onMouseDown:M,onMouseLeave:L,onMouseUp:N,onTouchEnd:U,onTouchMove:T,onTouchStart:B,tabIndex:v=0,TouchRippleProps:D,touchRippleRef:w,type:S}=l,P=te(l,ct),z=a.useRef(null),x=a.useRef(null),Re=ce(x,w),{isFocusVisibleRef:se,onFocus:ye,onBlur:Me,ref:Te}=Ue(),[$,Y]=a.useState(!1);p&&$&&Y(!1),a.useImperativeHandle(t,()=>({focusVisible:()=>{Y(!0),z.current.focus()}}),[]);const[q,xe]=a.useState(!1);a.useEffect(()=>{xe(!0)},[]);const Ee=q&&!d&&!p;a.useEffect(()=>{$&&b&&!d&&q&&x.current.pulsate()},[d,b,$,q]);function V(r,le,Ne=g){return W(ue=>(le&&le(ue),!Ne&&x.current&&x.current[r](ue),!0))}const Ce=V("start",M),ve=V("stop",I),Pe=V("stop",j),Ve=V("stop",N),Be=V("stop",r=>{$&&r.preventDefault(),L&&L(r)}),De=V("start",B),we=V("stop",U),Le=V("stop",T),Se=V("stop",r=>{Me(r),se.current===!1&&Y(!1),h&&h(r)},!1),$e=W(r=>{z.current||(z.current=r.currentTarget),ye(r),se.current===!0&&(Y(!0),F&&F(r)),O&&O(r)}),J=()=>{const r=z.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Q=a.useRef(!1),ke=W(r=>{b&&!Q.current&&$&&x.current&&r.key===" "&&(Q.current=!0,x.current.stop(r,()=>{x.current.start(r)})),r.target===r.currentTarget&&J()&&r.key===" "&&r.preventDefault(),f&&f(r),r.target===r.currentTarget&&J()&&r.key==="Enter"&&!p&&(r.preventDefault(),R&&R(r))}),_e=W(r=>{b&&r.key===" "&&x.current&&$&&!r.defaultPrevented&&(Q.current=!1,x.current.stop(r,()=>{x.current.pulsate(r)})),y&&y(r),R&&r.target===r.currentTarget&&J()&&r.key===" "&&!r.defaultPrevented&&R(r)});let H=u;H==="button"&&(P.href||P.to)&&(H=C);const K={};H==="button"?(K.type=S===void 0?"button":S,K.disabled=p):(!P.href&&!P.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const je=ce(s,Te,z),ae=X({},l,{centerRipple:n,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:$}),Fe=pt(ae);return _.jsxs(ft,X({as:H,className:E(Fe.root,c),ownerState:ae,onBlur:Se,onClick:R,onContextMenu:ve,onFocus:$e,onKeyDown:ke,onKeyUp:_e,onMouseDown:Ce,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:Pe,onTouchEnd:we,onTouchMove:Le,onTouchStart:De,ref:je,tabIndex:p?-1:v,type:S},K,P,{children:[i,Ee?_.jsx(st,X({ref:Re,center:n},D)):null]}))}),gt=dt;function Rt(e){return typeof e=="string"}export{gt as B,pe as T,ze as _,Rt as i};
