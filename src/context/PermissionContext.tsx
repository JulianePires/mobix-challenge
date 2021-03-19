import { createContext, useState, ReactNode, useEffect } from "react";

interface PermissionsProps {
  name: string;
  isActive: boolean;
}

interface PermissionContextData {
  permissions: Array<PermissionsProps>;
  handleAddPermission: (permission: string) => void;
  handleRemovePermission: (permission: string) => void;
  displayPermissions: () => void;
}

interface PermissionProviderProps {
  children: ReactNode;
}

export const PermissionContext = createContext({} as PermissionContextData);

export function PermissionProvider({ children }: PermissionProviderProps) {
  const [permissions, setPermissions] = useState<PermissionsProps[]>([]);

  function handleAddPermission(permission: string) {
    if (permission === "") return;
  }

  function handleRemovePermission(permission: string) {
    if (permission === "") return;
  }

  function handleCheckAllInColumn() {}

  function handleCheckAllInModule() {}

  function displayPermissions(){
    console.log(permissions)
  }
  
  return (
    <PermissionContext.Provider
      value={{
        permissions,
        handleAddPermission,
        handleRemovePermission,
        displayPermissions,
      }}
    >
      {children}
    </PermissionContext.Provider>
  );
}
