import{o as a,t as n,j as t,n as s,P as i}from"./index-wJGs2Dyv.js";import{u as c}from"./useUtility-W3X80BJq.js";import{T as l}from"./Typography-GrtS7GM0.js";import{C as m}from"./CircularProgress-VWTOl8-H.js";import{B as d}from"./Home.style-QlFn_pdu.js";import"./extendSxProp-GDan9hWr.js";const f=a.div`
  width: min(15rem, 90vw);
  height: min(15rem, 100vh);
  background-image: url(${e=>`assets/images/${e.tag}.webp`});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: yellow;
  -webkit-filter: contrast(0.9);
  -moz-filter: contrast(0.9);
  -ms-filter: contrast(0.9);
  -o-filter: contrast(0.9);
  filter: contrast(0.9);
  font-family: "Secular One", sans-serif;
  &:after {
    content: "${e=>n[e.tag]||e.tag}";
    text-transform: uppercase;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 150%;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &:before {
    content: "";
    position: absolute;
    inset: 0 0 0 0;
    background: rgba(16, 22, 50, 0.75);
  }
  @media (max-width: 580px) {
    width: 90vw;
    height: min(8rem, 100vh);
    font-size: 75%;
  }
`,p=a.section`
  border-radius: 30px;
  margin: 25px;
  overflow: hidden;
  transition: 0.21s ease-in;
  &:hover {
    ${""}
    transform: scale(1.05);
    transition: 0.21s ease-out;
  }
  @media(max-width: 580px){
    margin-top: 0px;
  }
`,x=()=>{const{getDepartments:e,deptLoading:o}=c();return t.jsxs("div",{className:"w-full m-auto mb-5",children:[t.jsx(l,{variant:"h4",sx:{fontWeight:600,textAlign:"center",py:5,color:"#707af4"},children:"departments"}),t.jsx("div",{className:"flex flex-wrap justify-center",children:o?t.jsx(m,{color:"info"}):e==null?void 0:e.map(r=>r&&t.jsx(p,{children:t.jsx(s,{to:`/department/${r}`,children:t.jsx(f,{tag:r})})},r))})]})},v=()=>t.jsxs(i,{children:[t.jsx(d,{src:"home",title:"CAMPUS LIBRARY"}),t.jsx(x,{})]});export{v as default};
