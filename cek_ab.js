/* Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat
karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak
ditemukan sama sekali, kembalikan nilai false. */

function checkAB(str) {
  // you can only write your code here!
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      if (str[i + 4] === 'b') {
        return true
      } else {
        return false
      }
    }
    else if (str[i] === 'b') {
      if (str[i + 4] === 'a') {
        return true
      } else {
        return false
      }
    }
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false