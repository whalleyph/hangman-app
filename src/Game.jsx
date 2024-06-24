import React from "react";
import { alphabet, hangmanPics, words } from "./data";

function Game() {
  const [randomNumber, setRandomNumber] = React.useState(
    Math.floor(Math.random() * words.length)
  );
  const targetWord = words[randomNumber];
  const [guessProgress, setGuessProgress] = React.useState(
    generateInitialAnswerDisplay()
  );
  const [clickedButtons, setClickedButtons] = React.useState({});
  const [missCounter, setMissCounter] = React.useState(0);

  function generateInitialAnswerDisplay() {
    return targetWord.split("").map((_ch) => "_");
  }

  function handleClickOnLetters(guessedLetter) {
    const newGuessProgress = [...guessProgress];
    const newClickedButtons = {
      ...clickedButtons,
      [guessedLetter]: true,
    };

    for (let i = 0; i < targetWord.length; i++) {
      if (targetWord[i] === guessedLetter) {
        newGuessProgress[i] = guessedLetter;
      }
    }
    if (arraysHaveTheSameContents(newGuessProgress, guessProgress)) {
      const newMissCounter = missCounter + 1;
      setMissCounter(newMissCounter);
    }
    setGuessProgress(newGuessProgress);
    setClickedButtons(newClickedButtons);
  }

  function GameOverMessage() {
    if (!guessProgress.includes("_")) {
      return <p>You win!</p>;
    }
    if (missCounter === 6) {
      return <p>You lose, the word was {targetWord}</p>;
    }
  }

  function arraysHaveTheSameContents(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((element, index) => element === arr2[index]);
  }

  function CreateAlphabetButtons() {
    return alphabet.map((letter) => (
      <button
        key={letter}
        className="button"
        onClick={() => {
          handleClickOnLetters(letter);
        }}
        disabled={
          clickedButtons[letter] ||
          !guessProgress.includes("_") ||
          missCounter === 6
        }
      >
        {letter}
      </button>
    ));
  }

  function handleNewGame() {
    setGuessProgress(generateInitialAnswerDisplay());
    setClickedButtons({});
    setMissCounter(0);
    setRandomNumber(Math.floor(Math.random() * words.length))
  }

  return (
    <>
      <p className="hangman-picture">{hangmanPics[missCounter]}</p>
      <p>{guessProgress.join(" ")}</p>
      <GameOverMessage />
      <div className="alphabet-buttons">
        <CreateAlphabetButtons />
      </div>
      <div className="new-game">
        <button onClick={handleNewGame}>New Game</button>
      </div>
    </>
  );
}

export { Game };
