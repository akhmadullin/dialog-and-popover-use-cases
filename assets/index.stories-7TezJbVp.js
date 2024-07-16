import{j as u,c as x,C as B,H as v,T as F}from"./index-Cc0r8_xM.js";import{B as l}from"./index-CFho4Kze.js";import{B as g}from"./index-B5K31Wy9.js";import"./index-DVXBtNgz.js";const C=t=>Object.entries(t).reduce((o,[e,i])=>(i&&(o[e]=i),o),{}),y="_tooltip_tbrwe_1",N="_tooltipTopBottom_tbrwe_29",f="_tooltipLeftRight_tbrwe_34",n={tooltip:y,tooltipTopBottom:N,tooltipLeftRight:f},a=({id:t,anchorElementName:o,className:e,orientation:i,width:d,height:h,maxWidth:m,maxHeight:T,children:E})=>u.jsx("div",{popover:"auto",id:t,role:"tooltip",className:x(n.tooltip,i==="horizontal"?n.tooltipLeftRight:n.tooltipTopBottom,e),style:{...C({width:d,height:h,maxWidth:m,maxHeight:T}),"--anchor-el-name":o,"--tooltip-el-name":`--${t}-tooltip`},children:u.jsx("div",{className:n.tooltipContent,children:E})});a.__docgenInfo={description:"",methods:[],displayName:"TooltipWithFixedOrientation",props:{width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},maxHeight:{required:!1,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},anchorElementName:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!0,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:""}}};const I={title:"Popover Based/Tooltip with fixed orientation"},r={render:()=>{const t="vertical-tooltip",o=`--${t}-button`,e="horizontal-tooltip",i=`--${e}-button`;return u.jsxs(B,{style:{minWidth:"200vw",minHeight:"200vh"},children:[u.jsx(v,{children:"Тултип с фиксировой осью"}),u.jsx(F,{children:"Иногда нужно, чтобы тултип показывался либо сверху/снизу, либо справа/слева. Такое тоже можем себе позволить."}),u.jsxs(g,{children:[u.jsx(l,{popovertarget:t,"aria-describedby":t,style:{anchorName:o,marginLeft:"200px"},children:"Показать вертикальный тултип"}),u.jsx(l,{popovertarget:e,"aria-describedby":e,style:{anchorName:i},children:"Показать горизонтальный тултип"})]}),u.jsx(a,{id:t,anchorElementName:o,orientation:"vertical",maxWidth:"300px",children:"Адаптируюсь под видимую область страницы по вертикальной оси. Попробуй поскролить страницу."}),u.jsx(a,{id:e,anchorElementName:i,orientation:"horizontal",maxWidth:"200px",children:"А я могу подстраиваться под вьюпорт по вертикали."})]})}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const verticalTooltipId = 'vertical-tooltip';
    const verticalTooltipAnchorName = \`--\${verticalTooltipId}-button\`;
    const horizontalTooltipId = 'horizontal-tooltip';
    const horizontalTooltipAnchorName = \`--\${horizontalTooltipId}-button\`;
    return <Container style={{
      minWidth: '200vw',
      minHeight: '200vh'
    }}>
                <Heading>Тултип с фиксировой осью</Heading>
                <Text>
                    Иногда нужно, чтобы тултип показывался либо сверху/снизу, либо справа/слева. Такое тоже можем себе
                    позволить.
                </Text>
                <ButtonsRow>
                    <Button popovertarget={verticalTooltipId} aria-describedby={verticalTooltipId} style={({
          anchorName: verticalTooltipAnchorName,
          marginLeft: '200px'
        } as React.CSSProperties)}>
                        Показать вертикальный тултип
                    </Button>
                    <Button popovertarget={horizontalTooltipId} aria-describedby={horizontalTooltipId} style={({
          anchorName: horizontalTooltipAnchorName
        } as React.CSSProperties)}>
                        Показать горизонтальный тултип
                    </Button>
                </ButtonsRow>

                <TooltipWithFixedOrientation id={verticalTooltipId} anchorElementName={verticalTooltipAnchorName} orientation="vertical" maxWidth="300px">
                    Адаптируюсь под видимую область страницы по вертикальной оси. Попробуй поскролить страницу.
                </TooltipWithFixedOrientation>
                <TooltipWithFixedOrientation id={horizontalTooltipId} anchorElementName={horizontalTooltipAnchorName} orientation="horizontal" maxWidth="200px">
                    А я могу подстраиваться под вьюпорт по вертикали.
                </TooltipWithFixedOrientation>
            </Container>;
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const W=["TooltipStory"];export{r as TooltipStory,W as __namedExportsOrder,I as default};
