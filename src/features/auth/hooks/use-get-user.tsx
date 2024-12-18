import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useGetUser = () => {
  const data = useQuery(api.user.getUser);

  const isLoading = data === undefined;

  return { data, isLoading };
};
