import { atom, useAtom } from "jotai";

const stateModal = atom(false);

export const useTriggerModal = () => {
  return useAtom(stateModal);
};
