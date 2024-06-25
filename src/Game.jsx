import React from "react";
import { words } from "./data";
import { generateInitialAnswerDisplay } from "./utils";
import GameProgress from "./GameProgress";
import AlphabetButtons from "./AlphabetButtons";
import NewGame from "./NewGame";

function Game() {
  const randomNumber = Math.floor(Math.random() * words.length);
  const [targetWord, setTargetWord] = React.useState(words[randomNumber]);
  const [guessProgress, setGuessProgress] = React.useState(
    generateInitialAnswerDisplay(targetWord)
  );
  const [clickedButtons, setClickedButtons] = React.useState({});
  const [missCounter, setMissCounter] = React.useState(0);

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
        setGuessProgress={setGuessProgress}
        setClickedButtons={setClickedButtons}
      />
      <NewGame 
      words={words}
      setClickedButtons={setClickedButtons}
      setMissCounter={setMissCounter}
      setTargetWord={setTargetWord}
      setGuessProgress={setGuessProgress}
      generateInitialAnswerDisplay={generateInitialAnswerDisplay}
      />
    </>
  );
}

export { Game };
