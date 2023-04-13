import { FC } from "react";

//creating store interface using zustand library
import { create } from "zustand";

interface useRegisterModel {
  isOpen: boolean;
  //have to make sure its not undefined so no conditional operators
  onOpen: () => void;
  onClose: () => void;
}

//initializing values for store
const useRegisterModel = create<useRegisterModel>((set) => ({
  //interaction with the model, if the submission is done then settong the model to false
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModel;
