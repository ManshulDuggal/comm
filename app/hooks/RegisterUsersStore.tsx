import { FC } from "react";

//creating store interface using zustand library
import { create } from "zustand";

interface RegisterUsersStore {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

//initializing values for store
const RegisterUsersStore = create<RegisterUsersStore>((set) => ({
  //interaction with the model, if the submission is done then settong the model to false
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

// const RegisterUsers: FC<RegisterUsersProps> = () => {
//   return <div>RegisterUsers</div>;
// };

export default RegisterUsersStore;
