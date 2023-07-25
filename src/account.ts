import StatementGenerator from "./statementGenerator"
import Transaction from "./transaction"

export class Account {
    private transactions: Transaction[] = []
    private statementGenerator: StatementGenerator = new StatementGenerator()

    depositMoney(amount: number) {
        if (amount >= 0) { 
            this.transactions.push(new Transaction(amount))
        }
    }

    withdrawMoney(amount: number) {
        if (amount >= 0) {
            this.transactions.push(new Transaction(-amount))
        }
    }

    calculateBalance():number {
        let balance: number
        balance = 0
        this.transactions.forEach((transaction) => {
            balance = balance + transaction.amount
        })
        return balance
    }

    getStatement(): string {
        return this.statementGenerator.generateStatement(this.transactions)
    }
}