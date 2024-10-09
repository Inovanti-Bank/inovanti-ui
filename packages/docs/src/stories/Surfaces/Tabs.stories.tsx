import type { Meta, StoryObj } from "@storybook/react";

import { Box, Tabs, TabsContent, TabsList, TabsTrigger } from "@inovanti/react";

const TabsDemo = () => (
  <Tabs
    defaultValue="Tab1"
    className="w-40 h-40 rounded-md py-2 flex flex-col justify-items-center"
  >
    <TabsList className="mx-auto">
      <TabsTrigger value="Tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="Tab2">Tab 2</TabsTrigger>
    </TabsList>
    <TabsContent value="Tab1" className="mx-auto">
      Content of Tab 1
    </TabsContent>
    <TabsContent value="Tab2" className="mx-auto">
      Content of Tab 2
    </TabsContent>
  </Tabs>
);
export default {
  title: "Surfaces/Tabs",
  component: TabsDemo,
  tags: ["autodocs"],
  args: {},
  decorators: [
    (Story) => {
      return <Box className="w-fit mx-auto">{Story()}</Box>;
    },
  ],
  parameters: {
    docs: {
      source: {
        code: `
<Tabs defaultValue="Tab1" className="w-40 h-40 rounded-md py-2 flex flex-col justify-items-center">
    <TabsList className="mx-auto">
        <TabsTrigger value="Tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="Tab2">Tab 2</TabsTrigger>
    </TabsList>
    <TabsContent value="Tab1" className="mx-auto">
        Content of Tab 1
    </TabsContent>
    <TabsContent value="Tab2" className="mx-auto">
        Content of Tab 2
    </TabsContent>
</Tabs>`,
        languages: "tsx",
      },
    },
  },
} as Meta<typeof TabsDemo>;

export const Default: StoryObj<typeof Tabs> = {};
