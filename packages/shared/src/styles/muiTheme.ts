import { createTheme } from '@mui/material/styles';
import { fontFamily } from './utils';

const muiTheme = createTheme({
  typography: {
    fontFamily,
  },
});

export default muiTheme;
