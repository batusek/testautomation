import { test, expect } from '@playwright/test';

test('get rid of cookies', async( { page}) => {
  await page.goto('https://www.csas.cz/cs/osobni-finance/investovani?calculation=inflation');
  await page.getByRole('button', { name: 'Souhlasím a pokračovat' }).click();
  await page.getByTestId('RAemInvestmentCalculator--savings-value-input--input').fill('10000');
  await page.getByTestId('RAemInvestmentCalculator--result-savings-after').click();

  const result = await page.getByTestId("RAemInvestmentCalculator--result-savings-after");
  const resultText = await result.textContent(); 
  console.log(resultText); 
  expect(resultText?.trim()).toContain("8\u00A0626 Kč");
});

