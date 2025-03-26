Feature: Basic Calculator

  Scenario: Adding two numbers
    Given the calculator is open
    When I enter "5" and "+" and "3"
    Then the result should be "8"



