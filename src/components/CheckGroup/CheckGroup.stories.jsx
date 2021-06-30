import React from "react";
import CheckGroup from "./CheckGroup";

export default {
  title: "Basic/CheckGroup",
  component: CheckGroup,
};

const Template = (args) => <CheckGroup {...args} />;

export const DefaultCheckGroup = Template.bind({});
DefaultCheckGroup.args = {
  label: "check me",
};

export const SecondaryCheckGroup = Template.bind({});
SecondaryCheckGroup.args = {
  ...DefaultCheckGroup.args,
  color: "secondary",
};

export const BlankColorCheckGroup = Template.bind({});
BlankColorCheckGroup.args = {
  ...DefaultCheckGroup.args,
  color: "default",
};
