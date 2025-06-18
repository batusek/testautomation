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

