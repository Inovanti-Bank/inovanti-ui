import type { Meta, StoryObj } from "@storybook/react";

import { Box, ProgressBar } from "@inovanti/react";
export default {
  title: "Graphs/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  args: {
    percentage: 50,
  },
  decorators: [
    (Story) => {
      return <Box className="flex justify-center">{Story()}</Box>;
    },
  ],
} as Meta<typeof ProgressBar>;

export const Primary: StoryObj<typeof ProgressBar> = {};
