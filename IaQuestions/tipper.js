// 9. Tip Calculator 
// Story: Sophia wants to split a restaurant bill 
// with friends. 
// Task: Ask for the total bill amount, the tip 
// percentage, and the number of people. Print 
// how much each person should pay. 

class Tipper{
    constructor(totalAmt,tipPercent,n0ofpeople)
    {
        this.totalAmt=totalAmt
        this.tipPercent=tipPercent
        this.n0ofpeople=n0ofpeople
    }
    tip(){
        const total_tip=this.totalAmt * (this.tipPercent/100)
        const split= (this.totalAmt + total_tip) /this.n0ofpeople
        console.log(`Each has to pay ${split} cedis`)
    }
}

const tip=new Tipper(200,10,4)
tip.tip()