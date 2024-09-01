import{j as t}from"./index-CMu3Kjdk.js";import{r as l}from"./index-DVXBtNgz.js";import{C as c}from"./index-DCH73c6e.js";import{B as m}from"./index-DX7BcFfT.js";import{C as r}from"./confirm-C75Bj9SZ.js";import"./dialog-D3Br7OsT.js";const g={title:"Dialog Based/Confirm",component:r},e={args:{isModal:!0,label:"Пример confirm",question:"Очень важный вопрос?",okText:"Да",cancelText:"Нет",withPageScrollLock:!1,withCloseOnOutsideClick:!1,minWidth:"350px",minHeight:"",maxWidth:"",maxHeight:""},parameters:{controls:{include:["label","question","okText","cancelText","withPageScrollLock","withCloseOnOutsideClick","minWidth","minHeight","maxWidth","maxHeight"]}},render:a=>{const[u,n]=l.useState(!1);return t.jsxs(c,{children:[t.jsx(m,{onClick:()=>n(!0),children:"Открыть confirm"}),t.jsx(r,{...a,isOpen:u,close:()=>n(!1)})]})}};var i,o,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isModal: true,
    label: 'Пример confirm',
    question: 'Очень важный вопрос?',
    okText: 'Да',
    cancelText: 'Нет',
    withPageScrollLock: false,
    withCloseOnOutsideClick: false,
    minWidth: '350px',
    minHeight: '',
    maxWidth: '',
    maxHeight: ''
  },
  parameters: {
    controls: {
      include: ['label', 'question', 'okText', 'cancelText', 'withPageScrollLock', 'withCloseOnOutsideClick', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight']
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <Container>
                <Button onClick={() => setIsOpen(true)}>Открыть confirm</Button>
                <Confirm {...args} isOpen={isOpen} close={() => setIsOpen(false)} />
            </Container>;
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const O=["ConfirmStory"];export{e as ConfirmStory,O as __namedExportsOrder,g as default};
