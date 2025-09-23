//  Dog Age Calculator 
// Story: Aria wants to know her dog's age in 
// "dog years." 
// Task: Ask the user for their dog’s age in 
// human years. Multiply it by 7 and print the 
// result as the dog’s age in dog years. 

class DogAge{
    constructor(age){
        this.age=age
    }
    result(){
        if (this.age >0) console.log(`Your dog is ${this.age * 7} years old`);
        else console.log(`Age needs to be positive/greater than 0 \nif you mean ${Math.abs(this.age)},\nYour dog is ${Math.abs(this.age) * 7} years old `)
    }

}
const age = new DogAge(-9)
age.result()