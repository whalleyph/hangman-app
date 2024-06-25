function generateInitialAnswerDisplay(word) {
  return word.split("").map((_ch) => "_");
}

function arraysHaveTheSameContents(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((element, index) => element === arr2[index]);
}

export { generateInitialAnswerDisplay, arraysHaveTheSameContents };