# NINJA HERO

# Description

NinjaHero is a multidirectional game, where the main objective is to obtain jade stones in order to have a shield and go as far as possible. You have 3 lives to try.

# DOM AND CANVAS

- Game has one hero and three types of enemys.
- The enemys can kill you if they can touch you 3 times.
- Enemies appear randomly from the right of the screen.
- Death of the hero is Game Over.
- 4 screens.

# Main Functionalities

- The player will have to avoid obstacles by pressing up, down, right and left buttons.
- Obstacles will be appearing from the right side of the screen and will move to the left until they leave the canvas.
- Every 6 Jades or 30 points added to the counter, you will get a temporal shield and your enemys will increase speed.

# Backlog

- Number of lives.
- Animated characters.
- Add sound and music.
- Add video.
- Difficulty incremented with more score.
- Shield skill in middle air.
- Enemies movement randomly.

# Proyect Structure

## main.js

- Canvas
- Dom
- Music
- Video

Fuction:

- videoIntro()
- startGame()

Player MOVE

- Keypress

Add Event

- Key
- Buttons

## game.js

- Class Game
- this.appearsJade();
- this.addNewDamage();
- this.addDifficult();
- this.jadeCollision();
- this.shieldActivation();
- this.gameOverCollision();

## ninja.js

- class Ninja
- rawNinja
- upNinja
- downNinja
- leftNinja
- rigthNinja

## jade.js

- class Jade
- drawJade
- moveJade

## damage.js

- class damage
- drawDamage
- moveDamage

## lives.js

- class lives
- drawLives

# States and Transitions

- introScreen
- videoIntro
- gameScreen (my-canvas)
- gameOver&Retry Screen
