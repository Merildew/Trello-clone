import { RootState } from "../store";
export const listSelector = (store: RootState) => store.lists;
export const boardSelector = (store: RootState) => store.boards;
