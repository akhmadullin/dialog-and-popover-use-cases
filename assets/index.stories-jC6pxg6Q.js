import{j as e}from"./index-CMu3Kjdk.js";import{w as p,a as c}from"./css-anchor-positioning-support-warning-YNFWsKM8.js";import{C as s}from"./index-CCz_crBJ.js";import{B as m}from"./index-DX7BcFfT.js";import{T as u}from"./tooltip-with-fixed-orientation-DO6Uk8Ug.js";import"./index-DVXBtNgz.js";const W={title:"Popover Based/Tooltip with fixed orientation",decorators:[p,c]},o={args:{orientation:"vertical",children:"Пример тултипа",width:"max-content",height:"auto",maxHeight:"auto",maxWidth:"auto"},argTypes:{orientation:{options:["vertical","horizontal"],control:{type:"select"}},children:{control:"text"},width:{control:"text"},height:{control:"text"},maxWidth:{control:"text"},maxHeight:{control:"text"}},render:l=>{const t="example-tooltip",n=`--${t}-button`;return e.jsxs(s,{children:[e.jsx(m,{popovertarget:t,"aria-describedby":t,style:{anchorName:n},children:"Показать тултип"}),e.jsx(u,{...l,id:t,anchorElementName:n})]})}};var r,i,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    children: 'Пример тултипа',
    width: 'max-content',
    height: 'auto',
    maxHeight: 'auto',
    maxWidth: 'auto'
  },
  argTypes: {
    orientation: {
      options: ['vertical', 'horizontal'],
      control: {
        type: 'select'
      }
    },
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
                <TooltipWithFixedOrientation {...args} id={exampleTooltipId} anchorElementName={exampleTooltipAnchorName} />
            </CenteredContentWithScroll>;
  }
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const y=["TooltipStory"];export{o as TooltipStory,y as __namedExportsOrder,W as default};
