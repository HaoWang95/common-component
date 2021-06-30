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
