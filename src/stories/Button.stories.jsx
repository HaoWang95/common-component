import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Click me',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Click me',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Click me',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Click me',
};
