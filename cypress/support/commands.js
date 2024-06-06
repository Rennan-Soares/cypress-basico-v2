Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Rennan')
    cy.get('#lastName').type('QA')
    cy.get('#email').type('rennanqa@qa.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})