const output = document.querySelector("#name-output");
document
  .querySelector("#name-input")
  .addEventListener(
    "input",
    (event) => (output.textContent = event.target.value.trim() || "Anonymous")
  );
