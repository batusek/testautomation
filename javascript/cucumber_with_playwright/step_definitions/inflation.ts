import { Before, After, Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I have savings of {string} CZK', function (savings) {
  this.savings = savings;
});

Given('the inflation rate is {string} percent', function (inflation) {
  this.inflation = inflation;
});

Given('I keep them {int} years', function (years) {
    this.years = years;
})

When('I calculate the impact of inflation on my savings', async function () {
    await this.page.goto('https://www.csas.cz/cs/osobni-finance/investovani?calculation=inflation');
    await this.page.fill('[data-testid="RAemInvestmentCalculator--savings-value-input--input"]', this.savings);
    await this.page.fill('[data-testid="RAemInvestmentCalculator--years-input--input"]', this.years);
    await this.page.fill('[data-testid="RAemInvestmentCalculator--inflation-input--input"]', this.years);
   
});

Then('value of my savings after all those years is {string}', async function (result) {
  const actualResult = await this.page.textContent('[data-testid="RAemInvestmentCalculator--result-savings-after"]');
  expect(actualResult?.trim()).toBe(result);
});