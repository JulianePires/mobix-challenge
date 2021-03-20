import { useContext, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { TableCell, TableRow, Checkbox } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { PermissionContext } from "../../context/PermissionContext";
import Collapse from "@material-ui/core/Collapse";

import { Submodule } from "./Submodule";

import styles from "../../styles/Table.module.css";

interface ModuleProps {
  moduleTitle: string;
  submodules: Array<string>;
}

export default function Module(props: ModuleProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            style={{
              margin: "0",
              color: "var(--black)",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "21px",
            }}
          >
            {props.moduleTitle}
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <Checkbox
            checked={false}
            color="default"
            onChange={() => {}}
            inputProps={{ "aria-label": "verlistagem" }}
            className={styles.moduleCheckBox}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            checked={false}
            color="default"
            onChange={() => {}}
            inputProps={{ "aria-label": "verDetalhes" }}
            className={styles.moduleCheckBox}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            checked={false}
            color="default"
            onChange={() => {}}
            inputProps={{ "aria-label": "criar" }}
            className={styles.moduleCheckBox}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            checked={false}
            color="default"
            onChange={() => {}}
            inputProps={{ "aria-label": "editar" }}
            className={styles.moduleCheckBox}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            checked={false}
            color="default"
            onChange={() => {}}
            inputProps={{ "aria-label": "deletar" }}
            className={styles.moduleCheckBox}
          />
        </TableCell>
      </TableRow>
      {props.submodules.map((submodule) => {
        return (
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Submodule rowName={submodule} />
              </Collapse>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}
