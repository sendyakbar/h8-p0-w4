/* Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat
karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak
ditemukan sama sekali, kembalikan nilai false. */

function checkAB(num) {
    for (var i = 0; i < num.length; i++) {
      if (num[i] == 'a') {
        for (var j = i; j < num.length; j++) {
          var temp = temp + 1
          if (temp >= 3 && num[j] == 'b') {
            return true
          }
        }
        temp = 0
      }
      else if (num[i] == 'b') {
        for (var k = i; k < num.length; k++) {
          var temp = temp + 1
          if (temp >= 3 && num[k] == 'a') {
            return true
          }
        }
      }
      temp = 0
    }
    return false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false