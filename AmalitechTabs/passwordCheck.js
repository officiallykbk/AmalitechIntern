// Password Checker 
// Story: Lily wants to protect her game with a 
// password. 
// Task: Ask the user to enter a password. If it 
// matches a secret word (e.g., "lemon123"), 
// print “Access granted.” Otherwise, print 
// “Access denied.” 

class Password{
    #secret= "lemon123"
    constructor(password){
        this.password=password
    }
    check(){
        if(this.password===this.#secret) console.log("Access granted.");
        else console.log("Access Denied");
    }
}

const pass=new Password("lemon123z")
pass.check()