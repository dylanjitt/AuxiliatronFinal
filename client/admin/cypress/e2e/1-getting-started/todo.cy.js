/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:5173/')
  })

  it('sumar 1+1', () => {
    const b1 = cy.contains("1")
    b1.click();
    cy.contains("+").click();
    b1.click();

    cy.contains("=").click();

    cy.get('[title="result"]').should("have.text", "2");
  })

  it('sumar 1+2', () => {
    const b1 = cy.contains("1")
    const b2 = cy.contains("2")
    b1.click();
    cy.contains("+").click();
    b2.click();

    cy.contains("=").click();

    cy.get('[title="result"]').should("have.text", "3");
  })

  it('sumas con decimales', () => {
    const b1 = cy.contains("1")
    const b5 = cy.contains("5")
    const b3 = cy.contains("3")
    const b7 = cy.contains("7")
    const dot = cy.contains(".")
    const plus = cy.contains("+")
    const eq = cy.contains("=")

    b1.click();
    dot.click();
    b5.click();

    plus.click();

    b3.click();
    dot.click();
    b7.click();
    b5.click();

    eq.click();
    

    cy.get('[title="result"]').should("contain.text", "5.25");
  })

  it('numeros Negativos', () => {
    const b4 = cy.contains("4")
    const b5 = cy.contains("5")
    const b6 = cy.contains("6")
    const b7 = cy.contains("7")
    const b9 = cy.contains("9")
    const min = cy.contains("-")
    const plus = cy.contains("+")
    const eq = cy.contains("=")

    b6.click()
    b9.click()

    plus.click();

    min.click()
    b7.click()
    b5.click()
    b4.click()

    eq.click();
    

    cy.get('[title="result"]').should("have.text", "-685");
  })
  
})
