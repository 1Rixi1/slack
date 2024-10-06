import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useCallback, useMemo, useState } from "react";
import { Id } from "../../../../convex/_generated/dataModel";

type ValueType = {
  name: string;
};
type ResponseType =  Id<"workspaces"> ;

type OptionsType = {
  onSuccess?: (response: ResponseType) => void;
  onError?: (error: Error) => void;
  onSettled?: () => void;
  throwError?: boolean;
};

export const useCreateWorkspace = () => {
  const [status, setStatus] = useState<
    "isPending" | "isSuccess" | "isError" | "isSettled" | null
  >(null);

  const isPending = useMemo(() => status === "isPending", [status]);
  const isSuccess = useMemo(() => status === "isSuccess", [status]);
  const IsError = useMemo(() => status === "isError", [status]);
  const IsSettled = useMemo(() => status === "isSettled", [status]);

  const workspaceData = useMutation(api.workspaces.createWorkspace);

  const workspaceMutation = useCallback(
    async (value: ValueType, options: OptionsType) => {
      try {
        setStatus("isPending");
        const response = await workspaceData(value);

        options?.onSuccess?.(response);

        return response;
      } catch (error) {
        options?.onError?.(error as Error);
        if (options?.throwError) {
          throw error;
        }
      } finally {
        setStatus("isSettled");
      }
    },
    [workspaceData],
  );

  return { workspaceMutation, isPending };
};
