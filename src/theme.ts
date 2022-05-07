import {
  extendTheme,
  type ThemeConfig,
  theme as base,
  withDefaultColorScheme,
} from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';
import type { ComponentStyleConfig } from '@chakra-ui/theme';
// const theme = {
//   styles: {
//     global: {
//       'html, body': {
//         color: 'gray.600',
//       },
//     },
//   },
// };

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const Link: ComponentStyleConfig = {
  baseStyle: {
    // _hover: {
    //   textDecoration: 'wavy underline',
    // },
    // textDecoration: 'wavy underline',
  },
};

const theme = extendTheme(
  {
    colors: {
      light: {
        primary: '#EFEFEF',
        secondary: '#DDDDE4',
      },
      dark: {
        primary: '#202023',
        secondary: '##2F2F33',
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          default: '#EFEFEF',
          _dark: '#202023',
        },
        secondary: {
          default: '#DDDDE4',
          _dark: '#2F2F33',
        },
        third: {
          default: '#45454B',
          _dark: '#E9E9F2',
        },
      },
    },
    components: { Link },
    styles: {
      global: (props: any) => ({
        body: {
          bgColor: mode('#EFEFEF', '#202023')(props),
        },
      }),
    },
    config,
    fonts: {
      body: 'Space Grotesk, sans-serif',
      heading: 'Space Grotesk, sans-serif',
    },
  }
  // withDefaultColorScheme({ colorScheme: 'primary' })
);

export default theme;
