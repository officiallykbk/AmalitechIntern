// 3. Odd or Even Game 
// Story: 
// A robot checks if numbers are odd or even. 
// Task: 
// Ask the user to enter a number. Print 
// whether the number is odd or even. 

class OddEven{
    constructor(num){
        this.num=num
    }
    display(){
        if(this.num %2===0){
            console.log(`${this.num} is even`)
            return 'Even'
            
        }else{
            console.log(`${this.num} is odd`)
            return 'odd'
        }
        
    }
}
const EvenOdd=new OddEven(20)
EvenOdd.display()
const odeve=new OddEven(21)
odeve.display()
