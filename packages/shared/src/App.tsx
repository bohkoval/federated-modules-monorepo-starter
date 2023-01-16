import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { Button, InputWithLabel, MemeImage } from './components';
import { swapObjectKeyValue } from './utils';

const App: React.FC = () => {
  const obj = { a: 'x', b: 'y', c: 'z' };
  console.log(
    'swapObjectKeyValue demo',
    JSON.stringify(obj),
    JSON.stringify(swapObjectKeyValue(obj))
  );

  return (
    <>
      <CssBaseline />
      <div>
        <div>
          <h3>Button</h3>
          <Button>Button text</Button>
        </div>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        <div>
          <h3>Input with label</h3>
          <InputWithLabel label="Input label" />
        </div>
        <div>
          <h3>Component with image</h3>
          <MemeImage />
        </div>
      </div>
    </>
  );
};

export default App;
