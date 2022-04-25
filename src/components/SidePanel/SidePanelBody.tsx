import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { boardSelector } from "../../redux/reducers/selectors";
import * as styles from "./styles.css";

export const SidePanelBody = (): JSX.Element => {
  let params = useParams();
  const activityArray = useSelector(boardSelector);
  const board = activityArray.find((board) => board.id === Number(params.id));
  const activityComponents = board?.activity.map((activity, index) => {
    let date: Date = new Date(activity.time);
    return (
      <div key={index} className={styles.activity}>
        <p className={styles.activityAction}>{activity.action}</p>
        <p
          className={styles.activityTime}
        >{`${date.toDateString()} ${date.getHours()}:${date.getMinutes()}`}</p>
      </div>
    );
  });
  return <div className={styles.sidePanelBody}>{activityComponents}</div>;
};
