function checkAnswer(ans) {
  const correctAnswers = {
    "Unit I": "B",  // int
    "Unit II": "C", // do-while
    "Unit III": "B", // int
    "Unit IV": "A", // strlen
    "Unit V": "B", // ->
    "Unit VI": "B"  // w
  };

  // Detect unit from title
  let unit = document.title.split(" - ")[0];
  if (correctAnswers[unit] === ans) {
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong! Try again.");
  }
}
