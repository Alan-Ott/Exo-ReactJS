import { create } from "zustand";

const userStoreUsers = create((set) => ({
    //inital state
    users: [],

    //Actions 
    addUser: (user) =>
        set((state) => ({ 
            users: [...state.users, user] 
        })),
    removeUser: (id) =>
        set((state) => ({
            users: state.users.filter((user) => user.id !== id),
        })),
    clearUsers: () => set({ users: [] }),
}));

export default userStoreUsers;