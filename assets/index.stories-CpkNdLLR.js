import{j as u}from"./index-CMu3Kjdk.js";import{r as m}from"./index-DVXBtNgz.js";import{C as c}from"./index-DCH73c6e.js";import{B as p}from"./index-DX7BcFfT.js";import{H as B}from"./index-DqfXHWeU.js";import{T as o}from"./index-xa7G255s.js";import{B as i}from"./bottom-sheet-B6kZkjFk.js";import{V as d}from"./viewports-SW0gpDjs.js";import"./dialog-D3Br7OsT.js";const k={title:"Dialog Based/BottomSheet",component:i},e={args:{isModal:!0,label:"Пример BottomSheet",withPageScrollLock:!0,withCloseOnOutsideClick:!0},parameters:{controls:{include:["label","withPageScrollLock","withCloseOnOutsideClick"]},viewport:{defaultViewport:d.MobileMedium}},render:a=>{const[l,t]=m.useState(!1);return u.jsxs(c,{children:[u.jsx(p,{onClick:()=>t(!0),children:"Открыть Bottom Sheet"}),u.jsxs(i,{...a,isOpen:l,close:()=>t(!1),children:[u.jsx(B,{className:"mb-20",children:"Bottom Sheet"}),u.jsx(o,{children:"Диалог, который выглядит и анимируется, как элемент из мобильных платформ – Bottom Sheet."}),u.jsx(o,{children:"Может быть полезным для создания похожего UI между вебом и мобилками."})]})]})}};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    isModal: true,
    label: 'Пример BottomSheet',
    withPageScrollLock: true,
    withCloseOnOutsideClick: true
  },
  parameters: {
    controls: {
      include: ['label', 'withPageScrollLock', 'withCloseOnOutsideClick']
    },
    viewport: {
      defaultViewport: ViewportType.MobileMedium
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <Container>
                <Button onClick={() => setIsOpen(true)}>Открыть Bottom Sheet</Button>
                <BottomSheet {...args} isOpen={isOpen} close={() => setIsOpen(false)}>
                    <Heading className="mb-20">Bottom Sheet</Heading>
                    <Text>
                        Диалог, который выглядит и анимируется, как элемент из мобильных платформ – Bottom Sheet.
                    </Text>
                    <Text>Может быть полезным для создания похожего UI между вебом и мобилками.</Text>
                </BottomSheet>
            </Container>;
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const b=["BottomSheetStory"];export{e as BottomSheetStory,b as __namedExportsOrder,k as default};
