import { DataTable } from '@inovanti/react';
import type { StoryObj } from '@storybook/react';
export default  {
  title: 'Data Display/DataTable',
  component: DataTable,
  parameters: {
    docs: {
      description: {
        component: 'DataTable is a flexible and reusable table component that supports sorting, pagination, and custom formatting of data. It allows displaying structured data efficiently with configurable columns and actions.',
      },
    },
  },
  args: {
    fieldColumns: [
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Name' },
    ],
    data: {
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: 2,
      links: [],
    },
    isLoading: false,
    limit: 10,
    setPage: () => {},
    setLimit: () => {},
  },
  argTypes: {
    fieldColumns: {
      control: 'object',
    },
    data: {
      control: 'object',
    },
    isLoading: {
      control: 'boolean',
    },
    limit: {
      control: 'number',
    },
  },
};

export const Primary: StoryObj = {};
