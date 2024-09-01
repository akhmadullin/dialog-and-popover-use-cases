import{j as u,c as m}from"./index-CMu3Kjdk.js";import{r}from"./index-DVXBtNgz.js";import{H as B}from"./index-DgaVQ6HT.js";import{H as i}from"./index-DqfXHWeU.js";import{B as D}from"./index-C8DP56y-.js";import{B as l}from"./index-DX7BcFfT.js";import{D as c}from"./dialog-D3Br7OsT.js";const h="_unsortedList_va383_1",f={unsortedList:h},n=({options:t,className:s,...a})=>u.jsx("ul",{className:m(f.unsortedList,s),...a,children:t.map((e,C)=>u.jsx("li",{children:e},C))});n.__docgenInfo={description:"",methods:[],displayName:"UnsortedList",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}},composes:["HTMLAttributes"]};const b={title:"Dialog Based/Dialog",tags:["!dev"]},o={name:"2) What Web Platform Provides",render:()=>{const[t,s]=r.useState(!1),[a,e]=r.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsx(B,{children:u.jsxs(D,{children:[u.jsx(l,{onClick:()=>s(!0),children:"Открыть немодальный диалог"}),u.jsx(l,{onClick:()=>e(!0),children:"Открыть модальный диалог"})]})}),u.jsxs(c,{isModal:!1,isOpen:t,close:()=>s(!1),label:"Пример немодального диалога",withPageScrollLock:!0,children:[u.jsx(i,{className:"mb-20",children:"Немодальный диалог"}),u.jsx(n,{options:["Меня можно открыть из JavaScript'а с помощью метода show()","Меня можно закрыть из JavaScript'а с помощью метода close()"]})]}),u.jsxs(c,{isModal:!0,isOpen:a,close:()=>e(!1),label:"Пример модального диалога",children:[u.jsx(i,{className:"mb-20",children:"Модальный диалог"}),u.jsx(n,{options:["Меня можно открыть из JavaScript'а с помощью метода showModal()","Меня можно закрыть из JavaScript'а с помощью метода close()","Меня можно закрыть с помощью клавиши Escape"]})]})]})}};var d,p,E;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '2) What Web Platform Provides',
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
                <Dialog isModal={false} isOpen={isOpenNonModal} close={() => setIsOpenNonModal(false)} label="Пример немодального диалога" withPageScrollLock>
                    <Heading className="mb-20">Немодальный диалог</Heading>
                    <UnsortedList options={[\`Меня можно открыть из JavaScript'а с помощью метода show()\`, \`Меня можно закрыть из JavaScript'а с помощью метода close()\`]} />
                </Dialog>
                <Dialog isModal isOpen={isOpenModal} close={() => setIsOpenModal(false)} label="Пример модального диалога">
                    <Heading className="mb-20">Модальный диалог</Heading>
                    <UnsortedList options={[\`Меня можно открыть из JavaScript'а с помощью метода showModal()\`, \`Меня можно закрыть из JavaScript'а с помощью метода close()\`, \`Меня можно закрыть с помощью клавиши Escape\`]} />
                </Dialog>
            </>;
  }
}`,...(E=(p=o.parameters)==null?void 0:p.docs)==null?void 0:E.source}}};const F=["WhatWebPlatformProvides"];export{o as WhatWebPlatformProvides,F as __namedExportsOrder,b as default};
