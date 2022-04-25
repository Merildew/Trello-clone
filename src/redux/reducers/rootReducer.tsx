import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import listReducer from "./listReducer";

export const rootReducer = combineReducers({
  lists: listReducer,
  boards: boardReducer,
});
