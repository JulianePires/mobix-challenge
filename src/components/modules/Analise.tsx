import Module from "./Module";

export function Analise() {
  const submodules = ["Análise de contas", "Análise de transações"];

  return (
    <Module name="analise" moduleTitle="Análise" submodules={submodules} />
  );
}
