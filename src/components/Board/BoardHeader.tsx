import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { boardSelector } from "../../redux/reducers/selectors";
import { SidePanel } from "../SidePanel/SidePanel";
import * as styles from "./styles.css";

export const BoardHeader = (): JSX.Element => {
  const boardArray = useSelector(boardSelector);

  const boardId = useParams();
  const board = boardArray.find((board) => board.id === Number(boardId.id));

  const handleOpenClick = () => {
    setOpen(!open);
  };

  const [cardTitle, setTitle] = useState<string>(board?.title || "");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.boardHeader}>
      <input
        type="text"
        className={styles.boardHeaderInput}
        value={cardTitle}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setTitle(event.target.value);
        }}
        size={cardTitle.length}
      ></input>
      <button className={styles.showMenuButton} onClick={handleOpenClick}>
        Show menu
      </button>
      {open && <SidePanel onClose={handleOpenClick} />}
    </div>
  );
};
