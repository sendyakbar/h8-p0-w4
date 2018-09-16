/* Diberikan function hitungHuruf(kalimat) yang akan menerima satu
parameter berupa string. Function akan me-return kata dari kalimat
yang memiliki jumlah perulangan huruf yang paling besar.
Contoh: "Today, is the greatest day ever!" akan me-return "greatest"
karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul
lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki
huruf berulang, return -1.*/

function hitungHuruf(kata) {
  // you can only write your code here!
  var arr = kata.split(' ')
  var temp = ''
  var result = ''
  var maxIndex = 0

  for (var i = 0; i < arr.length; i++) {
      temp = arr[i]
      var count = 0
      for (var j = 0; j < temp.length; j++) {
          for (var k = j + 1; k < temp.length; k++) {
              if (temp[j] === temp[k]) {
                  count++
                  if (count > maxIndex) {
                      maxIndex = count
                      result = arr[i]
                  }
              }
          }
      }
  }
  if (maxIndex <= 0) {
      return -1
  }
  return result
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
console.log(hitungHuruf('abcde fghijk lmnop')); // -1