document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get new withdraw amount by using function
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  // get perevious withdraw amount by using functio
  const pereviousWithdrawAmount = getTextElementValueById("withdraw-total");
  // count perevious withdraw amount and new withdraw amount
  const totalWithdrawAmount = pereviousWithdrawAmount + newWithdrawAmount;
  // set withdraw total element by using functio
  setTextElementValueById("withdraw-total", totalWithdrawAmount);
  // get previous balance amount by using function
  const pereviousBalanceTotalAmount = getTextElementValueById("balance-total");
  // remove new withdraw amount from the perevious balance amount
  const newBalanceAmount = pereviousBalanceTotalAmount - newWithdrawAmount;
  // set balance total amount by using function
  setTextElementValueById("balance-total", newBalanceAmount);
});
