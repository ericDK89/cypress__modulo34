describe("Test for contact book", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/")
  })

  it("should be able to include a new contact", () => {
    cy.get("input[type='text']").type("Eric Macedo")
    cy.get("input[type='email']").type("eric@gmail.com")
    cy.get("input[type='tel']").type("123456789")

    cy.get("button[type='submit']").click()

    cy.get(".contato").should("have.length.at.least", 1)
  })

  it("should be able to change a contact information", () => {
    cy.get(".contato").should("have.length.at.least", 1)

    const newText = "Teste"

    cy.get('.edit').first().click()
    cy.get("input[type='text']").clear().type(newText)
    cy.get('.alterar').click()

    cy.get('.sc-dmqHEX > .sc-eDDNvR > li').first().should("exist").should("contain", "Teste")
  })

  it("should be able to delete a contact", () => {
    cy.get(".contato").should("have.length.at.least", 1)

    const itemToDelete = "Teste"

    cy.get('.delete').first().click()
    cy.get('.sc-beqWaB').should("not.contain", itemToDelete)
  })
})