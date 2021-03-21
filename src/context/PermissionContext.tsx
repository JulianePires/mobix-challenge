import { createContext, useState, ReactNode } from "react";

interface PermissionContextData {
  verListagem: boolean;
  verDetalhes: boolean;
  criar: boolean;
  editar: boolean;
  deletar: boolean;
  handleCheckAllInColumn: (permission: string) => void;
  displayPermissions: () => void;
  updatePermissions: () => void;
  clearPermissions: () => void;
}

interface PermissionProviderProps {
  children: ReactNode;
}

export const PermissionContext = createContext({} as PermissionContextData);

export function PermissionProvider({ children }: PermissionProviderProps) {
  const [permissions, setPermissions] = useState<String[]>([]);
  const [verListagem, setVerListagem] = useState(false);
  const [verDetalhes, setVerDetalhes] = useState(false);
  const [criar, setCriar] = useState(false);
  const [editar, setEditar] = useState(false);
  const [deletar, setDeletar] = useState(false);

  function handleCheckAllInColumn(permission: string) {
    permission === "verdetalhes"
      ? setVerDetalhes(!verDetalhes)
      : permission === "verlistagem"
      ? setVerListagem(!verListagem)
      : permission === "criar"
      ? setCriar(!criar)
      : permission === "editar"
      ? setEditar(!editar)
      : setDeletar(!deletar);
  }

  async function displayPermissions() {
    console.log(permissions);
  }

  function clearPermissions() {
    setPermissions([]);
  }

  function updatePermissions() {
    const checks = document.querySelectorAll("input");
    checks.forEach((check) => {
      const perm = check.attributes[3].nodeValue;
      if (check.checked === true) {
        perm !== null && setPermissions((oldState) => [...oldState, perm]);
      }
    });
  }

  return (
    <PermissionContext.Provider
      value={{
        verListagem,
        verDetalhes,
        criar,
        editar,
        deletar,
        handleCheckAllInColumn,
        displayPermissions,
        updatePermissions,
        clearPermissions,
      }}
    >
      {children}
    </PermissionContext.Provider>
  );
}
