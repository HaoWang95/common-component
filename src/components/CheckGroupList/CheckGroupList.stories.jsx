import React from "react";
import CheckGroupList from "./CheckGroupList";

export default {
  title: "Basic/CheckGroupList",
  component: CheckGroupList,
};

const Template = (args) => <CheckGroupList {...args} />;

export const Default = Template.bind({});
Default.args = {
  legend: "Tick the choices",
  items: [
    { id: 1, text: "Find the granularity of components" },
    { id: 2, text: "Decouple the complexity" },
    { id: 3, text: "From simple components to complex components" },
    { id: 4, text: "From complex components to pages" },
    { id: 5, text: "From pages to apps" },
  ],
};

export const SimpleCheckList = Template.bind({});
SimpleCheckList.args = {
  ...Default.args,
};

export const CheckListHelper = Template.bind({});
CheckListHelper.args = {
  ...SimpleCheckList.args,
  helperText: "Select from what you think makes sense",
};
