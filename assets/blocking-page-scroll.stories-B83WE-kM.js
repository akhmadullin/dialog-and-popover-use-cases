import{j as u}from"./index-CMu3Kjdk.js";import{r as s}from"./index-DVXBtNgz.js";import{H as m}from"./index-DgaVQ6HT.js";import{H as a}from"./index-DqfXHWeU.js";import{T as e}from"./index-xa7G255s.js";import{B as E}from"./index-C8DP56y-.js";import{B as c}from"./index-DX7BcFfT.js";import{D as i}from"./dialog-D3Br7OsT.js";const A={title:"Dialog Based/Dialog",tags:["!dev"]},n={name:"5) Page Scroll Lock",render:()=>{const[B,l]=s.useState(!1),[d,o]=s.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsx(m,{children:u.jsxs(E,{children:[u.jsx(c,{onClick:()=>l(!0),children:"Открыть диалог, неблокирующий скролл"}),u.jsx(c,{onClick:()=>o(!0),children:"Открыть диалог с блокировкой скролла"})]})}),u.jsxs(i,{isModal:!1,isOpen:B,close:()=>l(!1),labeledBy:"headingOfNonBlocking",children:[u.jsx(a,{id:"headingOfNonBlocking",className:"mb-20",children:"Я не блокирую скролл страницы"}),u.jsx(e,{children:"Попробуйте проскроллить контент страницы позади меня - я дам с легкостью это сделать"})]}),u.jsxs(i,{isModal:!1,isOpen:d,close:()=>o(!1),labeledBy:"headingOfBlocking",withPageScrollLock:!0,children:[u.jsx(a,{id:"headingOfBlocking",className:"mb-20",children:"Я блокирую скролл страницы"}),u.jsx(e,{className:"mb-10",children:"Пока я открыт, скролл страницы заблокирован."}),u.jsx(e,{className:"mb-10",children:"Эта фича активируется с помощью пропа withPageScrollLock."}),u.jsx(e,{className:"mb-10",children:"Данный проп активирует CSS, который блокирует скролл контента позади меня."})]})]})}};var r,t,g;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '5) Page Scroll Lock',
  render: () => {
    const [isOpenNonBlockingPageScroll, setIsOpenNonBlockingPageScroll] = useState(false);
    const [isOpenBlockingPageScroll, setIsOpenBlockingPageScroll] = useState(false);
    return <>
                <HeightWrapper>
                    <ButtonsRow>
                        <Button onClick={() => setIsOpenNonBlockingPageScroll(true)}>
                            Открыть диалог, неблокирующий скролл
                        </Button>
                        <Button onClick={() => setIsOpenBlockingPageScroll(true)}>
                            Открыть диалог с блокировкой скролла
                        </Button>
                    </ButtonsRow>
                </HeightWrapper>

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
}`,...(g=(t=n.parameters)==null?void 0:t.docs)==null?void 0:g.source}}};const P=["PageScrollLock"];export{n as PageScrollLock,P as __namedExportsOrder,A as default};
