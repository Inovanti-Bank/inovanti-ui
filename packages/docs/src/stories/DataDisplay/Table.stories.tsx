import type { Meta, StoryObj } from "@storybook/react";

import {
  Box,
  ChangePage,
  Dropdown,
  PageActualNumber,
  Table,
  TableBody,
  TableFooter,
  TableHead,
} from "@inovanti/react";

const TableDemo = () => {
  return (
    <div className="bg-white dark:bg-gray-800 w-full max-w-[85vw] p-10">
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
  );
};

export default {
  title: "Data Display/Table",
  component: TableDemo,
  tags: ["autodocs"],
  args: [],
  decorators: [
    (Story) => {
      return <Box className="flex justify-center">{Story()}</Box>;
    },
  ],
  parameters: {
    docs: {
      source: {
        code: `<div className="bg-white dark:bg-gray-800 w-full max-w-[85vw] p-10">
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
                    
                `,
      },
    },
  },
} as Meta<typeof TableDemo>;

export const Primary: StoryObj<typeof TableDemo> = {};
