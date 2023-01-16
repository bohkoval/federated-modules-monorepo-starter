import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Button from 'shared/components/Button';
import InputWithLabel from 'shared/components/InputWithLabel';
import { swapObjectKeyValue } from 'shared/utils/transformations';

const App: React.FC = () => {
  const obj = { a: 'x', b: 'y', c: 'z' };
  console.log(
    'app1 swapObjectKeyValue demo',
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
      </div>
    </>
  );
};

export default App;
