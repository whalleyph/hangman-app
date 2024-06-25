import { arraysHaveTheSameContents } from "./utils";
import { alphabet } from "./data";

export default function AlphabetButtons(props) {
  function handleClickOnLetters(guessedLetter) {
    const newGuessProgress = [...props.guessProgress];
    const newClickedButtons = {
      ...props.clickedButtons,
      [guessedLetter]: true,
    };

    for (let i = 0; i < props.targetWord.length; i++) {
      if (props.targetWord[i] === guessedLetter) {
        newGuessProgress[i] = guessedLetter;
      }
    }
    if (arraysHaveTheSameContents(newGuessProgress, props.guessProgress)) {
      const newMissCounter = props.missCounter + 1;
      props.setMissCounter(newMissCounter);
    }
    props.setGuessProgress(newGuessProgress);
    props.setClickedButtons(newClickedButtons);
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
          props.clickedButtons[letter] ||
          !props.guessProgress.includes("_") ||
          props.missCounter === 6
        }
      >
        {letter}
      </button>
    ));
  }
  return (
    <div className="alphabet-buttons">
      <CreateAlphabetButtons />
    </div>
  );
}
