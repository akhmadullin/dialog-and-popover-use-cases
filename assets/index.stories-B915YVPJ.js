import{j as s,c as I}from"./index-CMu3Kjdk.js";import{B as W}from"./index-DX7BcFfT.js";import{w as L,a as R}from"./css-anchor-positioning-support-warning-YNFWsKM8.js";import{r as h}from"./index-DVXBtNgz.js";const G=()=>{const t=h.useRef({}),n=h.useCallback((e,a)=>{if(a==null){delete t.current[e];return}t.current={...t.current,[e]:a}},[]);return[t,n]},M="_toast_zmi0y_1",k="_toastUnderAnother_zmi0y_45",z="_contentWrapper_zmi0y_50",U="_toastWithCloseButton_zmi0y_57",$="_closeButton_zmi0y_61",l={toast:M,toastUnderAnother:k,contentWrapper:z,toastWithCloseButton:U,closeButton:$},F=h.forwardRef(({currentToastName:t,prevToastName:n,close:e,withCloseButton:a,children:g},u)=>s.jsx("div",{ref:u,role:"alert",popover:"manual",className:I(l.toast,{[l.toastUnderAnother]:!!n,[l.toastWithCloseButton]:a}),style:{"--anchor-name":t,"--position-anchor":n},children:s.jsxs("div",{className:l.contentWrapper,children:[g,a&&s.jsx("button",{type:"button","aria-label":"Close tooltip",onClick:e,className:l.closeButton})]})}));F.__docgenInfo={description:"",methods:[],displayName:"Toast"};const w="toast-add",x="toast-remove",H=5e3,q=()=>`${String.fromCharCode(Math.random()*26+97)}${Math.random().toString(36).substr(2,28)}`,D=(t,n={})=>{const e=new CustomEvent(w,{detail:{content:t,options:n.id!==void 0?n:{...n,id:q()}}});window.dispatchEvent(e)},J=t=>Promise.allSettled(t.getAnimations().map(n=>n.finished)),v=({children:t})=>{const[n,e]=h.useState({}),[a,g]=G();return h.useLayoutEffect(()=>{const u=o=>{e(r=>{if(r[o]){clearTimeout(r[o].timeoutId);const c={...r};return delete c[o],c}return r})},d=async o=>{const r=a.current[o];r&&(r.setAttribute("hidden","true"),await J(r)),u(o)},m=({content:o,options:r})=>{const{id:c,closeHandler:B,withCloseButton:f=!0,timeout:P=H}=r,T=()=>{d(c)},_=()=>e(b=>({...b,[c]:{timeoutId:setTimeout(T,P),props:{content:o,withCloseButton:f,close:f?()=>{T(),B&&B()}:void 0}}}));a.current[c]?(u(c),requestAnimationFrame(()=>{_()})):_()},p=({detail:o})=>{m(o)};window.addEventListener(w,p);const i=o=>{d(o.detail)};return window.addEventListener(x,i),()=>{window.removeEventListener(w,p),window.removeEventListener(x,i)}},[]),s.jsxs(s.Fragment,{children:[Object.entries(n).map(([u,{props:d}],m,p)=>s.jsx(F,{ref:i=>{g(u,i),i==null||i.showPopover()},withCloseButton:d.withCloseButton,close:d.close,currentToastName:`--toast-${u}`,prevToastName:m===0?null:`--toast-${p[m-1][0]}`,children:d.content},u)),t]})};v.__docgenInfo={description:"",methods:[],displayName:"ToastGroup"};const Y={title:"Popover Based/Toast",decorators:[L,R]},C={name:"1) Not Changing Each Other",args:{timeout:5e3,content:"Пример тоста, работающего на Popover и CSS Anchor Position 🤩",withCloseButton:!1},render:({content:t,withCloseButton:n,timeout:e})=>s.jsx(v,{children:s.jsx("div",{style:{width:"100%",height:"75px"},children:s.jsx(W,{onClick:()=>{D(t,{withCloseButton:n,timeout:e})},children:"Показать тост"})})})},E={name:"2) Changing Each Other",args:{timeout:5e3,content:"Пример сообщения об ошибке",withCloseButton:!1},render:({content:t,withCloseButton:n,timeout:e})=>s.jsx(v,{children:s.jsx("div",{style:{width:"100%",height:"75px"},children:s.jsx(W,{onClick:()=>{D(t,{withCloseButton:n,timeout:e,id:"the-same-id"})},children:"Нажми на меня несколько раз подряд"})})})};var y,A,j;C.parameters={...C.parameters,docs:{...(y=C.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '1) Not Changing Each Other',
  args: {
    timeout: 5000,
    content: 'Пример тоста, работающего на Popover и CSS Anchor Position 🤩',
    withCloseButton: false
  },
  render: ({
    content,
    withCloseButton,
    timeout
  }) => {
    return <ToastGroup>
                <div style={{
        width: '100%',
        height: '75px'
      }}>
                    <Button onClick={() => {
          toastify(content, {
            withCloseButton,
            timeout
          });
        }}>
                        Показать тост
                    </Button>
                </div>
            </ToastGroup>;
  }
}`,...(j=(A=C.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var N,S,O;E.parameters={...E.parameters,docs:{...(N=E.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '2) Changing Each Other',
  args: {
    timeout: 5000,
    content: 'Пример сообщения об ошибке',
    withCloseButton: false
  },
  render: ({
    content,
    withCloseButton,
    timeout
  }) => {
    return <ToastGroup>
                <div style={{
        width: '100%',
        height: '75px'
      }}>
                    <Button onClick={() => {
          toastify(content, {
            withCloseButton,
            timeout,
            id: 'the-same-id'
          });
        }}>
                        Нажми на меня несколько раз подряд
                    </Button>
                </div>
            </ToastGroup>;
  }
}`,...(O=(S=E.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};const Z=["NotChangingEachOther","ChangingEachOther"];export{E as ChangingEachOther,C as NotChangingEachOther,Z as __namedExportsOrder,Y as default};
