function createAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Balance: ₹${balance}`);
    },

    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Balance: ₹${balance}`);
      } else {
        console.log("Insufficient balance");
      }
    },
  };
}

const account = createAccount(1000);

account.deposit(500); // Balance: ₹1500
account.withdraw(200); // Balance: ₹1300
// console.log(account.balance)
