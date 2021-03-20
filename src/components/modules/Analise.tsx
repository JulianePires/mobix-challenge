import Module from "./Module";

export function Analise() {
  const submodules = ["Análise de contas", "Análise de transações"];

  return <Module moduleTitle="Análise" submodules={submodules} />;
}
