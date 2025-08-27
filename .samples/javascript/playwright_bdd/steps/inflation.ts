import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';

Given('I have savings of {string} CZK', async ( {world} , savings) => {
  world.savings = savings;
});

Given('the inflation rate is {string} percent', async ( {world} , inflation) => {
  world.inflation = inflation;
});

Given('I keep them {string} years', async ( {world} , years) => {
  world.years = years;
})

When('I calculate the impact of inflation on my savings', async ( {world}) => {
  await world.page.goto('https://www.csas.cz/cs/osobni-finance/investovani?calculation=inflation');
  await world.page.getByRole('button', { name: 'Souhlasit s cookies a pokrač' }).click();
  await world.page.getByTestId('RAemInvestmentCalculator--savings-value-input--input').fill(world.savings);
  await world.page.getByTestId('RAemInvestmentCalculator--years-input--input').fill(world.years);
  await world.page.getByTestId('RAemInvestmentCalculator--inflation-input--input').fill(world.inflation);
});

Then('value of my savings after all those years is {string}', async ( {world} , result) => {
  const actual = await world.page.getByTestId("RAemInvestmentCalculator--result-savings-after");
  actual.click();  // have the value recalculated 
  await world.page.waitForTimeout(1000);
  let resultText = await actual.textContent(); 
  resultText = resultText?.replace(/\u00A0/g, ''); // Remove non-breaking spaces
  expect(resultText?.trim()).toContain(result);
});