SkillEra Playwright End-to-End (E2E) Automation Testing

This project is built using Playwright to perform End-to-End (E2E) testing of a SkillEra web application.

The framework tests:
-Trainer login functionality
- Dashboard navigation
- Training session creation
- Logout finctionality

Tech Stack used:
- Node. js
- Playwright
- JavaScript (ES6)
- Github action (CI/CD)
- Chromium

Main features:
- Automated UI testing
- End-to-End user flow validation
- CI/CD integration using Github Actions

Folder Structure
Trainer/
trainer.spec.js
Playwright.config.js

Installations step
- npm install
- npx playwright install

To run the test
- To run all tests
  npx playwright test
- To run in headed mode (local only)
  npx playwright test --headed
-To run specific test
npx playwright test Trainer/trainer.spec.js

To view report:
- npx playwright show-report
