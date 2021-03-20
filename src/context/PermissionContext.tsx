import { createContext, useState, ReactNode, useEffect } from "react";

interface PermissionsProps {
  permissionName: string;
}

interface PermissionContextData {
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
    // permission === "verdetalhes"
    //   ? setVerdetalhes(!subVerDetalhes)
    //   : permission === "verlistagem"
    //   ? setVerlistagem(!subVerlistagem)
    //   : permission === "criar"
    //   ? setCriar(!subCriar)
    //   : permission === "editar"
    //   ? setEditar(!subEditar)
    //   : setDeletar(!subDeletar);
  }

  function checkAllInModules() {}

  function displayPermissions() {
    console.log(permissions);
  }

  return (
    <PermissionContext.Provider
      value={{
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
