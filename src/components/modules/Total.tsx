import { useContext, useState } from "react";
import { TableCell, Checkbox } from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import { PermissionContext } from "../../context/PermissionContext";

export function Total() {
  const [check, setCheck] = useState(false);
  const { handleCheckAllInColumn } = useContext(PermissionContext);

  function handleCheckModules() {
    setCheck(!check);
  }

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
            checked={check}
            color="default"
            onChange={() => handleCheckModules()}
            inputProps={{ "aria-label": "verListagem" }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            checked={check}
            color="default"
            onChange={() => handleCheckAllInColumn("verdetalhes")}
            inputProps={{ "aria-label": "verDetalhes" }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            checked={check}
            color="default"
            onChange={() => handleCheckAllInColumn("criar")}
            inputProps={{ "aria-label": "criar" }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            checked={check}
            color="default"
            onChange={() => handleCheckAllInColumn("editar")}
            inputProps={{ "aria-label": "editar" }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            checked={check}
            color="default"
            onChange={() => handleCheckAllInColumn("deletar")}
            inputProps={{ "aria-label": "deletar" }}
          />
        </TableCell>
      </TableRow>
    </>
  );
}
