//  Temperature Converter 
// Story: 
// A weather app needs to convert temperatures. 
// Task: 
// Ask the user to enter a temperature in Celsius. Convert it to Fahrenheit and display the result. 
// Formula: F = (C × 9/5) + 32

class TempCon{
    constructor(celsius){
        this.celsius=celsius
    }
    fahrenheit(){
        const F = (this.celsius * 9/5) + 32
        console.log(`${this.celsius} celsius to ${F}`)
        return F
    }
}
const convert=new TempCon(37)
convert.fahrenheit()
