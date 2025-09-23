// 5. Book Reading Tracker 
// Story: 
// Jay reads a certain number of pages per 
// day. 
// Task: 
// Ask how many pages are in a book and how 
// many pages Jay reads each day. 
// Calculate how many days it will take him to 
// finish the book (round up if needed). 

class BookReader{
    constructor(totalPages,pagesPerDay){
        this.totalPages=totalPages
        this.pagesPerDay=pagesPerDay
     
    }
    daysToFinish(){
        const days=Math.ceil(this.totalPages/this.pagesPerDay)
        console.log(`${days} days`)
        return days;
    }

}
const readings=new BookReader(200,10)
readings.daysToFinish()