const textarea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const wordCount = document.getElementById("word-count");

textarea.addEventListener("input", function () {
  const text = this.value;

  charCount.textContent = text.length;

  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  wordCount.textContent = words.length;

  if (text.length > 200) {
    alert("Character limit exceeded! Maximum 200 characters allowed.");
    this.value = text.substring(0, 200);
  }
});
