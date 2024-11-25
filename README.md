# Trade Nation Cypress QA Assessment by Sharif Choudhury

## Description

This repository contains Cypress test cases for the Trade Nation website app, including:

- Verifying the page title after the "Trade Nation" logo is clicked on.
- Validating signup form error messages for invalid inputs on the email and password.

## Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js (https://nodejs.org/)

## Installation Instructions

1. **Clone the Repository**:

   Clone the repository to your local system:

   git clone "repo url"

   Replace "repo url" with the actual repository link.

   git clone https://github.com/YourUsername/TradeNation-QA-Assessment.git

2. **Navigate into the Project Folder**:

   Navigate into the Project Folder: Use the cd command to move into the folder where the project was cloned:

   cd TradeNation-QA-Assessment

   The cd command changes the current working directory to the TradeNation-QA-Assessment folder.

   This folder contains all the files and configurations needed for the project.

3. **Confirm You’re in the Correct Directory: To ensure you’re in the correct folder, type:**

   pwd

   This will print the current directory path. For example:

   /Users/YourName/TradeNation-QA-Assessment

4. **Install Dependencies: Install all required dependencies using npm:**

   npm install

   This command will install Cypress and any other required packages listed in the package.json file.

5. **Install Cypress (if not installed):**

   Install Cypress (if not installed): Cypress will be installed automatically via npm install.

   However, if you encounter issues, you can install it manually:

   npm install cypress --save-dev

## Running the Tests

You can run the tests in Headless Mode (no UI) or with the Cypress Test Runner (with UI):

1. **Run Tests in Headless Mode**

   Run the following command:

   npx cypress run

   This will execute all test cases in a headless browser (no UI).

   The test results will be printed in the terminal.

2. **Open Cypress Test Runner**

   Run the following command:
   npx cypress open

   This will open the interactive Cypress Test Runner.

   Select the test file you want to run:

   InvalidSignup.cy.js (Signup form tests)
   TradeNationPageTitle.cy.js (Page title verification tests)
