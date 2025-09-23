//  Simple Multiplication Table 
// Story: 
// A student wants to study multiplication. 
// Task: 
// Ask the user for a number. Print its multiplication table up to 10. 

class Multiplication{
    constructor(num){
        this.num=num
    }
    table(){
        for (let i=1;i<11;i++){
            console.log(`${this.num} x ${i} = ${this.num*i}`)
        }
    }
}
const mul=new Multiplication(5)
mul.table()