import * as React from 'react';
import { Global, css } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { fontFamily } from './utils';

const GlobalStyles: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Global
        styles={css`
          html,
          body {
            font-family: ${fontFamily};
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;
