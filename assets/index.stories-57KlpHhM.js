import{j as u,c as d,C as l,H as n,T as e}from"./index-Cc0r8_xM.js";import{r as c}from"./index-DVXBtNgz.js";import{V as p}from"./viewports-SW0gpDjs.js";import{B as h}from"./index-CFho4Kze.js";import{D as B}from"./dialog-BnBnX8aZ.js";const C="_bottomSheet_dyz61_1",E={bottomSheet:C,"show-bottom-sheet":"_show-bottom-sheet_dyz61_1","hide-bottom-sheet":"_hide-bottom-sheet_dyz61_1","show-backdrop":"_show-backdrop_dyz61_1"},m=({className:o,...t})=>u.jsx(B,{className:d(E.bottomSheet,o),...t});m.__docgenInfo={description:"",methods:[],displayName:"BottomSheet",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},withPageScrollLock:{required:!1,tsType:{name:"boolean"},description:""},withCloseOnOutsideClick:{required:!1,tsType:{name:"boolean"},description:""},minWidth:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},minHeight:{required:!1,tsType:{name:"string"},description:""},maxHeight:{required:!1,tsType:{name:"string"},description:""}}};const g={title:"Dialog Based/Bottom sheet"},s={parameters:{viewport:{defaultViewport:p.MobileMedium}},render:()=>{const[o,t]=c.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsxs(l,{style:{padding:"0"},children:[u.jsx(n,{children:"Диалог в мобильном вебе или вебвью"}),u.jsx(e,{children:"В мобильном вебе интерфейс часто подражает мобильным приложениям"}),u.jsx(e,{children:"И чтобы создать ощущение единной системы, диалог может эмитировать элемент из мобильных платформ - Bottom Sheet"}),u.jsx(h,{onClick:()=>{t(!0)},children:"Открыть Bottom Sheet"})]}),u.jsxs(m,{isModal:!0,isOpen:o,close:()=>{t(!1)},withCloseOnOutsideClick:!0,label:"Пример Bottom Sheet компонента",children:[u.jsx(n,{className:"mb-20",children:"Я - Bottom Sheet"}),u.jsx(e,{className:"mb-10",children:"На самом деле, я - обычный диалог."}),u.jsx(e,{className:"mb-10",children:"Но я могу выезжать снизу страницы, как Bottom Sheet в мобильных приложениях."}),u.jsx(e,{className:"mb-10",children:"И закрываться по клику на свободную область экрана."}),u.jsx(e,{children:"Так-то!"})]})]})}};var r,i,a;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: ViewportType.MobileMedium
    }
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
                <Container style={{
        padding: '0'
      }}>
                    <Heading>Диалог в мобильном вебе или вебвью</Heading>
                    <Text>В мобильном вебе интерфейс часто подражает мобильным приложениям</Text>
                    <Text>
                        И чтобы создать ощущение единной системы, диалог может эмитировать элемент из мобильных платформ
                        - Bottom Sheet
                    </Text>
                    <Button onClick={() => {
          setIsOpen(true);
        }}>
                        Открыть Bottom Sheet
                    </Button>
                </Container>
                <BottomSheet isModal isOpen={isOpen} close={() => {
        setIsOpen(false);
      }} withCloseOnOutsideClick label="Пример Bottom Sheet компонента">
                    <Heading className="mb-20">Я - Bottom Sheet</Heading>
                    <Text className="mb-10">На самом деле, я - обычный диалог.</Text>
                    <Text className="mb-10">
                        Но я могу выезжать снизу страницы, как Bottom Sheet в мобильных приложениях.
                    </Text>
                    <Text className="mb-10">И закрываться по клику на свободную область экрана.</Text>
                    <Text>Так-то!</Text>
                </BottomSheet>
            </>;
  }
}`,...(a=(i=s.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const f=["BottomSheetStory"];export{s as BottomSheetStory,f as __namedExportsOrder,g as default};
