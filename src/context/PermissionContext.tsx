import { createContext, useState, ReactNode } from "react";

interface PermissionContextData {
  verListagem: boolean;
  verDetalhes: boolean;
  criar: boolean;
  editar: boolean;
  deletar: boolean;
  handleAddPermission: (permission: string | null) => void;
  handleRemovePermission: (permission: string | null) => void;
  handleCheckAllInColumn: (permission: string) => void;
  displayPermissions: () => void;
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

  function handleAddPermission(permission: string | null) {
    if (permission === "") return;
    if (permission !== null) {
      const perm = permission;
      setPermissions((oldState) => [...oldState, perm]);
    }
  }

  function handleRemovePermission(permission: string | null) {
    if (permission === "") return;
    const filteredPermissions = permissions.filter(
      (perm) => permission !== perm
    );
    setPermissions(filteredPermissions);
  }

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

  function displayPermissions() {
    console.log(permissions);
  }

  return (
    <PermissionContext.Provider
      value={{
        verListagem,
        verDetalhes,
        criar,
        editar,
        deletar,
        handleAddPermission,
        handleRemovePermission,
        handleCheckAllInColumn,
        displayPermissions,
      }}
    >
      {children}
    </PermissionContext.Provider>
  );
}
