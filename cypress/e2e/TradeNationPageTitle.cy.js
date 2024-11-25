import TradeNationPage from "../support/pageObjects/TradeNationPage";

describe("Trade Nation Page Title Test", () => {
  beforeEach(() => {
    // Step 1: Visit the markets page
    TradeNationPage.visitMarkets({ failOnStatusCode: false });

    // Step 2: Handle the cookie modal
    TradeNationPage.handleCookies();
  });

  it("should confirm the page title after clicking the trade nation logo", () => {
    cy.wait(2000); // Wait for the page to load

    // Step 3: Click the logo to navigate to the homepage
    TradeNationPage.clickLogo();

    // Step 4: Assert the page title after returning to the homepage
    TradeNationPage.getPageTitle().then((title) => {
      cy.log(`Page Title: ${title}`); // Log the title for debugging

      expect(title).to.equal(
        "Trade Nation UK – Low-Cost Spread Betting and Forex Broker"
      ); // Assert the page title matches the homepage
    });
  });
});
