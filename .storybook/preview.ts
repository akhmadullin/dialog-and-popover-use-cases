import type { Preview } from "@storybook/react";
import { viewports } from './viewports';
import './global-styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports,
      defaultViewport: 'responsive'
    },
    options: {
      storySort: {
        includeNames: true,
        method: 'numerical',
        order: [
          'Intro',
          'Dialog Based',
          [
            'Dialog',
            'Confirm',
            'Prompt',
            'Bottom sheet',
          ],
          'Popover Based',
          [
            'Tooltip',
            'Tooltip with fixed orientation',
            'Toast',
            'Select',
            'Menu',
          ],
        ],
        
      }
    }
  },
};

export default preview;
