import{j as e}from"./index-CMu3Kjdk.js";import{r as h}from"./index-DVXBtNgz.js";import{H as c}from"./index-DgaVQ6HT.js";import{H as p}from"./index-DqfXHWeU.js";import{T as o}from"./index-xa7G255s.js";import{B}from"./index-DX7BcFfT.js";import{B as x}from"./bottom-sheet-B6kZkjFk.js";import"./dialog-D3Br7OsT.js";const j={title:"Dialog Based/Bottom sheet",tags:["!dev"]},u={render:()=>{const[m,s]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{style:{padding:"0"},children:e.jsx(B,{onClick:()=>{s(!0)},children:"Открыть Bottom Sheet"})}),e.jsx("div",{children:e.jsxs(x,{isModal:!0,isOpen:m,close:()=>{s(!1)},withCloseOnOutsideClick:!0,label:"Пример Bottom Sheet компонента",children:[e.jsx(p,{className:"mb-20",children:"Bottom Sheet"}),e.jsx(o,{className:"mb-10",children:"На самом деле, я – обычный диалог."}),e.jsx(o,{className:"mb-10",children:"Но я могу выезжать снизу страницы, как Bottom Sheet в мобильных приложениях."}),e.jsx(o,{children:"И закрываться по клику на свободную область экрана."})]})})]})}},t={render:()=>e.jsx("div",{style:{borderRadius:"16px",border:"2px solid hsla(203, 50%, 30%, 0.15)",width:"375px",height:"600px",margin:"0 auto",overflow:"hidden"},children:e.jsx("iframe",{src:"?path=/story/dialog-based-bottom-sheet--bottom-sheet-story-for-docs&globals=viewport:MobileMedium--default&full=1&shortcuts=false&singleStory=true",width:"100%",height:"100%",style:{border:"none"}})})};var r,n,a;u.parameters={...u.parameters,docs:{...(r=u.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
                <HeightWrapper style={{
        padding: '0'
      }}>
                    <Button onClick={() => {
          setIsOpen(true);
        }}>
                        Открыть Bottom Sheet
                    </Button>
                </HeightWrapper>
                <div>
                    <BottomSheet isModal isOpen={isOpen} close={() => {
          setIsOpen(false);
        }} withCloseOnOutsideClick label="Пример Bottom Sheet компонента">
                        <Heading className="mb-20">Bottom Sheet</Heading>
                        <Text className="mb-10">На самом деле, я – обычный диалог.</Text>
                        <Text className="mb-10">
                            Но я могу выезжать снизу страницы, как Bottom Sheet в мобильных приложениях.
                        </Text>
                        <Text>И закрываться по клику на свободную область экрана.</Text>
                    </BottomSheet>
                </div>
            </>;
  }
}`,...(a=(n=u.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var i,d,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      borderRadius: '16px',
      border: '2px solid hsla(203, 50%, 30%, 0.15)',
      width: '375px',
      height: '600px',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
                <iframe src="?path=/story/dialog-based-bottom-sheet--bottom-sheet-story-for-docs&globals=viewport:MobileMedium--default&full=1&shortcuts=false&singleStory=true" width="100%" height="100%" style={{
        border: 'none'
      }}></iframe>
            </div>;
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const O=["BottomSheetStoryForDocs","BottomSheetStoryInIfame"];export{u as BottomSheetStoryForDocs,t as BottomSheetStoryInIfame,O as __namedExportsOrder,j as default};
