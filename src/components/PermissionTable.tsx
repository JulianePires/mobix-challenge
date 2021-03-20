import { TableBody } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { Analise } from "./modules/Analise";
import { Total } from "./modules/Total";

import styles from "../styles/Table.module.css";
import { Contas } from "./modules/Contas";
import { Customizacao } from "./modules/Customizacao";
import { Financeiro } from "./modules/Financeiro";

export function PermissionTable() {
  const columns = [
    " ",
    "Ver listagem",
    "Ver detalhes",
    "Criar",
    "Editar",
    "Deletar",
  ];
  return (
    <Table aria-label="collapsible table" className={styles.table}>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell align="center">{column}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <Total />
        <Analise />
        <Contas />
        <Customizacao />
        <Financeiro />
      </TableBody>
    </Table>
  );
}
