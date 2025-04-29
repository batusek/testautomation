import { test, expect } from '@playwright/test';

test('get rid of cookies', async( { page}) => {
  await page.goto('https://www.csas.cz/cs/osobni-finance/investovani?calculation=inflation');
  await page.getByRole('button', { name: 'Souhlasím a pokračovat' }).click();
  await page.getByTestId('RAemInvestmentCalculator--savings-value-input--input').fill('10000');
  await page.getByTestId('RAemInvestmentCalculator--years-input--input').fill('1');
  await page.getByTestId('RAemInvestmentCalculator--inflation-input--input').fill('0');
  await page.getByTestId('RAemInvestmentCalculator--result-savings-after').click();

  const result = await page.getByTestId("RAemInvestmentCalculator--result-savings-after");
  let resultText = await result.textContent(); 
  resultText = resultText?.replace(/\u00A0/g, ''); // Remove non-breaking spaces
  expect(resultText?.trim()).toContain("8626 Kč");
});

