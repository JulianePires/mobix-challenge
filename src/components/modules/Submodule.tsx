/* eslint-disable no-lone-blocks */
import { TableCell, Checkbox } from "@material-ui/core";
import { useContext, useState } from "react";
import { PermissionContext } from "../../context/PermissionContext";

import styles from "../../styles/Table.module.css";

interface SubmoduleProps {
  rowName: string;
}

export function Submodule(props: SubmoduleProps) {
  const { handleAddPermission, handleRemovePermission } = useContext(
    PermissionContext
  );
  const [verListagem, setVerlistagem] = useState(false);
  const [verDetalhes, setVerDetalhes] = useState(false);
  const [criar, setCriar] = useState(false);
  const [editar, setEditar] = useState(false);
  const [deletar, setDeletar] = useState(false);

  function handleSetListagemView(permission: string | null) {
    {
      verListagem === false
        ? handleAddPermission(permission)
        : handleRemovePermission(permission);
    }

    setVerlistagem(!verListagem);
  }

  function handleSetDetalhesView(permission: string | null) {
    {
      verDetalhes === false
        ? handleAddPermission(permission)
        : handleRemovePermission(permission);
    }
    setVerDetalhes(!verDetalhes);
  }

  function handleSetCriarView(permission: string | null) {
    {
      criar === false
        ? handleAddPermission(permission)
        : handleRemovePermission(permission);
    }
    setCriar(!criar);
  }

  function handleSetEditarView(permission: string | null) {
    {
      editar === false
        ? handleAddPermission(permission)
        : handleRemovePermission(permission);
    }
    setEditar(!editar);
  }

  function handleSetDeletarView(permission: string | null) {
    {
      deletar === false
        ? handleAddPermission(permission)
        : handleRemovePermission(permission);
    }
    setDeletar(!deletar);
  }
  return (
    <>
      <TableCell align="left" className={styles.tableRowTiile}>
        {props.rowName}
      </TableCell>

      <TableCell align="center">
        <Checkbox
          checked={verListagem}
          color="default"
          onChange={(e) => {
            handleSetListagemView(e.target.attributes[3].nodeValue);
          }}
          inputProps={{ "aria-label": props.rowName + ": ver-listagem" }}
          className={styles.tableCheckBox}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          checked={verDetalhes}
          color="default"
          onChange={(e) => {
            handleSetDetalhesView(e.target.attributes[3].nodeValue);
          }}
          inputProps={{ "aria-label": props.rowName + ": ver-detalhes" }}
          className={styles.tableCheckBox}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          checked={criar}
          color="default"
          onChange={(e) => {
            handleSetCriarView(e.target.attributes[3].nodeValue);
          }}
          inputProps={{ "aria-label": props.rowName + ": criar" }}
          className={styles.tableCheckBox}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          checked={editar}
          color="default"
          onChange={(e) => {
            handleSetEditarView(e.target.attributes[3].nodeValue);
          }}
          inputProps={{ "aria-label": props.rowName + ": editar" }}
          className={styles.tableCheckBox}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          checked={deletar}
          color="default"
          onChange={(e) => {
            handleSetDeletarView(e.target.attributes[3].nodeValue);
          }}
          inputProps={{ "aria-label": props.rowName + ": deletar" }}
          className={styles.tableCheckBox}
        />
      </TableCell>
    </>
  );
}
