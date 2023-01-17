import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar/NavBar';
import Root from './pages/Root/Root';
const App1 = React.lazy(() => import('app1/App1'));
const App2 = React.lazy(() => import('app2/App2'));

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <div>
        <div>
          <h1>This is the main app</h1>
          <p>
            Below is NavBar (which is in main app), and tabs inside the nav bar are different pages
          </p>
        </div>
        <NavBar />
        <Routes>
          <Route
            path="app-1/*"
            element={
              <React.Suspense fallback={'Loading'}>
                <App1 />
              </React.Suspense>
            }
          />
          <Route
            path="app-2/*"
            element={
              <React.Suspense fallback={'Loading'}>
                <App2 />
              </React.Suspense>
            }
          />
          <Route path="*" element={<Root />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
