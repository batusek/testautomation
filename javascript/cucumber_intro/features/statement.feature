Feature: Changing bank statement

Background: 
  Statement distribution types are IB (internet banking), post, email. We want to encourage customers to move to the online modes of statement distribution (IB or email).

  Scenario: Changing from post to email
    Given account with statement distribution by "post"
    When I change the distribution to "email"
    Then the statement should be sent by "email"


