describe("App", () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })
  it("Should display cart when user clicks cart icon", () => {
    cy.findByTestId('cart-icon').click()
    cy.findByTestId('cart').should('have.class', 'cart--show')
  })
})