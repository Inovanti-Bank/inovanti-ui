import{j as s}from"./jsx-runtime-a51fe075.js";import{I as E,w as L,x as j,B as S,y as W}from"./index-294ded12.js";import{g as f}from"./GetTokens-356b39bc.js";import{R as e,r as w}from"./index-6bd1afc7.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./polished.esm-37b74356.js";import"./index-90c8ec23.js";var t=new Map;t.set("bold",function(r){return e.createElement(e.Fragment,null,e.createElement("circle",{cx:"116",cy:"116",r:"84",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e.createElement("line",{x1:"175.4",y1:"175.4",x2:"224",y2:"224",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});t.set("duotone",function(r){return e.createElement(e.Fragment,null,e.createElement("circle",{cx:"116",cy:"116",r:"84",opacity:"0.2"}),e.createElement("circle",{cx:"116",cy:"116",r:"84",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("line",{x1:"175.4",y1:"175.4",x2:"224",y2:"224",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});t.set("fill",function(){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M176,116a60,60,0,1,1-60-60A60,60,0,0,1,176,116Zm53.6,113.7A8,8,0,0,1,224,232a8.3,8.3,0,0,1-5.7-2.3l-43.2-43.3a92.2,92.2,0,1,1,11.3-11.3l43.2,43.2A8,8,0,0,1,229.6,229.7ZM116,192a76,76,0,1,0-76-76A76.1,76.1,0,0,0,116,192Z"}))});t.set("light",function(r){return e.createElement(e.Fragment,null,e.createElement("circle",{cx:"116",cy:"116",r:"84",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e.createElement("line",{x1:"175.4",y1:"175.4",x2:"224",y2:"224",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});t.set("thin",function(r){return e.createElement(e.Fragment,null,e.createElement("circle",{cx:"116",cy:"116",r:"84",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e.createElement("line",{x1:"175.4",y1:"175.4",x2:"224",y2:"224",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});t.set("regular",function(r){return e.createElement(e.Fragment,null,e.createElement("circle",{cx:"116",cy:"116",r:"84",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("line",{x1:"175.4",y1:"175.4",x2:"224",y2:"224",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var B=function(a,x){return L(a,x,t)},h=w.forwardRef(function(r,a){return e.createElement(E,Object.assign({ref:a},r,{renderPath:B}))});h.displayName="MagnifyingGlass";const T=h,R={title:"Form/Inputs/Simple Text Input",component:j,tags:["autodocs"],args:{inputSize:"md"},argTypes:{inputSize:{control:"inline-radio",options:["sm","md"]}}},n={args:{placeholder:"Type of name"}},o={argTypes:{width:{control:"inline-radio",options:f()}}},i={argTypes:{width:{control:"inline-radio",options:f()}},args:{width:96},decorators:[r=>s.jsxs(S,{as:"label",style:{display:"flex",flexDirection:"row",gap:"0.5rem",alignItems:"center"},children:[r(),s.jsx(W,{width:10,color:"primary450",children:s.jsx(T,{})})]})]};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type of name'
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    }
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,y,k;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    }
  },
  args: {
    width: 96
  },
  decorators: [Story => {
    return <Box as="label" style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '0.5rem',
      alignItems: 'center'
    }}>
          {Story()}
          <Button width={10} color='primary450'><MagnifyingGlass /></Button>
        </Box>;
  }]
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const v=["Primary","CustomWidth","SearchBar"];export{o as CustomWidth,n as Primary,i as SearchBar,v as __namedExportsOrder,R as default};
//# sourceMappingURL=SimpleTextInput.stories-357d62ed.js.map
