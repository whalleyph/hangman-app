import React from "react";

function Game() {
  const [targetWord, setTargetWord] = React.useState("apple");
  const [guessProgress, setGuessProgress] = React.useState(
    generateInitialAnswerDisplay()
  );

  function generateInitialAnswerDisplay() {
    return targetWord.split("").map((_ch) => "_");
  }

  function createAlphabetButtons() {
    let alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    return alphabet.map((letter) => <button>{letter}</button>);
  }

  return (
    <>
      <p>{guessProgress.join(" ")}</p>
      <div className="alphabet-buttons">{createAlphabetButtons()}</div>
      <div className="new-game">
        <button>New Game</button>
      </div>
    </>
  );
}

export { Game };
