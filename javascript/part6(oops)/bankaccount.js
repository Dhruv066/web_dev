class BankAccount{
    constructor(balance){
        this.balance=balance;
    }
    withdraw(ammount){
        this.balance-=ammount;
    }
    deposit(ammount){
        this.balance+=ammount;
    }
}
const acc = new BankAccount(5000);
acc.withdraw(500);
console.log(acc.balance)