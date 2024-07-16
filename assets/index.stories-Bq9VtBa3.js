import{j as e,c as h,C as x,H as C,T as g}from"./index-Cc0r8_xM.js";import{B as T}from"./index-CFho4Kze.js";import"./index-DVXBtNgz.js";const y=u=>Object.entries(u).reduce((t,[r,o])=>(o&&(t[r]=o),t),{}),F="_tooltip_1r5r7_1",B="_tooltipContent_1r5r7_30",i={tooltip:F,tooltipContent:B},l=({id:u,anchorElementName:t,className:r,width:o,height:d,maxWidth:c,maxHeight:m,children:E})=>e.jsx("div",{popover:"auto",id:u,role:"tooltip",className:h(i.tooltip,r),style:{...y({width:o,height:d,maxWidth:c,maxHeight:m}),"--anchor-el-name":t,"--tooltip-el-name":`--${u}-tooltip`},children:e.jsx("div",{className:i.tooltipContent,children:E})});l.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},maxHeight:{required:!1,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},anchorElementName:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Popover Based/Tooltip"},n={render:()=>{const u="tooltip-example",t="--example-button";return e.jsxs(x,{style:{minWidth:"200vw",minHeight:"200vh"},children:[e.jsx(C,{children:"Тултип"}),e.jsx(g,{children:"Очень часто в интерфейсах нужно показать тултип - подсказку, которая дает пользователю больше информации о том, что происходит на странице"}),e.jsx(T,{popovertarget:u,"aria-describedby":u,style:{anchorName:t,marginLeft:"300px"},children:"Показать тултип"}),e.jsx(l,{id:u,anchorElementName:t,children:"Могу адаптироваться под видимую область вокруг меня. Попробуй поскролить страницу."})]})}};var s,a,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const tooltipId = 'tooltip-example';
    const buttonAnchorName = '--example-button';
    return <Container style={{
      minWidth: '200vw',
      minHeight: '200vh'
    }}>
                <Heading>Тултип</Heading>
                <Text>
                    Очень часто в интерфейсах нужно показать тултип - подсказку, которая дает пользователю больше
                    информации о том, что происходит на странице
                </Text>
                <Button popovertarget={tooltipId} aria-describedby={tooltipId} style={({
        anchorName: buttonAnchorName,
        marginLeft: '300px'
      } as React.CSSProperties)}>
                    Показать тултип
                </Button>
                <Tooltip id={tooltipId} anchorElementName={buttonAnchorName}>
                    Могу адаптироваться под видимую область вокруг меня. Попробуй поскролить страницу.
                </Tooltip>
            </Container>;
  }
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const j=["TooltipStory"];export{n as TooltipStory,j as __namedExportsOrder,A as default};
