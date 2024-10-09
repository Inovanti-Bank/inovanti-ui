import type { Meta, StoryObj } from "@storybook/react";

import {
  Box,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@inovanti/react";

const InputOTPDemo = () => {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};
export default {
  title: "Form/Inputs/InputOTP",
  component: InputOTPDemo,
  tags: ["autodocs"],
  args: {},
  decorators: [
    (Story) => {
      return <Box className="flex justify-center">{Story()}</Box>;
    },
  ],
  parameters: {
    docs: {
      source: {
        code: `
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
</InputOTP>`,
        languages: "tsx",
      },
    },
  },
} as Meta<typeof InputOTPDemo>;

export const Primary: StoryObj<typeof InputOTPDemo> = {};
