Feature: Account Balance Check
In order to view my primary accounts
As an authenticated bank customer
I want to check my current balance details

Background: System Preconditions
# This complex step initializes the global list of account types (e.g., Checking, Savings)
Given the banking system has initialized core account product types
And "Jane Doe" is logged in with credentials "jane_pass123"


Scenario: Verify balance of a Checking account
Given "Jane Doe" has a "Checking" account with a balance of 1500.50
When "Jane Doe" checks the "Checking" account balance
Then the displayed balance should be "$1,500.50"