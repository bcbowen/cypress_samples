Feature: End to End ecomm validation

  app regression sample

  Scenario: Ecomm products delivery
    Given I open ecomm page
    When I add items to cart
    And Validate the total prices
    Then Select country, submit and verify thanks dude