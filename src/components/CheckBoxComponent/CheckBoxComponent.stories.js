import React from 'react';
import CheckBoxComponent from './CheckBoxComponent';

export default {
    title:'Basic/CheckBox',
    component: 'CheckBox'
}

const Template = (args) => <CheckBoxComponent {...args} />
export const Default = Template.bind({});
Default.args = {
    color:'primary',
    defaultChecked: false,
    checked: false
}

export const Secondary = Template.bind({});
Secondary.args = {
    color:'secondary',
    defaultChecked: false,
    checked: false
}


