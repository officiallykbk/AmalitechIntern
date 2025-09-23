// 7. Speeding Fine Calculator 
// Story: Mia was caught speeding and wants 
// to know how much she'll be fined. 
// Task: Ask for the speed limit and her actual 
// speed. If she was over the limit, charge $5 
// for each mile over. Otherwise, say “No fine.” 

class Speeding{
    constructor(limit,actualSpeed){
        this.limit=limit
        this.actualSpeed=actualSpeed
    }
    fine(){
        if (this.actualSpeed>this.limit){
            console.log('Charge $5 ')
        }else console.log('No Fine')
    }

}
const sped=new Speeding(50,100)
sped.fine()