import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Button from 'shared/components/Button';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <div>
        <div>
          <h1>This is the very beginning of app2</h1>
          <p>And some button below (from shared):</p>
          <Button>Shared Button app2 root</Button>
        </div>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        <Routes>
          <Route path="page-1" element={<Page1 />} />
          <Route path="page-2" element={<Page2 />} />
          <Route path="*" element={<Page2 />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
