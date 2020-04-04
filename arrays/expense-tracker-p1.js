const createAccount = function (name) {
    return {
        name: name,
        expenses: [],
    };
};

const createExpense = function (description, amount) {
    return {
        description: description,
        amount: amount
    };
}

const addExpense = function (account, expense) {
    if (account !== null && account !== undefined) {
        account.expenses.push(expense);
    }

}

const calcTotalExpenses = function (account) {
    expenses = account.expenses;
    total = 0;
    if (expenses !== null && expenses !== undefined && expenses.length !== 0) {
        expenses.forEach(function (elem) {
            total += elem.amount;
        });
    }
    return total;
}

const getAccountSummary = function (account) {
    return `Total up all expenses. ${account.name} has R$${calcTotalExpenses(account)} in expenses`;
};

// create a account object
let heitor = createAccount('Heitor');

// creating some expenses
let coffe, food, gym, trips;
coffe = createExpense('coffe', 2);
food = createExpense('food', 350);
gym = createExpense('gym', 85);
trips = createExpense('trips', 890);

// Adding some expenses for Heitor
addExpense(heitor, coffe);
addExpense(heitor, food);
addExpense(heitor, gym);
addExpense(heitor, trips);

console.log(getAccountSummary(heitor));