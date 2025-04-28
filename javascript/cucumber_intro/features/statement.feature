Feature: Changing bank statement

Background: 
  Statement distribution types are IB (internet banking), post, email. We want to encourage customers to move to the online modes of statement distribution (IB or email).

  Scenario: Changing from post to email
    Given account with statement distribution by "post"
    When I change the distribution to "email"
    Then the statement should be sent by "email"


  # After start
  Scenario Outline: Change statement distribution 
    Given account with statement distribution by "<oldMode>"
    When I change the distribution to "<newMode>"
    Then the statement should be sent by "<result>"
    And error message is "<error>"

    Examples:
        | oldMode | newMode | result  | error |
        | IB      | email   | email   |       |
        | email   | IB      | IB      |       |
        | post    | IB      | IB      |       |
        | post    | email   | email   |       |      
        | IB      | post    | IB      | change not possible |
        | email   | post    | email   | change not possible |
        | post    | post    | post    |       |
        | IB      | IB      | IB      |       |
        | email   | email   | email   |       |
    #After end