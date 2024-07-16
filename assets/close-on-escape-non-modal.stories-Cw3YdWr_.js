import{j as u,C as B,H as a,T as e}from"./index-Cc0r8_xM.js";import{r as o}from"./index-DVXBtNgz.js";import{B as h}from"./index-B5K31Wy9.js";import{B as i}from"./index-CFho4Kze.js";import{D as l}from"./dialog-BnBnX8aZ.js";const f={title:"Dialog Based/Dialog"},s={name:"3) Close On Escape Non Modal",render:()=>{const[d,n]=o.useState(!1),[p,t]=o.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsxs(B,{children:[u.jsx(a,{children:"Закрытие диалога на Escape"}),u.jsx(e,{children:"По дефолту браузеры дают возможность закрывать по нажатию на Escape только модальные диалоги."}),u.jsx(e,{children:"Если эта фича необходима и для немодальных диалогов, то ее можно реализовать самим."}),u.jsxs(h,{children:[u.jsx(i,{onClick:()=>n(!0),children:"Открыть диалог без Escape"}),u.jsx(i,{onClick:()=>t(!0),children:"Открыть диалог с Escape"})]})]}),u.jsxs(l,{isModal:!1,isOpen:d,close:()=>n(!1),labeledBy:"headingOfWithoutEscape",children:[u.jsx(a,{id:"headingOfWithoutEscape",className:"mb-20",children:"Я - дефолтный диалог"}),u.jsx(e,{children:"Так как я немодальный, закрыть меня с помощью Escape не выйдет - как ни пытайся!"})]}),u.jsxs(l,{isModal:!1,isOpen:p,close:()=>t(!1),labeledBy:"headingOfWithEscape",withCloseOnEscapeForNonModal:!0,children:[u.jsx(a,{id:"headingOfWithEscape",className:"mb-20",children:"Я - продвинутый диалог"}),u.jsx(e,{className:"mb-10",children:"Хоть я и немодальный диалог, меня можно закрыть в помощью клавиши Escape."}),u.jsx(e,{className:"mb-10",children:"Это работает благодаря пропу withCloseOnEscapeForNonModal."})]})]})}};var E,c,r;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '3) Close On Escape Non Modal',
  render: () => {
    const [isOpenWithoutEscapeHandler, setIsOpenWithoutEscapeHandler] = useState(false);
    const [isOpenWithEscapeHandler, setIsOpenWithEscapeHandler] = useState(false);
    return <>
                <Container>
                    <Heading>Закрытие диалога на Escape</Heading>
                    <Text>
                        По дефолту браузеры дают возможность закрывать по нажатию на Escape только модальные диалоги.
                    </Text>
                    <Text>Если эта фича необходима и для немодальных диалогов, то ее можно реализовать самим.</Text>
                    <ButtonsRow>
                        <Button onClick={() => setIsOpenWithoutEscapeHandler(true)}>Открыть диалог без Escape</Button>
                        <Button onClick={() => setIsOpenWithEscapeHandler(true)}>Открыть диалог с Escape</Button>
                    </ButtonsRow>
                </Container>
                <Dialog isModal={false} isOpen={isOpenWithoutEscapeHandler} close={() => setIsOpenWithoutEscapeHandler(false)} labeledBy="headingOfWithoutEscape">
                    <Heading id="headingOfWithoutEscape" className="mb-20">
                        Я - дефолтный диалог
                    </Heading>
                    <Text>Так как я немодальный, закрыть меня с помощью Escape не выйдет - как ни пытайся!</Text>
                </Dialog>
                <Dialog isModal={false} isOpen={isOpenWithEscapeHandler} close={() => setIsOpenWithEscapeHandler(false)} labeledBy="headingOfWithEscape" withCloseOnEscapeForNonModal>
                    <Heading id="headingOfWithEscape" className="mb-20">
                        Я - продвинутый диалог
                    </Heading>
                    <Text className="mb-10">
                        Хоть я и немодальный диалог, меня можно закрыть в помощью клавиши Escape.
                    </Text>
                    <Text className="mb-10">Это работает благодаря пропу withCloseOnEscapeForNonModal.</Text>
                </Dialog>
            </>;
  }
}`,...(r=(c=s.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};const g=["CloseOnEscapeNonModal"];export{s as CloseOnEscapeNonModal,g as __namedExportsOrder,f as default};
