import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Divider from '@mui/material/Divider';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Button from 'shared/components/Button';
import { swapObjectKeyValue } from 'shared/utils/transformations';

const App1: React.FC = () => {
  const obj = { a: 'x', b: 'y', c: 'z' };
  console.log(
    'app1 swapObjectKeyValue demo',
    JSON.stringify(obj),
    JSON.stringify(swapObjectKeyValue(obj))
  );

  return (
    <>
      <Helmet>
        <title>App1 title</title>
      </Helmet>
      <div>
        <div>
          <h1>This is the very beginning of app1</h1>
          <p>And some button below (from shared):</p>
          <Button>Shared Button app1 root</Button>
        </div>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        <Routes>
          <Route path="page-1/*" element={<Page1 />} />
          <Route path="page-2/*" element={<Page2 />} />
          <Route path="*" element={<Page2 />} />
        </Routes>
      </div>
    </>
  );
};

export default App1;
