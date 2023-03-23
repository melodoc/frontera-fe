import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from './loader';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'components/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Normal = Template.bind({});
