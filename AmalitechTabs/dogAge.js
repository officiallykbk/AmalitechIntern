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
        console.log(`Your dog is ${this.age * 7} years old`)
    }

}
const age = new DogAge(7)
age.result()