import Player from './Player.js';

export default {
  title: 'components/Player',
  component: Player,
};

const Template = args => <Player {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Jane Doe',
  score: 10,
};
