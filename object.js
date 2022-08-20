// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const dog={
    sound : "bhaww",
    bark: function(){
        console.log(this.sound);
    }
}
console.log(dog.bark());
// 1.  reUse function through setPrototypeOf
const cat = {
    sound:"meow"
}
Object.setPrototypeOf(cat, dog);
console.log(cat.bark());

// 1.  reUse function through reference of function 
const goat = {
    sound:"meaaaah",
    barkOuter: dog.bark,
}
console.log(goat.barkOuter());

// 1.  reUse function through binding the function with object
const bat = {
    sound:"eeeeaaaaww"
}

let batBarkSound=dog.bark.bind(bat);
console.log(batBarkSound());
