import { API_AUTH } from "../api/endpoints";
import { http } from "../api/http";

export const UserService = {
  //TODO: replace the any by the type of USER
  Login: async (payload: any): Promise<any[]> => {
    const { data } = await http.post<any[]>(API_AUTH.LOGIN, payload);
    return data;
  },
  Registre: async (payload: any): Promise<any[]> => {
    const { data } = await http.post<any[]>(API_AUTH.SIGNUP, payload);
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
