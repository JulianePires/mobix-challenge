import Module from "./Module";

export function Financeiro() {
  const submodules = ["Entradas"];

  return <Module moduleTitle="Financeiro" submodules={submodules} />;
}
