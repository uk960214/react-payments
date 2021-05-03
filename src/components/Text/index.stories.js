import React from 'react';
import { Text } from '.';

export default {
  title: 'Component/Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const CenterAlign = Template.bind({});
CenterAlign.args = {
  children: '+',
  style: { fontSize: '1.875rem', textAlign: 'center' },
};

export const LeftAlign = Template.bind({});
LeftAlign.args = {
  children: 'SUN',
  style: { fontSize: '0.75rem', textAlign: 'start', fontWeight: '600', letterSpacing: '0.14em' },
};

export const RightAlign = Template.bind({});
RightAlign.args = {
  children: '04/21',
  style: { fontSize: '0.75rem', textAlign: 'end', fontWeight: '600', letterSpacing: '0.14em' },
};
