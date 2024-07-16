import{j as u,c as a,C as y,H as T,T as l}from"./index-Cc0r8_xM.js";import{r as d}from"./index-DVXBtNgz.js";import{B as q}from"./index-CFho4Kze.js";import{D as _}from"./dialog-BnBnX8aZ.js";const k="_heading_norbb_1",j={heading:k},x=({children:e,className:t,...n})=>u.jsx("h2",{className:a(j.heading,t),...n,children:e});x.__docgenInfo={description:"",methods:[],displayName:"Heading"};const F="_button_1mzrp_1",A={button:F},C=({children:e,className:t,...n})=>u.jsx("button",{type:"button",className:a(A.button,t),...n,children:e});C.__docgenInfo={description:"",methods:[],displayName:"OkButton"};const O="_button_j7ufn_1",v={button:O},E=({children:e,className:t,...n})=>u.jsx("button",{type:"button",className:a(v.button,t),...n,children:e});E.__docgenInfo={description:"",methods:[],displayName:"CancelButton"};const w="_marginBottomMedium_1yqlp_1",N="_buttonsRow_1yqlp_5",r={marginBottomMedium:w,buttonsRow:N},f=({close:e,question:t,description:n,okText:o,cancelText:i,okCallback:D,cancelCallback:h,...B})=>{const b=()=>{e(),D()},c=()=>{e(),h()};return u.jsxs(_,{close:c,...B,children:[u.jsx(x,{className:r.marginBottomMedium,children:t}),n&&u.jsx("p",{className:r.marginBottomMedium,children:n}),u.jsxs("div",{className:r.buttonsRow,children:[u.jsx(C,{onClick:b,autoFocus:!0,children:o}),u.jsx(E,{onClick:c,children:i})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"Confrim",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},withPageScrollLock:{required:!1,tsType:{name:"boolean"},description:""},withCloseOnOutsideClick:{required:!1,tsType:{name:"boolean"},description:""},minWidth:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},minHeight:{required:!1,tsType:{name:"string"},description:""},maxHeight:{required:!1,tsType:{name:"string"},description:""},question:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},okText:{required:!0,tsType:{name:"string"},description:""},cancelText:{required:!0,tsType:{name:"string"},description:""},okCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const L={title:"Dialog Based/Confirm"},s={render:()=>{const[e,t]=d.useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatum, iure unde labore quos architecto, repudiandae sapiente animi commodi, expedita consectetur odio quia natus dolore magnam nemo. Eaque, ullam omnis."),[n,o]=d.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsxs(y,{children:[u.jsx(T,{children:"Конфёрм"}),u.jsx(l,{children:"На основе диалога можно делать вспомогательные компоненты - например, кастомизированный аналог метода confirm()"}),u.jsx(l,{children:"Подобный компонент можно использовать там, где нужен свой кастомный дизайн и нет нужды блокировать исполнение основного потока во время показа confirm"}),u.jsxs("form",{style:{marginTop:"40px"},children:[u.jsx("label",{htmlFor:"important-text",style:{display:"block",fontWeight:"700"},children:"Очень важный текст"}),u.jsx("textarea",{id:"important-text",placeholder:"Например, Lorem ipsum dolor sit",value:e,onChange:i=>{t(i.target.value)},rows:8,cols:50})]}),u.jsx(q,{onClick:()=>{o(!0)},children:"Удалить текст"})]}),u.jsx(f,{isModal:!0,isOpen:n,close:()=>{o(!1)},question:"Удалить текст?",description:"Восстановление текста будет невозможно после удаления",okText:"Да",cancelText:"Нет",okCallback:()=>{console.log("Текст был удален"),t("")},cancelCallback:()=>{console.log("Текст не был удален")},label:"Пример cofirm компонента"})]})}};var m,p,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState(\`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatum, iure unde labore quos architecto, repudiandae sapiente animi commodi, expedita consectetur odio quia natus dolore magnam nemo. Eaque, ullam omnis.\`);
    const [isOpen, setIsOpen] = useState(false);
    return <>
                <Container>
                    <Heading>Конфёрм</Heading>
                    <Text>
                        На основе диалога можно делать вспомогательные компоненты - например, кастомизированный аналог
                        метода confirm()
                    </Text>
                    <Text>
                        Подобный компонент можно использовать там, где нужен свой кастомный дизайн и нет нужды
                        блокировать исполнение основного потока во время показа confirm
                    </Text>
                    <form style={{
          marginTop: '40px'
        }}>
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
                </Container>
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
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const R=["ConfirmStory"];export{s as ConfirmStory,R as __namedExportsOrder,L as default};
