// 8. Paint Calculator 
// Story: Oliver wants to paint a wall. 
// Task: Ask for the wall's width and height in 
// feet. One can of paint covers 50 square 
// feet. Calculate and print how many cans he 
// needs (round up if needed). 

class Paint{
    constructor(width,height){
        this.width=width
        this.height=height
    }

    quantity(){
        const total=this.width *this.height
        const num=Math.ceil(total/50)
        console.log(`${num} cans`)
    }
}
const paint=new Paint(12,12)
paint.quantity()