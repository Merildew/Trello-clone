import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type List = {
  id: number;
  boardId: number;
  title: string;
  cards: Array<string>;
};

const initialState: Array<List> = [];

export const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    createList(state, action: PayloadAction<List["boardId"]>) {
      state.push({
        id: state.length,
        boardId: action.payload,
        cards: [],
        title: "",
      });
    },
    deleteList(state, action: PayloadAction<List["id"]>) {
      const reqListId = state.findIndex((list) => list.id === action.payload);
      state.splice(reqListId, 1);
    },
    updateList(state, action: PayloadAction<{ id: number; title: string }>) {
      const reqListId = state.findIndex(
        (list) => list.id === action.payload.id
      );
      state[reqListId] = { ...(state[reqListId] || []), ...action.payload };
    },
    addCard(state, action: PayloadAction<{ id: number; value: string }>) {
      const reqListId = state.findIndex(
        (list) => list.id === action.payload.id
      );
      state[reqListId].cards?.push(action.payload.value);
    },
    dropCard(
      state,
      action: PayloadAction<{
        initID: number;
        finalId: number;
        sourceListId: number;
        destListId: number;
      }>
    ) {
      const initList = state[action.payload.sourceListId];
      const finalList = state[action.payload.destListId];
      const card = initList.cards[action.payload.initID];
      finalList.cards.splice(action.payload.initID, 1);
      finalList.cards.splice(action.payload.finalId, 0, card);
    },
  },
});

export const { createList, deleteList, updateList, addCard, dropCard } =
  listSlice.actions;
export default listSlice.reducer;
