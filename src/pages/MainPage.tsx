import logo from "../assets/images/logo.gif";
import cross from "../assets/images/cross.svg";
import { useState } from "react";
import { Board } from "../components/Board/Board";
import { BoardList } from "../components/BoardList/BoardList";

export const MainPage = (): JSX.Element => {
  return <BoardList />;
};
