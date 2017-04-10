# Simon

## Setup

1. Fork then clone the repo
1. Run `npm install`
1. Run `npm start`

## Rules

<style>
td {
    outline:1px solid black;
}
div.hist {
    display: inline-block;
    width: 24px;
    height: 24px;
}
</style>

<table>
    <tr>
        <td style="background:red">Red</td>
        <td style="background:yellow">Yellow</td>
    </tr>
    <tr>
        <td style="background:blue">Blue</td>
        <td style="background:green">Green</td>
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
        - <div class="hist" style="background: red">&nbsp;</div><div class="hist" style="background: green">&nbsp;</div><div class="hist" style="background: blue">&nbsp;</div><div class="hist" style="background: red">&nbsp;</div><div class="hist" style="background: yellow">&nbsp;</div><div class="hist" style="background: blue">&nbsp;</div>
 - keep track of wins/losses for player 1 / player 2
 - show highscores


