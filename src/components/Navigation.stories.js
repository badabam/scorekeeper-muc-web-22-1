import Navigation from './Navigation.js';

export default {
  title: 'components/Navigation',
  component: Navigation,
  argTypes: {},
};

const Template = args => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {};
