import { useQuery } from '@tanstack/react-query';
import { api } from '../utils';

interface FilmsApiResponse {
  results: {
    url: string;
    episode_id: number;
    title: string;
    release_date: string;
  }[];
  randomNumber: number;
}

const useFilms = (): {
  data: FilmsApiResponse | undefined;
  status: 'error' | 'success' | 'loading';
  error: unknown;
} => {
  return useQuery({
    queryKey: ['films'],
    queryFn: () =>
      api('/api/films/')
        .then((res) => res.json())
        .then((json) => ({ ...json, randomNumber: Math.random() })),
  });
};

export default useFilms;
