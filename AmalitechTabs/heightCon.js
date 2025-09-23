// Height Converter 
// Story: Zoe wants to convert her height from 
// feet/inches to centimeters. 
// Task: Ask for feet and inches separately. 
// Convert to cm using the formula: 
// cm = (feet × 12 + inches) × 2.54 
// Print the result. 

class HeightConverter{
    constructor(feet, inches){
        this.feet=feet
        this.inches=inches
    }
    result(){
        const cm = (this.feet * 12 + this.inches) * 2.54 
        console.log(`${cm} cm`)
    }
}
const height=new HeightConverter(5,1)
height.result()