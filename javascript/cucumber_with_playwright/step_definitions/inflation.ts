import { Before, After, Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I have savings of {string} CZK', function (savings) {
  this.savings = savings;
});

Given('the inflation rate is {string} percent', function (inflation) {
  // TODO: not implemented
});

Given('I keep them {string} years', function (years) {
  // TODO: not implemented
})

When('I calculate the impact of inflation on my savings', async function () {7
  // TODO: not implemented
});

Then('value of my savings after all those years is {string}', async function (result) {
  // TODO: not implemented
});