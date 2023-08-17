beforeEach(() => {
  cy.visit("http://localhost:3000");
  cy.login("test@test.com", "test");
});
describe("add books ", () => {
  it("Should add to favorite", () => {
    cy.newBook("Незнайка", "Незнайка", "Незнайка");
    cy.contains("Favorites").click();
    cy.contains("Незнайка").should("be.visible");
    cy.url().should("eq", "http://localhost:3000/favorites");
  });

  it("Should add to favorite and download", () => {
    cy.newBook("букварь", "букварь", "Толстой");
    cy.contains("букварь").click();
    cy.contains("Dowload book").should("be.visible");
  });

  it("Should delete and add ", () => {
    cy.contains("Favorites").click();
    cy.contains("Delete from favorite").should("be.visible");
    cy.contains("Delete from favorite").click();
    cy.contains("Books list").click();
    cy.contains("Add to favorite").should("be.visible");
  });
});
