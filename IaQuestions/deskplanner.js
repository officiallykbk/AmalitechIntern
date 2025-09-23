//  Classroom Desk Planner 
// Story: A teacher needs to arrange desks in 
// rows. 
// Task: Ask how many students are in the 
// class and how many desks fit in one row. 
// Calculate and print how many full rows are 
// needed and how many students will be in a 
// partially filled row. 

class Planner{
    constructor(noOfStudents,DesksperRow){
        this.DesksperRow=DesksperRow
        this.noOfStudents=noOfStudents
    }
    plan(){
        const partialRows= this.noOfStudents % this.DesksperRow
        const fullRows= (this.noOfStudents - partialRows) / this.DesksperRow
        console.log(`${fullRows} full rows are needed and ${partialRows} students are in a partial row`)
    }
}

const planner= new Planner(51,10)
planner.plan()