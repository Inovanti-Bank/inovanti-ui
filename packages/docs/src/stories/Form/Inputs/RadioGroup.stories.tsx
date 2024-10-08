import type { Meta, StoryObj } from "@storybook/react";

import { Box, RadioGroup, RadioGroupItem } from "@inovanti/react";

const RadioGroupDemo = () => {
  return (
    <RadioGroup>
      <div className="inline-flex gap-2 ">
        <RadioGroupItem value="1" className="w-5 h-5"></RadioGroupItem>
        <label>Item 1</label>
      </div>
      <div className="inline-flex gap-2 ">
        <RadioGroupItem value="2" className="w-5 h-5">
          Blue
        </RadioGroupItem>
        <label>Item 2</label>
      </div>
      <div className="inline-flex gap-2 ">
        <RadioGroupItem value="3" className="w-5 h-5">
          Green
        </RadioGroupItem>
        <label>Item 3</label>
      </div>
    </RadioGroup>
  );
};
export default {
  title: "Form/Inputs/Radio Group",
  component: RadioGroupDemo,
  tags: ["autodocs"],
  args: {},
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>;
    },
  ],
  parameters: {
    docs: {
      source: {
        code: `<RadioGroup>
      <div className="inline-flex gap-2 ">
        <RadioGroupItem value="1" className="w-5 h-5"></RadioGroupItem>
        <label>Item 1</label>
      </div>
      <div className="inline-flex gap-2 ">
        <RadioGroupItem value="2" className="w-5 h-5">
          Blue
        </RadioGroupItem>
        <label>Item 2</label>
      </div>
      <div className="inline-flex gap-2 ">
        <RadioGroupItem value="3" className="w-5 h-5">
          Green
        </RadioGroupItem>
        <label>Item 3</label>
      </div>
    </RadioGroup>`,
      },
    },
  },
} as Meta<typeof RadioGroupDemo>;

export const Default: StoryObj<typeof RadioGroupDemo> = {};
