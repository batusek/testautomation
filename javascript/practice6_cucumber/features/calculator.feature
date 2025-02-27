Feature: Basic Calculator

  Scenario Outline: Adding two numbers
    Given the calculator is open
    When I enter "<arg1>" and "<operator>" and "<arg2>"
    Then the result should be "<answer>"

  Examples:
    | arg1      | operator | arg2 | answer |
    | 5         | +        |   3  |  8   |
    | 5         | -        |   3  |  2   |
    | 5         | *        |   3  |  15   |
    | 6         | /        |   3  |  2   |
