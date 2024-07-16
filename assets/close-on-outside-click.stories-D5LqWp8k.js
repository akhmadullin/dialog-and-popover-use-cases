import{j as u,C as B,H as n,T as e}from"./index-Cc0r8_xM.js";import{r as a}from"./index-DVXBtNgz.js";import{B as O}from"./index-B5K31Wy9.js";import{B as o}from"./index-CFho4Kze.js";import{D as i}from"./dialog-BnBnX8aZ.js";const F={title:"Dialog Based/Dialog"},s={name:"4) Close On Outside Click",render:()=>{const[d,t]=a.useState(!1),[c,l]=a.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsxs(B,{children:[u.jsx(n,{children:"Закрытие диалога по клику на область за его пределами"}),u.jsx(e,{children:"По дефолту браузеры не дают такую возможность. Но такое поведение часто хотят видеть дизайнеры и бизнес. Его можно добавить самостоятельно."}),u.jsxs(O,{children:[u.jsx(o,{onClick:()=>t(!0),children:"Открыть немодальный диалог"}),u.jsx(o,{onClick:()=>l(!0),children:"Открыть модальный диалог"})]})]}),u.jsxs(i,{isModal:!1,isOpen:d,close:()=>t(!1),label:"Пример немодального диалога",withCloseOnOutsideClick:!0,children:[u.jsx(n,{className:"mb-20",children:"Я - немодальный диалог"}),u.jsx(e,{className:"mb-10",children:"Меня можно закрыть с помощью клика на свободную область страницы."}),u.jsx(e,{children:"Это все благодаря пропу withCloseOnOutsideClick."})]}),u.jsxs(i,{isModal:!0,isOpen:c,close:()=>l(!1),label:"Пример модального диалога",withCloseOnOutsideClick:!0,children:[u.jsx(n,{className:"mb-20",children:"Я - модальный диалог"}),u.jsx(e,{className:"mb-10",children:"Меня тоже можно закрыть с помощью клика на свободную область страницы."}),u.jsx(e,{children:"Попробуйте!"})]})]})}};var E,C,r;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '4) Close On Outside Click',
  render: () => {
    const [isOpenNonModal, setIsOpenNonModal] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    return <>
                <Container>
                    <Heading>Закрытие диалога по клику на область за его пределами</Heading>
                    <Text>
                        По дефолту браузеры не дают такую возможность. Но такое поведение часто хотят видеть дизайнеры и
                        бизнес. Его можно добавить самостоятельно.
                    </Text>
                    <ButtonsRow>
                        <Button onClick={() => setIsOpenNonModal(true)}>Открыть немодальный диалог</Button>
                        <Button onClick={() => setIsOpenModal(true)}>Открыть модальный диалог</Button>
                    </ButtonsRow>
                </Container>
                <Dialog isModal={false} isOpen={isOpenNonModal} close={() => setIsOpenNonModal(false)} label="Пример немодального диалога" withCloseOnOutsideClick>
                    <Heading className="mb-20">Я - немодальный диалог</Heading>
                    <Text className="mb-10">Меня можно закрыть с помощью клика на свободную область страницы.</Text>
                    <Text>Это все благодаря пропу withCloseOnOutsideClick.</Text>
                </Dialog>
                <Dialog isModal isOpen={isOpenModal} close={() => setIsOpenModal(false)} label="Пример модального диалога" withCloseOnOutsideClick>
                    <Heading className="mb-20">Я - модальный диалог</Heading>
                    <Text className="mb-10">
                        Меня тоже можно закрыть с помощью клика на свободную область страницы.
                    </Text>
                    <Text>Попробуйте!</Text>
                </Dialog>
            </>;
  }
}`,...(r=(C=s.parameters)==null?void 0:C.docs)==null?void 0:r.source}}};const M=["CloseOnOutsideClick"];export{s as CloseOnOutsideClick,M as __namedExportsOrder,F as default};
