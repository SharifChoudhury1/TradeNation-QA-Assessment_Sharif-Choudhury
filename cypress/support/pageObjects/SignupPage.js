class SignupPage {
  clickSignupButton() {
    cy.get('a[href="https://tradenation.com/signup/welcome"]')
      .first() // Click the first matching element
      .should("be.visible") // Ensure it is visible
      .click(); // Perform the click
  }

  enterEmail(email) {
    cy.get("#email").clear().type(email); // Targets the email input
  }

  enterPassword(password) {
    cy.get("#password").clear().type(password); // Targets the password input
  }

  getEmailError() {
    return cy.get(".MuiFormHelperText-root"); //Targets the Email Errors
  }

  getPasswordError() {
    //Targets the Password Errors
    return cy.get(
      "[data-test-id='passwordTextfield'] .css-11a3qtn .MuiFormHelperText-root"
    );
  }

  handleCookies() {
    // Handles the cookie modal if it appears
    cy.get("#onetrust-accept-btn-handler", { timeout: 5000 })
      .should("be.visible")
      .click();
  }
}

module.exports = new SignupPage();
