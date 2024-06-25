export default function NewGame(props) {
    function handleNewGame() {
        const newRandomNumber = Math.floor(Math.random() * props.words.length);
        const newTargetWord = props.words[newRandomNumber];
        props.setClickedButtons({});
        props.setMissCounter(0);
        props.setTargetWord(newTargetWord);
        props.setGuessProgress(props.generateInitialAnswerDisplay(newTargetWord));
      }
  return (
    <div className="new-game">
      <button onClick={handleNewGame}>New Game</button>
    </div>
  );
}