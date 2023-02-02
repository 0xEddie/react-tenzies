# Tenzies Dice Game

This is a creation of this [Figma design](https://www.figma.com/file/FqsxRUhAaXM4ezddQK0CdR/Tenzies?node-id=0%3A1&t=pG27k5iHNV8QT2H8-0), created with React.js. [Live demo](https://react-tenzies-0xeddie.vercel.app/) hosted on Vercel.

![gif of winning the game and confetti appearing](.src/assets/react-tenzies.gif)

## Local Dev Env

1. Clone repository

```
git clone https://github.com/0xEddie/react-tenzies
```

2. Install dependencies

```
yarn install
```

3. Start Vite development server

```
yarn dev
```

## Build Process

### Tech Stack

- [React.js](https://reactjs.org/) - App built using function components, and uses seState and useEffect hooks to track game state and display confetti on game win
- [Vite.js](https://vitejs.dev/) - Very simple to set up and lightning quick development tooling
- [Yarn](https://yarnpkg.com/) - Faster and more lightweight package management than npm

### Continued Development

There are a few possible features that could be added into the app to further stretch personal development:

- create a toggle for switching between light / dark theme styling
- create a timer that displays how long the game took to win
- create a personal leaderboard that displays best (3?) time to completion - stored in localStorage
- create a social media share link generates a post with the player's best time
