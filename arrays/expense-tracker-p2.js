const createAccount = function (name) {
    return {
        name: name,
        income: [],
        expenses: [],
        addIncome: function (description, amount) {
            this.income.push({
                description: description,
                amount: amount
            });
        },
        addExpense: function (description, amount) {
            this.expenses.push({
                description: description,
                amount: amount
            });
        },
        balance: function () {
            return this.calcTotal(this.income) - this.calcTotal(this.expenses);
        },
        calcTotal: function (elements) {
            total = 0;
            elements.forEach(function (elem) {
                total += elem.amount;
            });
            return total;
        },
        getAccountSummary: function () {
            return `${this.name} has a balance of ${this.balance()}. R$${this.calcTotal(this.income)} in income and R$${this.calcTotal(this.expenses)} in expenses`;
        }
    };
};

// create a account object
let heitor = createAccount('heitor');
heitor.addIncome('Job', 2500);

heitor.addExpense('coffe', 2);
heitor.addExpense('food', 350);
heitor.addExpense('gym', 85);
heitor.addExpense('trips', 890);

console.log(heitor.getAccountSummary());