document.getElementById("btn-deposite").addEventListener("click", function () {
  // get new deposite amount by using function
  const newDepositeAmount = getInputFieldValueById("deposite-field");
  // get perevious deposite amount by using function
  const pereviousDepositeTotalAmount = getTextElementValueById("deposite-total");
  // count perevious deposite total amount and new deposite total amount
  const depositeTotalAmount = pereviousDepositeTotalAmount + newDepositeAmount;
  // set deposite total amount by using function
  setTextElementValueById("deposite-total", depositeTotalAmount);
  // get perevious balance amount by using function
  const pereviousBalanceTotalAmount = getTextElementValueById("balance-total");
  // count perevious balance total amount and new deposite amount
  const newBalanceAmount = pereviousBalanceTotalAmount + newDepositeAmount;
  // set balance total amount by using function
  setTextElementValueById("balance-total", newBalanceAmount);
});
