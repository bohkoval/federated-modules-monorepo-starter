// wrapper around built-in fetch to provide some additional functionality (for example, mimic axios interceptors for unauthorized)
export const api = async (path: string, init?: RequestInit): Promise<Response> => {
  const url = new URL(`${process.env.API_BASE_URL}${path}`);
  const response = await fetch(url, init);
  if (response.status === 401) {
    console.log('redirect to login');
  }
  return response;
};
