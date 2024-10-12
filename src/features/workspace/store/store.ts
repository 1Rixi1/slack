import { atom, useAtom } from "jotai";

const stateModal = atom(false);

export const useCreateWorkspaceModal = () => {
  return useAtom(stateModal);
};
