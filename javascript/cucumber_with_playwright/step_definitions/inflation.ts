import { Before, After, Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I have savings of {string} CZK', function (savings) {
  this.savings = savings;
});

Given('the inflation rate is {string} percent', function (inflation) {
  this.inflation = inflation;
});

Given('I keep them {string} years', function (years) {
    this.years = years;
})

When('I calculate the impact of inflation on my savings', async function () {
    await this.page.goto('https://www.csas.cz/cs/osobni-finance/investovani?calculation=inflation');
    await this.page.getByRole('button', { name: 'Souhlasím a pokračovat' }).click();
    await this.page.getByTestId('RAemInvestmentCalculator--savings-value-input--input').fill(this.savings);
    await this.page.getByTestId('RAemInvestmentCalculator--years-input--input').fill(this.years);
    await this.page.getByTestId('RAemInvestmentCalculator--inflation-input--input').fill(this.inflation);
});

Then('value of my savings after all those years is {string}', async function (result) {
  const actual = await this.page.getByTestId("RAemInvestmentCalculator--result-savings-after");
  actual.click();
  await this.page.waitForTimeout(5000);
  let resultText = await actual.textContent(); 
  resultText = resultText?.replace(/\u00A0/g, ''); // Remove non-breaking spaces
  expect(resultText?.trim()).toContain(result);
});