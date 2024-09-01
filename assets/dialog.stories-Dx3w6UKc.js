import{j as u}from"./index-CMu3Kjdk.js";import{r as g}from"./index-DVXBtNgz.js";import{C}from"./index-DCH73c6e.js";import{B as p}from"./index-DX7BcFfT.js";import{H as x}from"./index-DqfXHWeU.js";import{T as a}from"./index-xa7G255s.js";import{D as l}from"./dialog-D3Br7OsT.js";const w={title:"Dialog Based/Dialog",component:l},n={args:{isModal:!1,label:"Пример немодального диалога",withPageScrollLock:!1,withCloseOnOutsideClick:!1,withCloseOnEscapeForNonModal:!1,minWidth:"",minHeight:"",maxWidth:"",maxHeight:""},parameters:{controls:{include:["label","withPageScrollLock","withCloseOnOutsideClick","withCloseOnEscapeForNonModal","minWidth","minHeight","maxWidth","maxHeight"]}},render:t=>{const[i,e]=g.useState(!1);return u.jsxs(C,{children:[u.jsx(p,{onClick:()=>e(!0),children:"Открыть диалог"}),u.jsxs(l,{...t,isOpen:i,close:()=>e(!1),children:[u.jsx(x,{className:"mb-20",children:"Немодальный диалог"}),u.jsx(a,{className:"mb-10",children:"Создан на основе элементе dialog."}),u.jsx(a,{children:"Имеет, как встроенный функционал, предоставляемый веб-платформой, так и докрученные сверху фичи."})]})]})}},s={args:{isModal:!0,label:"Пример модального диалога",withPageScrollLock:!1,withCloseOnOutsideClick:!1,minWidth:"",minHeight:"",maxWidth:"",maxHeight:""},parameters:{controls:{include:["label","withPageScrollLock","withCloseOnOutsideClick","minWidth","minHeight","maxWidth","maxHeight"]}},render:t=>{const[i,e]=g.useState(!1);return u.jsxs(C,{children:[u.jsx(p,{onClick:()=>e(!0),children:"Открыть диалог"}),u.jsxs(l,{...t,isOpen:i,close:()=>e(!1),children:[u.jsx(x,{className:"mb-20",children:"Модальный диалог"}),u.jsx(a,{className:"mb-10",children:"Создан на основе элементе dialog."}),u.jsx(a,{children:"Имеет, как встроенный функционал, предоставляемый веб-платформой, так и докрученные сверху фичи."})]})]})}};var o,r,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    isModal: false,
    label: 'Пример немодального диалога',
    withPageScrollLock: false,
    withCloseOnOutsideClick: false,
    withCloseOnEscapeForNonModal: false,
    minWidth: '',
    minHeight: '',
    maxWidth: '',
    maxHeight: ''
  },
  parameters: {
    controls: {
      include: ['label', 'withPageScrollLock', 'withCloseOnOutsideClick', 'withCloseOnEscapeForNonModal', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight']
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <Container>
                <Button onClick={() => setIsOpen(true)}>Открыть диалог</Button>
                <Dialog {...args} isOpen={isOpen} close={() => setIsOpen(false)}>
                    <Heading className="mb-20">Немодальный диалог</Heading>
                    <Text className="mb-10">Создан на основе элементе dialog.</Text>
                    <Text>
                        Имеет, как встроенный функционал, предоставляемый веб-платформой, так и докрученные сверху фичи.
                    </Text>
                </Dialog>
            </Container>;
  }
}`,...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var m,d,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isModal: true,
    label: 'Пример модального диалога',
    withPageScrollLock: false,
    withCloseOnOutsideClick: false,
    minWidth: '',
    minHeight: '',
    maxWidth: '',
    maxHeight: ''
  },
  parameters: {
    controls: {
      include: ['label', 'withPageScrollLock', 'withCloseOnOutsideClick', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight']
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <Container>
                <Button onClick={() => setIsOpen(true)}>Открыть диалог</Button>
                <Dialog {...args} isOpen={isOpen} close={() => setIsOpen(false)}>
                    <Heading className="mb-20">Модальный диалог</Heading>
                    <Text className="mb-10">Создан на основе элементе dialog.</Text>
                    <Text>
                        Имеет, как встроенный функционал, предоставляемый веб-платформой, так и докрученные сверху фичи.
                    </Text>
                </Dialog>
            </Container>;
  }
}`,...(h=(d=s.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const b=["NonModal","Modal"];export{s as Modal,n as NonModal,b as __namedExportsOrder,w as default};
