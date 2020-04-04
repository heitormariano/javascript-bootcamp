let createAccount = function (name) {
    let account = {
        name: name,
        income: 0,
        expenses: 0,
        balance: function () {
            return this.income - this.expenses;
        },
    };
    return account;
};

let addExpenses = function (account, amount) {
    account.expenses = account.expenses + amount;
};

let addIncome = function (account, income) {
    account.income = account.income + income;
};

let resetAccount = function (account) {
    account.income = 0;
    account.expenses = 0;
};

let getAccountSummary = function (account) {
    return `Account for ${account.name} has R$${account.balance()}. R$${
        account.income
    } in income. R$${account.expenses} in expenses.`;
};

// creating some objects
let joao = createAccount('João');
let heitor = createAccount('Heitor');

// joao
addIncome(joao, 5000);
addExpenses(joao, 200);
addExpenses(joao, 150);

let joaoSummary = getAccountSummary(joao);
console.log(joaoSummary);

// account reseting
resetAccount(joao);
joaoSummary = getAccountSummary(joao);
console.log(joaoSummary);

//heitor
addIncome(heitor, 10000);
addExpenses(heitor, 400);
addExpenses(heitor, 50);

let heitorSummary = getAccountSummary(heitor);
console.log(heitorSummary);

// account reseting
resetAccount(heitor);
heitorSummary = getAccountSummary(heitor);
console.log(heitorSummary);
