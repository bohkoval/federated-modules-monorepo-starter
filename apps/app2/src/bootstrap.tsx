import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App2 from './App2';

const container = document.getElementById('app');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <App2 />
  </BrowserRouter>
);
