import { hangmanPics, } from "./data";

export default function GameProgress(props) {
  function GameOverMessage() {
    if (!props.guessProgress.includes("_")) {
      return <p>You win!</p>;
    }
    if (props.missCounter === 6) {
      return <p>You lose, the word was {props.targetWord}</p>;
    }
  }

  return (
    <>
      <p className="hangman-picture">{hangmanPics[props.missCounter]}</p>
      <p>{props.guessProgress.join(" ")}</p>
      <GameOverMessage />
    </>
  );
}