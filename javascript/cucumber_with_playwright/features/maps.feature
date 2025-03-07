Feature: Open street maps

  Scenario: Map visible in the windows
    Given the map page is open
    When I inspect the content
    Then map container is visible

