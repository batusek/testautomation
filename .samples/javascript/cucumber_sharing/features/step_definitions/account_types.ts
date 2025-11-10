import { Given, When, Then } from '@cucumber/cucumber';
import * as assert from 'assert';

// --- Shared Global State (The "Database") ---
const accountProducts: { id: string; name: string }[] = [];
const userAccountBalances: Map<string, number> = new Map();
let currentUser: string;

// --- SHARED STEPS IMPLEMENTATIONS ---

// Initialize the shared database structure
Given('the banking system has initialized core account product types', function () {
  accountProducts.push(
    { id: 'CUR', name: 'Current' },
    { id: 'CHK', name: 'Checking' },
    { id: 'SAV', name: 'Savings' },
  );
});

// Authentication Step (Shared across scenarios)
Given('{string} is logged in with credentials {string}', function (username: string, password: string) {
  currentUser = username;
  console.log(`Mock: User '${currentUser}' authenticated successfully.`);
});


// --- Scenario 1 Steps (Balance Check) ---

Given('{string} has a {string} account with a balance of {float}', function (user: string, accountName: string, balance: number) {
  if (user !== currentUser) throw new Error('Cannot set balance for unauthenticated user.');
  
  // Create a unique key for the user's account
  const accountKey = `${user}-${accountName}`;
  userAccountBalances.set(accountKey, balance);
  console.log(`Setup: ${accountName} balance set to ${balance}`);
});

When('{string} checks the {string} account balance', function (user: string, accountName: string) {
  // Mocking the action of checking the balance
  this.accountToCheck = `${user}-${accountName}`;
});

Then('the displayed balance should be {string}', function (expectedBalanceString: string) {
  const accountBalance = userAccountBalances.get(this.accountToCheck);
  
  // Formatting for comparison
  const actualBalanceString = `$${accountBalance?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  
  assert.strictEqual(actualBalanceString, expectedBalanceString, 
    `Expected balance to be ${expectedBalanceString} but found ${actualBalanceString}`);
});

// --- Scenario 2 Steps (Funds Transfer) ---

When('{string} transfers {float} from {string} to {string}', function (user: string, amount: number, sourceAccountName: string, targetAccountName: string) {
  const sourceKey = `${user}-${sourceAccountName}`;
  const targetKey = `${user}-${targetAccountName}`;

  let sourceBalance = userAccountBalances.get(sourceKey) || 0;
  let targetBalance = userAccountBalances.get(targetKey) || 0;

  if (sourceBalance < amount) throw new Error('Insufficient funds for transfer.');

  // Perform transfer
  sourceBalance -= amount;
  targetBalance += amount;

  // Update mock balances
  userAccountBalances.set(sourceKey, sourceBalance);
  userAccountBalances.set(targetKey, targetBalance);
});

Then('the {string} account balance should be {float}', function (accountName: string, expectedBalance: number) {
  const accountKey = `${currentUser}-${accountName}`;
  const actualBalance = userAccountBalances.get(accountKey);
  
  assert.strictEqual(actualBalance, expectedBalance, 
    `Expected ${accountName} balance to be ${expectedBalance} but was ${actualBalance}`);
});