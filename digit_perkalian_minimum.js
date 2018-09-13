/* Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima
satu parameter angka. Function akan mengembalikan jumlah digit minimal
dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika
angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6.
Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8
atau 4 * 6, sehingga function akan me-return 2. */

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var bagi = 0;
    var digit = '';
    var arr = [];
    for (var i = 0; i <= angka; i++) {
        if (angka % i === 0) {
            bagi = angka / i
            digit = String(bagi) + String(i)
            arr.push(digit)
        }
    }
    var digitMinimum = arr[0].length;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length < digitMinimum) {
            digitMinimum = arr[i].length
        }
    } return digitMinimum
}
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

