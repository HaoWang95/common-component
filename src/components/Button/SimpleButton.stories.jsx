import SimpleButton from "./SimpleButton";
import React from 'react';

export default {
    title: 'Basic/SimpleButton',
    component: SimpleButton
}

const Template = (args) => <SimpleButton {...args} />

export const Default = Template.bind({});
Default.args = {}

export const DefaultContainedButton = Template.bind({});
DefaultContainedButton.args = {
    variant: 'contained'
}