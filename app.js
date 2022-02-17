// get the incone input
function getIncomeAmount() {
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

  const balance = getIncomeAmount() - totalCost;

  // total expence & balance
  const totalExpence = document.getElementById("total-expence");
  const totalBalance = document.getElementById("total-balance");

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
    getIncomeAmount() < 0
  ) {
    typedNegative.style.display = "block";
    typedString.style.display = "none";
  } else {
    //   update total expences
    totalExpence.innerText = totalCost;

    // update balance
    totalBalance.innerText = balance;
  }

  // error message for total expence exceeds
  const exceedIncome = document.getElementById("exceed-income");
  if (balance < 0) {
    exceedIncome.style.display = "block";
  }
  else {
    console.log('Not working');
  }
  
});

document.getElementById("save-btn").addEventListener("click", function () {
  // get saving percenteges inputs and amounts
  const inputPercentege = document.getElementById("input-percentege").value;
  const savingAmountNumber = document.getElementById("saving-amount");
  const remainingBalance = document.getElementById("remaining-balance");
  const percentegeNumber = parseInt(inputPercentege);

  const saveAmountTotal = (getIncomeAmount() / 100) * percentegeNumber;

  // get expences input values and balance
  const foodInput = document.getElementById("food-input").value;
  const rentInput = document.getElementById("rent-input").value;
  const clothInput = document.getElementById("cloth-input").value;
  const foodCost = parseInt(foodInput);
  const rentCost = parseInt(rentInput);
  const clothCost = parseInt(clothInput);

  const totalCost = foodCost + rentCost + clothCost;

  const balance = getIncomeAmount() - totalCost;

  // err message
  const errMessege = document.getElementById("over-balanced");
  if (saveAmountTotal > balance) {
    errMessege.style.display = "block";
  } else {
    // set saving amont
    savingAmountNumber.innerText = saveAmountTotal;
    errMessege.style.display = "none";
  }

  const remainingAmount = balance - saveAmountTotal;

  // set remaining balance
  remainingBalance.innerText = remainingAmount;
});
