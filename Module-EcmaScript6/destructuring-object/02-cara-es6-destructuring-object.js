const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName, lastName, age} = profile;
 
console.log(firstName, lastName, age);

/* output:
    John Doe 18
*/


const book = {
    "title": "Manusia Setengah Salmon",
    "author": "Raditya Dika",
    "publisher": {
      "name": "Gagas Media",
      "address": "Jakarta Selatan"
    }
  }
  
  // destructuring
  const {title, author, publisher:{name, address}} = book;
  
  console.log(title, author, name, address);
/* output:
     Manusia Setengah Salmon Raditya Dika Gagas Media Jakarta Selatan
*/ 