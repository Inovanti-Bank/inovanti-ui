
import { GoBackButton } from "@inovanti/react";
import type { Meta, StoryObj } from "@storybook/react";
export default {
  title: "Form/Buttons/GoBackButton",
  component: GoBackButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "click",
    },
  },
} as Meta<typeof GoBackButton>;



export const Primary: StoryObj<typeof GoBackButton> = {};