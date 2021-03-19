import { DisplayButton } from "./components/DisplayButton";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { PermissionProvider } from "./context/PermissionContext";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Header />
      <div className="content">
        <PermissionProvider>
          <Table />
          <DisplayButton />
        </PermissionProvider>
      </div>
    </>
  );
}
