import { useMutation } from "@tanstack/react-query";
// import type { UpdateUserPayload } from '../types/user.types';
import { UserService } from "../../services/user.service";
import type { PayloadUserLogin, RegisterResponse } from "../../services/types";

// ── Query keys: centralised, typed ───────────────────────────
export const userKeys = {
  all: ["users"] as const,
  byId: (id: string) => ["users", id] as const,
};

// ── Queries ───────────────────────────────────────────────────
// export const useUsers = () =>
//   useQuery({
//     queryKey: userKeys.all,
//     queryFn:  UserService.getAll,
//     staleTime: 1000 * 60 * 5,   // 5 minutes
//   });

// export const useUser = (id: string) =>
//   useQuery({
//     queryKey: userKeys.byId(id),
//     queryFn:  () => UserService.getById(id),
//     enabled:  Boolean(id),       // only runs when id exists
//   });

// ── Mutations ─────────────────────────────────────────────────
export const useLogin = (onLogin: () => void) => {
  return useMutation({
    mutationFn: ({ payload }: { payload: PayloadUserLogin }) =>
      UserService.Login(payload),

    onSuccess: (response) => {
      const token = response.data.accessToken;
      localStorage.setItem("accessToken", token);
      onLogin();
    },

    onError: (error) => {
      console.error("Login user failed:", error);
    },
  });
};
export const useRegistre = (onLogin: () => void) => {
  //   const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ payload }: { payload: PayloadUserLogin }) =>
      UserService.Registre(payload),

    onSuccess: (response: RegisterResponse) => {
      const token = response.data.accessToken;
      localStorage.setItem("accessToken", token);
      onLogin();
      // update both the list cache and the single-item cache
      //   queryClient.invalidateQueries({ queryKey: userKeys.all });
      //   queryClient.setQueryData(userKeys.byId(updatedUser.id), updatedUser);
    },

    onError: (error) => {
      console.error("Registre user failed:", error);
    },
  });
};

export const useAddToWaitList = () => {
  //   const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ payload }: { payload: { email: string } }) =>
      UserService.WaitListResigter(payload),

    onSuccess: () => {},

    onError: (error) => {
      console.error("Registre user failed:", error);
    },
  });
};
