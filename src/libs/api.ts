import { createAxios } from '@blocklet/js-sdk';

const api = createAxios({
  baseURL: window?.blocklet?.prefix || '/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
