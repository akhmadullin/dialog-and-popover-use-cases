import{j as u}from"./index-CMu3Kjdk.js";import{r as l}from"./index-DVXBtNgz.js";import{H as m}from"./index-DgaVQ6HT.js";import{H as o}from"./index-DqfXHWeU.js";import{T as e}from"./index-xa7G255s.js";import{B as p}from"./index-C8DP56y-.js";import{B as a}from"./index-DX7BcFfT.js";import{D as i}from"./dialog-D3Br7OsT.js";const j={title:"Dialog Based/Dialog",tags:["!dev"]},s={name:"4) Close On Outside Click",render:()=>{const[C,n]=l.useState(!1),[E,t]=l.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsx(m,{children:u.jsxs(p,{children:[u.jsx(a,{onClick:()=>n(!0),children:"Открыть немодальный диалог"}),u.jsx(a,{onClick:()=>t(!0),children:"Открыть модальный диалог"})]})}),u.jsxs(i,{isModal:!1,isOpen:C,close:()=>n(!1),label:"Пример немодального диалога",withCloseOnOutsideClick:!0,children:[u.jsx(o,{className:"mb-20",children:"Немодальный диалог"}),u.jsx(e,{className:"mb-10",children:"Меня можно закрыть с помощью клика на свободную область страницы."}),u.jsx(e,{children:"Это все благодаря пропу withCloseOnOutsideClick."})]}),u.jsxs(i,{isModal:!0,isOpen:E,close:()=>t(!1),label:"Пример модального диалога",withCloseOnOutsideClick:!0,children:[u.jsx(o,{className:"mb-20",children:"Модальный диалог"}),u.jsx(e,{className:"mb-10",children:"Меня тоже можно закрыть с помощью клика на свободную область страницы."}),u.jsx(e,{children:"Попробуйте!"})]})]})}};var r,d,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '4) Close On Outside Click',
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
                <Dialog isModal={false} isOpen={isOpenNonModal} close={() => setIsOpenNonModal(false)} label="Пример немодального диалога" withCloseOnOutsideClick>
                    <Heading className="mb-20">Немодальный диалог</Heading>
                    <Text className="mb-10">Меня можно закрыть с помощью клика на свободную область страницы.</Text>
                    <Text>Это все благодаря пропу withCloseOnOutsideClick.</Text>
                </Dialog>
                <Dialog isModal isOpen={isOpenModal} close={() => setIsOpenModal(false)} label="Пример модального диалога" withCloseOnOutsideClick>
                    <Heading className="mb-20">Модальный диалог</Heading>
                    <Text className="mb-10">
                        Меня тоже можно закрыть с помощью клика на свободную область страницы.
                    </Text>
                    <Text>Попробуйте!</Text>
                </Dialog>
            </>;
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const N=["CloseOnOutsideClick"];export{s as CloseOnOutsideClick,N as __namedExportsOrder,j as default};
