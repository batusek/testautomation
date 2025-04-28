Feature: Changing bank statement

  Scenario: Changing from post to email
    Given I have received statement by "post"
    When I change the statement from "post" to "email"
    Then the statement should be sent by "email"

