const { v4: uuidv4 } = require("uuid");

describe("Testing basic validation", () => {
  it("Visits D3A.io website", () => {
    cy.visit("https://www.d3a.io/login");
    cy.findByRole("textbox", { name: /email/i }).type("mp.shebbar@gmail.com");
    cy.findByLabelText(/password/i).type("johndoe123");
    cy.findByRole("button", { name: /login/i }).click();
    cy.wait(10000);

    cy.get(
      ":nth-child(2) > .side-nav__main__item__icon > :nth-child(1) > button"
    ).click();
    cy.findByRole("button", { name: /new project/i }).click();
    cy.wait(2000);

    const projectName = uuidv4().substring(0, 20);

    cy.findByRole("textbox", { name: /name/i }).type(`Proj - ${projectName}`);
    cy.findByRole("textbox", { name: /description/i }).type(
      `New projected added ${projectName}`
    );
    cy.findByRole("button", { name: /add/i }).click();

    cy.wait(2000);

    cy.findByText(`Proj - ${projectName}`).should("be.visible");
    cy.findByText(`New projected added ${projectName}`).should("be.visible");

    cy.get(
      ":nth-child(1) > .ConfigurationListHeadWrapper > .saved-project__headline > .saved-project__headline__name > .saved-project__headline__name__text"
    ).click();
    cy.wait(2000);

    cy.findByRole("button", { name: /new simulation/i }).click();
    cy.wait(2000);

    cy.findByText(/next/i).click();
    cy.wait(2000);

    cy.get(
      ":nth-child(2) > .side-nav__main__item__icon > :nth-child(1) > button"
    ).click();
    cy.wait(2000);

    cy.findByText(`default simulation`).should("be.visible");
    cy.wait(2000);
  });
});
