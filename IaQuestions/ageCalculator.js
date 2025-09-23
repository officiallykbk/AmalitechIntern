// 2. Birthday Age Calculator 
// Story: 
// Liam wants to know how old he will be in a 
// certain year. 
// Task: 
// Ask the user for their birth year and a future 
// year. Print how old they will be in that year. 

class Age{
    constructor(birthYear,futureYear){
        this.birthYear=birthYear
        this.futureYear=futureYear
    }
    age(){
        // validating dates
        if (this.futureYear > this.birthYear){
            const futureAge=this.futureYear-this.birthYear
            console.log(`In ${this.futureYear} you'll be ${futureAge} years old`)
            return futureAge;

        }
        // logging message if dates are invalid
        else console.log('Future year needs to be greater than birth year')

    }
}
const age=new Age(2004,2023)
age.age()