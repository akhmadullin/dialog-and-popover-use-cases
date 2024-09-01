import{j as o}from"./index-CMu3Kjdk.js";import{w as s,a as d}from"./css-anchor-positioning-support-warning-YNFWsKM8.js";import{C as h}from"./index-CCz_crBJ.js";import{B as e}from"./index-DX7BcFfT.js";import{T as a}from"./tooltip-with-fixed-orientation-DO6Uk8Ug.js";import"./index-DVXBtNgz.js";const x={title:"Popover Based/Tooltip with fixed orientation",tags:["!dev"],decorators:[s,d]},i={render:()=>{const u="vertical-tooltip",r=`--${u}-button`,t="horizontal-tooltip",n=`--${t}-button`;return o.jsxs(h,{children:[o.jsx(e,{popovertarget:u,"aria-describedby":u,style:{anchorName:r},children:"Показать вертикальный тултип"}),o.jsx(e,{popovertarget:t,"aria-describedby":t,style:{anchorName:n},children:"Показать горизонтальный тултип"}),o.jsx(a,{id:u,anchorElementName:r,orientation:"vertical",width:"300px",children:"Адаптируюсь под видимую область страницы по вертикальной оси. Попробуй поскролить страницу."}),o.jsx(a,{id:t,anchorElementName:n,orientation:"horizontal",width:"230px",children:"А я могу подстраиваться под вьюпорт по вертикали."})]})}};var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const verticalTooltipId = 'vertical-tooltip';
    const verticalTooltipAnchorName = \`--\${verticalTooltipId}-button\`;
    const horizontalTooltipId = 'horizontal-tooltip';
    const horizontalTooltipAnchorName = \`--\${horizontalTooltipId}-button\`;
    return <CenteredContentWithScroll>
                <Button popovertarget={verticalTooltipId} aria-describedby={verticalTooltipId} style={({
        anchorName: verticalTooltipAnchorName
      } as React.CSSProperties)}>
                    Показать вертикальный тултип
                </Button>
                <Button popovertarget={horizontalTooltipId} aria-describedby={horizontalTooltipId} style={({
        anchorName: horizontalTooltipAnchorName
      } as React.CSSProperties)}>
                    Показать горизонтальный тултип
                </Button>
                <TooltipWithFixedOrientation id={verticalTooltipId} anchorElementName={verticalTooltipAnchorName} orientation="vertical" width="300px">
                    Адаптируюсь под видимую область страницы по вертикальной оси. Попробуй поскролить страницу.
                </TooltipWithFixedOrientation>
                <TooltipWithFixedOrientation id={horizontalTooltipId} anchorElementName={horizontalTooltipAnchorName} orientation="horizontal" width="230px">
                    А я могу подстраиваться под вьюпорт по вертикали.
                </TooltipWithFixedOrientation>
            </CenteredContentWithScroll>;
  }
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const B=["TooltipStoryForDocs"];export{i as TooltipStoryForDocs,B as __namedExportsOrder,x as default};
