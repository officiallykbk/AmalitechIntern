// 4. Pizza Party Split 
// Story: 
// Emma orders a number of pizzas for a 
// party. Each pizza has 8 slices. 
// Task: 
// Ask how many pizzas she ordered and how 
// many people are at the party. 
// Print how many slices each person gets and 
// how many slices are left over.

class Pizza{
    constructor(noOfpizzas,attendees){
        this.noOfpizzas=noOfpizzas
        this.attendees=attendees
    }
    share(){
        if (this.noOfpizzas>0){
            const slices=(this.noOfpizzas*8)
            const leftOver=slices % this.attendees
            if(leftOver>0) console.log(`${leftOver} was left over`);
            const share=(slices-leftOver)/this.attendees
            console.log(`Each got ${share} slices`);
            return slices;
        }
        return 0;
     
    }
}
const piz=new Pizza(3,10)
piz.share()