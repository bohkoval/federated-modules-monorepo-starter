import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from 'shared/components/Button';
import InputWithLabel from 'shared/components/InputWithLabel';
import { useCountStore } from 'shared/stores/count';
import useFilms from 'shared/queries/useFilms';

const Page1: React.FC = () => {
  const { increment, decrement } = useCountStore();
  const { data, status } = useFilms();
  return (
    <div>
      <h2>This is page 1 of app1</h2>
      <p>This page has a text input and 2 buttons</p>
      <Button onClick={increment}>Button on app1 page1 - increment</Button>
      <Button onClick={decrement}>Button on app1 page1 - decrement</Button>
      <p>Also Films:</p>
      {status === 'loading' ? <p>Loading...</p> : ''}
      {status === 'error' ? <p>Error</p> : ''}
      {status === 'success' && data
        ? data.results.map((film) => {
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
      <InputWithLabel label="App1 page1 label" />
      <p>
        Go to <Link to="../page-2">page-2</Link>
      </p>
    </div>
  );
};

export default Page1;
