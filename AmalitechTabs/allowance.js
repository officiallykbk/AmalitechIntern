//  Weekly Allowance Tracker 
// Story: Noah gets a weekly allowance and 
// wants to track his savings. 
// Task: Ask how much allowance he gets per 
// week and how many weeks he wants to 
// save. Print the total amount saved.

class Allowance{
    constructor(WeeklyAllowance,NoOfSavingWeeks){
        this.WeeklyAllowance=WeeklyAllowance
        this.NoOfSavingWeeks=NoOfSavingWeeks
        
    }
    savings(){
        const total=this.WeeklyAllowance*this.NoOfSavingWeeks
        console.log(`You'll save ${total}`)

    }
}
const allow=new Allowance(250,3)
allow.savings()