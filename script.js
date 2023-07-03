// script.js

function findUniqueCharacter(text) {
  const words = text.split(" ");

  const charCount = words
    .flatMap((word) => Array.from(word))
    .reduce((count, char) => {
      count[char] = (count[char] || 0) + 1;
      return count;
    }, {});

  const uniqueChar = words
    .flatMap((word) => Array.from(word))
    .find((char) => charCount[char] === 1);

  return uniqueChar || null;
}

function runProgram() {
  const inputText = document.getElementById("inputText").value;
  const outputText = document.getElementById("outputText");

  const uniqueChar = findUniqueCharacter(inputText);
  outputText.value = uniqueChar || "No unique character found.";
}

document.getElementById("runButton").addEventListener("click", runProgram);
