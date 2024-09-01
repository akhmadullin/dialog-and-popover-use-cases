import{j as u}from"./index-CMu3Kjdk.js";import{r as o}from"./index-DVXBtNgz.js";import{B as p}from"./index-DX7BcFfT.js";import{H as m}from"./index-DgaVQ6HT.js";import{T as d}from"./index-xa7G255s.js";import{P as x}from"./prompt-f48VB63Y.js";import"./dialog-D3Br7OsT.js";const P={title:"Dialog Based/Prompt",tags:["!dev"]},e={render:()=>{const[t,l]=o.useState(""),[i,n]=o.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsxs(m,{children:[u.jsx("h3",{children:"Анкета"}),u.jsxs(d,{children:["Мой любимый WEB API:"," ",t?u.jsx("span",{style:{textDecoration:"underline"},children:t}):u.jsx("span",{style:{fontStyle:"italic",opacity:"0.6",textDecoration:"underline"},children:"не заполнено"})]}),u.jsx(p,{onClick:()=>{n(!0)},children:"Заполнить"})]}),u.jsx(x,{isModal:!0,isOpen:i,close:()=>{n(!1)},question:"Какой твой любимый WEB API?",placeholder:"Popover API, например",okText:"Сохранить",cancelText:"Отменить",okCallback:c=>{console.log("Ответ сохранен"),l(c)},cancelCallback:()=>console.log("Отмена сохранения"),label:"Пример promt компонента",minWidth:"440px"})]})}};var r,s,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const [favoriteFeature, setFavoriteFeature] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    return <>
                <HeightWrapper>
                    <h3>Анкета</h3>
                    <Text>
                        Мой любимый WEB API:{' '}
                        {favoriteFeature ? <span style={{
            textDecoration: 'underline'
          }}>{favoriteFeature}</span> : <span style={{
            fontStyle: 'italic',
            opacity: '0.6',
            textDecoration: 'underline'
          }}>
                                не заполнено
                            </span>}
                    </Text>
                    <Button onClick={() => {
          setIsOpen(true);
        }}>
                        Заполнить
                    </Button>
                </HeightWrapper>
                <Prompt isModal isOpen={isOpen} close={() => {
        setIsOpen(false);
      }} question="Какой твой любимый WEB API?" placeholder="Popover API, например" okText="Сохранить" cancelText="Отменить" okCallback={answer => {
        console.log('Ответ сохранен');
        setFavoriteFeature(answer);
      }} cancelCallback={() => console.log('Отмена сохранения')} label="Пример promt компонента" minWidth="440px" />
            </>;
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const g=["PromptStoryForDocs"];export{e as PromptStoryForDocs,g as __namedExportsOrder,P as default};
