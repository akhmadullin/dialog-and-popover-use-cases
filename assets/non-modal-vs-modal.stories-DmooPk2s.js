import{j as u}from"./index-CMu3Kjdk.js";import{r as n}from"./index-DVXBtNgz.js";import{H as m}from"./index-DgaVQ6HT.js";import{H as a}from"./index-DqfXHWeU.js";import{T as t}from"./index-xa7G255s.js";import{B}from"./index-C8DP56y-.js";import{B as l}from"./index-DX7BcFfT.js";import{D as r}from"./dialog-D3Br7OsT.js";const h={title:"Dialog Based/Dialog",tags:["!dev"]},e={name:"1) Non Modal Vs Modal",render:()=>{const[c,s]=n.useState(!1),[E,o]=n.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsx(m,{children:u.jsxs(B,{children:[u.jsx(l,{onClick:()=>s(!0),children:"Открыть немодальный диалог"}),u.jsx(l,{onClick:()=>o(!0),children:"Открыть модальный диалог"})]})}),u.jsxs(r,{isModal:!1,isOpen:c,close:()=>s(!1),label:"Пример немодального диалога",children:[u.jsx(a,{className:"mb-20",children:"Немодальный диалог"}),u.jsx(t,{children:"Хоть я и нахожусь поверх кнопок, они все еще доступны для взаимодействия"})]}),u.jsxs(r,{isModal:!0,isOpen:E,close:()=>o(!1),label:"Пример модального диалога",children:[u.jsx(a,{className:"mb-20",children:"Модальный диалог"}),u.jsx(t,{children:"Весь остальной контент страницы недоступен, пока я открыт"})]})]})}};var i,d,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '1) Non Modal Vs Modal',
  render: () => {
    const [isOpenNonModal, setIsOpenNonModal] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    return <>
                <HeightWrapper>
                    <ButtonsRow>
                        <Button onClick={() => setIsOpenNonModal(true)}>Открыть немодальный диалог</Button>
                        <Button onClick={() => setIsOpenModal(true)}>Открыть модальный диалог</Button>
                    </ButtonsRow>
                </HeightWrapper>
                <Dialog isModal={false} isOpen={isOpenNonModal} close={() => setIsOpenNonModal(false)} label="Пример немодального диалога">
                    <Heading className="mb-20">Немодальный диалог</Heading>
                    <Text>Хоть я и нахожусь поверх кнопок, они все еще доступны для взаимодействия</Text>
                </Dialog>
                <Dialog isModal isOpen={isOpenModal} close={() => setIsOpenModal(false)} label="Пример модального диалога">
                    <Heading className="mb-20">Модальный диалог</Heading>
                    <Text>Весь остальной контент страницы недоступен, пока я открыт</Text>
                </Dialog>
            </>;
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const j=["NonModalVsModal"];export{e as NonModalVsModal,j as __namedExportsOrder,h as default};
