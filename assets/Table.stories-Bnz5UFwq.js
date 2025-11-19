import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{B as o,T as n,e as c,f as h,g as m,C as r,c as x,P as b}from"./index-BS6P8fBu.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-aS4jWOJ1.js";import"./isNativeReflectConstruct-DFmkqFG2.js";const p=()=>e.jsx("div",{className:"bg-white dark:bg-gray-800 w-full max-w-[85vw] p-10",children:e.jsxs(n,{children:[e.jsx(c,{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("span",{children:"Nome"})}),e.jsx("th",{children:e.jsx("span",{children:"Descrição"})})]})}),e.jsxs(h,{children:[e.jsxs("tr",{children:[e.jsx("td",{"data-label":"Nome",children:"Natan"}),e.jsx("td",{"data-label":"Descrição",children:"Desenvolvedor Full Stack"})]}),e.jsxs("tr",{children:[e.jsx("td",{"data-label":"Nome",children:"Junior"}),e.jsx("td",{"data-label":"Descrição",children:"Desenvolvedor Back End"})]}),e.jsxs("tr",{children:[e.jsx("td",{"data-label":"Nome",children:"Roberto"}),e.jsx("td",{"data-label":"Descrição",children:"Desenvolvedor Front End"})]})]}),e.jsx(m,{children:e.jsxs("tr",{children:[e.jsxs("td",{colSpan:1,children:[e.jsx(r,{$isDisabled:!0,$isActive:!1,children:"Anterior"}),e.jsx(r,{$isDisabled:!0,$isActive:!0,children:"1"}),e.jsx(r,{$isDisabled:!0,$isActive:!1,children:"Próximo"})]}),e.jsxs("td",{colSpan:1,style:{textAlign:"end"},children:[e.jsx("span",{style:{marginRight:"10px"},children:"Registros por página:"}),e.jsx(x,{items:[5,10,20,30,50,70,100].map((t,i)=>e.jsx("button",{className:"w-full h-full text-left",children:t},i)),children:e.jsx(b,{children:"1"})})]})]})})]})}),N={title:"Data Display/Table",component:p,tags:["autodocs"],args:[],decorators:[t=>e.jsx(o,{className:"flex justify-center",children:t()})],parameters:{docs:{source:{code:`<div className="bg-white dark:bg-gray-800 w-full max-w-[85vw] p-10">
      <Table>
        <TableHead>
          <tr>
            <th>
              <span>Nome</span>
            </th>
            <th>
              <span>Descrição</span>
            </th>
          </tr>
        </TableHead>
        <TableBody>
          <tr>
            <td data-label="Nome">Natan</td>
            <td data-label="Descrição">Desenvolvedor Full Stack</td>
          </tr>
          <tr>
            <td data-label="Nome">Junior</td>
            <td data-label="Descrição">Desenvolvedor Back End</td>
          </tr>
          <tr>
            <td data-label="Nome">Roberto</td>
            <td data-label="Descrição">Desenvolvedor Front End</td>
          </tr>
        </TableBody>
        <TableFooter>
          <tr>
            <td colSpan={1}>
              <ChangePage $isDisabled={true} $isActive={false}>
                Anterior
              </ChangePage>
              <ChangePage $isDisabled={true} $isActive={true}>
                1
              </ChangePage>
              <ChangePage $isDisabled={true} $isActive={false}>
                Próximo
              </ChangePage>
            </td>
            <td colSpan={1} style={{ textAlign: "end" }}>
              <span style={{ marginRight: "10px" }}>Registros por página:</span>
              <Dropdown
                items={[5, 10, 20, 30, 50, 70, 100].map((limit, i) => {
                  return (
                    <button key={i} className="w-full h-full text-left">
                      {limit}
                    </button>
                  );
                })}
              >
                <PageActualNumber>1</PageActualNumber>
              </Dropdown>
            </td>
          </tr>
        </TableFooter>
      </Table>
    </div>
                    
                `}}}},a={};var s,l,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const T=["Primary"];export{a as Primary,T as __namedExportsOrder,N as default};
