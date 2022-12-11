import { business } from '../types';

export class User {
  username: string = '';
  token: string = '';
  role: business.UserRole | null = null;
}
