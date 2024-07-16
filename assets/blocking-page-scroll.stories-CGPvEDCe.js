import{j as u,C as d,H as l,T as e}from"./index-Cc0r8_xM.js";import{r as a}from"./index-DVXBtNgz.js";import{B as m}from"./index-B5K31Wy9.js";import{B as c}from"./index-CFho4Kze.js";import{D as i}from"./dialog-BnBnX8aZ.js";const S={title:"Dialog Based/Dialog"},n={name:"5) Page Scroll Lock",render:()=>{const[g,o]=a.useState(!1),[E,s]=a.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsxs(d,{children:[u.jsx(l,{children:"Блокировка скролла страницы"}),u.jsx(e,{children:"Иногда, бывает полезно блокировать скролл остальной страницы, пока открыт диалог."}),u.jsx(e,{children:"Элемент Dialog не делает этого по дефолту. Но это можно исправить."}),u.jsxs(m,{children:[u.jsx(c,{onClick:()=>o(!0),children:"Открыть диалог, неблокирующий скролл"}),u.jsx(c,{onClick:()=>s(!0),children:"Открыть диалог с блокировкой скролла"})]})]}),u.jsxs(i,{isModal:!1,isOpen:g,close:()=>o(!1),labeledBy:"headingOfNonBlocking",children:[u.jsx(l,{id:"headingOfNonBlocking",className:"mb-20",children:"Я не блокирую скролл страницы"}),u.jsx(e,{children:"Попробуйте проскроллить контент страницы позади меня - я дам с легкостью это сделать"})]}),u.jsxs(i,{isModal:!1,isOpen:E,close:()=>s(!1),labeledBy:"headingOfBlocking",withPageScrollLock:!0,children:[u.jsx(l,{id:"headingOfBlocking",className:"mb-20",children:"Я блокирую скролл страницы"}),u.jsx(e,{className:"mb-10",children:"Пока я открыт, скролл страницы заблокирован."}),u.jsx(e,{className:"mb-10",children:"Эта фича активируется с помощью пропа withPageScrollLock."}),u.jsx(e,{className:"mb-10",children:"Данный проп активирует CSS, который блокирует скролл контента позади меня."})]})]})}};var t,B,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '5) Page Scroll Lock',
  render: () => {
    const [isOpenNonBlockingPageScroll, setIsOpenNonBlockingPageScroll] = useState(false);
    const [isOpenBlockingPageScroll, setIsOpenBlockingPageScroll] = useState(false);
    return <>
                <Container>
                    <Heading>Блокировка скролла страницы</Heading>
                    <Text>Иногда, бывает полезно блокировать скролл остальной страницы, пока открыт диалог.</Text>
                    <Text>Элемент Dialog не делает этого по дефолту. Но это можно исправить.</Text>
                    <ButtonsRow>
                        <Button onClick={() => setIsOpenNonBlockingPageScroll(true)}>
                            Открыть диалог, неблокирующий скролл
                        </Button>
                        <Button onClick={() => setIsOpenBlockingPageScroll(true)}>
                            Открыть диалог с блокировкой скролла
                        </Button>
                    </ButtonsRow>
                </Container>

                <Dialog isModal={false} isOpen={isOpenNonBlockingPageScroll} close={() => setIsOpenNonBlockingPageScroll(false)} labeledBy="headingOfNonBlocking">
                    <Heading id="headingOfNonBlocking" className="mb-20">
                        Я не блокирую скролл страницы
                    </Heading>
                    <Text>Попробуйте проскроллить контент страницы позади меня - я дам с легкостью это сделать</Text>
                </Dialog>
                <Dialog isModal={false} isOpen={isOpenBlockingPageScroll} close={() => setIsOpenBlockingPageScroll(false)} labeledBy="headingOfBlocking" withPageScrollLock>
                    <Heading id="headingOfBlocking" className="mb-20">
                        Я блокирую скролл страницы
                    </Heading>
                    <Text className="mb-10">Пока я открыт, скролл страницы заблокирован.</Text>
                    <Text className="mb-10">Эта фича активируется с помощью пропа withPageScrollLock.</Text>
                    <Text className="mb-10">
                        Данный проп активирует CSS, который блокирует скролл контента позади меня.
                    </Text>
                </Dialog>
            </>;
  }
}`,...(r=(B=n.parameters)==null?void 0:B.docs)==null?void 0:r.source}}};const h=["PageScrollLock"];export{n as PageScrollLock,h as __namedExportsOrder,S as default};
