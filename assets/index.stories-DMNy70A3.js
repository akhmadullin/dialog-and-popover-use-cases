import{j as i,c as y}from"./index-CMu3Kjdk.js";import{w as j,a as w}from"./css-anchor-positioning-support-warning-YNFWsKM8.js";import{C as A}from"./index-CCz_crBJ.js";import{B as k}from"./index-DX7BcFfT.js";import{r as b}from"./index-DVXBtNgz.js";const P="_menu_vpr65_1",T="_menuOption_vpr65_21",F="_menuOptionButton_vpr65_29",K="_menuOptionButtonWithSubMenu_vpr65_46",$="_menuSubMenu_vpr65_72",f={menu:P,menuOption:T,menuOptionButton:F,menuOptionButtonWithSubMenu:K,menuSubMenu:$},G=()=>{const e=b.useRef({}),o=b.useCallback((c,u)=>{if(u==null){delete e.current[c];return}e.current={...e.current,[c]:u}},[]);return[e,o]},H=9,U=27,q=40,z=38,J=39,Q=37,V=(e,o)=>e?{liData:{style:{anchorName:o}},buttonData:{"aria-haspopup":!0,"aria-expanded":!1,popovertarget:e}}:{},E=b.forwardRef(({subMenu:e,subMenuId:o,anchorName:c,children:u,...h},s)=>{const{liData:d,buttonData:g}=V(o,c);return i.jsxs("li",{role:"none",...d,className:f.menuOption,children:[i.jsx("button",{ref:s,type:"button",role:"menuitem",tabIndex:-1,...g,className:y(f.menuOptionButton,{[f.menuOptionButtonWithSubMenu]:o}),...h,children:u}),e]})});E.__docgenInfo={description:"",methods:[],displayName:"MenuItem"};const X=(e,o)=>{if(!o)return{};const c=`${e}-submenu`,u=`--submenu-button-${e}`;return{subMenuElement:i.jsx(B,{id:c,anchorName:u,items:o.items,ariaLabel:o.ariaLabel,isSubMenu:!0}),subMenuId:c,subMenuButtonAnchorName:u}},S=1,B=({id:e,anchorName:o,items:c,isSubMenu:u,ariaLabel:h})=>{const s=b.useRef(null),[d,g]=G(),M=c.map((t,n)=>({...t,idx:n,"data-idx":n}));b.useLayoutEffect(()=>{var n;const t=r=>{r.newState==="open"&&d.current[0].focus()};return(n=s.current)==null||n.addEventListener("toggle",t),()=>{var r;(r=s.current)==null||r.removeEventListener("toggle",t)}},[d]),b.useLayoutEffect(()=>{var n;if(!u)return;const t=r=>{var m,p,l,a;r.newState==="open"?(p=(m=s.current)==null?void 0:m.previousSibling)==null||p.setAttribute("aria-expanded",!0):(a=(l=s.current)==null?void 0:l.previousSibling)==null||a.setAttribute("aria-expanded",!1)};return(n=s.current)==null||n.addEventListener("beforetoggle",t),()=>{var r;u&&((r=s.current)==null||r.removeEventListener("beforetoggle",t))}},[u]);const R=t=>{var n;t.keyCode===H&&((n=s.current)==null||n.hidePopover())},C=t=>{var r,m,p;const n=t.target;switch(t.keyCode){case q:{t.preventDefault();const l=Number(n.dataset.idx);let a=l===0?1:l+S;a>=M.length&&(a=0),d.current[a].focus();break}case z:{t.preventDefault();let a=Number(n.dataset.idx)-S;a<0&&(a=M.length-1),d.current[a].focus();break}case Q:case J:{t.preventDefault();break}case U:{if(!u)return;(p=(m=(r=n.parentNode)==null?void 0:r.parentNode)==null?void 0:m.previousSibling)==null||p.focus();break}}};return i.jsx("ul",{ref:s,id:e,role:"menu","aria-label":h,popover:"auto",onKeyDown:R,className:y(f.menu,{[f.menuSubMenu]:u}),style:{"--menu-button-anchor-name":o},children:M.map(({id:t,content:n,subMenu:r,idx:m,action:p,...l})=>{const{subMenuElement:a,subMenuId:_,subMenuButtonAnchorName:D}=X(t,r);return i.jsx(E,{ref:W=>{g(m,W)},onKeyDown:C,onClick:p,subMenu:a,subMenuId:_,anchorName:D,...l,children:n},t)})})},L=e=>i.jsx(B,{...e});L.__docgenInfo={description:"",methods:[],displayName:"Menu"};const oe={title:"Popover Based/Menu",decorators:[j,w]},I=[{id:"open",content:"Открыть"},{id:"edit",content:"Редактировать"},{id:"close",content:"Закрыть"},{id:"more",content:"Еще",subMenu:{ariaLabel:"Еще",items:[{id:"a1",content:"Действие раз"},{id:"a2",content:"Действие два",subMenu:{ariaLabel:"Действие два",items:[{id:"b1",content:"Поддействие раз"},{id:"b2",content:"Поддействие два"},{id:"b3",content:"Поддействие три"}]}},{id:"a3",content:"Действие три"}]}}],x={args:{items:I,ariaLabel:"Действия"},argTypes:{items:{control:"object"},ariaLabel:{control:"text"}},render:()=>{const e="menuId",o="--menu-button-anchor";return i.jsxs(A,{children:[i.jsx(k,{popovertarget:e,style:{anchorName:o},children:"Открыть меню"}),i.jsx(L,{id:e,anchorName:o,items:I,ariaLabel:"Действия"})]})}};var O,v,N;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: itemsSample,
    ariaLabel: 'Действия'
  },
  argTypes: {
    items: {
      control: 'object'
    },
    ariaLabel: {
      control: 'text'
    }
  },
  render: () => {
    const menuId = 'menuId';
    const anchorName = '--menu-button-anchor';
    return <CenteredContentWithScroll>
                <Button popovertarget={menuId} style={{
        anchorName
      }}>
                    Открыть меню
                </Button>
                <Menu id={menuId} anchorName={anchorName} items={itemsSample} ariaLabel="Действия" />
            </CenteredContentWithScroll>;
  }
}`,...(N=(v=x.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const re=["MenuStory"];export{x as MenuStory,re as __namedExportsOrder,oe as default};
