import { NavLink } from "react-router-dom";
import * as styles from "./styles.css";

type Props = {
  boardId: number;
  title: string | undefined;
};
export const BoardLink = ({ boardId, title }: Props): JSX.Element => {
  return (
    <NavLink to={`/boards/${boardId}`} className={styles.boardLink}>
      <p>{title}</p>
    </NavLink>
  );
};
