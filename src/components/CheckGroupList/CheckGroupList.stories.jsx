import React from 'react';
import CheckGroupList from './CheckGroupList';

export default {
    title: 'Basic/CheckGroupList',
    component: CheckGroupList
}

const Template = (args) => <CheckGroupList />

export const Default = Template.bind({});
Default.args = {
    legend: 'Tick the choices',
}
