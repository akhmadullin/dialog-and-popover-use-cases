import{j as u,c as m,C as B,H as t,T as D}from"./index-Cc0r8_xM.js";import{r as i}from"./index-DVXBtNgz.js";import{B as h}from"./index-B5K31Wy9.js";import{B as l}from"./index-CFho4Kze.js";import{D as d}from"./dialog-BnBnX8aZ.js";const x="_unsortedList_va383_1",g={unsortedList:x},r=({options:a,className:s,...n})=>u.jsx("ul",{className:m(g.unsortedList,s),...n,children:a.map((e,p)=>u.jsx("li",{children:e},p))});r.__docgenInfo={description:"",methods:[],displayName:"UnsortedList",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}},composes:["HTMLAttributes"]};const S={title:"Dialog Based/Dialog"},o={name:"2) What Web Platform Provides",render:()=>{const[a,s]=i.useState(!1),[n,e]=i.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsxs(B,{children:[u.jsx(t,{children:"Чем веб плафторма одарила диалог?"}),u.jsx(D,{children:"Что по дефолту умеет делать dialog в браузере?"}),u.jsxs(h,{children:[u.jsx(l,{onClick:()=>s(!0),children:"Открыть немодальный диалог"}),u.jsx(l,{onClick:()=>e(!0),children:"Открыть модальный диалог"})]})]}),u.jsxs(d,{isModal:!1,isOpen:a,close:()=>s(!1),label:"Пример немодального диалога",withPageScrollLock:!0,children:[u.jsx(t,{className:"mb-20",children:"Я - немодальный диалог"}),u.jsx(r,{options:["Меня можно открыть из JavaScript'а с помощью метода show()","Меня можно закрыть из JavaScript'а с помощью метода close()"]})]}),u.jsxs(d,{isModal:!0,isOpen:n,close:()=>e(!1),label:"Пример модального диалога",children:[u.jsx(t,{className:"mb-20",children:"Я - модальный диалог"}),u.jsx(r,{options:["Меня можно открыть из JavaScript'а с помощью метода showModal()","Меня можно закрыть из JavaScript'а с помощью метода close()","Меня можно закрыть с помощью клавиши Escape"]})]})]})}};var c,E,C;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '2) What Web Platform Provides',
  render: () => {
    const [isOpenNonModal, setIsOpenNonModal] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    return <>
                <Container>
                    <Heading>Чем веб плафторма одарила диалог?</Heading>
                    <Text>Что по дефолту умеет делать dialog в браузере?</Text>
                    <ButtonsRow>
                        <Button onClick={() => setIsOpenNonModal(true)}>Открыть немодальный диалог</Button>
                        <Button onClick={() => setIsOpenModal(true)}>Открыть модальный диалог</Button>
                    </ButtonsRow>
                </Container>
                <Dialog isModal={false} isOpen={isOpenNonModal} close={() => setIsOpenNonModal(false)} label="Пример немодального диалога" withPageScrollLock>
                    <Heading className="mb-20">Я - немодальный диалог</Heading>
                    <UnsortedList options={[\`Меня можно открыть из JavaScript'а с помощью метода show()\`, \`Меня можно закрыть из JavaScript'а с помощью метода close()\`]} />
                </Dialog>
                <Dialog isModal isOpen={isOpenModal} close={() => setIsOpenModal(false)} label="Пример модального диалога">
                    <Heading className="mb-20">Я - модальный диалог</Heading>
                    <UnsortedList options={[\`Меня можно открыть из JavaScript'а с помощью метода showModal()\`, \`Меня можно закрыть из JavaScript'а с помощью метода close()\`, \`Меня можно закрыть с помощью клавиши Escape\`]} />
                </Dialog>
            </>;
  }
}`,...(C=(E=o.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const b=["WhatWebPlatformProvides"];export{o as WhatWebPlatformProvides,b as __namedExportsOrder,S as default};
