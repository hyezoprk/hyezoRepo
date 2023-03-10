import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@hyezo/ui";

export default {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      description: "Select color.",
      table: {
        defaultValue: {
          summary: "twitter",
        },
      },
    },
    size: {
      description: "Adjust size.",
      table: {
        defaultValue: {
          summary: "xs",
        },
      },
    },
    fullWidth: {
      type: "boolean",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    outline: {
      type: "boolean",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = args => <Button {...args}>Button</Button>;

export const Blue = Template.bind({});
Blue.args = {
  color: "blue",
};

export const Red = Template.bind({});
Red.args = {
  color: "red",
  outline: true,
  disabled: true,
};

export const Orange = Template.bind({});
Orange.args = {
  color: "orange",
};

export const Emerald = Template.bind({});
Emerald.args = {
  color: "emerald",
};

export const Twitter = Template.bind({});
Twitter.args = {
  color: "twitter",
};

export const Black = Template.bind({});
Black.args = {
  color: "black",
};
