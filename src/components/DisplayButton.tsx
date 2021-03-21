import { useContext } from "react";
import { PermissionContext } from "../context/PermissionContext";

import Button from "@material-ui/core/Button";

import styles from "../styles/Button.module.css";

export function DisplayButton() {
  const {
    displayPermissions,
    updatePermissions,
    clearPermissions,
  } = useContext(PermissionContext);

  return (
    <Button
      variant="contained"
      onClick={() => displayPermissions()}
      onMouseEnter={() => updatePermissions()}
      onMouseLeave={() => clearPermissions()}
      className={styles.button}
    >
      CADASTRAR
    </Button>
  );
}
