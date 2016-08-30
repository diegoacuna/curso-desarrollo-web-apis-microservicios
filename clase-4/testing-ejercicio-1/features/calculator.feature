Feature: Calculate Things

  Scenario: using the plus button in the calculator
    When I press the number 7
    And the "plus" button
    And the number 8
    Then I should see 15