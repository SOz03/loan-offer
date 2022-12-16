export const API_URL = 'http://localhost:8080';

export const API_SERVICES = {
  auth: `${API_URL}/auth`,
  registration: `${API_URL}/auth/registration`,
  login: `${API_URL}/auth/login`,

  bank: `${API_URL}/banks`,
  credit: `${API_URL}/credits`,

};

export const AUTHORIZATION = "Authorization";
export const PREFIX_TOKEN = "Bearer ";

export const STORAGE_TOKEN_KEY = 'auth-token';
export const STORAGE_USER_KEY = 'auth-user';
