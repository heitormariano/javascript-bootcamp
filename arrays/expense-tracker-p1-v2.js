const createAccount = function (name) {
    return {
        name: name,
        expenses: [],
        addExpense: function (description, amount) {
            this.expenses.push({
                description: description,
                amount: amount,
            });
        },
        calcTotalExpenses: function () {
            total = 0;
            this.expenses.forEach(function (elem) {
                total += elem.amount;
            });
            return total;
        },
        getAccountSummary: function () {
            return `${this.name} has R$${this.calcTotalExpenses()} in expenses`;
        },
    };
};

// create a account object
let heitor = createAccount('heitor');
heitor.addExpense('coffee', 2);
heitor.addExpense('food', 350);
heitor.addExpense('gym', 85);
heitor.addExpense('trips', 890);
