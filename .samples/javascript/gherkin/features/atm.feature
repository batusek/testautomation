Feature: ATM withdrawal

    Define ATM behavior with respect to the use account balance and card limits.

    # After start

    Scenario: Successful withdrawal
        Given the account balance is 100
        And the card limit is 50
        When I withdraw 50
        Then the account balance should be 50

    Scenario: Withdrawal exceeds card limit
        Given the account balance is 100
        And the card limit is 50
        When I withdraw 60
        Then the ATM should display an error message "Withdrawal exceeds card limit"
        And the account balance should remain 100

    Scenario: Withdrawal exceeds account balance
        Given the account balance is 100    
        And the card limit is 50
        When I withdraw 120
        Then the ATM should display an error message "Withdrawal exceeds account balance"

    # After end