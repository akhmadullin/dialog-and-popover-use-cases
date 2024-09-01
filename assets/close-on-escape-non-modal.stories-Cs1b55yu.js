import{j as u}from"./index-CMu3Kjdk.js";import{r as t}from"./index-DVXBtNgz.js";import{H as h}from"./index-DgaVQ6HT.js";import{H as o}from"./index-DqfXHWeU.js";import{T as s}from"./index-xa7G255s.js";import{B as m}from"./index-C8DP56y-.js";import{B as i}from"./index-DX7BcFfT.js";import{D as l}from"./dialog-D3Br7OsT.js";const D={title:"Dialog Based/Dialog",tags:["!dev"]},e={name:"3) Close On Escape Non Modal",render:()=>{const[d,a]=t.useState(!1),[E,n]=t.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsx(h,{children:u.jsxs(m,{children:[u.jsx(i,{onClick:()=>a(!0),children:"Открыть диалог без Escape"}),u.jsx(i,{onClick:()=>n(!0),children:"Открыть диалог с Escape"})]})}),u.jsxs(l,{isModal:!1,isOpen:d,close:()=>a(!1),labeledBy:"headingOfWithoutEscape",children:[u.jsx(o,{id:"headingOfWithoutEscape",className:"mb-20",children:"Дефолтный диалог"}),u.jsx(s,{children:"Так как я немодальный, закрыть меня с помощью Escape не выйдет - как ни пытайся!"})]}),u.jsxs(l,{isModal:!1,isOpen:E,close:()=>n(!1),labeledBy:"headingOfWithEscape",withCloseOnEscapeForNonModal:!0,children:[u.jsx(o,{id:"headingOfWithEscape",className:"mb-20",children:"Продвинутый диалог"}),u.jsx(s,{className:"mb-10",children:"Хоть я и немодальный диалог, меня можно закрыть в помощью клавиши Escape."}),u.jsx(s,{className:"mb-10",children:"Это работает благодаря пропу withCloseOnEscapeForNonModal."})]})]})}};var r,c,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '3) Close On Escape Non Modal',
  render: () => {
    const [isOpenWithoutEscapeHandler, setIsOpenWithoutEscapeHandler] = useState(false);
    const [isOpenWithEscapeHandler, setIsOpenWithEscapeHandler] = useState(false);
    return <>
                <HeightWrapper>
                    <ButtonsRow>
                        <Button onClick={() => setIsOpenWithoutEscapeHandler(true)}>Открыть диалог без Escape</Button>
                        <Button onClick={() => setIsOpenWithEscapeHandler(true)}>Открыть диалог с Escape</Button>
                    </ButtonsRow>
                </HeightWrapper>
                <Dialog isModal={false} isOpen={isOpenWithoutEscapeHandler} close={() => setIsOpenWithoutEscapeHandler(false)} labeledBy="headingOfWithoutEscape">
                    <Heading id="headingOfWithoutEscape" className="mb-20">
                        Дефолтный диалог
                    </Heading>
                    <Text>Так как я немодальный, закрыть меня с помощью Escape не выйдет - как ни пытайся!</Text>
                </Dialog>
                <Dialog isModal={false} isOpen={isOpenWithEscapeHandler} close={() => setIsOpenWithEscapeHandler(false)} labeledBy="headingOfWithEscape" withCloseOnEscapeForNonModal>
                    <Heading id="headingOfWithEscape" className="mb-20">
                        Продвинутый диалог
                    </Heading>
                    <Text className="mb-10">
                        Хоть я и немодальный диалог, меня можно закрыть в помощью клавиши Escape.
                    </Text>
                    <Text className="mb-10">Это работает благодаря пропу withCloseOnEscapeForNonModal.</Text>
                </Dialog>
            </>;
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const F=["CloseOnEscapeNonModal"];export{e as CloseOnEscapeNonModal,F as __namedExportsOrder,D as default};
