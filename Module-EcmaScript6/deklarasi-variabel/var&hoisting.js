// ## Deklarasi var dan Hoisting

// Variabel yang dideklarasikan menggunakan var akan selalu diangkat pada 
// tingkatan atas sebuah fungsi walaupun kita menuliskannya bukan pada tingkatan atas fungsi.
// Proses pengangkatan deklarasi variabel ini disebut dengan hoisting. 


//  CONTOH 1 
function makeTea1 (isColdBoolean) {
  var tea1 = '';
  if (isColdBoolean) {
    tea1 = 'Make an Ice Tea!';
  } else {
    tea1 = 'Make a Hot Tea!';
  }
  return tea1;
}
 
console.log(makeTea1(true));
 
/* Output:
  Make a Hot Tea!
*/


//  CONTOH 2
function makeTea2 (isColdBoolean) {
  var tea2 = '';
  if (isColdBoolean) {
    tea2 = 'Make an Ice Tea!';
  } else {
    tea2 = 'Make a Hot Tea!';
  }
  return tea2;
}
 
console.log(makeTea2(false));
 
/* Output:
    Make a Hot Tea!
*/



// CONTOH 3  
function getFood() {
// Bahkan karena proses hoisting inilah kita bisa menginisialisasi nilai dan menggunakan variabel sebelum ia dideklarasikan. 
// Hal ini sedikit tidak masuk akal, bukan? Berikut adalah contohnya.
  food = 'choocolate';
  console.log(food);
  var food;

}
 
getFood();
 
/* Output:
    choocolate
*/