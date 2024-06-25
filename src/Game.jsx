import React from "react";
import { words } from "./data";
import { generateInitialAnswerDisplay } from "./utils";
import GameProgress from "./GameProgress";
import AlphabetButtons from "./AlphabetButtons";

function Game() {
  const randomNumber = Math.floor(Math.random() * words.length);
  const [targetWord, setTargetWord] = React.useState(words[randomNumber]);
  const [guessProgress, setGuessProgress] = React.useState(
    generateInitialAnswerDisplay(targetWord)
  );
  const [clickedButtons, setClickedButtons] = React.useState({});
  const [missCounter, setMissCounter] = React.useState(0);

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
      <GameProgress
        guessProgress={guessProgress}
        missCounter={missCounter}
        targetWord={targetWord}
      />
      <AlphabetButtons
        guessProgress={guessProgress}
        clickedButtons={clickedButtons}
        targetWord={targetWord}
        missCounter={missCounter}
        setMissCounter={setMissCounter}
        setClickedButtons={setClickedButtons}
      />
      <div className="new-game">
        <button onClick={handleNewGame}>New Game</button>
      </div>
    </>
  );
}

export { Game };
