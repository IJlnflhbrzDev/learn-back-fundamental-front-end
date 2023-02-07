const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

let firstName = "Dimas";
let age = 20;

// prosess assignment/menganti/inisialisasi ualng value variabel firstname dan age yg ada di luar object 
({firstName, age} = profile);

console.log(firstName);
console.log(age);

/* output:
    John    
    18
*/




