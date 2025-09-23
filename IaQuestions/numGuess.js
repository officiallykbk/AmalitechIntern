//  Number Guessing Feedback 
// Story: 
// A guessing game checks if the player's number is too high, too low, or correct. 
// Task: 
// Set a secret number (e.g. 7). Ask the user to guess. Print feedback: 
// ● "Too low" 
// ● "Too high" 
// ● "Correct!" 

class Guess{
    #max=100
    #min=1
    #secret= Math.floor(Math.random() * (this.#max - this.#min + 1)) + this.#min

    constructor(guess){
        this.guess=guess
    }

    checking(){
        console.log(`The secret is ${this.#secret}`)
        while (this.guess!==this.#secret){
            if(this.guess>this.#secret)console.log('Try Again');
            else console.log('Too low');
            
            this.guess=prompt('Enter your guess \n')
        }
        console.log(`Correct`)
        return 'Correct'
    }

}
const guess=new Guess(20)
guess.checking()