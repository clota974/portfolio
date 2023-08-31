import type { Meta, StoryObj } from '@storybook/react';
import MenuDrawer from '../components/Header/MobileDrawer';

const meta = {
  title: 'Header/MenuDrawer',
  component: MenuDrawer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    visualViewport: {
        width: 400,
        height: 800
    }
  },
} satisfies Meta<typeof MenuDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    isOpen: true,
    lightTheme: true
  },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        lightTheme: false
    }
};
