import Module from "./Module";

export function Financeiro() {
  const submodules = ["Entradas"];

  return <Module name="financeiro" moduleTitle="Financeiro" submodules={submodules} />;
}
