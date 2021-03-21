import { useContext } from "react";
import { TableCell, Checkbox } from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import { PermissionContext } from "../../context/PermissionContext";

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
            checked={verListagem}
            color="default"
            onChange={() => handleCheckAllInColumn("verlistagem")}
            inputProps={{ "aria-label": "verListagem" }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            checked={verDetalhes}
            color="default"
            onChange={() => handleCheckAllInColumn("verdetalhes")}
            inputProps={{ "aria-label": "verDetalhes" }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            checked={criar}
            color="default"
            onChange={() => handleCheckAllInColumn("criar")}
            inputProps={{ "aria-label": "criar" }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            checked={editar}
            color="default"
            onChange={() => handleCheckAllInColumn("editar")}
            inputProps={{ "aria-label": "editar" }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            checked={deletar}
            color="default"
            onChange={() => handleCheckAllInColumn("deletar")}
            inputProps={{ "aria-label": "deletar" }}
          />
        </TableCell>
      </TableRow>
    </>
  );
}
