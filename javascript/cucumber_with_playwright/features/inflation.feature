Feature: Inflation impact to my savings

  Scenario Outline: Test inflation calculation with boundary values  
    Given I have savings of "<savings>" CZK
    And the inflation rate is "<inflation>" percent
    And I keep them "<years>" years
    When I calculate the impact of inflation on my savings
    Then value of my savings after all those years is "<result>"

    Examples:
      | savings | inflation | years | result |
      | 10000    | 0         | 1     | 10000   |
      | 10000    | 1         | 1     | 9901    |
      | 1000     | 1         | 1     | 9901    |
