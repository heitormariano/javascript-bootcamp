let myAccount = {
    name: 'Heitor Camara',
    expenses: 0,
    income: 0
};

let addExpenses = function (account, amount) {
    account.expenses = account.expenses + amount;
};

console.log(myAccount);

addExpenses(myAccount, 200);
console.log(myAccount);

// otherAccount has the same reference of myAccount
let otherAccount = myAccount;
console.log(otherAccount);

// manipulating otherAccount
otherAccount.expenses = 0;
console.log(myAccount);
console.log(otherAccount);

addExpenses(otherAccount, 350);
console.log(myAccount);
console.log(otherAccount);

addExpenses(otherAccount, 120);
console.log(myAccount);
console.log(otherAccount);