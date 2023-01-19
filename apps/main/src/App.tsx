import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useCountStore } from 'shared/stores/count';
import useFilms from 'shared/queries/useFilms';
import NavBar from './components/NavBar/NavBar';
import Root from './pages/Root/Root';

/**
 * if safe import is needed (in case of remote bundle loading fails)
 * consider using FederatedBoundary https://github.com/module-federation/universe/tree/main/packages/utilities#react-utilities
 */
const App1 = React.lazy(() => import('app1/App1'));
const App2 = React.lazy(() => import('app2/App2'));

const App: React.FC = () => {
  const { count } = useCountStore();
  const { data, status } = useFilms();
  return (
    <>
      <div>
        <div>
          <h1>This is the main app</h1>
          <h4>Counter : {count}</h4>
          <p>First Star Wars movie:</p>
          {status === 'loading' ? <p>Loading...</p> : ''}
          {status === 'error' ? <p>Error</p> : ''}
          {status === 'success' && data
            ? data.results.slice(0, 1).map((film) => {
                const filmUrlParts = film.url.split('/').filter(Boolean);
                const filmId = filmUrlParts[filmUrlParts.length - 1];
                return (
                  <article key={filmId}>
                    <Typography variant="h6">
                      {film.episode_id}. {film.title}{' '}
                      <em>({new Date(Date.parse(film.release_date)).getFullYear()})</em>
                    </Typography>
                  </article>
                );
              })
            : ''}
          {status === 'success' && data ? (
            <p>To ensure that react query works OK: {data.randomNumber}</p>
          ) : (
            ''
          )}
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
