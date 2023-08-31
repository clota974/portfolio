import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import MenuDrawer from '../components/Header/MobileDrawer';
import Header from '../components/Header';
import DesktopHeader from '../components/Header/DesktopHeader';

const meta = {
  title: 'Header/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
  },
} satisfies Meta<typeof MenuDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6'
    }
  }
};
