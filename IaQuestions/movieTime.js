//  Movie Time Calculator 
// Story: Chloe wants to watch several movies 
// in a row. 
// Task: Ask how many movies and how long 
// each one is in minutes. Calculate the total 
// watch time in hours and minutes. 

class MovieCalc{
    constructor(n0ofMovies,watchtime){
        this.n0ofMovies=n0ofMovies
        this.watchtime=watchtime

    }
    watch(){
        const totalTime=this.n0ofMovies * this.watchtime
        const minutes=totalTime % 60
        const hours=Math.floor(totalTime/60)
        console.log(`Total watch time is ${hours} hours and ${minutes} minutes`)
    }
}
const Calc=new MovieCalc(3,20)
Calc.watch()