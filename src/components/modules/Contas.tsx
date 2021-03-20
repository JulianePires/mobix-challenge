import Module from "./Module";

export function Contas() {
  const submodules = ["Cliente", "Transações", "Contas Digitais"];

  return <Module moduleTitle="Contas" submodules={submodules} />;
}
