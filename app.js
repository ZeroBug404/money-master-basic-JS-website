document.getElementById('calc-btn').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('cloth-input').value;
    const foodCost = parseInt(foodInput);
    const rentCost = parseInt(rentInput);
    const clothCost = parseInt(clothInput);

    const totalCost = foodCost + rentCost + clothCost;

    const totalExpence = document.getElementById('total-expence');
    totalExpence.innerText = totalCost;

    const incomeInput = document.getElementById('income-input').value;
    const incomeAmount = parseInt(incomeInput)
    const balance = incomeAmount - totalCost;

    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = balance;
})