import{j as u,c as G,C as S,H as W,T as I}from"./index-Cc0r8_xM.js";import{B as y}from"./index-CFho4Kze.js";import{r as h}from"./index-DVXBtNgz.js";const M=()=>{const t=h.useRef({}),n=h.useCallback((e,a)=>{if(a==null){delete t.current[e];return}t.current={...t.current,[e]:a}},[]);return[t,n]},k="_toast_1seh5_1",P="_toastUnderAnother_1seh5_45",U="_contentWrapper_1seh5_50",$="_toastWithCloseButton_1seh5_57",q="_closeButton_1seh5_61",z="_toastInfo_1seh5_86",J="_toastSuccess_1seh5_93",K="_toastWarning_1seh5_100",Q="_toastError_1seh5_107",l={toast:k,toastUnderAnother:P,contentWrapper:U,toastWithCloseButton:$,closeButton:q,toastInfo:z,toastSuccess:J,toastWarning:K,toastError:Q},H=h.forwardRef(({currentToastName:t,prevToastName:n,close:e,withCloseButton:a,children:_},r)=>u.jsx("div",{ref:r,role:"alert",popover:"manual",className:G(l.toast,{[l.toastUnderAnother]:!!n,[l.toastWithCloseButton]:a}),style:{"--anchor-name":t,"--position-anchor":n},children:u.jsxs("div",{className:l.contentWrapper,children:[_,a&&u.jsx("button",{type:"button","aria-label":"Close tooltip",onClick:e,className:l.closeButton})]})}));H.__docgenInfo={description:"",methods:[],displayName:"Toast"};const g="toast-add",w="toast-remove",V=5e3,X=()=>`${String.fromCharCode(Math.random()*26+97)}${Math.random().toString(36).substr(2,28)}`,b=(t,n={})=>{const e=new CustomEvent(g,{detail:{content:t,options:n.id!==void 0?n:{...n,id:X()}}});window.dispatchEvent(e)},Y=t=>Promise.allSettled(t.getAnimations().map(n=>n.finished)),T=({children:t})=>{const[n,e]=h.useState({}),[a,_]=M();return h.useLayoutEffect(()=>{const r=o=>{e(s=>{if(s[o]){clearTimeout(s[o].timeoutId);const i={...s};return delete i[o],i}return s})},d=async o=>{const s=a.current[o];s&&(s.setAttribute("hidden","true"),await Y(s)),r(o)},m=({content:o,options:s})=>{const{id:i,closeHandler:B,withCloseButton:x=!0,timeout:L=V}=s,f=()=>{d(i)},v=()=>e(R=>({...R,[i]:{timeoutId:setTimeout(f,L),props:{content:o,withCloseButton:x,close:x?()=>{f(),B&&B()}:void 0}}}));a.current[i]?(r(i),requestAnimationFrame(()=>{v()})):v()},E=({detail:o})=>{m(o)};window.addEventListener(g,E);const c=o=>{d(o.detail)};return window.addEventListener(w,c),()=>{window.removeEventListener(g,E),window.removeEventListener(w,c)}},[]),u.jsxs(u.Fragment,{children:[Object.entries(n).map(([r,{props:d}],m,E)=>u.jsx(H,{ref:c=>{_(r,c),c==null||c.showPopover()},withCloseButton:d.withCloseButton,close:d.close,currentToastName:`--toast-${r}`,prevToastName:m===0?null:`--toast-${E[m-1][0]}`,children:d.content},r)),t]})};T.__docgenInfo={description:"",methods:[],displayName:"ToastGroup"};const ut={title:"Popover Based/Toast",args:{timeout:5e3,content:'Привет! Я тост "испеченный" через Popover и CSS Anchor Position 🤩',withCloseButton:!1}},C={name:"1) Not Changing Each Other",render:({content:t,withCloseButton:n,timeout:e})=>u.jsx(T,{children:u.jsxs(S,{children:[u.jsx(W,{children:"Тост"}),u.jsx(I,{children:"Тосты, нотификации - куда же без них."}),u.jsx(y,{onClick:()=>{b(t,{withCloseButton:n,timeout:e})},children:"Показать тост"})]})})},p={name:"2) Changing Each Other",render:({content:t,withCloseButton:n,timeout:e})=>u.jsx(T,{children:u.jsxs(S,{children:[u.jsx(W,{children:"Тост"}),u.jsx(I,{children:"Порой необходимо, чтобы нотификация об одной и том же событии, сменяла своего предшественника. Например, если это нотификации об одной и той же ошибке."}),u.jsx(y,{onClick:()=>{b(t,{withCloseButton:n,timeout:e,id:"the-same-id"})},children:"Нажми на меня несколько раз подряд"})]})})};var A,j,D;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '1) Not Changing Each Other',
  render: ({
    content,
    withCloseButton,
    timeout
  }) => {
    return <ToastGroup>
                <Container>
                    <Heading>Тост</Heading>
                    <Text>Тосты, нотификации - куда же без них.</Text>
                    <Button onClick={() => {
          toastify(content, {
            withCloseButton,
            timeout
          });
        }}>
                        Показать тост
                    </Button>
                </Container>
            </ToastGroup>;
  }
}`,...(D=(j=C.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var N,F,O;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '2) Changing Each Other',
  render: ({
    content,
    withCloseButton,
    timeout
  }) => {
    return <ToastGroup>
                <Container>
                    <Heading>Тост</Heading>
                    <Text>
                        Порой необходимо, чтобы нотификация об одной и том же событии, сменяла своего предшественника.
                        Например, если это нотификации об одной и той же ошибке.
                    </Text>
                    <Button onClick={() => {
          toastify(content, {
            withCloseButton,
            timeout,
            id: 'the-same-id'
          });
        }}>
                        Нажми на меня несколько раз подряд
                    </Button>
                </Container>
            </ToastGroup>;
  }
}`,...(O=(F=p.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const et=["NotChangingEachOther","ChangingEachOther"];export{p as ChangingEachOther,C as NotChangingEachOther,et as __namedExportsOrder,ut as default};
