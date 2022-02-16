document.getElementById("calc-btn").addEventListener("click", function () {
  // get expences input values
  const foodInput = document.getElementById("food-input").value;
  const rentInput = document.getElementById("rent-input").value;
  const clothInput = document.getElementById("cloth-input").value;
  const foodCost = parseInt(foodInput);
  const rentCost = parseInt(rentInput);
  const clothCost = parseInt(clothInput);

  const totalCost = foodCost + rentCost + clothCost;

  //   get incomes input value
  const incomeInput = document.getElementById("income-input").value;
  const incomeAmount = parseInt(incomeInput);
  const balance = incomeAmount - totalCost;
  
    // get wrong typing error
  const typedString = document.getElementById("typed-string");
  const typedNegative = document.getElementById("typed-negetive");
  if (isNaN(totalCost) || isNaN(balance)) {
    
    typedString.style.display = "block";
    typedNegative.style.display = "none";
  } 
  else if(foodCost < 0 || rentCost < 0 || clothCost < 0 || incomeAmount < 0) {
    typedNegative.style.display = "block";
    typedString.style.display = "none";
  }
  else {
      //   update total expences
    const totalExpence = document.getElementById("total-expence");
    totalExpence.innerText = totalCost;

    // update balance
    const totalBalance = document.getElementById("total-balance");
    totalBalance.innerText = balance;
  }
  
});
