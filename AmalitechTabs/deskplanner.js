//  Classroom Desk Planner 
// Story: A teacher needs to arrange desks in 
// rows. 
// Task: Ask how many students are in the 
// class and how many desks fit in one row. 
// Calculate and print how many full rows are 
// needed and how many students will be in a 
// partially filled row. 

class Planner{
    constructor(n0ofStudents,DesksperRow){
        this.DesksperRow=DesksperRow
        this.n0ofStudents=n0ofStudents
    }
    plan(){
        const partialRows= this.n0ofStudents % this.DesksperRow
        const fullRows= (this.n0ofStudents - partialRows) / this.DesksperRow
        console.log(`${fullRows} full rows are needed and ${partialRows} students are in a partial row`)
    }
}

const planner= new Planner(51,10)
planner.plan()