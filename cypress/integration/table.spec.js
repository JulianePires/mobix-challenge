/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
describe("Table", () => {
  it("expandir os submodulos", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#expand-analise").click();
    cy.get("#expand-contas").click();
    cy.get("#expand-customizacao").click();
    cy.get("#expand-financeiro").click();
  });
  it("ativar e desativar todas as permissões ao clicar em Todos", () => {
    cy.get("#total-listagem-check").check().should("be.checked");
    cy.get("#total-detalhes-check").check().should("be.checked");
    cy.get("#total-criar-check").check().should("be.checked");
    cy.get("#total-editar-check").check().should("be.checked");
    cy.get("#total-deletar-check").check().should("be.checked");
    cy.get("#total-listagem-check").uncheck().should("not.be.checked");
    cy.get("#total-detalhes-check").uncheck().should("not.be.checked");
    cy.get("#total-criar-check").uncheck().should("not.be.checked");
    cy.get("#total-editar-check").uncheck().should("not.be.checked");
    cy.get("#total-deletar-check").uncheck().should("not.be.checked");
  });
  it("ativar as permissões ver-listagem no módulo Contas ", () => {
    cy.get("#ver-listagem-contas").check().should("be.checked");
    cy.get("#ver-listagem-Cliente").should("be.checked");
    cy.get("#ver-listagem-Transações").should("be.checked");
    cy.get("#ver-listagem-Contas,Digitais");
    cy.get("#ver-listagem-contas").uncheck().should("not.be.checked");
  });
  it("check e uncheck de todos os módulos: Análise", () => {
    cy.get("#ver-listagem-analise").check().should("be.checked");
    cy.get("#ver-detalhes-analise").check().should("be.checked");
    cy.get("#criar-analise").check().should("be.checked");
    cy.get("#editar-analise").check().should("be.checked");
    cy.get("#deletar-analise").check().should("be.checked");
    cy.get("#ver-listagem-analise").uncheck().should("not.be.checked");
    cy.get("#ver-detalhes-analise").uncheck().should("not.be.checked");
    cy.get("#criar-analise").uncheck().should("not.be.checked");
    cy.get("#editar-analise").uncheck().should("not.be.checked");
    cy.get("#deletar-analise").uncheck().should("not.be.checked");
  });
  it("check e uncheck de todos os módulos: Contas", () => {
    cy.get("#ver-listagem-contas").check().should("be.checked");
    cy.get("#ver-detalhes-contas").check().should("be.checked");
    cy.get("#criar-contas").check().should("be.checked");
    cy.get("#editar-contas").check().should("be.checked");
    cy.get("#deletar-contas").check().should("be.checked");
    cy.get("#ver-listagem-contas").uncheck().should("not.be.checked");
    cy.get("#ver-detalhes-contas").uncheck().should("not.be.checked");
    cy.get("#criar-contas").uncheck().should("not.be.checked");
    cy.get("#editar-contas").uncheck().should("not.be.checked");
    cy.get("#deletar-contas").uncheck().should("not.be.checked");
  });
  it("check e uncheck de todos os módulos: Customização", () => {
    cy.get("#ver-listagem-customizacao").check().should("be.checked");
    cy.get("#ver-detalhes-customizacao").check().should("be.checked");
    cy.get("#criar-customizacao").check().should("be.checked");
    cy.get("#editar-customizacao").check().should("be.checked");
    cy.get("#deletar-customizacao").check().should("be.checked");
    cy.get("#ver-listagem-customizacao").uncheck().should("not.be.checked");
    cy.get("#ver-detalhes-customizacao").uncheck().should("not.be.checked");
    cy.get("#criar-customizacao").uncheck().should("not.be.checked");
    cy.get("#editar-customizacao").uncheck().should("not.be.checked");
    cy.get("#deletar-customizacao").uncheck().should("not.be.checked");
  });
  it("check e uncheck de todos os módulos: Financeiro", () => {
    cy.get("#ver-listagem-financeiro").check().should("be.checked");
    cy.get("#ver-detalhes-financeiro").check().should("be.checked");
    cy.get("#criar-financeiro").check().should("be.checked");
    cy.get("#editar-financeiro").check().should("be.checked");
    cy.get("#deletar-financeiro").check().should("be.checked");
    cy.get("#ver-listagem-financeiro").uncheck().should("not.be.checked");
    cy.get("#ver-detalhes-financeiro").uncheck().should("not.be.checked");
    cy.get("#criar-financeiro").uncheck().should("not.be.checked");
    cy.get("#editar-financeiro").uncheck().should("not.be.checked");
    cy.get("#deletar-financeiro").uncheck().should("not.be.checked");
  });
  it("marcar checkboxes aleatórios", () => {
    cy.get("#ver-listagem-Análise-de-contas").check().should("be.checked");
    cy.get("#editar-Transações").check().should("be.checked");
    cy.get("#criar-Tarifas").check().should("be.checked");
    cy.get("#deletar-Contas").check().should("be.checked");
    cy.get("#ver-detalhes-Entradas").check().should("be.checked");
  });
  it("Checar o botão", () => {
    cy.get(".Button_button__VrnvZ").click();
  });
  it("fechar os submodulos", () => {
    cy.get("#expand-analise").click();
    cy.get("#expand-contas").click();
    cy.get("#expand-customizacao").click();
    cy.get("#expand-financeiro").click();
    cy.visit("http://localhost:3000/");
  });
});
