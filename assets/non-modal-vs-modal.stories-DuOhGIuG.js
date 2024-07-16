import{j as u,C,H as s,T as n}from"./index-Cc0r8_xM.js";import{r as l}from"./index-DVXBtNgz.js";import{B as p}from"./index-B5K31Wy9.js";import{B as t}from"./index-CFho4Kze.js";import{D as r}from"./dialog-BnBnX8aZ.js";const f={title:"Dialog Based/Dialog"},e={name:"1) Non Modal Vs Modal",render:()=>{const[c,a]=l.useState(!1),[B,o]=l.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsxs(C,{children:[u.jsx(s,{children:"Чем отличается немодальный диалог от модального?"}),u.jsx(n,{children:"Давайте разбираться!"}),u.jsxs(p,{children:[u.jsx(t,{onClick:()=>a(!0),children:"Открыть немодальный диалог"}),u.jsx(t,{onClick:()=>o(!0),children:"Открыть модальный диалог"})]})]}),u.jsxs(r,{isModal:!1,isOpen:c,close:()=>a(!1),label:"Пример немодального диалога",children:[u.jsx(s,{className:"mb-20",children:"Я - немодальный диалог"}),u.jsx(n,{children:"Хоть я и нахожусь поверх кнопок, они все еще доступны для взаимодействия"})]}),u.jsxs(r,{isModal:!0,isOpen:B,close:()=>o(!1),label:"Пример модального диалога",children:[u.jsx(s,{className:"mb-20",children:"Я - модальный диалог"}),u.jsx(n,{children:"Весь остальной контент страницы недоступен, пока я открыт"})]})]})}};var i,d,E;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '1) Non Modal Vs Modal',
  render: () => {
    const [isOpenNonModal, setIsOpenNonModal] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    return <>
                <Container>
                    <Heading>Чем отличается немодальный диалог от модального?</Heading>
                    <Text>Давайте разбираться!</Text>
                    <ButtonsRow>
                        <Button onClick={() => setIsOpenNonModal(true)}>Открыть немодальный диалог</Button>
                        <Button onClick={() => setIsOpenModal(true)}>Открыть модальный диалог</Button>
                    </ButtonsRow>
                </Container>
                <Dialog isModal={false} isOpen={isOpenNonModal} close={() => setIsOpenNonModal(false)} label="Пример немодального диалога">
                    <Heading className="mb-20">Я - немодальный диалог</Heading>
                    <Text>Хоть я и нахожусь поверх кнопок, они все еще доступны для взаимодействия</Text>
                </Dialog>
                <Dialog isModal isOpen={isOpenModal} close={() => setIsOpenModal(false)} label="Пример модального диалога">
                    <Heading className="mb-20">Я - модальный диалог</Heading>
                    <Text>Весь остальной контент страницы недоступен, пока я открыт</Text>
                </Dialog>
            </>;
  }
}`,...(E=(d=e.parameters)==null?void 0:d.docs)==null?void 0:E.source}}};const g=["NonModalVsModal"];export{e as NonModalVsModal,g as __namedExportsOrder,f as default};
