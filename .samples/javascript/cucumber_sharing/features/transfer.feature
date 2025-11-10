Feature: Funds Transfer
In order to manage my money efficiently
I want to move funds between my accounts

Background: System Preconditions
# This complex step initializes the global list of account types (e.g., Checking, Savings)
Given the banking system has initialized core account product types
And "John Smith" is logged in with credentials "john_pass456"

Scenario: Successfully transfer $200 from Savings to Current
Given "John Smith" has a "Savings" account with a balance of 800.00
And "John Smith" has a "Current" account with a balance of 500.00
When "John Smith" transfers 200.00 from "Savings" to "Current"
Then the "Savings" account balance should be 600.00
And the "Current" account balance should be 700.00