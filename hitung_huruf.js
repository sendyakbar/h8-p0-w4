/* Diberikan function hitungHuruf(kalimat) yang akan menerima satu
parameter berupa string. Function akan me-return kata dari kalimat
yang memiliki jumlah perulangan huruf yang paling besar.
Contoh: "Today, is the greatest day ever!" akan me-return "greatest"
karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul
lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki
huruf berulang, return -1.*/

function hitungHuruf(kata) {
    var arr = kata.split(' ')
    var obj = {}
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = {}
        for (var j = 0; j < arr[i].length; j++) {
            if (!obj[arr[i]][arr[i][j]]) {
                obj[arr[i]][arr[i][j]] = 1
            }
            else {
                obj[arr[i]][arr[i][j]] += 1
            }
        }
    }
    var result = 0
    var arrNumber = []
    for (var i in obj) {
        var counter = 0
        for (var j in obj[i]) {
            if (obj[i][j] > 1) {
                counter += obj[i][j]
            }
        }
        arrNumber.push(counter)
        if (counter > result) {
            result = i
        }
    }
    if (!result) {
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