import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { PermissionProvider } from "./context/PermissionContext";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Header />
      <div>
        <PermissionProvider>
          <Table />
          <Button />
        </PermissionProvider>
      </div>
    </>
  );
}
