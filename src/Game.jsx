import React from "react";
import { alphabet, hangmanPics } from "./data";

function Game() {
  const [targetWord, setTargetWord] = React.useState("apple");
  const [guessProgress, setGuessProgress] = React.useState(
    generateInitialAnswerDisplay()
  );
  const [clickedButtons, setClickedButtons] = React.useState({});
  const [missCounter, setMissCounter] = React.useState(0);

  function generateInitialAnswerDisplay() {
    return targetWord.split("").map((_ch) => "_");
  }

  function handleClick(letter) {
    const newGuessProgress = [...guessProgress];
    const newClickedButtons = {
      ...clickedButtons,
      [letter]: true,
    };

    for (let i = 0; i < targetWord.length; i++) {
      if (targetWord[i] === letter) {
        newGuessProgress[i] = letter;
      }
    }
    if (arraysHaveTheSameContents(newGuessProgress, guessProgress)) {
        const newMissCounter = missCounter + 1;
      setMissCounter(newMissCounter);
    }
    setGuessProgress(newGuessProgress);
    setClickedButtons(newClickedButtons);
  }

  function arraysHaveTheSameContents(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((element, index) => element === arr2[index]);
  }

  function createAlphabetButtons() {
    return alphabet.map((letter) => (
      <button
        key={letter}
        className="button"
        onClick={() => {
          handleClick(letter);
        }}
        disabled={clickedButtons[letter]}
      >
        {letter}
      </button>
    ));
  }

  return (
    <>
      <p className="hangman-picture">{hangmanPics[missCounter]}</p>
      <p>{guessProgress.join(" ")}</p>
      <div className="alphabet-buttons">{createAlphabetButtons()}</div>
      <div className="new-game">
        <button>New Game</button>
      </div>
    </>
  );
}

export { Game };
