Feature: Autorizace bezhotovostní transakce

Background:
    Given jsem v Georgi ve správě účtu
    And klient má na účtu 2000000 Kč

Scenario Outline: Odesílám peníze na cizí účet
    When Autorizuji operaci v režimu "<režim>"
    And částka transakce je "<částka>"
    Then transakce "<způsob>"

Examples:
|režim            |částka|          |způsob                     ______________________________________
|přítomen         |750000          |bude provedena bankéřem|
|přítomen         |1150000         |bude provedena bankéřem s asistencí|
|vzdáleně         |650000          |bude provedena bankéřem|
|vzdáleně         |1650000         |bude provedena bankéřem s asistencí|
|klient sám       |100000          |bude provedena klientem|
|klient sám       |11000000       |nebude povolena bez asistence na pobočce|