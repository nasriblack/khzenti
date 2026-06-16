export type PayloadUserLogin = {
  email: string;
  password: string;
};

export type User = {
  success: boolean;
  message: string;
  data: {
    user: {
      id: string;
      email: string;
      name: string;
      createdAt: string;
    };
    accessToken: string;
  };
};

export type RegisterError = {
  success: boolean;
  error: string[];
};

export type RegisterResponse = User & RegisterError;
