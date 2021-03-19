import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import styles from "../styles/Table.module.css";

export function PermissionTable() {
  return (
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell align="center" />
          <TableCell align="center">Ver listagem</TableCell>
          <TableCell align="center">Ver detalhes</TableCell>
          <TableCell align="center">Criar</TableCell>
          <TableCell align="center">Editar</TableCell>
          <TableCell align="center">Deletar</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}
