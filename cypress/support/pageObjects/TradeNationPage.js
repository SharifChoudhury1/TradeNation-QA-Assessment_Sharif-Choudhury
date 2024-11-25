class TradeNationPage {
  visitMarkets(options = {}) {
    cy.visit("/en-gb/markets/#forex", options); // Navigates to the markets page
  }

  handleCookies() {
    // Handles the cookie modal if it appears
    cy.get("#onetrust-accept-btn-handler", { timeout: 5000 })
      .should("be.visible")
      .click(); // Click the "Accept Cookies" button
  }

  clickLogo() {
    // The Trade Nation logo becomes visible and clickable
    cy.get(".gtm_header_logo").should("be.visible").click();
  }

  getPageTitle() {
    // This returns the current page title after the logo is clicked
    return cy.title();
  }
}

module.exports = new TradeNationPage();
