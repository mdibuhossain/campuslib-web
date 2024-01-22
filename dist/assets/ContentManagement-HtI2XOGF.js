import{g as W,a as Z,s as Y,_ as u,r as g,u as ss,b as V,j as o,d as w,e as ts,W as q,o as ps,p as _,G as U,ad as gs,v as M,ae as xs,x as G,af as bs,ag as fs,ah as ys,ai as vs,J as rs,n as hs,P as Cs}from"./index-wJGs2Dyv.js";import{b as Ss,i as Ls}from"./interopRequireDefault-o0esyPcv.js";import{r as Is}from"./createSvgIcon-QTkr6ou5.js";import{u as _s}from"./useAuth--PT8AQeI.js";import{u as ds}from"./useUtility-W3X80BJq.js";import{B as D}from"./Box-Y05LfTrK.js";import{T as F}from"./Typography-GrtS7GM0.js";import{C as As}from"./CircularProgress-VWTOl8-H.js";import{L as B,a as js}from"./List-5thjIYPv.js";import{u as ks,e as ms}from"./createSvgIcon-yjtepLD4.js";import{i as ls,B as Rs}from"./isHostComponent-J57mIJhM.js";import{I as ws}from"./IconButton-kwPR_4Ls.js";import{A as Bs}from"./Avatar-_H31gt8N.js";import{B as J}from"./Button-RQuI1RMD.js";import"./createBox-E7Kn1Nho.js";import"./extendSxProp-GDan9hWr.js";function Ns(t){return Z("MuiListItem",t)}const Ts=W("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),A=Ts,Es=W("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),Os=Es;function Ps(t){return Z("MuiListItemSecondaryAction",t)}W("MuiListItemSecondaryAction",["root","disableGutters"]);const $s=["className"],Qs=t=>{const{disableGutters:e,classes:n}=t;return ts({root:["root",e&&"disableGutters"]},Ps,n)},qs=Y("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.disableGutters&&e.disableGutters]}})(({ownerState:t})=>u({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),cs=g.forwardRef(function(e,n){const r=ss({props:e,name:"MuiListItemSecondaryAction"}),{className:d}=r,i=V(r,$s),c=g.useContext(B),p=u({},r,{disableGutters:c.disableGutters}),x=Qs(p);return o.jsx(qs,u({className:w(x.root,d),ownerState:p,ref:n},i))});cs.muiName="ListItemSecondaryAction";const Us=cs,Ms=["className"],Gs=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Ds=(t,e)=>{const{ownerState:n}=t;return[e.root,n.dense&&e.dense,n.alignItems==="flex-start"&&e.alignItemsFlexStart,n.divider&&e.divider,!n.disableGutters&&e.gutters,!n.disablePadding&&e.padding,n.button&&e.button,n.hasSecondaryAction&&e.secondaryAction]},Fs=t=>{const{alignItems:e,button:n,classes:r,dense:d,disabled:i,disableGutters:c,disablePadding:p,divider:x,hasSecondaryAction:b,selected:j}=t;return ts({root:["root",d&&"dense",!c&&"gutters",!p&&"padding",x&&"divider",i&&"disabled",n&&"button",e==="flex-start"&&"alignItemsFlexStart",b&&"secondaryAction",j&&"selected"],container:["container"]},Ns,r)},Vs=Y("div",{name:"MuiListItem",slot:"Root",overridesResolver:Ds})(({theme:t,ownerState:e})=>u({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&u({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${Os.root}`]:{paddingRight:48}},{[`&.${A.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${A.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:q(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${A.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:q(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${A.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${A.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:q(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:q(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),Ws=Y("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Ys=g.forwardRef(function(e,n){const r=ss({props:e,name:"MuiListItem"}),{alignItems:d="center",autoFocus:i=!1,button:c=!1,children:p,className:x,component:b,components:j={},componentsProps:k={},ContainerComponent:N="li",ContainerProps:{className:T}={},dense:h=!1,disabled:E=!1,disableGutters:C=!1,disablePadding:H=!1,divider:O=!1,focusVisibleClassName:K,secondaryAction:m,selected:z=!1,slotProps:P={},slots:s={}}=r,a=V(r.ContainerProps,Ms),l=V(r,Gs),S=g.useContext(B),L=g.useMemo(()=>({dense:h||S.dense||!1,alignItems:d,disableGutters:C}),[d,S.dense,h,C]),f=g.useRef(null);ks(()=>{i&&f.current&&f.current.focus()},[i]);const I=g.Children.toArray(p),os=I.length&&Ss(I[I.length-1],["ListItemSecondaryAction"]),$=u({},r,{alignItems:d,autoFocus:i,button:c,dense:L.dense,disabled:E,disableGutters:C,disablePadding:H,divider:O,hasSecondaryAction:os,selected:z}),as=Fs($),ns=ms(f,n),Q=s.root||j.Root||Vs,R=P.root||k.root||{},y=u({className:w(as.root,R.className,x),disabled:E},l);let v=b||"li";return c&&(y.component=b||"div",y.focusVisibleClassName=w(A.focusVisible,K),v=Rs),os?(v=!y.component&&!b?"div":v,N==="li"&&(v==="li"?v="div":y.component==="li"&&(y.component="div")),o.jsx(B.Provider,{value:L,children:o.jsxs(Ws,u({as:N,className:w(as.container,T),ref:ns,ownerState:$},a,{children:[o.jsx(Q,u({},R,!ls(Q)&&{as:v,ownerState:u({},$,R.ownerState)},y,{children:I})),I.pop()]}))})):o.jsx(B.Provider,{value:L,children:o.jsxs(Q,u({},R,{as:v,ref:ns},!ls(Q)&&{ownerState:u({},$,R.ownerState)},y,{children:[I,m&&o.jsx(Us,{children:m})]}))})}),Hs=Ys;function Ks(t){return Z("MuiListItemAvatar",t)}W("MuiListItemAvatar",["root","alignItemsFlexStart"]);const zs=["className"],Js=t=>{const{alignItems:e,classes:n}=t;return ts({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},Ks,n)},Xs=Y("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({ownerState:t})=>u({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),Zs=g.forwardRef(function(e,n){const r=ss({props:e,name:"MuiListItemAvatar"}),{className:d}=r,i=V(r,zs),c=g.useContext(B),p=u({},r,{alignItems:c.alignItems}),x=Js(p);return o.jsx(Xs,u({className:w(x.root,d),ownerState:p,ref:n},i))}),st=Zs;function tt(t,e){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:e},t),g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"}))}const et=g.forwardRef(tt),ot=et;var es={},at=Ls;Object.defineProperty(es,"__esModule",{value:!0});var us=es.default=void 0,nt=at(Is()),rt=o,lt=(0,nt.default)((0,rt.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");us=es.default=lt;const it=ps("div")(({theme:t})=>({backgroundColor:t.palette.background.paper,margin:"auto",width:"95%",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",marginTop:"10px",marginBottom:"10px",borderRadius:"6px"})),X=({content:t,title:e,status:n})=>{const{user:r,admin:d,token:i}=_s(),{dataLoading:c}=ds(),p=(s,a)=>{var L;const l=[...s],S=l.findIndex(f=>(f==null?void 0:f._id)===(a==null?void 0:a._id));return l[S]={...l[S],status:!((L=l[S])!=null&&L.status)},l},[x,{loading:b}]=_(gs,{update(s,{data:{editBookStatus:a}}){const{getBooks:l}=s.readQuery({query:U});s.writeQuery({query:U,data:{getBooks:p(l,a)}})}}),[j,{loading:k}]=_(xs,{update(s,{data:{editQuestionStatus:a}}){const{getQuestions:l}=s.readQuery({query:M});s.writeQuery({query:M,data:{getQuestions:p(l,a)}})}}),[N,{loading:T}]=_(bs,{update(s,{data:{editSyllabusStatus:a}}){const{getAllSyllabus:l}=s.readQuery({query:G});s.writeQuery({query:G,data:{getAllSyllabus:p(l,a)}})}}),h=(s,a)=>s.filter(l=>(l==null?void 0:l._id)!==(a==null?void 0:a._id)),[E,{loading:C}]=_(fs,{update(s,{data:{deleteBook:a}}){const{getBooks:l}=s.readQuery({query:U});s.writeQuery({query:U,data:{getBooks:h(l,a)}})}}),[H,{loading:O}]=_(ys,{update(s,{data:{deleteQuestion:a}}){const{getQuestions:l}=s.readQuery({query:M});s.writeQuery({query:M,data:{getQuestions:h(l,a)}})}}),[K,{loading:m}]=_(vs,{update(s,{data:{deleteSyllabus:a}}){const{getAllSyllabus:l}=s.readQuery({query:G});s.writeQuery({query:G,data:{getAllSyllabus:h(l,a)}})}}),z=(s,a)=>{window.confirm("Are you sure want to delete?")&&(s.toLowerCase()==="book"?E({variables:{token:i,_id:a==null?void 0:a._id}}):s.toLowerCase()==="question"?H({variables:{token:i,_id:a==null?void 0:a._id}}):s.toLowerCase()==="syllabus"&&K({variables:{token:i,_id:a==null?void 0:a._id}}))},P=(s,a)=>{e.toLowerCase()==="book"?x({variables:{_id:s,status:a,token:i}}):e.toLowerCase()==="question"?j({variables:{_id:s,status:a,token:i}}):e.toLowerCase()==="syllabus"&&N({variables:{_id:s,status:a,token:i}})};return o.jsxs(it,{className:"shadow-2xl",children:[o.jsx(D,{sx:{height:5},children:(T||k||b||m||O||C)&&!c&&o.jsx(rs,{})}),o.jsx(F,{variant:"h6",sx:{ml:2},children:e}),c?o.jsx(As,{color:"info"}):o.jsx(js,{children:t==null?void 0:t.map(s=>{var a,l;return(d||(s==null?void 0:s.status)===n&&(s==null?void 0:s.added_by)===(r==null?void 0:r.email))&&o.jsx(Hs,{secondaryAction:(d||!(s!=null&&s.status))&&o.jsx(ws,{edge:"end","aria-label":"DELETE_CONTENT",onClick:()=>z(e,s),children:o.jsx(us,{})}),children:o.jsxs(D,{sx:{display:"flex"},children:[o.jsx(st,{children:o.jsx(Bs,{sx:{p:1},children:o.jsx(ot,{})})}),o.jsxs(D,{sx:{display:"flex",flexDirection:"column"},children:[o.jsx("a",{href:(a=s==null?void 0:s.download_link)!=null&&a.startsWith("https://")||(l=s==null?void 0:s.download_link)!=null&&l.startsWith("http://")?s==null?void 0:s.download_link:"http://"+(s==null?void 0:s.download_link),target:"_blank",rel:"noreferrer",children:o.jsxs(F,{children:[o.jsxs("strong",{children:[s==null?void 0:s.book_name," ",(s==null?void 0:s.edition)&&" - "+(s==null?void 0:s.edition)+"E"]}),o.jsx("em",{children:(s==null?void 0:s.author)&&" by "+(s==null?void 0:s.author)})]})}),o.jsxs(F,{variant:"caption",children:[d&&(s!=null&&s.status?o.jsx("button",{onClick:()=>P(s==null?void 0:s._id,!1),className:"bg-red-500 hover:bg-red-400 rounded-full px-2 py-0.5 font-semibold text-gray-50 hover:text-gray-50 text-xs mr-2",children:"hide"}):o.jsx("button",{onClick:()=>P(s==null?void 0:s._id,!0),className:"bg-blue-500 hover:bg-blue-600 rounded-full px-2 py-0.5 font-semibold text-gray-50 hover:text-gray-50 text-xs mr-2",children:"allow"})),(d||!(s!=null&&s.status)||n)&&o.jsx(hs,{to:`/edit/${s==null?void 0:s._id}`,className:"bg-green-500 hover:bg-green-600 rounded-full px-2 py-0.5 font-semibold text-gray-50 hover:text-gray-50 text-xs mr-2",children:"edit"}),o.jsxs("span",{className:"mr-2 inline-block",children:["( ",s==null?void 0:s.categories," )"]}),"( ",s==null?void 0:s.added_by," )",d&&(s==null?void 0:s.added_by)===(r==null?void 0:r.email)&&o.jsx("span",{style:{color:"red"},children:" ( Admin )"})]})]})]})},s==null?void 0:s._id)})}),o.jsx(D,{sx:{height:5},children:(T||k||b||m||O||C)&&!c&&o.jsx(rs,{})})]})},dt=()=>{const t={_books:!0,_questions:!1,_syllabus:!1},[e,n]=g.useState(t);return{_isActive:e,activeHandler:d=>{let i={...t};i._books=!1,i[d.target.name]=!0,n(c=>({...c,...i}))}}},is=({activeHandler:t,_isActive:e})=>o.jsx("section",{className:"px-2 my-10",children:o.jsxs("nav",{className:"flex justify-center w-full md:w-5/12 m-auto p-0",children:[o.jsx(J,{name:"_books",onClick:t,variant:"outlined",style:{borderRadius:"0px",borderTopLeftRadius:"0.375rem",borderBottomLeftRadius:"0.375rem",color:"inherit",backgroundColor:e._books?"rgb(56 189 248)":"white"},className:"flex-1",children:"BOOKS"}),o.jsx(J,{name:"_questions",onClick:t,variant:"outlined",style:{borderRadius:"0px",color:"inherit",backgroundColor:e._questions?"rgb(56 189 248)":"white"},className:"flex-1",children:"QUESTIONS"}),o.jsx(J,{name:"_syllabus",onClick:t,variant:"outlined",style:{borderRadius:"0px",borderTopRightRadius:"0.375rem",borderBottomRightRadius:"0.375rem",color:"inherit",backgroundColor:e._syllabus?"rgb(56 189 248)":"white"},className:"flex-1",children:"SYLLABUS"})]})}),jt=({isMyContent:t=!1,pageTitle:e})=>{const{_isActive:n,activeHandler:r}=dt(),{books:d,questions:i,syllabus:c}=ds();return o.jsxs(Cs,{children:[o.jsx(F,{variant:"h5",sx:{fontWeight:600,textAlign:"center",my:4},children:e}),o.jsx(is,{_isActive:n,activeHandler:r}),n._books&&o.jsx(X,{content:d,status:t,title:"Book"}),n._questions&&o.jsx(X,{content:i,status:t,title:"Question"}),n._syllabus&&o.jsx(X,{content:c,status:t,title:"Syllabus"}),o.jsx(is,{_isActive:n,activeHandler:r})]})};export{jt as default};
