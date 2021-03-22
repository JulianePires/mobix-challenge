import { useContext } from "react";

import { PermissionContext } from "../../context/PermissionContext";

import { TableCell, Checkbox } from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";

export function Total() {
  const {
    handleCheckAllInColumn,
    verListagem,
    verDetalhes,
    criar,
    editar,
    deletar,
  } = useContext(PermissionContext);

  return (
    <>
      <TableRow>
        <TableCell
          align="left"
          style={{
            margin: "0",
            color: "var(--black)",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "21px",
          }}
        >
          Todos
        </TableCell>
        <TableCell align="center">
          <Checkbox
            id="total-listagem-check"
            checked={verListagem}
            color="default"
            onChange={() => handleCheckAllInColumn("verlistagem")}
            inputProps={{ "aria-label": "all-ver-Listagem" }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            id="total-detalhes-check"
            checked={verDetalhes}
            color="default"
            onChange={() => handleCheckAllInColumn("verdetalhes")}
            inputProps={{ "aria-label": "all-ver-detalhes" }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            id="total-criar-check"
            checked={criar}
            color="default"
            onChange={() => handleCheckAllInColumn("criar")}
            inputProps={{ "aria-label": "all-criar" }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            id="total-editar-check"
            checked={editar}
            color="default"
            onChange={() => handleCheckAllInColumn("editar")}
            inputProps={{ "aria-label": "all-editar" }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            id="total-deletar-check"
            checked={deletar}
            color="default"
            onChange={() => handleCheckAllInColumn("deletar")}
            inputProps={{ "aria-label": "all-deletar" }}
          />
        </TableCell>
      </TableRow>
    </>
  );
}
