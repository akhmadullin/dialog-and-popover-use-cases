import{j as u}from"./index-CMu3Kjdk.js";import{r as n}from"./index-DVXBtNgz.js";import{H as m}from"./index-DgaVQ6HT.js";import{B as p}from"./index-DX7BcFfT.js";import{C as d}from"./confirm-C75Bj9SZ.js";import"./dialog-D3Br7OsT.js";const D={title:"Dialog Based/Confirm",tags:["!dev"]},e={render:()=>{const[i,t]=n.useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatum, iure unde labore quos architecto, repudiandae sapiente animi commodi, expedita consectetur odio quia natus dolore magnam nemo. Eaque, ullam omnis."),[l,o]=n.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsxs(m,{children:[u.jsxs("form",{children:[u.jsx("label",{htmlFor:"important-text",style:{display:"block",fontWeight:"700"},children:"Очень важный текст"}),u.jsx("textarea",{id:"important-text",placeholder:"Например, Lorem ipsum dolor sit",value:i,onChange:c=>{t(c.target.value)},rows:8,cols:50})]}),u.jsx(p,{onClick:()=>{o(!0)},children:"Удалить текст"})]}),u.jsx(d,{isModal:!0,isOpen:l,close:()=>{o(!1)},question:"Удалить текст?",description:"Восстановление текста будет невозможно после удаления",okText:"Да",cancelText:"Нет",okCallback:()=>{console.log("Текст был удален"),t("")},cancelCallback:()=>{console.log("Текст не был удален")},label:"Пример cofirm компонента"})]})}};var s,a,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState(\`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatum, iure unde labore quos architecto, repudiandae sapiente animi commodi, expedita consectetur odio quia natus dolore magnam nemo. Eaque, ullam omnis.\`);
    const [isOpen, setIsOpen] = useState(false);
    return <>
                <HeightWrapper>
                    <form>
                        <label htmlFor="important-text" style={{
            display: 'block',
            fontWeight: '700'
          }}>
                            Очень важный текст
                        </label>
                        <textarea id="important-text" placeholder="Например, Lorem ipsum dolor sit" value={text} onChange={e => {
            setText(e.target.value);
          }} rows={8} cols={50} />
                    </form>
                    <Button onClick={() => {
          setIsOpen(true);
        }}>
                        Удалить текст
                    </Button>
                </HeightWrapper>
                <Confirm isModal isOpen={isOpen} close={() => {
        setIsOpen(false);
      }} question="Удалить текст?" description="Восстановление текста будет невозможно после удаления" okText="Да" cancelText="Нет" okCallback={() => {
        console.log('Текст был удален');
        setText('');
      }} cancelCallback={() => {
        console.log('Текст не был удален');
      }} label="Пример cofirm компонента" />
            </>;
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const E=["ConfirmStoryForDocs"];export{e as ConfirmStoryForDocs,E as __namedExportsOrder,D as default};
