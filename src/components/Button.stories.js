import Button from './Button.js';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    onClick: 'onClick',
  },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
  isDark: false,
  fullWidth: false,
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Click me',
  isDark: true,
  fullWidth: false,
};
export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Click me',
  fullWidth: true,
};
