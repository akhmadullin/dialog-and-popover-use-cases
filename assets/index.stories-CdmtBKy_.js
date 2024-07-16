import{j as e,c as i,C as q,H as B,T as m}from"./index-Cc0r8_xM.js";import{r as a}from"./index-DVXBtNgz.js";import{B as F}from"./index-CFho4Kze.js";import{D as k}from"./dialog-BnBnX8aZ.js";const v="_heading_norbb_1",w={heading:v},y=({children:u,className:t,...n})=>e.jsx("h2",{className:i(w.heading,t),...n,children:u});y.__docgenInfo={description:"",methods:[],displayName:"Heading"};const I="_input_cczkf_1",P={input:I},f=a.forwardRef(({className:u,...t},n)=>e.jsx("input",{ref:n,...t,className:i(P.input,u)}));f.__docgenInfo={description:"",methods:[],displayName:"Input"};const O="_button_1mzrp_1",N={button:O},b=({children:u,className:t,...n})=>e.jsx("button",{type:"button",className:i(N.button,t),...n,children:u});b.__docgenInfo={description:"",methods:[],displayName:"OkButton"};const A="_button_j7ufn_1",S={button:A},C=({children:u,className:t,...n})=>e.jsx("button",{type:"button",className:i(S.button,t),...n,children:u});C.__docgenInfo={description:"",methods:[],displayName:"CancelButton"};const H="_question_1buj2_1",R="_answer_1buj2_5",W="_buttonsRow_1buj2_9",d={question:H,answer:R,buttonsRow:W},E=({close:u,question:t,placeholder:n,okText:r,cancelText:c,okCallback:_,cancelCallback:D,...T})=>{const l=a.useRef(null),j=()=>{const s=l.current;s&&(u(),_(s.value),s.value="")},p=()=>{const s=l.current;s&&(u(),D(),s.value="")};return e.jsxs(k,{close:p,...T,children:[e.jsx(y,{className:d.question,children:t}),e.jsxs("form",{method:"dialog",onSubmit:j,children:[e.jsx(f,{ref:l,type:"text",required:!0,autoFocus:!0,minLength:1,placeholder:n,className:d.answer}),e.jsxs("div",{className:d.buttonsRow,children:[e.jsx(b,{type:"submit",children:r}),e.jsx(C,{type:"reset",onClick:p,children:c})]})]})]})};E.__docgenInfo={description:"",methods:[],displayName:"Prompt",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},withPageScrollLock:{required:!1,tsType:{name:"boolean"},description:""},withCloseOnOutsideClick:{required:!1,tsType:{name:"boolean"},description:""},minWidth:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},minHeight:{required:!1,tsType:{name:"string"},description:""},maxHeight:{required:!1,tsType:{name:"string"},description:""},question:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},okText:{required:!0,tsType:{name:"string"},description:""},cancelText:{required:!0,tsType:{name:"string"},description:""},okCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(answer: string) => void",signature:{arguments:[{type:{name:"string"},name:"answer"}],return:{name:"void"}}},description:""},cancelCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const G={title:"Dialog Based/Prompt"},o={render:()=>{const[u,t]=a.useState(""),[n,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(q,{children:[e.jsx(B,{children:"Промпт"}),e.jsx(m,{children:"Аналогично конфёрму, можно сделать аналог нативного промпта"}),e.jsx("h3",{style:{marginTop:"40px"},children:"Анкета"}),e.jsxs(m,{children:["Мой любимый WEB API:"," ",u?e.jsx("span",{style:{textDecoration:"underline"},children:u}):e.jsx("span",{style:{fontStyle:"italic",opacity:"0.6",textDecoration:"underline"},children:"не заполнено"})]}),e.jsx(F,{onClick:()=>{r(!0)},children:"Заполнить"})]}),e.jsx(E,{isModal:!0,isOpen:n,close:()=>{r(!1)},question:"Какой твой любимый WEB API?",placeholder:"Popover API, например",okText:"Сохранить",cancelText:"Отменить",okCallback:c=>{console.log("Ответ сохранен"),t(c)},cancelCallback:()=>console.log("Отмена сохранения"),label:"Пример promt компонента",minWidth:"440px"})]})}};var g,x,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [favoriteFeature, setFavoriteFeature] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    return <>
                <Container>
                    <Heading>Промпт</Heading>
                    <Text>Аналогично конфёрму, можно сделать аналог нативного промпта</Text>
                    <h3 style={{
          marginTop: '40px'
        }}>Анкета</h3>
                    <Text>
                        Мой любимый WEB API:{' '}
                        {favoriteFeature ? <span style={{
            textDecoration: 'underline'
          }}>{favoriteFeature}</span> : <span style={{
            fontStyle: 'italic',
            opacity: '0.6',
            textDecoration: 'underline'
          }}>
                                не заполнено
                            </span>}
                    </Text>
                    <Button onClick={() => {
          setIsOpen(true);
        }}>
                        Заполнить
                    </Button>
                </Container>
                <Prompt isModal isOpen={isOpen} close={() => {
        setIsOpen(false);
      }} question="Какой твой любимый WEB API?" placeholder="Popover API, например" okText="Сохранить" cancelText="Отменить" okCallback={answer => {
        console.log('Ответ сохранен');
        setFavoriteFeature(answer);
      }} cancelCallback={() => console.log('Отмена сохранения')} label="Пример promt компонента" minWidth="440px" />
            </>;
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const J=["PromptStory"];export{o as PromptStory,J as __namedExportsOrder,G as default};
