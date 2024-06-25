import React from "react";
import { alphabet, hangmanPics, words } from "./data";
import {
  generateInitialAnswerDisplay,
  arraysHaveTheSameContents,
} from "./utils";

function Game() {
  const randomNumber = Math.floor(Math.random() * words.length);
  const [targetWord, setTargetWord] = React.useState(words[randomNumber]);
  const [guessProgress, setGuessProgress] = React.useState(
    generateInitialAnswerDisplay(targetWord)
  );
  const [clickedButtons, setClickedButtons] = React.useState({});
  const [missCounter, setMissCounter] = React.useState(0);

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
    const newRandomNumber = Math.floor(Math.random() * words.length);
    const newTargetWord = words[newRandomNumber];
    setClickedButtons({});
    setMissCounter(0);
    setTargetWord(newTargetWord);
    setGuessProgress(generateInitialAnswerDisplay(newTargetWord));
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
