/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import { useContext, useEffect, useState } from "react";

import { PermissionContext } from "../../context/PermissionContext";

import { TableCell, Checkbox } from "@material-ui/core";

import styles from "../../styles/Table.module.css";
import { createNull } from "typescript";

interface SubmoduleProps {
  rowName: string;
  moduleVerListagemCheck: boolean;
  moduleVerDetalhesCheck: boolean;
  moduleCriarCheck: boolean;
  moduleEditarCheck: boolean;
  moduleDeletarCheck: boolean;
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

  function handleSetListagemView(permName: string | null) {
    {
      verListagem === false
        ? handleAddPermission(permName)
        : handleRemovePermission(permName);
    }
    setVerlistagem(!verListagem);
  }

  function handleSetDetalhesView(permName: string | null) {
    {
      verDetalhes === false
        ? handleAddPermission(permName)
        : handleRemovePermission(permName);
    }
    setVerDetalhes(!verDetalhes);
  }

  function handleSetCriarView(permName: string | null) {
    {
      criar === false
        ? handleAddPermission(permName)
        : handleRemovePermission(permName);
    }
    setCriar(!criar);
  }

  function handleSetEditarView(permName: string | null) {
    {
      editar === false
        ? handleAddPermission(permName)
        : handleRemovePermission(permName);
    }
    setEditar(!editar);
  }

  function handleSetDeletarView(permName: string | null) {
    {
      deletar === false
        ? handleAddPermission(permName)
        : handleRemovePermission(permName);
    }
    setDeletar(!deletar);
  }

  return (
    <>
      <TableCell align="left" className={styles.tableRowTitle}>
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
          style={{ margin: "0 4.2rem" }}
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
          style={{ margin: "0 4.6rem" }}
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
          style={{ margin: "0 4.2rem" }}
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
          style={{ margin: "0 4.6rem" }}
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
          style={{ margin: "0 1rem 0 4.2rem" }}
        />
      </TableCell>
    </>
  );
}
