Feature: Football rules

Background: Current Match State
    Given the game is in progress

    Scenario: Scoring a goal
        Given the game is in progress
        When a player scores a goal
        Then the score should be updated
    
    Scenario Outline: Scoring goals
        Given the game is in progress
        When "<team>" scores
        Then the score should be "<expected_score>"
    
    Examples:
        | team   | expected_score |
        | Team A |  1:0           |
        | Team B |  1:1           |
        | Team A |  2:1           |

    Scenario: Offside Decision
        Given the game is in progress
        And a player is in an offside position
        When a teammate passes the ball to that player
        And the player touches the ball
        Then the referee should blow the whistle
        But the goal should not be counted
            

Scenario: Player receives a Yellow Card for a Foul
    Given the match is in progress
    And the ball is in play near midfield
    When a defender commits a serious foul
    Then the defender should be shown a yellow card

Scenario: Substitution Due to Injury
    Given the match is in progress
    And the ball is out of play
    When a player signals for medical attention due to injury
    Then the referee should allow a substitution

