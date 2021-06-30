import React from "react";
import CheckBoxComponent from "./CheckBoxComponent";

export default {
  title: "Basic/CheckBox",
  component: CheckBoxComponent,
};

const Template = (args) => <CheckBoxComponent {...args} />;
export const DefaultBlue = Template.bind({});
DefaultBlue.args = {
  color: "primary",
  checked: true,
  disabled: false,
};

export const SecondaryRed = Template.bind({});
SecondaryRed.args = {
  color: "secondary",
  checked: true,
  disabled: false,
};
