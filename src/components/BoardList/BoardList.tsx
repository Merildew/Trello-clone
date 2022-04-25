import * as styles from "./styles.css";
import logo from "../../assets/images/logo.gif";
import { useState } from "react";
import { CreatePanel } from "./CreatePanel";
import { useSelector } from "react-redux";
import { boardSelector } from "../../redux/reducers/selectors";
import { BoardLink } from "./BoardLink";

export const BoardList = (): JSX.Element => {
  const boardArray = useSelector(boardSelector);
  const [open, setOpen] = useState<boolean>(false);

  const boardComponents = boardArray.map((board) => {
    return <BoardLink key={board.id} boardId={board.id} title={board.title} />;
  });

  function handleOpenClick() {
    setOpen(!open);
  }
  return (
    <div className={styles.mainPageWrapper}>
      <header className={styles.mainHeader}>
        <img className={styles.logo} src={logo} />
      </header>
      <div className={styles.boardsListWrapper}>
        <h3>Your boards</h3>
        <div className={styles.boardsList}>
          {boardComponents}
          <div className={styles.createBoardBlock}>
            <div
              className={styles.createBoardButton}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <p className={styles.createBoardTitle}>Create new board</p>
            </div>
            {open && <CreatePanel onClose={handleOpenClick} />}
          </div>
        </div>
      </div>
    </div>
  );
};
