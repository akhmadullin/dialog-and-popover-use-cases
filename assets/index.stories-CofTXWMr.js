import{j as u}from"./index-CMu3Kjdk.js";import{C as s}from"./index-CCz_crBJ.js";import{B as i}from"./index-DX7BcFfT.js";import{w as p,a as c}from"./css-anchor-positioning-support-warning-YNFWsKM8.js";import{T as l}from"./tooltip-Okw55261.js";import"./index-DVXBtNgz.js";const b={title:"Popover Based/Tooltip",tags:["!dev"],decorators:[p,c]},o={render:()=>{const t="tooltip-example",e="--example-button";return u.jsxs(s,{children:[u.jsx(i,{popovertarget:t,"aria-describedby":t,style:{anchorName:e},children:"Показать тултип"}),u.jsx(l,{id:t,anchorElementName:e,width:"400px",children:"Адаптируюсь под видимую область вокруг меня. Попробуй поскролить страницу."})]})}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const tooltipId = 'tooltip-example';
    const buttonAnchorName = '--example-button';
    return <CenteredContentWithScroll>
                <Button popovertarget={tooltipId} aria-describedby={tooltipId} style={({
        anchorName: buttonAnchorName
      } as React.CSSProperties)}>
                    Показать тултип
                </Button>
                <Tooltip id={tooltipId} anchorElementName={buttonAnchorName} width="400px">
                    Адаптируюсь под видимую область вокруг меня. Попробуй поскролить страницу.
                </Tooltip>
            </CenteredContentWithScroll>;
  }
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const F=["TooltipStoryForDocs"];export{o as TooltipStoryForDocs,F as __namedExportsOrder,b as default};
