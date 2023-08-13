beforeEach(() => {
  // = cy.viewport('iphone-6')
  // = cy.viewport('macbook-11') ввести в терминале npx cypress run --env notebook=cy.viewport('macbook-11')
  Cypress.env("мобильник");
  Cypress.env("notebook");
  Cypress.env();
  cy.visit("http://localhost:3000");
  cy.login("test@test.com", "test");
});
describe("add books ", () => {
  it("Should add to favorite", () => {
    Cypress.env("мобильник");
    Cypress.env("notebook");
    Cypress.env();
    cy.newBook("Незнайка", "Незнайка", "Незнайка");
    cy.contains("Favorites").click();
    cy.contains("Незнайка").should("be.visible");
    cy.url().should("eq", "http://localhost:3000/favorites");
  });

  it("Should add to favorite and download", () => {
    Cypress.env("мобильник");
    Cypress.env("notebook");
    Cypress.env();
    cy.newBook("букварь", "букварь", "Толстой");
    cy.contains("букварь").click();
    cy.contains("Dowload book").should("be.visible");
  });

  it("Should delete and add ", () => {
    Cypress.env("мобильник");
    Cypress.env("notebook");
    Cypress.env();
    cy.contains("Favorites").click();
    cy.contains("Delete from favorite").should("be.visible");
    cy.contains("Delete from favorite").click();
    cy.contains("Books list").click();
    cy.contains("Add to favorite").should("be.visible");
  });
});
