function getName(nameId) {
    const neymarName = document.getElementById(nameId);
    const getNeymarNameText = neymarName.innerText;

    const listLi = document.querySelectorAll('#ol-container li');
    const listLength = listLi.length;

    if (listLength >= 5) {
        alert('You Can not add more than five players');
        return;
    }

    const olElementText = document.getElementById('ol-container');
    const li = document.createElement('li');
    li.innerText = getNeymarNameText;
    olElementText.appendChild(li);
}



//All Event select button handler
document.getElementById('select-btn-1').addEventListener('click', function () {
    // get the player name by calling the get name function
    getName('neymar-name');
    disableBtn('select-btn-1');
});


document.getElementById('select-btn-2').addEventListener('click', function () {
    // get the player name by calling the get name function
    getName('messi-name');
    disableBtn('select-btn-2');
});

document.getElementById('select-btn-3').addEventListener('click', function () {
    // get the player name by calling the get name function
    getName('mbappe-name');
    disableBtn('select-btn-3');
});

document.getElementById('select-btn-4').addEventListener('click', function () {
    // get the player name by calling the get name function
    getName('vitor-name');
    disableBtn('select-btn-4');
});

document.getElementById('select-btn-5').addEventListener('click', function () {
    // get the player name by calling the get name function
    getName('sergio-name');
    disableBtn('select-btn-5');
});
document.getElementById('select-btn-6').addEventListener('click', function () {
    // get the player name by calling the get name function
    getName('renato-name');
    disableBtn('select-btn-6');
});



document.getElementById('calculate-per-player').addEventListener('click', function () {

    const items = document.querySelectorAll('#ol-container li')
    for (let item of items) {
        const element = items.length;
        const perPlayerExpenseField = document.getElementById('per-player-expense-field');
        const perPlayerExpenseString = perPlayerExpenseField.value;
        const perPlayerExpense = parseFloat(perPlayerExpenseString);

        //calculate the per player expense
        const perPlayerExpenseTotal = element * perPlayerExpense;

        //calculate the per player expense and set the value
        const totalPlayerExpense = document.getElementById('total-player-expense');
        totalPlayerExpense.innerText = perPlayerExpenseTotal;
    }
})

// total budget calculate button event handler
document.getElementById('budget-total-btn').addEventListener('click', function () {

    //Get the total expense of per player
    const perPlayerExpenseText = document.getElementById('total-player-expense');
    const perPlayerExpenseTextString = perPlayerExpenseText.innerText;
    const perPlayerExpense = parseFloat(perPlayerExpenseTextString);


    //Get the manager input field 
    const managerFieldElement = document.getElementById('manager-feild')
    const managerFieldElementString = managerFieldElement.value;
    const managerField = parseFloat(managerFieldElementString);

    //Get the coach input field 
    const coachFieldElement = document.getElementById('coach-field');
    const coachFieldElementString = coachFieldElement.value;
    const coachField = parseFloat(coachFieldElementString);

    //Total Budget Expenses calculate
    const totalBudget = managerField + coachField + perPlayerExpense;
    console.log(totalBudget);

    //Get the total budget expense and set the budget expense
    const totalBudgetExpenseText = document.getElementById('total-budget-expense');
    totalBudgetExpenseText.innerText = totalBudget;
})












