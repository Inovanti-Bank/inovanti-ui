import type { Meta, StoryObj } from "@storybook/react";

import {
  Box,
  PopoverContent,
  PopoverTrigger,
  Popover,
  Button,
} from "@inovanti/react";

const PopoverDemo = () => {
  return (
    <Popover>
      <PopoverTrigger className="btn">
        <Button>Click Me</Button>
      </PopoverTrigger>
      <PopoverContent>Hello!</PopoverContent>
    </Popover>
  );
};
export default {
  title: "Surfaces/Popover",
  component: PopoverDemo,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>;
    },
  ],
  parameters: {
    docs: {
      source: {
        code: `<Popover>
        <PopoverTrigger className='btn'><Button>Click Me</Button></PopoverTrigger>
            <PopoverContent>Hello!</PopoverContent>
        </Popover >`,
        languages: "tsx",
      },
    },
  },
} as Meta<typeof PopoverDemo>;

export const Default: StoryObj<typeof Popover> = {};
