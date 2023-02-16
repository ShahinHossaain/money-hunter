const calculate = () => {
    const income = getValue(document.getElementById('incomeField'));
    const foodCost = getValue(document.getElementById('foodCost'));
    const rentCost = getValue(document.getElementById('rentCost'));
    const clothingCost = getValue(document.getElementById('clotheCost'));
    const input = document.querySelectorAll('input');

    const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothingCost);
    const balance = parseFloat(income) - totalCost;

    input.forEach(element => {
        if(isNaN(element.value) || element.value < 0){
            input.forEach(element => {
                element.value = '';
            });
            return alert('Invalid input value');
        }
    });
    if(balance < 0){
        input.forEach(element => {
            element.value = '';
        });
        return alert('You have to earn more for this expense'); 
    }
    // set in expenses and balance 
    document.getElementById('total-cost').innerText = totalCost;
    document.getElementById('balance').innerText = balance;
}
const btnSave = () => {
    const savePercent = getValue(document.getElementById('save'));
    const income = getValue(document.getElementById('incomeField'));
    const balance = getInnerText(document.getElementById('balance'));
    
    const savingAmount = parseFloat(income) * parseFloat(savePercent)/100;
    const remainingBalance = parseFloat(balance) - savingAmount;

    document.getElementById('saving-amount').innerText = savingAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;
    
}
