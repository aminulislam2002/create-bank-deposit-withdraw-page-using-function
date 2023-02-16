function getInputFieldValueById(inputID) {
  const inputField = document.getElementById(inputID);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}
function getTextElementValueById(elementID) {
  const textElement = document.getElementById(elementID);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}
function setTextElementValueById(elementID, newValue) {
  const textElement = document.getElementById(elementID);
  textElement.innerText = newValue;
}
