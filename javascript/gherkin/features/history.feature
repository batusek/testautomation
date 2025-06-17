Feature: Account Transaction History

  As a bank customer
  I want to view and filter my transaction history
  So that I can monitor my financial activity

  Background: Account Setup with Comprehensive Transactions
    Given I am logged in to my online banking portal
    And my account contains the following historical transactions:
      | Date       | Amount | Type   | Description           |
      | 2024-06-15 | 50.00  | Debit  | Coffee Shop           |
      | 2024-06-14 | 1500.00| Credit | Monthly Salary Deposit|
      | 2024-06-12 | 75.00  | Debit  | Streaming Service     |
      | 2024-06-10 | 20.00  | Debit  | Bus Fare              |
      | 2024-05-28 | 120.00 | Debit  | Restaurant Dinner     |
      | 2024-05-25 | 500.00 | Credit | Freelance Payment     |
      | 2024-05-20 | 30.00  | Debit  | Weekly Groceries      |
      | 2024-04-18 | 250.00 | Debit  | Electricity Bill      |
      | 2024-04-10 | 1000.00| Credit | Performance Bonus     |
      | 2024-04-05 | 10.00  | Debit  | Snack Vending Machine |


  Scenario: Filter transactions by specific month (May 2024)

  Scenario: Filter transactions by type (Credits only)

  Scenario: Filter transactions by amount range ($50.00 to $150.00)
