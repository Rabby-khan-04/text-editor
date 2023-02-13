const textField = document.querySelector("#editor-filed");

const styleApply = (elementId, styleClass) => {
  document.getElementById(elementId).addEventListener("click", () => {
    textField.classList.toggle(styleClass);
  });
};

const setAlignment = (elementId, styleValue) => {
  document.getElementById(elementId).addEventListener("click", () => {
    textField.style.textAlign = styleValue;
  });
};

styleApply("bold", "font-bold");
styleApply("italic", "italic");
styleApply("underline", "underline");
styleApply("line-through", "line-through");
setAlignment("left", "left");
setAlignment("center", "center");
setAlignment("right", "right");
setAlignment("justifi", "justify");
styleApply("upprcase", "uppercase");

document.getElementById("font-size").addEventListener("change", () => {
  const textSize = document.getElementById("font-size").value;
  textField.style.fontSize = textSize + "px";
});
document.getElementById("font-size").addEventListener("keyup", () => {
  const textSize = document.getElementById("font-size").value;
  textField.style.fontSize = textSize + "px";
});

document.getElementById("color").addEventListener("input", () => {
  const color = document.getElementById("color").value;
  textField.style.color = color;
});
