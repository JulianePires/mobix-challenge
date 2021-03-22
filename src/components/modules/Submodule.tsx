import { useEffect, useState } from "react";

import { TableCell, Checkbox } from "@material-ui/core";

import styles from "../../styles/Table.module.css";

interface SubmoduleProps {
  rowName: string;
  moduleName: string;
  moduleVerListagemCheck: boolean;
  moduleVerDetalhesCheck: boolean;
  moduleCriarCheck: boolean;
  moduleEditarCheck: boolean;
  moduleDeletarCheck: boolean;
}

export function Submodule(props: SubmoduleProps) {
  const [verListagem, setVerListagem] = useState(false);
  const [verDetalhes, setVerDetalhes] = useState(false);
  const [criar, setCriar] = useState(false);
  const [editar, setEditar] = useState(false);
  const [deletar, setDeletar] = useState(false);

  useEffect(() => {
    setVerListagem(props.moduleVerListagemCheck);
  }, [props.moduleVerListagemCheck]);

  useEffect(() => {
    setVerDetalhes(props.moduleVerDetalhesCheck);
  }, [props.moduleVerDetalhesCheck]);

  useEffect(() => {
    setCriar(props.moduleCriarCheck);
  }, [props.moduleCriarCheck]);

  useEffect(() => {
    setEditar(props.moduleEditarCheck);
  }, [props.moduleEditarCheck]);

  useEffect(() => {
    setDeletar(props.moduleDeletarCheck);
  }, [props.moduleDeletarCheck]);

  return (
    <>
      <TableCell align="left" className={styles.tableRowTitle}>
        {props.rowName}
      </TableCell>

      <TableCell align="center">
        <Checkbox
          id={"ver-listagem-" + props.rowName.replaceAll(" ", "-")}
          checked={verListagem}
          color="default"
          onChange={() => {
            setVerListagem(!verListagem);
          }}
          inputProps={{
            "aria-label": "ver-listagem-" + props.rowName.replaceAll(" ", "-"),
          }}
          style={{ margin: "0 4.2rem" }}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          id={"ver-detalhes-" + props.rowName.replaceAll(" ", "-")}
          checked={verDetalhes}
          color="default"
          onChange={() => {
            setVerDetalhes(!verDetalhes);
          }}
          inputProps={{
            "aria-label": "ver-detalhes-" + props.rowName.replaceAll(" ", "-"),
          }}
          style={{ margin: "0 4.6rem" }}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          id={"criar-" + props.rowName.replaceAll(" ", "-")}
          checked={criar}
          color="default"
          onChange={() => {
            setCriar(!criar);
          }}
          inputProps={{
            "aria-label": "criar-" + props.rowName.replaceAll(" ", "-"),
          }}
          style={{ margin: "0 4.2rem" }}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          id={"editar-" + props.rowName.replaceAll(" ", "-")}
          checked={editar}
          color="default"
          onChange={() => {
            setEditar(!editar);
          }}
          inputProps={{
            "aria-label": "editar-" + props.rowName.replaceAll(" ", "-"),
          }}
          style={{ margin: "0 4.6rem" }}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          id={"deletar-" + props.rowName.replaceAll(" ", "-")}
          checked={deletar}
          color="default"
          onChange={() => {
            setDeletar(!deletar);
          }}
          inputProps={{
            "aria-label": "deletar-" + props.rowName.replaceAll(" ", "-"),
          }}
          style={{ margin: "0 1rem 0 4.2rem" }}
        />
      </TableCell>
    </>
  );
}
