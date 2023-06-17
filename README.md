# Tic Tac Toe

![grab-landing-page](https://github.com/elShailee/Tic-Tac-Toe/blob/master/docs/gameplay.png)

## Description

This is a classic Tic Tac Toe game created by me at the end of 2021, to practice and display my skills in ReactJS and NodeJS.<br />
The game is a web application which allows users to play against each other, either on the same device or online.<br />
This game was previously deployed on AWS for about a year using an EC2 instance with NGINX as reverse proxy, automated by GitHub Actions.<br />

### Multiplayer

![grab-landing-page](https://github.com/elShailee/Tic-Tac-Toe/blob/master/docs/Homescreen.png)

The multiplayer mode works by saving all online game sessions in memory on the server, and allowing users to invite each other to join via an invite link.<br />
The data handling is being done via polling, which means that the client is sending requests to the server every 250ms in order to check if the game has been updated.<br />
When deployed, the performance was perfect - with no noticeable delays or loading times.<br />

### Design

![grab-landing-page](https://github.com/elShailee/Tic-Tac-Toe/blob/master/docs/Homescreen_d.png)
(Yes - it has a dark mode!)

The game was designed by me using Inkscape, and coded with styled-components, with significant assistance<br />
from the theme feature, using which I created a lot of useful CSS snippets which I still use today.<br />
The game's sizing is done proportionally to the screen size.<br />
While making the game playable on all devices, this decision has led some text to be too small to read on mobile devices.<br />
This experience has taught me the hard way a lot about coding scalable, responsive and beautiful UI.<br />

## Technologies

Front:

- ReactJS
- styled-components
- Axios

Backend:

- NodeJS
- Express
- Joi