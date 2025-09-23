// Story: 
// Sara runs a lemonade stand. She sells a 
// cup of lemonade for $1.50. Each cup costs 
// her $0.50 to make. 
// Task: 
// Write a program that asks how many cups 
// she sold today, then calculates and displays 
// her profit. 

class Business{
    constructor(cupsSold, lemonadePrice=1.5, CupPrice=0.5){
        this.cupsSold=cupsSold
        this.lemonadePrice=lemonadePrice
        this.CupPrice=CupPrice
    }
    dailyProfit(){
        // profit = sp-cp
        const profit=(this.cupsSold*this.lemonadePrice) - (this.cupsSold*this.CupPrice)
        console.log(profit)
        return profit
    }
}

const lemon=new Business(10)
lemon.dailyProfit()