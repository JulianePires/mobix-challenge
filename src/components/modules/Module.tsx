import { useContext, useEffect, useState } from "react";

import { PermissionContext } from "../../context/PermissionContext";

import { TableCell, TableRow, Checkbox } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Collapse from "@material-ui/core/Collapse";

import { Submodule } from "./Submodule";

import styles from "../../styles/Table.module.css";

interface ModuleProps {
  name: string;
  moduleTitle: string;
  submodules: Array<string>;
}

export default function Module(props: ModuleProps) {
  const { verListagem, verDetalhes, criar, editar, deletar } = useContext(
    PermissionContext
  );
  const [open, setOpen] = useState(false);
  const [verListagemChecked, setVerListagemChecked] = useState(false);
  const [verDetalhesChecked, setVerDetalhesChecked] = useState(false);
  const [criarChecked, setCriarChecked] = useState(false);
  const [editarChecked, setEditarChecked] = useState(false);
  const [deletarChecked, setDeletarChecked] = useState(false);

  useEffect(() => {
    setVerListagemChecked(verListagem);
  }, [verListagem]);

  useEffect(() => {
    setVerDetalhesChecked(verDetalhes);
  }, [verDetalhes]);

  useEffect(() => {
    setCriarChecked(criar);
  }, [criar]);

  useEffect(() => {
    setEditarChecked(editar);
  }, [editar]);

  useEffect(() => {
    setDeletarChecked(deletar);
  }, [deletar]);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            id={"expand-" + props.name}
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
            id={"ver-listagem-" + props.name}
            checked={verListagemChecked}
            color="default"
            onChange={() => {
              setVerListagemChecked(!verListagemChecked);
            }}
            inputProps={{ "aria-label": "ver-listagem-" + props.name }}
            className={styles.moduleCheckBox}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            id={"ver-detalhes-" + props.name}
            checked={verDetalhesChecked}
            color="default"
            onChange={() => {
              setVerDetalhesChecked(!verDetalhesChecked);
            }}
            inputProps={{ "aria-label": "ver-detalhes-" + props.name }}
            className={styles.moduleCheckBox}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            id={"criar-" + props.name}
            checked={criarChecked}
            color="default"
            onChange={() => {
              setCriarChecked(!criarChecked);
            }}
            inputProps={{ "aria-label": "criar-" + props.name }}
            className={styles.moduleCheckBox}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            id={"editar-" + props.name}
            checked={editarChecked}
            color="default"
            onChange={() => {
              setEditarChecked(!editarChecked);
            }}
            inputProps={{ "aria-label": "editar-" + props.name }}
            className={styles.moduleCheckBox}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            id={"deletar-" + props.name}
            checked={deletarChecked}
            color="default"
            onChange={() => {
              setDeletarChecked(!deletarChecked);
            }}
            inputProps={{ "aria-label": "deletar-" + props.name }}
            className={styles.moduleCheckBox}
          />
        </TableCell>
      </TableRow>
      {props.submodules.map((submodule) => {
        return (
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto">
                <Submodule
                  rowName={submodule}
                  moduleName={props.name}
                  moduleVerListagemCheck={verListagemChecked}
                  moduleVerDetalhesCheck={verDetalhesChecked}
                  moduleCriarCheck={criarChecked}
                  moduleEditarCheck={editarChecked}
                  moduleDeletarCheck={deletarChecked}
                />
              </Collapse>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}
