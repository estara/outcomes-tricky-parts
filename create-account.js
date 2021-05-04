function createAccount(pin, amount) {
    let balance;
    if (!amount) {balance = 0;}
    else {balance = amount;}

    return {
        checkBalance: function(toCheck) {
        if (toCheck === pin) {return `$${balance}`}
        else {return "Invalid PIN."}
    },

        deposit: function(toCheck, toAdd) {
        if (toCheck === pin) {
            balance += toAdd;
            return `Succesfully deposited $${toAdd}. Current balance: $${balance}.`}
        else {return "Invalid PIN."}
    },

        withdraw: function(toCheck, toRemove) {
        if (toCheck === pin) {
            if (toRemove > balance) {return "Withdrawal amount exceeds account balance. Transaction cancelled."}
            balance -= toRemove;
            return `Succesfully withdrew $${toRemove}. Current balance: $${balance}.`}
        else {return "Invalid PIN."}
    },

        changePin: function(toCheck, newPin) {
        if (toCheck === pin) {pin = newPin; return "PIN successfully changed!"}
        else {return "Invalid PIN."}
    }
}
}

module.exports = { createAccount };
