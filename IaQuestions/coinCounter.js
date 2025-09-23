// Coin Counter 
// Story: Mason is counting change in his 
// piggy bank. 
// Task: Ask how many pennies, nickels, 
// dimes, and quarters he has. Print the total 
// amount in dollars.

class CoinCounter{
    constructor(pennies, nickels,  dimes, quarters){
        this.pennies=pennies
        this.nickels=nickels
        this.dimes=dimes
        this.quarters=quarters
    }
    totalAmount(){
        const total=(this.pennies*0.01) + (this.nickels*0.05) + (this.dimes*0.1) + (this.quarters*0.25)
        console.log(`Total amount is $${total.toFixed(2)}`)
        return total.toFixed(2)
    }
}
const transact=new CoinCounter(10,10,10,10)
transact.totalAmount()

