// 6. Simple Grading System 
// Story: 
// A teacher wants to assign a letter grade. 
// Task: 
// Ask for a test score (0–100). Print the corresponding letter grade using the following rules: 
// ● 90+ = A 
// ● 80–89 = B 
// ● 70–79 = C 
// ● 60–69 = D 
// ● Below 60 = F

class Grader{
    constructor(score){
        this.score=score
    }
      gradings() {
        // ensure score is within range 0-100
        if (this.score <0 || this.score >100){
            console.log('Score needs to be from 0 to 100')
            return '';
        }
        const x = this.score;
        let grade;
    
        if (x >= 90) grade = 'A';
        else if (x >= 80) grade = 'B';
        else if (x >= 70) grade = 'C';
        else if (x >= 60) grade = 'D';
        else grade = 'F';
    
        console.log(`Grade for ${this.score} is ${grade}`);
        return grade;
    }

}
const grading=new Grader(91)
grading.gradings()