// Leap Year Checker 
// Story: Ethan is curious if a year is a leap 
// year. 
// Task: Ask the user to enter a year. Print 
// whether it’s a leap year (divisible by 4, but 
// not by 100 unless also divisible by 400).

class LeapYear{
    constructor(year){
        this.year=year
    }
    checker(){
          if (this.year%4==0){
            if (this.year%100==0){
                if (this.year %400==0){
                    console.log('Is leap year')
                    return true;
                }
                else{
                    console.log('Not Leap year')
                    return false;
                }
            }else{
                console.log('Is leap Year')
                return true;
            }
        }else{
            console.log('Not Leap year')
            return false;
        }
    }

}
const yr=new LeapYear(2003)
yr.checker()