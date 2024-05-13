# TDD -> BDD
# gherkin - 3 friends
# given | when | Then
# unitário, integração, e2e

Feature: Manager Users

  Scenario: Register a new user
    Given a new user called "john"
    And with email "john@gmail.com"
    And with the password "jonh123"
    When the data is submit
    Then a new user "john" should be registred in the system.
