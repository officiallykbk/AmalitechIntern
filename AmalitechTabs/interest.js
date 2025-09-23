// Simple Interest Calculator 
// Story: Henry wants to calculate how much 
// money he’ll earn on a savings account. 
// Task: Ask for the principal amount, interest 
// rate (as a percentage), and number of 
// years. Use the formula: 
// Interest = (Principal × Rate × 
// Time) / 100 
// Print the total interest earned.

class Interest{
    constructor(principal,time,rate){
        this.principal=principal
        this.time=time
        this.rate=rate

    }
    simpleInterest(){
        const Interest =(this.principal * this.rate * this.time) / 100 
        console.log(`Your simple interest is ${Interest}`)
    }
}

const inte= new Interest(2000,2,10)
inte.simpleInterest();