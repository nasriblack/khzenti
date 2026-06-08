import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import type { UpdateUserPayload } from '../types/user.types';
import { UserService } from "../../services/user.service";

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
export const useLogin = () => {
  //   const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ payload }: { payload: any }) => UserService.Login(payload),

    onSuccess: () => {
      // update both the list cache and the single-item cache
      //   queryClient.invalidateQueries({ queryKey: userKeys.all });
      //   queryClient.setQueryData(userKeys.byId(updatedUser.id), updatedUser);
    },

    onError: (error) => {
      console.error("Login user failed:", error);
    },
  });
};
export const useRegistre = () => {
  //   const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ payload }: { payload: any }) =>
      UserService.Registre(payload),

    onSuccess: () => {
      // update both the list cache and the single-item cache
      //   queryClient.invalidateQueries({ queryKey: userKeys.all });
      //   queryClient.setQueryData(userKeys.byId(updatedUser.id), updatedUser);
    },

    onError: (error) => {
      console.error("Registre user failed:", error);
    },
  });
};
