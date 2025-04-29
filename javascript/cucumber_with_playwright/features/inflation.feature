Feature: Inflaction impact to my savings

  Scenario Outline: Test inflation calculation with boundary values  
    Given I have savings of "<savings>" CZK
    And the inflation rate is "<inflation>" percent
    And I keep them <years> years
    When I calculate the impact of inflation on my savings
    Then value of my savings after all those years is "<result>"

    Examples:
      | savings | inflation | years | result |
      | 1000    | 0         | 1     | 1000   |
#      | 1000    | 0         | 10    | 1000   |
      | 1000    | 1         | 1     | 990    |
#      | 1000    | 1         | 10    | 905.73 |
#      | 1000    | 2         | 1     | 980.39 |
#      | 1000    | 2         | 10    | 817.07 |