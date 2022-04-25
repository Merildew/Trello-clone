import * as styles from "./styles.css";
import cross from "../../assets/images/cross.svg";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createBoard } from "../../redux/reducers/boardReducer";

type Props = {
  onClose: () => void;
};
export const CreatePanel = ({ onClose }: Props): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();

  function handleCreateClick() {
    setError(false);
    if (title.trim() === "") {
      setError(true);
      return;
    }
    dispatch(createBoard(title));
    onClose();
  }

  return (
    <div className={styles.createPanelWrapper}>
      <div className={styles.createPanelHeader}>
        <h3 className={styles.createPanelTitle}>Create board</h3>
        <img
          src={cross}
          className={styles.createPanelClose}
          onClick={onClose}
        ></img>
      </div>
      <div className={styles.sidePanelBody}>
        <label className={styles.inputLabel}>
          Board title
          <input
            id="boardTitleInput"
            className={
              error
                ? styles.boardTitleInput.error
                : styles.boardTitleInput.active
            }
            type="text"
            name="boardTitle"
            value={title}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setTitle(event.target.value);
            }}
          ></input>
        </label>
        <button className={styles.createBodyButton} onClick={handleCreateClick}>
          Create
        </button>
      </div>
    </div>
  );
};
