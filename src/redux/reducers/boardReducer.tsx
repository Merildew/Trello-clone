import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Board = {
  id: number;
  title: string;
  lists?: Array<object>;
  activity: Array<Activity>;
};

type Activity = {
  action: string;
  time: number;
};

const initialState: Array<Board> = [];

export const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    createBoard(state, action: PayloadAction<Board["title"]>) {
      state.push({
        id: state.length,
        activity: [{ action: "User created this board", time: Date.now() }],
        title: action.payload,
      });
    },
    createActivity(
      state,
      action: PayloadAction<{ id: number; action: string; time: number }>
    ) {
      const reqBodyId = state.findIndex(
        (board) => board.id === action.payload.id
      );
      state[reqBodyId].activity.push({
        action: action.payload.action,
        time: action.payload.time,
      });
    },
  },
});

export const { createBoard, createActivity } = boardSlice.actions;
export default boardSlice.reducer;
