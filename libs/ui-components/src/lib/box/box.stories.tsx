import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box, { BoxProps } from './box';

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args: BoxProps) => (
  <Box {...args} />
);

export const SmallBox = Template.bind({});
SmallBox.args = {
  size: 100,
  color: '#000',
};
