describe("App", () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })
  it("Testing...", () => {
    cy.findByTestId('cart-icon').click()
  })
})