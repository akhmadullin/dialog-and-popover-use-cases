import{j as e}from"./index-CMu3Kjdk.js";import{r as u}from"./index-DVXBtNgz.js";import{C as d}from"./index-DCH73c6e.js";import{B as h}from"./index-DX7BcFfT.js";import{P as i}from"./prompt-f48VB63Y.js";import"./dialog-D3Br7OsT.js";const w={title:"Dialog Based/Prompt",component:i},n={args:{isModal:!0,label:"Пример Prompt",question:"Очень важный вопрос?",placeholder:"Введите ответ",okText:"Сохранить",cancelText:"Отмена",withPageScrollLock:!1,withCloseOnOutsideClick:!1,minWidth:"350px",minHeight:"",maxWidth:"",maxHeight:""},parameters:{controls:{include:["label","question","placeholder","okText","cancelText","withPageScrollLock","withCloseOnOutsideClick","minWidth","minHeight","maxWidth","maxHeight"]}},render:l=>{const[c,t]=u.useState(!1),[s,p]=u.useState("");return e.jsxs(d,{children:[e.jsxs("div",{className:"mb-20",children:[e.jsx("span",{children:"Ответ на вопрос: "}),e.jsxs("span",{children:[" ",s?e.jsx("span",{style:{textDecoration:"underline"},children:s}):e.jsx("span",{style:{fontStyle:"italic",opacity:"0.6",textDecoration:"underline"},children:"не заполнено"})]})]}),e.jsx(h,{onClick:()=>t(!0),children:"Открыть Prompt"}),e.jsx(i,{...l,isOpen:c,close:()=>t(!1),okCallback:m=>p(m)})]})}};var a,o,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    isModal: true,
    label: 'Пример Prompt',
    question: 'Очень важный вопрос?',
    placeholder: 'Введите ответ',
    okText: 'Сохранить',
    cancelText: 'Отмена',
    withPageScrollLock: false,
    withCloseOnOutsideClick: false,
    minWidth: '350px',
    minHeight: '',
    maxWidth: '',
    maxHeight: ''
  },
  parameters: {
    controls: {
      include: ['label', 'question', 'placeholder', 'okText', 'cancelText', 'withPageScrollLock', 'withCloseOnOutsideClick', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight']
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    const [answer, setAnswer] = useState('');
    return <Container>
                <div className="mb-20">
                    <span>Ответ на вопрос: </span>
                    <span>
                        {' '}
                        {answer ? <span style={{
            textDecoration: 'underline'
          }}>{answer}</span> : <span style={{
            fontStyle: 'italic',
            opacity: '0.6',
            textDecoration: 'underline'
          }}>
                                не заполнено
                            </span>}
                    </span>
                </div>
                <Button onClick={() => setIsOpen(true)}>Открыть Prompt</Button>
                <Prompt {...args} isOpen={isOpen} close={() => setIsOpen(false)} okCallback={value => setAnswer(value)} />
            </Container>;
  }
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const E=["PromptStory"];export{n as PromptStory,E as __namedExportsOrder,w as default};
