Feature: Řízení výkonu na skupině nabíječek

  Scenario Outline: Testování maximálního výkonu nabíječek
    Given Nabíječka je připojena k síti s kapacitou "<síťový_výkon>" kW
    And Počet připojených vozidel je "<počet_vozidel>"
    When Každé vozidlo požaduje maximální výkon
    Then Každé vozidlo obdrží výkon "<výkon_vozidla>" kW

    Examples:
      | síťový_výkon | počet_vozidel | výkon_vozidla |
      | 50           | 1             | 50            |
      | 50           | 2             | 25            |
      | 50           | 4             | 12            |
