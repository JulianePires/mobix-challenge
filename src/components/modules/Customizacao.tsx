import Module from "./Module";

export function Customizacao() {
  const submodules = [
    "Limites e horários",
    "Tarifas",
    "Tarifas personalizadas",
    "Contas",
  ];

  return <Module name="customizacao" moduleTitle="Customização" submodules={submodules} />;
}
