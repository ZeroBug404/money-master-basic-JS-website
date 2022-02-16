function getIncomeInput() {
  const incomeInput = document.getElementById("income-input").value;
  const incomeAmount = parseInt(incomeInput);

  return incomeAmount;
}

document.getElementById("calc-btn").addEventListener("click", function () {
  // get expences input values
  const foodInput = document.getElementById("food-input").value;
  const rentInput = document.getElementById("rent-input").value;
  const clothInput = document.getElementById("cloth-input").value;
  const foodCost = parseInt(foodInput);
  const rentCost = parseInt(rentInput);
  const clothCost = parseInt(clothInput);

  const totalCost = foodCost + rentCost + clothCost;
  
  const balance = getIncomeInput() - totalCost;

  // get wrong typing error
  const typedString = document.getElementById("typed-string");
  const typedNegative = document.getElementById("typed-negetive");
  if (isNaN(totalCost) || isNaN(balance)) {
    typedString.style.display = "block";
    typedNegative.style.display = "none";
  } else if (
    foodCost < 0 ||
    rentCost < 0 ||
    clothCost < 0 ||
    getIncomeInput() < 0
  ) {
    typedNegative.style.display = "block";
    typedString.style.display = "none";
  } else {
    //   update total expences
    const totalExpence = document.getElementById("total-expence");
    totalExpence.innerText = totalCost;

    // update balance
    const totalBalance = document.getElementById("total-balance");
    totalBalance.innerText = balance;
  }
});

document.getElementById("save-btn").addEventListener("click", function () {
    getIncomeInput();
  const inputPercentege = document.getElementById("input-percentege").value;
  const savingAmountNumber = document.getElementById('saving-amount');
  const remainingBalance =document.getElementById('remaining-balance');
  const percentegeNumber = parseInt(inputPercentege);

  const saveAmountTotal = getIncomeInput() / percentegeNumber;

  savingAmountNumber.innerText = saveAmountTotal;

  const foodInput = document.getElementById("food-input").value;
  const rentInput = document.getElementById("rent-input").value;
  const clothInput = document.getElementById("cloth-input").value;
  const foodCost = parseInt(foodInput);
  const rentCost = parseInt(rentInput);
  const clothCost = parseInt(clothInput);

  const totalCost = foodCost + rentCost + clothCost;
  
  const balance = getIncomeInput() - totalCost;

  const remainingAmount = balance - saveAmountTotal;

  remainingBalance.innerText = remainingAmount;
});
