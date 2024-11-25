import SignupPage from "../support/pageObjects/SignupPage";

describe("Invalid Signup Test", () => {
  beforeEach(() => {
    cy.visit("/en-gb/"); // Visit the base URL
    SignupPage.handleCookies(); // Accept cookies if the modal appears
    SignupPage.clickSignupButton(); // Navigate to the signup page
  });

  it("should display an error for an invalid email address", () => {
    // Enters an invalid email and checks for the error message
    SignupPage.enterEmail("invalid-email");
    SignupPage.getEmailError()
      .should("be.visible") // Ensures the error message is visible
      .and("contain", "Wrong email format"); // Asserts the error message content
  });

  it("should display password requirement errors for an invalid password", () => {
    SignupPage.enterEmail("validemail@example.com"); // Enters a valid email
    SignupPage.enterPassword("short"); // Enters an invalid password

    // List of expected error messages
    const expectedErrors = [
      "Must have at least 8 characters",
      "Must contain upper and lower case characters",
      "Must contain a number and a symbol",
    ];

    // Assert all errors dynamically
    SignupPage.getPasswordError().each(($el, index) => {
      cy.wrap($el).should("be.visible").and("contain", expectedErrors[index]);
    });
  });
});
