import React, { FunctionComponent } from "react";

import styles from "./styles.scss";

const CustomLabel: FunctionComponent<{ label: string }> = ({ label }) => (
  <div className={styles.component}>{label}</div>
);

CustomLabel.defaultProps = {
  label: "Label",
};

export default CustomLabel;
