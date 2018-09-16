/* Diberikan function hitungHuruf(kalimat) yang akan menerima satu
parameter berupa string. Function akan me-return kata dari kalimat
yang memiliki jumlah perulangan huruf yang paling besar.
Contoh: "Today, is the greatest day ever!" akan me-return "greatest"
karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul
lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki
huruf berulang, return -1.*/

function hitungHuruf(kata) {
    // you can only write your code here!
    var arr = kata.split(' ');
    var letter = '';
    for (var i = 0; i < arr.length; i++) {
      var current = arr[i][0]
      var count = 0;
      for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === current) {
          var current = arr[i][j]
          count = count + 1;
          if (count > 0) {
            modus = count;
            letter = arr[i][j];
          }
        }
      }
    }return letter
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  // console.log(hitungHuruf('I am a passionate developer')); // passionate
  // console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  // console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  // console.log(hitungHuruf('mengayuh perahu di danau')); // danau