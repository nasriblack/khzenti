import { API_AUTH } from "../api/endpoints";
import { http } from "../api/http";
import type { PayloadUserLogin, RegisterResponse, User } from "./types";

export const UserService = {
  //TODO: replace the any by the type of USER
  Login: async (payload: PayloadUserLogin): Promise<User> => {
    const { data } = await http.post<User>(API_AUTH.LOGIN, payload);
    return data;
  },
  Registre: async (payload: PayloadUserLogin): Promise<RegisterResponse> => {
    const { data } = await http.post<RegisterResponse>(
      API_AUTH.SIGNUP,
      payload,
    );
    return data;
  },
  WaitListResigter: async (payload: { email: string }): Promise<any> => {
    const { data } = await http.post<any>(API_AUTH.ADD_WHITELIST, payload);
    return data;
  },

  //   getById: async (id: string): Promise<User> => {
  //     const { data } = await http.get<User>(USER_ENDPOINTS.BY_ID(id));
  //     return data;
  //   },

  //   update: async (id: string, payload: UpdateUserPayload): Promise<User> => {
  //     const { data } = await http.put<User>(USER_ENDPOINTS.UPDATE(id), payload);
  //     return data;
  //   },
};
