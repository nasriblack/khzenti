export type Payload = {
  email: string;
  password: string;
};

export type User = {
  success: boolean;
  message: string;
  data: {
    user: string;
    id: string;
    email: string;
    name: string;
    createdAt: string;
  };
  accessToken: string;
};
