import { api } from "../../../../convex/_generated/api";
import { useQuery } from "convex/react";

export const useCurrentUser = () => {
  const dataUser = useQuery(api.users.currentUser);

  const isLoading = dataUser === undefined;

  return { dataUser, isLoading };
};
