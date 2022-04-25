import { useState } from "react";
import { SidePanelBody } from "./SidePanelBody";
import { SidePanelHeader } from "./SidePanelHeader";
import * as styles from "./styles.css";

type Props = {
  onClose: () => void;
};

export const SidePanel = ({ onClose }: Props): JSX.Element => {
  return (
    <div className={styles.sidePanelWrapper}>
      <SidePanelHeader onClose={onClose} />
      <div className={styles.sidePanelScroll}>
        <SidePanelBody />
      </div>
    </div>
  );
};
