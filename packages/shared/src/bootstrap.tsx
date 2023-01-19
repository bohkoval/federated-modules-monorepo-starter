import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <div>
    This is a package of components/utils/services/etc., not the app. This package is intended to be
    used in other apps, not standalone
  </div>
);
