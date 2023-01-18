import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import Global from './styles/Global';
import queryClient from '../src/queries/client';
import SharedAppDemo from './App';

const container = document.getElementById('app');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <>
    <Global />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SharedAppDemo />
      </BrowserRouter>
    </QueryClientProvider>
  </>
);
