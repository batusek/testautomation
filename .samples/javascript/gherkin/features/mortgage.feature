Feature: Předčasné splacení hypotéky

    Pravidla pro splácení hypotéky
    - pokud byla hypotéka sjednána před 1.6.2014, neplatí se žádné poplatky za předčasné splacení
    - pokud byla hypotéka sjednána mezi 1.6.2014 a 1.6.2024, platí se poplatek 700 Kč
    - pokud byla hypotéka sjednána po 1.6.2024, tak záleží na délce fixace
    - pokud je zbývající fixace kratší než 1 rok, platí se poplatek 0,25% z předčasně splacené částky
    - pokud je zbývající fixace mezi 1 a 3 lety, platí se poplatek 0,5% z předčasně splacené částky
    - pokud je zbývající fixace delší než 3 roky, platí se poplatek 1% z předčasně splacené částky
    - maximální poplatek za předčasné splacení hypotéky je 1000 Kč
    - zaměstnanci banky neplatí žádné poplatky za předčasné splacení hypotéky

  Background: Společné nastavení hypotéky
    Given Mám hypotéku s následujícími parametry:
      | Balance  | Interest Rate |
      |  200000  | 3.5%          |

  # After start
  Scenario: Před rokem 2014 bez poplatku
    Given Mám hypotéku sjednanou 1.2.2014
    When Chci předčasně splatit "100000"
    Then Poplatek za předčasné splacení bude "0" Kč
    And Zbývající částka je "100000"

  Scenario: Poplatky po roce 2014
    Given Mám hypotéku sjednanou 1.2.2015
    When Chci předčasně splatit "100000"
    Then Poplatek za předčasné splacení bude "700" Kč
    And Zbývající částka je "100000"

  Scenario: Poplatky po roce 2024
    Given Mám hypotéku sjednanou 1.2.2025
    And Zbývající fixace je 6 měsíců
    When Chci předčasně splatit "100000"
    Then Poplatek za předčasné splacení bude "250" Kč
    And Zbývající částka je "100000"

  Scenario: Poplatky po roce 2024
    Given Mám hypotéku sjednanou 1.2.2025
    And Zbývající fixace je 14 měsíců
    When Chci předčasně splatit "100000"
    Then Poplatek za předčasné splacení bude "500" Kč
    And Zbývající částka je "100000"

  Scenario: Poplatky po roce 2024
    Given Mám hypotéku sjednanou 1.2.2025
    And Zbývající fixace je 46 měsíců
    When Chci předčasně splatit "100000"
    Then Poplatek za předčasné splacení bude "1000" Kč
    And Zbývající částka je "100000"

  Scenario: Poplatky po roce 2024
    Given Mám hypotéku sjednanou 1.2.2025
    And Zbývající fixace je 46 měsíců
    When Chci předčasně splatit "150000"
    Then Poplatek za předčasné splacení bude "1000" Kč
    And Zbývající částka je "50000"
  # After end