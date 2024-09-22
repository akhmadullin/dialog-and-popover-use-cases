import{j as e}from"./index-CMu3Kjdk.js";import{w as p,a as m}from"./css-anchor-positioning-support-warning-YNFWsKM8.js";import{C as s}from"./index-BK7umQ6h.js";import{B as c}from"./index-DX7BcFfT.js";import{T as u}from"./tooltip-B4qLPJHx.js";import"./index-DVXBtNgz.js";const S={title:"Popover Based/Tooltip",decorators:[p,m]},o={args:{children:"Пример тултипа",width:"max-content",height:"auto",maxHeight:"auto",maxWidth:"auto"},argTypes:{children:{control:"text"},width:{control:"text"},height:{control:"text"},maxWidth:{control:"text"},maxHeight:{control:"text"}},render:l=>{const t="example-tooltip",n=`--${t}-button`;return e.jsxs(s,{children:[e.jsx(c,{popovertarget:t,"aria-describedby":t,style:{anchorName:n},children:"Показать тултип"}),e.jsx(u,{...l,id:t,anchorElementName:n})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: 'Пример тултипа',
    width: 'max-content',
    height: 'auto',
    maxHeight: 'auto',
    maxWidth: 'auto'
  },
  argTypes: {
    children: {
      control: 'text'
    },
    width: {
      control: 'text'
    },
    height: {
      control: 'text'
    },
    maxWidth: {
      control: 'text'
    },
    maxHeight: {
      control: 'text'
    }
  },
  render: args => {
    const exampleTooltipId = 'example-tooltip';
    const exampleTooltipAnchorName = \`--\${exampleTooltipId}-button\`;
    return <CenteredContentWithScroll>
                <Button popovertarget={exampleTooltipId} aria-describedby={exampleTooltipId} style={({
        anchorName: exampleTooltipAnchorName
      } as React.CSSProperties)}>
                    Показать тултип
                </Button>
                <Tooltip {...args} id={exampleTooltipId} anchorElementName={exampleTooltipAnchorName} />
            </CenteredContentWithScroll>;
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const W=["TooltipStory"];export{o as TooltipStory,W as __namedExportsOrder,S as default};
