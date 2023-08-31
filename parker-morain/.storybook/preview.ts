import { extendTheme } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: {
      theme: extendTheme({})
    },
    viewport: {
      viewports: {...INITIAL_VIEWPORTS, 
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '900px',
        }
      }},
    }
  },
};

export default preview;
