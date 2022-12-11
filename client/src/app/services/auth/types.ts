export type RegisterParams = {
  username: string;
  email: string;
  password: string;
};

export type LoginParams = Omit<RegisterParams, 'email'>;
