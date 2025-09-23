// Bus Ticket Discount 
// Story: 
// Children and seniors get discounted bus tickets. 
// Task: 
// Ask the user for their age. If age is under 12 or over 65, print "Discounted ticket". Otherwise, 
// print "Full price". 

class Ticket{
    constructor(age){
        this.age=age
    }
   discount() {
    // validating discount qualification
        if (this.age <= 12 || this.age >= 65) {
            console.log('Discounted ticket');
        } else {
            console.log('Pay Full price');
        }
    }
}
const ticker=new Ticket(70)
ticker.discount()