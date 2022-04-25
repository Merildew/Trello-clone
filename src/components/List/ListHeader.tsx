import { ChangeEvent, useState } from "react";
import * as styles from "./styles.css";
import { deleteList, updateList } from "../../redux/reducers/listReducer";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../redux/reducers/boardReducer";
import { useParams } from "react-router-dom";
import { listSelector } from "../../redux/reducers/selectors";

type Props = {
  id: number;
  title: string;
};

export const ListHeader = ({ id, title }: Props): JSX.Element => {
  const [cardTitle, setTitle] = useState<string>(title);
  const params = useParams();

  const listArray = useSelector(listSelector);
  const list = listArray.find((list) => list.id === id);

  let focus = false;
  if (cardTitle === undefined || cardTitle.trim() === "") {
    focus = true;
  }
  const dispatch = useDispatch();
  return (
    <div className={styles.listHeader}>
      <input
        type="text"
        className={styles.listTitleInput}
        maxLength={28}
        value={cardTitle}
        autoFocus={focus}
        placeholder="Enter list title..."
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setTitle(event.target.value);
        }}
        onBlur={() => {
          if (cardTitle === undefined || cardTitle.trim() === "") {
            dispatch(deleteList(id));
          } else {
            dispatch(updateList({ id: id, title: cardTitle }));
            dispatch(
              createActivity({
                id: Number(params.id),
                action: `User added ${cardTitle} to this board`,
                time: Date.now(),
              })
            );
          }
        }}
      ></input>
      <div
        className={styles.listHeaderMenu}
        onClick={() => {
          dispatch(
            createActivity({
              id: Number(params.id),
              action: `User deleted list ${list?.title} `,
              time: Date.now(),
            })
          );
          dispatch(deleteList(id));
        }}
      >
        <div className={styles.listHeaderMenuPart}></div>
        <div className={styles.listHeaderMenuPart}></div>
        <div className={styles.listHeaderMenuPart}></div>
      </div>
    </div>
  );
};
