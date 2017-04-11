# Simon

## Setup

1. Fork then clone the repo
1. Run `npm install`
1. Run `npm start`

## Rules

<table>
    <tr>
        <td >Red</td>
        <td >Yellow</td>
    </tr>
    <tr>
        <td >Blue</td>
        <td >Green</td>
    </tr>
</table>

2 players alternate turns.  When it is each player's turn, they must click the pattern that the last player clicked, and then add a new color.  The first player to mess up the pattern looses.

ex:

```
1: R
2: RG
1: RGB
2: RGBR
1: RGBRY
2: RGBRYG
1: RGBG  #PLAYER 1 LOST!
```

### Challenge 1

 - create the colored boxes in grid
 - show current player
 - when box is pressed
    - alternate player
    - display the last pressed color

### Challenge 2
 - players enter their names
 - player doesn't alternate until they've finished pattern (and added to pattern)
 - player loses if incorrectly clicked pattern
 
### Challenge 3
 - when player loses
    - show option to reset game
    - show the game history
        - RED
        - YELLOW
        - BLUE
        - BLUE
        - RED
        - GREEN
 - keep track of wins/losses for player 1 / player 2
 - show highscores


