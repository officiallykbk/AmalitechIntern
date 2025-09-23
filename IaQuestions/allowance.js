//  Weekly Allowance Tracker 
// Story: Noah gets a weekly allowance and 
// wants to track his savings. 
// Task: Ask how much allowance he gets per 
// week and how many weeks he wants to 
// save. Print the total amount saved.

class Allowance{
    constructor(weeklyAllowance,numberOfWeeks){
        this.weeklyAllowance=weeklyAllowance
        this.numberOfWeeks=numberOfWeeks
        
    }
    savings(){
        const total=this.weeklyAllowance*this.numberOfWeeks
        console.log(`You'll save ${total}`)

    }
}
const allow=new Allowance(250,3)
allow.savings()