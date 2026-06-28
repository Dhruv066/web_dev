class BankAcc{
    #balance =0;

    diposit(amount){
        this.#balance+=amount;
        return this.#balance;
    }
    getBalance(){
        return `₹ ${this.#balance}`;
    }
}

const Acc = new BankAcc();
console.log(Acc.getBalance());