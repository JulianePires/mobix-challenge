import { DisplayButton } from "./components/DisplayButton";
import { Header } from "./components/Header";
import { PermissionTable } from "./components/PermissionTable";
import { PermissionProvider } from "./context/PermissionContext";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Header />
      <div className="content">
        <PermissionProvider>
          <PermissionTable />
          <DisplayButton />
        </PermissionProvider>
      </div>
    </>
  );
}
