// wrapper around built-in fetch to provide some additional functionality (for example, mimic axios interceptors for unauthorized)
export const api = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  const response = await fetch(input, init);
  if (response.status === 401) {
    console.log('redirect to login');
  }
  return response;
};
