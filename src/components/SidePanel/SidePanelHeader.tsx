import * as styles from "./styles.css";
import cross from "../../assets/images/cross.svg";

type Props = {
  onClose: () => void;
};

export const SidePanelHeader = ({ onClose }: Props): JSX.Element => {
  return (
    <div className={styles.sidePanelHeader}>
      <h3 className={styles.sidePanelTitle}>Activity</h3>
      <img
        src={cross}
        className={styles.sidePanelClose}
        onClick={onClose}
      ></img>
    </div>
  );
};
