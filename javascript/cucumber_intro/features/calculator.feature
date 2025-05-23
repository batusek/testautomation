Feature: Basic Calculator

  Scenario: Adding two numbers
    Given the calculator is open
    When I enter "5" and "+" and "3"
    Then the result should be "8"

  Scenario Outline: Adding two numbers general
    Given the calculator is open
    When I enter "<arg1>" and "<operator>" and "<arg2>"
    Then the result should be "<answer>"

  Examples:
    | arg1      | operator | arg2 | answer |
    | 6         | +        |   3  |  9   |
    | 5         | -        |   3  |  2   |
    | 5         | *        |   3  |  15   |
    | 6         | /        |   3  |  2   |



